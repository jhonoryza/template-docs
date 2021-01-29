---
title: Customize Forgot password
description: ''
position: 14
category: Forgot password
---

## Customize the sending email process

The feature works exactly as Laravel UI or Laravel Breeze, but if you want to override for any reason the sending email behavior, you have the controller on `app/Http/Controllers/JsonApiAuth/PasswordResetLinkController`.

Here you can add any logic, customize the way to creates the notification token or customize the response.

## Customize the reset password notification

As this is a common scenario you can override the notification, 
on `app/Notifications/JsonApiAuth/ResetPasswordNotification.php`, 

it extends from `Illuminate\Auth\Notifications\ResetPassword`, so you can override any method here to customize the notification.

You can even create your own mailable and notification, just remember that the link for the notification is: 

```php
$link = config('json-api-auth.new_password_form_url') . "?token={$this->token}&email={$notifiable->getEmailForPasswordReset()}";
```

The reason to work with a url from config file, is to set a url for a reset password form, totally separeted from the server app.
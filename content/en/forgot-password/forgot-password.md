---
title: Forgot password
description: ''
position: 12
category: Forgot password
---

<alert type="warning">

In order to make work this feature you should use a service as Mailtrap.io or Mailhog and add credentials on the `.env` file.

</alert>

## Endpoint

The default endpoint to send a forgot password email is:

```
http://your-project.test/api/forgot-password
```

## Route method

The route method is `POST`

## User fields

Fields required are:

- email

## Postman example

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-forgot-password-screenshot.png)

## Define a link for reset password notification

This feature sends an email notification with a link to reset password.

To build the link, it grabs the url from `config/json-api-auth.php` where you can set the endpoint for a frontend reset form url by changing the key:

```php
/*
|--------------------------------------------------------------------------
| Json Api Forgot Password Configuration
|--------------------------------------------------------------------------
|
| This value is used to instruct the package the url for the notification
| This would be a page of your frontend new password form.
| Its not related to any backend route take that in mind.
|
*/

'new_password_form_url' => 'https://your-frontend-app.any/new-password',
```

This is useful because this is an API feature, so the behavior is not to redirect to a server render view, the expected behavior is that the link goes to a password reset form in a frontend application totally separated from the backend.

## 🍿 Using forgot password feature video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
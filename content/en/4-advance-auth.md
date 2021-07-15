---
title: Advance Authentication
description: ''
position: 4
category: Authentication
---

| URI                                  | METHOD |
|--------------------------------------|--------|
| /api/forgot-password                 | POST   |
| /api/reset-password                  | POST   |
| /api/email/verification-notification | POST   |
| /api/confirm-password                | POST   |

## Test with Postman

You can import the <a href="https://drive.google.com/file/d/1zAKR2-JsqdwaETCnPUxu1gVpWe5pdhrC/view?usp=sharing" target="_blank">postman collection</a>
and import <a href="https://drive.google.com/file/d/1sSNUs_tFzytC2ih_vH_AGhwev7m0kK7X/view?usp=sharing" target="_blank">the postman environment</a>

Just replace the `{{base_url}}` variable for your app url, you can send requests with json data to test all endpoints.

## Forgot Password

Field required:

```json
{
  "email": "john@doe.com"
}
```

* This endpoint does not require a token, because it is used if the user lost the password.

#### Define a link for reset password notification

In `config/json-api-auth.php` you can set an endpoint:

```php
'new_password_form_url' => env('FRONTEND_APP_URL', 'http://frontend.test') .'/new-password',
```

You can change it directly there or add a variable in `.env` file `FRONTEND_APP_URL`.

## Email Verification

This request does not require any field only the token.

#### Define a redirect endpoint

In `config/json-api-auth.php` you can set an endpoint:

```php
'email_account_was_already_verified_url' =>  env('FRONTEND_APP_URL', 'http://frontend.test') . '/already-verified',

'email_account_just_verified_url' => env('FRONTEND_APP_URL', 'http://frontend.test') . '/verified', 
```

## Password Verification

Fields required for password verification:

```json
{
  "password": "YourPassword"
}
```

## Customize the advance authentication process

You can customize the behavior of any endpoint in `app/Http/` directory:

| VALIDATION                                                       | CONTROLLER                                                                         |
|------------------------------------------------------------------|------------------------------------------------------------------------------------|
| <small>Requests/JsonApiAuth/PasswordResetLinkRequest.php</small> | <small>Controllers/JsonApiAuth/PasswordResetLinkController.php</small>             |
| <small>Requests/JsonApiAuth/NewPasswordRequest.php</small>       | <small>Controllers/JsonApiAuth/NewPasswordController.php</small>                   |
| <small>no has request validation</small>                         | <small>Controllers/JsonApiAuth/EmailVerificationNotificationController.php</small> |
| <small>no has request validation</small>                         | <small>Controllers/JsonApiAuth/ConfirmablePasswordController.php</small>           |
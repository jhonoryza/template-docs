---
title: Verify email
description: ''
position: 19
category: Email verification
---

## Endpoint

The default endpoint to verify email account is:

```
http://your-project.test/api/verify-email/{id}/{hash}
```

## Route method

The route method is `GET`

## User fields

This route does not require any user field.

## How it works

The email verification feature send an email notification with a link to this route.

The server verify the token and then redirect to some frontend endpoint, the package provides two different endpoints:

- One if the account is verified.
- Another if the token was already verified.

That because maybe a frontend application has different views for those endpoints.

## Customize redirect endpoints

In config file `config/json-api-auth.php` you can set both endpoints:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Frontend Endpoints Of Verify Email Feature
|--------------------------------------------------------------------------
|
| This values are used to redirect user when email verified validation pass
| First one is use to redirect users if email account its already verified
| Second is use to redirect users if email account its verified at that moment
|
*/

'email_account_was_already_verified_url' => 'https://your-frontend.com/already-verified',

'email_account_just_verified_url' => 'https://your-frontend.com/verified',
```

## 🍿 Verify email feature video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
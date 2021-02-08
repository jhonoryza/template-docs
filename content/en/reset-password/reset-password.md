---
title: Reset password
description: ''
position: 15
category: Reset password email
---

<alert type="warning">

In order to use this endpoint you need a valid token from a `reset-password` notification, so please ensure to use the forgot password endpoint and get the email notification before use this feature.

</alert>

## Endpoint

The default endpoint to reset password is:

```
http://your-project.test/api/reset-password
```

## Route method

The route method is `POST`

## User fields

Fields required to reset a password are:

- email
- password
- password_confirmation
- token

Those are the same as a Laravel UI or Laravel Breeze reset password form, but using form-data to send the inputs.

You can use postman to test the endpoint.

## Postman example

![Here a postman image to instruct how to send a request to register a user](/images/postman-reset-password-screenshot.png)

## 🍿 Reset password feature video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/hEoqL0MHRp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Customize the reset password workflow

You can customize the response or add any logic in the controller `app/Http/Controllers/JsonApiAuth/NewPasswordController.php`.

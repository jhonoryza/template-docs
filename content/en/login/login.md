---
title: Login
description: ''
position: 5
category: Login
---

## Endpoint

The default endpoint to login a user is:

```
http://your-project.test/api/login
```

## Route method

The route method is `POST`

## User fields

Fields required to register a user:

- email
- password

Those are the same as a Laravel UI or Laravel Breeze register form, but using form-data to send the inputs.

You can use postman to test the endpoint.

## Postman example

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-login-user-screenshot.png)

## 🍿 Login a user video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/Yf_E1XK_S-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
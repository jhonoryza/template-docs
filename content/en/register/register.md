---
title: Register a user
description: ''
position: 2
category: User registration
---

## Endpoint

The default endpoint to register a user is:

```
http://your-project.test/api/register
```

## Route method

The route method is `POST`

## User fields

Fields required to register a user:

- name
- email
- password
- password_confirmation

Those are the same as a Laravel UI or Laravel Breeze register form, but using form-data to send the inputs.

You can use postman to test the endpoint.

## Postman example

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-register-user-screenshot.png)

## 🍿 Register a user video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
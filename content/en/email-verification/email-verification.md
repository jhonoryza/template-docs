---
title: Email verification
description: ''
position: 18
category: Email verification
---

<alert type="warning">

This endpoint requires authentication so the request must have to include a bearer token from login or register endpoints.

</alert>

## Endpoint

The default endpoint to send an email verification notification is:

```
http://your-project.test/api/email/verification-notification
```

## Route method

The route method is `POST`

## User fields

This endpoint does not require any user field.

You can use postman to test the endpoint.

## Postman example

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-email-verification-notification-screenshot.png)

## 🍿 Using email verification feature video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
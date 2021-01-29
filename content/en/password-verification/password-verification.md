---
title: Password verification
description: ''
position: 22
category: Password verification
---

<alert type="warning">

This endpoint requires authentication so the request must have to include a bearer token from login or register endpoints.

</alert>

## Endpoint

The default endpoint to password verify feature is:

```
http://your-project.test/api/confirm-password
```

## Route method

The route method is `POST`

## User fields

Fields required to register a user:

- password

You can use postman to test the endpoint.

## Postman example

![Here a postman image to instruct how to send a request to register a user](/images/postman-confirm-password-screenshot.png)

## 🍿 Using password verification feature video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
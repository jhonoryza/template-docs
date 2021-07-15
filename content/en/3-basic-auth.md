---
title: Simple Authentication
description: ''
position: 3
category: Authentication
---

| URI           | METHOD |
|---------------|--------|
| /api/register | POST   |
| /api/login    | POST   |
| /api/logout   | GET   |

## Test with Postman

You can import the <a href="https://drive.google.com/file/d/1zAKR2-JsqdwaETCnPUxu1gVpWe5pdhrC/view?usp=sharing" target="_blank">postman collection</a>
and import <a href="https://drive.google.com/file/d/1sSNUs_tFzytC2ih_vH_AGhwev7m0kK7X/view?usp=sharing" target="_blank">the postman environment</a>

Just replace the `{{base_url}}` variable for your app url, you can send requests with json data to test all endpoints.

## Register

Fields required to register a user:

```json
{
  "name": "John Doe",
  "email": "john@doe.com",
  "password": "YourPassword",
  "password_confirmation": "YourPassword"
}
```

## Login

Fields required to login a user:

```json
{
  "email": "john@doe.com",
  "password": "YourPassword"
}
```

## Logout

The logout request only needs the token.

## Customize the basic authentication process

| VALIDATION                                                       | CONTROLLER                                                             |
|------------------------------------------------------------------|------------------------------------------------------------------------|
| <small>app/Http/Requests/JsonApiAuth/RegisterRequest.php</small> | <small>app/Http/Controllers/JsonApiAuth/RegisterController.php</small> |
| <small>app/Http/Requests/JsonApiAuth/LoginRequest.php</small>    | <small>app/Http/Controllers/JsonApiAuth/LoginController.php</small>    |
| <small>no have request</small>                                   | <small>app/Http/Controllers/JsonApiAuth/LogoutController.php</small>   |
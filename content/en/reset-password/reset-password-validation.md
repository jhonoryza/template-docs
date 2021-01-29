---
title: Reset password validation
description: ''
position: 16
category: Reset password email
---

## Rules

Here the validation rules to reset a password:

```
email
    required
    valid email format
password
    required
    minimum of 8 characters length
password_confirmation
    the same as password
token
    a valid token
```

## Customize reset password validation rules

You can go to `app/Http/Requests/JsonApiAuth/NewPasswordRequest.php`, then you can edit the `rules` method to add as many validation rules as the project needs.
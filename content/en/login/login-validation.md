---
title: Login validation
description: ''
position: 6
category: Login
---

## Rules

Here the validation rules to login a user:

```
email
    required
    valid email format
password
    required
    minimum of 8 characters length
```

## Customize login validation rules

You can go to `app/Http/Requests/JsonApiAuth/LoginRequest.php`, then you can edit the `rules` method to add as many validation rules as the project needs.

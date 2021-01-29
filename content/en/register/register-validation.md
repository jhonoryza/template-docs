---
title: Register validation
description: ''
position: 3
category: User registration
---

## Rules

Here the validation rules to register a user:

```
name
    required
email
    required
    valid email format
password
    required
    minimum of 8 characters length
    it must match with password_confirmation field
password_confirmation
    all the same as password field
```

## Customize register validation rules

You can go to `app/Http/Requests/JsonApiAuth/RegisterRequest.php`, then you can edit the `rules` method to add as many validation rules as the project needs.

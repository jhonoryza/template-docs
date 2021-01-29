---
title: Forgot password validation
description: ''
position: 13
category: Forgot password
---

## Rules

Here the validation rules to send a reset password notification:

```
email
    required
    valid email format
```

## Customize forgot password validation rules

You can go to `app/Http/Requests/JsonApiAuth/PasswordResetLinkRequest.php`, then you can edit the `rules` method to add as many validation rules as the project needs.

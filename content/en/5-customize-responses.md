---
title: Customize Responses
description: ''
position: 5
category: Customizations
---

Login and Register controllers has a trait that handles how that the package return user data.

In `app/Http/Controllers/JsonApiAuth/Traits/HasToShowApiTokens.php`:

```php
public function showCredentials($user, $code = 200, $showToken = true)
{
//    $response = [
//        'message' => 'success',
//        'user' => $user,
//    ];
    
    // Instead of the whole User model
        $response = [
        'message' => 'success',
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
        ],
    ];
}
```

## Do not return a token on register

By default, the package returns a token with login and register requests, to auto-login a user after registration.

You can change this behavior to force login after registration in `config/json-api-auth.php`:

```php
'show_token_after_register' => false,
```
---
title: Customize tokens
description: ''
position: 8
category: Customize Login & Register
---

The package use the string `App` to create tokens, but you can change the string in `config/json-api-auth.php`:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Token id Configuration
|--------------------------------------------------------------------------
|
| This value is used to create tokens in Login and Register features
|
*/

'token_id' => 'App',
```

Maybe you want to override directly the logic to create a token.

## Customizing token creation logic

The package provides a trait where you can handle the token creation.

In `app/Http/Controllers/JsonApiAuth/Traits/HasToShowApiTokens.php`:

```php
protected function createToken(User $user)
{
    $token = $user->createToken(
        config('json-api-auth.token_id'), // In this line you can customize the token string
        config('json-api-auth.scopes')
    );

    // ...
}
```
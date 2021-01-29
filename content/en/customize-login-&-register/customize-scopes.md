---
title: Customize scopes
description: ''
position: 9
category: Customize Login & Register
---

Some approach to handle permissions is to use scopes on tokens.

The package consider this and you can set an amount of scopes that would be set when a user is login or register, you can add an array of scopes that would be added to the user token.

In `config/json-api-auth.php`:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Scopes
|--------------------------------------------------------------------------
|
| Passport & Sanctum use scopes to validate abilities,
| Optionally you can add scopes here, that would be added on Login and register
|
*/

'scopes' => [

],
```

## Being more granular about scopes

If you need to handle more complex logic to assign scopes you can always customize the behavior in `app/controllers/JsonApiAuth/Traits/HasToShowApiTokens.php`:

```php
protected function createToken(User $user)
{
    $token = $user->createToken(
        config('json-api-auth.token_id'),
        config('json-api-auth.scopes'), // In this line you can customize how to assign scopes to a user token
    );

    // ...
}
```
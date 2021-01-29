---
title: Customize Logout
description: ''
position: 11
category: Logout
---

## Customize the behavior when a user logout:

Passport and Sanctum handle revoking tokens in different way, Passport can update tokens to revoke them or delete them, Sanctum just delete them, but the package handle this for you, so you only need to set a value in `config/json-api-auth.php`:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Logout Configuration
|--------------------------------------------------------------------------
|
| This value is used to instruct the package the behavior with tokens
| Revoke only the token from the request, revoke all tokens or delete them
| You should only add one value as true, if all are false the default action
| Would be to delete all tokens.
|
*/

'revoke_only_current_token' => false,

'revoke_all_tokens' => false,

'delete_current_token' => false,

'delete_all_tokens' => true,

```

By default the package comes with the value set to `delete_all_tokens`, to avoid storing unnecesary tokens, but you can change this behavior, just remember to set only one of this values as true.

## Customizing the logout process

Maybe you want to add an event when user logout or customize the response when user is logged out successfully, you can do this on `app/Http/Controllers/JsonApiAuth/LogoutController.php`:

```php
public function __invoke(Request $request)
{
    // Here you can add any logic before revoking the current user token
    
    (new RevokerFactory)->make()->{$this->applyRevokeStrategy()}();

    return Response([
        'message' => 'You are successfully logged out',
    ], 200);
}
```
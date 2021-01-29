---
title: Customize data to return
description: ''
position: 7
category: Customize Login & Register
---

Login and Register controllers has a trait that handles the way that the package return user data.

In `app/Http/Controllers/JsonApiAuth/Traits/HasToShowApiTokens.php` you can customize the response to return the user data.

```php
public function showCredentials($user, $code = 200, $showToken = true)
{
    $response = [
        'message' => 'success',
        'user' => $user,
    ];
    
    // ...
}
```

## An example

Maybe you does not want or need to return all the user model, you can grab just the user name and email:

```php
public function showCredentials($user, $code = 200, $showToken = true)
{
    $response = [
        'message' => 'success',
        'user' => [
            'name' => $user->name,
            'email' => $user->email,
        ],
    ];

    // ...
}
```

Of course you can make more complex things like, call an accessor or any method of the user Model.

## Do not return a token on register

The default behavior is that a user that register directly return a token to get authenticated.

Maybe you want that a user login after registration, to do this you can manually avoid that the register endpoint returns a token, in ```config/json-api-auth.php``` just change the value from true to false:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Show Token After Registration
|--------------------------------------------------------------------------
|
| This value is used to instruct the package if the user would be
| Authenticated after a successful user registration
| To return the JWT token with the response.
|
*/

'show_token_after_register' => false,
```
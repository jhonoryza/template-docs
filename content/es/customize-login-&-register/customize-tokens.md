---
title: Personalizar tokens
description: ''
position: 8
category: Personalizar inicio de sesión y registro
---

El paquete usa la cadena de texto `App` para crear tokens, pero puede cambiarla en `config/json-api-auth.php`:

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

Tal vez desee modificar directamente la lógica para crear un token.

## Personalizar la lógica de creación de tokens

El paquete proporciona un `trait` en el que se puede manejar la creación del token.

En `app/Http/Controllers/JsonApiAuth/Traits/HasToShowApiTokens.php`:

```php
protected function createToken(User $user)
{
    $token = $user->createToken(
        config('json-api-auth.token_id'), // Puedes modificar directamente la cadena de texto aquí.
        config('json-api-auth.scopes')
    );

    // ...
}
```
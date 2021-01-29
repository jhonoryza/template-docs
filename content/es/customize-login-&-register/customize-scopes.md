---
title: Personalizar scopes
description: ''
position: 9
category: Personalizar inicio de sesión y registro
---

Un enfoque para manejar los permisos es usar `scopes` en los tokens.

El paquete considera esto y puede establecer una cantidad de `scopes` que se agregan cuando un usuario inicia sesión o se registra, puedes agregar un arreglo de `scopes` que se agregaran al token de usuario.

En `config/json-api-auth.php`:

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

Si necesitas manejar una lógica más compleja para asignar `scopes`, siempre puedes personalizar el comportamiento en `app/controllers/JsonApiAuth/Traits/HasToShowApiTokens.php`:

```php
protected function createToken(User $user)
{
    $token = $user->createToken(
        config('json-api-auth.token_id'),
        config('json-api-auth.scopes'), // Aquí puedes personalizar la forma de agregar scopes a los tokens
    );

    // ...
}
```
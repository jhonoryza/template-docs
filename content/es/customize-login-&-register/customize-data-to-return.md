---
title: Personalizar respuestas
description: ''
position: 7
category: Personalizar inicio de sesión y registro
---

Los controladores de inicio de sesión y registro tienen un `trait` que maneja la forma en que el paquete devuelve los datos del usuario.

En `app/Http/Controllers/JsonApiAuth/Traits/HasToShowApiTokens.php` puedes personalizar la respuesta para devolver los datos del usuario.

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

## Un ejemplo

Tal vez no desees o necesites devolver todo el modelo de usuario, puedes retornar solo el nombre de usuario y el correo electrónico:

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

Por supuesto, puedes hacer cosas más complejas como, llamar a un `accessor` o cualquier método del modelo de usuario.


## No retornar un token al registrarse

El comportamiento predeterminado es que cuando un usuario se registra directamente devuelve un token para autenticarse.

Tal vez desee que un usuario inicie sesión después del registro, para hacer esto puedes editar el archivo de configuración para que el endpoint del registro devuelva o no un token, en `config/json-api-auth.php` simplemente cambie el valor de verdadero a falso:

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
---
title: Personalizar el cierre de sesión
description: ''
position: 11
category: Cerrar sesión
---

## Personalice el comportamiento cuando un usuario cierra la sesión:

Passport y Sanctum manejan la revocación de tokens de manera diferente, Passport puede actualizar los tokens para revocarlos o eliminarlos, Sanctum simplemente los elimina, pero el paquete se encarga de esto, por lo que solo necesitas establecer un valor en `config/json-api-auth.php`:

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

De forma predeterminada, el paquete viene con el valor establecido en `delete_all_tokens`, para evitar almacenar tokens innecesarios, pero puede cambiar este comportamiento, solo recuerde establecer solo uno de estos valores como verdadero.

## Personalización del proceso de cierre de sesión

Tal vez desee agregar un evento cuando el usuario cierre la sesión o personalizar la respuesta cuando el usuario cierre la sesión correctamente, puede hacer esto en `app/Http/Controllers/JsonApiAuth/LogoutController.php`:

```php
public function __invoke(Request $request)
{
    // Aquí puedes agregar la logica que necesites antes de revocar el token
    
    (new RevokerFactory)->make()->{$this->applyRevokeStrategy()}();

    return Response([
        'message' => 'You are successfully logged out',
    ], 200);
}
```
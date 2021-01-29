---
title: Usando el middleware verfied
description: ''
position: 21
category: Verificación de email
---

El paquete agrega una ruta de muestra con el middleware `verified` en el archivo `routes/api.php`.

Si remueves los comentarios, la ruta se vería así:

```php
Route::get('/verified-middleware-example', function () {
   return response()->json([
       'message' => 'the email account is already confirmed now you are able to see this message...',
   ]);
})->middleware(AuthKit::getMiddleware(), 'verified');
```

Para usar el middleware `verified`, debes agregar tambien el middleware `auth:api` si estás usando Laravel Passport o el middleware `auth:sanctum` si está usando Laravel Sanctum.

<alert>

El llamado a `AuthKit::getMiddleware()` devuelve el middleware correcto para Passport o Sanctum automaticamente.

<br>

Puedes removerlo, pero no olvides agregar el middleware de autenticación correcto en su lugar `auth:api` para Passport o `auth:sanctum` para Sanctum.

</alert>

Esto se debe a que las API no tienen estado, por lo que para saber si el usuario tiene una cuenta de correo electrónico verificada, primero es necesario obtener el usuario, por lo que el middleware `auth:api` o `auth:sanctum` permite a obtener el usuario por medio del `bearer token`.

## 🍿 Usando el middleware "verified"

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
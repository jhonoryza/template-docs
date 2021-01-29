---
title: Verificar email
description: ''
position: 19
category: Verificación de email
---

## Endpoint

El endpoint predeterminado para verificar la cuenta de correo electrónico es:

```
http://your-project.test/api/verify-email/{id}/{hash}
```

## Método de ruta

El método de ruta es `GET`

## Campos de usuario

Esta ruta no requiere ningún campo de usuario.

## Cómo funciona

El servidor verifica el token y luego lo redirecciona a la URL de la aplicación frontend, el paquete proporciona dos URLs diferentes:

- Uno si la cuenta está verificada.
- Otro si el token ya estaba verificado.

Eso se debe a que tal vez una aplicación de frontend tenga diferentes vistas para estas URLs.

## Personalizar URLs de redireccionamiento

En el archivo `config/json-api-auth.php` puede establecer ambas URLs:

```php
/*
|--------------------------------------------------------------------------
| Json Api Authentication Frontend Endpoints Of Verify Email Feature
|--------------------------------------------------------------------------
|
| This values are used to redirect user when email verified validation pass
| First one is use to redirect users if email account its already verified
| Second is use to redirect users if email account its verified at that moment
|
*/

'email_account_was_already_verified_url' => 'https://your-frontend.com/already-verified',

'email_account_just_verified_url' => 'https://your-frontend.com/verified',
```

## 🍿 Verificar correo electrónico

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
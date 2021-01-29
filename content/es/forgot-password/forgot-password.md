---
title: Envio de notificación
description: ''
position: 12
category: Notificación para restablecer contraseña
---

<alert type="warning">

Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador `bearer token`, este lo puedes generar en los endpoints de inicio de sesión o registro.

</alert>

## Endpoint

El endpoint predeterminado para enviar un correo electrónico para reiniciar la contraseña es:

```
http://your-project.test/api/forgot-password
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Los campos obligatorios son:

- email

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-forgot-password-screenshot.png)

## Definir un enlace para la notificación de restablecimiento de contraseña

Esta función envía una notificación por correo electrónico con un enlace para restablecer la contraseña.

Para construir el enlace, toma la URL desde `config/json-api-auth.php` donde se puede establecer el endpoint para la URL del formulario de reinicio de contraseña:

```php
/*
|--------------------------------------------------------------------------
| Json Api Forgot Password Configuration
|--------------------------------------------------------------------------
|
| This value is used to instruct the package the url for the notification
| This would be a page of your frontend new password form.
| Its not related to any backend route take that in mind.
|
*/

'new_password_form_url' => 'https://your-frontend-app.any/new-password',
```

Esto es útil porque se trata de una función de la API, por lo que el comportamiento no es redirigir a una vista de procesamiento del servidor, el comportamiento esperado es que el enlace vaya a un formulario de restablecimiento de contraseña en una aplicación de frontend totalmente separada del backend.

## 🍿 Cómo usar la función de olvide contraseña

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/hEoqL0MHRp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
title: Restablecer contraseña
description: ''
position: 15
category: Restablecer contraseña
---

<alert type="warning">

Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador `bearer token`, este lo puedes generar en los endpoints de inicio de sesión o registro.

</alert>

## Endpoint

El endpoint predeterminado para restablecer la contraseña es:

```
http://your-project.test/api/reset-password
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Los campos necesarios para restablecer una contraseña son:

- email
- password
- password_confirmation
- token

Esos son los mismos que usa el formulario de restablecimiento de contraseña de Laravel UI o Laravel Breeze, pero utilizan form-data para enviar las entradas.

Puedes utilizar postman para testear los endpoints.

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/images/postman-reset-password-screenshot.png)

## 🍿 Restablecer contraseña

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/hEoqL0MHRp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Personalizar el flujo de trabajo de restablecimiento de contraseña

Puedes personalizar la respuesta o agregar cualquier lógica en el controlador en `app/Http/Controllers/JsonApiAuth/NewPasswordController.php`.

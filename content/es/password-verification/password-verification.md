---
title: Verificación de contraseña
description: ''
position: 22
category: Verificación de contraseña
---

<alert type="warning">

Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador `bearer token`, este lo puedes generar en los endpoints de inicio de sesión o registro.

</alert>

## Endpoint

El endpoint predeterminado para la función de verificación de contraseña es:

```
http://your-project.test/api/confirm-password
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Campos requeridos para registrar un usuario:

- password

Puede utilizar postman para probar el endpoint.

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/json-api-auth-docs/images/postman-confirm-password-screenshot.png)

## 🍿 Verificación de contraseña

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
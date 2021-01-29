---
title: Iniciar sesión
description: ''
position: 5
category: Iniciar sesión
---

## Endpoint

El endpoint predeterminado para iniciar sesión como usuario es:

```
http://your-project.test/api/login
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Campos requeridos para registrar un usuario:

- email
- password

Son los mismos que usa el formulario de registro de Laravel UI o Laravel Breeze, pero utilizan form-data para enviar las credenciales.

Puedes usar postman para testear el endpoint.

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/images/postman-login-user-screenshot.png)

## 🍿 Iniciar sesión

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
---
title: Registrar usuario
description: ''
position: 2
category: Registro de usuarios
---

## Endpoint

El endpoint predeterminado para registrar un usuario es:

```
http://your-project.test/api/register
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Campos requeridos para registrar un usuario:

- name
- email
- password
- password_confirmation

Esos son los mismos que usa el formulario de registro de Laravel UI o Laravel Breeze, pero utilizan form-data para enviar los datos.

Puedes utilizar postman para testear el endpoint.

## Ejemplo con postman

![Here a postman image to instruct how to send a request to register a user](/images/postman-register-user-screenshot.png)

## 🍿 Registrar de usuario

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
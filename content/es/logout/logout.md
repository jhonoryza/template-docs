---
title: Cerrar sesión
description: ''
position: 10
category: Cerrar sesión
---

## Endpoint

El endpoint predeterminado para cerrar la sesión de un usuario es:

```
http://your-project.test/api/logout
```

## Método de ruta

El método de ruta es `GET`

<alert type="warning">

Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador `bearer token` este lo puedes generar en los endpoints de inicio de sesión o registro.

</alert>

## Campos de usuario

Este endpoint no requiere ningún campo.

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/images/postman-logout-screenshot.png)

## 🍿 Cerrar sesión

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
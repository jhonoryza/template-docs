---
title: Notificación de verificación de email
description: ''
position: 18
category: Verificación de email
---

<alert type="warning">

Este endpoint requiere autenticación, por lo que la solicitud debe incluir un token de portador `bearer token`, este lo puedes generar en los endpoints de inicio de sesión o registro.

</alert>

## Endpoint

El endpoint predeterminado para enviar una notificación de verificación por correo electrónico es:

```
http://your-project.test/api/email/verification-notification
```

## Método de ruta

El método de ruta es `POST`

## Campos de usuario

Este endpoint no requiere ningún campo de usuario.

Puedes utilizar postman para probar el endpoint.

## Ejemplo en postman

![Here a postman image to instruct how to send a request to register a user](/images/postman-email-verification-notification-screenshot.png)

## 🍿 Verificación de correo electrónico

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/cQc4nFLNxsM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
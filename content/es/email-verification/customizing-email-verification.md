---
title: Personalizar verificación de email
description: ''
position: 20
category: Verificación de email
---

Puedes agregar cualquier lógica en el proceso para enviar la verificación por correo electrónico en `app/Http/Controllers/JsonApiAuth/EmailVerificationNotificationController`.

## Personalizar notificación

El paquete usa una notificación personalizada en `app/Notifications/JsonApiAuth/VerifyEmailNotification`.

Esta extiende de `Illuminate\Auth\Notifications\VerifyEmail` puedes sobreescribir cualquier método o agregar tu propia plantilla personalizada para correo (mailables), en la notificación personalizada.
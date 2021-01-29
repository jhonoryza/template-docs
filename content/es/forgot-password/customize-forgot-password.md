---
title: Personalización
description: ''
position: 14
category: Notificación para restablecer contraseña
---

## Personaliza el proceso de envío de correo electrónico

Funciona exactamente como Laravel UI o Laravel Breeze, pero si desea modificar por algún motivo el comportamiento de envío de correo electrónico, tienes el controlador en `app/Http/Controllers/JsonApiAuth/PasswordResetLinkController`.

Aquí puede agregar cualquier lógica, personalizar la forma de crear el token de notificación o personalizar la respuesta.

## Personalizar la notificación de restablecimiento de contraseña

Como este es un escenario común, puedes sobreescribir la notificación, en `app/Notifications/JsonApiAuth/ResetPasswordNotification.php`, que extiende de `Illuminate\Auth\Notifications\ResetPassword`, por lo que puede sobreescribir cualquier método aquí para personalizar la notificación.

Incluso puede crear tu propio `mailable` y `notification`, solo recuerde que el enlace para la notificación es:

```php
$link = config('json-api-auth.new_password_form_url') . "?token={$this->token}&email={$notifiable->getEmailForPasswordReset()}";
```

La razón para trabajar con una URL del archivo de configuración es establecer una URL para un formulario de restablecimiento de contraseña, totalmente separado de la aplicación del servidor.
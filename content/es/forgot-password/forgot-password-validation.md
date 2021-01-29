---
title: Validación
description: ''
position: 13
category: Notificación para restablecer contraseña
---

## Reglas

Aquí las reglas de validación para enviar una notificación de restablecimiento de contraseña:

```
email
    required
    valid email format
```

## Personalizar las reglas de validación

Puedes ir a `app/Http/Requests/JsonApiAuth/PasswordResetLinkRequest.php`, luego puedes editar el método `rules` para agregar tantas reglas de validación como necesite el proyecto.

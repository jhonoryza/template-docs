---
title: Validación
description: ''
position: 16
category: Restablecer contraseña
---

## Reglas

Aquí las reglas de validación para restablecer una contraseña:

```
email
    requerido
    formato de email valido
password
    requerido
    longitud minima de 8 caracteres
password_confirmation
    los mismos que password
token
    un token valido
```

## Personalizar las reglas de validación de restablecimiento de contraseña

Puedes ir a `app/Http/Requests/JsonApiAuth/NewPasswordRequest.php`, luego puede editar el método `rules` para agregar tantas reglas de validación como necesite el proyecto.
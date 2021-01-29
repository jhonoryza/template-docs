---
title: Validación de registro
description: ''
position: 3
category: Registro de usuarios
---

## Reglas

Aquí las reglas de validación para registrar un usuario:

```
name
    requerido
email
    requerido
    formato valido de email
password
    requerido
    minimo de longitud de 8 caracteres
    debe coincidir con el campo password_confirmation
password_confirmation
    las mismas reglas que password
```

## Personalice las reglas de validación de registros

Puede ir a `app/Http/Requests/JsonApiAuth/RegisterRequest.php`, ahí puedes editar el método `rules` para agregar tantas reglas de validación como necesite el proyecto.

---
title: Validación al Iniciar sesión
description: ''
position: 6
category: Iniciar sesión
---

## Reglas

Aquí las reglas de validación para iniciar sesión como usuario:

```
email
    requerido
    formato de email valido
password
    requerido
    longitud minima de 8 caracteres
```

## Personalizar las reglas de validación de inicio de sesión

Puedes ir a `app/Http/Requests/JsonApiAuth/LoginRequest.php`, ahí puedes editar el método `rules` para agregar tantas reglas de validación como necesite el proyecto.

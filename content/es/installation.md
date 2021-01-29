---
title: Instalación
description: ''
position: 1
category: Guia
---

## Usando composer

Agregua el paquete `arielmejiadev/json-api-auth` a tu proyecto:

<code-group>
  <code-block label="Composer" active>

  ```bash
  composer require arielmejiadev/json-api-auth --dev
  ```

  </code-block>
</code-group>

Luego, ejecute el comando para instalar el scaffold de autenticación en tu proyecto de Laravel:

```php[terminal]
php artisan json-api-auth:install
```

Ahora puedes ver:

- nuevas rutas en `routes/json-api-auth.php`
- controladores en `app/Http/Controllers/JsonApiAuth`
- form requests en `app/Http/Requests/JsonApiAuth`
- notificaciones en `app/Notifications/JsonApiAuth`

<alert>

El paquete proporciona algunas pruebas para el flujo de trabajo de autenticación en `tests/Feature/JsonApiAuth`.

</alert>

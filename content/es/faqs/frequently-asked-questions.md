---
title: Preguntas frecuentes
description: ''
position: 23
category: Preguntas frecuentes
---

<details class="my-4">
  <summary class="text-gray-800 font-semibold">¿Puedo usar este paquete incluso si el proyecto ya tiene Laravel UI o Laravel Breeze?</summary>
  <p class="text-gray-700">Sí, es por eso que las rutas del paquete utilizan nombres de ruta personalizados y notificaciones personalizadas.</p>
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">¿Puedo usar Passport o Sanctum?</summary>
  <p class="text-gray-700">Puede usar ambos, pero solo uno a la vez, si es un problema en el futuro, puedes abrir un issue en el repositorio de github si tu aplicación usa ambos.</p>
</details>


<details class="my-4">
  <summary class="text-gray-800 font-semibold">¿Por qué el middleware de rutas usa la clase AuthKit?</summary>
  <p class="text-gray-700">Devuelve el middleware de autenticación correcto según el paquete que se está usando Passport ('auth:api') o Sanctum ('auth:sanctum'), pero puedes eliminarlo y usar el middleware de autenticación correcto según el paquete que uses.</p>
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">¿Puedo personalizar las rutas?</summary>
  <p class="text-gray-700">Cuando instalas el paquete, este agrega todo el código a tu aplicación, puedes cambiar los nombres de las rutas de la API, solo necesita tener cuidado de actualizar los enlaces de notificaciones, en la documentación de cada notificación encontrarás dónde personalizar cada función.</p>
</details>

<details class="my-4">
    <summary class="text-gray-800 font-semibold">¿Cómo puedo personalizar los vencimientos de los tokens?</summary>

```php
    // En config/auth.php

    // Para modificar el tiempo de expiracion de los tokens para restablecer contraseña
    'password_timeout' => 10800,

    // Para modificar el tiemmpo de expiración de los tokens para verificar email.
    'auth' => [
        'verification' => [
            'expire' => 10800
        ]
    ]

    // El tiempo que agregues sera en segundos.
```
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">¿Puedo personalizar las notificaciones?</summary>
  <p class="text-gray-700">Sí, puedes publicar los archivos de notificaciones, crear tu propio mailable y pasar este a las notificaciones personalizadas.</p>
  <a target="_blank" href="https://laravel.com/docs/8.x/notifications#customizing-the-templates">Aquí puedes obtener más información al respecto.</a>
</details>

#### ¿Cómo conseguir soporte?

Si tienes alguna duda sobre algo que no está claro en la documentación, simplemente mandame un tweet, el enlace está en la barra de navegación.

#### ¿Encontraste un problema?

Por favor agrega un `issue` en el repositorio en github, el enlace está en la barra de navegación.
---
title: Restablecer contraseña en el frontend
description: ''
position: 17
category: Restablecer contraseña
---

<alert>

Esta es una tarea de desarrollo frontend, aquí agrego una guía para usar esta función.

</alert>

La aplicación de frontend tendría que tomar el token y el correo electrónico de la URL, para completar automáticamente los `inputs` del formulario de restablecimiento de contraseña, esto es simple con javascript usando algo como esto:

```js
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const token = urlParams.get('token')

const email = urlParams.get('email')
```

El usuario sólo necesitaría llenar los inputs `password` y `password_confirmation` y luego enviar una solicitud al endpoint `reset-password`.
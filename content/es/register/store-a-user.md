---
title: Guardar usuario
description: ''
position: 4
category: Registro de usuarios
---

## Personalice los datos del usuario para almacenar

Puedes editar el método para almacenar un usuario en `app/Http/Controllers/JsonApiAuth/RegisterController.php`

Aquí puedes personalizar la lógica para almacenar los datos que necesita:

```php
public function __invoke(RegisterRequest $request)
{
    try {

        /** @var User $user */
        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        // ...
    }
}
```
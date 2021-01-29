---
title: Store a user
description: ''
position: 4
category: User registration
---

## Customize user data to store

You can edit the method to store a user in `app/Http/Controllers/JsonApiAuth/RegisterController.php`

You can customize the logic to store the data that you need:

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
---
title: Frecuently asked questions
description: ''
position: 23
category: FAQS
---

<details class="my-4">
  <summary class="text-gray-800 font-semibold">I can use this package even if the project has already Laravel UI or Laravel Breeze authentication?</summary>
  <p class="text-gray-700">Yes, thats why the package routes use custom route names and custom notifications.</p>
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">I can used Passport or Sanctum?</summary>
  <p class="text-gray-700">You can use both, but only one at the time, if its a concern in the future you can open an issue if your app use both.</p>
</details>


<details class="my-4">
  <summary class="text-gray-800 font-semibold">Why routes middleware use the class AuthKit?</summary>
  <p class="text-gray-700">It returns the correct auth middleware based on the package that you are using Passport or Sanctum, but you can remove it and use the correct string middleware.</p>
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">I am able to customize the routes?</summary>
  <p class="text-gray-700">When you install the package it adds all the code to your app so you can change the API routes names as you need just take care to update the notifications links, in the docs you will find where to customize every feature.</p>
</details>

<details class="my-4">
    <summary class="text-gray-800 font-semibold">How can I customize the token expirations?</summary>

```php
    // In config/auth.php

    // To change password confirmation timeout
    'password_timeout' => 10800,

    // To change email verification timeout
    'auth' => [
        'verification' => [
            'expire' => 10800
        ]
    ]

    // Here you may define the amount of seconds.
```
</details>

<details class="my-4">
  <summary class="text-gray-800 font-semibold">I can customize the notifications?</summary>
  <p class="text-gray-700">Yes, you can publish the notifications assets, create your own mailable and pass this mailable to the custom notifications.</p>
  <a target="_blank" href="https://laravel.com/docs/8.x/notifications#customizing-the-templates">Here you can get more information about it</a>
</details>

#### How to get support?

If you have some doubt about something that is not clear in the docs, just tweet me, the link its in the navbar.

#### Find an issue

Please add an issue on github, the link its in the navbar.
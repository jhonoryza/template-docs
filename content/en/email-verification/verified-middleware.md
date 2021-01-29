---
title: Verified middleware
description: ''
position: 21
category: Email verification
---

The package add a sample route with a verified middleware in `routes/api.php`.

If you remove comments the route would look like this:

```php
Route::get('/verified-middleware-example', function () {
   return response()->json([
       'message' => 'the email account is already confirmed now you are able to see this message...',
   ]);
})->middleware(AuthKit::getMiddleware(), 'verified');
```

In order to use the `verified` middleware you must add a `auth:api` middleware if you are using passport or `auth:sanctum` middleware if your are using sanctum.

<alert>

The `AuthKit::getMiddleware()` returns the correct middleware for passport or sanctum for you.

<br>

You can remove it, just remember to add the correct authentication middleware in its place, `auth:api` for Passport or `auth:sanctum` for Sanctum.

</alert>

That is because APIs are stateless, so to get if the user has an email account verified, first it is necessary to get the user, so middleware `auth:api` or `auth:sanctum` helps to get the user.

## 🍿 Using the verified middleware video tutorial

<iframe style="width: 100%" height="315" src="https://www.youtube.com/embed/yrKTAUezkkQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
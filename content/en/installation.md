---
title: Installation
description: ''
position: 1
category: Guide
---

## Using composer

Add `arielmejiadev/json-api-auth` dependency to your project:

<code-group>
  <code-block label="Composer" active>

  ```bash
  composer require arielmejiadev/json-api-auth --dev
  ```

  </code-block>
</code-group>

Then, execute the command to install the authentication scaffold in your Laravel project:

```php[terminal]
php artisan json-api-auth:install
```

Now you are able to see:

- new routes on `routes/json-api-auth.php`, 
- controllers in `app/Http/Controllers/JsonApiAuth`
- form requests in `app/Http/Requests/JsonApiAuth` 
- notifications in `app/Notifications/JsonApiAuth`

<alert>

The package provide some tests for authentication workflow on `tests/Feature/JsonApiAuth`.

</alert>

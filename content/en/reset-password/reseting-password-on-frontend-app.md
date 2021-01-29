---
title: Reset password from a frontend app
description: ''
position: 17
category: Reset password email
---

<alert>

This is a task by frontend development, here I add some guide to use this feature.

</alert>

The frontend app would have to grab the token and email query string params from the url, to automatically fill this inputs, this is simple with javascript using something like this:

```js
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const token = urlParams.get('token')

const email = urlParams.get('email')
```

The user would only need to fill the `password` and `password_confirmation` fields, and then send a request to the `reset-password` endpoint.
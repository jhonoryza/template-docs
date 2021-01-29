---
title: Customize email verification
description: ''
position: 20
category: Email verification
---

You can add any logic on the process to send email verification in `app/Http/Controllers/JsonApiAuth/EmailVerificationNotificationController`.

## Customize notification

The package use a custom notification in 
`app/Notifications/JsonApiAuth/VerifyEmailNotification`, 

It extends from `Illuminate\Auth\Notifications\VerifyEmail` so you can override any method or add your own custom mailable template, in the custom notification.
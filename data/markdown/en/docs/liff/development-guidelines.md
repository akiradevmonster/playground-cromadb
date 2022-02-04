---
title: 'LIFF app development guidelines | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/development-guidelines/'
---

## Table of Contents

[Be sure to securely handle user data](#liff-development-rules1)

[Cautions for initializing LIFF apps](#liff-development-rules2)

[LIFF app development rules](#liff-development-rules3)

[Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

# [#](#page-title) LIFF app development guidelines

When developing web apps using LIFF, follow these development guidelines.

- [Be sure to securely handle user data](#liff-development-rules1)
- [Cautions for initializing LIFF apps](#liff-development-rules2)
- [LIFF app development rules](#liff-development-rules3)
- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

LIFF uses a system provided by LINE Login. Therefore, abide by the [LINE Login development guidelines](../../../en/docs/line-login/development-guidelines.md) in the LINE Login documentation.

> [!warning]
> Note
>
> The basic rules for LIFF development are based on the content described in [Terms and Policies](../../../en/terms-and-policies.md).

## [#](#liff-development-rules1) Be sure to securely handle user data

- When using user data in LIFF apps and servers, the LIFF app will be vulnerable to spoofing and other types of attacks if it doesn't properly handle the user data. For more information on how LIFF apps and servers can securely use user data obtained from LIFF apps, see [Using user data in LIFF apps and servers](../../../en/docs/liff/using-user-profile.md).
- LIFF endpoint URLs and URL fragments of LIFF URLs contain sensitive information such as access tokens and user IDs, so be careful of data leakage.

## [#](#liff-development-rules2) Cautions for initializing LIFF apps

Don't change the URL during server or front-end processing before the `Promise` object returned by the `liff.init()` method is resolved. If you change the URL, it will return `INIT_FAILED` and the LIFF app can't be opened. For more information on other precautions when initializing the LIFF app, see [Initializing the LIFF app](../../../en/docs/liff/developing-liff-apps.md#initializing-liff-app).

## [#](#liff-development-rules3) LIFF app development rules

- To build a LIFF app as an SPA (single page application), use the [History API (opens new window)](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-history-interface). LIFF has limited compatibility with routing using fragments.
- When you implement an API that uses any of the device or OS functions listed below, implement the API so that user actions trigger API calls.
  - Getting location information
  - Accessing the camera
  - Accessing the microphone
- Do not track a user with cookies, localStorage, or sessionStorage or link LINE user data with external session information without getting the user's consent.
- During your application's test phase, limit access privileges for the LIFF app through your web app.
- The URL scheme of the LIFF app and any content that is opened in the LIFF app must be **https**. If the URL scheme is http, the content is displayed in [LINE's in-app browser](../../../en/glossary.md#line-iab). In this case, even if the web app has been registered as a LIFF app, it does not function as a LIFF app.

> [!warning]
> Use of cookies, localStorage, or sessionStorage in your LIFF app
>
> You can use cookies, localStorage, or sessionStorage in your LIFF app. However, changes in OS may restrict their use in the future.

## [#](#prohibiting-mass-requests-to-line-platform) Prohibiting mass requests to the LINE Platform

Do not access the LIFF app via the [LIFF scheme](../../../en/docs/line-login/using-line-url-scheme.md#opening-a-liff-app) (`https://liff.line.me/{liffId}`) or request a large amount of [LIFF API](../../../en/reference/liff.md) for load testing purposes. For load testing LIFF apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

> [!warning]
> Note
>
> If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.

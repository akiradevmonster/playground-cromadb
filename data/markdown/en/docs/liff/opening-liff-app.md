---
title: 'Opening a LIFF app | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/opening-liff-app/'
---

## Table of Contents

[Behaviors from accessing the LIFF URL to opening the LIFF app](#redirect-flow)

[Create a LIFF URL](#create-a-liff-url) [Create a primary redirect URL](#create-a-primary-redirect-url) [Create a secondary redirect URL](#setting-second-redirect)

[Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](#move-liff-to-liff)

[The conditions that make LIFF-to-LIFF transitions possible](#conditions-liff-to-liff) [Behavior based on screen size of the LIFF app](#behavior-by-screen-size) [About the "chat_message.write" scope after transitioning between LIFF apps](#about-chat-message-write-scope) [Get URL from before LIFF-to-LIFF transition](#using-liff-referrer) [Message displayed when another LIFF app is opened](#messages-liff-to-liff)

# [#](#page-title) Opening a LIFF app

The LIFF app can be opened in a [LIFF browser](../../../en/docs/liff/overview.md#liff-browser) or an external browser. This section describes the operations that allow users to open the LIFF app.

1. Users access the LIFF URL.

    The LIFF URL is issued when [Adding the LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md).  
    For example, enter the URL on the LINE chat screen and tap the URL displayed in the bubble to open the LIFF app.

    ![Open LIFF app](/assets/img/open-liff-app.180c3691.png)

2. Users agree to grant the required permissions to the LIFF app.

    The LIFF app is displayed.

> [!warning]
> Environment where the LIFF app opens
>
> When users access the LIFF URL, the LIFF app will open in a [LIFF browser](../../../en/glossary.md#liff-browser) on LINE, or an [external browser](../../../en/glossary.md#external-browser). Which environment is used depends on the [Universal Links (opens new window)](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/) or [App Links (opens new window)](https://developer.android.com/training/app-links) specifications.
>
> It's possible to open a LIFF app in native apps other than LINE. However, we don't guarantee where it will be opened, as it depends on the WebView specifications of the native app.

## [#](#redirect-flow) Behaviors from accessing the LIFF URL to opening the LIFF app

The following describes how to set up two redirect destinations so that the LIFF app opens correctly when users access the LIFF URL, and when to execute the `liff.init()` method when users access the LIFF URL.

| Redirect to            | Description                                                                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary redirect URL   | The first time users access the LIFF URL, they are redirected from the LIFF server to this URL. When users are redirected to this URL, execute the liff.init() method. |
| Secondary redirect URL | When executing the liff.init() method, users are redirected to this URL. Once users are redirected to this URL, the LIFF app page is displayed.                        |

![Redirect flow](/assets/img/redirect-flow-en.029b2df2.png)

> [!warning]
> Note on initializing the LIFF app
>
> Don't change the URL during server or front-end processing before the `Promise` object returned by the `liff.init()` method is resolved. If you change the URL, it will return 'INIT_FAILED' and the LIFF app can't be opened.
>
> For more information on other precautions when initializing the LIFF app, see [Initializing the LIFF app](../../../en/docs/liff/developing-liff-apps.md#initializing-liff-app).

### [#](#create-a-liff-url) Create a LIFF URL

The LIFF URL is a URL that indicates the LIFF server provided by LY Corporation. A LIFF URL is issued by [adding the LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md).

### [#](#create-a-primary-redirect-url) Create a primary redirect URL

The primary redirect URL is always the URL specified in the **Endpoint URL** of the LINE Developers Console.

> [!warning]
> Additional information specified in the LIFF URL
>
> All additional information specified in the primary redirected URLs (e.g. `path_A/?key1=value1#URL-fragment`) is included in the `liff.state` query parameter.
>
> e.g. `https://example.com/2020campaign/?key=value&liff.state=urlencoded(path_A/?key1=value1#URL-fragment)`
>
> If you don't specify any additional information in the LIFF URL, the `liff.state` query parameter is omitted.

### [#](#setting-second-redirect) Create a secondary redirect URL

The secondary redirect URL depends on the URL that users access.

The paths and query parameters (`/2020campaign/?key=value`) specified in the **Endpoint URL** of the LINE Developers Console are included in the secondary redirect URL.

| URL that users access                                                                                                | Secondary redirect URL                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF URL (1)e.g. <https://liff.line.me/{liffId}>                                                                       | The URL specified in Endpoint URL of the LINE Developers Console.e.g. <https://example.com/2020campaign/?key=value>                                                                                                                                                                                                                                                                                                   |
| The LIFF URL including additional information (2)e.g. <https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment> | As shown in (2) of the below figure, the URL is a combination of 3 types of information.The domain name specified in Endpoint URL (<https://example.com)The> paths and query parameters (/2020campaign/?key=value) specified in Endpoint URL.The additional information specified in the LIFF URL (/path_A/?key1=value1#URL-fragment)e.g. <https://example.com/2020campaign/path_A/?key=value&key1=value1#URL-fragment> |

![Endpoint URL](/assets/img/endpoint-url.9891c06e.png)

## [#](#move-liff-to-liff) Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)

When a LIFF app is open in the LIFF Browser, you can click on the link to another LIFF app to display the other app while keeping the LIFF Browser open. Since the LIFF browser doesn't close during LIFF-to-LIFF transitions, you can click the return button on the LIFF browser to return to the LIFF app from which you transitioned.

- [The conditions that make LIFF-to-LIFF transitions possible](#conditions-liff-to-liff)
- [Behavior based on screen size of the LIFF app](#behavior-by-screen-size)
- [About the "chat_message.write" scope after transitioning between LIFF apps](#about-chat-message-write-scope)
- [Get URL from before LIFF-to-LIFF transition](#using-liff-referrer)
- [Message displayed when another LIFF app is opened](#messages-liff-to-liff)

![LIFF-apps-transition](/assets/img/liff_transition.c82757af.png)

> [!warning]
> Unexpected behaviors
>
> If you are using an older version of the LIFF SDK, you may experience the following unexpected behaviors:
>
> - Despite that you moved from a LIFF URL specified by Path (`/path`) to a different LIFF app, you still end up on the URL specified in the **Endpoint URL** of the LINE Developers Console.
> - If you click **Cancel** on the [Consent screen](../../../en/docs/line-login/link-a-bot.md) where you seek user authorization, you must close your LIFF browser once.
> - If the destination is a LINE MINI App, the design of the LIFF browser header does not automatically change.
>
> When designing to enable transitions between multiple LIFF apps, it is recommended that you use the latest version of the LIFF SDK.

### [#](#conditions-liff-to-liff) The conditions that make LIFF-to-LIFF transitions possible

LIFF-to-LIFF transitions are possible when all of the following conditions are met:

- LIFF SDK v2.4.1 or later
- The original LIFF app screen is set to `Full` display
- The LIFF app to which you are moving is correctly initialized by `liff.init()`

### [#](#behavior-by-screen-size) Behavior based on screen size of the LIFF app

- If the screen size of the original LIFF app is set to `Tall` or `Compact`, the browser will initially close regardless of the screen size of the LIFF app to which you want to move, before the destination LIFF app is displayed.
- If the screen size of the original LIFF app is set to `Full`, the screen size of the destination LIFF app will be displayed in `Full`, regardless of the destination LIFF app screen size specification.
- If the screen size of the original LIFF app is set to `Full` and the screen size of the transition destination LIFF app is `Tall` or `Compact`, [the action button](../../../en/docs/liff/overview.md#action-button) will not be displayed in the LIFF app after the transition.

### [#](#about-chat-message-write-scope) About the "chat_message.write" scope after transitioning between LIFF apps

The `chat_message.write` scope after a transitioning between LIFF apps is enabled or disabled depending on the transition destination URL.

| Transition destination URL                | Example URL                                                    | The chat_message.write scope after transition |
| ----------------------------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| LIFF URL                                  | <https://liff.line.me/{liffId}>                                  | Enabled                                       |
| LIFF URL including additional information | <https://liff.line.me/{liffId}/path_A/?key1=value1#URL-fragment> | Enabled                                       |
| Endpoint URL                              | <https://example.com>                                            | Disabled                                      |

If the `chat_message.write` scope is enabled, the [`liff.sendMessages()`](../../../en/reference/liff.md#send-messages) method is available in the transition destination LIFF app.

### [#](#using-liff-referrer) Get URL from before LIFF-to-LIFF transition

When you open a LIFF app during a LIFF-to-LIFF transition, the query parameter, `liff.referrer`, will be added to the LIFF app URL after the transition. The value of `liff.referrer` will be set to the [percent-encoded (opens new window)](https://en.wikipedia.org/wiki/Percent-encoding) URL of the address of the `Referer` request header received by the LIFF server during the LIFF-to-LIFF transition. By checking the value of the `liff.referrer`, you can get the URL before the transition.

> [!warning]
> In LINE version 12.13.0 to 13.19.x, liff.referrer isn't added to the LIFF app URL after a LIFF-to-LIFF transition
>
> For more information, see the news on November 30, 2023, [We've fixed a bug in LINE version 12.13.0 or later where liff.referrer wasn't added after a LIFF-to-LIFF transition](../../../en/news/2023/11/30/liff-update-line-13-20-0.md).

The following is an example of how `liff.referrer` is given during LIFF-to-LIFF transition.

|           | LIFF app URL before transition | URL of the link                           | LIFF app URL after transition (after executing liff.init() method)                  |
| --------- | ------------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Given     | <https://first.example.com/>     | <https://liff.line.me/{LIFF> ID}(LIFF URL)  | ✅ <https://second.example.com/?liff.referrer=https%3A%2F%2Ffirst.example.com%2F> \*1 |
| Not given | <https://first.example.com/>     | <https://second.example.com/(Endpoint> URL) | ❌ <https://second.example.com/> \*2                                                  |

\*1 In addition to `liff.referrer`, the `liff.*`query parameter may be given to the LIFF app URL after the transition.  
\*2 If the endpoint URL of the LIFF app is opened directly,`liff.referrer` will not be given.

### [#](#messages-liff-to-liff) Message displayed when another LIFF app is opened

When you access another URL from a LIFF app, a message saying, "Switched to the {LIFF app name} app." may be displayed.

This message is displayed when you open a LIFF app with a different LIFF ID than LIFF app that was opened first (the LIFF app from which the transition is made). Whether or not this message is displayed has nothing to do with the success of LIFF-to-LIFF transitions.

![switched-to-another-app-en](/assets/img/switched-to-another-app-en.c17c66fe.png)

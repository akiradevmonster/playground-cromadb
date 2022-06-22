---
title: 'LIFF v2 API reference | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/reference/liff/'
---

## Table of Contents

[Common specifications](#common-specifications)

[Operating environment](#operating-environment) [LIFF SDK errors](#liff-errors)

[LIFF SDK properties](#liff-properties)

[liff.id](#id) [liff.ready](#ready)

[Initialization](#initialization)

[liff.init()](#initialize-liff-app)

[Getting environment](#getting-environment)

[liff.getOS()](#get-os) [liff.getAppLanguage()](#get-app-language) [liff.getLanguage()](#get-language) [liff.getVersion()](#get-version) [liff.getLineVersion()](#get-line-version) [liff.getContext()](#get-context) [liff.isInClient()](#is-in-client) [liff.isLoggedIn()](#is-logged-in) [liff.isApiAvailable()](#is-api-available)

[Authentication](#authentication)

[liff.login()](#login) [liff.logout()](#logout) [liff.getAccessToken()](#get-access-token) [liff.getIDToken()](#get-id-token) [liff.getDecodedIDToken()](#get-decoded-id-token) [liff.permission.query()](#permission-query) [liff.permission.requestAll()](#permission-request-all)

[Profile](#profile)

[liff.getProfile()](#get-profile) [liff.getFriendship()](#get-friendship)

[Window](#window)

[liff.openWindow()](#open-window) [liff.closeWindow()](#close-window)

[Message](#message)

[liff.sendMessages()](#send-messages) [liff.shareTargetPicker()](#share-target-picker)

[Camera](#camera)

[liff.scanCodeV2()](#scan-code-v2) [liff.scanCode()](#scan-code)

[Permanent link](#permanent-link)

[liff.permanentLink.createUrlBy()](#permanent-link-create-url-by) [liff.permanentLink.createUrl()](#permanent-link-create-url) [liff.permanentLink.setExtraQueryParam()](#permanent-linke-set-extra-query-param)

[LIFF plugin](#liff-plugin)

[liff.use()](#use)

[Internationalization](#i18n)

[liff.i18n.setLang()](#i18n-set-lang)

[Others](#others)

[liff.createShortcutOnHomeScreen()](#create-shortcut-on-home-screen)

# [#](#page-title) LIFF v2 API reference

## [#](#common-specifications) Common specifications

### [#](#operating-environment) Operating environment

For more information about supported operating environments for LIFF v2, see [Overview](../../en/docs/liff/overview.md) in the LIFF documentation.

Which functions you can use depends on whether the LIFF app is opened in a LIFF browser or an external browser. For example, you can't use `liff.scanCode()` in an external browser. For more information, see the descriptions for each client API.

> [!warning]
> LIFF apps are not compatible with OpenChat
>
> For example, retrieving a user's profile information through a LIFF app isn't possible in most cases.

### [#](#liff-errors) LIFF SDK errors

LIFF SDK errors are returned in LiffError objects.

_Example_

JSON

[Link](#)

```
{
  "code": "INIT_FAILED",
  "message": "Failed to init LIFF SDK"
}
```

#### [#](#liff-error-object) LiffError object

code

String

Error code

message

String

Not always included

Error message

cause

Unknown

Not always included

Error cause

#### [#](#error-details) Error details

| Error code             | Description                                                                                                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400                    | Problem with the request. Check the request parameters and JSON format.                                                                                                                                               |
| 401                    | Check that the authorization header is correct.                                                                                                                                                                       |
| 403                    | Not authorized to use the API. Confirm that your account or plan is authorized to use the API.                                                                                                                        |
| 429                    | Make sure that you are within the rate limit for requests.                                                                                                                                                            |
| 500                    | Temporary error on the API server.                                                                                                                                                                                    |
| INIT_FAILED            | Failed to init LIFF SDK.                                                                                                                                                                                              |
| INVALID_ARGUMENT       | An invalid argument was specified.                                                                                                                                                                                    |
| UNAUTHORIZED           | The user did not authorize.Call the server api without access token.Call the share target picker before logging in.                                                                                                   |
| FORBIDDEN              | You don't have the required permission.You attempted to use a feature in an environment that's not supported.                                                                                                         |
| INVALID_CONFIG         | An invalid setting.Specify the liffId to initialize LIFF apps using liff.init().The URL of the page that executes the liff.permanentLink.createUrl() method doesn't start with the URL specified in the Endpoint URL. |
| INVALID_ID_TOKEN       | Failed to verify the ID token.                                                                                                                                                                                        |
| EXCEPTION_IN_SUBWINDOW | Problem with subwindow.For example, if the target picker (group or friend selection screen) is displayed and has been idle for more than 10 minutes, for example.                                                     |
| UNKNOWN                | Unknown error.                                                                                                                                                                                                        |

## [#](#liff-properties) LIFF SDK properties

### [#](#id) liff.id

The property that holds the LIFF app ID (`String` type) passed to [`liff.init()`](#initialize-liff-app).

The value of `liff.id` is `null` until you run `liff.init()`.

_Example_

JavaScript

[Link](#)

```
const liffId = "my-liff-id";
liff.init({ liffId });

// liff.id equals to liffId
```

### [#](#ready) liff.ready

A property holding the `Promise` object that resolves when you run [`liff.init()`](#initialize-liff-app) for the first time after starting the LIFF app.

If you use `liff.ready`, you can execute any process after the completion of `liff.init()`.

This property can be used before the LIFF app is initialized

You can use `liff.ready` even before the initialization of the LIFF app by `liff.init()` has finished.

_Example_

JavaScript

[Link](#)

```
liff.ready.then(() => {
  // do something you want when liff.init finishes
});
```

> [!warning]
> Note
>
> If `liff.init()` fails, `liff.ready` will not be rejected. Also, it doesn't return a `LiffError` object.

## [#](#initialization) Initialization

### [#](#initialize-liff-app) liff.init()

Initializes a LIFF app.

You can only call other LIFF SDK methods after executing the `liff.init()` method. LIFF apps must be initialized each time a page is opened. Even if the transition is within the same LIFF app, you should execute the `liff.init()` method when you open a new page.

If you use LIFF features without properly initializing the LIFF app, we don't guarantee that the features will work.

The LIFF SDK obtains the access token and ID token of the user from the LINE Platform when you execute the `liff.init()` method.

- To use the access token obtained by the LIFF SDK, call [liff.getAccessToken()](#get-access-token).
- To use the ID token payload obtained by the LIFF SDK, call [liff.getDecodedIDToken()](#get-decoded-id-token).

#### [#](#initializing-liff-app-notes) Important points to consider when initializing the LIFF app

The following are important points to consider when initializing your LIFF app. Read and understand these points before you start developing your LIFF app.

- [Execute `liff.init()` at the endpoint URL or at a lower level](#initializing-liff-app-notes-1)
- [Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL](#initializing-liff-app-notes-2)
- [Process URL changes after `liff.init()` completes](#initializing-liff-app-notes-3)
- [Use caution when handling the primary redirect URL](#initializing-liff-app-notes-4)

##### [#](#initializing-liff-app-notes-1) Execute `liff.init()` at the endpoint URL or at a lower level

The `liff.init()` method will only work on URLs that are exactly the same as the endpoint URL, or on URLs that are at a lower level than the endpoint URL. If the LIFF app transitions to a URL other than these, the `liff.init()` method isn't guaranteed to work.

The following example shows whether the behavior is guaranteed for the URL that executes the `liff.init()` method when the endpoint URL is `https://example.com/path1/`.

| URL to execute liff.init()          | Guaranteed to work |
| ----------------------------------- | ------------------ |
| <https://example.com/>                | ❌                 |
| <https://example.com/path1/>          | ✅                 |
| <https://example.com/path1/language/> | ✅                 |
| <https://example.com/path2/>          | ❌                 |

##### [#](#initializing-liff-app-notes-2) Execute `liff.init()` once for the primary redirect URL and once for the secondary redirect URL

The `liff.init()` method performs initialization processing based on information such as `liff.state` and `access_token=xxx` given to the primary redirect URL. If your endpoint URL includes a query parameter or path, to properly initialize the LIFF app, execute the `liff.init()` method once for both the primary redirect URL and the secondary redirect URL. For more information, see [Behaviors from accessing the LIFF URL to opening the LIFF app](../../en/docs/liff/opening-liff-app.md#redirect-flow) in the LIFF documentation.

##### [#](#initializing-liff-app-notes-3) Process URL changes after `liff.init()` completes

Don't change the URL during server or front-end processing before the `Promise` object returned by the `liff.init()` method is resolved. If you change the URL, `INIT_FAILED` is returned and the LIFF app can't be opened.

For example, if you perform redirects using `location.replace()` after running the `liff.init()` method, design it so that the screen transitions after the `Promise` object is resolved.

```
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    // Redirect to another page after the returned Promise object has been resolved
    window.location.replace(location.href + "/entry/");
  });
```

##### [#](#initializing-liff-app-notes-4) Use caution when handling the primary redirect URL

The `access_token=xxx` automatically granted to the primary redirect URL is the user's access token (confidential information). Don't send the primary redirect URL to an external logging tool such as Google Analytics.

Note that in LIFF v2.11.0 or later, credential information is excluded from URLs when the `liff.init()` method is resolved. Therefore, you can prevent leaking credential information by sending the page view in the `then()` method as follows. If you want to use logging tools, we recommend that you upgrade your LIFF app to v2.11.0 or later. For more information about the updates in LIFF v2.11.0, see [Release Notes](../../en/docs/liff/release-notes.md#liff-v2-11-0) in the LIFF documentation.

```
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    ga("send", "pageview");
  });
```

> [!warning]
> LIFF app's query parameters
>
> When you access a LIFF URL or perform a transition between LIFF apps, the URL may be given query parameters that begin with `liff.*`.
>
> e.g.
>
> - `liff.state` (indicates additional information specified in LIFF URL)
> - `liff.referrer` (indicates where the referrer came from when transitioning between LIFF apps. For more information, see [Get URL from before LIFF-to-LIFF transition](../../en/docs/liff/opening-liff-app.md#using-liff-referrer).)
>
> The above query parameters are given by the SDK so that LIFF apps can function properly. When you independently alter the above query parameters, proper opening of the LIFF app and a transition between LIFF apps may not be guaranteed. Implement your app so that the `liff.*` query parameter is altered after `liff.init()` is resolved.

Functions that can be executed even before the LIFF app is initialized

This property or methods are available even before the `liff.init()` method is executed.

You can get the environment in which the LIFF app is running before initializing the LIFF app, or close the LIFF app when the LIFF app initialization fails.

- [liff.ready](#ready)
- [liff.getOS()](#get-os)
- [liff.getAppLanguage()](#get-app-language)
- [liff.getLanguage()](#get-language) (deprecated)
- [liff.getVersion()](#get-version)
- [liff.getLineVersion()](#get-line-version)
- [liff.isInClient()](#is-in-client)
- [liff.closeWindow()](#close-window)
- [liff.use()](#use)
- [liff.i18n.setLang()](#i18n-set-lang)

To use the `liff.closeWindow()` method before the initialization of the LIFF app by `liff.init()` has finished, your LIFF SDK version must be v2.4.0 or later.

_Example_

JavaScript

[Link](#)

```
// Using a Promise object
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    // Start to use liff's api
  })
  .catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });

// Using a callback
liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
```

#### [#](#initialize-liff-app-syntax) Syntax

```
liff.init(config, successCallback, errorCallback);
```

#### [#](#initialize-liff-app-arguments) Arguments

config

Object

Required

LIFF app configurations

config.liffId

String

Required

LIFF app ID. Can be obtained when you add the LIFF app to your channel. For more information, see [Adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md).  
The LIFF app ID specified here can be obtained with [`liff.id`](#id).

config.withLoginOnExternalBrowser

Boolean

Optional

Using either of the following values, specify whether or not to automatically execute the `liff.login()` method when initializing a LIFF app in an external browser. The default value is `false`.

- `true`: Automatically execute the `liff.login()` method in external browsers.
- `false`: Don't automatically execute the `liff.login()` method in external browsers.

successCallback

Function

Optional

Callback to return a data object upon successful initialization of the LIFF app.

> [!warning]
> Note
>
> successCallback is processed at the same time that the `Promise` object of the return value is resolved. However, there is no set order to which is processed first.

errorCallback

Function

Optional

Callback to return an error object upon failure to initialize the LIFF app.

> [!warning]
> Note
>
> errorCallback is processed at the same time that the `Promise` object of the return value is rejected. However, there is no set order to which is processed first.

#### [#](#initialize-liff-app-return-value) Return value

Returns a `Promise` object.

##### [#](#initialize-liff-app-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

## [#](#getting-environment) Getting environment

### [#](#get-os) liff.getOS()

Gets the environment in which the user is running the LIFF app.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#get-os-syntax) Syntax

```
liff.getOS();
```

#### [#](#get-os-arguments) Arguments

None

#### [#](#get-os-return-value) Return value

The environment in which the user is running the LIFF app is returned as a string. Since the return value is based on the name of the OS in the user agent string, the return value is independent of the browser type ([LIFF browser](../../en/glossary.md#liff-browser), [LINE's in-app browser](../../en/glossary.md#line-iab), [external browser](../../en/glossary.md#external-browser)).

For example, if the user is using iOS, `ios` will be returned, regardless of whether the user is using LIFF browser or Safari.

| Return value | Description          |
| ------------ | -------------------- |
| ios          | iOS or iPadOS        |
| android      | Android              |
| web          | Other than the above |

For more information about LIFF app supported operating systems and browsers, see [Operating environment](../../en/docs/liff/overview.md#operating-environment).

### [#](#get-app-language) liff.getAppLanguage()

Gets the language setting of the LINE app running the LIFF app.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#get-app-language-conditions-of-use) Conditions of use

LIFF SDK versions v2.24.0 or later

#### [#](#get-app-language-operating-conditions) Operating conditions

All of the following conditions must be met for the `liff.getAppLanguage()` method to work correctly:

- The LIFF application is running on the [LIFF browser](../../en/glossary.md#liff-browser).
- The LINE app version is 14.11.0 or later.

If the above conditions aren't met, the `liff.getAppLanguage()` method behaves the same as the [`liff.getLanguage()`](#get-language) method.

#### [#](#get-app-language-syntax) Syntax

```
liff.getAppLanguage();
```

#### [#](#get-app-language-arguments) Arguments

None

#### [#](#get-app-language-return-value) Return value

The language setting of the LINE app running the LIFF app is returned as a string that follows [RFC 5646 (opens new window)](https://datatracker.ietf.org/doc/html/rfc5646).

### [#](#get-language) liff.getLanguage()

> [!warning]
> The liff.getLanguage() method is deprecated
>
> The `liff.getLanguage()` method is deprecated. To get the language setting of the environment in which the LIFF app is running, use the [`liff.getAppLanguage()`](#get-app-language) method. For more information, see the news from [July 23, 2024](../../en/news/2024/07/23/release-liff-2-24-0.md).

Gets the language setting of the environment in which the LIFF app is running.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#get-language-syntax) Syntax

```
liff.getLanguage();
```

#### [#](#get-language-arguments) Arguments

None

#### [#](#get-language-return-value) Return value

String containing language settings specified in `navigator.language` in the LIFF app's running environment.

### [#](#get-version) liff.getVersion()

Gets the version of the LIFF SDK.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#get-version-syntax) Syntax

```
liff.getVersion();
```

#### [#](#get-version-arguments) Arguments

None

#### [#](#get-version-return-value) Return value

The version of the LIFF SDK is returned as a string.

### [#](#get-line-version) liff.getLineVersion()

Gets the user's LINE version.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#get-line-version-syntax) Syntax

```
liff.getLineVersion();
```

#### [#](#get-line-version-arguments) Arguments

None

#### [#](#get-line-version-return-value) Return value

If a user opens the LIFF app using a LIFF browser, the LINE version of the user is returned as a string. If a user opens the LIFF app using an external browser, `null` is returned.

### [#](#get-context) liff.getContext()

Gets the screen type (1-on-1 chat, group chat, multi-person chat, or external browser) from which the LIFF app is launched.

> [!danger]
> We've discontinued providing company internal identifiers of chat rooms to LIFF apps
>
> We've discontinued providing company internal identifiers of chat rooms (one-on-one chat ID, group ID, and room ID) to LIFF apps. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](../../en/news/2023/02/06/liff-spec-change.md).

_Example_

JavaScript

[Link](#)

```
const context = liff.getContext();
console.log(context);
```

#### [#](#get-context-syntax) Syntax

```
liff.getContext();
```

#### [#](#get-context-arguments) Arguments

None

#### [#](#get-context-return-value) Return value

A data object that contains the information necessary to make various API calls.

type

String

The type of screen from where the LIFF app was launched. One of:

- `utou`: 1-on-1 chat.
- `group`: Group chat.
- `room`: Multi-person chat.
- `external`: External browser.
- `none`: A screen other than a 1-on-1 chat, group chat, multi-person chat, or external browser. For example, Wallet tab.

This property is also returned for LIFF apps after transitioning between LIFF apps.

userId

String

User ID. Included when the `type` property is `utou`, `room`, `group`, `none` or `external`. However, null may be returned when `type` is `external`.

liffId

String

LIFF ID.

viewType

String

Size of the LIFF app view, only returned if the `type` property isn't `external`. One of:

- `compact`
- `tall`
- `full`

For more information, see [Adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md).

endpointUrl

String

URL of the service endpoint.

accessTokenHash

String

First half of the hashed SHA256 value of the access token. Used to validate the access token.

availability

Object

Returns the [`availability` object](#get-context-return-value-availability) that indicates whether the LIFF features are available in the environment in which the LIFF app was launched.

scope

Array of strings

Returns which of the scopes the LIFF app has within the scope required to use some of the LIFF SDK methods:

- `openid`: Scope required to use [`liff.getIDToken()`](#get-id-token) and [`liff.getDecodedIDToken()`](#get-decoded-id-token)
- `email`: Scope required to get the user's email address using [`liff.getIDToken()`](#get-id-token) or [`liff.getDecodedIDToken()`](#get-decoded-id-token)
- `profile`: Scope required to use [`liff.getProfile()`](#get-profile) or [`liff.getFriendship()`](#get-friendship)
- `chat_message.write`: Scope required to use [`liff.sendMessages()`](#send-messages)

For more information about scope, see [Adding the LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) in the LIFF documentation.

menuColorSetting

Object

Returns the color setting of the LIFF browser header as a [`menuColorSetting` object](#get-context-return-value-menucolorsetting).

Note that we currently don't provide the ability to change the header color setting.

miniAppId

String

Not always included

Returns the string set by the Custom Path feature of the LINE MINI App. For more information about the Custom Path feature, see [Configuring Custom Path](../../en/docs/line-mini-app/develop/custom-path.md) in the LINE MINI App documentation.

miniDomainAllowed

Boolean

Returns whether the LINE MINI App is available on the `miniapp.line.me` domain.

permanentLinkPattern

String

How additional information in LIFF URLs is handled. `concat` is returned.

For more information, see [Opening a LIFF app](../../en/docs/liff/opening-liff-app.md) in the LIFF documentation.

utouId

String

Discontinued

This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](../../en/news/2023/02/06/liff-spec-change.md).

groupId

String

Discontinued

This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](../../en/news/2023/02/06/liff-spec-change.md).

roomId

String

Discontinued

This property was discontinued. For more information, see the news from February 6, 2023, [We've discontinued providing company internal identifiers of chat rooms to LIFF apps as of February 6, 2023](../../en/news/2023/02/06/liff-spec-change.md).

_Example (LIFF browser)_

JSON

[Link](#)

```
{
  "type": "utou",
  "utouId": "e2bff570-...",
  "userId": "U850014438e...",
  "liffId": "123456-abcedfg",
  "viewType": "full",
  "endpointUrl": "https://example.com/",
  "accessTokenHash": "EVWYWo1yYA...",
  "availability": {
    "shareTargetPicker": {
      "permission": true,
      "minVer": "10.3.0"
    },
    "multipleLiffTransition": {
      "permission": true,
      "minVer": "10.18.0"
    },
    "subwindowOpen": {
      "permission": true,
      "minVer": "11.7.0"
    },
    "scanCode": {
      "permission": false,
      "minVer": "9.4.0",
      "unsupportedFromVer": "9.19.0"
    },
    "scanCodeV2": {
      "permission": true,
      "minVer": "11.7.0",
      "minOsVer": "14.3.0"
    },
    "getAdvertisingId": {
      "permission": false,
      "minVer": "7.14.0"
    },
    "addToHomeScreen": {
      "permission": false,
      "minVer": "9.16.0"
    },
    "bluetoothLeFunction": {
      "permission": false,
      "minVer": "9.14.0",
      "unsupportedFromVer": "9.19.0"
    },
    "skipChannelVerificationScreen": {
      "permission": false,
      "minVer": "11.14.0"
    },
    "addToHomeV2": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeHideDomain": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeLineScheme": {
      "permission": false,
      "minVer": "13.20.0"
    }
  },
  "scope": [
    "chat_message.write",
    "openid",
    "profile"
  ],
  "menuColorSetting": {
    "adaptableColorSchemes": [
      "light"
    ],
    "lightModeColor": {
      "iconColor": "#111111",
      "statusBarColor": "black",
      "titleTextColor": "#111111",
      "titleSubtextColor": "#B7B7B7",
      "titleButtonColor": "#111111",
      "titleBackgroundColor": "#FFFFFF",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#FFFFFF"
    },
    "darkModeColor": {
      "iconColor": "#FFFFFF",
      "statusBarColor": "white",
      "titleTextColor": "#FFFFFF",
      "titleSubtextColor": "#949494",
      "titleButtonColor": "#FFFFFF",
      "titleBackgroundColor": "#111111",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#111111"
    }
  },
  "miniDomainAllowed": false,
  "permanentLinkPattern": "concat"
}
```

_Example (external browser)_

JSON

[Link](#)

```
{
  "type": "external",
  "liffId": "123456-abcedfg",
  "endpointUrl": "https://example.com/",
  "accessTokenHash": "EVWYWo1yYA...",
  "availability": {
    "shareTargetPicker": {
      "permission": true,
      "minVer": "10.3.0"
    },
    "multipleLiffTransition": {
      "permission": true,
      "minVer": "10.18.0"
    },
    "subwindowOpen": {
      "permission": true,
      "minVer": "11.7.0"
    },
    "scanCode": {
      "permission": true,
      "minVer": "9.4.0",
      "unsupportedFromVer": "9.19.0"
    },
    "scanCodeV2": {
      "permission": true,
      "minVer": "11.7.0",
      "minOsVer": "14.3.0"
    },
    "getAdvertisingId": {
      "permission": false,
      "minVer": "7.14.0"
    },
    "addToHomeScreen": {
      "permission": false,
      "minVer": "9.16.0"
    },
    "bluetoothLeFunction": {
      "permission": false,
      "minVer": "9.14.0",
      "unsupportedFromVer": "9.19.0"
    },
    "skipChannelVerificationScreen": {
      "permission": false,
      "minVer": "11.14.0"
    },
    "addToHomeV2": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeHideDomain": {
      "permission": false,
      "minVer": "13.20.0"
    },
    "addToHomeLineScheme": {
      "permission": false,
      "minVer": "13.20.0"
    }
  },
  "scope": [
    "chat_message.write",
    "openid",
    "profile"
  ],
  "menuColorSetting": {
    "adaptableColorSchemes": [
      "light"
    ],
    "lightModeColor": {
      "iconColor": "#111111",
      "statusBarColor": "black",
      "titleTextColor": "#111111",
      "titleSubtextColor": "#B7B7B7",
      "titleButtonColor": "#111111",
      "titleBackgroundColor": "#FFFFFF",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#FFFFFF"
    },
    "darkModeColor": {
      "iconColor": "#FFFFFF",
      "statusBarColor": "white",
      "titleTextColor": "#FFFFFF",
      "titleSubtextColor": "#949494",
      "titleButtonColor": "#FFFFFF",
      "titleBackgroundColor": "#111111",
      "progressBarColor": "#06C755",
      "progressBackgroundColor": "#111111"
    }
  },
  "miniDomainAllowed": false,
  "permanentLinkPattern": "concat"
}
```

#### [#](#get-context-return-value-availability) `availability` object

The `availability` object contains the following properties:

shareTargetPicker

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.shareTargetPicker()`](#share-target-picker) is available in the environment in which the LIFF app was launched.

\* To get information about the availability of `liff.shareTargetPicker()`, we highly recommend using [liff.isApiAvailable('shareTargetPicker')](#is-api-available) instead.

multipleLiffTransition

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether it's possible to [transition to another LIFF app](../../en/docs/liff/opening-liff-app.md#move-liff-to-liff) with [`liff.openWindow()`](#open-window) without closing the LIFF app within the LIFF browser in the environment in which the LIFF app was launched.

\* To get information about the availability of a transition between multiple LIFF apps, we highly recommend using [liff.isApiAvailable('multipleLiffTransition')](#is-api-available) instead.

subwindowOpen

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether the subwindow is available in the environment in which the LIFF app was launched.

scanCode

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.scanCode()`](#scan-code) is available in the environment in which the LIFF app was launched.

scanCodeV2

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.scanCodeV2()`](#scan-code-v2) is available in the environment in which the LIFF app was launched.

getAdvertisingId

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether `liff.getAid()` is available in the environment in which the LIFF app was launched.

Note that we currently don't provide `liff.getAid()`.

addToHomeScreen

String

Returns the [object](#get-context-return-value-availability-common) that indicates whether `liff.addToHomeScreen()` is available in the environment in which the LIFF app was launched.

Note that we currently don't provide `liff.addToHomeScreen()`.

bluetoothLeFunction

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether Bluetooth® Low Energy for LINE Things is available in the environment in which the LIFF app was launched.

Note that we currently don't provide this feature.

skipChannelVerificationScreen

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether the "Channel consent simplification" feature is available in the environment in which the LIFF app was launched. For more information, see [Skipping the channel consent process](../../en/docs/line-mini-app/develop/channel-consent-simplification.md) in the LINE MINI App documentation.

addToHomeV2

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether [`liff.createShortcutOnHomeScreen()`](#create-shortcut-on-home-screen) is available in the environment in which the LIFF app was launched.

\* To get information about the availability of `liff.createShortcutOnHomeScreen()`, we highly recommend using [liff.isApiAvailable('createShortcutOnHomeScreen')](#is-api-available) instead.

addToHomeHideDomain

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether the endpoint URL can be hidden when displaying a screen for adding a shortcut to the home screen of the user's device.

Note that we currently don't provide this feature.

addToHomeLineScheme

Object

Returns the [object](#get-context-return-value-availability-common) that indicates whether creating a shortcut specifying the [LINE URL scheme](../../en/docs/line-login/using-line-url-scheme.md) is available.

Note that we currently don't provide this feature.

_Example_

JSON

[Link](#)

```
{
  "shareTargetPicker": {
    "permission": true,
    "minVer": "10.3.0"
  }
}
```

#### [#](#get-context-return-value-availability-common) Common properties of the `availability` object

permission

Boolean

Specifies whether the feature specified by the property name of the `availability` object is available in the environment in which the LIFF app was launched.

- `true`: The feature is available.
- `false`: The feature isn't available.

minVer

String

Not always included

The minimum LINE version that supports the corresponding feature.

maxVer

String

Not always included

The maximum LINE version that supports the corresponding feature.

unsupportedFromVer

String

Not always included

The LINE version for which the corresponding feature is no longer supported.

minOsVer

String

Not always included

The minimum OS version that supports the corresponding feature.

maxOsVer

String

Not always included

The maximum OS version that supports the corresponding feature.

unsupportedFromOsVer

String

Not always included

The OS version for which the corresponding feature is no longer supported.

#### [#](#get-context-return-value-menucolorsetting) `menuColorSetting` object

The `menuColorSetting` object contains the following properties:

adaptableColorSchemes

Array of strings

Always returns `light`.

lightModeColor

Object

Returns the header color setting as [object](#get-context-return-value-menucolorsetting-common) when `adaptableColorSchemes` is `light`.

darkModeColor

Object

Returns the header color setting as [object](#get-context-return-value-menucolorsetting-common) when `adaptableColorSchemes` is `dark`.

Note that we currently don't provide the header color setting.

_Example_

JSON

[Link](#)

```
{
  "adaptableColorSchemes": [
    "light"
  ],
  "lightModeColor": {
    "iconColor": "#111111",
    "statusBarColor": "black",
    "titleTextColor": "#111111",
    "titleSubtextColor": "#B7B7B7",
    "titleButtonColor": "#111111",
    "titleBackgroundColor": "#FFFFFF",
    "progressBarColor": "#06C755",
    "progressBackgroundColor": "#FFFFFF"
  },
  "darkModeColor": {
    "iconColor": "#FFFFFF",
    "statusBarColor": "white",
    "titleTextColor": "#FFFFFF",
    "titleSubtextColor": "#949494",
    "titleButtonColor": "#FFFFFF",
    "titleBackgroundColor": "#111111",
    "progressBarColor": "#06C755",
    "progressBackgroundColor": "#111111"
  }
}
```

#### [#](#get-context-return-value-menucolorsetting-common) Common properties of the `menuColorSetting` object

iconColor

String

The color of the header icon. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

statusBarColor

String

Always returns `white`.

titleTextColor

String

The color of the header title text. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

titleSubtextColor

String

The color of the header subtitle text. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

titleButtonColor

String

The color of the header button. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

titleBackgroundColor

String

The header background color. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

progressBarColor

String

The color of the header progress bar. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

progressBackgroundColor

String

The background color of the header progress bar. The color is represented by a hexadecimal color code in the `#RRGGBB` format.

### [#](#is-in-client) liff.isInClient()

Determines whether the LIFF app is running in a LIFF browser.

This method can be used before the LIFF app is initialized

You can use this method even before the initialization of the LIFF app by `liff.init()` has finished.

#### [#](#is-in-client-syntax) Syntax

```
liff.isInClient();
```

#### [#](#is-in-client-arguments) Arguments

None

#### [#](#is-in-client-return-value) Return value

- `true`: Running in [LIFF browser](../../en/glossary.md#liff-browser)
- `false`: Running in [external browser](../../en/glossary.md#external-browser) or [LINE's in-app browser](../../en/glossary.md#line-iab)

### [#](#is-logged-in) liff.isLoggedIn()

Checks whether the user is logged in.

_Example_

JavaScript

[Link](#)

```
if (liff.isLoggedIn()) {
  // The user can use an API that requires an access token, such as liff.getProfile().
}
```

#### [#](#is-logged-in-syntax) Syntax

```
liff.isLoggedIn();
```

#### [#](#is-logged-in-arguments) Arguments

None

#### [#](#is-logged-in-return-value) Return value

- `true`: The user is logged in.
- `false`: The user is not logged in.

### [#](#is-api-available) liff.isApiAvailable()

Checks whether the specified API is available in the environment where you started the LIFF app. Specifically, it verifies whether the current LINE version supports the API and whether the terms and conditions for the API have been accepted.

_Example_

JavaScript

[Link](#)

```
// Check if shareTargetPicker is available
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      console.log("ShareTargetPicker was launched")
    ).catch(function(res) {
      console.log("Failed to launch ShareTargetPicker")
    })
}

// Check if multiple liff transtion feature is available
if (liff.isApiAvailable('multipleLiffTransition')) {
  window.location.href = "https://line.me/{liffId}", // URL for another LIFF app
}
```

#### [#](#is-api-available-syntax) Syntax

```
liff.isApiAvailable(apiName);
```

#### [#](#is-api-available-arguments) Arguments

apiName

String

Required

The name of the LIFF client API. You can currently specify these API names:

- [shareTargetPicker](#share-target-picker)
- [createShortcutOnHomeScreen](#create-shortcut-on-home-screen)
- [multipleLiffTransition](../../en/docs/liff/opening-liff-app.md#move-liff-to-liff)

> [!warning]
> About multipleLiffTransition
>
> `multipleLiffTransition` is a property which indicates whether it's possible to open another LIFF app without closing the current LIFF app (LIFF-to-LIFF transition). It is not the name of an API. For more information, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](../../en/docs/liff/opening-liff-app.md#move-liff-to-liff) in the LIFF documentation.

#### [#](#is-api-available-return-value) Return value

Returns whether the specified API is available in the current environment. If available, `true` is returned. If not, `false` is returned. Examples of `false` returned are as follows:

- If the LIFF app was launched with a LINE version that doesn't support the API
- If the LIFF app was launched in an external browser, even though the API isn't available in an external browser
- If the terms and conditions haven't been accepted, even though you must accept them to use the API
- If the user isn't logged in, even though the user must be logged in to use the API
- If the access token is expired, even though the access token must be valid to use the API

## [#](#authentication) Authentication

### [#](#login) liff.login()

Performs the login process in the [LINE's in-app browser](../../en/glossary.md#line-iab) or [external browser](../../en/glossary.md#external-browser).

> [!warning]
> Note
>
> You can't use `liff.login()` in a LIFF browser, as it is automatically executed when `liff.init()` is executed.

> [!warning]
> Authorization requests within LIFF browser
>
> The behavior of LINE Login authorization requests within the LIFF browser isn't guaranteed. Also, when opening LIFF apps from an external browser or LINE's in-app browser, make sure to use this method for the login process, not the [authorization requests with LINE Login](../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

_Example_

JavaScript

[Link](#)

```
if (!liff.isLoggedIn()) {
  liff.login({ redirectUri: "https://example.com/path" });
}
```

#### [#](#login-syntax) Syntax

```
liff.login(loginConfig);
```

#### [#](#login-arguments) Arguments

loginConfig

Object

Optional

Login configurations

loginConfig.redirectUri

String

Optional

URL to open in the LIFF app after logging in. The default value is the URL set in **Endpoint URL**. For more information on how to set **Endpoint URL**, see [Adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) in the LIFF documentation.

If the URL specified in `redirectUri` doesn't start with the URL specified in **Endpoint URL**, the login process fails and an error screen is displayed.

![liff_login_error_screen](/assets/img/liff_login_error_screen.442a41ac.png)

For example, if **Endpoint URL** is `https://example.com/path1/path2?query1=value1`, the success or failure of the login process is as follows. Query parameters and URL fragments don't affect the success or failure of the login process.

| redirectUri                                                                                                                                                                                                                                | Login process |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| <https://example.com/path1/path2?query1=value1https://example.com/path1/path2?query2=value2https://example.com/path1/path2#URL-fragmenthttps://example.com/path1/path2https://example.com/path1/path2/https://example.com/path1/path2/path3> | ✅ Success    |
| <https://example.com/path1https://example.com/https://example.com/path2/path1>                                                                                                                                                               | ❌ Failure    |

#### [#](#login-return-value) Return value

None

### [#](#logout) liff.logout()

Logs out.

_Example_

JavaScript

[Link](#)

```
if (liff.isLoggedIn()) {
  liff.logout();
}
```

#### [#](#logout-syntax) Syntax

```
liff.logout();
```

#### [#](#logout-arguments) Arguments

None

#### [#](#logout-return-value) Return value

None

### [#](#get-access-token) liff.getAccessToken()

Gets the current user's access token.

You can use the access token obtained with this API to send user data from the LIFF app to the server. For more information, see [Using user data in LIFF apps and servers](../../en/docs/liff/using-user-profile.md) in the LIFF documentation.

> [!warning]
> Validity period of the access token
>
> The access token is valid for 12 hours after being issued. When the user closes the LIFF app, the access token will be revoked even if it hasn't expired.

Getting an access token

- If the user starts the LIFF app in a LIFF browser, the LIFF SDK will get an access token when you call [`liff.init()`](#initialize-liff-app).
- If the user starts the LIFF app in an external browser, the LIFF SDK will get an access token when these steps are satisfied:

  1. You call [`liff.login()`](#login).
  2. The user logs in.
  3. You call [`liff.init()`](#initialize-liff-app).

_Example_

JavaScript

[Link](#)

```
const accessToken = liff.getAccessToken();
if (accessToken) {
  fetch("https://api...", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    //...
  });
}
```

#### [#](#get-access-token-syntax) Syntax

```
liff.getAccessToken();
```

#### [#](#get-access-token-arguments) Arguments

None

#### [#](#get-access-token-return-value) Return value

Returns the current user's access token as a string.

### [#](#get-id-token) liff.getIDToken()

Get the ID token of the current user obtained by the LIFF SDK. An ID token is a JSON Web Token (JWT) that contains user data.

You can use the ID token obtained with this API when sending the user data from the LIFF app to the server. For more information, see [Using user data in LIFF apps and servers](../../en/docs/liff/using-user-profile.md) in the LIFF documentation.

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), select the `openid` scope. You can't get the ID tokens if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

Getting an ID token

- If the user starts the LIFF app in a LIFF browser, the LIFF SDK will get an ID token when you call [`liff.init()`](#initialize-liff-app).
- If the user starts the LIFF app in an external browser, the LIFF SDK will get an ID token when these steps are satisfied:

  1. You call [`liff.login()`](#login).
  2. The user logs in.
  3. You call [`liff.init()`](#initialize-liff-app).

You can get the user's email address

To get the email addresses of users, select the `email` scope when [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md). You will get the email addresses once the users grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

_Example_

JavaScript

[Link](#)

```
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // print idToken object
  });
```

#### [#](#get-id-token-syntax) Syntax

```
liff.getIDToken();
```

#### [#](#get-id-token-arguments) Argument

None

#### [#](#get-id-token-return-value) Return value

Returns an ID token.

### [#](#get-decoded-id-token) liff.getDecodedIDToken()

Gets the payload of the ID token that's acquired by the LIFF SDK. The payload includes information such as user display name, profile image URL, email address, etc.

Use this method when you want to use the display name of the user in the LIFF app.

You can only get the main profile information. You can't get the user's [subprofile](../../en/glossary.md#subprofile).

> [!danger]
> Don't send user info to server
>
> Don't send the user data obtained by this method to the server. For more information, see [Using user data in LIFF apps and servers](../../en/docs/liff/using-user-profile.md) in the LIFF documentation.

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), select the `openid` scope. You can't get the ID tokens if you don't select the scope, or users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

Getting an ID token

- If the user starts the LIFF app in a LIFF browser, the LIFF SDK will get an ID token when you call [`liff.init()`](#initialize-liff-app).
- If the user starts the LIFF app in an external browser, the LIFF SDK will get an ID token when these steps are satisfied:

  1. You call [`liff.login()`](#login).
  2. The user logs in.
  3. You call [`liff.init()`](#initialize-liff-app).

You can get the user's email address

To get the email addresses of users, select the `email` scope when [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md). You will get the email addresses once the users grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

_Example_

JavaScript

[Link](#)

```
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    const idToken = liff.getDecodedIDToken();
    console.log(idToken); // print decoded idToken object
  });
```

#### [#](#get-decoded-id-token-syntax) Syntax

```
liff.getDecodedIDToken();
```

#### [#](#get-decoded-id-token-arguments) Arguments

None

#### [#](#get-decoded-id-token-return-value) Return value

Gets the ID token payload.

For more information on ID token payloads, see the **Payload** section of [Get profile information from ID tokens](../../en/docs/line-login/verify-id-token.md) in the Integrate LINE Login documentation.

_Example_

JSON

[Link](#)

```
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef ",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456"
}
```

### [#](#permission-query) liff.permission.query()

Verifies whether the user agrees to grant the specified permission.

_Example_

JavaScript

[Link](#)

```
liff.permission.query("profile").then((permissionStatus) => {
  // permissionStatus = { state: 'granted' }
});
```

#### [#](#permission-query-syntax) Syntax

```
liff.permission.query(permission);
```

#### [#](#permission-query-arguments) Arguments

permission

String

Required

The permission to be checked. Specify one of the following scopes:

- [`profile`](../../en/docs/liff/registering-liff-apps.md#registering-liff-app)
- [`chat_message.write`](../../en/docs/liff/registering-liff-apps.md#registering-liff-app)
- [`openid`](../../en/docs/liff/registering-liff-apps.md#registering-liff-app)
- [`email`](../../en/docs/liff/registering-liff-apps.md#registering-liff-app)

#### [#](#permission-query-return-value) Return value

`Promise` object returned.

When `Promise` is resolved, an object containing the following properties is returned.

state

String

Contains one of the following values:

- `granted`: User has consented to the authorization.
- `prompt`: User hasn't consented to authorization.
- `unavailable`: Not available because the channel does not have the specified scope.

### [#](#permission-request-all) liff.permission.requestAll()

Displays the "Verification screen" for the permissions requested by LINE MINI Apps.

![verification screen](/assets/img/verification-screen-en.b8acd806.png)

> [!warning]
> Operating environment of liff.permission.requestAll()
>
> `liff.permission.requestAll()` only operates on [LINE MINI Apps](../../en/docs/line-mini-app.md).
>
> To execute this method, you need to turn on **Channel consent simplification** in advance on the [LINE Developers Console](../../console.md). For more information on setting up the Channel consent simplification feature, see [The "Channel consent simplification" feature setup](../../en/docs/line-mini-app/develop/channel-consent-simplification.md#simplification-feature-setup) of the LINE MINI App documentation.

> [!warning]
> Make sure that the user has consented to all the permissions before executing this method
>
> If the user has already consented to all the permissions and you execute `liff.permission.requestAll()`, `Promise` will be rejected and [`LiffError`](#liff-errors) will be returned. Therefore, use [`liff.permission.query()`](#permission-query) to check whether the user has consented to all the permissions, and execute `liff.permission.requestAll()` only if the user has unconsented permissions.

_Example_

JavaScript

[Link](#)

```
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll();
  }
});
```

#### [#](#permission-request-all-syntax) Syntax

```
liff.permission.requestAll();
```

#### [#](#permission-request-all-arguments) Arguments

None

#### [#](#permission-request-all-return-value) Return value

Returns a `Promise` object.

##### [#](#permission-request-all-error-response) Error response

If **Channel consent simplification** isn't turned on, and the user has already consented to all the permissions, `Promise` will be rejected and [`LiffError`](#liff-errors) will be returned.

## [#](#profile) Profile

### [#](#get-profile) liff.getProfile()

Gets the current user's [profile information](../../en/glossary.md#profile-information).

You can only get the main profile information. You can't get the user's [subprofile](../../en/glossary.md#subprofile).

> [!danger]
> Don't send user info to server
>
> Don't send the user data obtained by this method to the server. For more information, see [Using user data in LIFF apps and servers](../../en/docs/liff/using-user-profile.md) in the LIFF documentation.

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), select the `profile` scope. You can't get user profiles if you don't select the scope, or the user doesn't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

_Example_

JavaScript

[Link](#)

```
liff
  .getProfile()
  .then((profile) => {
    const name = profile.displayName;
  })
  .catch((err) => {
    console.log("error", err);
  });
```

#### [#](#get-profile-syntax) Syntax

```
liff.getProfile();
```

#### [#](#get-profile-arguments) Arguments

None

#### [#](#get-profile-return-value) Return value

Returns a `Promise` object.

When the `Promise` is resolved, the object containing the user's profile information is passed.

userId

String

User ID

displayName

String

Display name

pictureUrl

String

Image URL. This property is not returned if it has not been set by the user.

statusMessage

String

Status message. This property is not returned if it has not been set by the user.

##### [#](#get-profile-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

_Example_

JSON

[Link](#)

```
{
  "userId": "U4af4980629...",
  "displayName": "Brown",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage": "Hello, LINE!"
}
```

### [#](#get-friendship) liff.getFriendship()

Gets the friendship status between a user and a LINE Official Account.

However, you can only get the friendship status between a user and a LINE Official Account that has been linked to the same LINE Login channel to which your LIFF app has been added. To learn how to link a LINE Official Account to a LINE Login channel, see [Add a LINE Official Account as a friend when logged in (add friend option)](../../en/docs/line-login/link-a-bot.md) in the LINE Login documentation.

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), select the `profile` scope. You can't get the friendship statuses if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../console.md) even after adding the LIFF app.

_Example_

JavaScript

[Link](#)

```
liff.getFriendship().then((data) => {
  if (data.friendFlag) {
    // something you want to do
  }
});
```

#### [#](#get-friendship-syntax) Syntax

```
liff.getFriendship();
```

#### [#](#get-friendship-arguments) Arguments

None

#### [#](#get-friendship-return-value) Return value

Returns a `Promise` object.

When acquiring the status of friendship, the `Promise` is resolved and the information about friendship is passed.

friendFlag

Boolean

- `true`: The user has added the LINE Official Account as a friend and has not blocked it.
- Otherwise, `false`.

##### [#](#get-friendship-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

_Example_

JSON

[Link](#)

```
{
  "friendFlag": true
}
```

## [#](#window) Window

### [#](#open-window) liff.openWindow()

Opens the specified URL in the LINE's in-app browser or external browser.

> [!warning]
> Operating environment of liff.openWindow()
>
> Use of `liff.openWindow()` in an external browser isn't guaranteed.

> [!warning]
> Executing liff.openWindow() on LINE for iOS and LIFF v2.16.1 or earlier will open URLs with unintended query parameters added to the end of the URL fragment
>
> In LINE for iOS and LIFF v2.16.1 or earlier, if the `url` property doesn't contain a query parameter (`?key=value`) but contains a URL fragment (`#URL-fragment`), a URL with an unintended query parameter added to the end of the URL fragment will be opened.
>
> These are example of URLs opened when executing the `liff.openWindow()` method
>
> | LIFF SDK version | url property                     | URL opened                                                          |
> | ---------------- | -------------------------------- | ------------------------------------------------------------------- |
> | v2.16.1          | <https://example.com#URL-fragment> | <https://example.com#URL-fragment?is_liff_external_open_window=false> |
> | v2.17.0          | <https://example.com#URL-fragment> | <https://example.com#URL-fragment>                                    |

_Example_

JavaScript

[Link](#)

```
liff.openWindow({
  url: "https://line.me",
  external: true,
});
```

#### [#](#open-window-syntax) Syntax

```
liff.openWindow(params);
```

#### [#](#open-window-arguments) Arguments

params

Object

Required

Parameter object

params.url

String

Required

URL. Specify a full URL.

params.external

Boolean

Optional

Whether to open the URL in an external browser. Specify one of the following values. The default value is `false`.

- `true`: Opens the URL in an external browser.
- `false`: Opens the URL in the LINE's in-app browser.

#### [#](#open-window-return-value) Return value

None

### [#](#close-window) liff.closeWindow()

Closes the LIFF app.

This method can be used before the LIFF app is initialized

To use the `liff.closeWindow()` method before the initialization of the LIFF app by `liff.init()` has finished, your LIFF SDK version must be v2.4.0 or later.

> [!warning]
> Note
>
> `liff.closeWindow()` isn't guaranteed to work in an external browser.

_Example_

JavaScript

[Link](#)

```
liff.closeWindow();
```

#### [#](#close-window-syntax) Syntax

```
liff.closeWindow();
```

#### [#](#close-window-arguments) Arguments

None

#### [#](#close-window-return-value) Return value

None

## [#](#message) Message

### [#](#send-messages) liff.sendMessages()

Sends messages on behalf of the user to the chat room where the LIFF app is opened.

To use this feature, the following conditions must be met:

- Within the LIFF browser for a LIFF app launched from a one-on-one chat, [group chat](../../en/glossary.md#group), or [multi-person chat](../../en/glossary.md#room)
- The [`chat_message.write` scope](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) is enabled

If the conditions aren't met, the `liff.sendMessages()` method isn't available and `user doesn't grant required permissions yet` error with error code `403` will occur. The following are examples of cases that cause the error:

- When accessing the LIFF app using the [Keep Memo (opens new window)](https://help.line.me/line/smartphone/pc?lang=en&contentId=20017696) feature.
- When accessing a URL scheme for [opening a LIFF app](../../en/docs/line-login/using-line-url-scheme.md#opening-a-liff-app) through a website redirection process, etc.
- When the `chat_message.write` scope is disabled after the LIFF-to-LIFF transition. For more information, see [About the "chat_message.write" scope after transitioning between LIFF apps](../../en/docs/liff/opening-liff-app.md#about-chat-message-write-scope) in the LIFF documentation.
- When the user doesn't grant the `chat_message.write` scope.

You can get the screen type from which the LIFF app is launched using the [`liff.getContext()`](#get-context) method.

_Example_

JavaScript

[Link](#)

```
liff
  .sendMessages([
    {
      type: "text",
      text: "Hello, World!",
    },
  ])
  .then(() => {
    console.log("message sent");
  })
  .catch((err) => {
    console.log("error", err);
  });
```

#### [#](#send-messages-syntax) Syntax

```
liff.sendMessages(messages);
```

#### [#](#send-messages-arguments) Arguments

messages

Array of objects

Required

[Message objects](../../en/reference/messaging-api.md#message-objects)  
Max: 5  
You can send the following types of Messaging API messages:

- [Text message](../../en/docs/messaging-api/message-types.md#text-messages). However, the `emojis` property and the `quoteToken` property aren't available.
- [Sticker message](../../en/docs/messaging-api/message-types.md#sticker-messages). However, the `quoteToken` property isn't available.
- [Image message](../../en/docs/messaging-api/message-types.md#image-messages).
- [Video message](../../en/docs/messaging-api/message-types.md#video-messages). However, the `trackingId` property isn't available.
- [Audio message](../../en/docs/messaging-api/message-types.md#audio-messages).
- [Location message](../../en/docs/messaging-api/message-types.md#location-messages).
- [Template message](../../en/docs/messaging-api/message-types.md#template-messages). However, only a [URI action](../../en/docs/messaging-api/actions.md#uri-action) can be set as an action.
- [Flex Message](../../en/docs/messaging-api/message-types.md#flex-messages). However, only a [URI action](../../en/docs/messaging-api/actions.md#uri-action) can be set as an action.

When messages are sent to a chat that includes a LINE Official Account, the LINE Platform sends webhook events to the bot server. When image, video, and audio messages are sent using the `liff.sendMessages()` method, resulting webhook events contain the `contentProvider.type` property whose value is `external`. For more information, see [Message event](../../en/reference/messaging-api.md#message-event) in the Messaging API reference.

#### [#](#send-messages-return-value) Return value

Returns a `Promise` object.

- If the message is sent successfully, the `Promise` is resolved. No value is passed.
- If you fail to send the message, the `Promise` is rejected and [`LiffError`](#liff-errors) is passed.

### [#](#share-target-picker) liff.shareTargetPicker()

Displays the target picker (screen for selecting a group or friend) and sends the message created by the developer to the selected target. This message appears to your group or friends as if you had sent it.

> [!warning]
> Note
>
> - To view the target picker, turn on the share target picker in the [LINE Developers Console](../../console.md). For more information, see [Using the share target picker](../../en/docs/liff/developing-liff-apps.md#using-share-target-picker).
> - When using an external browser, call [`liff.login()`](#login), complete the login process, then call `liff.shareTargetPicker()`.

> [!warning]
> We don't retrieve the number of people to whom a user has sent a message using the share target picker
>
> In order to protect user privacy, we neither collect nor provide information on how many people received a message from a user through the share target picker.

_Example_

JavaScript

[Link](#)

```
liff
  .shareTargetPicker(
    [
      {
        type: "text",
        text: "Hello, World!",
      },
    ],
    {
      isMultiple: true,
    }
  )
  .then(function (res) {
    if (res) {
      // succeeded in sending a message through TargetPicker
      console.log(`[${res.status}] Message sent!`);
    } else {
      // sending message canceled
      console.log("TargetPicker was closed!");
    }
  })
  .catch(function (error) {
    // something went wrong before sending a message
    console.log("something wrong happen");
  });
```

#### [#](#share-target-picker-syntax) Syntax

```
liff.shareTargetPicker(messages, options);
```

#### [#](#share-target-picker-arguments) Arguments

messages

Array of objects

Required

[Message objects](../../en/reference/messaging-api.md#message-objects)  
Max: 5  
You can send the following types of Messaging API messages:

- [Text message](../../en/docs/messaging-api/message-types.md#text-messages). However, the `emojis` property and the `quoteToken` property aren't available.
- [Image message](../../en/docs/messaging-api/message-types.md#image-messages).
- [Video message](../../en/docs/messaging-api/message-types.md#video-messages). However, the `trackingId` property isn't available.
- [Audio message](../../en/docs/messaging-api/message-types.md#audio-messages).
- [Location message](../../en/docs/messaging-api/message-types.md#location-messages).
- [Template message](../../en/docs/messaging-api/message-types.md#template-messages). However, only a [URI action](../../en/docs/messaging-api/actions.md#uri-action) can be set as an action.
- [Flex Message](../../en/docs/messaging-api/message-types.md#flex-messages). However, only a [URI action](../../en/docs/messaging-api/actions.md#uri-action) can be set as an action.

options

Object

Optional

Share target picker options

options.isMultiple

Boolean

Optional

Specifies whether or not to allow users to select multiple message recipients through the target picker, using either of these values. The default value is `true`.

- `true`: Users can select multiple recipients from their groups, friends, and chats.
- `false`: Users can select only one of their friends as the recipient.

> [!warning]
> Setting isMultiple to false doesn't guarantee that the message will be sent to only one friend
>
> Even if you set the `isMultiple` property to `false`, you can still send a message to multiple users by calling the share target picker multiple times, or by re-sharing the same message to different recipients. To strictly allow a user to send a message to one friend only once, add a restriction when implementing the LIFF app.
>
> Here's an example of sending a message containing a URL and restricting access to the URL.
>
> 1. Give the URL a unique token and send the message.
> 2. When the URL in the message is accessed, the server side verifies the token and restricts access by multiple users.

#### [#](#return-value) Return value

Returns a `Promise` object.

- If the message is sent correctly, `Promise` is resolved and an object with these properties will be passed.

  status

  String

  `success`

- If the user cancels and closes the target picker before sending the message, `Promise` is resolved but the object isn't passed.
- If a problem occurs before the target picker is displayed, `Promise` is rejected and `LiffError` is passed. For more information on the LiffError object, see [LIFF SDK errors](#liff-errors).

> [!warning]
> Note
>
> In the callback function where `Promise` has been resolved and rejected, the LIFF app won't work on some devices if the developer uses `alert()`.

## [#](#camera) Camera

### [#](#scan-code-v2) liff.scanCodeV2()

Launch the 2D code reader and obtain string. To activate the 2D code reader, turn on **Scan QR** on the [LINE Developers Console](../../console.md).

> [!warning]
> Operating environments of liff.scanCodeV2()
>
> `liff.scanCodeV2()` works in these environments.
>
> - iOS: iOS 14.3 or later
> - Android: All versions
> - External browser: Web browsers that support [WebRTC API (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
>
> | OS            | Version      | LIFF browser | External browser |
> | ------------- | ------------ | ------------ | ---------------- |
> | iOS           | 11-14.2      | ❌           | ✅ \*1           |
> | 14.3 or later | ✅ \*2       | ✅ \*1       |                  |
> | Android       | All versions | ✅ \*2       | ✅ \*1           |
> | PC            | All versions | ❌           | ✅ \*1           |
>
> \*1 You can only use web browsers that support [WebRTC API (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).
>
> \*2 Only available when the screen size of the LIFF browser is `Full`. For details, see [Size of the LIFF browser](../../en/docs/liff/overview.md#screen-size) in the LIFF documentation.

> [!warning]
> Turn \[Scan QR\] on to launch the 2D code reader
>
> When [Adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), turn on **Scan QR**. The **Scan QR** setting can be updated from the LIFF tab on the [LINE Developers Console](../../console.md), even after adding a LIFF app to your channel.

> [!warning]
> The operation specification of liff.scanCodeV2()
>
> `liff.scanCodeV2()` internally uses an external library called [jsQR (opens new window)](https://github.com/cozmo/jsQR). Therefore, the 2D code reader to be launched when the `liff.scanCodeV2()` method is executed depends on the operation specification of [jsQR (opens new window)](https://github.com/cozmo/jsQR). Libraries used may be updated or changed without notice.

_Example_

JavaScript

[Link](#)

```
liff
  .scanCodeV2()
  .then((result) => {
    // result = { value: "" }
  })
  .catch((error) => {
    console.log("error", error);
  });
```

#### [#](#scan-code-v2-syntax) Syntax

```
liff.scanCodeV2();
```

#### [#](#scan-code-v2-arguments) Arguments

None

#### [#](#scan-code-v2-return-value) Return value

Returns a `Promise` object.

When the string is read by the 2D code reader, `Promise` is resolved and the object containing the character string is passed.

value

String

String scanned by the 2D code reader

##### [#](#scan-code-v2-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

### [#](#scan-code) liff.scanCode()

> [!warning]
> liff.scanCode() method deprecated
>
> The traditional `liff.scanCode()` method has been [deprecated](../../en/glossary.md#deprecated). We recommend using the [`liff.scanCodeV2()`](#scan-code-v2) method for implementing a 2D code reader.

Starts a 2D code reader and gets the string read by the user. To start the 2D code reader, turn on `ScanQR` on the [LINE Developers Console](../../console.md).

> [!warning]
> Not available on LINE for iOS
>
> `liff.scanCode()` works in these environments.
>
> | OS      | Version      | LIFF browser | External browser |
> | ------- | ------------ | ------------ | ---------------- |
> | iOS     | All versions | ❌           | ❌               |
> | Android | All versions | ✅           | ❌               |
> | PC      | All versions | ❌           | ❌               |
>
> Due to technical issues, `liff.scanCode` is `undefined` in LINE for iOS. Use it after confirming that the function exists, as shown in the sample code. To use the 2D code reader with LINE for iOS or external browsers, see [`liff.scanCodeV2()`](#scan-code-v2).

> [!warning]
> Turn \[Scan QR\] on to launch the 2D code reader
>
> - When [Adding a LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md), turn on **Scan QR**. The **Scan QR** setting can be updated from the LIFF tab on the [LINE Developers Console](../../console.md), even after adding a LIFF app to your channel.
> - You can't use `liff.scanCode()` in an external browser.

_Example_

JavaScript

[Link](#)

```
if (liff.scanCode) {
  liff.scanCode().then((result) => {
    // result = { value: "" }
  });
}
```

#### [#](#scan-code-syntax) Syntax

```
liff.scanCode();
```

#### [#](#scan-code-arguments) Arguments

None

#### [#](#scan-code-return-value) Return value

Returns a `Promise` object.

When reading a string by a 2D code reader, the `Promise` is resolved and the object containing the string read is passed.

value

String

String read by the 2D code reader

## [#](#permanent-link) Permanent link

### [#](#permanent-link-create-url-by) liff.permanentLink.createUrlBy()

Get the permanent link of any page in the LIFF app.

Permanent link format:

```
https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
```

_Example_

JavaScript

[Link](#)

```
// For example, if the endpoint URL of the LIFF app
// is https://example.com/path1?q1=v1
// and its LIFF ID is 1234567890-AbcdEfgh
liff.permanentLink
  .createUrlBy("https://example.com/path1?q1=v1")
  .then((permanentLink) => {
    // https://liff.line.me/1234567890-AbcdEfgh
    console.log(permanentLink);
  });

liff.permanentLink
  .createUrlBy("https://example.com/path1/path2?q1=v1&q2=v2")
  .then((permanentLink) => {
    // https://liff.line.me/1234567890-AbcdEfgh/path2?q=2=v2
    console.log(permanentLink);
  });

liff.permanentLink
  .createUrlBy("https://example.com/")
  .catch((error) => {
  // Error: currentPageUrl must start with endpoint URL of LIFF App.
  console.log(error);
});
```

#### [#](#permanent-link-create-url-by-syntax) Syntax

```
liff.permanentLink.createUrlBy(url);
```

#### [#](#permanent-link-create-url-by-arguments) Arguments

url

String

Required

URL to get the permanent link. You can add any query parameter or URL fragment.

#### [#](#permanent-link-create-url-by-return-value) Return value

Returns a `Promise` object.

Returns the string of the permanent link when `Promise` is resolved.

##### [#](#permanent-link-create-url-by-error-response) Error responsee

If the URL to get the permanent link doesn't begin with the URL specified for **Endpoint URL** on the [LINE Developers Console](../../console.md), `Promise` will be rejected and [`LiffError`](#liff-errors) will be returned.

For example, if the URL to get the permanent link (e.g. `https://example.com/`) is above **Endpoint URL** (e.g. `https://example.com/path1?q1=v1`), `Promise` will be rejected.

### [#](#permanent-link-create-url) liff.permanentLink.createUrl()

> [!warning]
> liff.permanentLink.createUrl() may be deprecated in the next major version update
>
> Due to technical issues, `liff.permanentLink.createUrl()` may be deprecated in the next major version update. To get the permanent link of the current page, we recommend using [`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by).

Gets the permanent link for the current page.

Permanent link format:

```
https://liff.line.me/{liffId}/{path}?{query}#{URL fragment}
```

_Example_

JavaScript

[Link](#)

```
// For example, if current location is
// /shopping?item_id=99#details
// (LIFF ID = 1234567890-AbcdEfgh)
const myLink = liff.permanentLink.createUrl();

// myLink equals "https://liff.line.me/1234567890-AbcdEfgh/shopping?item_id=99#details"
```

#### [#](#permanent-link-create-url-syntax) Syntax

```
liff.permanentLink.createUrl();
```

#### [#](#permanent-link-create-url-arguments) Arguments

None

#### [#](#permanent-link-create-url-return-value) Return value

Returns the current page's permanent link as a string.

A `LiffError` exception is thrown if the current page URL doesn't start with the URL specified in **Endpoint URL** of the LINE Developers console.

### [#](#permanent-linke-set-extra-query-param) liff.permanentLink.setExtraQueryParam()

> [!warning]
> liff.permanentLink.setExtraQueryParam() may be deprecated in the next major version update
>
> Due to technical issues, `liff.permanentLink.setExtraQueryParam()` may be deprecated in the next major version update. To add any query parameter to a permanent link on the current page, we recommend using [`liff.permanentLink.createUrlBy()`](#permanent-link-create-url-by).

You can add any query parameter to a permanent link on the current page.

Each time you execute `liff.permanentLink.setExtraQueryParam()`, the query parameters added last time are overwritten.

Delete added query parameters

- To delete the added query parameters, execute `liff.permanentLink.setExtraQueryParam("")`.
- The added query parameters will be discarded when the user navigates to another page.

_Example_

JavaScript

[Link](#)

```
// For example, if current location is
// /food?menu=pizza
// (LIFF ID = 1234567890-AbcdEfgh)
liff.permanentLink.setExtraQueryParam("user_tracking_id=8888");
const myLink = liff.permanentLink.createUrl();

// myLink equals "https://liff.line.me/1234567890-AbcdEfgh/food?menu=pizza&user_tracking_id=8888"
```

#### [#](#permanent-link-set-extra-query-params-syntax) Syntax

```
liff.permanentLink.setExtraQueryParam(extraString);
```

#### [#](#permanent-link-set-extra-query-params-arguments) Arguments

extraString

String

Required

Query parameters to add

#### [#](#permanent-link-set-extra-query-params-return-value) Return value

None

## [#](#liff-plugin) LIFF plugin

### [#](#use) liff.use()

Activates and initializes LIFF API in the [pluggable SDK](../../en/docs/liff/pluggable-sdk.md) or a [LIFF plugin](../../en/docs/liff/liff-plugin.md).

_Example of LIFF API in the pluggable SDK_

JavaScript

[Link](#)

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg", // Use own liffId
});
```

_Example of LIFF plugin_

JavaScript

[Link](#)

```
class greetPlugin {
  constructor() {
    this.name = "greet";
  }

  install() {
    return {
      hello: this.hello,
    };
  }

  hello() {
    console.log("Hello, World!");
  }
}

liff.use(new greetPlugin());
```

#### [#](#use-syntax) Syntax

```
liff.use(module, option);
```

#### [#](#use-arguments) Arguments

module

Object

Required

A LIFF API module in the pluggable SDK or a LIFF plugin.

If you pass a LIFF API module, you need to instantiate the LIFF API module. For more information, see [How to use the pluggable SDK](../../en/docs/liff/pluggable-sdk.md#how-to-use) in the LIFF documentation.

If you pass a LIFF plugin and the LIFF plugin is a class, you need to instantiate the LIFF plugin. For more information, see [Using a LIFF plugin](../../en/docs/liff/liff-plugin.md#use-liff-plugin) in the LIFF documentation.

option

Any value

Optional

Value to pass to the LIFF plugin specified by the `module` property. The value is passed as the second argument of the LIFF plugin's [`install()`](../../en/docs/liff/liff-plugin.md#install) method. For more information, see [option](../../en/docs/liff/liff-plugin.md#option) in the LIFF documentation.

#### [#](#use-return-value) Return value

Returns the `liff` object.

## [#](#i18n) Internationalization

### [#](#i18n-set-lang) liff.i18n.setLang()

Specify the language of the text displayed by the LIFF SDK.

_Example_

JavaScript

[Link](#)

```
liff.i18n.setLang("en");
```

#### [#](#i18n-set-lang-syntax) Syntax

```
liff.i18n.setLang(language);
```

#### [#](#i18n-set-lang-arguments) Arguments

language

String

Required

Language tag as defined in [RFC 5646 (BCP 47) (opens new window)](https://datatracker.ietf.org/doc/html/rfc5646). If there is no translation for the specified language tag, `en` is used as a fallback.

#### [#](#i18n-set-lang-return-value) Return value

Returns a `Promise` object.

##### [#](#i18n-set-lang-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

## [#](#others) Others

### [#](#create-shortcut-on-home-screen) liff.createShortcutOnHomeScreen()

This feature can only be used for verified MINI Apps

This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.

Displays a screen for adding a shortcut to your [LINE MINI App](../../en/docs/line-mini-app.md) to the home screen of the user's device.

![add-shortcut-screen-ios-en](/assets/img/add-shortcut-screen-ios-en.a0ae2c4e.png)

For more information, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](../../en/docs/line-mini-app/develop/add-to-home-screen.md) in the LINE MINI App documentation.

> [!warning]
> When to execute the liff.createShortcutOnHomeScreen() method
>
> The `liff.createShortcutOnHomeScreen()` method should be executed in response to a user action (e.g. tap) on your LINE MINI App so as not to spoil the user experience.

_Example_

JavaScript

[Link](#)

```
// If the endpoint URL of the LINE MINI App
// is https://example.com/path1/path2
// and its LIFF ID is 1234567890-AbcdEfgh

// Example of specifying the LIFF URL
liff
  .createShortcutOnHomeScreen({
    url: "https://miniapp.line.me/1234567890-AbcdEfgh",
  })
  .then(() => { /* ... */ });

liff
  .createShortcutOnHomeScreen({
    url: "https://liff.line.me/1234567890-AbcdEfgh",
  })
  .then(() => { /* ... */ });

// Example of specifying a permanent link
liff
  .createShortcutOnHomeScreen({
    url: "https://liff.line.me/1234567890-AbcdEfgh/path3",
  })
  .then(() => { /* ... */ });

// Example of specifying the endpoint URL of the LINE MINI App
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/path1/path2",
  })
  .then(() => { /* ... */ });

// Example of specifying a URL that begins with the endpoint URL of the LINE MINI App
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/path1/path2/path3",
  })
  .then(() => { /* ... */ });

// Example of specifying a URL that results in an error
liff
  .createShortcutOnHomeScreen({
    url: "https://example.com/invalid-path",
  })
  .then(() => { /* ... */ })
  .catch((error) => {
    // invalid URL.
    console.log(error.message);
  });
```

#### [#](#create-shortcut-on-home-screen-conditions-of-use) Conditions of use

To use the `liff.createShortcutOnHomeScreen()` method, all of the following conditions must be met:

- It's a LINE MINI App.
- The LIFF SDK version of the LINI MINI App is v2.23.0 or later.
- The LINE app version on the user's device is 13.20.0 or later.

#### [#](#create-shortcut-on-home-screen-operating-conditions) Operating conditions

If the OS of the user's device is iOS, the conditions for the `liff.createShortcutOnHomeScreen()` method to work are as follows. If this method is executed in a non-working environment, an error page will be displayed.

| Default browser                       | iOS version       | Whether it works or not |
| ------------------------------------- | ----------------- | ----------------------- |
| Safari                                | All versions      | Works                   |
| Chrome                                | 16.4 or later     | Works                   |
| Browsers other than Safari and Chrome | 16.4 or later     | Not guaranteed to work  |
| Browsers other than Safari            | Earlier than 16.4 | Doesn't work            |

For example, if you execute the `liff.createShortcutOnHomeScreen()` method in Chrome on earlier than iOS 16.4, the following error page will be displayed:

![add-shortcut-screen-ios-error-en](/assets/img/add-shortcut-screen-ios-error-en.660b562f.png)

#### [#](#create-shortcut-on-home-screen-syntax) Syntax

```
liff.createShortcutOnHomeScreen(params);
```

#### [#](#create-shortcut-on-home-screen-arguments) Arguments

params

Object

Required

Parameter object

params.url

String

Required

URL. You can specify the following URLs:

- [LIFF URL](../../en/glossary.md#liff-url)
- [Permanent link](../../en/glossary.md#permanent-link-liff)
- The endpoint URL of the LINE MINI App
- URL that begins with the endpoint URL of the LINE MINI App

#### [#](#create-shortcut-on-home-screen-return-value) Return value

Returns a `Promise` object.

When the Add Shortcut screen is displayed, the `Promise` is resolved. No value is passed.

You can't confirm whether the user has actually added a shortcut to your LINE MINI app to the home screen of the user's device.

##### [#](#create-shortcut-on-home-screen-error-response) Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.

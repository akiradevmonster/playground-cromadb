---
title: 'Developing a LIFF app | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/developing-liff-apps/'
---

## Table of Contents

[Setting the title of the LIFF app](#setting-title)

[Integrating the LIFF SDK with the LIFF app](#integrating-sdk)

[Specify the CDN path](#specify-cdn-path) [Use the npm package](#use-npm-package)

[Initializing the LIFF app](#initializing-liff-app)

[Important points to consider when initializing the LIFF app](#initializing-liff-app-notes) [To use LINE Login in an external browser](#to-use-line-login-in-external-browser)

[Calling the LIFF API](#calling-liff-api)

[Getting the environment in which the LIFF app is running](#getting-environment) [Performing a login process](#login-with-line-login) [Opening a URL](#opening-url) [Opening the 2D code reader](#opening-two-dimensional-code-reader) [Getting the screen type from which the LIFF app was launched](#getting-context) [Get user profile](#getting-user-profile) [Getting the friendship status between the user and the LINE Official Account](#get-friendship-status) [Getting the permanent link of any page in the LIFF app](#get-permanent-link) [Sending messages to the current chat room](#sending-messages) [Sending messages to a user's friend (share target picker)](#share-target-picker) [Closing the LIFF app](#closing-liff-app)

[Setting the OGP tags](#setting-ogp-tags)

[When opening an external site that isn't a LIFF app](#transition-to-external-site)

[Next steps](#steps-after-developing-liff-app)

# [#](#page-title) Developing a LIFF app

A LIFF app is a web app based on HTML and JavaScript. Here, we'll explain the process of developing a LIFF app and processes specific to building LIFF apps.

- [Setting the title of the LIFF app](#setting-title)
- [Integrating the LIFF SDK with the LIFF app](#integrating-sdk)
  - [Specify the CDN path](#specify-cdn-path)
  - [Use the npm package](#use-npm-package)
- [Initializing the LIFF app](#initializing-liff-app)
  - [Important points to consider when initializing the LIFF app](#initializing-liff-app-notes)
  - [To use LINE Login in an external browser](#to-use-line-login-in-external-browser)
- [Calling the LIFF API](#calling-liff-api)
  - [Getting the environment in which the LIFF app is running](#getting-environment)
  - [Performing a login process](#login-with-line-login)
  - [Opening a URL](#opening-url)
  - [Opening the 2D code reader](#opening-two-dimensional-code-reader)
  - [Getting the screen type from which the LIFF app was launched](#getting-context)
  - [Get user profile](#getting-user-profile)
  - [Getting the friendship status between the user and the LINE Official Account](#get-friendship-status)
  - [Getting the permanent link of any page in the LIFF app](#get-permanent-link)
  - [Sending messages to the current chat room](#sending-messages)
  - [Sending messages to a user's friend (share target picker)](#share-target-picker)
  - [Closing the LIFF app](#closing-liff-app)
- [Setting the OGP tags](#setting-ogp-tags)
- [When opening an external site that isn't a LIFF app](#transition-to-external-site)
- [Next steps](#steps-after-developing-liff-app)

## [#](#setting-title) Setting the title of the LIFF app

The title of the LIFF app will appear in the title bar of the LIFF app. Specify the name of the LIFF app in the `<title>` element of the HTML source of the web app.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The title</title>
```

## [#](#integrating-sdk) Integrating the LIFF SDK with the LIFF app

You can embed the LIFF SDK in the LIFF app using these methods:

- [Specify the CDN path](#specify-cdn-path)
- [Use the npm package](#use-npm-package)

### [#](#specify-cdn-path) Specify the CDN path

To use the functions of the LIFF SDK, specify the URL of the LIFF SDK in the `src` attribute of the `<script>` element of the LIFF app's HTML source. We prepare these two types of CDN paths for LIFF. Specify the CDN path that suits your purpose.

| CDN path       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CDN edge path  | This is a CDN path that contains only the MAJOR version. Use this CDN path if you want to always be up-to-date with the latest LIFF features. You only need to update your URL when a new MAJOR version is released.e.g.: <https://static.line-scdn.net/liff/edge/2/sdk.js>                                                                                                                                                                                                             |
| CDN fixed path | This is a CDN path that contains up to the PATCH version. Use this CDN path if you want to use the LIFF features of a specific version. You can continue to use the specified PATCH version as long as you don't update the LIFF app. Update your URL only when you want to implement our new features, security updates, and bug fixes. It's not updated automatically and isn't affected by the LIFF SDK update.e.g.: <https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js> |

> [!warning]
> Which version should you use?
>
> Developers using the CDN fixed path will need to decide when to update their LIFF app. You can evaluate each update we provide by frequently checking the [Release notes](../../../en/docs/liff/release-notes.md) in the LIFF documentation and decide if the update is right for you.

Example of specifying a CDN fixed path:

```
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js"></script>
```

> [!warning]
> LIFF SDK is written in UTF-8
>
> The LIFF SDK is written in UTF-8, so if your HTML source uses a character encoding different than UTF-8, make sure you also specify `charset="utf-8"`.

### [#](#use-npm-package) Use the npm package

The LIFF SDK is available as an npm package. You can use npm to install the LIFF SDK.

> [!warning]
> Manage your SDK version
>
> It is the developer's responsibility to use an appropriate SDK version. To keep your SDK version up to date, check the [LIFF release notes](../../../en/docs/liff/release-notes.md) on a regular basis, and update your local SDK frequently. For more information about LIFF's versioning policy, see [LIFF SDK (sdk.js) update policy](../../../en/docs/liff/versioning-policy.md#update-policy).

> [!warning]
> An error will occur during the build when using the npm version of LIFF v2.16.0 or earlier in a project using webpack v5.
>
> [Node.js polyfill has been removed from webpack v5. (opens new window)](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed) Accordingly, if you use the npm version of LIFF v2.16.0 or earlier in a project using webpack v5, you will get a build error. For more information, see the news from October 26, 2021, [LIFF v2.16.1 released](../../../en/news/2021/10/26/release-liff-2-16-1.md).

To install the LIFF SDK via npm and import it into your app, follow these steps:

1. Run this command in your terminal to install the LIFF SDK via npm:

    ```
    npm install --save @line/liff
    ```

    Alternatively, you can run this command in your terminal to install the LIFF SDK via Yarn:

    ```
    yarn add @line/liff
    ```

2. Import the SDK into your app

    Include the following code in your JavaScript or TypeScript file:

    ```
    import liff from "@line/liff";

    liff.init({
      liffId: "1234567890-AbcdEfgh", // Use own liffId
    });
    ```

    Type definitions for TypeScript are already included in the `@line/liff` package.

    > [!warning]
    > Don't declare or modify window.liff
    >
    > For backward compatibility, don't declare or modify the global LIFF instance `window.liff`. Declaring or modifying window.liff may cause malfunctioning of the LINE app.

Related page: [https://www.npmjs.com/package/@line/liff (opens new window)](https://www.npmjs.com/package/@line/liff)

Reducing the LIFF SDK file size

Using the pluggable SDK reduces the LIFF SDK file size. For more information, see [Pluggable SDK](../../../en/docs/liff/pluggable-sdk.md).

## [#](#initializing-liff-app) Initializing the LIFF app

The [`liff.init()`](../../../en/reference/liff.md#initialize-liff-app) method initializes the LIFF app and enables you to call the other methods of the LIFF SDK from the LIFF app.

LIFF apps must be initialized each time a page is opened. Even if the transition is within the same LIFF app, you should execute the `liff.init()` method when you open a new page.

If you use LIFF features without properly initializing the LIFF app, we don't guarantee that the features will work.

The process from when the user accesses the [LIFF URL](../../../en/glossary.md#liff-url) on the LINE app to when the LIFF app is initialized is as follows:

For more information, see [LIFF Behaviors from accessing the LIFF URL to opening the LIFF app](../../../en/docs/liff/opening-liff-app.md#redirect-flow).

> [!warning]
> LIFF app's query parameters
>
> When you access a LIFF URL or perform a transition between LIFF apps, the URL may be given query parameters that begin with `liff.*`.
>
> e.g.
>
> - `liff.state` (indicates additional information specified in LIFF URL)
> - `liff.referrer` (indicates where the referrer came from when transitioning between LIFF apps. For more information, see [Get URL from before LIFF-to-LIFF transition](../../../en/docs/liff/opening-liff-app.md#using-liff-referrer))
>
> The above query parameters are given by the SDK so that LIFF apps can function properly. When you independently alter the above query parameters, proper opening of the LIFF app and a transition between LIFF apps may not be guaranteed. Implement your app so that the `liff.*` query parameter is altered after `liff.init()` is resolved.

Functions that can be executed even before the LIFF app is initialized

This property or methods are available even before the `liff.init()` method is executed. You can get the environment in which the LIFF app is running before initializing the LIFF app, or close the LIFF app when the LIFF app initialization fails.

- [liff.ready](../../../en/reference/liff.md#ready)
- [liff.getOS()](../../../en/reference/liff.md#get-os)
- [liff.getAppLanguage()](../../../en/reference/liff.md#get-app-language)
- [liff.getLanguage()](../../../en/reference/liff.md#get-language) (deprecated)
- [liff.getVersion()](../../../en/reference/liff.md#get-version)
- [liff.getLineVersion()](../../../en/reference/liff.md#get-line-version)
- [liff.isInClient()](../../../en/reference/liff.md#is-in-client)
- [liff.closeWindow()](../../../en/reference/liff.md#close-window)
- [liff.use()](../../../en/reference/liff.md#use)
- [liff.i18n.setLang()](../../../en/reference/liff.md#i18n-set-lang)

To use the `liff.closeWindow()` method before the initialization of the LIFF app by `liff.init()` has finished, your LIFF SDK version must be v2.4.0 or later.

Enabling automatic executing of the liff.login() method when the LIFF app is initialized in external browsers

By specifying `true` in the `withLoginOnExternalBrowser` property of the `config` object of the `liff.init()` method, the `liff.login()` method can be executed automatically when the LIFF app is initialized in external browsers.

```
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
    withLoginOnExternalBrowser: true, // Enable automatic login process
  })
  .then(() => {
    // Start to use liff's api
  });
```

`liffId` needs a specified LIFF app ID, which you can get by adding the LIFF app to your channel. For more information, see [Adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md).

```
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    // start to use LIFF's api
  })
  .catch((err) => {
    console.log(err);
  });
```

Also, with `liff.ready`, you can get the `Promise` object that resolves when you run `liff.init()` for the first time after starting the LIFF app.

For more information, see the [liff.init()](../../../en/reference/liff.md#initialize-liff-app) and [liff.ready](../../../en/reference/liff.md#ready) sections in the LIFF v2 API reference.

### [#](#initializing-liff-app-notes) Important points to consider when initializing the LIFF app

The following are important points to consider when initializing your LIFF app. Read and understand these points before you start developing your LIFF app.

- [Execute `liff.init()` at the endpoint URL or at a lower level](#initializing-liff-app-notes-1)
- [Execute `liff.init()` once for both the primary redirect URL and once at the secondary redirect URL](#initializing-liff-app-notes-2)
- [Process URL changes after `liff.init()` completes](#initializing-liff-app-notes-3)
- [Use caution when handling the primary redirect URL](#initializing-liff-app-notes-4)

#### [#](#initializing-liff-app-notes-1) Execute `liff.init()` at the endpoint URL or at a lower level

The `liff.init()` method will only work on URLs that are exactly the same as the endpoint URL, or on URLs that are at a lower level than the endpoint URL. If the LIFF app transitions to a URL other than these, the `liff.init()` method isn't guaranteed to work.

The following example shows whether the behavior is guaranteed for the URL that executes the `liff.init()` method when the endpoint URL is `https://example.com/path1/`.

| URL to execute liff.init()          | Guaranteed to work |
| ----------------------------------- | ------------------ |
| <https://example.com/>                | ❌                 |
| <https://example.com/path1/>          | ✅                 |
| <https://example.com/path1/language/> | ✅                 |
| <https://example.com/path2/>          | ❌                 |

#### [#](#initializing-liff-app-notes-2) Execute `liff.init()` once for both the primary redirect URL and once at the secondary redirect URL

The `liff.init()` method performs initialization processing based on information such as `liff.state` and `access_token=xxx` given to the primary redirect URL. If your endpoint URL includes a query parameter or path, to properly initialize the LIFF app, execute the `liff.init()` method once for both the primary redirect URL and the secondary redirect URL. For more information, see [Behaviors from accessing the LIFF URL to opening the LIFF app](../../../en/docs/liff/opening-liff-app.md#redirect-flow).

#### [#](#initializing-liff-app-notes-3) Process URL changes after `liff.init()` completes

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

#### [#](#initializing-liff-app-notes-4) Use caution when handling the primary redirect URL

The `access_token=xxx` automatically granted to the primary redirect URL is the user's access token (confidential information). Don't send the primary redirect URL to an external logging tool such as Google Analytics.

Note that in LIFF v2.11.0 or later, credential information is excluded from URLs when the `liff.init()` method is resolved. Therefore, you can prevent leaking credential information by sending the page view in the `then()` method as follows. If you want to use logging tools, we recommend that you upgrade your LIFF app to v2.11.0 or later. For more information about the updates in LIFF v2.11.0, see [Release Notes](../../../en/docs/liff/release-notes.md#liff-v2-11-0).

```
liff
  .init({
    liffId: "1234567890-AbcdEfgh", // Use own liffId
  })
  .then(() => {
    ga("send", "pageview");
  });
```

### [#](#to-use-line-login-in-external-browser) To use LINE Login in an external browser

To use LINE Login in an external browser, call the `liff.init()` method twice as shown below.

1. Call the `liff.init()` method after loading the LIFF SDK.
2. Call the `liff.login()` method. Once the processing of the authentication page and the authorization screen is complete, you will be redirected to the LIFF app (`redirectUri`). Call the `liff.init()` method again.

    If an error occurs during the processing of the `liff.init()` method, or if the user cancels authorization at the time of login, `errorCallback` will be executed.

![Flow diagram](/assets/img/initializing-liff-app-flow.f8f4c212.png)

> [!warning]
> Authorization requests within LIFF browser
>
> The behavior of LINE Login authorization requests within the LIFF browser isn't guaranteed. Also, when opening LIFF apps from an external browser or LINE's in-app browser, make sure to use the [`liff.login()`](../../../en/reference/liff.md#login) method for the login process, not the [authorization requests with LINE Login](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

## [#](#calling-liff-api) Calling the LIFF API

You can do these things after the LIFF SDK integration and LIFF initialization.

- [Getting the environment in which the LIFF app is running](#getting-environment)
- [Performing a login process](#login-with-line-login)
- [Opening a URL](#opening-url)
- [Opening the 2D code reader](#opening-two-dimensional-code-reader)
- [Getting the screen type from which the LIFF app was launched](#getting-context)
- [Getting the user's profile](#getting-user-profile)
- [Getting the friendship status between the user and the LINE Official Account](#get-friendship-status)
- [Getting a permanent link for the current page](#get-permanent-link)
- [Sending messages to the current chat room](#sending-messages)
- [Sending messages to a user's friend (share target picker)](#share-target-picker)
- [Closing the LIFF app](#closing-liff-app)

### [#](#getting-environment) Getting the environment in which the LIFF app is running

Call the `liff.isInClient()` method and the `liff.getOS()` method to get the environment in which the LIFF app is running.

```
// print the environment in which the LIFF app is running
console.log(liff.getAppLanguage());
console.log(liff.getVersion());
console.log(liff.isInClient());
console.log(liff.isLoggedIn());
console.log(liff.getOS());
console.log(liff.getLineVersion());
```

For more information, see each method in the LIFF API reference.

- [liff.getAppLanguage()](../../../en/reference/liff.md#get-app-language)
- [liff.getVersion()](../../../en/reference/liff.md#get-version)
- [liff.isInClient()](../../../en/reference/liff.md#is-in-client)
- [liff.isLoggedIn()](../../../en/reference/liff.md#is-logged-in)
- [liff.getOS()](../../../en/reference/liff.md#get-os)
- [liff.getLineVersion()](../../../en/reference/liff.md#get-line-version)

### [#](#login-with-line-login) Performing a login process

Call the `liff.login()` method to perform the login process for both the [LINE's in-app browser](../../../en/glossary.md#line-iab) and [external browsers](../../../en/glossary.md#external-browser).

> [!warning]
> Note
>
> You can't use `liff.login()` in a LIFF browser, as it's automatically executed when `liff.init()` is executed.

If you've specified true in the withLoginOnExternalBrowser property when executing the liff.init() method

If you've specified `true` in the `withLoginOnExternalBrowser` property of the `liff.init()` method, the `liff.login()` method will be automatically executed when you initialize your LIFF app, even in external browsers. For more information, see [liff.init()](../../../en/reference/liff.md#initialize-liff-app) in the LIFF API reference.

```
// login call, only when external browser or LINE's in-app browser is used
if (!liff.isLoggedIn()) {
  liff.login();
}
```

You can also call the `liff.logout()` method to log out.

```
// logout call only when external browse or LINE's in-app browser is used
if (liff.isLoggedIn()) {
  liff.logout();
  window.location.reload();
}
```

For more information, see [liff.login()](../../../en/reference/liff.md#login) and [liff.logout()](../../../en/reference/liff.md#logout) in the LIFF v2 API reference.

### [#](#opening-url) Opening a URL

The `liff.openWindow()` method opens the specified URL in LINE's in-app browser or an external browser.

The following code opens `https://line.me` in an external browser.

```
// openWindow call
liff.openWindow({
  url: "https://line.me",
  external: true,
});
```

For more information, see [liff.openWindow()](../../../en/reference/liff.md#open-window) in the LIFF API reference.

### [#](#opening-two-dimensional-code-reader) Opening the 2D code reader

Call the `liff.scanCodeV2()` method to launch a 2D code reader, and get the string read by the user.

```
// scanCodeV2 call
liff
  .scanCodeV2()
  .then((result) => {
    // e.g. result = { value: 'Hello LIFF app!' }
  })
  .catch((err) => {
    console.log(err);
  });
```

For more information, see [liff.scanCodeV2()](../../../en/reference/liff.md#scan-code-v2) in the LIFF API reference.

> [!warning]
> liff.scanCode() method deprecated
>
> The traditional `liff.scanCode()` method has been [deprecated](../../../en/glossary.md#deprecated). We recommend using the `liff.scanCodeV2()` method for implementing a 2D code reader.

> [!warning]
> The operation environment of the liff.scanCode2() method
>
> The `liff.scanCodeV2()` method works in the following environments:
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
> \*2 Only available when the screen size of the LIFF browser is `Full`. For details, see [Size of the LIFF browser](../../../en/docs/liff/overview.md#screen-size) in the LIFF documentation.

> [!warning]
> Turn \[Scan QR\] on to launch the 2D code reader
>
> When [Adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md), turn on **Scan QR**. The **Scan QR** setting can be updated from the LIFF tab on the [LINE Developers Console](../../../console.md), even after adding a LIFF app to your channel.

### [#](#getting-context) Getting the screen type from which the LIFF app was launched

Execute the `liff.getContext()` method to get a value that specifies the screen type (1-on-1 chat, group chat, multi-person chat, or external browser) from which the LIFF app is launched.

```
const context = liff.getContext();
console.log(context);
// {"type": "utou", "userId": "U70e153189a29f1188b045366285346bc", "viewType": "full", "accessTokenHash": "ArIXhlwQMAZyW7SDHm7L2g", "availability": {"shareTargetPicker": {"permission": true, "minVer": "10.3.0"}, "multipleLiffTransition": {"permission": true, "minVer": "10.18.0"}}}
```

For more information, see [liff.getContext()](../../../en/reference/liff.md#get-context) in the LIFF v2 API reference.

### [#](#getting-user-profile) Get user profile

There are two ways to get a user's profile through getting an ID token in the LIFF app. Use the method for your intended purpose.

- [Send user data to the server](#getting-tokens)
- [Display user data to the LIFF app](#getting-decoded-id-token)

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md), select the `openid` scope. You can't get the ID tokens if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../../console.md) even after adding the LIFF app.

You can get the user's email address

To get the email addresses of users, select the `email` scope when [adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md). You will get the email address once the user grants permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../../console.md) even after adding the LIFF app.

#### [#](#getting-tokens) Send user data to the server

When the LIFF app sends user data to the server, it sends the access token or ID token obtained via this method. For more information, see [Using user data in LIFF apps and servers](../../../en/docs/liff/using-user-profile.md) in the LIFF documentation.

- Execute the `liff.getAccessToken()` method to get the access token of the current user. When the user closes the LIFF app, the access token will be revoked even if it hasn't expired.

  ```
  // get access token
  if (!liff.isLoggedIn() && !liff.isInClient()) {
    window.alert(
      'To get an access token, you need to be logged in. Tap the "login" button below and try again.'
    );
  } else {
    const accessToken = liff.getAccessToken();
    console.log(accessToken);
  }
  ```

  For more information, see [liff.getAccessToken()](../../../en/reference/liff.md#get-access-token) in the LIFF API reference.

- Execute the `liff.getIDToken()` method to get the raw ID token of the current user.

  ```
  liff.init(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // print raw idToken object
  });
  ```

  For more information, see [liff.getIDToken()](../../../en/reference/liff.md#get-id-token) in the LIFF API reference.

#### [#](#getting-decoded-id-token) Display user data to the LIFF app

Execute the `liff.getDecodedIDToken()` method to get the profile information and email address of the current user.

Use this API to use the user's display name in the LIFF app.

> [!danger]
> Don't send user data to the server
>
> Don't send the user data obtained by `liff.getDecodedIDToken()` to the server. Send the ID token obtained with [`liff.getIDToken()`](#getting-tokens) instead.

```
liff.init(() => {
  const idToken = liff.getDecodedIDToken();
  console.log(idToken); // print decoded idToken object
});
```

For more information, see [liff.getDecodedIDToken()](../../../en/reference/liff.md#get-decoded-id-token) in the LIFF v2 API reference.

### [#](#get-friendship-status) Getting the friendship status between the user and the LINE Official Account

Gets the friendship status between the user and the LINE Official Account that's linked to the LINE Login channel to which the LIFF app is added.

Learn more on how to [Add a LINE Official Account as a friend when logged in (add friend option)](../../../en/docs/line-login/link-a-bot.md) in the LINE Login documentation.

```
liff.getFriendship().then((data) => {
  if (data.friendFlag) {
    // something you want to do
  }
});
```

Learn more from [liff.getFriendship()](../../../en/reference/liff.md#get-friendship) in the LIFF v2 API reference.

> [!warning]
> Select a scope
>
> When [adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md), select the `profile` scope. You can't get the friendship statuses if you don't select the scope, or the users don't grant permission. The scope selections can be changed in the LIFF tab of the [LINE Developers Console](../../../console.md) even after adding the LIFF app.

### [#](#get-permanent-link) Getting the permanent link of any page in the LIFF app

Execute the `liff.permanentLink.createUrlBy()` method to get the permanent link of any page in the LIFF app.

```
// For example, if the endpoint URL of the LIFF app is https://example.com/path1?q1=v1 and its LIFF ID is 1234567890-AbcdEfgh
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
```

For more information, see [liff.permanentLink.createUrlBy()](../../../en/reference/liff.md#permanent-link-create-url-by) in the LIFF v2 API reference.

### [#](#sending-messages) Sending messages to the current chat room

The `liff.sendMessages()` method sends messages on behalf of the user to the chat room where the LIFF app is opened. You can send up to 5 message objects in a single request.

This code sends "Hello, World!" as the user's message to the chat room where the LIFF app is displayed.

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

For more information, see [liff.sendMessages()](../../../en/reference/liff.md#send-messages) in the LIFF API reference.

### [#](#share-target-picker) Sending messages to a user's friend (share target picker)

Execute the `liff.shareTargetPicker()` method to display the target picker (screen for selecting a group or friend) and send the message created by the developer to the selected target. This message appears to your group or friends as if you had sent it.

![target picker](/assets/img/share-target-picker_tobe_en.86a8899a.png)

#### [#](#using-share-target-picker) Using the share target picker

To use the share target picker, developers need to consent to "Agreement Regarding Use of Information" by following the instructions below. This consent is required for each channel.

1. In the [LINE Developers Console](../../../console.md), select the LINE Login channel to add the LIFF app.
2. Click **shareTargetPicker** on the **LIFF** tab and "Agreement Regarding Use of Information" will be displayed.
3. Carefully read the content displayed and check **I have read and agree to the Agreement Regarding Use of Information**, then click **Enable**.

#### [#](#share-target-picker-sample-code) Sample code of the share target picker

The following code displays the target picker and sends "Hello, World!" as the user's message to the selected group or friends. If you want to confirm that the target picker can be used in the environment where the LIFF app is started, execute `liff.isApiAvailable()` first.

```
if (liff.isApiAvailable("shareTargetPicker")) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!",
    },
  ]);
}
```

For more information, see [liff.isApiAvailable()](../../../en/reference/liff.md#is-api-available) and [liff.shareTargetPicker()](../../../en/reference/liff.md#share-target-picker) in the LIFF v2 API reference.

> [!warning]
> Note
>
> When using an external browser, call `liff.login()`, complete the login process, then call `liff.shareTargetPicker()`.

### [#](#closing-liff-app) Closing the LIFF app

The `liff.closeWindow()` method closes the opened LIFF app.

```
// closeWindow call
if (!liff.isInClient()) {
  window.alert(
    "This button is unavailable as LIFF is currently being opened in an external browser."
  );
} else {
  liff.closeWindow();
}
```

For more information, see [liff.closeWindow()](../../../en/reference/liff.md#close-window) in the LIFF v2 API reference.

> [!warning]
> Note
>
> `liff.closeWindow()` isn't guaranteed to work in an external browser.

## [#](#setting-ogp-tags) Setting the OGP tags

By setting an OGP tag for each page of the LIFF app, for example, you can display any title, description, or thumbnail image when sharing the URL of your LIFF app (`https://liff.line.me/{liffId}`) in the LINE chat room, and so on.

These are the OGP tags supported by LIFF. For more information on OGP tags, see [The Open Graph protocol (opens new window)](https://ogp.me/).

```
<html lang="ja" prefix="og: http://ogp.me/ns#">
<meta property="og:title" content="The title">
<meta property="og:type" content="`website`, `blog`, or `article`">
<meta property="og:description" content="A one to two sentence description">
<meta property="og:url" content="The URL">
<meta property="og:site_name" content="The name that represents the overall site">
<meta property="og:image" content="An image URL">
```

> [!warning]
> Note
>
> When sharing the URL of the LIFF app in the format of `line://app/{liffId}` (deprecated), the OGP tag will be ignored.

## [#](#transition-to-external-site) When opening an external site that isn't a LIFF app

When opening an external site that isn't a LIFF app from a LIFF app opened in the LIFF browser, a popup will appear indicating that "This is an external page".

![A popup when moving to the external site](/assets/img/liff-opening-external-site-en.92d7023d.jpg)

The popup will only appear when opening the external site in the same window. If the external site is opened in a different window, the popup doesn't appear.

> [!warning]
> Transitioning up to a higher level than the LIFF endpoint URL
>
> When transitioning up to a higher level (e.g. `https://example.com/`) than the endpoint URL (e.g. `https://example.com/path`) itself in a LIFF app, the behavior isn't guaranteed.

## [#](#steps-after-developing-liff-app) Next steps

After developing the LIFF app, deploy it on any server. Once deployed, do these things:

1. [Add the LIFF app to your channel.](../../../en/docs/liff/registering-liff-apps.md)
2. [Open the LIFF app](../../../en/docs/liff/opening-liff-app.md)

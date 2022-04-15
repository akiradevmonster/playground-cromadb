---
title: 'Open a LINE MINI App in an external browser | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/external-browser/'
---

## Table of Contents

[Explicitly handle logging in for services that require LINE Login](#execute-line-login)

[1\. Automatic execution of LINE Login at initialization](#execute-line-login-01) [2\. Execute LINE Login when a user isn't logged in](#execute-line-login-02)

[Direct users to the LINE app when using features that aren't available in an external browser](#unavailable-in-external-browser)

[Assume that non-LINE users will open the LINE MINI App](#non-line-users)

# [#](#page-title) Open a LINE MINI App in an external browser

In October 2025, LINE MINI Apps will be available in a external browser

For more information, see the news from April 2, 2025, [In October 2025, all LINE MINI App users will be able to use the service in a web browser](../../../../en/news/2025/04/02/mini-app-browser.md).

When developing a LINE MINI App, make sure that the LINE MINI App service is also available when users access the endpoint URL with an [external browser](../../../../en/glossary.md#external-browser).

When using the LINE MINI App with an external browser, note the following:

- [Explicitly handle logging in for services that require LINE Login](#execute-line-login)
  - [1\. Automatic execution of LINE Login at initialization](#execute-line-login-01)
  - [2\. Execute LINE Login when a user isn't logged in](#execute-line-login-02)
- [Direct users to the LINE app when using features that aren't available in an external browser](#unavailable-in-external-browser)
- [Assume that non-LINE users will open the LINE MINI App](#non-line-users)

## [#](#execute-line-login) Explicitly handle logging in for services that require LINE Login

When opening the LINE MINI App in an external browser, unlike the LIFF browser, simply executing the [`liff.init()`](../../../../en/reference/liff.md#initialize-liff-app) method will not execute the LINE Login.

Therefore, if LINE Login is required to use your service, explicitly execute LINE Login using one of the following methods:

### [#](#execute-line-login-01) 1. Automatic execution of LINE Login at initialization

By specifying `true` in the `withLoginOnExternalBrowser` property of the `config` object of the [`liff.init()`](../../../../en/reference/liff.md#initialize-liff-app) method, the [`liff.login()`](../../../../en/reference/liff.md#login) method can be executed automatically when the LIFF app is initialized in external browsers.

Example:

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

### [#](#execute-line-login-02) 2. Execute LINE Login when a user isn't logged in

If the user isn't logged in with LINE Login and the service requires it, you can just execute LINE Login.

Check the user's login status using the [`liff.isLoggedIn()`](../../../../en/reference/liff.md#is-logged-in) method, and if the user isn't logged in, execute the [`liff.login()`](../../../../en/reference/liff.md#login) method.

Example:

```
if (!liff.isLoggedIn()) {
  liff.login();
}
```

For more information, see [To use LINE Login in an external browser](../../../../en/docs/liff/developing-liff-apps.md#to-use-line-login-in-external-browser) in the LIFF documentation.

## [#](#unavailable-in-external-browser) Direct users to the LINE app when using features that aren't available in an external browser

If your LINE MINI App needs to use a feature that isn't available in external browsers, a user needs to open the LINE MINI App on the LINE app.

Features that can't be used with external browsers and aren't guaranteed to work are as follows:

- [liff.sendMessages()](../../../../en/reference/liff.md#send-messages)
- [liff.openWindow()](../../../../en/reference/liff.md#open-window)
- [liff.closeWindow()](../../../../en/reference/liff.md#close-window)
- [liff.scanCode()](../../../../en/reference/liff.md#scan-code) (deprecated)

When opening your LINE MINI App that uses these features in an external browser, it's recommended to place a link to the LINE MINI App on the screen with the text "To use this feature, you must open the LINE MINI App in LINE app".

Note that the methods [`liff.getContext()`](../../../../en/reference/liff.md#get-context) and [`liff.isInClient()`](../../../../en/reference/liff.md#is-in-client) can be used to get the environment of the LINE MINI App. We recommend to use these methods if you want to change the display according to the environment of the LINE MINI App.

## [#](#non-line-users) Assume that non-LINE users will open the LINE MINI App

If non-LINE users, such as overseas travelers, are expected to use your LINE MINI App, we recommend that they can use the service without LINE Login in an external browser.

The LIFF API properties and methods that can be used without LINE Login in an external browser are as follows:

- [liff.id](../../../../en/reference/liff.md#id)
- [liff.ready](../../../../en/reference/liff.md#ready)
- [liff.init()](../../../../en/reference/liff.md#initialize-liff-app)
- [liff.getOS()](../../../../en/reference/liff.md#get-os)
- [liff.getAppLanguage()](../../../../en/reference/liff.md#get-app-language)
- [liff.getLanguage()](../../../../en/reference/liff.md#get-language) (deprecated)
- [liff.getVersion()](../../../../en/reference/liff.md#get-version)
- [liff.getLineVersion()](../../../../en/reference/liff.md#get-line-version)
- [liff.isInClient()](../../../../en/reference/liff.md#is-in-client)
- [liff.isLoggedIn()](../../../../en/reference/liff.md#is-logged-in)
- [liff.permanentLink.createUrlBy()](../../../../en/reference/liff.md#permanent-link-create-url-by)
- [liff.use()](../../../../en/reference/liff.md#use)

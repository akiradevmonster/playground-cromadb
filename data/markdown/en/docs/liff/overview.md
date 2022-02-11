---
title: 'LINE Front-end Framework (LIFF) | LINE Developers'
description: 'LINE Front-end Framework (LIFF) is a platform provided by LY Corporation.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/overview/'
---

## Table of Contents

[Experience LIFF app for demo](#line-api-use-case)

[Recommended operating environment](#operating-environment)

[When the LIFF app is opened in a LIFF browser](#when-the-liff-app-is-opened-in-a-liff-browser) [When the LIFF app is opened in an external browser](#when-the-liff-app-is-opened-in-external-browser)

[LIFF browser](#liff-browser)

[LIFF browser specifications](#liff-browser-spec)

[LIFF browser cache](#liff-browser-cache)

[Size of the LIFF browser](#screen-size)

[The action button](#action-button)

[Development guidelines](#development-guidelines)

[Tools to support LIFF app development](#support-tool)

[Workflow](#workflow)

# [#](#page-title) LINE Front-end Framework (LIFF)

LINE Front-end Framework (LIFF) is a platform for web apps provided by LY Corporation. The web apps running on this platform are called LIFF apps.

LIFF apps can get data from the LINE Platform such as the LINE user ID. The LIFF app can use such data to provide features that utilize user data and send messages on the user's behalf.

For more information on functions added to LIFF v2, see the [Release Notes](../../../en/docs/liff/release-notes.md).

For more information about features that are scheduled to be added in the future, see [Roadmap](../../../en/docs/line-login/roadmap.md) in the LINE Login documentation.

Try out LIFF features on the web

LY Corporation provides a web application (LIFF app) for developers called [LIFF Playground (opens new window)](https://liff-playground.netlify.app/). LIFF Playground allows you to try out basic LIFF features on the web. [The source code for LIFF Playground (opens new window)](https://github.com/line/liff-playground) is available on GitHub.

> [!warning]
> LIFF apps not compatible with OpenChat
>
> Currently, LIFF apps are not officially supported in OpenChat, which means some functions don't work. For example, retrieving a user's profile information through a LIFF app isn't possible in most cases.

## [#](#line-api-use-case) Experience LIFF app for demo

[LINE API Use Case (opens new window)](https://lineapiusecase.com/en/top.html) provides LIFF app for demo and its source code. Open the LIFF app for demo to experience store reservations and table orders.

- [Experience making restaurant or hair salon reservations with LIFF app for demo (opens new window)](https://lineapiusecase.com/en/usecase/reservation.html)
- [Experience a digital membership card with LIFF app for demo (opens new window)](https://lineapiusecase.com/en/usecase/membership.html)
- [Experience table ordering with LIFF app for demo (opens new window)](https://lineapiusecase.com/en/usecase/tableorder.html)
- [Experience smartphone self-checkout with LIFF app for demo (opens new window)](https://lineapiusecase.com/en/usecase/smartretail.html)

## [#](#operating-environment) Recommended operating environment

The recommended versions of operating systems and LINE for LIFF are as follows.

Which functions you can use depends on whether the LIFF app is opened in a [LIFF browser](#liff-browser) or an [external browser](../../../en/glossary.md#external-browser). For example, you can't use `liff.scanCode()` in an external browser. For more information, see the [LIFF v2 API reference](../../../en/reference/liff.md).

### [#](#when-the-liff-app-is-opened-in-a-liff-browser) When the LIFF app is opened in a LIFF browser

| Item    | Recommended environment                                     | Minimum operating environment                                         |
| ------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| iOS     | Latest version. WKWebView (opens new window) is used.       | In accordance with the recommended system specifications for LINE. \* |
| Android | Latest version. Android WebView (opens new window) is used. | In accordance with the recommended system specifications for LINE. \* |
| LINE    | Latest version                                              | In accordance with the recommended system specifications for LINE. \* |

> [!warning]
> We recommend using the latest versions of OS and LINE for LIFF apps
>
> We recommend that you use the latest versions of OS and LINE for LIFF apps. Even on versions later than the "Minimum operating environment" listed above, some features may not work or the screen may not be displayed properly depending on the settings.

\* For more information on the recommended system specifications for LINE, see [Recommended system specifications for LINE (opens new window)](https://help.line.me/line/ios/pc?lang=en&contentId=10002433) in Help Center.

### [#](#when-the-liff-app-is-opened-in-external-browser) When the LIFF app is opened in an external browser

LIFF apps run on the latest version of these browsers:

Microsoft Edge, Google Chrome, Firefox, Safari

## [#](#liff-browser) LIFF browser

LIFF browser is a browser specifically for LIFF apps. When a user opens a LIFF URL in LINE, the LIFF app opens in a LIFF browser.

<!-- 画像: ここに適切な代替テキストが必要です -->

Since LIFF browser runs within LINE, the LIFF app can access user data without having to prompt users to log in. The LIFF browser also provides features that are specific to LINE, such as being able to share the LIFF app and sending a message to a friend.

## [#](#liff-browser-spec) LIFF browser specifications

The LIFF browser uses [WKWebView (opens new window)](https://developer.apple.com/documentation/webkit/wkwebview) in iOS, and [Android WebView (opens new window)](https://developer.android.com/reference/android/webkit/WebView) in Android. As such, the specifications and behavior of the LIFF browser will also be in accordance with these schemes.

The LIFF browser doesn't support some of the web technologies supported by external browsers. For more information, see [The differences between the LIFF browser and external browser](../../../en/docs/liff/differences-between-liff-browser-and-external-browser.md).

## [#](#liff-browser-cache) LIFF browser cache

[WKWebView (opens new window)](https://developer.apple.com/documentation/webkit/wkwebview) and [Android WebView (opens new window)](https://developer.android.com/reference/android/webkit/WebView), which are used by the LIFF browser, may save and use displayed content as a cache as instructed by HTTP headers, such as [Cache-Control (opens new window)](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Cache-Control).

Control caching in the LIFF browser, using HTTP headers such as [Cache-Control (opens new window)](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Cache-Control).

> [!warning]
> On deleting cache
>
> There is no way to explicitly delete cache stored in the LIFF browser.

## [#](#screen-size) Size of the LIFF browser

The LIFF browser can be displayed in one of these three sizes.

<!-- 画像: ここに適切な代替テキストが必要です -->

Set the view size when you add the LIFF app to your LINE Login channel. For more information, see [Adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md#registering-liff-app).

## [#](#action-button) The action button

LIFF apps with the size of the LIFF app view set to **Full** display an action button in the header by default.

Users can use this button to share the LIFF app with their friends. When a user taps the action button, the following options appear:

| Item               | Description                                                                                                                                                                                                                            |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Share              | Shares the permanent link of the current page via a LINE message.                                                                                                                                                                      |
| Minimize browser   | Minimizes LIFF browser. For more information, see Minimizing LIFF browser.                                                                                                                                                             |
| Refresh            | Reloads the current page.                                                                                                                                                                                                              |
| Permission setting | Opens the Permission Settings screen. The Permission Settings screen allows the user to view the camera and microphone permissions of the currently open LIFF app. No changes can be made. Available in LINE versions 14.6.0 or later. |

> [!warning]
> Permanent link sharing may fail
>
> If the URL of the current page doesn't start with the URL specified in **Endpoint URL** of the LINE Developers Console, the permanent link can't be obtained and sharing will fail.

Hide the action button

Enable **Module mode** of the LIFF app in the LINE Developers Console to hide the action button. For more information, see [Adding a LIFF app to your channel](../../../en/docs/liff/registering-liff-apps.md).

## [#](#development-guidelines) Development guidelines

When developing web apps using LIFF, follow these [LIFF app development guidelines](../../../en/docs/liff/development-guidelines.md).

## [#](#support-tool) Tools to support LIFF app development

LY Corporation provides the following tools to help developers develop LIFF apps more smoothly.

| Tool name                          | What this tool can do                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF starter app                   | This is a starter app for those new to learning about LIFF. The LIFF starter app is only a demo of the LIFF app initialization to help you understand how to start developing LIFF apps. It's recommended for those who want to build something that works first and get a rough idea of what LIFF is all about.                                                        |
| Create LIFF App                    | This CLI tool allows you to build a development environment for LIFF apps with a single command. Like Create React App (opens new window) by React or Create Next App (opens new window) by Next.js, by answering questions from Create LIFF App, a development environment including the LIFF app template for you is generated and development can begin immediately. |
| LIFF CLI                           | A CLI tool to help you develop LIFF apps more smoothly. The LIFF CLI allows you to do the following:Create, update, list, and delete LIFF appsCreate a LIFF app development environmentDebug your LIFF app with the LIFF InspectorLaunch a local develpment server with HTTPSThe LIFF Mock feature will be added in a future update.                                    |
| LIFF Playground (opens new window) | You can try out LIFF's features online. The source code for LIFF Playground (opens new window) is available on GitHub, so developers can set their LIFF ID and deploy their own LIFF Playground on the server.                                                                                                                                                          |

## [#](#workflow) Workflow

To enable the use of the LIFF app by the end user, follow these steps:

1. [Create a channel](../../../en/docs/liff/getting-started.md) to add your LIFF app to.
2. [Try the LIFF starter app](../../../en/docs/liff/trying-liff-app.md), or [develop a LIFF app](../../../en/docs/liff/developing-liff-apps.md).

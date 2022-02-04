---
title: 'The differences between the LIFF browser and external browser | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/differences-between-liff-browser-and-external-browser/'
---

# [#](#page-title) The differences between the LIFF browser and external browser

LIFF browser specifications

For more information, see [LIFF browser specifications](../../../en/docs/liff/overview.md#liff-browser-spec).

The [LIFF browser](../../../en/glossary.md#liff-browser) doesn't support some of the web technologies supported by [external browsers](../../../en/glossary.md#external-browser). The web technologies that aren't supported by the LIFF browser include the following:

| Web technology                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme-color Meta Tag (opens new window)      | A feature to specify the color of the user interface                                                                                                                                                                                                                                                                                                                                                                                               |
| Download attribute (opens new window)        | A feature to use a hyperlink for downloading the resource, not for navigating to the resource                                                                                                                                                                                                                                                                                                                                                      |
| Add to home screen (A2HS) (opens new window) | A feature that allows the user to add a web application to the home screen on the user's device.In the LINE MINI App, a shortcut to a LINE MINI App can be added to the home screen on the user's device using Add to Home Screen in the action button or the liff.createShortcutOnHomeScreen() method. For more information, see Add a shortcut to your LINE MINI App to the home screen of the user's device in the LINE MINI App documentation. |
| Service Workers (opens new window)           | A feature that enables offline support, background synchronization, push notifications, etc. in a web application                                                                                                                                                                                                                                                                                                                                  |

The web technologies listed above may be supported by the LIFF browser in the future.

Whether or not the LIFF browser supports web technologies other than those listed above is in accordance with the specifications of [WKWebView (opens new window)](https://developer.apple.com/documentation/webkit/wkwebview) and [Android WebView (opens new window)](https://developer.android.com/reference/android/webkit/WebView). For more information, see [Can I use... (opens new window)](https://caniuse.com/).

---
title: 'Minimizing LIFF browser | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/minimizing-liff-browser/'
---

## Table of Contents

[What is LIFF browser minimization](#overview)

[Conditions of use for LIFF browser minimization](#conditions-of-use)

[Minimizing a LIFF browser](#minimize-liff-browser)

[Tapping an action button option](#tap-action-button-option) [Tapping an in-app alert](#tap-in-app-alert) [Swiping a LIFF browser](#swipe-liff-browser)

[Maximizing a LIFF browser](#maximize-liff-browser)

[Moving a minimized LIFF browser](#move-minimized-liff-browser)

[Closing a minimized LIFF browser](#close-minimized-liff-browser)

[Swiping a LIFF browser off the screen (only available in LINE for iOS)](#close-minimized-liff-browser-1) [Drag a minimized LIFF browser to the close icon](#close-minimized-liff-browser-2)

[Priority of LIFF browser icon display](#priority-of-icon-display)

# [#](#page-title) Minimizing LIFF browser

This page explains LIFF browser minimization.

- [What is LIFF browser minimization](#overview)
- [Conditions of use for LIFF browser minimization](#conditions-of-use)
- [Minimizing a LIFF browser](#minimize-liff-browser)
  - [Tapping an action button option](#tap-action-button-option)
  - [Tapping an in-app alert](#tap-in-app-alert)
  - [Swiping a LIFF browser](#swipe-liff-browser)
- [Maximizing a LIFF browser](#maximize-liff-browser)
- [Moving a minimized LIFF browser](#move-minimized-liff-browser)
- [Closing a minimized LIFF browser](#close-minimized-liff-browser)
  - [Swiping a LIFF browser off the screen (only available in LINE for iOS)](#close-minimized-liff-browser-1)
  - [Drag a minimized LIFF browser to the close icon](#close-minimized-liff-browser-2)
- [Priority of LIFF browser icon display](#priority-of-icon-display)

## [#](#overview) What is LIFF browser minimization

[LIFF browser](../../../en/glossary.md#liff-browser) minimization is a feature that allows you to suspend viewing a LIFF browser to perform another action.

When viewing a LIFF browser in a chat room, the user may want to perform another action, such as sending a message to the chat room. In this case, minimizing the LIFF browser will suspend viewing the LIFF browser and allow the user to perform the action. After performing the action, the user can resume viewing the LIFF browser by maximizing the LIFF browser.

The LIFF browser will be displayed as an icon when minimized.

![LIFF browser minimization](/assets/img/liff-minimize-en.72e746d1.png)

Minimizing LINE's in-app browser

Like LIFF browser, [LINE's in-app browser](../../../en/glossary.md#line-iab) also supports minimization. For more information, see [Minimizing the browsing web page (opens new window)](https://guide.line.me/ja/chats-calls-notifications/chats/minimizebrowser.html) (only available in Japanese) in the LINE user's guide.

## [#](#conditions-of-use) Conditions of use for LIFF browser minimization

To minimize a LIFF browser, the following conditions must be met:

- LINE for iOS version 12.18.0 or later or LINE for Android version 15.0.0 or later
- **Settings** > **Apps** > **LINE** > **Display over other apps** is on for the user's device (only required in LINE for Android)
- `Full` is specified as the [screen size](../../../en/docs/liff/overview.md#screen-size) for your LIFF app
- [`chat_message.write` scope](../../../en/docs/liff/registering-liff-apps.md#registering-liff-app) is off for your LIFF app
- The LIFF browser isn't overlapping on another modal

> [!warning]
> The LIFF app after LIFF-to-LIFF transition must meet the conditions of use
>
> To minimize the LIFF browser after [LIFF-to-LIFF transition](../../../en/docs/liff/opening-liff-app.md#move-liff-to-liff), the LIFF app after transition must meet the conditions of use.
>
> For example, as described in [Behavior based on screen size of the LIFF app](../../../en/docs/liff/opening-liff-app.md#behavior-by-screen-size) in the LIFF documentation, the LIFF app after transition will be displayed in `Full`, regardless of the screen size specified. However, if `Tall` or `Compact` is specified as the screen size for the LIFF app after transition, the LIFF app after transition won't satisfy the conditions of use for LIFF browser minimization.

LIFF browser minimization will be available on LINE for iPadOS, but the date is yet to be determined.

## [#](#minimize-liff-browser) Minimizing a LIFF browser

There are three ways to minimize a LIFF browser:

- [Tapping an action button option](#tap-action-button-option)
- [Tapping an in-app alert](#tap-in-app-alert)
- [Swiping a LIFF browser](#swipe-liff-browser)

### [#](#tap-action-button-option) Tapping an action button option

Tap the **Minimize browser** option in the [action button](../../../en/docs/liff/overview.md#action-button).

![LIFF browser minimization (tapping an action button option)](/assets/img/tap-action-button-option-en.314e9f6b.png)

### [#](#tap-in-app-alert) Tapping an in-app alert

Tap an in-app alert.

![LIFF browser minimization (tapping an in-app alert)](/assets/img/tap-in-app-alert.1c0b6423.png)

### [#](#swipe-liff-browser) Swiping a LIFF browser

Swipe a LIFF browser down.

![LIFF browser minimization (swiping a LIFF browser)](/assets/img/swipe-liff-browser-en.6c8d5916.png)

## [#](#maximize-liff-browser) Maximizing a LIFF browser

To maximize a LIFF browser, tap the minimized LIFF browser.

![LIFF browser maximization](/assets/img/maximize-liff-browser-en.1c0b9f43.png)

## [#](#move-minimized-liff-browser) Moving a minimized LIFF browser

To move a minimized LIFF browser, drag the LIFF browser.

![Moving a minimized LIFF browser](/assets/img/move-minimized-liff-browser-en.52a53578.png)

## [#](#close-minimized-liff-browser) Closing a minimized LIFF browser

There are two ways to close a minimized LIFF browser:

- [Swiping a LIFF browser off the screen (only available in LINE for iOS)](#close-minimized-liff-browser-1)
- [Drag a minimized LIFF browser to the close icon](#close-minimized-liff-browser-2)

### [#](#close-minimized-liff-browser-1) Swiping a LIFF browser off the screen (only available in LINE for iOS)

Swipe the minimized LIFF browser off the screen.

![Closing a minimized LIFF browser](/assets/img/close-minimized-liff-browser-en.80292a84.png)

### [#](#close-minimized-liff-browser-2) Drag a minimized LIFF browser to the close icon

Dragging a minimized LIFF browser shows the close icon at the bottom of the screen. Drag the minimized LIFF browser to the close icon and release your finger.

![Closing a minimized LIFF browser](/assets/img/close-minimized-liff-browser-ios-12-12-0-or-later-en.3621a273.png)

## [#](#priority-of-icon-display) Priority of LIFF browser icon display

A LIFF browser will be displayed as an icon when minimized. The priority of LIFF browser icon display is as follows:

1. Channel icon: The channel icon of a LINE Login channel
2. Favicon: The favicon of a LIFF app
3. Common icon: A link icon

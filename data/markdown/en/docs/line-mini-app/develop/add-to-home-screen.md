---
title: "Add a shortcut to your LINE MINI App to the home screen of the user's device | LINE Developers"
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/add-to-home-screen/'
---

## Table of Contents

[Operating conditions](#operating-conditions)

# [#](#page-title) Add a shortcut to your LINE MINI App to the home screen of the user's device

This feature can only be used for verified MINI Apps

This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.

The user can add a shortcut to your LINE MINI App to the home screen of the user's device.

Tapping **Add to Home Screen** in the [action button](../../../../en/docs/line-mini-app/discover/builtin-features.md#action-button) or using the [`liff.createShortcutOnHomeScreen()`](../../../../en/reference/liff.md#create-shortcut-on-home-screen) method will display the Add Shortcut screen. The user can add a shortcut to your LINE MINI App to the home screen of the user's device by following the instructions on the screen. This allows the user to access your LINE MINI App directly from the home screen of the user's device.

**Display on Android device**

> [!warning]
> On some Android devices, the existing shortcuts may be removed
>
> On some Android devices, if a user changes the icon from **Settings** > **App icon** of the LINE app, the existing shortcuts may be removed. For more information, see [\[Android\] If you have problems with the LINE shortcut after changing the LINE app icon (opens new window)](https://help.line.me/line/smartphone/pc?lang=ja&contentId=200000315) (only available in Japanese) in the LINE Help Center.

![add-shortcut-screen-android-en](/assets/img/add-shortcut-screen-android-en.fc6eb5f6.png) ![shortcut-android](/assets/img/shortcut-android.38caf27a.png)

**Display on iOS device**

![add-shortcut-screen-ios-en](/assets/img/add-shortcut-screen-ios-en.a0ae2c4e.png) ![shortcut-ios-en](/assets/img/shortcut-ios-en.3d9916f0.png)

Using this feature for services that users frequently use, such as membership cards and mobile ordering, can improve the user experience.

## [#](#operating-conditions) Operating conditions

If the OS of the user's device is iOS, the conditions for **Add to Home Screen** and the `liff.createShortcutOnHomeScreen()` method to work are as follows. If **Add to Home Screen** is tapped or the `liff.createShortcutOnHomeScreen()` method is executed in a non-working environment, an error page will be displayed.

| Default browser                       | iOS version       | Whether it works or not |
| ------------------------------------- | ----------------- | ----------------------- |
| Safari                                | All versions      | Works                   |
| Chrome                                | 16.4 or later     | Works                   |
| Browsers other than Safari and Chrome | 16.4 or later     | Not guaranteed to work  |
| Browsers other than Safari            | Earlier than 16.4 | Doesn't work            |

For example, if you execute the `liff.createShortcutOnHomeScreen()` method in Chrome on earlier than iOS 16.4, the following error page will be displayed:

![add-shortcut-screen-ios-error-en](/assets/img/add-shortcut-screen-ios-error-en.660b562f.png)

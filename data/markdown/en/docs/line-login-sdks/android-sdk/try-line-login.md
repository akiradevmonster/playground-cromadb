---
title: 'Trying the sample app | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/android-sdk/try-line-login/'
---

## Table of Contents

[Prerequisites](#try-line-login-prerequisites)

[Trying the sample app](#try-sample-app)

[Running the sample app](#running-sample-app)

[Using the "Log in with LINE" button](#using-line-login-button) [Using the "login" button](#using-login-button) [Using the "web login" button](#using-web-login-button) [Using the "logout" button](#using-logout-button) [Trying out the features available on the LINE SDK](#trying-features-available-on-line-sdk)

# [#](#page-title) Trying the sample app

The LINE Login sample app for Android lets you quickly see how [LINE Login](../../../../en/docs/line-login/overview.md) works on an Android app.

## [#](#try-line-login-prerequisites) Prerequisites

To build and run the sample app, you need:

- [Android Studio (opens new window)](https://developer.android.com/studio) installed

## [#](#try-sample-app) Trying the sample app

To try the sample app with our sample channel, follow the steps below.

1. Clone the [LINE SDK for Android open-source repository (opens new window)](https://github.com/line/line-sdk-android).

    ```
    git clone https://github.com/line/line-sdk-android.git
    ```

2. Open the LINE SDK project in Android Studio.
3. Build the project and run the app using an Android device or Android Emulator.

Tip

The sample app has already defined its own sample channel id, and its value is `1620019587`, you don't need to set it again.

## [#](#running-sample-app) Running the sample app

Run the sample app using an Android device or Android Emulator. When you first log in, you must agree to let the app access your profile information.

![LINE SDK Sample App Main screen](/assets/img/line-sdk-sample-app-home-screen.a80ddccc.jpg)

### [#](#using-line-login-button) Using the "Log in with LINE" button

Tap the green **Log in with LINE** button to log in using app-to-app login. This is the LINE SDK's built-in login button.

If LINE is installed on the device, and you are logged in, you will be able to log in to the sample app automatically without entering your LINE credentials. Otherwise, you'll be requested to log in by using your device's browser. In this scenario, you'll need to enter your LINE credentials.

### [#](#using-login-button) Using the "login" button

If you aren't currently logged in, the **login** button will be available. Tap the **login** button, the LINE app-to-app login process will be triggered. The login method and process is just like the built-in login button from the SDK, but it provides some options to adjust, such as `Scopes`. You may refer to the `getLoginIntent` method of the `LineLoginApi` class provided by LINE SDK.

> [!warning]
> Note
>
> The default Scopes it use are `PROFILE` and `OPENID_CONNECT`.

### [#](#using-web-login-button) Using the "web login" button

If you aren't currently logged in, the **web login** button will be available. Tap the **web login** button, a LINE login webpage will be opened by browser.

### [#](#using-logout-button) Using the "logout" button

After you are logged in, the **logout** button will be available. Tap the **logout** button to log out current user.

For more information, see [Logging out users](../../../../en/docs/line-login-sdks/android-sdk/managing-users.md#logout).

### [#](#trying-features-available-on-line-sdk) Trying out the features available on the LINE SDK

![LINE SDK Sample App Api List screen](/assets/img/line-sdk-sample-app-api-list-screen.396f1759.jpg)

Once you've logged in to the app, you can tap the **API List Page** button to try out the following features of the LINE SDK.

- [Getting user profiles](../../../../en/docs/line-login-sdks/android-sdk/managing-users.md#get-profile)
- [Getting the current access token](../../../../en/docs/line-login-sdks/android-sdk/managing-access-tokens.md#get-current-token)
- [Refreshing access tokens](../../../../en/docs/line-login-sdks/android-sdk/managing-access-tokens.md#refresh-token)
- [Verifying access tokens](../../../../en/docs/line-login-sdks/android-sdk/managing-access-tokens.md#verify-access-token)
- [Use LINE Login to get friendship status](../../../../en/docs/line-login-sdks/android-sdk/link-a-bot.md#use-line-login-api)

You can view the response from the top half of the page after clicking on each SDK API Button.

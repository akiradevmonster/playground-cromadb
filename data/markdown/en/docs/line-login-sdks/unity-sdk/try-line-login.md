---
title: 'Trying the starter app | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/try-line-login/'
---

## Table of Contents

[Prerequisites](#try-line-login)

[Trying the starter app with the predefined sample channel](#try-starter-app-with-predefined-sample-channel)

[Trying the starter app with your own channel](#try-starter-app-with-own-channel)

[Running the starter app](#running-starter-app)

[Trying out the features available on the LINE SDK](#try-out-available-line-sdk-features)

# [#](#page-title) Trying the starter app

The LINE Login starter app for Unity lets you quickly see how [LINE Login](../../../../en/docs/line-login/overview.md) works in a Unity game.

## [#](#try-line-login) Prerequisites

Before building and running the starter app, follow the [Setting up your project](../../../../en/docs/line-login-sdks/unity-sdk/project-setup.md) guide to set up your environment correctly for Unity, iOS, and Android.

## [#](#try-starter-app-with-predefined-sample-channel) Trying the starter app with the predefined sample channel

To try the starter app with our sample channel, follow these steps:

1. Clone the [LINE SDK for Unity open-source repository (opens new window)](https://github.com/line/line-sdk-unity).

    ```
    git clone https://github.com/line/line-sdk-unity.git
    ```

2. In Unity, open the project in the folder `LINE_SDK_Unity`.
3. Build and export the scene under `Assets/LineSDK/Demo/Scenes/Main` to either iOS or Android.
4. Install the exported project/binary to your device.

> [!warning]
> Note
>
> You may need to modify the certification to install the sample app to an iOS device. If you do not have one, you can go to **Player Settings > Settings for iOS > Other Settings** and set **Target SDK** to **Simulator SDK**, then run the sample app on an iOS simulator.

### [#](#try-starter-app-with-own-channel) Trying the starter app with your own channel

You can also link the starter app to your own channel. If you don't have a channel yet, [create one now](../../../../console/register/line-login/channel.md). You'll also have to select or create a [provider](../../../../en/glossary.md#provider).

To link the starter app with your channel, make the following changes in your Unity project:

1. Select **File** > **Build Settings**.
2. Click **Player Settings**.
3. Select <!-- 画像: ここに適切な代替テキストが必要です --> > **Other Settings**, and set **Bundle Identifier** to the same value as **iOS bundle ID** in the **LINE Login** tab of your LINE Login channel in the LINE Developers Console.

    ![Bundle Identifier](/assets/img/bundle-identifier-settings.b8f0a75f.png)

4. In the next two fields, set the same value as Android **Package Name** in the **LINE Login** tab of your LINE Login channel in the LINE Developers Console.

    - **Product Name**
    - <!-- 画像: ここに適切な代替テキストが必要です --> > **Other Settings** > **Package Name**

    ![Package Name](/assets/img/package-name-settings.f8269cf6.png)

5. From the main page, select **LineSDK** object.
6. Enter your LINE Login channel ID in the **Channel ID** field under **Line SDK (Script)**.

    ![Channel ID](/assets/img/channel-id-settings.0021a7b1.png)

## [#](#running-starter-app) Running the starter app

Run the starter app using an iOS/Android device or Simulator. When you first log in, you must agree to let the app access your profile information.

Tap **Login with LINE** to log in using app-to-app login.

If LINE is installed on the device and you are logged in, you will be able to log in to the starter app automatically without entering your LINE credentials. Otherwise, you'll be asked to log in using the browser. In the second scenario, you'll need to enter your LINE credentials.

### [#](#try-out-available-line-sdk-features) Trying out the features available on the LINE SDK

Once you have logged in to the app, you can tap the menu items to try out the following features of the LINE SDK.

Features available to general users:

- Log out user
- Get user profile
- Verify access token
- Get the friendship status between a LINE Official Account linked to the channel and user

Any other features shown are available only to limited users.

---
title: 'Skipping the channel consent process | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/channel-consent-simplification/'
---

## Table of Contents

[The "Channel consent simplification" feature setup](#simplification-feature-setup)

[Detailed workflow of "Channel consent simplification"](#detailed-workflow)

[Channel consent simplification doesn't work for LINE MINI Apps opened in LIFF-to-LIFF transitions](#does-not-work-for-liff-to-liff-transition)

# [#](#page-title) Skipping the channel consent process

This feature can only be used for verified MINI Apps

This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.

> [!warning]
> Permission that is consented with the "Channel consent simplification" feature
>
> When users give [Consent on getting user profile information](../../../../en/docs/messaging-api/user-consent.md), which is displayed when they first add a [LINE Official Account](../../../../en/glossary.md#line-official-account) as a friend, it will be deemed that they've given consent to other LINE Official Accounts on getting their profile information, so the consent screen will be skipped thereafter. In the same way, when you enable the "Channel consent simplification" feature described in this page, once users agree to the simplification, they will be able to skip the "Channel consent screen" on subsequent LINE MINI Apps they access for the first time.
>
> However, based on LY Corporation's privacy policy, the permission to skip the consent screen using the "Channel consent simplification" feature is limited to [user ID](../../../../en/glossary.md#user-id) (the `openid` scope). Permission required to get user profile information or permission to send messages (such as [the `profile` scope and the `chat_message.write` scope](../../../../en/docs/liff/registering-liff-apps.md#registering-liff-app)) aren't covered by "Channel consent simplification". Users will be prompted to give consent for these permissions when they become necessary within each LINE MINI App.

When a user first accesses a LINE MINI App with the `openid` scope enabled, the [channel consent screen](../../../../en/docs/line-mini-app/develop/configure-console.md#consent-screen-settings) is displayed where they need to consent to their [user ID](../../../../en/glossary.md#user-id) being used within the LINE MINI App.

To simplify this consent process, turn on the "Channel consent simplification" feature for your LINE MINI App on the [LINE Developers Console](../../../../console.md). This will allow users to skip the channel consent screen when accessing another LINE MINI App and start using the service immediately, simply by consenting to the simplification the first time.

Turning on the "Channel consent simplification" setting makes it easier for users to access LINE MINI Apps. We recommend enabling "Channel consent simplification" to reduce the burden on users.

Operating conditions of "Channel consent simplification"

"Channel consent simplification" operates only in these environments:

- Version of LIFF SDK for LINE MINI App: v2.13.x or later

> [!warning]
> LINE MINI App may not function properly depending on the design
>
> On the LINE MINI App channel, the only permission that is automatically granted by the "Channel consent simplification" feature is getting [user ID](../../../../en/glossary.md#user-id). Therefore, if you've designed your channel to use the [access token](../../../../en/glossary.md#access-token) obtained from the LIFF SDK to call the LINE Login API and other LINE APIs, the "Channel consent simplification" feature may not work properly.
>
> Before starting to use the "Channel consent simplification" feature, check how the usage of access tokens applies in the case of the LINE MINI App, and confirm operation in the development environment.
>
> **Example of impact:**  
> A design that uses the LIFF SDK to obtain an [ID token](../../../../en/glossary.md#id-token) along with an access token, and uses the [profile information](../../../../en/glossary.md#profile-information) (display name, email address, profile image, etc.) obtained through the ID token to create a LINE MINI App service account.

#### [#](#difference-between-on-and-off) Differences in behavior when the "Channel consent simplification" setting is On and Off

Even if a user has already given their consent on the "Channel consent screen" when they first accessed a LINE MINI App, whenever they access another LINE MINI App for the first time, the same "Channel consent screen" will be displayed.

However, when a user gives their consent on the "Simplification consent screen" that is displayed when they access a LINE MINI App with the "Channel consent simplification" setting on, any LINE MINI App they access for the first time thereafter won't display the "Channel consent screen" but open soon after displaying a "loading screen".

The table below explains the differences in behavior when accessing a LINE MINI App with the "Channel consent simplification" setting **On** and **Off**.

| "Channel consentsimplification"setting | When accessing LINE MINI App A for the first time | When accessing LINE MINI App B for the first time |
| -------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| Off                                    | "Channel consent screen" is displayed.            | "Channel consent screen" is displayed.            |
| On                                     | "Simplification consent screen" is displayed.     | "Channel consent screen" is skipped.              |

For the detailed workflow of accessing a LINE MINI App that has "Channel consent simplification" enabled, see [Detailed workflow of "Channel consent simplification"](#detailed-workflow).

## [#](#simplification-feature-setup) The "Channel consent simplification" feature setup

Follow these steps to turn on "Channel consent simplification".

1. From the LINE MINI App channel on the [LINE Developers Console](../../../../console.md), locate the **Channel consent simplification** section under the **Web app settings** tab and toggle the slider on (right).

    "Channel consent simplification" setting will be on by default

    If you have created a new LINE MINI App channel, the **Channel consent simplification** setting will be on (right) by default. If you don't want to use "Channel consent simplification", you will have to turn it off (left).

    ![Channel consent simplification toggle button](/assets/img/simplification-feature-setup-en.569bce3b.png)

    > [!warning]
    > Conditions for configuring the "Channel consent simplification" feature
    >
    > You can only configure the "Channel consent simplification" feature when these conditions are met.
    >
    > - LINE MINI App **Region to provide the service** is set to "Japan":
    >
    >   Only those LINE MINI Apps with **Region to provide the service** set to "Japan" can configure this feature. **Region to provide the service** can only be configured when you first create your LINE MINI App channel.
    >
    >   ![Region to provide the service settings](/assets/img/region-setting-en.e84db140.png)
    >
    > - LINE MINI App channel status is "Not yet reviewed":
    >
    >   Only those LINE MINI Apps whose status is "Not yet reviewed" can configure this feature.
    >
    >   ![Developing process](/assets/img/simplification-developing-en.cbd1f41f.png)

2. When the confirmation dialog is displayed, click **Enable**.

    ![confirm dialog](/assets/img/simplification-dialog-en.1b88b7a6.png)

    > [!warning]
    > openid is automatically enabled
    >
    > When using "Channel consent simplification", you need the `openid` scope, which has the authority to get user ID. When the "Channel consent simplification" setting is on, the `openid` scope will automatically be enabled. When the "Channel consent simplification" setting is turned off, you have the option of manually selecting the `openid` scope.
    >
    > <!-- 画像: ここに適切な代替テキストが必要です -->

## [#](#detailed-workflow) Detailed workflow of "Channel consent simplification"

The first time a user accesses a LINE MINI App with the "Channel consent simplification" setting enabled, the "Simplification consent screen" will be displayed.

1. From the "Simplification consent screen", click **Allow**.

    ![Simplification consent screen](/assets/img/simplification-process-01-en.45b4c12a.png)

    The LINE MINI App loading screen will be displayed.

    When a user clicks **Allow**, it will be deemed that they agreed to the use of their [user ID](../../../../en/glossary.md#user-id) in other LINE MINI Apps, so that when they access other LINE MINI Apps going forward, the "Channel consent screen" will be skipped, and the LINE MINI App will open immediately.

    When the "Simplification consent screen" appears again if you click "Not now"

    By clicking **Not now** on the Simplification consent screen, the user can skip the consent for simplification, and the "Simplification consent screen" won't be displayed, even when they open other LINE MINI Apps. The Simplification consent screen will reappear once 24 hours have passed.

    If the user skips the consent for simplification, they will see a separate channel consent screen for each LINE MINI App they open, as they would if the "Channel consent simplification" feature were turned off.

2. From the "loading screen", click **Open app now**.

    On the "loading screen"

    - Even if the user doesn't click **Open app now** from the "loading screen", the LINE MINI App will be displayed without any user action, once the progress bar is complete.
    - After the user consents to the "Simplification consent screen", the "loading screen" will be displayed only once when the user accesses each LINE MINI App for the first time.

    ![LINE MINI App loading screen](/assets/img/simplification-process-02-en.d1593057.png)

    LINE MINI App will be displayed.

3. Click **Allow** once the "Verification screen" is displayed.

    When the "Verification screen" is displayed

    The "Verification screen" is first displayed, not when a user first opens a LINE MINI App, but when permission for scopes other than the `openid` scope ([the `profile` scope or the `chat_message.write`scope](../../../../en/docs/liff/registering-liff-apps.md#registering-liff-app) etc.) is required.

    Therefore, if you've designed your LINE MINI App so that immediately after it's launched, it executes requests that require permissions other than the `openid` scope, such as the [`liff.getProfile()`](../../../../en/reference/liff.md#get-profile) method, when users access your LINE MINI App, it would appear as if the channel consent screen were displayed without being skipped.

    Display the "Verification screen" at any given time

    By using the [`liff.permission.query()`](../../../../en/reference/liff.md#permission-query) method and the [`liff.permission.requestAll()`](../../../../en/reference/liff.md#permission-request-all) method, you can display the "Verification screen" at any given time.

    The following is an example code that displays the "verification screen" when the user hasn't consented to grant permissions in the `profile` scope.

    ```
    liff.permission.query("profile").then((permissionStatus) => {
      if (permissionStatus.state === "prompt") {
        liff.permission.requestAll();
      }
    });
    ```

    For more information, see [`liff.permission.query()`](../../../../en/reference/liff.md#permission-query) and [`liff.permission.requestAll()`](../../../../en/reference/liff.md#permission-request-all) in the LIFF API reference.

    Check the verification for each scope, and click **Allow** to open the LINE MINI App.

    ![verification screen](/assets/img/simplification-process-03-en.1f5209e2.png)

    > [!warning]
    > Adding friends through the add friend option
    >
    > The [add friend option](../../../../en/docs/line-login/link-a-bot.md) will be displayed on the verification screen. However, if only the `openid` scope is specified for **Scopes** when "Channel consent simplification" is enabled, you won't be able to induce users to add your LINE Official Account as a friend via the add friend option. In order to enable the add friend option, disable "Channel consent simplification" or make sure your design uses scopes other than `openid`.
    >
    > ![simplification-process-04-en](/assets/img/simplification-process-04-en.0a5f9f18.png)

Users who have followed the above steps will be able to skip the channel consent screen, even for LINE MINI Apps that they're accessing for the first time, and open LINE MINI Apps immediately after the "loading screen" is displayed.

![Channel consent simplification enabled](/assets/img/channel-consent-simplification-enabled-en.ea0225e4.png)

### [#](#does-not-work-for-liff-to-liff-transition) Channel consent simplification doesn't work for LINE MINI Apps opened in LIFF-to-LIFF transitions

Channel consent simplification doesn't work when users transition to a LINE MINI App from a LIFF app or another LINE MINI App. Even if Channel consent simplification is enabled on the LINE MINI Apps to which users are transitioning, an individual "Channel consent screen" will be displayed for every LINE MINI App on the first access.

For more information on LIFF-to-LIFF transition, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](../../../../en/docs/liff/opening-liff-app.md#move-liff-to-liff).

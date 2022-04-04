---
title: 'LINE Login overview | LINE Developers'
description: 'LINE Login lets people easily create an account for your web app or native app using their LINE accounts. You can integrate LINE Login into your iOS, Android, or web app.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/overview/'
---

## Table of Contents

[What is LINE Login](#what-is-line-login)

[Experience LINE Login on the demo site](#line-api-use-case)

[Start development to integrate LINE Login](#introduction)

[Integrating with web apps](#integrating-with-web-apps) [Integrating with native apps](#native-app)

[LINE Login authentication methods](#auth-method)

[Identifying users](#identifying-users)

[LINE Login versions](#versions)

[Require two-factor authentication](#two-factor-authentication)

[What is two-factor authentication?](#what-is-2fa) [Require two-factor authentication setting on the LINE Developers Console](#2fa-settings) [Priority with the Two-factor Authentication Switch function](#priority-with-2fa-switch) [Differences in LINE Login behavior depending on authentication method](#behavior-depending-on-auth-method)

[Related pages](#related-pages-for-line-login)

# [#](#page-title) LINE Login overview

Developer documentation

You're reading the LINE Developer documentation. If you're looking for help using the LINE app or how to log in, see the [Help Center (opens new window)](https://help.line.me/).

## [#](#what-is-line-login) What is LINE Login

LINE Login is a social login service that allows users to use their LINE accounts. LINE Login is free of charge.

By integrating LINE Login into your website or app, users will be able to register and log in easily as follows:

- When a user registers as a member, the [profile information](../../../en/glossary.md#profile-information) registered in advance on LINE is automatically entered, saving the user the trouble of entering the information.
- Users can easily log in using the LINE Login button without having to remember their email address and password for each site.

LINE Login not only works with native iOS and Android apps but also with web apps (websites) and Unity games.

Example of a website with LINE Login

For example, the e-book store [BOOK WALKER (opens new window)](https://global.bookwalker.jp/) integrates various social logins, including LINE Login, so that users can easily register the membership and continue using the site.

![E-bookstore login screen](/assets/img/line-login-bookwalker-01-ja.4c271319.png)

## [#](#line-api-use-case) Experience LINE Login on the demo site

[LINE API Use Case (opens new window)](https://lineapiusecase.com/en/top.html) provides a demo site integrating LINE Login and its source code. Try using the demo site to experience LINE Login for yourself.

- [Experience LINE Login on the demo site provided by LINE API Use Case (opens new window)](https://lineapiusecase.com/en/api/login.html)

## [#](#introduction) Start development to integrate LINE Login

To start development to integrate LINE Login, you'll first need to create a LINE Login channel. To learn more, see [Getting started with LINE Login](../../../en/docs/line-login/getting-started.md).

### [#](#integrating-with-web-apps) Integrating with web apps

Integrate LINE Login into your web app (website) to make it easier for people to create an account and log in. With LINE Login, your users can automatically log in to your web app if they're already logged in to LINE on their device. The authentication and authorization process is based on the [OAuth 2.0 (opens new window)](https://datatracker.ietf.org/doc/html/rfc6749) and [OpenID® Connect (opens new window)](https://openid.net/specs/openid-connect-core-1_0.html) protocols. For more information, see [Integrating LINE Login](../../../en/docs/line-login/integrate-line-login.md).

For an example of how LINE Login can provide users with an improved experience, see the [LINE STORE (opens new window)](https://store.line.me/) website.

![LINE Login](/assets/img/line-login-web.7a624f2a.png)

### [#](#native-app) Integrating with native apps

Use our SDKs to add LINE Login to your app and let LINE handle user authentication. When users are logged in to LINE on their mobile device, they're able to log in to your app without entering their email address and password. We offer SDKs for Android, iOS, and Unity:

- [LINE SDK for iOS Swift overview](../../../en/docs/line-login-sdks/ios-sdk/swift/overview.md)
- [LINE SDK for Android overview](../../../en/docs/line-login-sdks/android-sdk/overview.md)
- [LINE SDK for Unity overview](../../../en/docs/line-login-sdks/unity-sdk/overview.md)
- [LINE SDK for Flutter](../../../en/docs/line-login-sdks/flutter-sdk.md)

The LINE Rangers game, for example, uses LINE Login to let users easily create an account for the game with their LINE accounts.

![LINE Rangers 1](/assets/img/line-login-rangers-1.739e6967.png) ![LINE Rangers 3](/assets/img/line-login-rangers-3.decd5cab.png)

## [#](#auth-method) LINE Login authentication methods

For web app integrated LINE Login, users can use one of the following authentication methods:

| Authentication method      | Description                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Auto login                 | Log in without user operation. The LINE Login screen or the confirmation screen is not displayed                         |
| Log in with email address  | Log in by entering an email address and password on the LINE Login screen                                                |
| Log in with QR code        | Log in by scanning a QR code displayed on the LINE Login screen using the QR code reader on the LINE app for smartphones |
| Single Sign On (SSO) login | Log in by clicking the login button on the confirmation screen showing "Continue as"                                     |

To learn more about which screens are actually shown and the conditions under which they appear for each of the authentication methods, see [User authentication](../../../en/docs/line-login/integrate-line-login.md#authentication-process).

## [#](#identifying-users) Identifying users

Once a user has logged in to your app through LINE Login and your app has retrieved an access token for the user, the app can get the profile information that the user has registered with LINE.

You can get the user's ID, display name, profile image URL, and status message.

To learn more, see [Getting user profiles](../../../en/docs/line-login/managing-users.md#get-profile).

## [#](#versions) LINE Login versions

LINE Login supports [OpenID Connect Discovery 1.0 (opens new window)](https://openid.net/specs/openid-connect-discovery-1_0.html). For information about the OpenID provider, see [OpenID Provider Configuration Document (opens new window)](https://access.line.me/.well-known/openid-configuration).

These versions of LINE Login have been released. Each version supports a different set of features. For more information about features that are scheduled to be added in the future, see [Roadmap](../../../en/docs/line-login/roadmap.md).

| Version         | Status      | Description                                                                                                                                                                                                                                                                                                  |
| --------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LINE Login v2.1 | Active      | This version can handle login requests based on the OAuth 2.0 authorization code flow (opens new window). It also supports the OpenID Connect (opens new window) protocol and allows you to get user data with ID tokens.It was released on September 28, 2017. To learn more, see LINE Login v2.1 released. |
| LINE Login v2.0 | Deprecated  | This version was released on January 24, 2017 and has been deprecated, with the end-of-life date to be determined. We recommend that you use the current version (LINE Login v2.1). There will be a certain grace period between the end-of-life announcement and the actual end-of-life.                    |
| LINE Login v1   | End-of-life | All features were discontinued on June 30, 2018 and are no longer available. For more information, see LINE Login v1 to be discontinued.                                                                                                                                                                     |

## [#](#two-factor-authentication) Require two-factor authentication

A user with the Admin role can configure the channel to require two-factor authentication when a user logs in to the channel.

By using two-factor authentication, you're more likely to reduce the risk of unauthorized logins, such as list-based attacks.

From a user protection perspective, we recommend that you require two-factor authentication. However, please note that this may cause restrictions for users, such as requiring a smartphone with the LINE app installed.

### [#](#what-is-2fa) What is two-factor authentication?

Two-factor authentication is a method to authenticate a user using two elements: knowledge known only to the user (such as a password), the user's property (such as an IC card or a smartphone), and biometric information (such as a fingerprint or a face). Two-factor authentication increases the possibility of preventing unauthorized logins even if a password is known to a third party.

LINE Login performs two-factor authentication by password authentication for the LINE account and entering the verification code displayed on the screen into the smartphone's LINE screen.

If the user logs in to the service for the first time, or if the device or browser changes, the user is prompted to enter the verification code after entering the password.

![login-flow-with-2fa-en](/assets/img/login-flow-with-2fa-en.ff1be81c.png)

Unless the user switch accounts or delete browser's cookies, they'll remain trusted for 365 days and they won't be asked to enter a verification code.

Also, if they're already logged in with the same browser, two-factor authentication will be skipped.

LINE Login v2.1 is recommended

Two-factor authentication is available with LINE Login v2.1. If you use LINE Login v1.0 ([end-of-life](../../../en/glossary.md#end-of-life)) or LINE Login v2.0 ([deprecated](../../../en/glossary.md#deprecated)), we recommend updating to LINE Login v2.1.

For more information about the differences between the versions, see [LINE Login versions](#versions).

### [#](#2fa-settings) Require two-factor authentication setting on the LINE Developers Console

Require two-factor authentication can be set when creating a new channel and when editing an existing channel on the [LINE Developers Console](../../../console.md).

| Channel type       | When creating | When editing |
| ------------------ | ------------- | ------------ |
| LINE Login         | ✅            | ✅           |
| Blockchain Service | ✅            | ✅           |
| Messaging API      | - \*1         | ✅ \*2       |
| LINE MINI App      | ❌            | ❌           |

\*1 You can't create a Messaging API channel on the LINE Developers Console

\*2 Only if a previously created channel holds LIFF

#### [#](#set-when-creating) Set when creating a channel

When creating a new channel on the LINE Developers Console, you can enable the setting by toggling the **Require two-factor authentication** switch to "on" (right). The default setting is "on".

![2fa-on-a-channel-en](/assets/img/2fa-on-a-channel-en.a4f51b65.png)

#### [#](#set-when-editing) Set when editing an existing channel

When editing an existing channel on the LINE Developers Console, you can turn on/off the **Require two-factor authentication** setting.

Only members with the Admin role for the channel can edit the setting. In the case of the Member role, the setting field isn't displayed when editing the channel.

**Require two-factor authentication** setting is located in the tabs below for each channel type:

| Channel type       | Tab name   |
| ------------------ | ---------- |
| LINE Login         | LINE Login |
| Blockchain Service | LINE Login |
| Messaging API      | LIFF       |

### [#](#priority-with-2fa-switch) Priority with the Two-factor Authentication Switch function

[Two-factor Authentication Switch](../../../en/news/2022/04/26/2fa-switch-function.md) of the LINE app is a function that provides two-factor authentication when logging into services that use LINE Login v2.1 if the toggle switch for **Home** > **Settings** > **Accounts** > **Two-factor authentication** is "ON" (right) on the user's device.

Require two-factor authentication in a channel overrides the user's device setting. In other words, if you enable **Require two-factor authentication** on a channel, the users will be required to authenticate with two-factor authentication even if the Two-factor Authentication Switch is turned off on the user's device.

The relationship between the Two-factor Authentication Switch on the user's device and the channel setting is as follows:

|                    | Setting on the user's deviceOFF       | Setting on the user's deviceON       |
| ------------------ | ------------------------------------- | ------------------------------------ |
| Channel settingOFF | Two-factor authentication is disabled | Two-factor authentication is enabled |
| Channel settingON  | Two-factor authentication is enabled  | Two-factor authentication is enabled |

### [#](#behavior-depending-on-auth-method) Differences in LINE Login behavior depending on authentication method

Depending on the [LINE Login authentication methods](#auth-method), a user might not be prompted to enter a verification code even if you have turned on **Require two-factor authentication**:

| Authentication method      | Two-factor authentication |
| -------------------------- | ------------------------- |
| Log in with email address  | Required                  |
| Log in with QR code        | Required                  |
| Auto login                 | Not required              |
| Single Sign On (SSO) login | Not required              |

## [#](#related-pages-for-line-login) Related pages

- [LINE Login development guidelines](../../../en/docs/line-login/development-guidelines.md)
- [Security checklist](../../../en/docs/line-login/security-checklist.md)
- [LINE Login v2.1 API reference](../../../en/reference/line-login.md)

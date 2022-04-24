---
title: 'Custom Features | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/discover/custom-features/'
---

## Table of Contents

[Service Messages](#service-messages)

[Custom Path](#custom-path)

[Skip the channel consent process](#channel-consent-simplification)

[Redirect non-LINE users to a web browser](#redirect-non-line-users-to-browser)

[What to check before enabling the setting](#redirect-non-line-users-to-browser-what-to-check)

[Add a shortcut to your LINE MINI App to the home screen of the user's device](#create-shortcut-on-home-screen)

[Inducing users to add your Official Account as a friend](#OA-friend)

[Using Payment Systems](#using-payment-systems)

[Custom action button](#custom-action-button)

[LINE Profile+](#line-profile-plus)

# [#](#page-title) Custom Features

You can add the following features to your LINE MINI App to further enhance the user experience. The features you can use depend on whether the LINE MINI App is an unverified MINI App or a verified MINI App.

| Feature                                                                      | Unverified MINI App | Verified MINI App |
| ---------------------------------------------------------------------------- | ------------------- | ----------------- |
| Service Messages                                                             | ❌                  | ✅                |
| Custom Path                                                                  | ❌                  | ✅                |
| Skip the channel consent process                                             | ❌                  | ✅                |
| Redirect non-LINE users to a web browser                                     | ✅                  | ✅                |
| Add a shortcut to your LINE MINI App to the home screen of the user's device | ❌                  | ✅                |
| Inducing users to add your Official Account as a friend                      | ✅                  | ✅                |
| Using Payment Systems                                                        | ✅                  | ✅                |
| Custom action button                                                         | ✅                  | ✅                |
| LINE Profile+                                                                | ❌                  | ✅                |

## [#](#service-messages) Service Messages

Service messages can be used if you want to send users the confirmation of their restaurant or accommodation reservations.

Service messages is a feature whereby LINE MINI App notifies the user of information the user should know regarding the user's request.

Service messages sent from LINE MINI Apps are displayed in chat rooms determined for each region that provides the LINE MINI App, regardless of the type of LINE MINI App.

| Japan                   | Thailand             | Taiwan             |
| ----------------------- | -------------------- | ------------------ |
| LINEミニアプリ お知らせ | LINE MINI App Notice | LINE MINI App 通知 |
|                         |                      |                    |

To send a service message, use the service message API. For details, see [Sending service messages](../../../../en/docs/line-mini-app/develop/service-messages.md).

> [!warning]
> Conditions to sending service messages
>
> You are allowed to send service messages only as a confirmation or response to a user action on LINE MINI App. Advertisements and event notifications are prohibited, including information on discounts, shopping rewards, new products, discount coupons or promotions. For more information about the service message conditions, see [Conditions for service messages](../../../../en/docs/line-mini-app/service/service-operation.md#conditions-for-service-messages).

## [#](#custom-path) Custom Path

Custom Path is a unique string that is set in the LIFF URL of the published channel. The Custom Path feature allows you to set your own string in the LIFF URL, as follows:

| Example URL with LIFF ID               | Example of setting Custom Path      |
| -------------------------------------- | ----------------------------------- |
| <https://miniapp.line.me/123456-abcdefg> | <https://miniapp.line.me/cony_coffee> |

For example, by setting a unique name as a Custom Path, users will be able to identify which brand or shop's LINE MINI App from the URL. For more information on Custom Path, see [Configuring Custom Path](../../../../en/docs/line-mini-app/develop/custom-path.md).

## [#](#channel-consent-simplification) Skip the channel consent process

When a user first accesses a LINE MINI App with the `openid` scope enabled, the [channel consent screen](../../../../en/docs/line-mini-app/develop/configure-console.md#consent-screen-settings) is displayed where they need to consent to their [user ID](../../../../en/glossary.md#user-id) being used within the LINE MINI App.

To simplify this consent process, turn on the "Channel consent simplification" feature for your LINE MINI App on the [LINE Developers Console](../../../../console.md). This will allow users to skip the channel consent screen when accessing another LINE MINI App and start using the service immediately, simply by consenting to the simplification the first time. As a result, users will be able to access LINE MINI Apps more easily.

For more information, see [Skipping the channel consent process](../../../../en/docs/line-mini-app/develop/channel-consent-simplification.md).

## [#](#redirect-non-line-users-to-browser) Redirect non-LINE users to a web browser

> [!warning]
> Redirect non-LINE users to a web browser feature will be discontinued
>
> For more information, see the news from April 2, 2025, [In October 2025, all LINE MINI App users will be able to use the service in a web browser](../../../../en/news/2025/04/02/mini-app-browser.md).

In the [LINE Developers Console](../../../../console.md), if you enable **Redirect non-LINE users to a web browser** in the **Web app settings** tab of the LINE MINI App channel, non-LINE users outside of Japan, Thailand and Taiwan can use the LINE MINI App service via a web browser.

When a non-LINE user opens the LINE MINI App in a web browser, the page shown in the figure below will be displayed. Tap **Open in browser** on the page and the LIFF endpoint URL will open in their web browser.

![redirect-non-line-users-to-browser](/assets/img/redirect-non-line-users-to-browser.ccfaff6b.jpg)

By enabling this feature, for example, foreign visitors to Japan who don't use LINE can now use the services of LINE MINI Apps via a web browser without having to install the LINE app.

The display in a web browser is enabled only if the language setting of the user's web browser isn't Japanese, Thai or Traditional Chinese. However, if the LINE app is installed on the user's device, the LINE app may be launched and the user may be redirected to the LINE MINI App.

### [#](#redirect-non-line-users-to-browser-what-to-check) What to check before enabling the setting

Before enabling the **Redirect non-LINE users to a web browser**, make sure that the services of your LINE MINI App is available when the LIFF endpoint URL is accessed with a web browser. The LIFF API properties and methods that can be used by web browsers are as follows:

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

> [!warning]
> Don't require LINE Login
>
> Don't require users to log in to LINE on pages that are displayed in the web browsers of users who don't use LINE. This will spoil the experience for users who don't use LINE.

## [#](#create-shortcut-on-home-screen) Add a shortcut to your LINE MINI App to the home screen of the user's device

The user can add a shortcut to your LINE MINI App to the home screen of the user's device. This allows the user to access your LINE MINI App directly from the home screen of the user's device.

![add-shortcut-screen-ios-en](/assets/img/add-shortcut-screen-ios-en.a0ae2c4e.png) ![shortcut-ios-en](/assets/img/shortcut-ios-en.3d9916f0.png)

Using this feature for services that users frequently use, such as membership cards and mobile ordering, can improve the user experience.

For more information, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](../../../../en/docs/line-mini-app/develop/add-to-home-screen.md).

## [#](#OA-friend) Inducing users to add your Official Account as a friend

With LINE MINI App, you can induce users to add your Official Account as a friend from the [Channel consent screen](../../../../en/docs/line-mini-app/develop/configure-console.md#consent-screen-settings) or the [Verification screen](../../../../en/docs/line-mini-app/develop/channel-consent-simplification.md#detailed-workflow), using the add friend option.

For more information, see [Add the LINE Official Account as a friend when you first open the LINE MINI App (add friend option)](../../../../en/docs/line-mini-app/service/line-mini-app-oa.md#link-a-line-official-account-with-your-channel).

![bot link feature 1](/assets/img/miniguide-incremental-01-en.966d00fb.png) ![bot link feature 2](/assets/img/miniguide-incremental-02-en.7787cb97.png)

## [#](#using-payment-systems) Using Payment Systems

Methods of payment other than LINE Pay, such as credit cards, can be integrated into your LINE MINI App. For more information, see [Using payment systems](../../../../en/docs/line-mini-app/develop/payment.md).

![mini intro linepay](/assets/img/mini_intro_linepay.c7fd9ddf.png)

## [#](#custom-action-button) Custom action button

The [built-in action button](../../../../en/docs/line-mini-app/discover/builtin-features.md#action-button) is provided to enable users to easily share LINE MINI App among friends, but there is also the option of [implementing a custom action button](../../../../en/docs/line-mini-app/develop/share-messages.md).

![mini_share_custom](/assets/img/mini_share_custom.8fa99b2b.png)

## [#](#line-profile-plus) LINE Profile+

With LINE MINI App, you can get user data such as names, gender, birth date, phone number, and address to use for your service. See LINE Profile+ for more information.

> [!warning]
> Application is required to use the data
>
> This feature is only available to corporate users who have submitted the required applications.
>
> To use the data registered with LINE Profile+ via LINE MINI App, contact your sales representative or [our Sales partners (opens new window)](https://www.lycbiz.com/jp/partner/sales/).

Use this feature to make your service more easily accessible and convenient for users. Obtaining information without a particular purpose, acquiring excessive information, or misusing information acquired can all be reasons for rejection during the LINE MINI App review.

Examples of proper usage of user data include but are not limited to:

- Automatically entering contact information such as sender, phone number, address, etc. to save the effort of entering the same information each time.
- Recommending the right products according to the user's gender, birthday, etc.

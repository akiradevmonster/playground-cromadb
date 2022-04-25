---
title: 'Introducing LINE MINI App | LINE Developers'
description: 'LINE MINI App is a web application that runs on LINE.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/discover/introduction/'
---

## Table of Contents

[Introduction](#introduction-to-line-mini-app)

[Things you can do with LINE MINI App](#things-you-can-do-with-line-mini-app)

[Unverified MINI Apps and verified MINI Apps](#verified-unverified-mini-app)

[What are unverified MINI Apps](#unverified-mini-app) [What are verified MINI Apps](#verified-mini-app)

[LINE MINI App Components](#what-does-line-mini-app-look-like)

[Ways in which users can access LINE MINI Apps](#access-line-mini-app-methods-for-users)

[Access from outside of LINE](#access-from-outside-line) [LINE Official Account](#line-official-account) [Home Tab](#home-tab) [Searching on LINE](#searching-on-line) [LINE Message](#line-message)

[Features available on LIFF apps but not on LINE MINI Apps](#what-you-can-do-with-the-liff-app-or-mini-app)

# [#](#page-title) Introducing LINE MINI App

LINE MINI App is a web application that runs on LINE. LINE MINI App enables users to enjoy services without installing a separate native app.

"LINE MINI App" is the official name.

LINE MINI App is a web browser, so most HTML5 specs can be used. For more information, see the [Specifications](../../../../en/docs/line-mini-app/discover/specifications.md).

## [#](#introduction-to-line-mini-app) Introduction

Anyone who is permitted customers in the [LINE MINI App Policy (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en) can develop LINE MINI Apps. However, if the service is provided in Taiwan or Thailand, only those who have received approval from our local subsidiary can develop LINE MINI Apps. See [Quick Start Guide](../../../../en/docs/line-mini-app/quickstart.md) first.

To start developing the LINE MINI App channel, you need a [LINE Developers Console](../../../../console.md) account. Many tasks, from LINE MINI App configuration to app submission for review, are carried out on the LINE Developers Console.

## [#](#things-you-can-do-with-line-mini-app) Things you can do with LINE MINI App

LINE MINI App provides these [built-in features](../../../../en/docs/line-mini-app/discover/builtin-features.md).

- A feature for sharing LINE MINI App with other users
- A feature for requesting user access to services.

You can also add these [custom features](../../../../en/docs/line-mini-app/discover/custom-features.md) on your LINE MINI App to further enhance user experience.

- Service Messages
- Using Payment Systems (LINE Pay)
- Custom action button

Try out the LINE MINI App

LY Corporation provides a LINE MINI App called [LINE MINI App Playground (opens new window)](https://miniapp.line.me/lineminiapp_playground) for developers. By opening the LINE MINI App Playground on a smartphone with the LINE app installed, you can actually try out some of the features of the LINE MINI App.

## [#](#verified-unverified-mini-app) Unverified MINI Apps and verified MINI Apps

LINE MINI Apps are divided into unverified MINI Apps and verified MINI Apps depending on whether they've passed our verification review. Check the following sections for the differences between them:

### [#](#unverified-mini-app) What are unverified MINI Apps

Unverified MINI Apps are LINE MINI Apps that haven't yet passed our verification review. After you've created a LINE MINI App channel, the LINE MINI App will be an unverified MINI App until it passes the verification review.

Anyone can create an unverified MINI App, but as shown in the following section "[What are verified MINI Apps](#verified-mini-app)", some features are restricted. To make your LINE MINI App a verified MINI App, [submit your LINE MINI App for review](../../../../en/docs/line-mini-app/submit/submission-guide.md).

### [#](#verified-mini-app) What are verified MINI Apps

If your LINE MINI App passes our verification review, it'll become a verified MINI App. Once it becomes a verified MINI App, it'll have a verified badge in the header, etc., as shown in the image below:

![line-mini-app-header-after](/assets/img/line-mini-app-header-after.14459c9f.png)

In addition, you'll be able to use such as the following features:

- [Add a shortcut to your LINE MINI App to the home screen of the user's device](../../../../en/docs/line-mini-app/develop/add-to-home-screen.md)
- [Configuring Custom Path](../../../../en/docs/line-mini-app/develop/custom-path.md)
- [Skipping the channel consent process](../../../../en/docs/line-mini-app/develop/channel-consent-simplification.md)

As described above, by making your LINE MINI App a verified MINI App, you can enhance the user experience in terms of reliability and convenience. For more information about the features that can be used for verified MINI Apps, see [Custom Features](../../../../en/docs/line-mini-app/discover/custom-features.md).

## [#](#what-does-line-mini-app-look-like) LINE MINI App Components

LINE MINI App page consists of (A) Header (B) Body. For details, see [LINE MINI App Components](../../../../en/docs/line-mini-app/discover/ui-components.md).

![LINE MINI App structure](/assets/img/mini_concept.2b5be1ef.png)

## [#](#access-line-mini-app-methods-for-users) Ways in which users can access LINE MINI Apps

Users can access LINE MINI Apps, not only within LINE but also from outside of LINE. There are several ways to access LINE MINI Apps within LINE.

### [#](#access-from-outside-line) Access from outside of LINE

If you have access to the [LINE MINI App Permanent Link](../../../../en/docs/line-mini-app/develop/permanent-links.md), you can access the LINE MINI App from outside of LINE. You can share the permanent link of the LINE MINI App with users in these ways:

- By posting on websites, e-mails, text messages, etc.
- By creating a QR code for various media

In addition, by [adding a shortcut to the LINE MINI App to the home screen of the user's device](../../../../en/docs/line-mini-app/develop/add-to-home-screen.md), the user can access the LINE MINI App directly from the home screen.

### [#](#line-official-account) LINE Official Account

Users can also access LINE MINI Apps from the LINE Official Account. For example, a link to the LINE MINI App will be added to the rich message that you send to friends on the LINE Official Account and to the rich menu displayed on the talk screen. For details, see [Using LINE Official Account](../../../../en/docs/line-mini-app/service/line-mini-app-oa.md).

![You can promote your LINE MINI App on the LINE Official Account](/assets/img/mini_with_oa.76d04f7a.png)

### [#](#home-tab) Home Tab

> [!warning]
> The feature to pin LINE MINI Apps to the Home tab in LINE has been discontinued
>
> For more information, see the news from January 9, 2024, [Users can now access recently used LINE MINI Apps from the LINE Home tab](../../../../en/news/2024/01/09/line-mini-app-history.md).

Users can access recently used LINE MINI Apps from **Services** on the **Home** tab of LINE. The **Services** section displays up to 8 recently used LINE MINI Apps in the order of their last use. This feature is only available for verified MINI Apps.

The Home tab display policy varies by region to provide the service.

![mini-access-home-tab-en](/assets/img/mini-access-home-tab-en.8ec5c4b9.png)

### [#](#searching-on-line) Searching on LINE

You can also access LINE MINI Apps from the LINE search feature. This feature is only available for verified MINI Apps.

![Access from search](/assets/img/mini_access_search.6c5afb8d.png)

### [#](#line-message) LINE Message

Users can easily share LINE MINI Apps with their friends. The [built-in action button](../../../../en/docs/line-mini-app/discover/builtin-features.md#action-button) is provided to enable users to easily share LINE MINI Apps among friends, but there's also the option of [implementing a custom action button](../../../../en/docs/line-mini-app/develop/share-messages.md).

![Share message](/assets/img/mini_access_share.ddf61cb8.png)

## [#](#what-you-can-do-with-the-liff-app-or-mini-app) Features available on LIFF apps but not on LINE MINI Apps

| Item                                          | Description                                                                                                                                                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| External browser display                      | When you open a LINE MINI App in an external browser, the following page will be displayed and you will be guided to open the LINE MINI App using LINE's smartphone app (LIFF Browser). |
| Hiding the action button (Module mode)        | You can't hide the action button on the LINE MINI App. Module Mode can't be configured for LIFF apps that have been added to the LINE MINI App channel.                                 |
| Adding multiple LIFF apps to the same channel | It isn't possible to add multiple web apps to the same channel in the LINE MINI App channel.                                                                                            |

We recommend creating a LIFF app as a LINE MINI App

In the future, LIFF and the LINE MINI App will be integrated into a single brand. As a result of this integration, LIFF will be integrated into the LINE MINI App. For this reason, we recommend that you create a new LIFF app as a LINE MINI App. For more information, see the news from [February 12, 2025](../../../../en/news/2025/02/12/line-mini-app.md).

Can be configured to allow only some users to view in an external browser

If you enable **Redirect non-LINE users to a web browser** on the [LINE Developers Console](../../../../console.md), non-LINE users outside of Japan, Thailand and Taiwan can view the LINE MINI App services in an external browser. For more information, see [Redirect non-LINE users to a web browser](../../../../en/docs/line-mini-app/discover/custom-features.md#redirect-non-line-users-to-browser).

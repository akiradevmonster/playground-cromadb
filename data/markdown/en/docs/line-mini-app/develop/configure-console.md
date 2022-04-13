---
title: 'Managing LINE MINI App settings on LINE Developers Console | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/configure-console/'
---

## Table of Contents

[Action button](#built-in-share-settings)

[Channel consent screen](#consent-screen-settings)

[Multi-language support of the Channel consent screen](#localization)

[Footer section of service message](#footer-secition-of-service-message)

[Add Shortcut screen](#add-shortcut-screen)

# [#](#page-title) Managing LINE MINI App settings on LINE Developers Console

Some information registered on the [LINE Developers Console](../../../../console.md) will be displayed to LINE MINI App users.

#### [#](#provider-settings) Provider settings

The following settings information of the LINE MINI App channel provider is displayed to the users:

**Settings** tab:

| Items         | Display                |
| ------------- | ---------------------- |
| Provider name | Channel consent screen |

#### [#](#channel-settings) Channel settings

The following information on the LINE MINI App channel settings is displayed to the users:

**Basic settings** tab:

| Items                                 | Display Screen                                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Channel icon                          | Action buttonChannel consent screenFooter section of service messageAdd Shortcut screen\* Users recognize this image as the Channel icon of the LINE MINI App.                                                            |
| Channel name                          | Action buttonChannel consent screenFooter section of service messageAdd Shortcut screen\* Users recognize this text as the LINE MINI App name. Channel name is copied to the LIFF app name under the Web app settings tab |
| Channel description                   | Channel consent screen                                                                                                                                                                                                    |
| Privacy policy URL                    | Channel consent screen                                                                                                                                                                                                    |
| Localization (multi-language support) | Channel consent screen                                                                                                                                                                                                    |

**Web app settings** tab:

| Items        | Display Screen      |
| ------------ | ------------------- |
| Endpoint URL | Add Shortcut screen |

## [#](#built-in-share-settings) Action button

When a user shares a LINE MINI App page using the [action button](../../../../en/docs/line-mini-app/discover/builtin-features.md#action-button), the following information registered on the [LINE Developers Console](../../../../console.md) is displayed in the chat room to which the page is shared.

![Action button](/assets/img/mini_share_builtin_share.6a209181.png)

| Information        | Settings                          |
| ------------------ | --------------------------------- |
| LINE MINI App name | Basic settings tab > Channel name |
| LINE MINI App icon | Basic settings tab > Channel icon |

## [#](#consent-screen-settings) Channel consent screen

The following information registered on the [LINE Developers Console](../../../../console.md) is displayed on the [Channel consent screen](../../../../en/docs/line-mini-app/discover/builtin-features.md#consent-screen).

![Channel consent screen](/assets/img/mini-permission-request-en.11d3bc4b.png)

| Information        | Settings                                                                                                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINE MINI App icon | Basic settings tab > Channel icon                                                                                                                                                                                    |
| LINE MINI App name | Basic settings tab > Channel nameEnter in English. To enter the LINE MINI App name in any other languages such as Japanese, see Multi-language support of the Channel consent screen.                                |
| Provider name      | Settings tab > Provider name of the provider to which the LINE MINI App Channel belongs                                                                                                                              |
| Description        | Basic settings tab > Channel descriptionEnter in English. For more information on how to enter the channel description in Japanese or any other languages, see Multi-language support of the Channel consent screen. |
| Privacy policy URL | Basic settings tab > Privacy policy URL                                                                                                                                                                              |

> [!warning]
> Information that must be included in the description
>
> If you have outsourced the development of your service's LINE MINI App, and the company that provides service through the LINE MINI App differs from the company that developed the said LINE MINI App, the **Channel description** must contain a statement indicating the following information:
>
> - The service company name
> - The development company name
> - The actual company name(s) to whom you provide user data obtained through the LINE MINI App

### [#](#localization) Multi-language support of the Channel consent screen

The LINE MINI App name and description on the Channel consent screen are displayed in the language set in the user's LINE settings. For example, if the user has the language of LINE set to Japanese, the Japanese channel name and channel description will be displayed.

| Information        | Settings                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| LINE MINI App name | Channel basic settings tab > Localization (multi-language support) > Channel name |
| Description        | Basic settings tab > Localization (multi-language support) > Channel description  |

> [!warning]
> Note
>
> - Be sure to localize in the major language(s) used in the countries to which you provide services through your LINE MINI App.
> - All information pertaining to **Channel name** and **Channel description** is displayed in Englsih, unless **Localization (multi-language support)** has been enabled to support the language set in the user's LINE settings.

## [#](#footer-secition-of-service-message) Footer section of service message

From the footer section of the service message, the following information registered on the [LINE Developers Console](../../../../console.md) is used. For more information on service messages, see [Sending service messages](../../../../en/docs/line-mini-app/develop/service-messages.md).

![Service messages](/assets/img/mini_service_notifier.63c2afa2.png)

| Information        | Settings                          |
| ------------------ | --------------------------------- |
| LINE MINI App name | Basic settings tab > Channel name |
| Image              | Basic settings tab > Channel icon |

## [#](#add-shortcut-screen) Add Shortcut screen

The following information registered on the [LINE Developers Console](../../../../console.md) is displayed on the Add Shortcut screen. For more information about the Add Shortcut screen, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](../../../../en/docs/line-mini-app/develop/add-to-home-screen.md).

![add-shortcut-screen-ios-en](/assets/img/add-shortcut-screen-ios-en.a0ae2c4e.png)

| Information                | Settings                            |
| -------------------------- | ----------------------------------- |
| LINE MINI App name         | Basic settings tab > Channel name   |
| LINE MINI App icon         | Basic settings tab > Channel icon   |
| LINE MINI App endpoint URL | Web app settings tab > Endpoint URL |

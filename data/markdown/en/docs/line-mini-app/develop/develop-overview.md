---
title: 'Getting started | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/develop-overview/'
---

## Table of Contents

[Create a LINE MINI App Channel](#create-line-mini-app-channel)

[Precautions for LINE MINI App channel creation](#precautions-for-channel-creation) [Privacy policy URL settings](#privacy-policy-url-settings) [Precautions for channel and provider linkage](#channel-and-provider-linkage)

[Develop a LINE MINI App](#develop-line-mini-app)

[Internal structure of a LINE MINI App channel](#internal-structure-of-a-line-mini-app-channel) [Using APIs](#using-apis)

[Use basic authentication to restrict access to your LINE MINI App before it is released](#use-basic-authentication)

[How to use basic authentication](#how-to-use-basic-authentication) [Conditions for basic authentication](#conditions-for-basic-authentication) [Notes on using basic authentication](#notes-on-using-basic-authentication)

[Our recommendations for development](#recommendations-for-development)

[Request LINE MINI App review](#request-line-mini-app-review)

# [#](#page-title) Getting started

Before you dive straight into developing a LINE MINI App, we recommend that you carefully read this content:

- Discover LINE MINI App
  - [Specifications](../../../../en/docs/line-mini-app/discover/specifications.md)
- Design
  - [LINE MINI App icon](../../../../en/docs/line-mini-app/design/line-mini-app-icon.md)
  - [Safe area for landscape mode](../../../../en/docs/line-mini-app/design/landscape.md)
  - [Loading icon](../../../../en/docs/line-mini-app/design/loading-icon.md)
- Develop
  - [Performance guidelines](../../../../en/docs/line-mini-app/develop/performance-guidelines.md)
- Submit Application
  - [Submit Application for Review](../../../../en/docs/line-mini-app/submit/submission-guide.md)
  - [LINE MINI App policy (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en)

## [#](#create-line-mini-app-channel) Create a LINE MINI App Channel

A [Channel](../../../../en/docs/line-developers-console/overview.md#channel) is the communication channel that connects your app to the LINE Platform. Create a LINE MINI App channel on the LINE Developers Console for each LINE MINI App.

1. Access the [LINE Developers Console](../../../../console.md) and select a provider.
2. Click in the order of **Channels** > **Create a new channel** > **LINE MINI App**.

    ![LINE MINI App channel](/assets/img/line-mini-app-channel-en.bcc16abf.png)

    When creating a LINE MINI App channel, there may be restrictions depending on the conditions of the region to provide the service, etc. For more information, see [Precautions for LINE MINI App channel creation](#precautions-for-channel-creation).

3. Enter the information in the items below to create a LINE MINI App channel.

    | Item                                | Required?       | Description                                                                                                                                                                                                                                             | Location displayed to users                                                                                                                                                                                                                               |
    | ----------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Channel type                        | ✅              | The channel type. Select LINE MINI App to create your LINE MINI App channel.                                                                                                                                                                            | -                                                                                                                                                                                                                                                         |
    | Provider                            | ✅              | The channel's provider                                                                                                                                                                                                                                  | Permission consent screen when launching LINE Login or LIFF App                                                                                                                                                                                           |
    | Region to provide the service       | ✅              | The region you want to provide your LINE MINI App. One of:JapanThailandTaiwan\*If you want to provide your LINE MINI App in multiple regions, create a channel for each region.                                                                         | -                                                                                                                                                                                                                                                         |
    | Channel icon                        | ❌              | The channel's icon. For more information on the icon sizee and design, see LINE MINI App icon.                                                                                                                                                          | Permission consent screen when launching LINE MINI AppThe target chat room when you use an Action button to share a LINE MINI App pageFooter section of the Service messageDiscover the LINE MINI App (Home tab, search feature, etc.)Add Shortcut screen |
    | Channel name                        | ✅              | The channel's name\*Channel name cannot contain "LINE" or similar strings.                                                                                                                                                                              | Permission consent screen when launching LINE MINI AppThe target chat room when you use an Action button to share a LINE MINI App pageFooter section of the Service messageDiscover the LINE MINI App (Home tab, search feature, etc.)Add Shortcut screen |
    | Channel description                 | ✅              | The channel's description. If the company in charge of developing the LINE MINI App and the company providing the service are different, notify the user. For more information, see Company information in the LINE MINI App Policy (opens new window). | Permission consent screen when launching LINE MINI App                                                                                                                                                                                                    |
    | Email address                       | ✅              | Email address to receive important updates about the channel                                                                                                                                                                                            | -                                                                                                                                                                                                                                                         |
    | Privacy policy URL                  | ✅ \*           | The app's privacy policy URL                                                                                                                                                                                                                            | Permission consent screen when launching LINE MINI App                                                                                                                                                                                                    |
    | Terms of use URL                    | ❌              | The app's terms of use URL                                                                                                                                                                                                                              | Permission consent screen when launching LINE MINI App                                                                                                                                                                                                    |
    | LINE Developers Agreement           | ✅              | Read and agree to the LINE Developers Agreement.                                                                                                                                                                                                        | -                                                                                                                                                                                                                                                         |
    | LINE MINI App Platform Agreemeent   | ✅              | Read and agree to the LINE MINI App Platform Agreement.                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                         |
    | LINE MINI App Policy                | ✅              | Read and agree to the LINE MINI App Policy.                                                                                                                                                                                                             | -                                                                                                                                                                                                                                                         |
    | Service company's country or region | ✅              | Represent and warrant that the region to provide the LINE MINI App and service company's country or region are the same.                                                                                                                                | Permission consent screen when launching LINE MINI App                                                                                                                                                                                                    |
    | LY Corporation Privacy Policy       | See description | Required only if you've selected Thailand as Region to provide the service. Read and acknowledge LY Corporation Privacy Policy (opens new window).                                                                                                      | -                                                                                                                                                                                                                                                         |

    \* Only for certified providers, the privacy policy URL must be entered when creating a LINE MINI App channel.

4. Be sure to read starting with "By creating a LINE MINI App and agreeing to the terms and conditions herein, I hereby warrant and represent that I have the full authority to execute and bind my company to the terms hereof." and check the box to indicate you warrant and represent said authority.
5. Click **Create**.
6. Be sure to read "Regarding Consent to Usage of the Information" and click **Accept** if you consent.

    The above process will create a channel for the LINE MINI App, and it will be ready to use as an unverified MINI App.

    For more information on changing the settings of the LINE MINI App channel you've created, see [When settings on the LINE Developers Console are reflected](../../../../en/docs/line-mini-app/discover/console-guide.md#timing-of-settings-reflection).

### [#](#precautions-for-channel-creation) Precautions for LINE MINI App channel creation

When creating a LINE MINI App channel, there may be restrictions depending on the conditions of the region to provide the service, etc.

- If your service area is Japan, anyone who is a permitted customer in the [LINE MINI App Policy (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en) can create a LINE MINI App channel.
- If you are unable to create a LINE MINI App channel even though your service area is Japan, try the following:
  - If you are already logged into the [LINE Developers Console](../../../../console.md) using your business account, link your business account to your LINE account. For more information on linking your business account to your LINE account, see [Link your business account with your LINE account](../../../../en/docs/line-developers-console/login-account.md#link-business-account-with-line-account) in the LINE Developers Console documentation.
- If your service area is Taiwan, you can only create a LINE MINI App channel if you are approved by our local subsidiary. For more information, see [LINE MINI App official site for Taiwan users (opens new window)](https://tw.linebiz.com/service/other-solutions/line-mini-app/).
- If your service area is Thailand, you can only create a LINE MINI App channel if you are approved by our local subsidiary. The contact details for receiving approval are currently being prepared.

### [#](#privacy-policy-url-settings) Privacy policy URL settings

If the company in charge of developing the LINE MINI App and the service provider are different, you will need to configure the **Channel description** and **Privacy policy URL** in order to pass the review. For more information, see "Company information" in the [LINE MINI App Policy (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en).

When creating a LINE MINI App channel, you can set the **Privacy policy URL** if you are a certified provider. But if you're not, you can't. In that case, create a LINE MINI App channel first, and then edit the **Privacy policy URL**.

### [#](#channel-and-provider-linkage) Precautions for channel and provider linkage

Once you create a channel, you can't move the channel to another provider later.

A LINE user who uses services provided by developers is given a different user ID for each provider. User IDs can't be used to identify the same user across channels under different providers.

![different-user-ids](/assets/img/different-user-ids.8c0c6c67.png)

> [!danger]
> Cases that require special attention when creating a channel
>
> For example, the following cases require special attention:
>
> - Channels and providers are managed by individuals or companies.
> - Create channels of unrelated services or companies under one provider.
> - Channels are created under a provider managed by a service (company) that operates channel management tools, etc.
>
> In such cases, problems may arise in the future due to the inability to move channels later between providers and the fact that a user is given different user IDs for different providers. After considering the risks involved, create a channel under the appropriate provider.

Best practices for provider and channel management

There is a page that explains, with specific examples, how to manage admin roles for providers and channels, and which provider you should create channels under.

For more information, see [Best practices for provider and channel management](../../../../en/docs/line-developers-console/best-practices-for-provider-and-channel-management.md) in the LINE Developers Console documentation.

## [#](#develop-line-mini-app) Develop a LINE MINI App

Once you create a LINE MINI App channel, you can start developing a LINE MINI App. Think of developing a LINE MINI App as using [LIFF](../../../../en/docs/liff/overview.md) with additional requirements and restrictions as explained in this guide.

For more information, see the [Specifications](../../../../en/docs/line-mini-app/discover/specifications.md).

### [#](#internal-structure-of-a-line-mini-app-channel) Internal structure of a LINE MINI App channel

From the **Channels** tab of the LINE Developers Console, a LINE MINI App appears as a single channel, but internally it consists of the following three channels (hereafter called "internal channels"):

| Internal channels                   | Description                                                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| LINE MINI App channel in Developing | LINE MINI App channel used for development. The channel status is always "Developing".                          |
| LINE MINI App channel in Review     | LINE MINI App channel used for review by LY Corporation. The channel status is always "Developing".             |
| LINE MINI App channel in Published  | LINE MINI App channel that is published and made available to users. The channel status is always "Publishing". |

For more information on internal channels, see [LINE Developers Console Guide for LINE MINI App](../../../../en/docs/line-mini-app/discover/console-guide.md).

### [#](#using-apis) Using APIs

Two types of APIs are available for you to develop LINE MINI Apps: the LIFF API and the [Service Message API](../../../../en/reference/line-mini-app.md). The LIFF API is called from your LINE MINI App, while the Service Message API is called from the server-side of your service. For more information on using the LIFF API, see [LIFF documentation](../../../../en/docs/liff/overview.md).

For instance, to [implement a custom action button](../../../../en/docs/line-mini-app/develop/share-messages.md), you would need to call the LIFF API from your LINE MINI App. But to send [service messages](../../../../en/docs/line-mini-app/develop/service-messages.md), you would need to call the Service Message API from your server.

LIFF API is constantly being improved

To enhance user experience, the LIFF API is constantly adding new features and improving existing features.

## [#](#use-basic-authentication) Use basic authentication to restrict access to your LINE MINI App before it is released

Basic authentication is available for LINE MINI Apps with the status "Not yet reviewed" or "Reviewing". You can restrict access to pre-publishing LINE MINI Apps by using basic authentication.

### [#](#how-to-use-basic-authentication) How to use basic authentication

In the **Web app settings** tab on the [LINE Developers Console](../../../../console.md), specify the URL with basic authentication in the **Endpoint URL** for **Developing** or **Review**. Then open the LINE MINI App in the [LIFF browser](../../../../en/glossary.md#liff-browser) and a dialog box will appear prompting you to enter your username and password.

![Basic authentication screen](/assets/img/basic-auth.f6a28554.png)

### [#](#conditions-for-basic-authentication) Conditions for basic authentication

Basic authentication is available when all of the following conditions are met:

- The status of your LINE MINI App is "Not yet reviewed" or "Reviewing".
- LINE MINI App is open in [LIFF Browser](../../../../en/glossary.md#liff-browser).

Basic Authentication isn't available for the LIFF App and LINE MINI Apps whose status is "Reflected". Also, you can't use digest authentication.

When basic authentication isn't available even though the conditions are met

Basic authentication isn't available in a LINE MINI App after a LIFF-to-LIFF transition. For more information, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](../../../../en/docs/liff/opening-liff-app.md#move-liff-to-liff) in the LIFF documentation.

For more information about basic authentication specifications on LIFF browser, see [LIFF browser specifications](../../../../en/docs/liff/overview.md#liff-browser-spec) in the LIFF documentation.

### [#](#notes-on-using-basic-authentication) Notes on using basic authentication

Basic authentication is an authentication method used for simple access restrictions, and developers of LINE MINI Apps should evaluate and judge for themselves whether basic authentication meets their security requirements before using it.

The addition of this functionality doesn't recommend the use of basic authentication, nor does it guarantee the security of access restrictions based on basic authentication.

## [#](#recommendations-for-development) Our recommendations for development

Develop your LINE MINI App in a way that helps users to access your core features easily and quickly. Here are a couple of our suggestions:

- Use HTML5 [Geolocation API (opens new window)](https://www.w3.org/TR/geolocation/) for locating users.
- Utilize users' LINE profile information, which can be obtained with the LIFF API. For instance, auto-generating users' LINE profile information for restaurant reservations spares users from having to enter their personal information each time they make a new reservation.
- Optimize your LINE MINI App's performance to provide better user experience for your LINE MINI App users. For more information, see the [Performance guidelines](../../../../en/docs/line-mini-app/develop/performance-guidelines.md).

## [#](#request-line-mini-app-review) Request LINE MINI App review

When you create a LINE MINI App channel, the LINE MINI App is an unverified MINI App, and some features are restricted. To make the developed LINE MINI App a verified MINI App, it's necessary to undergo the verification review by LY Corporation. For more information, see [Submitting LINE MINI App](../../../../en/docs/line-mini-app/submit/submission-guide.md).

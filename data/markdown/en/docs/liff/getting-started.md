---
title: 'Create a channel | LINE Developers'
description: 'To develop a LIFF app, you must first create a provider and a channel on the LINE Developers Console.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/getting-started/'
---

## Table of Contents

[Log in to the LINE Developers Console](#log-in-to-line-developers-console)

[Creating a provider and channel](#creating-provider-and-channel)

[1\. Create a provider](#step-one-create-provider) [2\. Create a channel](#step-two-create-channel)

[Next steps](#steps-after-creating-channel)

# [#](#page-title) Create a channel

To develop a LIFF app, you must first create a provider and a channel on the [LINE Developers Console](../../../console.md).

## [#](#log-in-to-line-developers-console) Log in to the LINE Developers Console

To create a provider and a channel, you must first log in to the LINE Developers Console. For more information on how to log in, see [Log in to LINE Developers](../../../en/docs/line-developers-console/login-account.md).

## [#](#creating-provider-and-channel) Creating a provider and channel

Log in to the [LINE Developers Console](../../../console.md) and create a provider and a channel.

### [#](#step-one-create-provider) 1. Create a provider

If you already have a provider you want to use, go to [2\. Create a channel](#step-two-create-channel).

1. From the Console home, click the **Create a new provider** button.

    > [!warning]
    > If you can't find the Create a new provider button
    >
    > If you've already created a provider, the **Create a new provider** button won't be displayed on the Console home. If you want to create another one, click the **Create** button in the **Providers** section on the Console home.
    >
    > ![Create button in the Providers section](/assets/img/providers-section-en.10b7b829.png)

2. Enter any **Provider name** on the **Create a new provider** screen, and click the **Create** button.

    A **provider** can be an individual, company, or organization that provides services through the LINE Platform. Enter your own name or company name as the provider name.

    ![Create a provider](/assets/img/create-provider-en.7e1e8b9c.png)

### [#](#step-two-create-channel) 2. Create a channel

A **channel** is a communication path between the LINE Platform's functions and a provider's services. Channels must have a name, description, and icon image.

LIFF app can be added for these two channel types:

| Type          | Description                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LINE Login    | If you want to create a LIFF app, or try the LIFF starter app in the next step, or build a LIFF app development environment with Create LIFF App, create a LINE Login channel. |
| LINE MINI App | If you want to create a LIFF app with LINE MINI App, create a LINE MINI App channel.                                                                                           |

We recommend creating a LIFF app as a LINE MINI App

In the future, LIFF and the LINE MINI App will be integrated into a single brand. As a result of this integration, LIFF will be integrated into the LINE MINI App. For this reason, we recommend that you create a new LIFF app as a LINE MINI App. For more information, see the news from [February 12, 2025](../../../en/news/2025/02/12/line-mini-app.md).

In this section, we'll show you how to create a LINE Login channel, assuming that you want to [Try the LIFF starter app](../../../en/docs/liff/trying-liff-app.md) in the next step. Click the provider under which you want to add your LINE Login channel, and create your channel. If there is already a LINE Login channel you want to use, select it. For more information on how to create a channel, see [Creating a channel](../../../en/docs/line-developers-console/overview.md#creating-a-channel).

> [!warning]
> Channel name restrictions
>
> "LINE" or a similar string can't be included in the channel name.

> [!warning]
> About channel's App types
>
> When developing a LIFF app, select **Web app** in App types.

> [!warning]
> You can't add LIFF apps to channels other than LINE Login and LINE MINI App
>
> You can't add LIFF apps to these channel types:
>
> - Messaging API
> - Blockchain Service
>
> Previously, LIFF apps could be added to Messaging API channels or Blockchain Service channels. However, new LIFF features aren't available for LIFF apps that have already been added to the Messaging API and Blockchain service channels. For more information, see these news articles.
>
> - News on February 5, 2020, [Users can no longer add LIFF apps to Messaging API channels](../../../en/news/2020/02/05/liff-channel-type.md)
> - News on July 20, 2021, [Users can no longer add LIFF apps to Blockchain Service channels](../../../en/news/2021/07/20/liff-cannot-be-used-with-blockchain-service-channels.md)

#### [#](#channel-and-provider-linkage) Precautions for channel and provider linkage

Once you create a channel, you can't move the channel to another provider later.

When developing a service that links a LINE Login channel with a Messaging API channel, create both channels within the same provider.

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

## [#](#steps-after-creating-channel) Next steps

You have now created a channel for your LIFF app. Next, do one of the following:

- [Try the LIFF starter app](../../../en/docs/liff/trying-liff-app.md)
- [Develop a LIFF app](../../../en/docs/liff/developing-liff-apps.md)

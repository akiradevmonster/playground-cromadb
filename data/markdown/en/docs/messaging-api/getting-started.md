---
title: 'Get started with the Messaging API | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/getting-started/'
---

## Table of Contents

[1\. Create a LINE Official Account](#create-oa)

[Step 1-1. Register for LINE Business ID](#create-oa-line-business-id) [Step 1-2. Fill in the entry form](#create-oa-entry-form) [Step 1-3. Check your LINE Official Account](#create-oa-check)

[2\. Enable the Messaging API for your LINE Official Account](#using-oa-manager)

[Step 2-1. Enable the use of the Messaging API](#step-one-enable-use-of-messaging-api) [Step 2-2. Log in to the LINE Developers Console](#step-two-log-in-to-line-developers-console) [Step 2-3. Check that you have a channel](#step-three-confirm-channel)

[\[End-of-life\] Create a channel in the LINE Developers Console](#using-console)

[Next steps](#next-steps-after-getting-started)

# [#](#page-title) Get started with the Messaging API

To use the Messaging API, you must have a channel. To create a channel, create a [LINE Official Account](../../../en/glossary.md#line-official-account) and enable the use of Messaging API for your LINE Official Account.

This page describes how to create a Messaging API channel using the two steps described below:

1. [Create a LINE Official Account](#create-oa)
2. [Enable the Messaging API for your LINE Official Account](#using-oa-manager)

To enable the Messaging API for an existing LINE Official Account, see step 2.

#### What is a channel?

A **channel** is a communication path for providers to use the LINE Platform's features such as Messaging API and LINE Login in their services. To use the LINE Platform, you must have a channel. Then you can use functions of the Messaging API, with the channel's information such as access token.

![channel](/assets/img/channel.aef0b5ed.png)

## [#](#create-oa) 1. Create a LINE Official Account

To use the Messaging API, you must first create a LINE Official Account. LINE Official Accounts can be created by following the steps below:

### [#](#create-oa-line-business-id) Step 1-1. Register for LINE Business ID

To create a LINE Official Account, you need to register for [LINE Business ID (opens new window)](https://account.line.biz/signup?redirectUri=https://entry.line.biz/form/entry/unverified). You can register for LINE Business ID using your LINE account or email address.

![sign-up-line-business-id-en](/assets/img/sign-up-line-business-id-en.2a1ba063.png)

### [#](#create-oa-entry-form) Step 1-2. Fill in the entry form

Once you've registered for LINE Business ID, the [entry form (opens new window)](https://entry.line.biz/form/entry/unverified) for a LINE Official Account will appear. Fill in the required information on this form. Once you've completed the form, your LINE Official Account will be created.

![oa-entry-form-en](/assets/img/oa-entry-form-en.7040c6c6.png)

### [#](#create-oa-check) Step 1-3. Check your LINE Official Account

The above steps will create your LINE Official Account. You can check the created LINE Official Account on the [LINE Official Account Manager (opens new window)](https://manager.line.biz/).

![oa-manager-list-en](/assets/img/oa-manager-list-en.508ca72e.png)

Once you have confirmed that your LINE Official Account has been created, proceed to step 2.

## [#](#using-oa-manager) 2. Enable the Messaging API for your LINE Official Account

To link your LINE Official Account with the Messaging API, go to the [LINE Official Account Manager (opens new window)](https://manager.line.biz/) and enable the Messaging API. This creates a channel.

### [#](#step-one-enable-use-of-messaging-api) Step 2-1. Enable the use of the Messaging API

When enabling the use of the Messaging API in the [LINE Official Account Manager (opens new window)](https://manager.line.biz/), a Messaging API channel is created. For more information, see [Messaging API (opens new window)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_messaging_api/) (only available in Japanese) in LINE for Business.

If your account used to login on the [LINE Official Account Manager (opens new window)](https://manager.line.biz/) is never used on the [LINE Developers Console](../../../console.md), a screen for registering developer information will appear. Enter your name and email to create a developer account.

![developer-registration-en](/assets/img/developer-registration-en.873ff5e3.png)

Next, select a provider to manage your LINE Official Account. If you plan to integrate your LINE Official Account with existing channels like LINE Login channel, select the provider the channel to integrate belongs to.

> [!warning]
> Be careful when you select a provider
>
> Once you assign a provider to manage your LINE Official Account, you can't change or de-assign the provider.

> [!danger]
> Cases that require special attention when selecting a provider
>
> For example, the following cases require special attention:
>
> - Channels and providers are managed by individuals or companies.
> - Create channels of unrelated services or companies under one provider.
> - Channels are created under a provider managed by a service (company) that operates channel management tools, etc.
>
> In such cases, problems may arise in the future due to the inability to move channels later between providers and the fact that a user is given different user IDs for different providers. After considering the risks involved, select an appropriate provider.

### [#](#step-two-log-in-to-line-developers-console) Step 2-2. Log in to the LINE Developers Console

The created Messaging API channel can be configured in the LINE Developers Console. Log in to the [LINE Developers Console](../../../console.md) with the account you used to login for the [LINE Official Account Manager (opens new window)](https://manager.line.biz/).

![login-dialog](/assets/img/login-dialog.a8eedc05.png)

### [#](#step-three-confirm-channel) Step 2-3. Check that you have a channel

Select the provider you selected in [Step 2-1](#step-one-enable-use-of-messaging-api). Make sure that a channel is created for the provider.

![console-home-en](/assets/img/console-home-en.5d5de6f3.png)

## [#](#using-console) \[End-of-life\] Create a channel in the LINE Developers Console

It's no longer possible to create Messaging API channels directly from the LINE Developers Console. For more information, see the news from September 4, 2024, [As of September 4, 2024, it's no longer possible to create Messaging API channels directly from the LINE Developers Console](../../../en/news/2024/09/04/no-longer-possible-to-create-messaging-api-channels-from-console.md).

## [#](#next-steps-after-getting-started) Next steps

Now that you have a channel, you're ready to use the Messaging API. In the following page, you will configure the channel to build a bot:

- [Building a bot](../../../en/docs/messaging-api/building-bot.md)

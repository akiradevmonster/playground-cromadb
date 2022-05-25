---
title: 'Messaging API overview | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/overview/'
---

## Table of Contents

[How the Messaging API works](#how-messaging-api-works)

[Try the demo](#line-api-use-case)

[What you can do with the Messaging API](#what-you-can-do)

[Send reply messages](#send-reply-messages) [Send messages at any time](#send-messages-at-any-time) [Send different message types](#send-different-message-types) [Get content sent by users](#get-content-sent-by-users) [Get user profiles](#get-user-profiles) [Join group chats](#join-group-chats) [Use rich menus](#use-rich-menus) [Use beacons](#use-beacons) [Use account link](#use-account-link) [Get the number of sent messages](#get-number-of-messages)

[Messaging API pricing](#line-official-account-plan)

[Next steps](#next-steps-with-the-messaging-api)

[Learn more](#related-pages-for-messaging-api)

# [#](#page-title) Messaging API overview

Use the Messaging API to build bots to provide personalized experiences on LINE to your users.

What is LINE Official Account

If you are unfamiliar with LINE Official Account, visit the comprehensive learning platform, [LINE Campus (opens new window)](https://lymcampus.jp/) (only available in Japanese).

## [#](#how-messaging-api-works) How the Messaging API works

With the Messaging API, a bot server can send and receive data to and from the LINE Platform. Requests are sent over HTTPS in JSON. The communication flow between a bot server and the LINE Platform is as follows:

1. A user sends a message to a LINE Official Account.
2. The LINE Platform sends a webhook event to the webhook URL of the bot server.
3. The bot server checks the webhook event and responds to the user through the LINE Platform.

![messaging-api-architecture](/assets/img/messaging-api-architecture.f40bffbb.png)

## [#](#line-api-use-case) Try the demo

The [LINE API Use Case (opens new window)](https://lineapiusecase.com/en/top.html) site lets you try LINE Official Accounts and features that are implemented with the Messaging API. You can also see the code for the demo samples. Add different LINE Official Accounts from the site, as a friend on your smartphone and experience the Messaging API. For more information, see [Chatbot (Messaging API) (opens new window)](https://lineapiusecase.com/en/api/msgapi.html).

## [#](#what-you-can-do) What you can do with the Messaging API

Here are the things you can do with the Messaging API.

### [#](#send-reply-messages) Send reply messages

With the Messaging API, you can send reply messages to users who added your LINE Official Account as a friend. For more information, see [Sending messages](../../../en/docs/messaging-api/sending-messages.md).

### [#](#send-messages-at-any-time) Send messages at any time

With the Messaging API, you can send messages directly to users at all times. For more information, see [Sending messages](../../../en/docs/messaging-api/sending-messages.md).

### [#](#send-different-message-types) Send different message types

With the Messaging API, you can send different types of messages to users as listed below. For more information about the specification of these messages, see [Message types](../../../en/docs/messaging-api/message-types.md).

- [Text message](../../../en/docs/messaging-api/message-types.md#text-messages)
- [Text message (v2)](../../../en/docs/messaging-api/message-types.md#text-messages-v2)
- [Sticker message](../../../en/docs/messaging-api/message-types.md#sticker-messages)
- [Image message](../../../en/docs/messaging-api/message-types.md#image-messages)
- [Video message](../../../en/docs/messaging-api/message-types.md#video-messages)
- [Audio message](../../../en/docs/messaging-api/message-types.md#audio-messages)
- [Location message](../../../en/docs/messaging-api/message-types.md#location-messages)
- [Imagemap message](../../../en/docs/messaging-api/message-types.md#imagemap-messages)
- [Template message](../../../en/docs/messaging-api/message-types.md#template-messages)
- [Flex Message](../../../en/docs/messaging-api/message-types.md#flex-messages)

### [#](#get-content-sent-by-users) Get content sent by users

With the Messaging API, you can get images, videos, audio, and files sent by users. Content that users send is automatically deleted after a period of time. For more information, see [Get content](../../../en/reference/messaging-api.md#get-content) in the Messaging API reference.

### [#](#get-user-profiles) Get user profiles

With the Messaging API, you can get profile information of a user who interacts with your LINE Official Account, in one-on-one and group chats. The types of profile information you can get are user's display name, language, profile image and status message. For more information, see [Get profile](../../../en/reference/messaging-api.md#get-profile) in the Messaging API reference.

### [#](#join-group-chats) Join group chats

With the Messaging API, you can send messages in group chats and get information of the group chat members. For more information, see [Group chats and multi-person chats](../../../en/docs/messaging-api/group-chats.md).

### [#](#use-rich-menus) Use rich menus

With the Messaging API, you can set and customize a rich menu in a chat. Rich menus help users find how they can interact with your LINE Official Account. Users can use this menu from the chat at all times. For more information, see [Use rich menus](../../../en/docs/messaging-api/using-rich-menus.md).

### [#](#use-beacons) Use beacons

With LINE Beacon, you can set your LINE Official Account to interact with the user who enters a beacon region. For more information, see [Use beacons with LINE](../../../en/docs/messaging-api/using-beacons.md).

### [#](#use-account-link) Use account link

With the Messaging API, you can securely link user accounts in your service to their LINE accounts, if they friended your LINE Official Account. For more information, see [User account linking](../../../en/docs/messaging-api/linking-accounts.md).

### [#](#get-number-of-messages) Get the number of sent messages

With the Messaging API, you can get the number of messages you sent from your LINE Official Account. The API returns only the number of messages sent through the Messaging API, not LINE Official Account Manager. For more information, see the following references:

- [Get the target limit for sending messages this month](../../../en/reference/messaging-api.md#get-quota)
- [Get number of messages sent this month](../../../en/reference/messaging-api.md#get-consumption)
- [Get number of sent reply messages](../../../en/reference/messaging-api.md#get-number-of-reply-messages)
- [Get number of sent push messages](../../../en/reference/messaging-api.md#get-number-of-push-messages)
- [Get number of sent multicast messages](../../../en/reference/messaging-api.md#get-number-of-multicast-messages)
- [Get number of sent broadcast messages](../../../en/reference/messaging-api.md#get-number-of-broadcast-messages)

## [#](#line-official-account-plan) Messaging API pricing

You can get started with the Messaging API for free. Anyone can use the Messaging API to send a message from a LINE Official Account.

You can send a certain number of messages each month for free. The number of free messages depends on the [subscription plan (opens new window)](https://www.lycbiz.com/jp/service/line-official-account/plan/) (only available in Japanese) of your LINE Official Account. The subscription plan may vary by country. See your country’s subscription plan for more information.

You can also send additional messages beyond the free message limit. You will be charged based on the number of additional messages sent. To send additional messages, open [LINE Official Account Manager (opens new window)](https://manager.line.biz/), select your LINE Official Account, and then select a subscription plan that allows you to send additional messages. Here, set a maximum number of additional messages.

For more information about how to change your subscription plan and set a maximum number of additional messages, see the [Activity and billing (subscription plan changes and payment related management) (opens new window)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_plan/) (only available in Japanese) page on LINE for Business.

How to count the number of messages sent

The number of messages is counted by the number of people you send a message to. Suppose you send a push message with four [message objects](../../../en/reference/messaging-api.md#message-objects) in a single request to a chatroom with five people. Here, the number of messages sent is five. The number of message objects in a request doesn't affect the number of messages sent.

If you send a message to a user who blocked your LINE Official Account or a user ID that doesn't exist, the message isn't counted. If the user can't receive your message, that message doesn't count as sent.

Sending methods that are counted as message count

Regarding the Messaging API, not all sent messages are counted as part of the message count. Below are the sending methods that are counted and not counted as message count:

- Sending methods that are counted as message count

  - Push messages
  - Multicast messages
  - Broadcast messages
  - Narrowcast messages

- Sending methods that are not counted as message count

  - Reply messages

For more information on the charges for messaging features other than the Messaging API, see [Chargeable Messages (opens new window)](https://www.lycbiz.com/jp/service/line-official-account/plan/) (only available in Japanese) in LINE for Business.

## [#](#next-steps-with-the-messaging-api) Next steps

As the next step, [get started with the Messaging API](../../../en/docs/messaging-api/getting-started.md) to create a bot. First, create a LINE Official Account. Once you've created a LINE Official Account, you can create a Messaging API channel for that LINE Official Account.

## [#](#related-pages-for-messaging-api) Learn more

- [Messaging API development guidelines](../../../en/docs/messaging-api/development-guidelines.md)
- [LINE Messaging API SDKs](../../../en/docs/messaging-api/line-bot-sdk.md)
- [Messaging API reference](../../../en/reference/messaging-api.md)

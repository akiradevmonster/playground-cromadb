---
title: 'Get user IDs | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/getting-user-ids/'
---

## Table of Contents

[What is user ID](#what-is-user-id)

[Getting a user ID](#getting-user-ids)

[Developer gets their own user ID](#get-own-user-id) [Get a user ID from webhook](#get-user-ids-in-webhook) [Get user IDs of all of your friends](#get-all-friends-user-ids) [Get user IDs of group and multi-person chat members](#get-member-user-ids)

[User ID validation](#checking-user-id-is-valid)

# [#](#page-title) Get user IDs

To send a message to a user with the Messaging API, you need to specify the user with a user ID. Learn how to get user IDs.

- [What is user ID](#what-is-user-id)
- [Getting a user ID](#getting-user-ids)
  - [Developer gets their own user ID](#get-own-user-id)
  - [Get a user ID from webhook](#get-user-ids-in-webhook)
  - [Get user IDs of all of your friends](#get-all-friends-user-ids)
  - [Get user IDs of group and multi-person chat members](#get-member-user-ids)
- [User ID validation](#checking-user-id-is-valid)

## [#](#what-is-user-id) What is user ID

User IDs are unique identifiers for users and are different from display names or the LINE ID users register to become searchable by friends. The LINE Platform issues a user ID as a string, formatted as `U[0-9a-f]{32}` (regular expression). An example of a user ID is `U8189cf6745fc0d808977bdb0b9f22995`.

![display-name-and-id-and-user-id-en](/assets/img/display-name-and-id-and-user-id-en.35db6ee5.png)

User IDs are issued different values for each provider, even for the same user. If the provider is the same, the user ID is the same regardless of the channel type (LINE Login channel or Messaging API channel).

For example, if there is a Messaging API channel and a LINE Login channel under the same provider, the user ID of the user A that you get for each channel is the same value. But, the user ID of the user A that you get for a channel under a different provider is a different value.

## [#](#getting-user-ids) Getting a user ID

You can get user IDs by using the four methods:

1. [Developer gets their own user ID](#get-own-user-id)
2. [Get a user ID from webhook](#get-user-ids-in-webhook)
3. [Get user IDs of all of your friends](#get-all-friends-user-ids)
4. [Get user IDs of group and multi-person chat members](#get-member-user-ids)

### [#](#get-own-user-id) Developer gets their own user ID

You can find your own user ID as a developer in **Your user ID** of the **Basic settings** tab of a channel on the [LINE Developers Console](../../../console.md). For more information, see [Channel roles](../../../en/docs/line-developers-console/managing-roles.md#roles-for-channel) in the LINE Developers Console documentation. No API is available to get your user ID as a developer.

### [#](#get-user-ids-in-webhook) Get a user ID from webhook

When a user adds your LINE Official Account as a friend or sends a message to your LINE Official Account, the LINE Platform sends the webhook to the URL (bot server) specified in the **Webhook URL** in the LINE Developers Console. The user ID is included in the webhook.

Here is an example of the [webhook event object](../../../en/reference/messaging-api.md#webhook-event-objects) the LINE Platform sends when a user adds a LINE Official Account as a friend:

```
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "follow",
      "timestamp": 1462629479859,
      "source": {
        // You can get the user ID from the userId property of the source object
        "type": "user",
        "userId": "U8189cf6745fc0d808977bdb0b9f22995"
      },
      "replyToken": "nHuyWiB7yP5Zw52FIkcQobQuGDXCTA",
      "mode": "active",
      "webhookEventId": "01FZ74A0TDDPYRVKNK77XKC3ZR",
      "deliveryContext": {
        "isRedelivery": false
      }
    }
  ]
}
```

If a user gave no consent to access their user profile information, the webhook contains no user ID. For more information, see [Consent on getting user profile information](../../../en/docs/messaging-api/user-consent.md).

### [#](#get-all-friends-user-ids) Get user IDs of all of your friends

You can get the user IDs of all users who added your LINE Official Account as a friend with the [Get a list of users who added your LINE Official Account as a friend](../../../en/reference/messaging-api.md#get-follower-ids) endpoint.

> [!warning]
> Note
>
> This feature is available only for verified or [premium accounts](../../../en/glossary.md#premium-account). For more information on account types, see [Account Types of LINE Official Account (opens new window)](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) on LINE for Business.

### [#](#get-member-user-ids) Get user IDs of group and multi-person chat members

You can get user IDs of members of a group or multi-person chat that your LINE Official Account is participating in using the following endpoints:

- [Get group chat member user IDs](../../../en/reference/messaging-api.md#get-group-member-user-ids)
- [Get multi-person chat member user IDs](../../../en/reference/messaging-api.md#get-room-member-user-ids)

> [!warning]
> Note
>
> This feature is available only for verified or [premium accounts](../../../en/glossary.md#premium-account). For more information on account types, see [Account Types of LINE Official Account (opens new window)](https://www.linebiz.com/jp-en/service/line-official-account/account-type/) on LINE for Business.

## [#](#checking-user-id-is-valid) User ID validation

Even if you have a user ID, you can't send a message if the user ID is invalid.

To check if a user ID is valid, use the [Get profile](../../../en/reference/messaging-api.md#get-profile) endpoint. If the user ID is valid, the HTTP status code `200` is returned. If anything other than `200` is returned, the user ID is invalid and you can't send a message to this user.

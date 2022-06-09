---
title: 'Use membership features | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/use-membership-features/'
---

## Table of Contents

[Endpoint for getting membership information](#endpoints)

[Get a user's membership subscription status](#get-a-users-membership-subscription-status) [Get a list of users who have joined the membership](#get-membership-user-ids) [Get membership plans being offered](#get-membership-plans)

[Webhook membership event](#membership-event)

# [#](#page-title) Use membership features

[Membership (opens new window)](https://www.lycbiz.com/jp/service/line-official-account/Membership/) (only available in Japanese) is a monthly membership subscription feature available for the LINE Official Account. Users can subscribe to the membership plan on your LINE Official Account to receive exclusive member perks.

## [#](#endpoints) Endpoint for getting membership information

With the Messaging API, you can get membership information with the following endpoints:

- [Get a user's membership subscription status](#get-a-users-membership-subscription-status)
- [Get a list of users who have joined the membership](#get-membership-user-ids)
- [Get membership plans being offered](#get-membership-plans)

How to start a membership

You can set up and publish your membership on the [LINE Official Account Manager (opens new window)](https://manager.line.biz/). For more information, see [You can easily create subscription services on LINE! What is the "Membership" feature of the LINE Official Account? (opens new window)](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/) (only available in Japanese) in LINE for Business.

Currently, the membership feature is only available for LINE Official Accounts in Japan.

### [#](#get-a-users-membership-subscription-status) Get a user's membership subscription status

This endpoint allows you to get information about the memberships to which the user specified by the user ID is subscribed. For more information, see [Get a user's membership subscription status](../../../en/reference/messaging-api.md#get-a-users-membership-subscription-status) in the Messaging API reference.

### [#](#get-membership-user-ids) Get a list of users who have joined the membership

This endpoint allows you to get a list of user IDs for users who have joined the membership of your LINE Official Account. For more information, see [Get a list of users who have joined the membership](../../../en/reference/messaging-api.md#get-membership-user-ids) in the Messaging API reference.

### [#](#get-membership-plans) Get membership plans being offered

This endpoint allows you to get the membership plans that are currently being offered through your LINE Official Account membership. For more information, see [Get membership plans being offered](../../../en/reference/messaging-api.md#get-membership-plans) in the Messaging API reference.

## [#](#membership-event) Webhook membership event

When a user joins, renews, or leaves a membership of your LINE Official Account, a webhook membership event is sent. For more information, see [Membership event](../../../en/reference/messaging-api.md#membership-event) in the Messaging API reference.

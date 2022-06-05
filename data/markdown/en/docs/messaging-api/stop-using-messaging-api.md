---
title: 'Stop using the Messaging API | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/stop-using-messaging-api/'
---

## Table of Contents

[Stop using webhooks](#disable-use-webhook)

[Revoke channel access tokens](#revoke-channel-access-token)

# [#](#page-title) Stop using the Messaging API

Stop using your LINE Official Account

If you want to stop using your LINE Official Account linked to a Messaging API channel, see [Stop using your LINE Official Account](../../../en/docs/messaging-api/stop-using-line-official-account.md).

If you want to continue using your LINE Official Account linked to a Messaging API channel, but want to stop using the Messaging API, we recommend that you perform the following operations. Note that you can't delete only the Messaging API channel while leaving your LINE Official Account linked to the Messaging API channel.

- [Stop using webhooks](#disable-use-webhook)
- [Revoke channel access tokens](#revoke-channel-access-token)

## [#](#disable-use-webhook) Stop using webhooks

1. Select the Messaging API channel you want to stop using on the [LINE Developers Console](../../../console.md).
2. Click the **Messaging API** tab.
3. Disable the **Use webhook** in the **Webhook settings** section.

![Use webhook in the Webhook settings section](/assets/img/disable-use-webhook-en.63b32587.png)

## [#](#revoke-channel-access-token) Revoke channel access tokens

Endpoints for revoking channel access tokens vary depending on the type of channel access tokens. Use the endpoint corresponding to the channel access token you are using to revoke the channel access token. Note that [stateless channel access tokens](../../../en/docs/basics/channel-access-token.md#stateless-channel-access-token) can't be revoked.

- [Revoke channel access token v2.1](../../../en/reference/messaging-api.md#revoke-channel-access-token-v2-1) endpoint
- [Revoke short-lived or long-lived channel access token](../../../en/reference/messaging-api.md#revoke-longlived-or-shortlived-channel-access-token) endpoint

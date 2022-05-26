---
title: 'Receive messages (webhook) | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/receiving-messages/'
---

## Table of Contents

[Verify signature](#verify-signature)

[Webhook event types](#webhook-event-types)

[Webhook events for chats](#webhook-event-in-one-on-one-talk-or-group-chat) [Other webhook events](#other-webhook-events)

[Processing on receipt of unsend event](#webhook-unsend-message)

[Redeliver a webhook that failed to be received](#webhook-redelivery)

[Redelivered webhooks](#redelivered-webhooks) [Enable webhook redelivery](#enable-webhook-redelivery) [Conditions for webhook redelivery](#webhook-redelivery-condition)

[Check error statistics for sending webhooks](#check-error-reason)

[Get user-sent content with webhook](#getting-content-sent-by-users)

[Get images, videos, audio, and files](#getting-content-file-sent-by-users) [Get a preview image of the image or video](#getting-content-preview-image)

[Get user profile](#get-user-profile)

# [#](#page-title) Receive messages (webhook)

Every time a user adds your LINE Official Account as a friend or sends it a message, the LINE Platform sends an HTTP POST request with a webhook event object to the webhook URL (bot server) you register in the [LINE Developers Console](../../../console.md).

Make sure that your bot server processes the webhook event objects properly. The LINE Platform may suspend sending webhooks to your bot server if your bot server fails to receive webhooks for a long time.

> [!danger]
> Security warning
>
> Your bot server may receive HTTP POST requests from sources other than the LINE Platform, and such requests can be malicious. Be sure to [verify the signature](#verify-signature) before processing webhook event objects.

We recommend processing events asynchronously

We recommend that you process webhook events asynchronously. This is to prevent subsequent requests to wait until the current request is processed.

## [#](#verify-signature) Verify signature

When your bot server receives a request, verify the request sender. To make sure the request is from the LINE Platform, make your bot server verify the signature in the `x-line-signature` request header.

1. Compute the digest for the request body. Use the HMAC-SHA256 algorithm with the [channel secret](../../../en/glossary.md#channel-secret) as the secret key.
2. Check if the Base64-encoded digest matches the signature in the `x-line-signature` request header.

Here is a Python® example that verify a signature:

```
import base64
import hashlib
import hmac

channel_secret = '...' # Channel secret string
body = '...' # Request body string
hash = hmac.new(channel_secret.encode('utf-8'),
    body.encode('utf-8'), hashlib.sha256).digest()
signature = base64.b64encode(hash)
# Compare x-line-signature request header and the signature
```

For more information and code samples, see [Signature validation](../../../en/reference/messaging-api.md#signature-validation) in the Messaging API reference.

## [#](#webhook-event-types) Webhook event types

You can control how your bot reacts based on the data in the webhook event object. You can also make your bot act on something or respond to users. You can get webhook events for [chats](#webhook-event-in-one-on-one-talk-or-group-chat) and [beacon and account links](#other-webhook-events). For more information, see [Webhook Event Objects](../../../en/reference/messaging-api.md#webhook-event-objects) in the Messaging API reference.

### [#](#webhook-event-in-one-on-one-talk-or-group-chat) Webhook events for chats

The webhook events that your bot server receives in one-on-one chats or [group chats and multi-person chats](../../../en/docs/messaging-api/group-chats.md) are as follows:

| Webhook event                | Receive when                                                                                                                                    | one-on-one chats | Group chats and multi-person chats |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------- |
| Message event                | When a user sends a message. You can reply to this event.                                                                                       | ✅               | ✅                                 |
| Unsend event                 | When a user unsends a message. For more information on handling this event, see Processing on receipt of unsend event.                          | ✅               | ✅                                 |
| Follow event                 | When a user adds your LINE Official Account as a friend, or unblocks your LINE Official Account. You can reply to this event.                   | ✅               | ❌                                 |
| Unfollow event               | When a user blocks your LINE Official Account                                                                                                   | ✅               | ❌                                 |
| Join event                   | When your LINE Official Account joins a group chat or multi-person chat. You can reply to this event.                                           | ❌               | ✅                                 |
| Leave event                  | When a user deletes your LINE Official Account or your LINE Official Account leaves, from a group chat or multi-person chat                     | ❌               | ✅                                 |
| Member join event            | When a user joins a group chat or multi-person chat that your LINE Official Account is a member of. You can reply to this event.                | ❌               | ✅                                 |
| Member leave event           | When a user leaves a group chat or multi-person chat that your LINE Official Account is a member of                                             | ❌               | ✅                                 |
| Postback event               | When a user triggers a postback action. You can reply to this event.                                                                            | ✅               | ✅                                 |
| Video viewing complete event | When a user finishes watching a video message that has a trackingId specified sent from the LINE Official Account. You can reply to this event. | ✅               | ❌                                 |

✅ Your bot server receives this event    ❌ Your bot server doesn't receive this event

#### [#](#webhook-template-and-flex-messages) Webhook when a template message or Flex Message is sent by a user

Although users themselves can't send a [template message](../../../en/reference/messaging-api.md#template-messages) or [Flex Message](../../../en/reference/messaging-api.md#flex-message), using [`liff.sendMessages()`](../../../en/reference/liff.md#send-messages) allows LINE MINI Apps or LIFF apps to send messages on behalf of the users to the currently open chat screens.

When a user sends a template message or Flex Message via `liff.sendMessages()`, the message object that arrives via the webhook will be [text](../../../en/reference/messaging-api.md#wh-text). The string specified in the `altText` property of the template message or Flex Message will be included in the `text` property of the text message object.

```
"message": {
  "type": "text",
  "id": "468789577898262530",
  "quotedMessageId": "468789532432007169",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "this is a flex message" // altText specified in Flex Message
}
```

#### [#](#receive-quote-messages-sent-by-user) Receive quote messages sent by users via webhook

When a user sends a message quoting a past message, you can check the ID of the quoted message in the `quotedMessageId` property included in the `message` property of the webhook. In this case, you can check the ID of the quoted message, but you can't retrieve the content of the message (such as text or stickers).

![chat-reply](/assets/img/chat-reply.7f39176f.png)

Here is an example of a webhook that arrives at your bot server when a user sends a message quoting a past message.

```
{
  "destination": "xxxxxxxxxx",
  "events": [
    {
      "type": "message",
      "message": {
        "type": "text",
        "id": "468789577898262530", // ID of the sent message
        "quotedMessageId": "468789532432007169", // ID of the quoted message
        "quoteToken": "q3Plxr4AgKd...",
        "text": "Chicken, please." // Text of the sent message
      },
      "webhookEventId": "01H810YECXQQZ37VAXPF6H9E6T",
      "deliveryContext": {
        "isRedelivery": false
      },
      "timestamp": 1692251666727,
      "source": {
        "type": "group",
        "groupId": "Ca56f94637c...",
        "userId": "U4af4980629..."
      },
      "replyToken": "38ef843bde154d9b91c21320ffd17a0f",
      "mode": "active"
    }
  ]
}
```

For more information about the `quotedMessageId` property, see [text](../../../en/reference/messaging-api.md#wh-text) and [sticker](../../../en/reference/messaging-api.md#wh-sticker) of the [Message event](../../../en/reference/messaging-api.md#message-event) in the Messaging API reference.

For more information about how users can send quote messages, see [Using the chat reply feature (opens new window)](https://guide.line.me/ja/friends-and-groups/create-groups.html) (only available in Japanese) in the LINE user's guide.

#### [#](#webhook-message-with-mention-to-bot) Webhook when a message including a mention to a bot is sent

If a message sent by a user mentions your bot, the following values will be set in the text message object in the webhook event sent to the bot server:

- `mention.mentionees[].type` will be set to `user`.
- `mention.mentionees[].userId` will be set to the user ID of the bot.
- `mention.mentionees[].isSelf` is set to `true`.

For example, a webhook event object containing the following message event will be sent to the bot server:

```
"message": {
  "id": "444573844083572737",
  "type": "text",
  "quoteToken": "q3Plxr4AgKd...",
  "text": "@example_bot Good Morning!!",
  "mention": {
    "mentionees": [
      {
        "index": 0,
        "length": 12,
        "userId": "{user ID of the bot}",
        "type": "user",
        "isSelf": true
      }
    ]
  }
}
```

You can check the user ID of the bot in the `destination` property in the [request body of the webhook](../../../en/reference/messaging-api.md#request-body) and in the `userId` property which can be obtained using the [Get bot info](../../../en/reference/messaging-api.md#get-bot-info) endpoint.

### [#](#other-webhook-events) Other webhook events

Webhook events are also available for beacon and account linking as follows:

| Webhook event      | Receive when                                                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beacon event       | When a user enters the reception range of a Beacon. You can reply to this event. For more information, see Use beacons with LINE.                                     |
| Account link event | When a user links their LINE account with their account of your service (as a provider). You can reply to this event. For more information, see User account linking. |

## [#](#webhook-unsend-message) Processing on receipt of unsend event

Users can unsend a sent message within 24 hours of sending it.

When a user unsends a sent message, an [unsend event](../../../en/reference/messaging-api.md#unsend-event) is sent to the bot server. When the unsend event is received, we recommend that service providers respect the user's intent to unsend a sent message and handle the message appropriately with the utmost care so that the target message can't be seen or used in the future.

For example, you should handle a message that a user has unsent as follows:

- Cancel the target message displayed on your own management screen, etc.
- Delete the target message stored in a database or other storage device.

For more information about how to unsend a sent message in the LINE app, see [Using the unsend message function (opens new window)](https://guide.line.me/ja/chats-calls-notifications/chats/chat-delete.html) (only available in Japanese) in the LINE user's guide.

## [#](#webhook-redelivery) Redeliver a webhook that failed to be received

The Messaging API provides a feature to redeliver webhooks that your bot server fails to receive. Even if your bot server fails to respond normally to a webhook due to temporary over-access or other reasons, the webhook will be redelivered from the LINE Platform for a certain period of time, so your bot server can receive the webhook after recovery.

Webhook redelivery is available for all Messaging API channels.

> [!warning]
> Check before enabling webhook redelivery
>
> - The same webhook event may be sent to your bot server more than once by different reasons such as network routing problem. To detect duplicates, use `webhookEventId` in the webhook event object.
> - If the LINE Platform redelivers webhooks, the order of webhook events you receive can be different from the order the events occurred. If this is a problem, check the `timestamp` of webhook event objects to confirm the context.

### [#](#redelivered-webhooks) Redelivered webhooks

The content of a redelivered [webhook event object](../../../en/reference/messaging-api.md#webhook-event-objects) is the same as the original webhook event object, except for the value of `deliveryContext.isRedelivery`. Values such as webhook event ID and reply token remain unchanged.

The reply token included in a redelivered webhook event object can be used except in certain cases. For more information on reply tokens, see [Reply token](../../../en/reference/messaging-api.md#send-reply-message-reply-token) in the Messaging API reference.

### [#](#enable-webhook-redelivery) Enable webhook redelivery

By default, webhook redelivery is disabled. To enable webhook redelivery:

1. Open the channel settings screen from the [LINE Developers Console](../../../console.md).
2. Click the **Messaging API** tab.
3. Enable **Use webhook**.
4. Enable **Webhook redelivery**.

When you enable **Webhook redelivery**, a note on webhook redelivery is displayed for you to reference. Read and understand the note before enabling.

![enable-webhook-redelivery-en](/assets/img/enable-webhook-redelivery-en.9443620d.png)

### [#](#webhook-redelivery-condition) Conditions for webhook redelivery

The LINE Platform sends failed webhooks again if these conditions are met, for a pre-defined number of times with a time interval:

- [Webhook redelivery is enabled](#enable-webhook-redelivery).
- The bot server didn't return `20x` status code for the webhook.

> [!warning]
> May not be able to redeliver webhooks
>
> Be aware that webhook redelivery doesn't guarantee that webhooks will be reliably delivered. In addition, if the number of webhook redeliveries suddenly increases and is determined to affect the operation of the LINE Platform, webhook redelivery may be forced to be disabled.

## [#](#check-error-reason) Check error statistics for sending webhooks

The content listed here has been moved to [Check the reason for errors](../../../en/docs/messaging-api/check-webhook-error-statistics.md#check-error-reason).

## [#](#getting-content-sent-by-users) Get user-sent content with webhook

You can get content sent by users with a message ID in the [webhook](../../../en/reference/messaging-api.md#webhooks). The types of content that can be retrieved are as follows:

- [Images, videos, audio, files](#getting-content-file-sent-by-users)
- [Preview image of the image or video](#getting-content-preview-image)

> [!warning]
> Note
>
> - Content that users send is automatically deleted after a certain period of time.
> - You can get the text that users sent through the [text](../../../en/reference/messaging-api.md#wh-text) message object of the webhook. There is no API available to get the text again after receiving the webhook.

### [#](#getting-content-file-sent-by-users) Get images, videos, audio, and files

You can get [images](../../../en/reference/messaging-api.md#wh-image), [videos](../../../en/reference/messaging-api.md#wh-video), [audio](../../../en/reference/messaging-api.md#wh-audio), and [files](../../../en/reference/messaging-api.md#wh-file) that users send, with a message ID in webhook.

Example request

```
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content \
-H 'Authorization: Bearer {channel access token}'
```

For more information, see [Get content](../../../en/reference/messaging-api.md#get-content) in the Messaging API reference.

### [#](#getting-content-preview-image) Get a preview image of the image or video

You can get a preview image of the image or video sent by users with a message ID in the webhook.

Example request

```
curl -v -X GET https://api-data.line.me/v2/bot/message/{messageId}/content/preview \
-H 'Authorization: Bearer {channel access token}'
```

The preview image is image data converted to a smaller data size than the original content.

For example, a preview image can be used as a thumbnail. When building a site like a CRM, you can display thumbnails while downloading large images or videos. This allows users to quickly assess the content overview, improving the system's user experience.

For more information, see [Get a preview image of the image or video](../../../en/reference/messaging-api.md#get-image-or-video-preview) in the Messaging API reference.

## [#](#get-user-profile) Get user profile

You can get a user's LINE profile (user's display name, user ID, profile image URL, status message, etc.) with the user's ID contained in a [webhook](../../../en/reference/messaging-api.md#webhooks).

Example request

```
curl -v -X GET https://api.line.me/v2/bot/profile/{userId} \
-H 'Authorization: Bearer {channel access token}'
```

If successful, a JSON object is returned.

```
{
  "displayName": "LINE Botto",
  "userId": "U4af4980629...",
  "pictureUrl": "https://profile.line-scdn.net/ch/v2/p/uf9da5ee2b...",
  "statusMessage": "Hello world!"
}
```

For more information, see [Get profile](../../../en/reference/messaging-api.md#get-profile) in the Messaging API reference.

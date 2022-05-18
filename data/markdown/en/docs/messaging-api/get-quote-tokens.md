---
title: 'Get quote tokens | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/get-quote-tokens/'
---

## Table of Contents

[What is a quote token](#what-is-quote-token)

[Get quote tokens](#getting-quite-tokens)

[Get quote tokens via webhook](#get-quote-tokens-via-webhook) [Get quote tokens in the response when sending a message](#get-quote-tokens-in-the-response)

# [#](#page-title) Get quote tokens

When you want to send a message quoting a past message with the Messaging API, you use quote tokens. This page explains how to get quote tokens.

- [What is a quote token](#what-is-quote-token)
- [Get quote tokens](#getting-quite-tokens)
  - [Get quote tokens via webhook](#get-quote-tokens-via-webhook)
  - [Get quote tokens in the response when sending a message](#get-quote-tokens-in-the-response)

## [#](#what-is-quote-token) What is a quote token

A quote token is a string like `IStG5h1Tz7bsH6xinEQtKQ9IdtcN5wLE15-LwtIDCEYAqDkV741O-XkOhZo1GYxw2UCURKnpHujpZuZaBaeQZVOVpKiaEeAz1Ye3-3ZYbPQVjuXZ4x8ZpISG7WhJDCE8o-hhHh8uMBRyp3b0L_Cxlg`. Quote tokens are required to [send quote messages](../../../en/docs/messaging-api/sending-messages.md#send-quote-messages).

Quote tokens can only be used in one-on-one chats, group chats, and multi-person chats where the message to be quoted was sent. Quote tokens have no expiration date and the same quote token can be used multiple times.

## [#](#getting-quite-tokens) Get quote tokens

There are two ways to get quote tokens:

1. [Get quote tokens via webhook](#get-quote-tokens-via-webhook)
2. [Get quote tokens in the response when sending a message](#get-quote-tokens-in-the-response)

### [#](#get-quote-tokens-via-webhook) Get quote tokens via webhook

When a user sends a message in a one-on-one chat, group chat, or multi-person chat where your LINE Official Account is added, a [message event](../../../en/reference/messaging-api.md#message-event) of webhook is sent to your bot server. In this message event, the following message objects include the quote tokens (`quoteToken`):

- [Text](../../../en/reference/messaging-api.md#wh-text)
- [Sticker](../../../en/reference/messaging-api.md#wh-sticker)
- [Image](../../../en/reference/messaging-api.md#wh-image)
- [Video](../../../en/reference/messaging-api.md#wh-video)

```
"message": {
  "type": "text",
  "id": "468789577898262530",
  "quoteToken": "q3Plxr4AgKd...", // Quote token
  "text": "Can I reserve a table for dinner tonight?"
}
```

For more information about webhook, see [Receive messages (webhook)](../../../en/docs/messaging-api/receiving-messages.md).

### [#](#get-quote-tokens-in-the-response) Get quote tokens in the response when sending a message

When you send a [reply message](../../../en/reference/messaging-api.md#send-reply-message) or a [push message](../../../en/reference/messaging-api.md#send-push-message) with the Messaging API, a JSON object containing the `sentMessages` property is returned as a response.

```
{
  "sentMessages": [
    {
      "id": "461230966842064897",
      "quoteToken": "IStG5h1Tz7b..."
    }
  ]
}
```

However, quote tokens (`sentMessages[].quoteToken`) are included in the response only when the following message objects that can be specified as quote targets are sent:

- [Text message](../../../en/docs/messaging-api/message-types.md#text-messages)
- [Text message (v2)](../../../en/docs/messaging-api/message-types.md#text-messages-v2)
- [Sticker message](../../../en/docs/messaging-api/message-types.md#sticker-messages)
- [Image message](../../../en/docs/messaging-api/message-types.md#image-messages)
- [Video message](../../../en/docs/messaging-api/message-types.md#video-messages)
- [Template message](../../../en/docs/messaging-api/message-types.md#template-messages) (only `altText` is displayed when quoted)
- [Flex Message](../../../en/docs/messaging-api/message-types.md#flex-messages) (only `altText` is displayed when quoted)

If you send a message specifying multiple of the above message objects, you will receive the same number of quote tokens. In this case, the order of the elements in the `sentMessages` array is guaranteed to be the same as the order of the message objects when they were sent.

```
{
  "sentMessages": [
    {
      "id": "471875397094211585",
      "quoteToken": "YKPDqjc2jmW..."
    },
    {
      "id": "471875397127766017",
      "quoteToken": "eG5SfLhgiFX..."
    }
  ]
}
```

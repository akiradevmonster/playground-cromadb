---
title: 'Send Flex Messages | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/using-flex-messages/'
---

## Table of Contents

[Operating environment](#operating-environment)

[Flex Message Simulator](#checking-behavior-in-flex-message-simulator)

[Send "Hello, World!"](#sending-hello-world)

[Define a Flex Message in JSON](#preparing-json-data) [Call the Messaging API to send a Flex Message](#sending-messages-with-the-messaging-api)

[Related pages](#related-using-flex-messages-pages)

# [#](#page-title) Send Flex Messages

Flex Messages are messages that offer an extensive and interactive layout compared to ordinary LINE messages. Ordinary LINE messages deliver only a single source type, such as text, image, and video. You can customize the layout as you want, based on the [CSS Flexible Box (CSS Flexbox) (opens new window)](https://www.w3.org/TR/css-flexbox-1/) specification.

The building blocks of Flex Messages are containers, blocks, and components. Each Flex Message has a single top element, a container which contains message bubbles. Containers can have multiple message bubbles. Bubbles have blocks and blocks have components.

Flex Messages let you set the direction of the text, left-to-right or right-to-left.

> [!warning]
> Flex Message limitation
>
> The same Flex Message may be rendered differently depending on the environment of the recipient device. Rendering may be affected by the device OS, LINE version, device resolution, language settings, and font.

![Flex Message examples](/assets/img/bubbleSamples-Update1.96cf1f73.png)

Like other message types, you define Flex Messages in JSON. For more information on Flex Messages, see:

- [Flex Message elements](../../../en/docs/messaging-api/flex-message-elements.md)
- [Flex Message layout](../../../en/docs/messaging-api/flex-message-layout.md)
- [Flex Message](../../../en/reference/messaging-api.md#flex-message) (Messaging API reference)

## [#](#operating-environment) Operating environment

Flex Messages are supported in all LINE versions. The features listed below aren't supported in all LINE versions:

| Feature                                                                                                | LINE for iOSLINE for Android | LINE for PC(macOS, Windows) |
| ------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------- |
| maxWidth property of boxmaxHeight property of boxlineSpacing property of textVideo \*1                 | 11.22.0 or later             | 7.7.0 or later              |
| The deca and hecto values in the size property of bubble \*2scaling property of button, text, and icon | 13.6.0 or later              | 7.17.0 or later             |

\*1 To make the video component in Flex Messages rendered properly on versions that don't support the video component, specify the `altContent` property. The image you specify in this property gets displayed instead.

\*2 If the version of LINE is lower than the version that supports `deca` and `hecto`, the size of the bubble will be displayed as `kilo`.

## [#](#checking-behavior-in-flex-message-simulator) Flex Message Simulator

With the [Flex Message Simulator](../../../flex-simulator.md), you can check the layout of Flex Messages without sending messages to see the rendered version.

![Flex Message Simulator](/assets/img/flex-message-simulator-en.3b836a3f.png)

For more information on Flex Message Simulator, see the [tutorials](../../../en/docs/messaging-api/using-flex-message-simulator.md).

## [#](#sending-hello-world) Send "Hello, World!"

To get started with Flex Messages, try to send "Hello, World!" as a Flex Message. First, [define the Flex Message](#preparing-json-data) in JSON and then [call the Messaging API](#sending-messages-with-the-messaging-api) to send the message.

<!-- 画像: ここに適切な代替テキストが必要です -->

### [#](#preparing-json-data) Define a Flex Message in JSON

Before you call the Messaging API to send a Flex Message, define the Flex Message in JSON. This is how you define a Flex Message in JSON, for the "Hello, World!" message. We only need a single message bubble for this Flex Message, so we use the [Bubble container](../../../en/docs/messaging-api/flex-message-elements.md#bubble) type.

```
{
  "type": "bubble", // 1
  "body": {
    // 2
    "type": "box", // 3
    "layout": "horizontal", // 4
    "contents": [
      // 5
      {
        "type": "text", // 6
        "text": "Hello,"
      },
      {
        "type": "text", // 6
        "text": "World!"
      }
    ]
  }
}
```

See the description for the code comment labels 1 to 6:

| dummy | dummy                                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------------- |
| 1     | Create a container for a single message bubble. Thus set the container type to "bubble".                            |
| 2     | Specify a body to contain the contents of the bubble. We only need one block type show the message, the body block. |
| 3     | Set the body block to a box component.                                                                              |
| 4     | Set the orientation of the body to horizontal. This arranges the child components in the box horizontally.          |
| 5     | Specify the components to place in the box.                                                                         |
| 6     | Insert two text components, "Hello," and "World!".                                                                  |

### [#](#sending-messages-with-the-messaging-api) Call the Messaging API to send a Flex Message

You can send Flex Messages by any of the [messaging types](../../../en/docs/messaging-api/sending-messages.md). In the request body of the message request, set the `messages.contents` property with the [Flex Message](../../../en/reference/messaging-api.md#flex-message) object definition.

Here is an example request to send a push message as a Flex Message:

```
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "flex",
      "altText": "This is a Flex Message",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "Hello,"
            },
            {
              "type": "text",
              "text": "World!"
            }
          ]
        }
      }
    }
  ]
}'
```

## [#](#related-using-flex-messages-pages) Related pages

- [Flex Message elements](../../../en/docs/messaging-api/flex-message-elements.md)
- [Flex Message layout](../../../en/docs/messaging-api/flex-message-layout.md)
- [Flex Message](../../../en/reference/messaging-api.md#flex-message) (Messaging API reference)
- [Flex Message Simulator](../../../flex-simulator.md)

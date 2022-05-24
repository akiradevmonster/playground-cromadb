---
title: 'Message types | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/message-types/'
---

## Table of Contents

[Text message](#text-messages)

[Text message (v2)](#text-messages-v2)

[Sticker message](#sticker-messages)

[Image message](#image-messages)

[Video message](#video-messages)

[Audio message](#audio-messages)

[Location message](#location-messages)

[Imagemap message](#imagemap-messages)

[Template message](#template-messages)

[Buttons template](#buttons-template) [Confirm template](#confirm-template) [Carousel template](#carousel-template) [Image carousel template](#image-carousel-template)

[Flex Message](#flex-messages)

[Common features](#common-features)

[Quick reply](#quick-reply)

[Related pages](#related-message-types-pages)

# [#](#page-title) Message types

With the Messaging API, you can make your bot send these types of messages. To make a message interactive, you can specify an action on a message for users to trigger. For the specification of each message type, see [Message objects](../../../en/reference/messaging-api.md#message-objects) in the Messaging API reference.

- [Text message](#text-messages)
- [Text message (v2)](#text-messages-v2)
- [Sticker message](#sticker-messages)
- [Image message](#image-messages)
- [Video message](#video-messages)
- [Audio message](#audio-messages)
- [Location message](#location-messages)
- [Imagemap message](#imagemap-messages)
- [Template message](#template-messages)
- [Flex Message](#flex-messages)

## [#](#text-messages) Text message

Text messages contain text, including emojis. To send a text message, add the text in the [message object](../../../en/reference/messaging-api.md#message-objects) you send with the Messaging API. For more information, see [Text message](../../../en/reference/messaging-api.md#text-message) in the Messaging API reference.

![Text message](/assets/img/text.c8ca7daf.png)

You can use LINE emojis and Unicode emojis in text messages. Check a list of LINE emojis you can send with the Messaging API.

![Emoji](/assets/img/emoji.c6a7d7b7.png)

Text decoration and resizing

To decorate or resize your text, use [Flex Messages](../../../en/reference/messaging-api.md#flex-message).

## [#](#text-messages-v2) Text message (v2)

You can send text by using text messages (v2). Unlike [text messages](#text-messages), you can substitute strings enclosed in `{` and `}` with mentions and emojis. For more information, see [Text message (v2)](../../../en/reference/messaging-api.md#text-message-v2) in the Messaging API reference.

![text-v2](/assets/img/text-v2.669365d0.png)

You can continue to use text messages that we've been providing up until now. However, we may only add new features to text messages (v2) from now on.

## [#](#sticker-messages) Sticker message

Stickers help you to make your bot more appealing and enjoyable to users. To send a sticker with the Messaging API, specify the sticker's package ID and sticker ID in the [message object](../../../en/reference/messaging-api.md#message-objects). Check a list of available stickers you can send. For more information, see the [Sticker message](../../../en/reference/messaging-api.md#sticker-message) in the Messaging API reference.

![Sticker message](/assets/img/sticker.d5384d1d.png)

## [#](#image-messages) Image message

Image messages deliver a single image file to users. When you send an image, specify two URLs in the [message object](../../../en/reference/messaging-api.md#message-objects). One is for the original image and one is for preview. The preview image is the image displayed in a chat, so specify an image smaller than the original image.

When the user taps the preview image, the full image is displayed as shown below. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Image message](../../../en/reference/messaging-api.md#image-message) in the Messaging API reference.

![Image message](/assets/img/image.4e7ca2a6.png) ![Full image message](/assets/img/image-full.e1c37915.png)

## [#](#video-messages) Video message

Video messages deliver a single video file to users. When you send a video message, specify two URLs in the [message object](../../../en/reference/messaging-api.md#message-objects), one for the video file and one for the preview.

LINE plays the video when the user taps the preview. Make sure the URLs have the HTTPS (TLS 1.2 or later) protocol. For more information, see the [Video message](../../../en/reference/messaging-api.md#video-message) in the Messaging API reference.

![Video message](/assets/img/video.603d29d7.png)

## [#](#audio-messages) Audio message

Audio messages deliver a single audio file to users. To send an audio file, specify a URL to the file and the duration in the [message object](../../../en/reference/messaging-api.md#message-objects).

Make sure the URL has the HTTPS (TLS 1.2 or later) protocol. For more information, see [Audio message](../../../en/reference/messaging-api.md#audio-message) in the Messaging API reference.

<!-- 画像: ここに適切な代替テキストが必要です -->

## [#](#location-messages) Location message

Location messages deliver location information to users. Specify in the [message object](../../../en/reference/messaging-api.md#message-objects) the title, address, latitude coordinate, and longitude coordinate. For more information, see [Location message](../../../en/reference/messaging-api.md#location-message) in the Messaging API reference.

![Location message](/assets/img/location-en.721f6523.png)

## [#](#imagemap-messages) Imagemap message

Imagemap messages are messages with an image that has multiple tappable areas. You can set a tappable area to open a webpage or send a message on the user's behalf. You can also set to play a video over the image and display a link text when the playback is finished. For more information, see [Imagemap message](../../../en/reference/messaging-api.md#imagemap-message) in the Messaging API reference.

![Imagemap message](/assets/img/imagemap.02b6a337.png)

## [#](#template-messages) Template message

Template messages have predefined layouts that help you create richer experiences for your users. Use [actions](../../../en/docs/messaging-api/actions.md) to make users to interact with your bot. A tap is all that is required for users to trigger an action. This is much simpler than having to type in a message.

Available templates are:

- [Buttons](#buttons-template)
- [Confirm](#confirm-template)
- [Carousel](#carousel-template)
- [Image carousel](#image-carousel-template)

For more information about template messages, see [Template messages](../../../en/reference/messaging-api.md#template-messages) in the Messaging API reference.

### [#](#buttons-template) Buttons template

Buttons templates contain slots for an image, title, text and [action](../../../en/docs/messaging-api/actions.md) buttons. In addition to buttons, you can set an action also on image, title, or text area. An action is triggered when a user taps the entity set with an action. For more information, see [Buttons template](../../../en/reference/messaging-api.md#buttons) in the Messaging API reference.

![Buttons template message](/assets/img/buttons.222cad67.png)

### [#](#confirm-template) Confirm template

Confirm templates contain slots for text and two buttons. For more information, see [Confirm template](../../../en/reference/messaging-api.md#confirm) in the Messaging API reference.

![Confirm template message](/assets/img/confirm.c90e15b3.png)

### [#](#carousel-template) Carousel template

Carousel templates contain multiple columns that users can cycle through. In addition to buttons, you can set an [action](../../../en/docs/messaging-api/actions.md) in each column object.

An action is triggered when a user taps anywhere in the image, title, or text area of a column object. For more information, see [Carousel template](../../../en/reference/messaging-api.md#carousel) in the Messaging API reference.

![Carousel template message](/assets/img/carousel.d74a60b6.png)

### [#](#image-carousel-template) Image carousel template

Image carousel templates contain multiple images that users can cycle through. For more information, see [Image carousel template](../../../en/reference/messaging-api.md#image-carousel) in the Messaging API reference.

![Image carousel template message](/assets/img/image-carousel.b11fc562.png)

## [#](#flex-messages) Flex Message

Flex Messages are messages with a customizable layout. You can customize the layout within the boundary of the [CSS Flexible Box (CSS Flexbox) (opens new window)](https://www.w3.org/TR/css-flexbox-1/) specification. For more information, see [Send Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md) and [Flex Message](../../../en/reference/messaging-api.md#flex-message) in the Messaging API reference.

![Flex Message examples](/assets/img/bubbleSamples-Update1.96cf1f73.png)

## [#](#common-features) Common features

This feature is applicable on all message types.

### [#](#quick-reply) Quick reply

Quick reply buttons are available on all message types and displayed at the bottom of a chat. Users can tap one of the buttons to reply to your bot. For more information, see [Use quick replies](../../../en/docs/messaging-api/using-quick-reply.md), and [Quick reply](../../../en/reference/messaging-api.md#quick-reply) in the Messaging API reference.

![Quick reply sample](/assets/img/quickReplySample.caa3d11a.png)

## [#](#related-message-types-pages) Related pages

Learn more about the Messaging API:

- [Sending messages](../../../en/docs/messaging-api/sending-messages.md)
- [Message objects](../../../en/reference/messaging-api.md#message-objects)
- [Actions](../../../en/docs/messaging-api/actions.md)

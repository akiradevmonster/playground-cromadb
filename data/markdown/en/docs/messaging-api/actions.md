---
title: 'Actions | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/actions/'
---

## Table of Contents

[Postback action](#postback-action)

[Message action](#message-action)

[URI action](#uri-action)

[Datetime picker action](#datetime-picker-action)

[Camera action](#camera-action)

[Camera roll action](#camera-roll-action)

[Location action](#location-action)

[Rich menu switch action](#richmenu-switch-action)

[Clipboard action](#clipboard-action)

# [#](#page-title) Actions

You can set different types of actions to be triggered when a user taps a control in a message. Available actions depend on the message type. For more information, see [Message objects](../../../en/reference/messaging-api.md#message-objects) in the Messaging API reference.

Available actions are:

- [Postback action](#postback-action)
- [Message action](#message-action)
- [URI action](#uri-action)
- [Datetime picker action](#datetime-picker-action)
- [Camera action](#camera-action)
- [Camera roll action](#camera-roll-action)
- [Location action](#location-action)
- [Rich menu switch action](#richmenu-switch-action)
- [Clipboard action](#clipboard-action)

## [#](#postback-action) Postback action

The postback action sends your server a [postback event](../../../en/reference/messaging-api.md#postback-event) with the text that you specified in the action. You can set to have the text displayed as a message from the user.

You can also specify how to display such as rich menu based on user action. The following display methods can be specified:

- Close rich menu
- Open rich menu
- Open keyboard
- Open voice message input mode

Specifying how to display based on user action is available on LINE version `12.6.0` or later for iOS or Android. For more information, see [Postback action](../../../en/reference/messaging-api.md#postback-action) in the Messaging API reference.

## [#](#message-action) Message action

The message action returns you a text as a user's message. For more information, see [Message action](../../../en/reference/messaging-api.md#message-action) in the Messaging API reference.

## [#](#uri-action) URI action

The URI action opens a URL in LINE's in-app browser. You can also use the [LINE URL scheme](../../../en/docs/messaging-api/using-line-url-scheme.md) in the URI action to launch a call app with a given number or open the screen to share any LINE Official Account.

![URI action](/assets/img/quick-reply-uri-action-en.cda3f6e8.png)

This is a request body set with URI actions for the quick reply buttons shown in the example above. For more information, see [URI action](../../../en/reference/messaging-api.md#uri-action) in the Messaging API reference.

```
{
  "messages": [
    {
      "type": "text",
      "text": "Have you decided on your order?",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Menu",
              "uri": "https://example.com/menu"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Phone order",
              "uri": "tel:09001234567"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Recommend to friend",
              "uri": "https://line.me/R/nv/recommendOA/%40linedevelopers"
            }
          }
        ]
      }
    }
  ]
}
```

## [#](#datetime-picker-action) Datetime picker action

The datetime picker action prompts users to choose a date, time, or date and time from a picker. When the user selects a date and time, you'll get the date and time information in the [postback event](../../../en/reference/messaging-api.md#postback-event) via a webhook. For more information, see [Datetime picker action](../../../en/reference/messaging-api.md#datetime-picker-action) in the Messaging API reference.

![Datetime picker action](/assets/img/datetime-picker.6a8e512b.png)

## [#](#camera-action) Camera action

The camera action opens a camera screen in LINE. You can set this action only on quick reply buttons. For more information, see [Camera action](../../../en/reference/messaging-api.md#camera-action) in the Messaging API reference.

## [#](#camera-roll-action) Camera roll action

The camera roll action opens the camera roll screen in LINE. You can set this action only on quick reply buttons. For more information, see [Camera roll action](../../../en/reference/messaging-api.md#camera-roll-action) in the Messaging API reference.

## [#](#location-action) Location action

The location action opens the location screen in LINE. You can set this action only on quick reply buttons. For more information, see [Location action](../../../en/reference/messaging-api.md#location-action) in the Messaging API reference.

## [#](#richmenu-switch-action) Rich menu switch action

The rich menu switch action makes rich menus switchable. You can set this action only on rich menus. For more information, see [Rich menu switch action](../../../en/reference/messaging-api.md#richmenu-switch-action) in the Messaging API reference.

## [#](#clipboard-action) Clipboard action

The clipboard action copies text to the clipboard. When a user taps a control associated with this action, the text specified in the `clipboardText` property is copied to the device clipboard.

![clipbord-action-example-en](/assets/img/clipbord-action-example-en.ed4f255d.png)

This is a request body set with the clipboard action for the message shown in the example above. For more information, see [Clipboard action](../../../en/reference/messaging-api.md#clipboard-action) in the Messaging API reference.

```
{
  "messages":[
    {
      "type": "template",
      "altText": "This is your coupon code.",
      "template": {
        "type": "buttons",
        "thumbnailImageUrl": "{your coupon image}",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#FFFFFF",
        "title": "Your exclusive coupon!",
        "text": "Period: Feb 2024.\nCopy and use the code from the button.",
        "actions": [
          {
            "type": "clipboard",
            "label": "Copy",
            "clipboardText": "3B48740B"
          }
        ]
      }
    }
  ]
}
```

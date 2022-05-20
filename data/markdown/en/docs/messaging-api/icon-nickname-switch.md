---
title: 'Customize icon and display name | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/icon-nickname-switch/'
---

## Table of Contents

[Customize the icon and display name](#customise-icon-and-display-name)

[Example request](#example-request)

[Icon and display name customization scope](#icon-and-display-name-customization-scope)

[Chat rooms](#chat-room) [Message search result](#message-search-result) [Chat list and preview](#chat-list-and-preview) [Chat list search result](#chat-list-search-screen) [Friends list](#friend-list)

[Learn more](#related-icon-nickname-switch-pages)

# [#](#page-title) Customize icon and display name

You can customize the icon and display name of your LINE Official Account on messages you send with these APIs. There is no restriction on the type of [Message objects](../../../en/reference/messaging-api.md#message-objects).

- [Send push messages](../../../en/reference/messaging-api.md#send-push-message)
- [Send multicast messages](../../../en/reference/messaging-api.md#send-multicast-message)
- [Send narrowcast messages](../../../en/reference/messaging-api.md#send-narrowcast-message)
- [Send broadcast messages](../../../en/reference/messaging-api.md#send-broadcast-message)
- [Send reply messages](../../../en/reference/messaging-api.md#send-reply-message)

If you don't specify an icon or display name for your message, the default icon and your LINE Official Account name are displayed.

When customizing an icon and display name, we recommend that you first send a push message with customized icons and display names to your own LINE accounts to check the appearance of the message.

## [#](#customise-icon-and-display-name) Customize the icon and display name

See the difference between the default message and the message with an icon and display name specified. As you can see from below, the display name has `from 'account name'` attached. This attachment is to help users easily identify your LINE Official Account and not confuse you with someone else. The account name displayed at the top of the chat screen remains the same in all cases.

![icon-nickname-switch](/assets/img/icon-nickname-switch.7ad52e1a.jpg)

### [#](#example-request) Example request

Here is an example request to send a message with a customized icon and display name.

```
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
-d '{
    "to": "U1234....",
    "messages": [
        {
            "type": "text",
            "text": "Hello, I am Cony!!",
            "sender": {
                "name": "Cony",
                "iconUrl": "https://line.me/conyprof"
            }
        }
    ]
}'
```

## [#](#icon-and-display-name-customization-scope) Icon and display name customization scope

Learn where the icon and display name customization is applicable in this section.

### [#](#chat-room) Chat rooms

The icon and display name you specify for a message affect the icon and the display name of the message only.

- Message bubble: Customized icon and display name (`display name from 'account name'`) are displayed.
- Chat room name: The chat room name displayed at the top remains as the name of your LINE Official Account name.
- Profile page: The profile image and display name on the profile page of your LINE Official Account name aren't customizable.

### [#](#message-search-result) Message search result

A message with a customized icon and display name in a search result shows the customized icon and display name with `from 'account name'` attached.

### [#](#chat-list-and-preview) Chat list and preview

The icon and display name of your LINE Official Account on the chat list aren't customizable. But a preview for a non-text message displays the customized icon and display name. For example, if you send a photo with a customized display name, the preview message says "(Display name) sent a photo".

### [#](#chat-list-search-screen) Chat list search result

Your LINE Official Account on a chat search result shows the default icon and display name of your LINE Official Account.

### [#](#friend-list) Friends list

Your LINE Official Account on a friends list shows the default icon and display name of your LINE Official Account.

## [#](#related-icon-nickname-switch-pages) Learn more

For more information about the specification of customizing the icon and display name, see [Change icon and display name](../../../en/reference/messaging-api.md#icon-nickname-switch) in the Messaging API reference.

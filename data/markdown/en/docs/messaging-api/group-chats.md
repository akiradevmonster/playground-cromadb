---
title: 'Group chats and multi-person chats | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/group-chats/'
---

## Table of Contents

[Types of chats with multiple users](#group-chat-types)

[Group chats](#group) [Multi-person chats](#room)

[Add LINE Official Account in group & multi-person chats](#add-bot-group-room)

[Receive webhook events](#receiving-webhook-events)

[Tip for using message events](#tip-for-using-message-events)

[Send a request to an endpoint](#sending-request-to-endpoint)

[Tip for sending messages](#tip-for-sending-messages)

# [#](#page-title) Group chats and multi-person chats

LINE Official Accounts can interact with users in group chats or multi-person chats using the Messaging API. Learn how you can use your LINE Official Account in a group chats and multi-person chats.

## [#](#group-chat-types) Types of chats with multiple users

LINE has two types of chats with multiple users: **group chats** and **multi-person chats**. The users in a group chat or multi-person chat are called **members**.

Multi-person chat is merged into group chat

From LINE version 10.17.0, multi-person chat was merged into group chat. You can continue to use the multi-person chats that were opened before. But if you create a new chat with multiple friends on LINE version 10.17.0 or later, the chat becomes a group chat. See [Create and manage groups (opens new window)](https://guide.line.me/ja/friends-and-groups/create-groups.html) (only available in Japanese) in the LINE user's guide.

### [#](#group) Group chats

Group chats are the chats designed for continuous use by multiple participants. A [group ID](../../../en/glossary.md#group-id) is generated to identify a group chat. LINE users can create group chats with a desired name. Group chats support features such as albums and notes.

Tip

When a user invites a third user to a one-to-one chat, a group chat is created. Users can set whether or not to have an approval flow for users invited to the group chat. For more information on how to set approval flow up, see [Create and manage groups (opens new window)](https://guide.line.me/ja/friends-and-groups/create-groups.html) (only available in Japanese) in the LINE user's guide.

### [#](#room) Multi-person chats

Multi-person chats are the chats designed for temporary use by multiple people. A [room ID](../../../en/glossary.md#room-id) is generated to identify a multi-person chat. The name of the multi-person chat is automatically set to the names of the chat members. Multi-person chats don't support features such as albums and notes.

From LINE version 10.17.0, multi-person chat was merged into group chat. You can continue to use the multi-person chats that were opened before. But if you create a new chat with multiple friends on LINE version 10.17.0 or later, the chat becomes a group chat.

## [#](#add-bot-group-room) Add LINE Official Account in group & multi-person chats

You can invite a LINE Official Account in a group chat or multi-person chat. To be invited, go to [LINE Developers Console](../../../console.md) > **Messaging API** tab of your channel and enable **Allow bot to join group chats**. This setting is disabled by default. At any time, only one LINE Official Account can be in a group chat or multi-person chat.

## [#](#receiving-webhook-events) Receive webhook events

You'll receive webhook events for group and multi-person chats, like you do for one-on-one chats. For more information, see [Webhook events for chats](../../../en/docs/messaging-api/receiving-messages.md#webhook-event-in-one-on-one-talk-or-group-chat) and [Webhook Event Objects](../../../en/reference/messaging-api.md#webhook-event-objects) in the Messaging API reference.

### [#](#tip-for-using-message-events) Tip for using message events

When a user send a message in a group or multi-person chat that your LINE Official Account is added, the LINE Platform sends the bot server a message event, like in one-on-one chats.

The [message event](../../../en/reference/messaging-api.md#message-event) has a property `source` that specifies the ID of the group chat (`groupId`) or of the multi-person chat (`roomId`).

```
"source": {
    "type": "group",
    "groupId": "Ca56f94637c...",
    "userId": "U4af4980629..."
}
```

For more information on group IDs and room IDs, see [What are the user ID, group ID, and room ID values?](../../../en/faq.md#what-are-userid-groupid-and-roomid).

## [#](#sending-request-to-endpoint) Send a request to an endpoint

The following operations are specific to group chats and multi-person chats. For more information, see [Messaging API reference](../../../en/reference/messaging-api.md).

- **Group chats**
  - [Get group chat summary](../../../en/reference/messaging-api.md#get-group-summary)
  - [Get number of users in a group chat](../../../en/reference/messaging-api.md#get-members-group-count)
  - [Get group chat member user IDs](../../../en/reference/messaging-api.md#get-group-member-user-ids)
  - [Get group chat member profile](../../../en/reference/messaging-api.md#get-group-member-profile)
  - [Leave group chat](../../../en/reference/messaging-api.md#leave-group)
- **Multi-person chats**
  - [Get number of users in a multi-person chat](../../../en/reference/messaging-api.md#get-members-room-count)
  - [Get multi-person chat member user IDs](../../../en/reference/messaging-api.md#get-room-member-user-ids)
  - [Get multi-person chat member profile](../../../en/reference/messaging-api.md#get-room-member-profile)
  - [Leave multi-person chat](../../../en/reference/messaging-api.md#leave-room)

### [#](#tip-for-sending-messages) Tip for sending messages

You can send [reply messages](../../../en/reference/messaging-api.md#send-reply-message) and [push messages](../../../en/reference/messaging-api.md#send-push-message) in group chats and multi-person chats, like in one-on-one chats.

When you send a push message, specify the recipient with the group ID or room ID in the `to` property of the request body. You can get the recipient ID in [webhook event objects](../../../en/reference/messaging-api.md#webhook-event-objects). The messages you send in group chats and multi-person chats are displayed to all members of the chat.

Tip

You can't [send multicast messages](../../../en/reference/messaging-api.md#send-multicast-message) to multiple users in group chats and multi-person chats.

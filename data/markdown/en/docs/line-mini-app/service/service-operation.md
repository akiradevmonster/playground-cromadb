---
title: 'Running your service | LINE Developers'
description: 'We strongly recommend that Service Designers, Operators, and Marketers read this guideline and prepare acccordingly.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/service/service-operation/'
---

## Table of Contents

[Sharing the LINE MINI App Link](#sharing-line-mini-app-link)

[Conditions for service messages](#conditions-for-service-messages)

[Notifications allowed by service messages](#allowed-by-service-messages) [Notifications disallowed by service messages](#disallowed-by-service-messages) [Message Count Limit](#message-count-limit) [Service Message Templates](#service-message-templates)

# [#](#page-title) Running your service

We strongly recommend that Service Designers, Operators, and Marketers read this guideline and prepare acccordingly.

- [Sharing the LINE MINI App Link](#sharing-line-mini-app-link)
- [Conditions for service messages](#conditions-for-service-messages)
  - [Notifications allowed by service messages](#allowed-by-service-messages)
  - [Notifications disallowed by service messages](#disallowed-by-service-messages)
  - [Message Count Limit](#message-count-limit)
  - [Service Message Templates](#service-message-templates)

## [#](#sharing-line-mini-app-link) Sharing the LINE MINI App Link

When sharing your LINE MINI App or its page, you need to [create a permanent link](../../../../en/docs/line-mini-app/develop/permanent-links.md). Use a permanent link, especially when considering sharing your LINE MINI App in the following ways:

- When sharing the link outside of LINE, such as via web pages, emails, and social media.
- [When sharing via rich messages or rich menus on the LINE Official Account](../../../../en/docs/line-mini-app/service/line-mini-app-oa.md)
- [When implementing a custom action button](../../../../en/docs/line-mini-app/develop/share-messages.md)
- When using a [service message](../../../../en/docs/line-mini-app/develop/service-messages.md) to share.
- When using LINE MINI Apps [POP template (opens new window)](https://creativelab-tips.line.me/ja/line-miniapp/creative/) (only available in Japanese) with a QR code on it

## [#](#conditions-for-service-messages) Conditions for service messages

You are allowed to send [service messages](../../../../en/docs/line-mini-app/develop/service-messages.md) only as a confirmation or response to a user action on LINE MINI App.

### [#](#allowed-by-service-messages) Notifications allowed by service messages

Service messages allow the following notifications:

| Type                             | Use Case                                                                                                                                     |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Action Confirmation Notification | Confirmation notification of reservations at restaurants and accommodationsConfirmation notification of purchased tickets and merchandise    |
| Action Result Notification       | Check-in completion notificationNotification of shipment completion of an order                                                              |
| Reminder Notification            | Reminder notification of reservations at restaurants and accommodationsReminder for a play, movie, or concert for which ticket was purchased |

### [#](#disallowed-by-service-messages) Notifications disallowed by service messages

Service messages disallow the following notifications:

- Notifications that are not confirmations or responses to user actions on the LINE MINI Apps, such as purchase completion notifications and reminder notifications when tickets are purchased from ticket vending machines.
- Advertisements and event notifications including information on discounts, shopping rewards, new products, discount coupons or promotions.

If a service message is sent with unacceptable content, the use of the service message API will be prohibited for a period of time. Repeated violations of the terms and conditions may cause your LINE MINI App to be removed from LINE.

### [#](#message-count-limit) Message Count Limit

- You can send up to 5 messages per user action. This limit applies to the respective use cases of action confirmation, action result, and reminder notifications.
- The message count limit is subject to change depending on the use scenario. If the limit is changed, LY Corporation will notify you at the time of [review](../../../../en/docs/line-mini-app/submit/submission-guide.md).

### [#](#service-message-templates) Service Message Templates

- [Add a service message template](../../../../en/docs/line-mini-app/develop/service-messages.md#service-message-templates) to your LINE MINI App channel.
- You can configure up to 20 templates for each LINE MINI App channel.

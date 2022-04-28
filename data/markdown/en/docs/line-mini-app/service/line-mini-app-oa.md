---
title: 'Using LINE Official Account  | LINE Developers'
description: 'Use the LINE Official Account to promote your LINE MINI App.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/service/line-mini-app-oa/'
---

## Table of Contents

[Sending messages](#sending-messages)

[Add a LINE MINI App shortcut to the rich menu](#add-a-line-mini-app-shortcut-to-the-rich-menu)

[Add the LINE Official Account as a friend when you first open the LINE MINI App (add friend option)](#link-a-line-official-account-with-your-channel)

# [#](#page-title) Using LINE Official Account

Here is how you can use the LINE Official Account to promote your LINE MINI App. LINE Official Account can be created by accessing the URL per country below. Also on the [LINE Official Account Manager (opens new window)](https://manager.line.biz/), you can set rich messages and rich menus for your LINE Official Account.

- Japan: [https://www.lycbiz.com/jp/ (opens new window)](https://www.lycbiz.com/jp/)
- Taiwan: [https://tw.linebiz.com/ (opens new window)](https://tw.linebiz.com/)
- Thailand: [https://lineforbusiness.com/th/ (opens new window)](https://lineforbusiness.com/th/)

![Promote your LINE MINI App on LINE Official Account](/assets/img/mini_with_oa.76d04f7a.png)

## [#](#sending-messages) Sending messages

Send rich messages to your users to promote your LINE MINI App or to notify them of new features. Remind users of your LINE MINI App.

Permanent links must be used for rich messages. For more information, see [Creating a permanent link](../../../../en/docs/line-mini-app/develop/permanent-links.md).

## [#](#add-a-line-mini-app-shortcut-to-the-rich-menu) Add a LINE MINI App shortcut to the rich menu

Add a shortcut for LINE MINI App to the rich menu of the LINE Official Account. This can shorten the amount of time users take to reach your LINE MINI App.

Permanent links must be used for rich messages. For more information, see [Creating a permanent link](../../../../en/docs/line-mini-app/develop/permanent-links.md).

## [#](#link-a-line-official-account-with-your-channel) Add the LINE Official Account as a friend when you first open the LINE MINI App (add friend option)

You can configure the [Channel consent screen](../../../../en/docs/line-mini-app/discover/builtin-features.md#consent-screen) to display the option of adding your LINE Official Account as a friend when a user opens the LINE MINI App for the first time. This is called the add friend option. The add friend option is configured on the LINE Developers Console.

1. Click the **Basic settings** tab of your LINE MINI App channel on the [LINE Developers Console](../../../../console.md)
2. On **Linked LINE Official Account**, click **Edit**.
3. Select the LINE Official Account that will be linked to your LINE MINI App channel.
4. Click the **Web app settings** tab of your LINE MINI App channel.
5. On **Add friend option**, click **Edit**.
6. Select **On (normal)**.

> [!warning]
> Note
>
> The following requirements must be met in order to linking your LINE Official Account with your LINE MINI App channel.
>
> - The Messaging API channel associated with the LINE Official Account must belong to the same provider as the LINE MINI App channel.
>   - The provider of the Messaging API channel associated with a LINE Official Account cannot be changed later. Therefore, note that when configuring the provider of the Messaging API channel. For more information about the linkage between the Messaging API and the provider, see [Messaging API (opens new window)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_messaging_api/) (only available in Japanese).
> - The account to be operated must have an admin role for both LINE MINI App channel and LINE Official Account.
>   - LINE MINI App admin roles can be found on the [LINE Developers Console](../../../../console.md).
>   - LINE Official Account admin roles can be found on the [LINE Official Account Manager (opens new window)](https://manager.line.biz).

Certified providers can turn on the option of adding as friend by default

Certified providers can turn on the option of adding their LINE Official Accounts as friends by default. This means that unless the user unchecks the box, the LINE Official Account linked to the channel will be added as a friend when the user authorizes it on the LINE MINI App consent screen.

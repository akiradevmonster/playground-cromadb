---
title: 'Built-in features | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/discover/builtin-features/'
---

## Table of Contents

[Action button](#action-button)

[Channel consent screen](#consent-screen)

# [#](#page-title) Built-in features

LINE MINI App comes with the following built-in features:

- [Action button](#action-button)
- [Channel consent screen](#consent-screen)

## [#](#action-button) Action button

By default, an action button is displayed on the common [header](../../../../en/docs/line-mini-app/discover/ui-components.md#header) provided on every page of your LINE MINI App.

With this button, users can share the LINE MINI App with their friends. When users tap the action button, the following options will be displayed in the user's LINE setting language:

![mini_share_builtin](/assets/img/mini_share_builtin.3b07b1a0.png)

| Item                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Share                           | Share the LIFF URL or permanent link of the current page as a LINE message. If the current page doesn't start with the endpoint URL of the LINE MINI App, the LIFF URL of the LINE MINI App will be shared instead. The share message includes the following elements:URL: The permanent link of the current page.Title: The LIFF app name entered in the LIFF app name on the Web app settings tab of the LINE Developers Console.Description: Automatically set textImage: Image registered as Channel icon on the Channel Basic settings tab on the LINE Developers Console |
| Add to Home Screen              | The Add Shortcut screen to the current page will be displayed. If the current page doesn't start with the endpoint URL of the LINE MINI App, an error will occur. Available for verified MINI Apps in LINE version 14.3.0 or later. For more information, see Add a shortcut to your LINE MINI App to the home screen of the user's device.                                                                                                                                                                                                                                    |
| Minimize browser                | Minimize LIFF browser. This feature can only be used for verified MINI Apps. For more information, see Minimizing LIFF browser in the LIFF documentation.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| More from this service provider | Display the Provider page. This feature can only be used for verified MINI Apps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Refresh                         | Refresh the current page on the screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Permission setting              | Opens the Permission Settings screen. The Permission Settings screen allows the user to view and change the camera and microphone permissions of the currently open LINE MINI App. Available in LINE versions 14.6.0 or later.If a user changes the permissions, the changes may not be reflected unless the page is reloaded on the LINE MINI App.                                                                                                                                                                                                                            |

> [!warning]
> Note
>
> To share the current page, users need to tap the action button on a LINE version that officially supports LINE MINI App. In case of LINE versions lower than the [supported versions](../../../../en/docs/line-mini-app/discover/specifications.md#supported-platforms-and-versions), the action button in the header will always lead to the LINE MINI App's top page, regardless of the individual page being shared.

Tip

- You can implement a [custom action button](../../../../en/docs/line-mini-app/discover/custom-features.md#custom-action-button) and place it anywhere you want in the format of your choice.
- New features, such as the ability to move back and forth between multiple chat rooms without closing the LINE MINI App, are underway.
- You can't hide the action button on the LINE MINI App. Also, LIFF apps added to the LINE MINI App channel can't be set to **Module mode**.

## [#](#consent-screen) Channel consent screen

This Channel consent screen appears when a user uses your LINE MINI App for the first time. The screen prompts the user to grant permissions to your service.

If the LINE MINI App is a verified MINI App, a verified badge will be displayed next to the LINE MINI App name. If the LINE MINI App provider isn't a certified provider, a note saying "LY Corporation hasn't verified this service provider." will be displayed.

![mini-permission-request-en](/assets/img/mini-permission-request-en.11d3bc4b.png)

All LINE MINI Apps request the following permissions by default.

- Permission to acquire the user's LINE profile information
- Permission to send messages to chats

> [!warning]
> Note
>
> The Channel consent screen for your LINE MINI App prompts users to grant only the permissions that have been approved by LY Corporation. You can specify the items that require permission from the user in the settings of the LINE MINI App channel on the [LINE Developers Console](../../../../console.md).

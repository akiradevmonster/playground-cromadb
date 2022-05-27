---
title: 'Rich menus overview | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/rich-menus-overview/'
---

## Table of Contents

[What is rich menu](#using-rich-menus-introduction)

[Rich menu structure](#rich-menu-structure)

[Tools for setting rich menus](#choosing-tool-for-creating-rich-menus)

[Set rich menus with LINE Official Account Manager](#creating-a-rich-menu-with-the-line-manager) [Set rich menus with the Messaging API](#creating-a-rich-menu-using-the-messaging-api)

[Scope of rich menus](#rich-menu-scope)

[Display priority of rich menus](#rich-menu-display) [When rich menu setting changes take effect](#when-setting-change-takes-effect)

[Rich menu API reference](#related-references)

# [#](#page-title) Rich menus overview

Learn about the rich menus you can display in chat rooms your LINE Official Account is participating in:

## [#](#using-rich-menus-introduction) What is rich menu

Rich menus are the menus displayed at the bottom of a chat room with a LINE Official Account. Set rich menus with links to external sites, reservation pages, and LINE Official Account features to make your user experience more "rich". Use [tools to create rich menus](#choosing-tool-for-creating-rich-menus) based on the [rich menu structure](#rich-menu-structure).

> [!warning]
> Rich menus are unavailable on LINE for PC
>
> Rich menus aren't displayed on LINE for PC (macOS, Windows).

## [#](#rich-menu-structure) Rich menu structure

Rich menus are composed of a menu image, tappable areas, and a chat bar.

![bot-demo-rich-menu-image](/assets/img/bot-demo-rich-menu-image.267d0e8c.png)

1. Rich menu image: A single JPEG or PNG image file that has menu items. For more information about image requirements, see [Requirements for rich menu image](../../../en/reference/messaging-api.md#upload-rich-menu-image-requirements) in the Messaging API reference.
2. Tappable areas: Areas you divide as menu items. Assign an [action](../../../en/reference/messaging-api.md#action-objects) on each menu item, such as getting a postback event and opening a URL.
3. Chat bar: A menu that opens and closes the rich menu. You can customize the text of this menu.

## [#](#choosing-tool-for-creating-rich-menus) Tools for setting rich menus

To create rich menus, use [LINE Official Account Manager](#creating-a-rich-menu-with-the-line-manager) or the [Messaging API](#creating-a-rich-menu-using-the-messaging-api). Find which tool best suits your needs.

> [!warning]
> Only one tool for one rich menu
>
> You can't use both tools to retrieve or edit the same instance of rich menu. A rich menu created with the LINE Official Account Manager is retrievable and editable only through the LINE Official Account Manager. Likewise, you can't use the LINE Official Account Manager on the rich menu created with the Messaging API.

| Tool                                             | Benefits                                                                                                                                                                                                   |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINE Official Account Manager (opens new window) | Fast development timeEasy-to-use graphical interfaceDisplay period is availableFor more information, see How to use the rich menus (opens new window) (only available in Japanese) in LINE for Business.   |
| Messaging API                                    | Advanced customizationYou can set postback action and datetime picker action on a rich menu.You can switch between tabs on rich menus.If you want to try out rich menu features, see Play with rich menus. |

### [#](#creating-a-rich-menu-with-the-line-manager) Set rich menus with LINE Official Account Manager

You can create and set a rich menu as default from the LINE Official Account Manager. Users see the default rich menu unless a different rich menu is set with a higher [display priority](#rich-menu-display).

Using the GUI of the LINE Official Account Manager, you can set tappable areas of a rich menu based on predefined templates. For more information, see the [LINE Official Account Manager manual (opens new window)](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-menus/) (only available in Japanese).

### [#](#creating-a-rich-menu-using-the-messaging-api) Set rich menus with the Messaging API

To set a rich menu with the Messaging API, the required endpoints must be called in sequence. The basic steps are as follows:

1. Prepare a rich menu image.
2. Use the [Create rich menu](../../../en/reference/messaging-api.md#create-rich-menu) endpoint.
3. Use the [Upload rich menu image](../../../en/reference/messaging-api.md#upload-rich-menu-image) endpoint.
4. Use the [Set default rich menu](../../../en/reference/messaging-api.md#set-default-rich-menu) endpoint.

For more information on how to set a rich menu with the Messaging API, see [Use rich menus](../../../en/docs/messaging-api/using-rich-menus.md).

## [#](#rich-menu-scope) Scope of rich menus

Rich menus have two scopes, which you can set using different tools.

| Scope                                                                              | Tool                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------ |
| All users who have added your LINE Official Account as friends (Default rich menu) | LINE Official Account ManagerMessaging API |
| Per user (Per-user rich menu)                                                      | Messaging API                              |

Depending on the scope and the setting tool, the display priority of the rich menu and the timing of when the change takes effect on the user's chat screen will vary.

- [Display priority of rich menus](#rich-menu-display)
- [When rich menu setting changes take effect](#when-setting-change-takes-effect)

### [#](#rich-menu-display) Display priority of rich menus

Three types of rich menus are available, different by how you set them and who they target. The display priority of the types are the order they are listed, from the highest to the lowest:

1. Per-user rich menu set with the Messaging API
2. Default rich menu set with the Messaging API
3. Default rich menu set with the [LINE Official Account Manager (opens new window)](https://manager.line.biz)

### [#](#when-setting-change-takes-effect) When rich menu setting changes take effect

When you change the settings of a rich menu, the change takes place at different timings, depending on the scope and the setting tool of the rich menu.

| Scope and setting tool                                       | When change takes effect                                                                                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Per-user rich menu set with the Messaging API                | Immediately. But if you delete the rich menu without unlinking it from the user, the deletion takes effect when the user re-opens the chat. |
| Default rich menu set with the Messaging API                 | When the user re-opens the chat. It may take up to a minute until the change takes effect.                                                  |
| Default rich menu set with the LINE Official Account Manager | When the user re-opens the chat                                                                                                             |

## [#](#related-references) Rich menu API reference

- [Rich menu](../../../en/reference/messaging-api.md#rich-menu)
- [Per-user rich menu](../../../en/reference/messaging-api.md#per-user-rich-menu)
- [Rich menu alias](../../../en/reference/messaging-api.md#rich-menu-alias)

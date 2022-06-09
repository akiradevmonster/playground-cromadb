---
title: 'Use per-user rich menus | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/use-per-user-rich-menus/'
---

## Table of Contents

[What is per-user rich menu](#about-per-user-rich-menu)

[Set a per-user rich menu](#set-per-user-rich-menu)

[1\. Create a rich menu and attach an image](#create-a-rich-menu) [2\. Prepare a user ID](#prepare-user-id) [3\. Link the rich menu to the user](#link-the-rich-menu-to-user) [4\. Unlink the rich menu from the user](#unlink-the-rich-menu-from-user)

[Allow users to switch between rich menus](#swich-rich-menus)

# [#](#page-title) Use per-user rich menus

This page explains how to set up a "per-user rich menu".

- [What is per-user rich menu](#about-per-user-rich-menu)
- [Set a per-user rich menu](#set-per-user-rich-menu)
  - [1\. Create a rich menu and attach an image](#create-a-rich-menu)
  - [2\. Prepare a user ID](#prepare-user-id)
  - [3\. Link the rich menu to the user](#link-the-rich-menu-to-user)
  - [4\. Unlink the rich menu from the user](#unlink-the-rich-menu-from-user)
- [Allow users to switch between rich menus](#swich-rich-menus)

## [#](#about-per-user-rich-menu) What is per-user rich menu

You can set a rich menu on a per-user basis using the Messaging API. Therefore, it's possible to enhance the user experience by preparing multiple rich menus and setting a different rich menu for each user.

The per-user rich menu has the following characteristics:

1. Display priority is higher than the default rich menu
    - The per-user rich menu has a higher display priority than the default rich menu. Therefore, if you've set a default rich menu for a LINE Official Account and you set a per-user rich menu for a user, the per-user rich menu will take precedence over the default rich menu. For more information, see [Display priority of rich menus](../../../en/docs/messaging-api/rich-menus-overview.md#rich-menu-display).
2. Setting changes take effect immediately
    - The per-user rich menu setting takes effect immediately and changes the display without the user having to re-enter the chat screen. For more information, see [When rich menu setting changes take effect](../../../en/docs/messaging-api/rich-menus-overview.md#when-setting-change-takes-effect).

## [#](#set-per-user-rich-menu) Set a per-user rich menu

The basic setup for the per-user rich menu is as follows:

1. [Create a rich menu and attach an image](#create-a-rich-menu)
2. [Prepare a user ID](#prepare-user-id)
3. [Link the rich menu to the user](#link-the-rich-menu-to-user)
4. [Unlink the rich menu from the user](#unlink-the-rich-menu-from-user) to stop displaying the per-user rich menu (optional)

### [#](#create-a-rich-menu) 1. Create a rich menu and attach an image

First, create a rich menu. For more information on how to create a rich menu, see [Use rich menus](../../../en/docs/messaging-api/using-rich-menus.md).

Here we use the following template image (`richmenu-template-guide-07.png`) for the rich menu. Save it on any directory.

![The template image for rich menus used in this guide](/assets/img/richmenu-template-guide-07.9ef1ba08.png)

Run this command in your terminal, to [create a rich menu](../../../en/reference/messaging-api.md#create-rich-menu):

```
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": true,
    "name": "Test the per-user rich menu",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 2500,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "label": "Tap area A",
                "uri": "https://developers.line.biz/en/news/"
            }
        }
    ]
}'
```

Next, run this command in your terminal to [upload and attach an image to the rich menu](../../../en/reference/messaging-api.md#upload-rich-menu-image).

```
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/png" \
-T richmenu-template-guide-07.png
```

### [#](#prepare-user-id) 2. Prepare a user ID

Prepare the user ID of a user who will display the rich menu. Here, prepare your own user ID to actually check the display.

Example of user ID: `U8189cf6745fc0d808977bdb0b9f22995`

For more information on getting user IDs, see [Developer gets their own user ID](../../../en/docs/messaging-api/getting-user-ids.md#get-own-user-id) on [Get user IDs](../../../en/docs/messaging-api/getting-user-ids.md).

### [#](#link-the-rich-menu-to-user) 3. Link the rich menu to the user

Once the rich menu and your user ID are ready, [link the rich menu to the user](../../../en/reference/messaging-api.md#link-rich-menu-to-user). Run this command in your terminal.

```
curl -v -X POST https://api.line.me/v2/bot/user/{userId}/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

#### [#](#check-the-rich-menu) 3-1. Check the rich menu display

Check that the per-user rich menu set in step 3 is displayed. Open the chat screen of the LINE Official Account for which you've set the rich menu.

![per-user-rich-menu-example](/assets/img/per-user-rich-menu-example.df996080.png)

### [#](#unlink-the-rich-menu-from-user) 4. Unlink the rich menu from the user

Finally, [unlink the rich menu from the user](../../../en/reference/messaging-api.md#unlink-rich-menu-from-user) and stop displaying the rich menu. Run this command in your terminal while displaying the chat screen opened in step 4.

```
curl -v -X DELETE https://api.line.me/v2/bot/user/{userId}/richmenu \
-H 'Authorization: Bearer {channel access token}'
```

The per-user rich menu display ends when execution is complete because the per-user rich menu setting takes effect immediately.

Note that if the default rich menu is set, the default rich menu will be displayed instead.

## [#](#swich-rich-menus) Allow users to switch between rich menus

You can provide users with a rich menu with tab switching using per-user rich menus. To switch between rich menus with ease, like switching between tabs, use [rich menu aliases](../../../en/glossary.md#rich-menu-alias) and [rich menu switch action](../../../en/reference/messaging-api.md#richmenu-switch-action).

![switching-richmenu-ja](/assets/img/switching-richmenu-ja.ca50ffef.png)

For more information, see [Switch between tabs on rich menus](../../../en/docs/messaging-api/switch-rich-menus.md).

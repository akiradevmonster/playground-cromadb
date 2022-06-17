---
title: 'Use LINE features with the LINE URL scheme | LINE Developers'
description: 'The LINE URL scheme enables deep linking to redirect users to specific content or to perform specific actions in LINE. The URL schemes are supported on the iOS and Android versions of LINE. You can use URL schemes in web or mobile apps and in bot apps.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/using-line-url-scheme/'
---

## Table of Contents

[What happens when a LINE URL scheme is clicked](#what-happens-when-line-url-is-clicked)

[Supported platforms](#supported-platforms)

[Available LINE URL schemes](#available-line-url-schemes)

[Opening the camera and camera roll](#opening-the-camera-and-camera-roll) [Sending location information](#sending-the-location-screen) [Sharing a LINE Official Account](#sharing-line-official-account) [Opening the LINE Official Account's LINE VOOM and profile](#opening-line-voom-and-profile) [Opening a chat screen with a LINE Official Account](#opening-chat-screen) [Sending text messages](#sending-text-messages) [Opening profile information](#opening-profile-information) [Opening common LINE screens](#opening-common-line-app-screens) [Opening LINE settings](#opening-line-app-settings-screens) [Opening Sticker Shop](#opening-the-sticker-shop) [Opening Theme Shop](#opening-the-theme-shop) [Opening a LIFF app](#opening-a-liff-app) [Opening a URL in an external browser](#opening-url-in-external-browser)

# [#](#page-title) Use LINE features with the LINE URL scheme

You can open Sticker Shop, LIFF app or camera with the LINE URL scheme. The LINE URL scheme works with LINE Official Accounts too. You can let users see LINE contents from [rich menus](../../../en/docs/messaging-api/using-rich-menus.md) with the [action](../../../en/reference/messaging-api.md#uri-action) to open the LINE URL scheme.

Available LINE URL schemes are:

- `https://line.me/R/`
- `https://liff.line.me/`
- `line://` (Deprecated)

> [!danger]
> "line://" is deprecated
>
> The scheme `line://` is deprecated to prevent takeover attacks that launch a non-LINE app when the URL is clicked, against LY Corporation's or the user's intention. This attack can take place under certain conditions.
>
> No exact date is set for the URL scheme `line://` to become obsolete.

> [!warning]
> LY Corporation doesn't provide a URL scheme for launching native apps other than LINE
>
> LY Corporation offers no URL scheme to launch native apps other than LINE. However, if a native app from another company has a URL scheme for launching the native app, you can use the URL scheme in the URI action object for [rich menus](../../../en/docs/messaging-api/using-rich-menus.md) or [Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md).

## [#](#what-happens-when-line-url-is-clicked) What happens when a LINE URL scheme is clicked

When a user clicks a URL using the LINE URL scheme on a device with LINE installed, LINE is automatically launched showing the content specified by the URL. If LINE isn't installed, what happens differ by the scheme:

| LINE URL scheme      | What happens when there is no LINE installed                     |
| -------------------- | ---------------------------------------------------------------- |
| <https://line.me/R/>   | A web browser is launched and prompts the user to download LINE. |
| line:// (Deprecated) | Nothing happens or the user is redirected to an error page.      |

## [#](#supported-platforms) Supported platforms

The LINE URL scheme is supported in LINE for iOS and LINE for Android.

> [!warning]
> Note
>
> The LINE URL scheme isn't supported in LINE for PC (macOS, Windows).

## [#](#available-line-url-schemes) Available LINE URL schemes

Things you can do with LINE URL schemes are as follows. The LINE URL schemes that are supported only in certain platforms are specified so in each section:

- [Opening the camera and camera roll](#opening-the-camera-and-camera-roll)
- [Sending location information](#sending-the-location-screen)
- [Sharing a LINE Official Account](#sharing-line-official-account)
- [Opening the LINE Official Account's LINE VOOM and profile](#opening-line-voom-and-profile)
- [Opening a chat screen with a LINE Official Account](#opening-chat-screen)
- [Sending text messages](#sending-text-messages)
- [Opening profile information](#opening-profile-information)
- [Opening common LINE screens](#opening-common-line-app-screens)
- [Opening LINE settings](#opening-line-app-settings-screens)
- [Opening Sticker Shop](#opening-the-sticker-shop)
- [Opening Theme Shop](#opening-the-theme-shop)
- [Opening a LIFF app](#opening-a-liff-app)
- [Opening a URL in an external browser](#opening-url-in-external-browser)

### [#](#opening-the-camera-and-camera-roll) Opening the camera and camera roll

With the LINE URL scheme, you can let users open the camera or the camera roll. Camera roll is where the users can select images to share in a chat.

> [!warning]
> Restriction on opening the camera or the camera roll
>
> You can open the camera or camera roll with the URL scheme only from LINE chats, including LINE OpenChat. These URL schemes aren't supported in LINE features other than chatting, LIFF apps or apps other than LINE.

![camera-screen](/assets/img/camera-screen.f1bbfb47.png)

![camera-roll](/assets/img/camera-roll.b648cfe1.png)

| LINE URL scheme                        | Description                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <https://line.me/R/nv/camera/>           | Opens the camera. For smartphones that have multiple cameras, such as front (in-camera) and rear (out-camera), you can't specify which camera to open. |
| <https://line.me/R/nv/cameraRoll/single> | Opens the camera roll. Users can select an image to share in a chat.                                                                                   |
| <https://line.me/R/nv/cameraRoll/multi>  | Opens the camera roll. Users can select images to share in a chat.                                                                                     |

### [#](#sending-the-location-screen) Sending location information

With the LINE URL scheme, you can open the location information screen and let users send their location information to your LINE Official Account.

> [!warning]
> Restriction on opening the location information screen
>
> You can let users view location information with this URL scheme only in one-on-one chats between the user and your LINE Official Account. This URL scheme isn't supported in other chat types, LIFF apps or apps other than LINE.

![location](/assets/img/location.d1dc30a9.png)

| LINE URL scheme                | Description                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| <https://line.me/R/nv/location/> | Opens the location screen. Users can drop a pin on the map to select the location to share. |

### [#](#sharing-line-official-account) Sharing a LINE Official Account

With the LINE URL scheme, you can recommend and encourage users and their friends to add your LINE Official Account.

![bot-add-friend-en](/assets/img/bot-add-friend-en.6b1a4bc3.png)

| LINE URL scheme                                            | Description                                                                                                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <https://line.me/R/ti/p/{Percent-encoded> LINE ID}           | Opens the LINE Official Account's profile page. If the user is a friend with your LINE Official Account, a one-on-one chat is displayed instead. |
| <https://line.me/R/nv/recommendOA/{Percent-encoded> LINE ID} | Opens the "Share with" screen. Users can select friends, group chats, or multi-person chats to share your LINE Official Account with.            |

> [!warning]
> "Percent-encoded LINE ID" must be percent encoded
>
> Make sure `{Percent-encoded LINE ID}` is [percent encoded (opens new window)](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) in UTF-8. For example, if the LINE ID is `@linedevelopers` use `https://line.me/R/ti/p/%40linedevelopers` and `https://line.me/R/nv/recommendOA/%40linedevelopers`. If you replaced with the LINE ID that isn't percent encoded, it will also work, but is deprecated.
>
> However, if you percent encode the LINE ID in the URL scheme that opens the "Share with" screen (`https://line.me/R/nv/recommendOA/%40linedevelopers`), it won't work on LINE versions earlier than 13.8.0 for Android.
>
> You can specify either [a Basic ID or a Premium ID (opens new window)](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja) (only available in Japanese) as the LINE ID for your LINE Official Account.

Verify the LINE ID of the LINE Official Account

Find the LINE ID of your LINE Official Account in [LINE Official Account Manager (opens new window)](https://manager.line.biz/). For more information, see [Share the LINE ID of your LINE Official Account](../../../en/docs/messaging-api/sharing-bot.md#share-the-line-id-of-your-line-official-account).

LINE URL schemes on a PC browser

When users open `https://line.me/R/ti/p/{Percent-encoded LINE ID}` from a PC, they see the public URL of the LINE Official Account profile (e.g. [LINE FRIENDS profile page (opens new window)](https://line.me/R/ti/p/@linecharacter)) or only a QR code. What users see depends on these conditions:

- Your LINE Official Account is a verified account
- The public URL of the LINE Official Account profile is set to be available

If both conditions are met, users see the public URL of your LINE Official Account, with a QR code. If not, the user sees only the QR code for your LINE Official Account. You can adjust settings on [LINE Official Account Manager (opens new window)](https://manager.line.biz/) to change an unverified account to a verified account, or to use the public URL of your profile.

### [#](#opening-line-voom-and-profile) Opening the LINE Official Account's LINE VOOM and profile

With the LINE URL scheme, you can let users open LINE VOOM and the profile page of your LINE Official Account.

![bot-line-voom](/assets/img/bot-line-voom.2d2e22a7.png)

| LINE URL scheme                                                           | Description                                                                                                                        |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/home/public/main?id={LINE> ID without @}                 | Opens the LINE Official Account's LINE VOOM.                                                                                       |
| <https://line.me/R/home/public/profile?id={LINE> ID without @}              | Opens the LINE Official Account's profile.                                                                                         |
| <https://line.me/R/home/public/post?id={LINE> ID without @}&postId={postId} | Opens the LINE Official Account's LINE VOOM post. Find the post ID of individual posts in the LINE VOOM Studio (opens new window). |

> [!warning]
> Exclude the at-sign (@) prefix in the URL scheme
>
> Replace `{LINE ID without @}` in the URL scheme with the LINE ID of your LINE Official Account. You can specify either a basic ID or a [premium ID](../../../en/glossary.md#premium-id). Exclude the at-sign (`@`) prefix from the LINE ID of your LINE Official Account. For example, if the LINE ID is `@linedevelopers`, use `https://line.me/R/home/public/main?id=linedevelopers`.

Verify the LINE ID of the LINE Official Account

Find the LINE ID of your LINE Official Account in [LINE Official Account Manager (opens new window)](https://manager.line.biz/). For more information, see [Share the LINE ID of your LINE Official Account](../../../en/docs/messaging-api/sharing-bot.md#share-the-line-id-of-your-line-official-account).

Posting on LINE VOOM & customizing profile

To post on LINE VOOM or customize the profile for your LINE Official Account, use the [LINE VOOM Studio (opens new window)](https://voom-studio.line.biz/) or the [LINE Official Account Manager (opens new window)](https://manager.line.biz/).

### [#](#opening-chat-screen) Opening a chat screen with a LINE Official Account

With the LINE URL scheme, you can let users open a chat screen with your LINE Official Account.

| LINE URL scheme                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/oaMessage/{Percent-encoded> LINE ID}                 | Opens a chat screen with your LINE Official Account.                                                                                |
| <https://line.me/R/oaMessage/{Percent-encoded> LINE ID}/?{text_message} | Opens a chat screen with your LINE Official Account and enters the text message set in {text_message} into the message input field. |

> [!warning]
> "Percent-encoded LINE ID" and "text_message" must be percent encoded
>
> Make sure `{Percent-encoded LINE ID}` and `{text_message}` are [percent encoded (opens new window)](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) in UTF-8. For example, if you are sending a text message "Hi there!" to a LINE Official Account with the LINE ID `@linedevelopers`, use `https://line.me/R/oaMessage/%40linedevelopers/?Hi%20there%21`. If you replaced with the LINE ID that isn't percent encoded, it will also work, but is deprecated.
>
> You can specify either [a Basic ID or a Premium ID (opens new window)](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja) (only available in Japanese) as the LINE ID for your LINE Official Account.

Verify the LINE ID of the LINE Official Account

Find the LINE ID of your LINE Official Account in [LINE Official Account Manager (opens new window)](https://manager.line.biz/). For more information, see [Share the LINE ID of your LINE Official Account](../../../en/docs/messaging-api/sharing-bot.md#share-the-line-id-of-your-line-official-account).

### [#](#sending-text-messages) Sending text messages

With the LINE URL scheme, you can set a text message for a user to send to their friends or to LINE Official Accounts.

| LINE URL scheme                             | Description                                                                                                                                                                                                             |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/share?text={text_message}> | Opens the "Share with" screen. Users can select friends, group chats, or multi-person chats to send a text message specified with {text_message}. Users can send the text also to Keep Memo, LINE VOOM, and other apps. |

> [!warning]
> "text_message" must be percent encoded
>
> Make sure `{text_message}` is [percent encoded (opens new window)](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) in UTF-8. For example, if you are sending a text message "Hi there!", use `https://line.me/R/share?text=Hi%20there%21`.

### [#](#opening-profile-information) Opening profile information

With the LINE URL scheme, you can let users open their "My profile" screen. On this screen, users can update their display name and status message, set their LINE ID and view profile settings.

![my-profile](/assets/img/my-profile.8a16c552.png)

| LINE URL scheme                   | Description                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/nv/profile>      | Opens the user's "My profile" screen.                                                                                       |
| <https://line.me/R/nv/profileSetId> | Opens the user's "LINE ID" screen. With this URL scheme, you can let users set their LINE ID if they didn't set the ID yet. |

### [#](#opening-common-line-app-screens) Opening common LINE screens

With the LINE URL scheme, you can let users open different LINE screens, including the Chats tab.

![chats-list-en](/assets/img/chats-list-en.f686535a.png)

| LINE URL scheme                       | Description                                |
| ------------------------------------- | ------------------------------------------ |
| <https://line.me/R/nv/chat>             | Opens the Chats tab.                       |
| <https://line.me/R/nv/timeline>         | Opens the LINE VOOM tab.                   |
| <https://line.me/R/nv/wallet>           | Opens the Wallet tab.                      |
| <https://line.me/R/nv/addFriends>       | Opens the "Add friends" screen.            |
| <https://line.me/R/nv/officialAccounts> | Opens the "LINE official accounts" screen. |

### [#](#opening-line-app-settings-screens) Opening LINE settings

With the LINE URL scheme, you can open different settings menu.

![settings](/assets/img/settings.fec8a51c.png)

| LINE URL scheme                                                                                      | Description                                                                                                   |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/nv/settings>                                                                        | Opens Settings.                                                                                               |
| <https://line.me/R/nv/settings/account>                                                                | Opens Account settings. Displays the user's LINE account information.                                         |
| <https://line.me/R/nv/connectedApps>                                                                   | Opens Account > Authorized apps. Shows the permissions granted to authorized apps and lets users unlink apps. |
| <https://line.me/R/nv/connectedDevices>                                                                | Opens Account > Connected devices.                                                                            |
| <https://line.me/R/nv/settings/privacy>                                                                | Opens Privacy settings.                                                                                       |
| <https://line.me/R/nv/things/deviceLink>                                                               | Opens LINE Things settings. Lets users link a device to LINE and see linked devices.                          |
| <https://line.me/R/nv/settings/sticker>                                                                | Opens Stickers settings.                                                                                      |
| <https://line.me/R/nv/stickerShop/mySticker>                                                           | Opens Stickers > My Stickers.                                                                                 |
| <https://line.me/R/nv/settings/themeSettingsMenu> (iOS), <https://line.me/R/nv/settings/theme> (Android) | Opens Themes settings.The scheme is different for iOS and Android.                                            |
| <https://line.me/R/nv/themeSettings>                                                                   | Opens Themes > My Themes.                                                                                     |
| <https://line.me/R/nv/notificationServiceDetail>                                                       | Opens Notification > Authorized apps. Lets users set notification for authorized apps.                        |
| <https://line.me/R/nv/settings/chatSettings>                                                           | Opens Chats settings.                                                                                         |
| <https://line.me/R/nv/suggestSettings>                                                                 | Opens Chats > Display suggestions.                                                                            |
| <https://line.me/R/nv/settings/callSettings>                                                           | Opens Calls settings.                                                                                         |
| <https://line.me/R/nv/settings/addressBookSync>                                                        | Opens Friends settings.                                                                                       |
| <https://line.me/R/nv/settings/timelineSettings>                                                       | Opens LINE VOOM settings.                                                                                     |

### [#](#opening-the-sticker-shop) Opening Sticker Shop

With the LINE URL scheme, you can let users open Sticker Shop in LINE to encourage purchase of official and creators' sticker sets.

![sticker-shop-categories](/assets/img/sticker-shop-categories.f9029abf.png)

| LINE URL scheme                                    | Description                                                                                                                                                                     |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/shop/sticker/detail/{package_id}> | Opens a Sticker set info screen. Specify {package_id} to the number specified in the sticker's page URL in LINE STORE (opens new window).                                       |
| <https://line.me/R/shop/category/{category_id}>      | Opens a popularity ranking for the given category. Specify {category_id} to the number specified in the category page URL in LINE STORE (opens new window) > Official stickers. |
| <https://line.me/R/shop/sticker/author/{author_id}>  | Opens a list of sticker sets from the given author. Specify {author_id} to the number specified in the creator's page URL in LINE STORE (opens new window).                     |
| <https://line.me/R/nv/stickerShop>                   | Opens Sticker Shop > HOME tab.                                                                                                                                                  |
| <https://line.me/R/shop/sticker/hot>                 | Opens Sticker Shop > RANK tab.                                                                                                                                                  |
| <https://line.me/R/shop/sticker/new>                 | Opens Sticker Shop > NEW tab.                                                                                                                                                   |
| <https://line.me/R/shop/sticker/event>               | Opens Sticker Shop > FREE tab.                                                                                                                                                  |
| <https://line.me/R/shop/sticker/category>            | Opens Sticker Shop > CATEGORIES tab.                                                                                                                                            |

Create your own sticker set

To create your own sticker sets for users, visit [LINE Creators Market (opens new window)](https://creator.line.me/en/) and use the [LINE Sticker Maker (opens new window)](https://creator.line.me/en/stickermaker/) app.

### [#](#opening-the-theme-shop) Opening Theme Shop

With the LINE URL scheme, you can let user open Theme Shop in LINE to encourage purchase of official and creators' theme.

![theme-shop](/assets/img/theme-shop.fe918789.png)

| LINE URL scheme                                     | Description                                                                                                                                                                                                                                                                                                       |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <https://line.me/R/shop/theme/detail?id={product_id}> | Opens a Theme info screen. Specify {product_id} to the ID specified in the theme page URL in LINE STORE (opens new window). For example, if you open Matte White (opens new window)<https://store.line.me/themeshop/product/0bac8fed-4c75-40c5-9982-e9ecc3b9d191/en>, specify 0bac8fed-4c75-40c5-9982-e9ecc3b9d191. |

### [#](#opening-a-liff-app) Opening a LIFF app

With the LINE URL scheme, you can let users open a LIFF app. A LIFF app is a web app built using the [LINE Front-end Framework (LIFF)](../../../en/docs/liff/overview.md).

![liff-app](/assets/img/liff-app.e702e89b.png)

| LINE URL scheme                                                      | Description                                                                                                           |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <https://liff.line.me/{liffId}>                                        | Opens the LIFF app with the given LIFF ID. This URL scheme is called a LIFF URL.                                      |
| <https://liff.line.me/{liffId}/path_A/path_B/?key1=value1&key2=value2> | Opens the LIFF app with the given LIFF ID. You can pass /path_A/path_B/?key1=value1&key2=value2 as extra information. |

For more information on the process of opening a LIFF app, see [Opening a LIFF app](../../../en/docs/liff/opening-liff-app.md) in the LIFF documentation.

### [#](#opening-url-in-external-browser) Opening a URL in an external browser

With the query parameters, you can let users open a URL in an [external browser](../../../en/glossary.md#external-browser) instead of [LINE's in-app browser](../../../en/glossary.md#line-iab).

> [!warning]
> These query parameters aren't supported on LIFF apps
>
> These query parameters work for all URLs accessed from the LINE app, except for on LIFF apps. Even if you add these query parameters to a LIFF URL, it won't open in an external browser.

| URL with the query parameter               | Description                                                                        |
| ------------------------------------------ | ---------------------------------------------------------------------------------- |
| <https://example.com/?openExternalBrowser=1> | Opens target URL, in an external browser.                                          |
| <https://example.com/?openInAppBrowser=0>    | Opens target URL, in a Chrome custom tab (only available in LINE for Android). [1] |

---

1. When a URL is read by the QR code reader, the target URL is opened in a Chrome custom tab even without the query parameter. [↩︎](#fnref1)

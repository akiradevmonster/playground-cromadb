---
title: 'Server API | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/reference/liff-server/'
---

## Table of Contents

[Server API](#server-api)

[Preparing a channel access token](#preparing-channel-access-token) [Adding the LIFF app to a channel](#add-liff-app) [Update LIFF app settings](#update-liff-app) [Get all LIFF apps](#get-all-liff-apps) [Delete LIFF app from a channel](#delete-liff-app)

# [#](#page-title) Server API

Version number differs from LIFF SDK

The version number of the server API is different from that of LIFF SDK. The currently released version of LIFF SDK is `v2`, but the version of the server API is `v1`.

## [#](#server-api) Server API

### [#](#preparing-channel-access-token) Preparing a channel access token

The LIFF server API is used to operate the LIFF apps on the LINE Login channel. Therefore, in order to use the server API, a channel access token for the LINE Login channel is required. The types of channel access tokens available are [short-lived channel access tokens](../../en/reference/messaging-api.md#issue-shortlived-channel-access-token) or [stateless channel access tokens](../../en/reference/messaging-api.md#issue-stateless-channel-access-token).

### [#](#add-liff-app) Adding the LIFF app to a channel

Adds the LIFF app to a channel. You can add up to 30 LIFF apps on one channel.

We recommend creating a LIFF app as a LINE MINI App

In the future, LIFF and the LINE MINI App will be integrated into a single brand. As a result of this integration, LIFF will be integrated into the LINE MINI App. For this reason, we recommend that you create a new LIFF app as a LINE MINI App. For more information, see the news from [February 12, 2025](../../en/news/2025/02/12/line-mini-app.md).

_Example_

Shell

[Link](#)

```
curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "type": "full",
        "url": "https://example.com/myservice"
    },
    "description": "Service Example",
    "features": {
        "qrCode": true
    },
    "permanentLinkPattern": "concat",
    "scope": ["profile", "chat_message.write"],
    "botPrompt": "none"
}'
```

#### [#](#add-liff-app-http-request) HTTP request

`POST https://api.line.me/liff/v1/apps`

#### [#](#add-liff-app-request-headers) Request headers

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Preparing a channel access token](#preparing-channel-access-token).

Content-Type

Required

application/json

#### [#](#add-liff-app-request-body) Request body

view.type

String

Required

Size of the LIFF app view. Specify one of these values:

- `compact`
- `tall`
- `full`

For more information, see [Size of the LIFF app view](../../en/docs/liff/overview.md#screen-size).

view.url

String

Required

Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. `https://example.com`). Used when the LIFF app is launched using the LIFF URL.

The URL scheme must be **https**. URL fragments (#URL-fragment) can't be specified.

view.moduleMode

Boolean

Optional

`true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.

description

String

Optional

Name of the LIFF app.

The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.

features.qrCode

Boolean

Optional

`true` to use the 2D code reader in the LIFF app. `false` otherwise. The default value is `false`.

permanentLinkPattern

String

Optional

How additional information in LIFF URLs is handled. Specify `concat`.

For more information, see [Opening a LIFF app](../../en/docs/liff/opening-liff-app.md) in the LIFF documentation.

scope

Array of strings

Optional

Array of scopes required for some LIFF SDK methods to function.

- `openid`
- `email`
- `profile`
- `chat_message.write`

The default value is `["profile", "chat_message.write"]`. For more information on each scope, see [Adding the LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) in the LIFF documentation.

botPrompt

String

Optional

Specify the setting for [add friend option](../../en/docs/line-login/link-a-bot.md) with one of the following values:

- `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
- `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
- `none`: Don't display the option to add the LINE Official Account as a friend.

The default value is `none`.

#### [#](#add-liff-app-response) Response

Returns status code `200` and a JSON object with the following properties.

liffId

String

LIFF app ID

_Example_

JSON

[Link](#)

```
{
  "liffId": "{liffId}"
}
```

#### [#](#add-liff-app-error-response) Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400         | This status code means one of the following:The request contains an invalid value.The maximum number of LIFF apps that can be added to the channel has been reached. |
| 401         | Authentication failed.                                                                                                                                               |

### [#](#update-liff-app) Update LIFF app settings

Partially updates LIFF app settings.

_Example_

Shell

[Link](#)

```
curl -X PUT https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: application/json" \
-d '{
    "view": {
        "url": "https://new.example.com"
    }
}'
```

#### [#](#put-liff-app-http-request) HTTP request

`PUT https://api.line.me/liff/v1/apps/{liffId}`

#### [#](#put-liff-app-request-headers) Request headers

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Preparing a channel access token](#preparing-channel-access-token).

Content-Type

Required

application/json

#### [#](#put-liff-app-path-parameters) Path parameters

liffId

Required

ID of the LIFF app to be updated

#### [#](#put-liff-app-request-body) Request body

view.type

String

Optional

Size of the LIFF app view. Specify one of these values:

- `compact`
- `tall`
- `full`

For more information, see [Size of the LIFF app view](../../en/docs/liff/overview.md#screen-size).

view.url

String

Optional

Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. `https://example.com`). Used when the LIFF app is launched using the LIFF URL.

The URL scheme must be **https**. URL fragments (#URL-fragment) can't be specified.

view.moduleMode

Boolean

Optional

`true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.

description

String

Optional

Name of the LIFF app.

The LIFF app name can't include "LINE" or similar strings, or inappropriate strings.

features.qrCode

Boolean

Optional

`true` to use the 2D code reader in the LIFF app. `false` otherwise.

permanentLinkPattern

String

Optional

How additional information in LIFF URLs is handled. Specify `concat`.

For more information, see [Opening a LIFF app](../../en/docs/liff/opening-liff-app.md) in the LIFF documentation.

scope

Array of strings

Optional

Array of scopes required for some LIFF SDK methods to function.

- `openid`
- `email`
- `profile`
- `chat_message.write`

For more information on each scope, see [Adding the LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) in the LIFF documentation.

botPrompt

String

Optional

Specify the setting for [add friend option](../../en/docs/line-login/link-a-bot.md) with one of the following values:

- `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
- `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
- `none`: Don't display the option to add the LINE Official Account as a friend.

> [!warning]
> Note
>
> Only the properties specified in the request body are updated.

#### [#](#put-liff-app-response) Response

Status code `200` is returned.

#### [#](#put-liff-app-error-response) Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 400         | The request contains an invalid value.                                                                                                      |
| 401         | Authentication failed.                                                                                                                      |
| 404         | This status code means one of the following:The specified LIFF app does not exist.The specified LIFF app has been added to another channel. |

### [#](#get-all-liff-apps) Get all LIFF apps

Gets information on all the LIFF apps added to the channel.

_Example_

Shell

[Link](#)

```
curl -X GET https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {channel access token}"
```

#### [#](#get-all-liff-apps-http-request) HTTP request

`GET https://api.line.me/liff/v1/apps`

#### [#](#get-all-liff-apps-request-headers) Request headers

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Preparing a channel access token](#preparing-channel-access-token).

#### [#](#get-all-liff-apps-response) Response

Returns status code `200` and a JSON object with these properties.

apps

Array of objects

Array of LIFF app objects

apps\[\].liffId

String

LIFF app ID

apps\[\].view.type

String

Size of the LIFF app view. One of these values:

- `compact`
- `tall`
- `full`

For more information, see [Size of the LIFF app view](../../en/docs/liff/overview.md#screen-size).

apps\[\].view.url

String

Endpoint URL. This is the URL of the web app that implements the LIFF app (e.g. `https://example.com`). Used when the LIFF app is launched using the LIFF URL.

apps\[\].view.moduleMode

Boolean

`true` to use the LIFF app in modular mode. When in modular mode, the action button in the header is not displayed.

apps\[\].description

String

Name of the LIFF app

apps\[\].features.ble

Boolean

`true` if the LIFF app supports Bluetooth® Low Energy for LINE Things. `false` otherwise.

apps\[\].features.qrCode

Boolean

`true` if the 2D code reader can be launched in the LIFF app. `false` otherwise.

apps\[\].permanentLinkPattern

String

How additional information in LIFF URLs is handled. `concat` is returned.

For more information, see [Opening a LIFF app](../../en/docs/liff/opening-liff-app.md) in the LIFF documentation.

apps\[\].scope

Array of strings

Scopes of the LIFF app.

- `openid`
- `email`
- `profile`
- `chat_message.write`

For more information on each scope, see [Adding the LIFF app to your channel](../../en/docs/liff/registering-liff-apps.md#registering-liff-app) in the LIFF documentation.

apps\[\].botPrompt

String

The setting for [add friend option](../../en/docs/line-login/link-a-bot.md).

- `normal`: Display the option to add the LINE Official Account as a friend in the channel consent screen.
- `aggressive`: Display a screen with the option to add the LINE Official Account as a friend after the channel consent screen.
- `none`: Don't display the option to add the LINE Official Account as a friend.

_Example_

JSON

[Link](#)

```
{
  "apps": [
    {
      "liffId": "{liffId}",
      "view": {
        "type": "full",
        "url": "https://example.com/myservice"
      },
      "description": "Happy New York",
      "permanentLinkPattern": "concat"
    },
    {
      "liffId": "{liffId}",
      "view": {
        "type": "tall",
        "url": "https://example.com/myservice2"
      },
      "features": {
        "ble": true,
        "qrCode": true
      },
      "permanentLinkPattern": "concat",
      "scope": ["profile", "chat_message.write"],
      "botPrompt": "none"
    }
  ]
}
```

#### [#](#get-all-liff-apps-error-response) Error response

One of the following status codes is returned.

| Status code | Description                          |
| ----------- | ------------------------------------ |
| 401         | Authentication failed.               |
| 404         | There is no LIFF app on the channel. |

### [#](#delete-liff-app) Delete LIFF app from a channel

Deletes a LIFF app from a channel.

_Example_

Shell

[Link](#)

```
curl -X DELETE https://api.line.me/liff/v1/apps/{liffId} \
-H "Authorization: Bearer {channel access token}"
```

#### [#](#delete-liff-app-http-request) HTTP request

`DELETE https://api.line.me/liff/v1/apps/{liffId}`

#### [#](#delete-liff-app-request-headers) Request headers

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Preparing a channel access token](#preparing-channel-access-token).

#### [#](#delete-liff-app-path-parameters) Path parameters

liffId

Required

ID of the LIFF app to be deleted

#### [#](#delete-liff-app-response) Response

Status code `200` is returned.

#### [#](#delete-liff-app-error-response) Error response

One of the following status codes is returned.

| Status code | Description                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 401         | Authentication failed.                                                                                                                      |
| 404         | This status code means one of the following:The specified LIFF app does not exist.The specified LIFF app has been added to another channel. |

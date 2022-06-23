---
title: 'LINE MINI App API reference | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/reference/line-mini-app/'
---

## Table of Contents

[Service Messages](#service-messages)

[Issuing a service notification token](#issue-notification-token) [Sending service messages](#send-service-message)

# [#](#page-title) LINE MINI App API reference

## [#](#service-messages) Service Messages

This feature can only be used for verified MINI Apps

This feature is only available for verified MINI Apps. For unverified MINI Apps, you can test the feature on the internal channel for Developing, but you can't use the feature on the internal channel for Published.

The Service Message API enables you to send service messages from your service to your LINE MINI App users.

Sending service messages requires a service notification token and a [template](../../en/docs/line-mini-app/develop/service-messages.md#service-message-templates).

- [Issue a service notification token](#issue-notification-token)
- [Send a service message](#send-service-message)

### [#](#issue-notification-token) Issuing a service notification token

Issues a service notification token. Service notification tokens are used to send a service message to the associated user.

Service notification tokens have the following features:

- A service notification token expires 1 year (31,536,000 seconds) after being issued. While it is still valid, up to 5 service messages can be sent.
- Every time you use the service notification token, the token value is renewed unless it expired or no longer has remaining message counts. If you are planning to send successive service messages to a user, keep the renewed service notification token.

> [!danger]
> Don't issue more than one service notification token with a single access token
>
> Issuing multiple service notification tokens reusing an access token obtained by [`liff.getAccessToken()`](../../en/reference/liff.md#get-access-token) (LIFF access token) is not allowed.
>
> Only one service notification token can be issued per LIFF access token.

> [!warning]
> Note
>
> Each service notification token is associated with one user. You cannot use a service notification token associated with one user to send a service message to other users.

_Example request_

Shell

[Link](#)

```
curl -X POST https://api.line.me/message/v3/notifier/token \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
-d '{
    "liffAccessToken": "eyJhbGciOiJIUzI1NiJ9..."
}'
```

#### [#](#issue-notification-token-http-request) HTTP request

`POST https://api.line.me/message/v3/notifier/token`

#### [#](#issue-notification-token-request-headers) Request headers

Content-Type

Required

application/json

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Channel access token](../../en/docs/basics/channel-access-token.md) in the LINE Platform basics.

> [!warning]
> Use of stateless channel access tokens is recommended
>
> [Long-lived channel access tokens](../../en/docs/basics/channel-access-token.md#long-lived-channel-access-token) and [channel access token with a user-specified expiration (Channel Access Token v2.1)](../../en/docs/basics/channel-access-token.md#user-specified-expiration) cannot be used for LINE MINI App channels.
>
> When developing LINE MINI Apps, either [stateless channel access tokens](../../en/docs/basics/channel-access-token.md#stateless-channel-access-token) or [short-lived channel access tokens](../../en/docs/basics/channel-access-token.md#short-lived-channel-access-token) can be used. Stateless channel access tokens are recommended among those two. Stateless channel access tokens have an unlimited number of issuances, so there is no need for the application to manage the token lifecycle.

#### [#](#issue-notification-token-request-body) Request body

liffAccessToken

String

Required

User access token obtained by [`liff.getAccessToken()`](../../en/reference/liff.md#get-access-token) (LIFF access token).

#### [#](#issue-notification-token-response) Response

Returns status code `200` and a JSON object with the following information.

notificationToken

String

Service notification token

expiresIn

Number

The amount of time remaining in seconds before the service notification token expires. A service notification token expires 1 year (31,536,000 seconds) after being issued.

remainingCount

Number

The number of times you can send a service message with the issued service notification token

sessionId

String

The session ID. For more information, see [Sending service messages](../../en/docs/line-mini-app/develop/service-messages.md).

_Example response_

JSON

[Link](#)

```
{
  "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9..",
  "expiresIn": 31536000,
  "remainingCount": 5,
  "sessionId": "xD06...."
}
```

#### [#](#issue-notification-token-error-response) Error response

Returns one of the following status codes and error messages.

| Status code               | Description                                                                                                                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400 Bad request           | This status code means one of the following:There is a problem with the request body.The LIFF access token specified in the liffAccessToken property was used multiple times in a short span of time to request the issuing of service notification tokens.     |
| 401 Unauthorized          | This status code means one or both of the following:A valid channel access token hasn't been specified.A valid LIFF access token hasn't been specified.When the user closes the LINE MINI App, the LIFF access token will be revoked even if it hasn't expired. |
| 403 Forbidden             | This channel isn't authorized to issue service messages.                                                                                                                                                                                                        |
| 500 Internal Server Error | Error on the internal server                                                                                                                                                                                                                                    |

_Example error response_

JSON

[Link](#)

```
{
  "message": "[liffAccessToken] must not be blank"
}
```

### [#](#send-service-message) Sending service messages

Sends a service message to a user specified in the service notification token.

Once a service message is sent, the token's value is renewed unless the token expired or no longer has remaining message counts. If you are planning to send successive service messages to a user, keep the renewed service notification token.

_Example request_

Shell

[Link](#)

```
curl -X POST https://api.line.me/message/v3/notifier/send?target=service \
-H 'Authorization: Bearer W1TeHCgfH2Liwa...' \
-H 'Content-Type: application/json' \
-d '{
    "templateName": "thankyou_msg_en",
    "params": {
        "date": "2020-04-23",
        "username": "Brown & Cony"
    },
    "notificationToken": "34c11a03-b726-49e3-8ce0-949387a9.."
}'
```

#### [#](#send-service-message-http-request) HTTP request

`POST https://api.line.me/message/v3/notifier/send`

#### [#](#send-service-message-request-headers) Request headers

Content-Type

Required

application/json

Authorization

Required

Bearer `{channel access token}`  
For more information, see [Channel access token](../../en/docs/basics/channel-access-token.md) in the LINE Platform basics.

> [!warning]
> Use of stateless channel access tokens is recommended
>
> [Long-lived channel access tokens](../../en/docs/basics/channel-access-token.md#long-lived-channel-access-token) and [channel access token with a user-specified expiration (Channel Access Token v2.1)](../../en/docs/basics/channel-access-token.md#user-specified-expiration) cannot be used for LINE MINI App channels.
>
> When developing LINE MINI Apps, either [stateless channel access tokens](../../en/docs/basics/channel-access-token.md#stateless-channel-access-token) or [short-lived channel access tokens](../../en/docs/basics/channel-access-token.md#short-lived-channel-access-token) can be used. Stateless channel access tokens are recommended among those two. Stateless channel access tokens have an unlimited number of issuances, so there is no need for the application to manage the token lifecycle.

#### [#](#send-service-message-query-parameters) Query parameters

target

Required

`service`

#### [#](#send-service-message-request-body) Request body

templateName

String

Required

The name of a pre-registered template to use for the service message, with a BCP 47 language tag suffix.  
Format: `{template name}_{BCP 47 language tag}`  
Max character limit: 30

> [!warning]
> Note
>
> The languages and language tags supported by the service message are as follows.
>
> - Arabic: `ar`
> - Chinese (Simplified): `zh-CN`
> - Chinese (Traditional): `zh-TW`
> - English: `en`
> - French: `fr`
> - German: `de`
> - Indonesian: `id`
> - Italian: `it`
> - Japanese: `ja`
> - Korean: `ko`
> - Malay: `ms`
> - Portuguese (Brazil): `pt-BR`
> - Portuguese (Portugal): `pt-PT`
> - Russian: `ru`
> - Spanish (Spain): `es-ES`
> - Thai: `th`
> - Turkish: `tr`
> - Vietnamese: `vi`

params

object

Required

JSON Object to specify each template variable-value pair.  
If the template has no template variable, specify an empty JSON object (`{ }`).  
The template variables are defined for each template. If a template variable is part of the required elements, be sure to specify a template variable-value pair.  
For more information, see [Adding service message templates](../../en/docs/line-mini-app/develop/service-messages.md#service-message-templates).

notificationToken

String

Required

Service notification token

#### [#](#send-service-message-response) Response

Returns status code `200` and a JSON object with the following information.

notificationToken

String

A renewed service notification token. Use this service notification token to send successive service messages.

expiresIn

Number

The remaining amount of time in seconds until renewed service notification token expires

remainingCount

Number

The number of times you can send successive service messages with the renewed service notification token.

sessionId

String

The session ID. For more information, see [Sending service messages](../../en/docs/line-mini-app/develop/service-messages.md).

> [!warning]
> Note
>
> If the values of `expiresIn` and `remainingCount` are `0`, it means that the service message was sent, but the service notification token couldn't be renewed.

_Example response_

JSON

[Link](#)

```
// Request was successful,
// renewed service notification
// token issued
{
  "notificationToken": "c9884874-bf6a-4241-8999-2767241c...",
  "expiresIn": 31535906,
  "remainingCount": 3,
  "sessionId": "xD06...."
}

// Request was successful,
// the service message
// was sent, but the LINE Platform
// cannot renew the token
{
  "expiresIn": 0,
  "remaningCount": 0
}
```

#### [#](#send-service-message-error-response) Error response

Returns one of the following status codes and error messages.

| Status code      | Description                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400 Bad request  | This status code means one of the following:There is a problem with the request body.The target recipient of the service message doesn't exist.                  |
| 401 Unauthorized | This status code means one or both of the following:A valid channel access token hasn't been specified.A valid service notification token hasn't been specified. |
| 403 Forbidden    | This status code means one of the following:This channel is not authorized to send service messages.The specified template cannot be found.                      |

_Example error response_

JSON

[Link](#)

```
{
  "message": "Invalid notifier token"
}
```

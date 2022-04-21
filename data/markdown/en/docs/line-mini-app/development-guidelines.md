---
title: 'LINE MINI App development guidelines | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/development-guidelines/'
---

## Table of Contents

[Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

[Saving logs](#save-logs)

[Service message API request logs](#service-message-API-request-logs)

# [#](#page-title) LINE MINI App development guidelines

When developing web applications using LIFF, follow these development guidelines.

- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)
- [Saving logs](#save-logs)

LINE MINI App uses a system provided by LIFF. Therefore, abide by the [LIFF app development guidelines](../../../en/docs/liff/development-guidelines.md) in the LIFF documentation.

> [!warning]
> Note
>
> The basic rules for LINE MINI App development are based on the content described in [Terms and Policies](../../../en/terms-and-policies.md).

## [#](#prohibiting-mass-requests-to-line-platform) Prohibiting mass requests to the LINE Platform

Don't over-access LINE MINI Apps via the [LIFF scheme](../../../en/docs/line-login/using-line-url-scheme.md#opening-a-liff-app) (`https://miniapp.line.me/{liffId}`), or send a large number of requests to the [LIFF API](../../../en/reference/liff.md) or the [Service message API](../../../en/reference/line-mini-app.md), for load testing purposes. For load testing LINE MINI Apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

> [!warning]
> Note
>
> If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.

## [#](#save-logs) Saving logs

We recommend saving logs for [Service message API](../../../en/reference/line-mini-app.md) requests for a certain period of time so that developers themselves can smoothly investigate the cause and scope of a problem when it occurs.

### [#](#service-message-API-request-logs) Service message API request logs

We recommend saving the following information in a log, in addition to the [service notification token](../../../en/reference/line-mini-app.md#issue-notification-token-response) `notificationToken` which is included in the response, when making a request to the [Service message API](../../../en/reference/line-mini-app.md).

- Time when API request was made
- Request method
- API endpoint
- [Status codes](../../../en/reference/line-mini-app.md) returned by the LINE Platform

More specifically, save it in a log file using the following format.

| Time when API request was made | Request method | API endpoint                                                | Status code |
| ------------------------------ | -------------- | ----------------------------------------------------------- | ----------- |
| Mon, 16 Jul 2021 10:20:23 GMT  | POST           | <https://api.line.me/message/v3/notifier/send?target=service> | 200         |

Additional information that would be useful to keep in log

Depending on the requirements of the LINE MINI App you're running, the following information, in addition to the above, can be stored for investigation when problems occur.

- Service message API request body
- Response body, other than the service notification token `notificationToken`, returned by the LINE Platform after the API request

> [!warning]
> We don't provide logs
>
> We don't provide logs of service message API requests, etc. despite inquiries. Logs should be saved by the developers who are developing the LINE MINI Apps themselves.

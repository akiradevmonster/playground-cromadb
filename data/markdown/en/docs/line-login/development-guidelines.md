---
title: 'LINE Login development guidelines | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/development-guidelines/'
---

## Table of Contents

[Prohibited matters](#prohibited-matters)

[Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

[Required matters](#required-matters)

[Deauthorize your app when a user unregisters from your app](#deauthorize)

[Recommended matters](#recommended-matters)

[Saving logs](#save-logs)

# [#](#page-title) LINE Login development guidelines

When developing web apps using LINE Login, follow these development guidelines.

**Prohibited matters**

- [Prohibiting mass requests to the LINE Platform](#prohibiting-mass-requests-to-line-platform)

**Required matters**

- [Deauthorize your app when a user unregisters from your app](#deauthorize)

**Recommended matters**

- [Saving logs](#save-logs)

> [!warning]
> Note
>
> The basic rules for LINE Login development are based on the content described in [Terms and Policies](../../../en/terms-and-policies.md).

## [#](#prohibited-matters) Prohibited matters

### [#](#prohibiting-mass-requests-to-line-platform) Prohibiting mass requests to the LINE Platform

Don't send a large number of [authorization requests](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) or [LINE Login API](../../../en/reference/line-login.md#page-title) requests to the LINE Platform for load testing purposes. For load testing web apps, prepare a test environment that doesn't generate a large number of requests to the LINE Platform.

> [!warning]
> Note
>
> If the rate limit is exceeded, `429 Too Many Requests` will be returned and an error will occur.

## [#](#required-matters) Required matters

### [#](#deauthorize) Deauthorize your app when a user unregisters from your app

When a user unregisters from your app (website, smartphone app, etc.) that integrates LINE Login, or when a user terminates the link between your app and the LINE app, you must do the following:

1. The permissions that the user has granted to the authorized app must be deauthorized using the [Deauthorize your app to which the user has granted permissions](../../../en/reference/line-login.md#deauthorize) endpoint on behalf of the user.
2. Write what happens when a user unregisters from your app or terminates the link between your app and the LINE app as follows near the function or in the terms and conditions that the user agrees to at the time of registration or authorization.
    - e.g. If you unsubscribe from the service, LY Corporation will be notified that you have unsubscribed and the link between the service and LINE app will be terminated.
    - e.g. If you do this, LY Corporation will be notified and the link between the service and LINE app will be terminated.

When a user logs in to the app that integrates LINE Login with their LINE account and [authorize the app](../../../en/docs/line-login/integrate-line-login.md#authorization-process) on the channel consent screen, the target app will appear in **Settings** > **Account** > **Authorized apps** in the LINE app. Deauthorize the app so that the permissions don't remain authorized after the user unregisters from your app.

The following use cases require deauthorization.

![Steps from linking your account to deauthorize app](/assets/img/deauthorize-your-app-en.2d35a8e7.png)

For more information about how a user can deauthorize the permissions that the user has granted to the app, see [Managing authorized apps](../../../en/docs/line-login/managing-authorized-apps.md) in the LINE Login documentation.

## [#](#recommended-matters) Recommended matters

### [#](#save-logs) Saving logs

We recommend saving logs for [Authorization requests](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) and [LINE Login API](../../../en/reference/line-login.md#page-title) requests for a certain period of time so that developers themselves can smoothly investigate the cause and scope of a problem when it occurs.

#### [#](#authorization-request-logs) Authorization request logs

We recommend saving the following information as a log when making an [Authorization request](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

- Time when authorization request was made
- Parameter of the authorization request

More specifically, save it in a log file using the following format.

| Time when authorization request was made | Parameter of the authorization request                                                  |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:10 GMT            | <https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=xxxxxxxxxx>... |

#### [#](#authorization-code-or-error-response) Authorization code or error response

We recommend saving the following information as a log when you receive an [Authorization code](../../../en/docs/line-login/integrate-line-login.md#receiving-the-authorization-code) or an [Error response](../../../en/docs/line-login/integrate-line-login.md#receiving-an-error-response) through an [Authorization request](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

- Time when the authorization code or error response was received
- Request method
- Log of authorization codes or error responses

More specifically, save it in a log file using the following format.

| Time when response was received | Request Method | Log of authorization codes or error responses                                         |
| ------------------------------- | -------------- | ------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:20 GMT   | GET            | /callback?code=Zfl2WjsWcn2XBBWApcty&state=n5B9b9FR2BWjloDzEskZMmGysITRTYpjLkM6oD5qfmA |

#### [#](#line-login-api-logs) Time logs for LINE Login API request

We recommend saving the following information as a log when making a [LINE Login API](../../../en/reference/line-login.md#page-title) request.

- Request ID (`x-line-request-id`) of the [Response headers](../../../en/reference/line-login.md#response-headers)
- Time when API request was made
- Request method
- API endpoint
- [Status codes](../../../en/reference/line-login.md#status-codes) returned by the LINE Platform

More specifically, save it in a log file using the following format.

| Request ID (x-line-request-id) | Time when API request was made | Request method | API endpoint                          | Status code |
| ------------------------------ | ------------------------------ | -------------- | ------------------------------------- | ----------- |
| 8d48c8577e739b9c               | Mon, 16 Jul 2021 10:20:22 GMT  | POST           | <https://api.line.me/oauth2/v2.1/token> | 200         |

Additional information that would be useful to keep in log

Depending on the requirements of the web app you're running, the following information, in addition to the above, can be stored for investigation when problems occur.

- LINE Login API request body
- Response body returned by the LINE Platform after the API request

> [!warning]
> We don't provide logs
>
> We don't provide logs of authorization requests or logs of LINE Login API requests, etc. despite inquiries. Logs should be saved by the developers who are developing web apps using LINE Login.

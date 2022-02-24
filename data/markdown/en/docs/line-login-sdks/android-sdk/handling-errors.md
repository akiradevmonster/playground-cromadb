---
title: 'Handling errors | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/android-sdk/handling-errors/'
---

# [#](#page-title) Handling errors

The `getResponseCode()` method of the `LineLoginResult` object returns one of the following response codes.

| Response code              | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| SUCCESS                    | The login was successful.                                                                 |
| CANCEL                     | The login failed because the user canceled the login process.                             |
| AUTHENTICATION_AGENT_ERROR | The login failed because the user tapped the Cancel or Back button on the consent screen. |
| SERVER_ERROR               | The login failed due to a server-side error.                                              |
| NETWORK_ERROR              | The login failed because the SDK could not connect to the LINE Platform.                  |
| INTERNAL_ERROR             | The login failed due to an unknown error.                                                 |

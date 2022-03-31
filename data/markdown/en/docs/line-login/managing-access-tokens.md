---
title: 'Managing access tokens | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/managing-access-tokens/'
---

## Table of Contents

[Get the user's access token](#get-user-access-token)

[Refresh tokens](#refresh-tokens)

[Verify access tokens](#verify-access-token)

# [#](#page-title) Managing access tokens

The access tokens managed through the LINE Login API verifies that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

## [#](#get-user-access-token) Get the user's access token

An access token is returned by the LINE Platform once user authentication is complete. At this point, you can assume the app has permission to access user data.

To learn more, see:

**LINE Login:**

- [Integrating LINE Login with your web app](../../../en/docs/line-login/integrate-line-login.md)
- [Integrating LINE Login with your iOS app - Swift](../../../en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login.md)
- [Integrating LINE Login with your Android app](../../../en/docs/line-login-sdks/android-sdk/integrate-line-login.md)
- [Integrating LINE Login with your Unity game](../../../en/docs/line-login-sdks/unity-sdk/integrate-line-login.md)
- [LINE SDK for Flutter](../../../en/docs/line-login-sdks/flutter-sdk.md)

**LIFF SDK:**

- [Developing a LIFF app](../../../en/docs/liff/developing-liff-apps.md)

> [!warning]
> Access token validity period
>
> An access token is valid for 30 days after being issued. Any response with an access token also includes the number of seconds until the token expires in the `expires_in` property.

### [#](#refresh-tokens) Refresh tokens

A refresh token is returned along with an access token once user authentication is complete.

When an access token expires, you can use a refresh token to get a new one. To learn more, see [Refresh access token](../../../en/reference/line-login.md#refresh-access-token) in the LINE Login v2.1 API reference.

> [!warning]
> Refresh token validity period
>
> A refresh token is valid for up to 90 days after its corresponding access token was issued. If the refresh token expires, you must prompt the user to log in again to generate a new access token.

## [#](#verify-access-token) Verify access tokens

Verify any access token that you receive from an app or external server before using it on your own servers.

To learn more about how to verify access tokens, see [Using access tokens to register new users](../../../en/docs/line-login/secure-login-process.md#using-access-tokens).

---
title: 'Creating a secure login process between your app and server | LINE Developers'
description: 'Explains how to create a login process that is resistant to attacks'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/secure-login-process/'
---

## Table of Contents

[Information that's safe to send and receive](#info-safe-to-send-and-receive)

[Using access tokens to register new users](#using-access-tokens)

[Using OpenID to register new users](#using-openid-to-register-new-users)

[Next steps](#next-steps)

# [#](#page-title) Creating a secure login process between your app and server

This page explains how to securely handle user registration and login when implementing LINE Login in your native app using the [LINE SDK](../../../en/docs/line-login/overview.md#native-app).

## [#](#info-safe-to-send-and-receive) Information that's safe to send and receive

When a user logs in to your app via LINE Login, the client app and server can send and receive this information from the LINE Platform:

- ❌ User profile details
- ❌ Channel IDs

However, information such as the above is vulnerable to spoofing and other kinds of attacks. For example, it's dangerous for your server to blindly trust this information when your client sends it. Instead, your client should send this data to your server:

- ✅ Access tokens
- ✅ ID tokens

These tokens enable your server to get reliable information directly from the LINE Platform.

How to use this page

This section explains the design concepts we recommend for using the LINE SDK. They are guides, not templates. Be sure to build a safe system with a full understanding of the dangers.

## [#](#using-access-tokens) Using access tokens to register new users

When a new user logs in to your app using LINE Login, you'll want to use their LINE profile details to create a new user in your database.

However, if you allow the client app to send you profile information directly to your server, you make yourself vulnerable to attacks.

> [!warning]
> Note
>
> The following example highlights a potential vulnerability in the user registration and login process.

![new-user-login-bad](/media/line-login/new-user-login-bad.svg)

Instead of profile information, the client app sends an access token to the server. The server should verify the access token and retrieve the user profile directly from the LINE Platform:

To learn more about the API calls in the diagram, see these topics in the LINE Login v2.1 API reference:

- [Verify that an access token is valid (GET /oauth2/v2.1/verify)](../../../en/reference/line-login.md#verify-access-token)
- [Get user profile (GET /v2/profile)](../../../en/reference/line-login.md#get-user-profile)

> [!warning]
> Further confirmation is required after verifying the access token
>
> When the LINE Login API successfully verifies an access token, the response contains a `client_id` property (the channel ID) and an `expires_in` property (the amount of time until the token expires). Make sure that these properties satisfy the following criteria before you use the access token.
>
> | Property   | Criteria                                                                  |
> | ---------- | ------------------------------------------------------------------------- |
> | client_id  | Same as the channel ID of the LINE Login channel linked to the native app |
> | expires_in | Positive value                                                            |

## [#](#using-openid-to-register-new-users) Using OpenID to register new users

If your app supports [OpenID Connect (opens new window)](https://openid.net/developers/how-connect-works/), it's not necessary to verify the access token. Instead, the client app sends the ID token to the server. The server should use an endpoint provided by the LINE Platform to validate your ID token to get a user profile information:

nonce: number used once

The nonce is a randomly generated number used to make each login attempt uniquely identifiable.

Using nonce correctly helps prevent [replay attacks (opens new window)](https://en.wikipedia.org/wiki/Replay_attack).

For more information on the API call in the diagram, see this topic in the LINE Login API reference:

- [Verify ID token (POST /oauth2/v2.1/verify)](../../../en/reference/line-login.md#verify-id-token)

For details about how to handle the ID token and nonce on your server, see these items:

- [Using ID tokens on your server](../../../en/docs/line-login-sdks/ios-sdk/swift/managing-users.md#get-id-token) (LINE SDK for iOS Swift)
- [Using ID token on your server](../../../en/docs/line-login-sdks/android-sdk/managing-users.md#get-id-token) (LINE SDK for Android)

## [#](#next-steps) Next steps

The preceding examples show in general terms how to design a secure user registration and login process. But for specific instructions on integrating LINE Login into your app, see these items:

- LINE SDK for iOS Swift:
  - [Integrating LINE Login with your iOS app](../../../en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login.md)
    - [Managing users](../../../en/docs/line-login-sdks/ios-sdk/swift/managing-users.md)
    - [Managing access tokens](../../../en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens.md)
- LINE SDK for Android:
  - [Integrating LINE Login with your Android app](../../../en/docs/line-login-sdks/android-sdk/integrate-line-login.md)
    - [Managing users](../../../en/docs/line-login-sdks/android-sdk/managing-users.md)
    - [Managing access tokens](../../../en/docs/line-login-sdks/android-sdk/managing-access-tokens.md)

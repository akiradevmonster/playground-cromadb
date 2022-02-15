---
title: 'Using user data in LIFF apps and servers | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/using-user-profile/'
---

## Table of Contents

[Use user data on server](#use-user-info-on-server)

[Send user ID token to get user data](#sending-id-token) [Send access token to get user data](#sending-access-token)

[Use user data in LIFF app](#use-user-info-in-liff-app)

# [#](#page-title) Using user data in LIFF apps and servers

When a user launches the LIFF app in a LIFF browser or a user launches the LIFF app in an external browser by logging in with the `liff.init()` method, the LIFF app can get the user's profile (user ID, display name, profile image, and email address).

If your LIFF app doesn't properly handle this user data, it will be vulnerable to spoofing and other types of attacks.

This page describes how to securely use the information of the user who opened the LIFF app in the LIFF app or server.

## [#](#use-user-info-on-server) Use user data on server

To use the user data on the server, send the ID token or access token from the LIFF app to the server. The server can safely retrieve the user's profile by sending the token sent by the LIFF app to the LINE Platform.

- [Send user ID token to get user data](#sending-id-token)
- [Send access token to get user data](#sending-access-token)

> [!danger]
> Don't send user info to server
>
> Don't send the details of the user profile obtained with `liff.getDecodedIDToken()` and `liff.getProfile()` to the server from the LIFF app.

Tip

The LIFF SDK verifies ID tokens and access tokens obtained from the LINE Platform. You can trust the tokens obtained with `liff.getIDToken()` and `liff.getAccessToken()`.

### [#](#sending-id-token) Send user ID token to get user data

When you send the ID token obtained by [`liff.getIDToken()`](../../../en/reference/liff.md#get-id-token) to the server, the server verifies the ID token and [POST /oauth2/v2.1/verify](../../../en/reference/line-login.md#verify-id-token) can be used to securely get the user's profile information.

### [#](#sending-access-token) Send access token to get user data

When you send the access token retrieved from [`liff.getAccessToken()`](../../../en/reference/liff.md#get-access-token) to the server, the server will verify the validity of the token ([GET /oauth2/v2.1/verify](../../../en/reference/line-login.md#verify-access-token)) and also verifies the channel ID and the validity period of the access token so the server can securely get the user's profile information ([GET /v2/profile](../../../en/reference/line-login.md#get-user-profile)).

When the user closes the LIFF app, the access token will be revoked even if it hasn't expired.

## [#](#use-user-info-in-liff-app) Use user data in LIFF app

Use the user's profile information obtained from [`liff.getDecodedIDToken()`](../../../en/reference/liff.md#get-decoded-id-token) or [`liff.getProfile()`](../../../en/reference/liff.md#get-profile).

> [!danger]
> Don't send user info to server
>
> Don't send the details of the user profile obtained with `liff.getDecodedIDToken()` and `liff.getProfile()` to the server from the LIFF app.

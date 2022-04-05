---
title: 'LINE Login security checklist | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/security-checklist/'
---

## Table of Contents

[Checklist for query parameters passed to the authorization URL](#check-authorization-request)

[Checklist for query parameters returned to the callback URL](#check-receiving-the-authorization-code)

[Checklist for issuing the access token](#check-issue-access-token)

[Checklist for using ID tokens and access tokens](#check-using-id-tokens-access-token)

[Checklist for sending ID tokens and access tokens to the backend server for processing](#check-using-id-tokens-access-token-backend)

# [#](#page-title) LINE Login security checklist

When developing an application using LINE Login, you must prepare for potential attacks by third parties and implement the login function without any security flaws.

We provide a checklist to ensure that there are no security flaws when integrating LINE Login into your application. Use the checklist to validate your application before publishing.

We also recommend confirming the session "[Implementing safe and secure LINE Login (opens new window)](https://linedevday.linecorp.com/2020/en/sessions/7159/)" at LINE DEVELOPER DAY 2020.

Be sure to build a safe system with an understanding of the purpose of the checklist

The checklist contains excerpts of points that require special attention when using LINE Login. Conforming to the contents of the checklist does not guarantee security. Be sure to build a safe system with a full understanding of the dangers.

- [Checklist for query parameters passed to the authorization URL](#check-authorization-request)
- [Checklist for query parameters returned to the callback URL](#check-receiving-the-authorization-code)
- [Checklist for issuing the access token](#check-issue-access-token)
- [Checklist for using ID tokens and access tokens](#check-using-id-tokens-access-token)
- [Checklist for sending ID tokens and access tokens to the backend server for processing](#check-using-id-tokens-access-token-backend)

## [#](#check-authorization-request) Checklist for query parameters passed to the authorization URL

The following checklist is for the query parameters to the authorization URL, when initiating the authentication and authorization process. For more information on the authorization URL, see [Authenticating users and making authorization requests](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

Callback URL

**Callback URL** refers to the **Callback URL** on the **LINE Login tab** of the LINE Login channel in the [LINE Developers Console](../../../console.md). For more information on how to set the **Callback URL**, see [Getting started with LINE Login](../../../en/docs/line-login/getting-started.md).

| Check contents                                                                                                                                                                                                                                  | Related pages                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Is the URL schema specified in redirect_uri HTTPS? (Unless there is a specific reason not to specify it.)                                                                                                                                       | RFC6749 3.1.2.1. (opens new window)                                                     |
| Do you understand a valid URL as redirect_uri is one of the following URLs?URL that exactly matches the URL registered in the Callback URLURL registered in the Callback URL with optional query parameters added                               | RFC6749 3.1.2. (opens new window)Authenticating users and making authorization requests |
| Is there a query parameter that receives an arbitrary URL and redirects in the query parameter received by the URL registered in the Callback URL? If such a parameter exists, do you verify that Open Redirector vulnerability does not exist? | RFC6749 10.15 (opens new window)                                                        |
| Is the value specified in state randomly generated and unique in a cryptographically secure and unpredictable way, such as SecureRandom, and in a way that can't be predicted by third parties?                                                 | RFC6749 10.12. (opens new window)Authenticating users and making authorization requests |
| Is the value specified for state stored in a location inaccessible to a third party, such as follows?Server session informationCookies protected by the same-origin policy, etc                                                                 | RFC6749 10.12. (opens new window)                                                       |
| Is the different value specified for state each time a login is attempted, even if the same user tries to log in?                                                                                                                               | RFC6749 10.12. (opens new window)                                                       |

## [#](#check-receiving-the-authorization-code) Checklist for query parameters returned to the callback URL

The following checklist is for the query parameters returned to the callback URL. For more information on the query parameters returned to the callback URL, see [Receiving the authorization response or error response with a web app](../../../en/docs/line-login/integrate-line-login.md#receiving-the-authorization-code-or-error-response-with-a-web-app).

| Check contents                                                                                | Related pages                                                                                          |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Do you confirm that the value of state matches the state specified in the authentication URL? | RFC6749 10.12. (opens new window)Receiving the authorization response or error response with a web app |

## [#](#check-issue-access-token) Checklist for issuing the access token

The following checklist is for issuing the access token using the [LINE Login API](../../../en/reference/line-login.md). For more information on issuing the access token, see [Issue access token](../../../en/reference/line-login.md#issue-access-token) and [Managing authorized apps](../../../en/docs/line-login/managing-access-tokens.md).

| Check contents                                                                                                                          | Related pages                               |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Do you understand that the channel secret you specify in client_secret is confidential information and can't be known by third parties? | OpenID Connect 1.0 16.19 (opens new window) |

## [#](#check-using-id-tokens-access-token) Checklist for using ID tokens and access tokens

The following checklist is for using the ID tokens and access tokens issued by the LINE Platform. For more information on issuing ID tokens and access tokens, see [Get profile information from ID tokens](../../../en/docs/line-login/verify-id-token.md) and [Managing authorized apps](../../../en/docs/line-login/managing-access-tokens.md).

| Check contents                                                                                                                                                                                                                                                           | Related pages                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| Have you verified ID tokens and access tokens?                                                                                                                                                                                                                           | Verify access token validityVerify ID token |
| Have you checked the values of the client_id and expires_in properties meet the following conditions, after successfully verifying the access token?client_id: Same value as the channel ID of the LINE Login channel linked to the native appexpires_in: Positive value | Using access tokens to register new users   |

## [#](#check-using-id-tokens-access-token-backend) Checklist for sending ID tokens and access tokens to the backend server for processing

The following checklist is for user registration and login for using user information obtained by the LINE Platform. For more information on secure user registration and concepts of the login process, see [Creating a secure login process between your app and server](../../../en/docs/line-login/secure-login-process.md).

| Check contents                                                                                                                                                                                                                                                | Related pages                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Have you sent the raw ID tokens or access tokens from the client to the backend server, instead of user IDs or other information?\* After using APIs that verify ID tokens and access tokens, the backend server can retrieve user IDs and other information. | Using access tokens to register new usersVerify access token validityVerify ID token |
| Have you verified ID tokens and access tokens that are sent from the client to the backend server?                                                                                                                                                            | Using access tokens to register new users                                            |

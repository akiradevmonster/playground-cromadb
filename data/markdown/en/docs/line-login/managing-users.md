---
title: 'Managing users | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/managing-users/'
---

## Table of Contents

[Getting user profiles](#get-profile)

[Logging out users](#logout)

# [#](#page-title) Managing users

This topic explains how to manage users who have logged in through the LINE Login API.

## [#](#get-profile) Getting user profiles

You can get profile information for users who have been identified by an [access token](../../../en/docs/line-login/managing-access-tokens.md). Profile information includes a user's ID, display name, profile image, and status message.

> [!warning]
> Check your access token's scope
>
> You need an access token with the `profile` scope to get a user's profile information. To learn more, see [Authenticating users and making authorization requests](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) and [Scopes](../../../en/docs/line-login/integrate-line-login.md#scopes).

Example request:

```
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

Example response:

```
{
  "userId":"U4af4980629...",
  "displayName":"Brown",
  "pictureUrl":"https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage":"Hello, LINE!"
}
```

To learn more, see [Get user profile](../../../en/reference/line-login.md#get-user-profile) in the LINE Login v2.1 API reference.

Identifying users for a service

Identify users by their [user IDs](../../../en/glossary.md#user-id). User IDs can't be changed.

Users can set a new display name, profile image, and status message at any time.

You can't identify users with this information.

Identifying users with ID tokens

You can get a user's profile information and email address using the ID token that you obtain along with their access token.

To learn more, see [Verify ID token](../../../en/reference/line-login.md#verify-id-token) in the LINE Login v2.1 API reference.

## [#](#logout) Logging out users

To create a better user experience, we recommend providing a way for users to log out of your app.

When a user has logged out of your app, revoke their [access token](../../../en/docs/line-login/managing-access-tokens.md) and delete all the user data in your app.

Example request to revoke an access token:

```
curl -v -X POST 'https://api.line.me/oauth2/v2.1/revoke' \
-H "Content-Type:application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

To learn more, see [Revoke access tokens](../../../en/reference/line-login.md#revoke-access-token) in the LINE Login v2.1 API reference.

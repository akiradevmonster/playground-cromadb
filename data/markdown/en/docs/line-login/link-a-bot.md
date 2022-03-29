---
title: 'Add a LINE Official Account as a friend when logged in (add friend option) | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/link-a-bot/'
---

## Table of Contents

[Displaying the option to add your LINE Official Account as a friend](#displaying-the-option-to-add-your-line-official-account-as-a-friend)

[Link a LINE Official Account with your channel](#link-a-line-official-account) [Redirect users to the LINE Login authorization URL with the bot_prompt query parameter](#redirect-users)

[Getting the friendship status of the user and the LINE Official Account](#getting-the-friendship-status-of-the-user-and-the-line-official-account)

[Use the friendship_status_changed query parameter](#use-friendship_status_changed) [Use the LINE Login API to get the friendship status](#use-line-login-api)

# [#](#page-title) Add a LINE Official Account as a friend when logged in (add friend option)

You can display an option to add the LINE Official Account as a friend when a user logs in to your app. This is called the **add friend option**. Specify the LINE Official Account to be added as a friend on the LINE Developers Console.

![Consent screen](/assets/img/consent-screen-with-bot-en.5c6b638f.png)

If the user enables **Add friend** on the above consent screen when logging in, the LINE Official Account will be added as a friend. For more information on creating bots, see [Messaging API overview](../../../en/docs/messaging-api/overview.md) in the Messaging API documentation.

## [#](#displaying-the-option-to-add-your-line-official-account-as-a-friend) Displaying the option to add your LINE Official Account as a friend

To display the option to add your LINE Official Account as a friend on the consent screen, configure the settings as below.

1. [Link a LINE Official Account with your channel](#link-a-line-official-account)
2. [Redirect users to the LINE Login authorization URL with the `bot_prompt` query parameter](#redirect-users)

### [#](#link-a-line-official-account) Link a LINE Official Account with your channel

Link a LINE Official Account with your LINE Login channel on the LINE Developers Console.

> [!warning]
> Note
>
> These conditions must be met for you to link a LINE Official Account to your LINE Login channel.
>
> - The Messaging API channel associated with the LINE Official Account belongs to the same provider as your LINE Login channel.
> - You are an administrator of both the LINE Login channel and the LINE Official Account.
>   - You can review the administrator privileges for a LINE Login channel with the [LINE Developers Console](../../../console.md).
>   - You can review the administrator privileges for a LINE Official Account with the [LINE Official Account Manager (opens new window)](https://manager.line.biz).

1. Log in to the [LINE Developers Console](../../../console.md) and click the provider that contains the channel for LINE Login.
2. Open your LINE Login channel settings.
3. On the **Basic settings** tab, under **Linked LINE Official Account**, click **Edit**.
4. Select the LINE Official Account you want users to add and click **Update**.

    You can select a LINE Official Account for which you have an administrator role.

    You can link only one LINE Official Account to a LINE Login channel.

### [#](#redirect-users) Redirect users to the LINE Login authorization URL with the `bot_prompt` query parameter

When you've finished linking a LINE Official Account with your channel, redirect users to the LINE Login authorization URL with the `bot_prompt` query parameter.

```
https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={CHANNEL_ID}&redirect_uri={CALLBACK_URL}&state={STATE}&bot_prompt={BOT_PROMPT}&scope={SCOPE_LIST}
```

These options are displayed depending on the `bot_prompt` query parameter.

| Value      | Description                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| normal     | Display the option to add a LINE Official Account as a friend in the consent screen.                     |
| aggressive | Opens a new screen with an option to add the LINE Official Account as a friend after the consent screen. |

![Screen to be displayed](/assets/img/bot-prompt-en.b97911dc.png)

Tip

For more information on query parameters other than `bot_prompt`, see [Making an authorization request](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

#### [#](#display-options-on-consent-screen) Display options on the consent screen

The option to add a LINE Official Account as a friend is displayed as follows according to the relationship between the user and the LINE Official Account.

| Friend relationship when consent screen is displayed | Options shown to the user                                                                                                                                    |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Not a friend                                         | Displays the option to add a LINE Official Account as a friend. The LINE Official Account is added as a friend if the user selects the option and continues. |
| Blocked                                              | Displays the option to unblock the LINE Official Account. The LINE Official Account is unblocked if the user selects the option and continues.               |
| Added as friend                                      | Shows that the user has added the LINE Official Account as a friend. No option is displayed to add the LINE Official Account as a friend.                    |

This option is selected by default if your provider is a certified provider

If the LINE Login channel is under the certified provider, the option on the consent screen that appears when `bot_prompt=normal` is selected by default.

![add-friend-option-on-certified-provider-en](/assets/img/add-friend-option-on-certified-provider-en.bdfda016.png)

For more information on certified providers, see [Certified provider](../../../en/docs/line-developers-console/overview.md#certified-provider) in the LINE Developers Console documentation.

## [#](#getting-the-friendship-status-of-the-user-and-the-line-official-account) Getting the friendship status of the user and the LINE Official Account

When using add friend option, you can get the friendship status between a user and the LINE Official Account linked to your LINE Login channel through one of these methods.

- [Use the `friendship_status_changed` query parameter](#use-friendship_status_changed)
- [Use the LINE Login API to determine the friendship status](#use-line-login-api)

### [#](#use-friendship_status_changed) Use the `friendship_status_changed` query parameter

If you specify the `bot_prompt` query parameter when you [make an authorization request](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request), the user is redirected to the callback URL with the `friendship_status_changed` query parameter once they have been authenticated and have authorized your app.

Example URL of the redirect target:

```
https://client.example.org/cb?code={CODE}&state={STATE}&friendship_status_changed={FRIENDSHIP_STATUS_CHANGED}
```

The `friendship_status_changed` query parameter can take the following values. For more information on the callback URL, see [Receiving the authorization code](../../../en/docs/line-login/integrate-line-login.md#receiving-the-authorization-code).

| Value | Description                                                                                                                                                                                                                                                                                   |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| true  | The friendship status of the user and the LINE Official Account changed during login. This occurs in one of these situations:User added the LINE Official Account as a friendUser unblocked the LINE Official Account                                                                         |
| false | The friendship status of the user and the LINE Official Account didn't change during login. This occurs in one of these situations:User already added the LINE Official Account as a friendUser didn't add the LINE Official Account as a friendUser didn't unblock the LINE Official Account |

> [!warning]
> Note
>
> `friendship_status_changed` query parameter isn't included if the consent screen with the option to add your LINE Official Account as a friend isn't displayed to the user.

### [#](#use-line-login-api) Use the LINE Login API to get the friendship status

You can use [the access token retrieved by your web app](../../../en/docs/line-login/integrate-line-login.md#get-access-token) to get the friendship status between a user and the LINE Official Account linked to your LINE Login channel.

Example request:

```
curl -v -X GET https://api.line.me/friendship/v1/status \
-H 'Authorization: Bearer {access token}'
```

Example response:

```
{
  "friendFlag": true
}
```

To learn more, see [Getting the friendship status of the user and the LINE Official Account](../../../en/reference/line-login.md#get-friendship-status) in the LINE Login v2.1 API reference.

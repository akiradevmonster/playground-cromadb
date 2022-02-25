---
title: 'Enabling the add friend option with the SDK | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/android-sdk/link-a-bot/'
---

## Table of Contents

[Setting the bot prompt parameter in the login request](#bot_prompt)

[Checking the friendship status between the user and the LINE Official Account](#get_friendship)

[Check the LineLoginResult object in the login response](#use-friendship_status_changed) [Use LINE Login to get friendship status](#use-line-login-api)

# [#](#page-title) Enabling the add friend option with the SDK

You can display an option to add the LINE Official Account as a friend when a user logs in to your app. This is called the **add friend option**. Developers can specify the LINE Official Account to be added as a friend.

Before getting started with the configuration, see [Add a LINE Official Account as a friend when logged in (add friend option)](../../../../en/docs/line-login/link-a-bot.md) in the LINE Login documentation to understand the add friend option and the following specifics:

- Linking a LINE Official Account with your channel on the LINE Developers Console
- The bot prompt parameter sent to the LINE Platform and its behavior
- The friendship status flag returned from the LINE Platform and its meaning

This topic explains how to enable these features related to the add friend option with the LINE SDK:

- [Setting the bot prompt parameter in the login request](#bot_prompt)
- [Checking the friendship status between the user and the LINE Official Account](#get_friendship)

## [#](#bot_prompt) Setting the bot prompt parameter in the login request

The following sample code shows how to set the `botPrompt` parameter when using the `LoginButton` widget.

```
...
LoginButton loginButton = rootView.findViewById(R.id.line_login_btn);

loginButton.setAuthenticationParams(new LineAuthenticationParams.Builder()
        .scopes(Arrays.asList(Scope.PROFILE))
        .botPrompt(BotPrompt.normal) // configure it here
        .build()
);
...
```

The following sample code shows how to set the `botPrompt` parameter when using the `LoginApi.getLoginIntent()` method.

```
Intent loginIntent = LineLoginApi.getLoginIntent(
    view.getContext(),
    Constants.CHANNEL_ID,
    new LineAuthenticationParams.Builder()
            .scopes(Arrays.asList(Scope.PROFILE))
            .botPrompt(BotPrompt.normal) // configure it here
            .build());

startActivityForResult(loginIntent, REQUEST_CODE);
```

For more information about the parameter values, see [LineAuthenticationParams.BotPrompt](../../../../en/reference/android-sdk/reference/com/linecorp/linesdk/auth/LineAuthenticationParams.BotPrompt.html.md) in the LINE SDK for Android reference.

## [#](#get_friendship) Checking the friendship status between the user and the LINE Official Account

You can check the friendship status between the user and the LINE Official Account using the following methods.

- [Check the `LineLoginResult` object in the login response](#use-friendship_status_changed): This method checks whether the friendship status has changed during login.
- [Use LINE Login to get friendship status](#use-line-login-api): This method gets the friendship status between the user and the LINE Official Account.

### [#](#use-friendship_status_changed) Check the `LineLoginResult` object in the login response

After successful login, the `LineLoginResult` object contains a boolean value that indicates whether the friendship status has changed. You can get the value with the `getFriendshipStatusChanged()` method.

The following conditions must be met to get the friendship status flag:

- The `botPrompt` parameter is specified with the `LineAuthenticationParams` object in the login request.
- The consent screen with the option to add your LINE Official Account as a friend is displayed to the user.

The following sample code shows how to get the friendship status from the `LineLoginResult` object.

```
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    ...

    LineLoginResult result = LineLoginApi.getLoginResultFromIntent(data);

    boolean friendshipStatusChanged = result.getFriendshipStatusChanged();

    ...
}
```

For more information about the return values, see [getFriendshipStatusChanged()](<../../../../en/reference/android-sdk/reference/com/linecorp/linesdk/auth/LineLoginResult.html.md#getFriendshipStatusChanged()>) in the LINE SDK for Android reference.

### [#](#use-line-login-api) Use LINE Login to get friendship status

Call the `LineApiClient.getFriendshipStatus()` method after the user has logged in to your app and an access token has been returned.

```
boolean isFriendToTheBot = lineApiClient.getFriendshipStatus();
```

For more information about the return values, see [getFriendshipStatus()](<../../../../en/reference/android-sdk/reference/com/linecorp/linesdk/api/LineApiClient.html.md#getFriendshipStatus()>) in the LINE SDK for Android reference.

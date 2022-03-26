---
title: 'How to handle auto login failure | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/how-to-handle-auto-login-failure/'
---

## Table of Contents

[Overview](#overview)

[When auto login on the LINE app fails](#case-auto-login-on-line-app-fails)

[Detecting auto login failure](#how-to-verify) [When auto login fails](#when-automatic-login-fails)

[When Universal Links or App Links don't work and the LINE app won't launch](#case-line-app-will-not-launch)

[Notes on making Universal Links work on iOS](#notes-on-universal-link)

# [#](#page-title) How to handle auto login failure

## [#](#overview) Overview

For web apps that have integrated LINE Login, [auto login](../../../en/docs/line-login/integrate-line-login.md#line-auto-login) may fail when private browsing is enabled. In addition, depending on the specifications of the user's OS, auto login may fail.

- [When auto login on the LINE app fails](#case-auto-login-on-line-app-fails)
- [When Universal Links or App Links don't work and the LINE app won't launch](#case-line-app-will-not-launch)

## [#](#case-auto-login-on-line-app-fails) When auto login on the LINE app fails

Auto login on the LINE app may fail when private browsing is enabled. If the login fails, the user is still be redirected to the callback URL with the `code` and `state` parameters.

In this case, the `code` parameter is an invalid value, so you can't issue an access token. Also, the `state` parameter doesn't match the value associated with the login session.

![auto-login-failure-case-1-en](/assets/img/auto-login-failure-case-1-en.ad4605e3.png)

This section explains how to detect auto login failures and examples of responses that should be displayed to users when login fails.

### [#](#how-to-verify) Detecting auto login failure

You can detect auto login failure using the `state` parameter explained in [Authenticating users and making authorization requests](../../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

When the login fails on the LINE app, this will lead to a mismatch between the value of the `state` parameter given to the callback URL and the value of the `state` parameter set in the authorization URL. Your web app design should take into account that auto login fails when there is a mismatch between the values of the `state` parameters.

Cases of "state" parameter mismatch

With LINE Login, a `state` parameter mismatch may occur due to attacks by third parties such as [Cross site request forgery (CSRF) (opens new window)](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12). Accordingly, it's impossible to determine whether the cause of the `state` parameter mismatch is auto login failure or an attack by a third party such as CSRF.

Therefore, when there is a `state` parameter mismatch, consider how to deal with the situation where the user unintentionally failed at auto login.

### [#](#when-automatic-login-fails) When auto login fails

In environments where auto login fails, if the user who failed LINE Login is prompted to reattempt with an authorization URL where auto login is enabled, the user will continue to fail at LINE Login repeatedly. In order to prevent continuous login failures, once auto login fails, you can use the `disable_auto_login` parameter to prompt the user to reattempt LINE Login with an authorization URL that has auto login disabled.

These are the two recommended responses.

- [Display an error message to users and prompt them to reattempt login](#recommended-to-log-in-again)
- [Redirect user to an authorization URL without auto login](#redirect-to-authorization-url)

#### [#](#recommended-to-log-in-again) Display an error message to users and prompt them to reattempt login

Display a login failure message to users and prompt them to reattempt login.

Since this screen is displayed [when automatic login fails](#when-automatic-login-fails), you need to disable auto login when prompting users to reattempt login. To disable auto login, set the `disable_auto_login` parameter to `true` in the query parameter of the authorization URL and redirect the user as follows.

```
`https://access.line.me/oauth2/v2.1/authorize?**disable_auto_login=true**&response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz`
```

We recommend including on this screen a link to the [I can't automatically log in to a website with LINE (opens new window)](https://help.line.me/line/ios/sp?lang=en&contentId=20020693) page (`https://help.line.me/line/ios/sp?lang=en&contentId=20020693`) from the LINE Help center.

The following is a sample screen that prompts the user to reattepmt login.

![Example of a screen that displays error messages to the user](/assets/img/auto-login-failure-message-en.0aec6a81.png)

#### [#](#redirect-to-authorization-url) Redirect users to an authorization URL without auto login

Directly redirect users who have failed auto login to the authorization URL where auto login has been disabled. By redirecting users directly, you can display the login screen without making the user aware that auto login has failed. To disable auto login, set the `disable_auto_login` parameter to `true` in the query parameter of the authorization URL and redirect the user as follows.

```
`https://access.line.me/oauth2/v2.1/authorize?**disable_auto_login=true**&response_type=code&client_id=1234567890&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%3Fkey%3Dvalue&state=12345abcde&scope=profile%20openid&nonce=09876xyz`
```

If you want to let users know in advance that a redirection will occur, you can display a redirection message.

The following is a sample screen displaying a redirect message.

<!-- 画像: ここに適切な代替テキストが必要です -->

## [#](#case-line-app-will-not-launch) When Universal Links or App Links don't work and the LINE app won't launch

We use [Universal Links (opens new window)](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/) and [App Links (opens new window)](https://developer.android.com/training/app-links) features to perform auto login on [external browsers](../../../en/glossary.md#external-browser).

Universal Links or App Links may not work in external browsers or in some in-app browsers, and auto login may not work. In this case, the LINE app won't launch and the [email address login](../../../en/docs/line-login/integrate-line-login.md#mail-or-qrcode-login) screen will appear on the external browser or on the in-app browser. This may happen depending on the specifications of the user's OS. Since the specifications of the OS aren't fully disclosed, it may be difficult for the LINE Platform to avoid the conditions under which auto login fails.

![auto-login-failure-case-2-en](/assets/img/auto-login-failure-case-2-en.ee93bf05.png)

### [#](#notes-on-universal-link) Notes on making Universal Links work on iOS

Universal Links may not work in the following cases:

- Redirects a user to an authorization URL by JavaScript.
- A user types the URL and goes directly to the authorization URL.

You may be able to work around the problem of Universal Links not working by attending to the above. For example, let users tap a button to go to the authorization URL and start the login process.

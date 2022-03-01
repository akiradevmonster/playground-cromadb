---
title: 'LINE SDK for Android overview | LINE Developers'
description: 'The LINE SDK for Android is the latest SDK that allows you to incorporate LINE Login features into your Android app.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/android-sdk/overview/'
---

## Table of Contents

[Features](#features)

[User authentication](#user-auth) [Utilizing user data with OpenID support](#utilize-user-data-openid-support) [API calls](#api-calls)

[Open-source SDK](#open-source-sdk)

[Using the LINE SDK](#using-line-sdk)

[Trying the sample app](#trying-starter-app)

[What's in this guide](#in-this-guide)

[Other resources](#other-resources)

# [#](#page-title) LINE SDK for Android overview

The LINE SDK for Android provides a modern way of implementing the LINE Platform APIs. The features included in this SDK will help you develop an Android app with an engaging and personalized user experience.

## [#](#features) Features

The LINE SDK for Android provides the following features.

### [#](#user-auth) User authentication

This feature allows users to log in to your service with their LINE accounts. With the help of the LINE SDK for Android, it has never been easier to integrate LINE Login into your app. Your users will automatically log in to your app without entering their LINE credentials if they are already logged in to LINE on their Android devices. This offers a great way for users to get started with your app without having to go through a registration process.

### [#](#utilize-user-data-openid-support) Utilizing user data with OpenID support

Once the user is authorized, you can get the user’s LINE profile. You can utilize the user's information registered in LINE without building your user system.

The LINE SDK supports the [OpenID Connect (opens new window)](https://openid.net/developers/how-connect-works/) 1.0 specification. You can get ID tokens that contain the user’s LINE profile when you retrieve the access token.

### [#](#api-calls) API calls

Use the methods included in the LINE SDK to get user profile information, log out users, and manage access tokens.

## [#](#open-source-sdk) Open-source SDK

The LINE SDK for Android is an open-source project. Visit [our repository (opens new window)](https://github.com/line/line-sdk-android) to check the provided code and samples.

## [#](#using-line-sdk) Using the LINE SDK

Follow these steps to use the LINE SDK with your Android app.

1. Create a channel.

    For more information, see [Getting started with LINE Login](../../../../en/docs/line-login/getting-started.md) in the LINE Login documentation.

2. Use the LINE SDK to add LINE Login support to your Android app.

    For more information, see [Integrating LINE Login with your Android app](../../../../en/docs/line-login-sdks/android-sdk/integrate-line-login.md).

    To learn more about using add friend option, see [Enabling the add friend option with the SDK](../../../../en/docs/line-login-sdks/android-sdk/link-a-bot.md).

3. Use LINE Login.

    To learn more about using LINE Login in your app, see [Managing users](../../../../en/docs/line-login-sdks/android-sdk/managing-users.md) and the [LINE SDK for Android reference](../../../../en/reference/android-sdk.md).

    To learn more about using LINE Login on your server, see [Managing access tokens](../../../../en/docs/line-login-sdks/android-sdk/managing-access-tokens.md) and the [LINE Login v2.1 API reference](../../../../en/reference/line-login.md).

### [#](#trying-starter-app) Trying the sample app

You can see how LINE Login works using our starter app. For more information, see [Trying the sample app](../../../../en/docs/line-login-sdks/android-sdk/try-line-login.md).

## [#](#in-this-guide) What's in this guide

This guide explains how to integrate the LINE SDK with your app and use the available API functions in the SDK from your app. See the following table for an overview of the topics that are discussed in this guide.

| Title                                        | Content                                                                                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LINE SDK for Android overview                | The SDK features and the high-level steps for using the SDK.                                                                                                 |
| Trying the sample app                        | How to run our sample app.                                                                                                                                   |
| Integrating LINE Login with your Android app | How to integrate the LINE SDK into your project and leverage LINE Login to improve your app's user experience.                                               |
| Enabling the add friend option with the SDK  | How to display an option to add the LINE Official Account as a friend to users and get the friendship status between the LINE Official Account and the user. |
| Managing users                               | How to get user profiles, use ID tokens to get user data, and log out users.                                                                                 |
| Managing access tokens                       | How to refresh and verify access tokens and get the current access token.                                                                                    |
| Handling errors                              | Errors returned by the SDK.                                                                                                                                  |
| LINE SDK v5 for Android reference            | Detailed information on the interfaces and classes available in the SDK.                                                                                     |

## [#](#other-resources) Other resources

You can access the following information from the [top page](../../../../en/docs/line-login-sdks/android-sdk.md) of the LINE SDK for Android guide.

| Title         | Content                          |
| ------------- | -------------------------------- |
| Release notes | SDK changelog.                   |
| Downloads     | Links to download the LINE SDKs. |

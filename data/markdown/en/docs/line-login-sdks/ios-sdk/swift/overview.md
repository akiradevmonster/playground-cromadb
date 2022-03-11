---
title: 'LINE SDK for iOS Swift overview | LINE Developers'
description: 'The LINE SDK for iOS Swift is the latest SDK that allows you to incorporate LINE Login features into your iOS app.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/overview/'
---

## Table of Contents

[Features](#features)

[User authentication](#user-auth) [Utilizing user data with OpenID support](#utilizing-user-data-openid-support) [API calls](#api-calls)

[Open-source SDK](#open-source-sdk)

[Using the LINE SDK](#using-line-sdk)

[Trying the starter app](#trying-starter-app)

[What's in this guide](#what-is-in-this-guide)

[Other resources](#other-resources)

# [#](#page-title) LINE SDK for iOS Swift overview

Developed in Swift, the LINE SDK for iOS Swift provides a modern way of implementing the LINE Platform APIs. The features included in this SDK will help you develop an iOS app with an engaging and personalized user experience.

## [#](#features) Features

The LINE SDK for iOS Swift provides the following features.

### [#](#user-auth) User authentication

This feature allows users to log in to your app or service with their LINE accounts. With the help of the LINE SDK for iOS Swift, it has never been easier to integrate LINE Login into your app. Your users will automatically log in to your app without entering their LINE credentials if they are already logged in to LINE on their iOS devices. This offers a great way for users to get started with your app without having to go through a registration process.

### [#](#utilizing-user-data-openid-support) Utilizing user data with OpenID support

Once the user is authorized, you can get the user’s LINE profile. You can utilize the user's information registered in LINE without building your user system.

The LINE SDK supports the [OpenID Connect (opens new window)](https://openid.net/developers/how-connect-works/) 1.0 specification. You can get ID tokens that contain the user’s LINE profile when you retrieve the access token.

### [#](#api-calls) API calls

Use the methods included in the LINE SDK to get user profile information, log out users, and manage access tokens.

## [#](#open-source-sdk) Open-source SDK

The LINE SDK for iOS Swift is an open-source project. Visit [our repository (opens new window)](https://github.com/line/line-sdk-ios-swift) to view the code and samples that we have provided for you to use.

## [#](#using-line-sdk) Using the LINE SDK

To use the LINE SDK with your iOS app, follow the steps below.

1. Create a channel.

    For more information, see [Getting started with LINE Login](../../../../../en/docs/line-login/getting-started.md) in the LINE Login documentation.

2. Use the LINE SDK to add LINE Login support to your iOS app.

    For more information, see [Setting up your project](../../../../../en/docs/line-login-sdks/ios-sdk/swift/setting-up-project.md) and [Integrating LINE Login with your iOS app](../../../../../en/docs/line-login-sdks/ios-sdk/swift/integrate-line-login.md).

3. Use LINE Login.

    To learn more about using LINE Login in your app, see [Managing users](../../../../../en/docs/line-login-sdks/ios-sdk/swift/managing-users.md) and the [LINE SDK for iOS Swift reference](../../../../../en/reference/ios-sdk-swift.md).

    To learn more about using LINE Login on your server, see [Managing access tokens](../../../../../en/docs/line-login-sdks/ios-sdk/swift/managing-access-tokens.md) and the [LINE Login v2.1 API reference](../../../../../en/reference/line-login.md).

### [#](#trying-starter-app) Trying the starter app

You can see how LINE Login works using our starter app. See [Trying the starter app](../../../../../en/docs/line-login-sdks/ios-sdk/swift/try-line-login.md).

## [#](#what-is-in-this-guide) What's in this guide

This guide explains how to integrate the LINE SDK with your app and use the available API functions in the SDK from your app. See the following table for an overview of the topics that are discussed in this guide.

| Title                                       | Content                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LINE SDK for iOS Swift overview             | The SDK features and the high-level steps for using the SDK.                                                                                                 |
| Trying the starter app                      | How to run our starter app.                                                                                                                                  |
| Setting up your project                     | How to integrate the LINE SDK into your project.                                                                                                             |
| Integrating LINE Login with your iOS app    | How to leverage LINE Login to improve your app's user experience.                                                                                            |
| Enabling the add friend option with the SDK | How to display an option to add the LINE Official Account as a friend to users and get the friendship status between the LINE Official Account and the user. |
| Managing users                              | How to get user profiles, use ID tokens to get user data, and log out users.                                                                                 |
| Managing access tokens                      | How to refresh and verify access tokens and get the current access token.                                                                                    |
| Handling errors                             | How to handle errors returned by the SDK.                                                                                                                    |
| Using the SDK with Objective-C code         | How to integrate the LINE SDK for iOS Swift into your Objective-C project.                                                                                   |
| Upgrading the SDK                           | How to upgrade from the LINE SDK v4.1 for iOS to the LINE SDK v5 for iOS Swift.                                                                              |
| LINE SDK v5 for iOS Swift reference         | Detailed information on the protocols and classes available in the SDK.                                                                                      |

## [#](#other-resources) Other resources

You can find the following information on the [top page](../../../../../en/docs/line-login-sdks/ios-sdk.md) of the LINE SDK for iOS guide.

| Title         | Content                          |
| ------------- | -------------------------------- |
| Release notes | SDK changelog.                   |
| Downloads     | Links to download the LINE SDKs. |

---
title: 'Setting up your project | LINE Developers'
description: 'Set up your Unity project settings and development environment before trying LINE SDK for Unity.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/project-setup/'
---

## Table of Contents

[Unity requirements](#unity-requirements)

[Installation on iOS](#installation-on-ios)

[Installation on Android](#installation-on-android)

# [#](#page-title) Setting up your project

The LINE SDK for Unity provides an interface for using LINE SDK on either iOS or Android platform. To use LINE SDK in Unity Editor and export it to a platform, your development environment needs a few things.

## [#](#unity-requirements) Unity requirements

- Unity 2020.3.15 or later, with iOS and Android modules installed
- A valid subscription for Unity Personal, Unity Plus, or Unity Pro

## [#](#installation-on-ios) Installation on iOS

To integrate LINE SDK for Unity on iOS, you need:

- iOS 13.0 or higher as the deployment target
- Xcode 14.1 or higher

On iOS, LINE SDK for Unity works as a wrapper for the LINE SDK for iOS Swift. It adds the necessary libraries when you export your project to Xcode.

## [#](#installation-on-android) Installation on Android

You must have the Android SDK installed, because Unity will use it to build your project to the Android platform. If you have previously [configured Unity for Android development (opens new window)](https://docs.unity3d.com/Manual/android-sdksetup.html), you already have the Android SDK.

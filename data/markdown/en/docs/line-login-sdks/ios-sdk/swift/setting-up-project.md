---
title: 'Setting up your project | LINE Developers'
description: 'How to integrate the LINE SDK for iOS Swift into your project'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/setting-up-project/'
---

## Table of Contents

[Prerequisites](#prereqs)

[Installation](#installation)

[CocoaPods](#cocoapods) [Carthage](#carthage)

[Linking your app to your channel](#linking-app-to-channel)

[Configuring the Info.plist file](#config-infoplist-file)

# [#](#page-title) Setting up your project

This topic explains how to integrate the LINE SDK for iOS Swift into your iOS project and apply necessary configurations.

To make your app compatible with the latest iOS versions and make full use of its features, we strongly recommend you follow this installation guide and use the latest version of the LINE SDK for iOS Swift.

## [#](#prereqs) Prerequisites

To build and use the LINE SDK for iOS Swift, you need:

- A [provider](../../../../../en/glossary.md#provider) and a LINE Login channel. You can [create both](../../../../../console/register/line-login/channel.md) in the LINE Developers Console.
- iOS 13.0 or later as the deployment target
- Xcode 14.1 or later

Support earlier than iOS 13.0 as the deploy target

If you want to support earlier than iOS 13.0 as the deploy target, use an earlier version of the LINE SDK for iOS Swift. For more information, see [Releases (opens new window)](https://github.com/line/line-sdk-ios-swift/releases).

You can use the LINE SDK for iOS Swift with either Swift or Objective-C code. This guide assumes that you use Swift code to implement the LINE SDK for iOS Swift. To use Objective-C code to integrate the LINE SDK for iOS Swift, see [Using the SDK with Objective-C](../../../../../en/docs/line-login-sdks/ios-sdk/swift/using-objc.md).

## [#](#installation) Installation

The LINE SDK for iOS Swift is not compatible with previous LINE SDK for iOS Objective-C versions. If you are upgrading the version of the LINE SDK, see [Upgrading the SDK](../../../../../en/docs/line-login-sdks/ios-sdk/swift/migration-guide.md) before proceeding with the upgrade.

### [#](#cocoapods) CocoaPods

If you aren't familiar with CocoaPods, see [CocoaPods Getting Started Guide (opens new window)](https://guides.cocoapods.org/using/getting-started.html). You will need the CocoaPods gem installed on your machine before integrating the LINE SDK for iOS Swift into your app through CocoaPods.

1. Once your Podfile is prepared, add the pod command below to your target:

    ```
    platform :ios, '13.0'
    use_frameworks!

    target '<Your App Target Name>' do
        pod 'LineSDKSwift', '~> 5.0'
    end
    ```

2. Run the following command:

    ```
    pod install
    ```

The LINE SDK for iOS Swift will be downloaded and integrated into your Xcode workspace.

### [#](#carthage) Carthage

[Carthage (opens new window)](https://github.com/Carthage/Carthage) is a decentralized dependency manager that builds your dependencies and provides you with binary frameworks.

1. To install the Carthage tool, use [Homebrew (opens new window)](https://brew.sh/).

    ```
    brew update
    brew install carthage
    ```

2. To integrate the LINE SDK for iOS Swift into your Xcode project using Carthage, specify the GitHub repository of the SDK in your Cartfile as below:

    ```
    github "line/line-sdk-ios-swift" ~> 5.0
    ```

3. Run the following command to build the LINE SDK for iOS Swift:

    ```
    carthage update line-sdk-ios-swift
    ```

Now you can add the built `LineSDK.framework` file to your Xcode project by following the steps described in the following sections.

#### [#](#linking-linesdkframework-to-xcode-project) Linking the `LineSDK.framework` file to your Xcode project

Drag and drop the `LineSDK.framework` file from the `Carthage/Build/iOS` folder to the "Linked Frameworks and Libraries" section on your application target’s "General" settings tab.

![LINE SDK Framework file being moved from Finder to the Linked Frameworks and Libraries section in your app target.](/assets/img/install-link.1e97e790.png)

#### [#](#copying-linesdkframework-file-during-build-phase) Copying the `LineSDK.framework` file during the build phase

1. Click the **"+"** icon on your application target's "Build Phases" settings tab and choose **"New Run Script Phase"**. Create a run script with the following content:

    ```
    /usr/local/bin/carthage copy-frameworks
    ```

2. Add the path to the `LineSDK.framework` file under the "Input Files" section:

    ```
    $(SRCROOT)/Carthage/Build/iOS/LineSDK.framework
    ```

3. Add the path to the `LineSDK.framework` file under the "Output Files" section:

    ```
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDK.framework
    ```

The run script should look like this:

![Run script section expanded to show Shell, Input Files, Input File Lists, and Output Files.](/assets/img/install-carthage-copy.f85b165e.png)

## [#](#linking-app-to-channel) Linking your app to your channel

Linking your app to a LINE Login channel requires some configuration. On the [LINE Developers Console](../../../../../console.md), go to your LINE Login channel settings and complete the following fields on the **LINE Login** tab:

- **iOS bundle ID:** Bundle identifier of your app found in the "General" tab in your Xcode project settings. Must be lowercase. For example, `com.example.app`. You can specify multiple bundle identifiers by entering each one on a new line.
- **iOS universal link:** Enter the universal link configured for your app. For more information on how to handle the login process using a universal link, see [Using universal links](../../../../../en/docs/line-login-sdks/ios-sdk/swift/universal-links-support.md).

![LINE Login iOS bundle ID and universal link settings.](/assets/img/ios-app-settings.e48855b5.png)

## [#](#config-infoplist-file) Configuring the `Info.plist` file

In Xcode, right-click your app's `Info.plist` file and select **"Open As"** > **"Source Code"**. Insert the following snippet just before the last `</dict>` tag:

```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <!-- Specify URL scheme to use when returning from LINE to your app. -->
            <string>line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER)</string>
        </array>
    </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <!-- Specify URL scheme to use when launching LINE from your app. -->
    <string>lineauth2</string>
</array>
```

This snippet adds the following settings:

| Key                         | Description                                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CFBundleURLSchemes          | Use line3rdp.$(PRODUCT_BUNDLE_IDENTIFIER) to define the URL scheme needed to open your app. iOS stores this URL scheme for later reference. LINE Login uses this scheme to open your app after the LINE Platform returns a login result.Note: The URL scheme lineauth2 is already used to activate LINE. Do not use this scheme in CFBundleURLSchemes. |
| LSApplicationQueriesSchemes | Specify lineauth2 to allow launching of LINE from your app. The app will launch LINE as part of the login process.                                                                                                                                                                                                                                     |

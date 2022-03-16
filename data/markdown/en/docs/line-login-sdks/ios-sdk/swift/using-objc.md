---
title: 'Using the SDK with Objective-C code | LINE Developers'
description: 'Although the LINE SDK for iOS Swift is written in pure Swift, you can still use it in Objective-C projects without any knowledge of Swift. Follow this guide to find out how to integrate the LINE SDK for iOS Swift into an Objective-C project.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/using-objc/'
---

## Table of Contents

[Overview](#using-sdk-with-objc-overview)

[Option 1: Make a mixed-language project](#make-mixed-language-project)

[Option 2: Use the Objective-C wrapper](#use-wrapper)

[Installation](#installation) [Naming conventions](#naming-conventions) [Handling errors with the Objective-C wrapper](#handling-errors-with-objc-wrapper)

# [#](#page-title) Using the SDK with Objective-C code

## [#](#using-sdk-with-objc-overview) Overview

Although the LINE SDK for iOS Swift is written in pure Swift, you can still use it in Objective-C projects. There are two options to do so.

## [#](#make-mixed-language-project) Option 1: Make a mixed-language project

If you have some experience with Swift and Swift/Objective-C interoperability, we recommend that you integrate the LINE SDK for iOS Swift directly into your Objective-C project and use Swift to call the LINE SDK's APIs.

Any existing Objective-C project can be turned into a mixed-language project of Objective-C and Swift. You can add Swift files that interact with the LINE SDK for iOS Swift in a mixed-language project.

To use the necessary declarations from your Swift files with Objective-C, expose them with the `@objc` or `@objcMembers` attributes. For more information about these attributes, see [Attributes (opens new window)](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html#ID592) by Swift.org.

When you import Swift files into your project, Xcode automatically generates a bridging header file to expose those files to Objective-C code. For more information about the bridging header, see [Importing Swift into Objective-C (opens new window)](https://developer.apple.com/documentation/swift/importing-swift-into-objective-c) by Apple.

To understand how to make Swift classes available in an Objective-C project, we recommend these articles too:

- [Setting up Swift and Objective-C Interoperability (opens new window)](https://medium.com/ios-os-x-development/swift-and-objective-c-interoperability-2add8e6d6887) by [Jen Sipila (opens new window)](https://jen-sip.medium.com/): Especially, check the "Make a Swift Class available to Objective-C Files" section.
- [Migrating Your Objective-C Code to Swift (opens new window)](https://developer.apple.com/documentation/swift/migrating-your-objective-c-code-to-swift) by Apple: This article helps you to understand the whole process.

## [#](#use-wrapper) Option 2: Use the Objective-C wrapper

To use Objective-C code to interact with the LINE SDK for iOS Swift, use the Objective-C wrapper provided in the LINE SDK for iOS Swift. Unlike with option 1, you need to add the additional Objective-C wrapper framework to your project. This section covers basic concepts, installation, and common uses of the Objective-C wrapper.

The LINE SDK for iOS Swift is compatible only with Swift code. The Objective-C wrapper is implemented over the core SDK to make it compatible with Objective-C code and provide most of the core functionality from the LINE SDK for iOS Swift. Some features are not available with the Objective-C wrapper due to the limitations from the Objective-C specification that is not fully compatible with Swift.

The type names and most of the SDK components are prefixed with "LineSDK" to avoid potential naming conflicts with those of the original SDK. The wrapper also requires additional steps to set up.

Keep in mind that the wrapper is a temporary method to use the LINE SDK for iOS Swift. We recommend migrating your project to Swift to access the full functionality of the LINE SDK for iOS Swift.

### [#](#installation) Installation

#### [#](#prerequisites) Prerequisites

To build and use the LINE SDK for iOS Swift with the Objective-C wrapper, you need:

- iOS 11.0 or later as the deployment target.
- Xcode 10 or later.

#### [#](#cocoapods) CocoaPods

If you are not familiar with CocoaPods, see the [CocoaPods Getting Started Guide (opens new window)](https://guides.cocoapods.org/using/getting-started.html). You will need the CocoaPods gem installed on your machine before integrating the LINE SDK for iOS Swift into your app through CocoaPods.

1. Once your Podfile is prepared, add the pod command below to your target:

    ```
    platform :ios, '11.0'
    use_frameworks!

    target '<Your App Target Name>' do
        pod 'LineSDKSwift/ObjC', '~> 5.0'
    end
    ```

2. Run the following command:

    ```
    pod install
    ```

3. The LINE SDK for iOS Swift will be downloaded and integrated into your Xcode workspace.

##### [#](#importing-sdk) Importing the SDK

Add `@import LineSDK;` to import the LINE SDK for iOS Swift with the Objective-C wrapper into your Objective-C project as below:

```
#import "ViewController.h"
@import LineSDK;

@implementation ViewController
// ...
@end
```

#### [#](#carthage) Carthage

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

Now you can add the built `LineSDK.framework` and `LineSDKObjC.framework` files to your Xcode project by following the steps described in the following sections.

##### [#](#linking-framework-files-to-xcode-project) Linking the framework files to your Xcode project

Drag and drop the `LineSDK.framework` and `LineSDKObjC.framework` files from the `Carthage/Build/iOS` folder to the "Link Binary With Libraries" section on your application target’s "Build Phases" settings tab.

##### [#](#copying-framework-files-during-build-phase) Copying the framework files during the build phase

1. Click the **"+"** icon on your application target's "Build Phases" settings tab and choose **"New Run Script Phase"**. Create a run script with the following content:

    ```
    /usr/local/bin/carthage copy-frameworks
    ```

2. Add the path to the framework files under the "Input Files" section:

    ```
    $(SRCROOT)/Carthage/Build/iOS/LineSDK.framework
    $(SRCROOT)/Carthage/Build/iOS/LineSDKObjC.framework
    ```

3. Add the path to the framework files under the "Output Files" section:

    ```
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDK.framework
    $(BUILT_PRODUCTS_DIR)/$(FRAMEWORKS_FOLDER_PATH)/LineSDKObjC.framework
    ```

The "Build Phases" tab should look like this:

![iOS SDK Swift ObjC Link Build Phases tab, showing the Link Binary with Libraries, Copy Bundle Resources, and Run Script sub tabs.](/assets/img/install-carthage-objc.e23e64fa.png)

##### [#](#enable-always-embed-swift-standard-libraries) Enabling the "Always Embed Swift Standard Libraries" option

In the "Build Settings" setting tab, set the "Always Embed Swift Standard Libraries" (`ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES`) option to "YES" to include Swift standard libraries in your final app bundle.

##### [#](#import-sdk) Importing the SDK

Add `@import LineSDKObjC;` to import the LINE SDK for iOS Swift with the Objective-C wrapper into your Objective-C project as below:

```
#import "ViewController.h"
@import LineSDKObjC;

@implementation ViewController
// ...
@end
```

### [#](#naming-conventions) Naming conventions

When using the Objective-C wrapper, the type names and most of the SDK components are prefixed with "LineSDK". The following code samples show how to handle common tasks in Objective-C:

#### [#](#log-in-users-with-multiple-permissions) Logging in users with multiple permissions

```
NSSet *permissions = [NSSet setWithObjects:
                          [LineSDKLoginPermission profile],
                          [LineSDKLoginPermission openID],
                          nil];
[[LineSDKLoginManager sharedManager]
    loginWithPermissions:permissions
        inViewController:self
              parameters:nil
       completionHandler:^(LineSDKLoginResult *result, NSError *error) {
           if (result) {
               NSLog(@"User Name: %@", result.userProfile.displayName);
           } else {
               NSLog(@"Error: %@", error);
           }
       }
 ];
```

#### [#](#getting-user-profiles) Getting user profiles

```
[LineSDKAPI getProfileWithCompletionHandler:
    ^(LineSDKUserProfile * _Nullable profile, NSError * _Nullable error)
{
    if (profile) {
        NSLog(@"User Name: %@", profile.displayName);
    } else {
        NSLog(@"Error: %@", error);
    }
}];
```

### [#](#handling-errors-with-objc-wrapper) Handling errors with the Objective-C wrapper

To ensure compatibility with Objective-C conventions, the Objective-C wrapper throws `NSError` objects. The following code checks whether an error is related to the LINE SDK.

```
NSError *error = // ... An error from LINE SDK ObjC Wrapper
if ([error.domain isEqualToString:[LineSDKErrorConstant errorDomain]]) {
    // SDK Error
}
```

All the errors thrown by the wrapper have the same `code` and `userInfo` properties as those thrown by the original LINE SDK for iOS Swift. You can use them to find out the reason for errors.

```
if (error.code == 2004) {
    // invalidHTTPStatusAPIError
    NSNumber *statusCode = error.userInfo[[LineSDKErrorConstant userInfoKeyStatusCode]];
    if ([statusCode integerValue] == 403) {
        // Permission granting issue. Ask for authorization with enough permission again.
    }
}
```

To find out how to identify and handle errors, see [Handling errors](../../../../../en/docs/line-login-sdks/ios-sdk/swift/error-handling.md).

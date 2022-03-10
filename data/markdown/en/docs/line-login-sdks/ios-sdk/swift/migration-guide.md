---
title: 'Upgrading the SDK | LINE Developers'
description: 'Describes noticeable changes and migration steps from an earlier version of the LINE SDK to the current version'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/ios-sdk/swift/migration-guide/'
---

## Table of Contents

[Upgrading to the latest SDK](#upgrading-to-latest-sdk)

[Updating your code to use the latest SDK](#updating-code-to-use-latest-sdk)

[Getting user profiles](#getting-user-profiles) [Logging out users](#logging-out-users) [Getting the current access token](#getting-current-access-token) [Verifying access tokens](#verify-access-tokens)

# [#](#page-title) Upgrading the SDK

## [#](#upgrading-to-latest-sdk) Upgrading to the latest SDK

5.0.0 is the first version of the LINE SDK for iOS Swift. This version is not compatible with the [legacy Objective-C versions](../../../../../en/docs/line-login-sdks/ios-sdk/deprecated/objective-c-v41/overview.md). You need to change some of your code if you are upgrading to the LINE SDK for iOS Swift.

> [!warning]
> Note
>
> The new LINE SDK for iOS Swift is designed for Swift projects. However, you can still use the new SDK with Objective-C code. To learn how to use the SDK with Objective-C code, see [Using the SDK with Objective-C code](../../../../../en/docs/line-login-sdks/ios-sdk/swift/using-objc.md).

To upgrade the SDK, it is recommended to remove all code lines related to the old SDK and perform a clean installation by following the steps in [Setting up your project](../../../../../en/docs/line-login-sdks/ios-sdk/swift/setting-up-project.md), whether you are using a legacy version in either language. However, if you want to make changes based on your current implementation, here are some general steps:

1. Remove the old `LineSDK.framework` file from your code base.

    - If you used a package manager such as CocoaPods and Carthage, remove the "LineSDK" entry from your package definition file (Podfile or Cartfile). Then perform a clean installation to remove the reference to the `LineSDK.framework` file from your project.
    - If you used a downloaded binary, just remove it from your project.

2. Clean up your `Info.plist` file. You can safely remove the `LineSDKConfig` entry from the file as the entry is not needed anymore.
3. Install the LINE SDK for iOS Swift. For detailed steps, see [Setting up your project](../../../../../en/docs/line-login-sdks/ios-sdk/swift/setting-up-project.md).
4. Set up the channel ID and callback handling in the `AppDelegate` file.

    Call the `LoginManager.setup` method just after your app launches as below:

    ```
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Add this to your "didFinishLaunching" delegate method.
        LoginManager.shared.setup(channelID: "YOUR_CHANNEL_ID", universalLinkURL: nil)

        return true
    }
    ```

    Update the open URL handling as below:

    ```
    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
        return LoginManager.shared.application(app, open: url, options: options)
    }
    ```

## [#](#updating-code-to-use-latest-sdk) Updating your code to use the latest SDK

You are ready to update all the other lines of code so that you can use the latest LINE SDK. The following sections describe some common examples.

This section doesn't cover all of the SDK functionality. However, you can easily find the corresponding types in the LINE SDK as they follow similar conventions. Update your code to use the latest LINE SDK to make your project compile.

We provide a sample app which is compatible with the latest LINE SDK for iOS Swift. See our [open-source repository (opens new window)](https://github.com/line/line-sdk-ios-swift) to find out the basic integration methods and usage.

> [!warning]
> Logging in users into your app through LINE
>
> **Access tokens issued by the LINE SDK version 4.x are not usable with version 5.x.** If you upgrade the LINE SDK, all users need to log in again before your app can access the LINE Platform.

#### [#](#previous) Previous

```
// First set the delegate to the current object
LineSDKLogin.sharedInstance().delegate = self
LineSDKLogin.sharedInstance().start()

// MARK: LineSDKLoginDelegate

func didLogin(_ login: LineSDKLogin, credential: LineSDKCredential?, profile: LineSDKProfile?, error: Error?) {

    if let error = error {
        print("LINE Login Failed with Error: \(error.localizedDescription) ")
        return
    }

    print("LINE Login Succeeded")
}
```

#### [#](#now) Now

```
LoginManager.shared.login(permissions: [.profile]) {
    result in
    switch result {
    case .success(let loginResult):
        print("User name: \(loginResult.userProfile?.displayName ?? "nil")")
    case .failure(let error):
        print("Error: \(error)")
    }
}
```

### [#](#getting-user-profiles) Getting user profiles

#### [#](#previous-method) Previous

```
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.getProfile(queue: .main) {
    (profile, error) in

    if let error = error {
        print("Error getting profile \(error.localizedDescription)")
    }

    print(profile?.displayName ?? "none")
    print(profile?.pictureURL ?? "none")
    print(profile?.statusMessage ?? "none")
    print(profile?.userID ?? "none")
}
```

#### [#](#current-method) Now

```
API.getProfile { result in
    switch result {
    case .success(let profile):
        print("User name: \(profile.displayName)")
    case .failure(let error):
        print("Error: \(error)")
    }
}
```

### [#](#logging-out-users) Logging out users

#### [#](#previous-way) Previous

```
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.logout(queue: .main) {
    (success, error) in

    if success {
        print("Logout Succeeded")
    }
    else {
        print("Logout Failed \(error?.localizedDescription as String?)")
    }
}
```

#### [#](#current-way) Now

```
LoginManager.shared.logout { result in
    switch result {
    case .success:            print("Logout Succeeded")
    case .failure(let error): print("Logout Failed: \(error)")
    }
}
```

### [#](#getting-current-access-token) Getting the current access token

#### [#](#previous-process) Previous

```
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

let myToken = apiClient.currentAccessToken()
```

#### [#](#current-process) Now

```
let token = AccessTokenStore.shared.current?.value
```

### [#](#verify-access-tokens) Verifying access tokens

#### [#](#previous-action) Previous

```
var apiClient: LineSDKAPI
apiClient = LineSDKAPI(configuration: LineSDKConfiguration.defaultConfig())

apiClient.verifyToken(queue: .main) {
    (result, error) in

    if let error = error {
        print("Token is Invalid: \(error.localizedDescription)")
        return
    }

    guard let result = result, let permissions = result.permissions else {
        print("Response result is null")
        return
    }
    print("Token is Valid")
}
```

#### [#](#current-action) Now

```
API.Auth.verifyAccessToken { result in
    switch result {
    case .success: print("Token is valid.")
    case .failure(let error): print("Error: \(error)")
    }
}
```

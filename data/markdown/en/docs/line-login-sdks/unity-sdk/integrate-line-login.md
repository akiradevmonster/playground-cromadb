---
title: 'Integrating LINE Login with your Unity game | LINE Developers'
description: 'Using LINE Login to get authorization from your users.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login-sdks/unity-sdk/integrate-line-login/'
---

## Table of Contents

[Getting the SDK](#getting-the-sdk)

[Download from GitHub](#download-from-github) [Import into your project](#import-into-project)

[Add LineSDK prefab to your scene](#add-linesdk-prefab-to-your-scene)

[Update player settings](#update-player-settings)

[Settings for Android export](#settings-for-android-export) [Settings for iOS export](#settings-for-ios-export)

[Implement login with LINE](#implement-login-with-line)

# [#](#page-title) Integrating LINE Login with your Unity game

After you [set up your project](../../../../en/docs/line-login-sdks/unity-sdk/project-setup.md), you can start importing LINE SDK for Unity into your existing Unity game and leverage LINE Login to improve your app's user experience.

## [#](#getting-the-sdk) Getting the SDK

### [#](#download-from-github) Download from GitHub

To get the latest LINE SDK for Unity, download the `.unitypackage` file from our [GitHub Releases page (opens new window)](https://github.com/line/line-sdk-unity/releases).

### [#](#import-into-project) Import into your project

> [!warning]
> Note
>
> Before you import LINE SDK for Unity into your project, backup your project and/or store it in a version control system.

With your Unity project open, double-click on the downloaded `.unitypackage` file. Import everything in the package, as seen here:

![Import Unity package](/assets/img/importing.3420806b.png)

## [#](#add-linesdk-prefab-to-your-scene) Add LineSDK prefab to your scene

After importing the package, in your **Project** panel, you'll find a **LineSDK** prefab under `Assets/LineSDK/`. Drag it to the **Hierarchy** panel of the scene to which you want to add LINE Login:

![Add LineSDK prefab](/assets/img/adding-prefab.068a1f3e.png)

Then, click on the LineSDK GameObject in the scene, and update the **Channel ID** field with your LINE Login channel ID:

![Set Channel ID](/assets/img/setting-channel-id.b2106705.png)

Find your LINE Login channel ID in the [LINE Developers Console](../../../../console.md). If you don't have a channel yet, [create one](../../../../console/register/line-login/channel.md) in the LINE Developers Console. You'll also have to select or create a [provider](../../../../en/glossary.md#provider).

## [#](#update-player-settings) Update player settings

Before you continue to implement LINE Login or use LINE APIs in your game, follow the steps below to make sure your project player setting is correct.

### [#](#settings-for-android-export) Settings for Android export

1. Select **File > Build Settings**.
2. Click **Player Settings**.
3. Set **Company Name** and **Product Name** to the same value as **Package names** in your channel settings in the LINE Developers Console (**LINE Login** tab).
4. Select <!-- 画像: ここに適切な代替テキストが必要です --> > **Other Settings**.
5. Set **Package Name** to the same value as **Package names** in the **LINE Login** tab of your channel in LINE Developer Console.
6. Set **Minimum API Level** to at least **API level 19**.
7. Under **Publishing Settings**, enable **Custom Gradle Template**.

### [#](#settings-for-ios-export) Settings for iOS export

1. Select **File > Build Settings**.
2. Click **Player Settings**.
3. Select <!-- 画像: ここに適切な代替テキストが必要です --> > **Other Settings**.
4. Set **Bundle Identifier** to the same value as **iOS bundle ID** in the **LINE Login** tab of your channel in the LINE Developers Console.
5. Set **Target minimum iOS Version** to at least `11.0`.

For more about the dependency manager used in LINE SDK for Unity iOS, see [Setting up your project](../../../../en/docs/line-login-sdks/unity-sdk/project-setup.md).

## [#](#implement-login-with-line) Implement login with LINE

Now, you can implement login with LINE in the scene where the LineSDK (GameObject) exists. For example:

```
using Line.LineSDK;

public class MyController : MonoBehaviour {
    public void LoginButtonClicked() {
        var scopes = new string[] {"profile", "openid"};
        LineSDK.Instance.Login(scopes, result => {
            result.Match(
                value => {
                    Debug.Log("Login OK. User display name: " + value.UserProfile.DisplayName);
                },
                error => {
                    Debug.Log("Login failed, reason: " + error.Message);
                }
            );
        });
    }
}
```

LINE SDK for Unity supports only iOS and Android for now. It will always return an error if you run it in Unity Editor play mode. To test it, you need to export your scene to either an iOS or Android device.

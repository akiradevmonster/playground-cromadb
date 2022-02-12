---
title: 'Pluggable SDK | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/liff/pluggable-sdk/'
---

## Table of Contents

[What is the pluggable SDK](#what-is-pluggable-sdk)

[Use conditions of the pluggable SDK](#pluggable-sdk-use-conditions)

[How to use the pluggable SDK](#how-to-use)

[Import the liff object](#import-liff-object) [Activate the LIFF APIs](#activate-liff-api)

[Important points about the pluggable SDK](#important-points-about-pluggable-sdk)

[Example of correct execution of the liff.use() method](#correct-example) [Example of wrong execution of the liff.use() method](#wrong-example)

[LIFF API and the corresponding module list](#liff-api-and-module-list)

# [#](#page-title) Pluggable SDK

- [What is the pluggable SDK](#what-is-pluggable-sdk)
- [Use conditions of the pluggable SDK](#pluggable-sdk-use-conditions)
- [How to use the pluggable SDK](#how-to-use)
  - [Import the liff object](#import-liff-object)
  - [Activate the LIFF APIs](#activate-liff-api)
- [Important points about the pluggable SDK](#important-points-about-pluggable-sdk)
  - [Example of correct execution of the liff.use() method](#correct-example)
  - [Example of wrong execution of the liff.use() method](#wrong-example)
- [LIFF API and the corresponding module list](#liff-api-and-module-list)

## [#](#what-is-pluggable-sdk) What is the pluggable SDK

The pluggable SDK is a feature that allows you to choose which LIFF APIs to include in the LIFF SDK.

By including only the LIFF APIs used by your LIFF app, you can reduce the LIFF SDK file size by up to about 34%. As a result, you can improve the display speed of your LIFF app.

## [#](#pluggable-sdk-use-conditions) Use conditions of the pluggable SDK

The pluggable SDK is only available in the npm version of LIFF v2.22.0 or later. It's not available in the CDN version. For more information about using the npm package, see [Use the npm package](../../../en/docs/liff/developing-liff-apps.md#use-npm-package).

## [#](#how-to-use) How to use the pluggable SDK

The pluggable SDK can be used as follows:

- [Import the liff object](#import-liff-object)
- [Activate the LIFF APIs](#activate-liff-api)

### [#](#import-liff-object) Import the liff object

First, import the `liff` object from `@line/liff/core`.

```
import liff from "@line/liff/core";
```

This `liff` object includes only the following properties and methods:

- [`liff.id`](../../../en/reference/liff.md#id) property
- [`liff.ready`](../../../en/reference/liff.md#ready) property
- [`liff.init()`](../../../en/reference/liff.md#initialize-liff-app) method
- [`liff.getVersion()`](../../../en/reference/liff.md#get-version) method
- [`liff.use()`](../../../en/reference/liff.md#use) method

To use LIFF APIs other than those listed above, import the corresponding modules. In the following example, the corresponding modules are imported for the [`liff.getOS()`](../../../en/reference/liff.md#get-os) method and the [`liff.getAppLanguage()`](../../../en/reference/liff.md#get-app-language) method:

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";
```

For more information on the modules corresponding to each LIFF API, see [LIFF API and the corresponding module list](#liff-api-and-module-list).

### [#](#activate-liff-api) Activate the LIFF APIs

Next, pass the imported LIFF API modules to the `liff.use()` method to activate the LIFF APIs. Since the LIFF API modules are defined as classes, you must pass the instances to the `liff.use()` method.

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());
```

Once the LIFF APIs are activated, you can use the LIFF APIs.

In the example below, the activated `liff.getOS()` method and the `liff.getAppLanguage()` method are available, but the unactivated `liff.login()` method isn't available:

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";
import GetAppLanguage from "@line/liff/get-app-language";

liff.use(new GetOS());
liff.use(new GetAppLanguage());

liff.init({
  liffId: "123456-abcedfg",
});

liff.getOS(); // Available
liff.getAppLanguage(); // Available
liff.login(); // Not available
```

## [#](#important-points-about-pluggable-sdk) Important points about the pluggable SDK

Due to technical limitations, the `liff.use()` method should be executed before the `liff.init()` method. The execution of the `liff.use()` method after the `liff.init()` method isn't guaranteed to work.

### [#](#correct-example) Example of correct execution of the liff.use() method

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

// The liff.use() method is executed before the liff.init() method
liff.use(new GetOS());

liff.init({
  liffId: "123456-abcedfg",
});
```

### [#](#wrong-example) Example of wrong execution of the liff.use() method

```
import liff from "@line/liff/core";
import GetOS from "@line/liff/get-os";

liff.init({
  liffId: "123456-abcedfg",
});

// The liff.use() method is executed after the liff.init() method
liff.use(new GetOS());
```

## [#](#liff-api-and-module-list) LIFF API and the corresponding module list

| LIFF API                                                                                              | Module                                    |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| liff.getOS()                                                                                          | @line/liff/get-os                         |
| liff.getAppLanguage()                                                                                 | @line/liff/get-app-language               |
| liff.getLanguage() (deprecated)                                                                       | @line/liff/get-language                   |
| liff.getLineVersion()                                                                                 | @line/liff/get-line-version               |
| liff.getContext()                                                                                     | @line/liff/get-context                    |
| liff.isInClient()                                                                                     | @line/liff/is-in-client                   |
| liff.isLoggedIn()                                                                                     | @line/liff/is-logged-in                   |
| liff.isApiAvailable()                                                                                 | @line/liff/is-api-available               |
| liff.login()                                                                                          | @line/liff/login                          |
| liff.logout()                                                                                         | @line/liff/logout                         |
| liff.getAccessToken()                                                                                 | @line/liff/get-access-token               |
| liff.getIDToken()                                                                                     | @line/liff/get-id-token                   |
| liff.getDecodedIDToken()                                                                              | @line/liff/get-decoded-id-token           |
| liff.permission.query()liff.permission.requestAll()                                                   | @line/liff/permission                     |
| liff.getProfile()                                                                                     | @line/liff/get-profile                    |
| liff.getFriendship()                                                                                  | @line/liff/get-friendship                 |
| liff.openWindow()                                                                                     | @line/liff/open-window                    |
| liff.closeWindow()                                                                                    | @line/liff/close-window                   |
| liff.sendMessages()                                                                                   | @line/liff/send-messages                  |
| liff.shareTargetPicker()                                                                              | @line/liff/share-target-picker            |
| liff.scanCodeV2()                                                                                     | @line/liff/scan-code-v2                   |
| liff.scanCode() (deprecated)                                                                          | @line/liff/scan-code                      |
| liff.permanentLink.createUrlBy()liff.permanentLink.createUrl()liff.permanentLink.setExtraQueryParam() | @line/liff/permanent-link                 |
| liff.i18n.setLang()                                                                                   | @line/liff/i18n                           |
| liff.createShortcutOnHomeScreen()                                                                     | @line/liff/create-shortcut-on-home-screen |

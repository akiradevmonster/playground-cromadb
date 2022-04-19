---
title: 'Creating permanent links | LINE Developers'
description: 'Learn how to create a permanent link for your LINE MINI App.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/permanent-links/'
---

## Table of Contents

[Differences in domain names depending on the LINE app version](#difference-depends-on-app-version)

[If the user doesn't have LINE installed](#if-user-doesnt-have-line)

# [#](#page-title) Creating permanent links

Users can use not only LIFF URLs but also permanent links to access LINE MINI Apps. However, permanent links should be used instead of LIFF URLs for the purpose of sharing LINE MINI App pages.

When you share a LINE MINI App page using the action button in the [header](../../../../en/docs/line-mini-app/discover/ui-components.md#header), LINE automatically generates a permanent link of the page.

For every other instance, you need to create a permanent link yourself according to the following formula.

`LIFF URL + (LINE MINI App URL - Endpoint URL) = Permanent Link`

E.g.

| Item                          | Settings                                     |
| ----------------------------- | -------------------------------------------- |
| LIFF URL\*                    | <https://miniapp.line.me/123456-abcedfg>       |
| URL of the LINE MINI App page | <https://example.com/shop?search=shoes#item10> |
| Endpoint URL\*                | <https://example.com>                          |

\* You can find it on the **Web app settings** tab of the [LINE Developers Console](../../../../console.md).

In this case, the permanent link corresponding to the URL of the LINE MINI App page is as follows:

```
https://miniapp.line.me/123456-abcedfg/shop?search=shoes#item10
```

Tip

You can use raw path to your page, query parameters, and hash fragments in the URL of the LINE MINI App page.

> [!warning]
> LIFF URL for LINE MINI App has been changed
>
> As of [December 13, 2023](../../../../en/news/2023/12/13/change-of-liff-url-for-line-mini-app.md), the LIFF URL of the LINE MINI App has been changed to `https://miniapp.line.me/{liffId}`.
>
> If a user accesses existing `https://liff.line.me/{liffId}`, the LINE MINI App will also open. Therefore, you can continue to use the QR code that you've already issued.

## [#](#difference-depends-on-app-version) Differences in domain names depending on the LINE app version

When you share a LINE MINI App using the [action button](../../../../en/docs/line-mini-app/discover/builtin-features.md#action-button) in the header, the domain name of the permanent link generated differs depending on the version of the LINE app.

| LINE app version   | Example of URLs generated        |
| ------------------ | -------------------------------- |
| 13.20 or later     | <https://miniapp.line.me/{liffId}> |
| Earlier than 13.20 | <https://liff.line.me/{liffId}>    |

## [#](#if-user-doesnt-have-line) If the user doesn't have LINE installed

When a user that has LINE installed clicks on a permanent link, LINE takes the user to the exact page directed by the link. If a user doesn't have LINE installed, a web browser is opened, prompting the user to download LINE. When users install LINE, they can use the LINE MINI App.

However, if you enable **Redirect non-LINE users to a web browser** on the [LINE Developers Console](../../../../console.md), non-LINE users outside of Japan, Thailand and Taiwan can view the LINE MINI App services in an external browser. For more information, see [Redirect non-LINE users to a web browser](../../../../en/docs/line-mini-app/discover/custom-features.md#redirect-non-line-users-to-browser).

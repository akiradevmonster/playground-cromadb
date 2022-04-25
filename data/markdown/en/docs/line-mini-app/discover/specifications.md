---
title: 'Specifications | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/discover/specifications/'
---

## Table of Contents

[HTML5 Support](#html5-support)

[Support Media Formats](#support-media-formats) [HTML5 Support in the browser](#html5-support-in-browser)

[Supported Platforms and Versions](#supported-platforms-and-versions)

[Opening LINE MINI App in an external browser](#external-browser)

[Supported LIFF Versions](#supported-liff-versions)

# [#](#page-title) Specifications

This page explains the specs for developing a LINE MINI App.

- [HTML5 Support](#html5-support)
  - [Support Media Formats](#support-media-formats)
  - [HTML5 Support in the browser](#html5-support-in-browser)
- [Supported Platforms and Versions](#supported-platforms-and-versions)
  - [Opening LINE MINI App in an external browser](#external-browser)
- [Supported LIFF Versions](#supported-liff-versions)

## [#](#html5-support) HTML5 Support

When developing a LINE MINI App, you can use almost any [HTML5 (opens new window)](https://html.spec.whatwg.org/) specification. For example, you can use [Geolocation API (opens new window)](https://www.w3.org/TR/geolocation/) to acquire information regarding the user's location, and provide users with information on nearby shops. Most Map APIs that are compatible with HTML5 can be used, including the Google Maps API.

![mini_map_api](/assets/img/mini_map_api.e113821a.png)

### [#](#support-media-formats) Support Media Formats

Media formats supported by HTML5 are also supported by LINE MINI App. See these HTML5 Specifications:

- [img element (opens new window)](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)
- [Media element (opens new window)](https://html.spec.whatwg.org/multipage/media.html)

### [#](#html5-support-in-browser) HTML5 Support in the browser

This site is helpful in finding out how HTML5 is supported on an external browser:

- [https://caniuse.com (opens new window)](https://caniuse.com/)

## [#](#supported-platforms-and-versions) Supported Platforms and Versions

LINE MINI Apps are developed using [LIFF](../../../../en/docs/liff/overview.md). Therefore, the supported OS versions and LINE versions of LINE MINI App are based on the [Recommended operating environment](../../../../en/docs/liff/overview.md#operating-environment) of LIFF.

> [!warning]
> Note
>
> Supported versions are subject to change without notice.

### [#](#external-browser) Opening LINE MINI App in an external browser

In October 2025, LINE MINI Apps will be available in external browsers

We're planning to change the screen that is displayed when users open the LINE MINI App in an external browser. For more information, see the news from April 2, 2025, [In October 2025, all LINE MINI App users will be able to use the service in a web browser](../../../../en/news/2025/04/02/mini-app-browser.md).

If you open a LINE MINI App in an [external browser](../../../../en/glossary.md#external-browser), the following page will be displayed and you will be guided to open the LINE MINI App using LINE's smartphone app ([LIFF browser](../../../../en/glossary.md#liff-browser)).

![landing_page](/assets/img/landing_page.59014576.png)

However, if you enable **Redirect non-LINE users to a web browser** on the [LINE Developers Console](../../../../console.md), non-LINE users outside of Japan, Thailand and Taiwan can view the LINE MINI App services in an external browser. For more information, see [Redirect non-LINE users to a web browser](../../../../en/docs/line-mini-app/discover/custom-features.md#redirect-non-line-users-to-browser).

## [#](#supported-liff-versions) Supported LIFF Versions

LINE MINI Apps are developed using [LIFF](../../../../en/docs/liff/overview.md). The minimum version of the LIFF SDK available for use on LINE MINI App is v2.1.

LINE MINI App allows the use of all LIFF APIs provided by LIFF v2.1.x.

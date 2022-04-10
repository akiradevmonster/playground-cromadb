---
title: 'Creating a LINE MINI App icon | LINE Developers'
description: 'To guarantee the visibility and quality of the icon at all times, design your icon as a single symbol or wordmark.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/design/line-mini-app-icon/'
---

## Table of Contents

[The main locations for the LINE MINI App icon](#main-locations)

[Guidelines](#guidelines)

[\[Required\] Icon size](#icon-size) [\[Required\] Logo size](#logo-size) [\[Recommended\] Logo design](#logo-design) [\[Must not\] Use of the LINE MINI App logo](#use-of-line-mini-app-logo)

[How to upload an image for the icon](#how-to-upload)

[Creating from a template file in PSD format (optional)](#template)

[\[Recommended\] Icon color](#icon-color)

# [#](#page-title) Creating a LINE MINI App icon

The LINE MINI App icon is used in a variety of places, including the channel consent screen, the Home tab, LINE messages, and service messages. This page provides guidelines to follow when creating an icon, as well as instructions on how to upload an image for the icon.

- [The main locations for the LINE MINI App icon](#main-locations)
- [Guidelines](#guidelines)
- [How to upload an image for the icon](#how-to-upload)

## [#](#main-locations) The main locations for the LINE MINI App icon

The main locations for the LINE MINI App icon are as follows:

- [Channel consent screen](../../../../en/docs/line-mini-app/develop/configure-console.md#consent-screen-settings)
- [Home tab](../../../../en/docs/line-mini-app/discover/introduction.md#home-tab)
- [LINE messages](../../../../en/docs/line-mini-app/discover/introduction.md#line-message)
- [Service messages](../../../../en/docs/line-mini-app/develop/service-messages.md)

![channel-consent-screen-en](/assets/img/channel-consent-screen-en.7cb81215.png) ![home-tab-en](/assets/img/home-tab-en.997d9303.png) ![line-message-en](/assets/img/line-message-en.b06b0921.png) ![service-messages-en](/assets/img/service-messages-en.da29a89f.png)

## [#](#guidelines) Guidelines

The following are guidelines to follow when designing the icons for LINE MINI Apps. The icons may appear small, especially on mobile devices. Design your icons so that they are visible to users in any location.

- [\[Required\] Icon size](#icon-size)
- [\[Required\] Logo size](#logo-size)
- [\[Recommended\] Logo design](#logo-design)
- [\[Must not\] Use of the LINE MINI App logo](#use-of-line-mini-app-logo)

### [#](#icon-size) \[Required\] Icon size

The background area (BG SIZE) of the icon should be 130x130px.

<!-- 画像: ここに適切な代替テキストが必要です -->

### [#](#logo-size) \[Required\] Logo size

The minimum logo size (LOGO SIZE) must be 54x54px and the maximum must be 90x90px. We recommend that the logo size is between 54x54px and 76x76px.

![mini-icon-guideline-size-en](/assets/img/mini-icon-guideline-size-en.b788b957.png)

### [#](#logo-design) \[Recommended\] Logo design

To maintain the visibility and quality of the logo at all times, it should be designed as a stand-alone icon or wordmark.

![mini-icon-guideline-design](/assets/img/mini-icon-guideline-design.3ca06968.png)

### [#](#use-of-line-mini-app-logo) \[Must not\] Use of the LINE MINI App logo

Don't include the LINE MINI App logo shown below in your logo:

| Japanese | English |
| -------- | ------- |
|          |         |

## [#](#how-to-upload) How to upload an image for the icon

Upload an image for the icon from the **Channel icon** in the **Basic settings** tab of the [LINE Developers Console](../../../../console.md). The only file formats that can be used for an icon are PNG and JPEG.

The uploaded image for the icon is automatically cropped and the icon background is transparent. Make sure that the logo fits into the green square in the preview image.

![mini-icon-form-en](/assets/img/mini-icon-form-en.23eda9b1.png)

## [#](#template) Creating from a template file in PSD format (optional)

We provide a PSD template file that can be used to create an icon. Using the template file, the outline of the icon can be set. Setting the outline will make it easier to recognize the icon when it is placed in front of a background of the same color as the icon in the LINE app. Download the following template file (PSD format) before creating your icon.

[Download template file (PSD format) (opens new window)](https://vos.line-scdn.net/line-developers/docs/media/line-mini/icon_template_file.psd)

### [#](#icon-color) \[Recommended\] Icon color

When creating an icon based on the template file, specify the outline color according to the background color. At this point, it is recommended to select a background color type in the template file. Also, hide unused layers in the template file before saving.

![mini_icon_guideline_color](/assets/img/mini_icon_guideline_color.6187477d.png)

| Background color              | Outline color   | Outline opacity |
| ----------------------------- | --------------- | --------------- |
| White (#FFFFFF)               | Black (#000000) | 12%             |
| Black (#000000)Dark (#181818) | White (#FFFFFF) | 8%              |
| Other color                   | Black (#000000) | 8%              |

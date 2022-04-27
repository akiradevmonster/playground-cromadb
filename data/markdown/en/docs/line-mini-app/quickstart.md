---
title: 'Get started with LINE MINI App | LINE Developers'
description: 'An overview of the workflow for LINE MINI App development'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/quickstart/'
---

## Table of Contents

[Overall Process](#overall-process)

[Common Guidelines](#common-guidelines)

[Guideline per Role](#guideline-per-role)

[Guideline for Service Planners](#guideline-for-service-planners) [Guideline for Developers](#guideline-for-developers) [Guideline for Designers](#guideline-for-designers) [Guideline for Service Operators and Marketers](#guideline-for-service-operators-and-marketers)

# [#](#page-title) Get started with LINE MINI App

LINE MINI App is a web application that runs on LINE.

By utilizing this platform, developers can provide their services without developing a separate native app.

Likewise, users can use their LINE accounts to enjoy various services that run within LINE without having to download a separate app.

## [#](#overall-process) Overall Process

The overall process for developing and publishing a LINE MINI App is as follows:

1. Once you create a LINE MINI App channel, you can start [developing a LINE MINI App](../../../en/docs/line-mini-app/develop/develop-overview.md). At this stage, it'll be published as an unverified MINI App.
2. [Submit your LINE MINI App for Review](../../../en/docs/line-mini-app/submit/submission-guide.md).
3. If you pass the review, you'll be able to [provide your service](../../../en/docs/line-mini-app/service/service-operation.md) as a verified MINI App.

When creating a LINE MINI App channel, there may be restrictions depending on the conditions of the region to provide the service, etc. For more information, see [Precautions for LINE MINI App channel creation](../../../en/docs/line-mini-app/develop/develop-overview.md#precautions-for-channel-creation).

## [#](#common-guidelines) Common Guidelines

Check the overall workflow for developing a LINE MINI App, regardless of your role.

- [**Learn the basics of LINE MINI App**](../../../en/docs/line-mini-app/discover/introduction.md): Understand the standard built-in features that come with LINE MINI Apps and the custom features that you can implement yourself.
  - [Specifications](../../../en/docs/line-mini-app/discover/specifications.md)
  - [Built-in Features](../../../en/docs/line-mini-app/discover/builtin-features.md)
  - [Custom Features](../../../en/docs/line-mini-app/discover/custom-features.md)
  - [LINE MINI App Components](../../../en/docs/line-mini-app/discover/ui-components.md)

## [#](#guideline-per-role) Guideline per Role

Check the workflow for developing a LINE MINI App workflow, following the guideline provided per role.

### [#](#guideline-for-service-planners) Guideline for Service Planners

Here are the tasks you should be aware of if you are designing the service to provide via LINE MINI App.

- [**Check the LINE MINI App Policy** (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en) In the planning stage, take a look over the LINE MINI App Policy. Before submitting your LINE MINI App for review, make sure that your LINE MINI App abides by the LINE MINI App Policy.

### [#](#guideline-for-developers) Guideline for Developers

Here are the tasks you should be aware of if you are developing and implementing a LINE MINI App.

- [**Check the LINE MINI App Specifications**](../../../en/docs/line-mini-app/discover/specifications.md): Check which features are supported on which versions of which platforms, as well as the LIFF support versions.
- **Guideline for Developers**
  - [**Start developing**](../../../en/docs/line-mini-app/develop/develop-overview.md): Take time to read before developing a LINE MINI App.
  - [**Implement a custom action button**](../../../en/docs/line-mini-app/develop/share-messages.md): You can customize the share messages that are used for sharing LINE MINI App with your friends.
  - [**Sending a service message**](../../../en/docs/line-mini-app/develop/service-messages.md): You can send a service message as a confirmation or response to a user action.
  - [**Using a payment system**](../../../en/docs/line-mini-app/develop/payment.md): LINE Pay and other payment systems can be integrated with LINE MINI App to provide payment systems to users.
  - [**Creating a permanent link**](../../../en/docs/line-mini-app/develop/permanent-links.md): You can use the permanent link of the LINE MINI App so that users can immediately access your LINE MINI App.
  - [**Managing LINE MINI App settings on LINE Developers Console**](../../../en/docs/line-mini-app/develop/configure-console.md): LINE MINI App uses the data that has been configured on the LINE Developers Console, so be sure to configure accurate data on the LINE Developers Console.
  - [**Open a LINE MINI App in an external browser**](../../../en/docs/line-mini-app/develop/external-browser.md): Check the notes for opening the LINE MINI App in an external browser.
  - [**Check the performance guide**](../../../en/docs/line-mini-app/develop/performance-guidelines.md): We recommend that you look over the LINE MINI App Performance Guide.
- **API References**
  - [Service Message API](../../../en/reference/line-mini-app.md#service-messages)
  - [LIFF API](../../../en/reference/liff.md)
  - [LINE Pay API (opens new window)](https://pay.line.me/jp/developers/apis/onlineApis?locale=ja_JP)
- [**Submit a request for review**](../../../en/docs/line-mini-app/submit/submission-guide.md): Only those LINE MINI Apps acknowledged to have adhered to guidelines will become verified MINI Apps. To make your LINE MINI App a verified MINI App, submit an application for review.

### [#](#guideline-for-designers) Guideline for Designers

Here are the tasks you should be aware of if you are designing the LINE MINI App page.

- [**Create a LINE MINI App icon**](../../../en/docs/line-mini-app/design/line-mini-app-icon.md): Create an icon based on guidelines and configure the channel icon on the LINE Developers Console. For more information, see [Managing LINE MINI App settings on LINE Developers Console](../../../en/docs/line-mini-app/develop/configure-console.md).
- [**Check the safe area for landscape mode**](../../../en/docs/line-mini-app/design/landscape.md): To make every part of your LINE MINI App visible, even on devices with a notch, use CSS to contain LINE MINI App in safe area.
- [**Check your loading icon**](../../../en/docs/line-mini-app/design/loading-icon.md): The loading icon is a recommended UI element of the LINE MINI App. Use specified files.

### [#](#guideline-for-service-operators-and-marketers) Guideline for Service Operators and Marketers

Here are the tasks you should be aware of if you are running and promoting the service to provide via LINE MINI App.

- [**Check the Service Operation Guide**](../../../en/docs/line-mini-app/service/service-operation.md): For actual operational purposes, make sure you are aware of things like sharing your LINE MINI App via permanent links and sending service messages.
  - [Know-Hows for service providers](../../../en/docs/line-mini-app/service/service-operation.md)
  - [Re-review after updating your verified MINI App](../../../en/docs/line-mini-app/service/update-service.md)
  - [Utilizing the LINE Official Account](../../../en/docs/line-mini-app/service/line-mini-app-oa.md)

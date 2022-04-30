---
title: 'Submitting LINE MINI App | LINE Developers'
description: 'To make your LINE MINI App a verified MINI App, your application must be submitted to LY Corporation for review.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/submit/submission-guide/'
---

## Table of Contents

[Things to check prior to requesting review of your LINE MINI App](#review-request-checklist)

[Review Process](#review-process)

# [#](#page-title) Submitting LINE MINI App

When you create a LINE MINI App channel, the LINE MINI App is an unverified MINI App, and some features are restricted. To make the developed LINE MINI App a verified MINI App, it's necessary to undergo a review by LY Corporation. This page explains how to submit the review.

## [#](#review-request-checklist) Things to check prior to requesting review of your LINE MINI App

Prior to requesting review, check the following:

- Check whether your LINE MINI App adheres to all of the guidelines and rules.  
  In particular, check these guidelines and rules:
  - [LINE MINI App icon](../../../../en/docs/line-mini-app/design/line-mini-app-icon.md)
  - [Safe area for landscape mode](../../../../en/docs/line-mini-app/design/landscape.md)
  - [Loading icon](../../../../en/docs/line-mini-app/design/loading-icon.md)
  - [Implementing a custom action button](../../../../en/docs/line-mini-app/develop/share-messages.md)
  - [Performance guidelines](../../../../en/docs/line-mini-app/develop/performance-guidelines.md)
- Check whether your LINE MINI App adheres to the [LINE MINI App Policy (opens new window)](https://terms2.line.me/LINE_MINI_App?lang=en)
- Check whether the information you enrolled for the LINE MINI App Channel on the [LINE Developers Console](../../../../console.md) is accurate and up-to-date.
  - The provider name must be the same as the "service provider".
  - The correct service description must be provided in the [Channel description](../../../../en/docs/line-mini-app/discover/console-guide.md#channel-description).
  - In the privacy policy, the company for which user data is acquired must be set to the same company as the provider name.
- Check whether the the LIFF URL of the Published channel and the LIFF URL of the Review channel reflect the same service.
  - During review, LY Corporation checks the LIFF URL of the Review channel. The various settings within the channel and LIFF are automatically copied and reflected on the Review channel. However, make sure in advance that the LIFF URL of the Review channel reflects the same service as the LIFF URL of the Published channel.

## [#](#review-process) Review Process

The review process is as follows:

1. Enter the required information on the [LINE Developers Console](../../../../console.md) **Review request** tab and submit a request for review.

    Once LY Corporation completes the review process, the review results will be displayed on the [LINE Developers Console](../../../../console.md), as well as being sent to the email address you've registered on the LINE Developers Console.

    If you've restricted access to your LINE MINI App, which is the subject of the review, by using basic authentication, inform us of the username and password in the **Reference materials for the review** on **Review request** tab when you request a review. For more information, see [Use basic authentication to restrict access to your LINE MINI App before it is released](../../../../en/docs/line-mini-app/develop/develop-overview.md#use-basic-authentication).

    > [!warning]
    > Services that include actions such as reservations, payments, and orders
    >
    > For services that include actions such as reservations, payments, and orders, when submitting an application for review, you must enter test scenarios (accounts, products, stores, etc.) in **Reference materials for the review**.

    > [!warning]
    > Channel description
    >
    > The review by LY Corporation will be based on the information provided in the **Channel description** on the **Basic settings** tab in the [LINE Developers Console](../../../../console.md). For this reason, refer to the following example to provide the correct service details:
    >
    > |              | Channel name       | Channel description                                                                                                                      |
    > | ------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
    > | Bad example  | LINE FRIENDS STORE | LINE FRIENDS STORE is a store for LINE character goods.                                                                                  |
    > | Good example | LINE FRIENDS STORE | This is a mobile ordering service at the LINE FRIENDS STORE. You can order and pay in advance and receive your merchandise at the store. |
    >
    > For more information on **Channel description**, see [Channel description](../../../../en/docs/line-mini-app/discover/console-guide.md#channel-description).

    > [!warning]
    > On the Review Period
    >
    > It takes approximately 1-2 weeks for LY Corporation to complete its review process. If your application is rejected, it may take a few more days to re-apply and re-review. You can't specify the completion date of the review. Allow time to proceed with the review request.

    > [!warning]
    > Important points about the review
    >
    > - After requesting the review, you may cancel it from the **Cancel review request** button on the **Review request** tab, as long as the review process hasn't already begun.
    > - Once LY Corporation begins the review process, you cannot cancel your request or make changes to the information you entered.
    > - Once the review has begun and the status is "Reviewing", you can access the LIFF URL on the Review channel.

    When requesting review for multiple LINE MINI Apps

    When requesting review for multiple LINE MINI Apps (multiple for the same package, or multiple for the same brand, etc.) at the same time, we recommend following this workflow to avoid duplicating efforts and reduce review time.

    1. First, request review for one LINE MINI App.
    2. Once your LINE MINI App has been approved, make a request for batch review.

    The provider of a LINE MINI App channel that has passed review will be a certified provider

    If "Japan" is set to the **Region to provide the service** in the **Basic settings** tab on the [LINE Developers Console](../../../../console.md), when the LINE MINI App channel passes review, the provider will be a [certified provider](../../../../en/docs/line-developers-console/overview.md#certified-provider).

2. Enable search for your LINE MINI App.

    Once your LINE MINI App has been approved, the status of your channel will automatically change to "Approved" and immediately to "Reflected". Using the **Search enable** button from the **Review request** tab on the [LINE Developers Console](../../../../console.md), the user will be able to search for your LINE MINI App within LINE.

    Even if your status becomes "Reflected", users won't be able to search for your service yet because search hasn't been enabled within LINE.

    When you want to make your service searchable, click the **Search enable** button and users will be able to immediately search for your LINE MINI App in LINE. However, if **Search enable** isn't activated within 30 days (including weekends and holidays) after the status becomes "Reflected", search will automatically be enabled at 9:00 AM JST on the 31st day.

    For example, if your LINE MINI App status became "Reflected" on August 1, the "Search enable" feature will be automatically activated on 9:00 AM of August 31.

    Once the search for your LINE MINI App is enabled, the status of the LINE MINI App channel will return to "Not yet reviewed" and you'll be able to change the settings and resubmit for review. At this point, any changes to the settings won't affect the currently published LINE MINI App until it passes the review process again and the **Publish changes** button is clicked.

3. The workflow is slightly different if your LINE MINI App has already been published before.

    Once your LINE MINI App has been approved, the status of your channel will change to "Approved". Using the **Publish changes** button from the **Review request** tab on the [LINE Developers Console](../../../../console.md), you will have to manually change the status of your channel to "Reflected".

    Once your status becomes "Reflected", changes made at the time of the review request are updated in the Published channel and LIFF of the Published channel (e.g. LINE MINI App name, Channel settings, LIFF Settings, etc.).

    When you want to publish your LINE MINI App, click the **Publish changes** button and the status will immediately change to "Reflected". However, if **Publish changes** isn't activated within 30 days (including weekends and holidays) after status becomes "Approved", the changes will automatically be reflected on 9:00 AM JST on the 31st day.

    For example, if your LINE MINI App status became "Approved" on August 1, the new changes will be automatically activated on 9:00 AM of August 31.

    Once the new changes are activated, the status of the LINE MINI App channel will return to "Not yet reviewed" and you'll be able to change the settings and resubmit for review. At this point, any changes to the settings won't affect the currently published LINE MINI App until it passes the review process again and the **Publish changes** button is clicked.

> [!warning]
> There may be a slight delay in status change
>
> Although the status is supposed to be automatically changed at 9:00 AM JST on the 31st day, there may be a 1-2 hour delay. This is applicable for both LINE MINI Apps being published for the first time and previously published LINE MINI Apps.

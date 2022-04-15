---
title: 'Handling payments | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/payment/'
---

## Table of Contents

[LINE Pay](#line-pay)

[Preparing LINE Pay Merchant Account](#preparing-line-pay-merchant-account) [Developing a service that uses LINE Pay](#developing-service-that-uses-line-pay) [Testing LINE Pay](#testing-line-pay)

[Other payment methods](#other-payment-methods)

# [#](#page-title) Handling payments

Enable users to make transactions on your LINE MINI App with LINE Pay or other payment systems.

Tip

To avoid prompting users to enter credential information such as credit card numbers, we recommend that you use LINE Pay.

## [#](#line-pay) LINE Pay

### [#](#preparing-line-pay-merchant-account) Preparing LINE Pay Merchant Account

To use LINE Pay or LINE Checkout on LINE MINI App, you need a LINE Pay Merchant Account. If you don't have one yet, apply on the [LINE Pay's official website (opens new window)](https://pay.line.me/portal/jp/main).

### [#](#developing-service-that-uses-line-pay) Developing a service that uses LINE Pay

Once you acquire a LINE Pay Merchant account, integrate LINE Pay and LINE Checkout to your LINE MINI App. For more information on LINE Pay and LINE Checkout, see the [Online APIs documentation (opens new window)](https://pay.line.me/jp/developers/apis/onlineApis?locale=en_US) in LINE Pay Developers.

When using LINE Pay, the payment will be processed as follows:

1. When a user initiates a transaction on your LINE MINI App, the payment process on LINE Pay is launched.

    The screen displayed by LINE MINI App:  
    ![mini_linepay_flow01](/assets/img/mini_linepay_flow01.a8819a49.png)

2. The user confirms the payment details with LINE Pay and enters the LINE Pay authentication information.

    The screen displayed by LINE Pay:  
    ![mini_linepay_flow02](/assets/img/mini_linepay_flow02.677d26c9.png)

3. The order confirmation page is displayed.

    The screen displayed by LINE MINI App:  
    ![mini_linepay_flow03](/assets/img/mini_linepay_flow03.bf30275c.png)

### [#](#testing-line-pay) Testing LINE Pay

To test your payment process implementation, use the [sandbox provided by LINE Pay (opens new window)](https://pay.line.me/jp/developers/techsupport/sandbox/creation?locale=en_US). For more information on test instructions, see [How to use (opens new window)](https://pay.line.me/jp/developers/techsupport/sandbox/testflow?locale=en_US).

## [#](#other-payment-methods) Other payment methods

To offer other means of payment on your LINE MINI App, implement them as you would on ordinary web pages. However, you must design the process so that users are redirected to your LINE MINI App page after completing a transaction on an external domain or app.

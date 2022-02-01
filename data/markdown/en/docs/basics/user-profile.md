---
title: 'Get user profile information | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/basics/user-profile/'
---

## Table of Contents

[What is user profile information](#what-is-profile)

[Common Profile](#what-is-common-profile) [LINE Profile+](#what-is-line-profile-plus)

[How to get profile information](#how-to-get-profile)

[Types of profile information that can be obtained](#profile-information-types)

# [#](#page-title) Get user profile information

With the [Messaging API](../../../en/docs/messaging-api/overview.md), the [LINE Login](../../../en/docs/line-login/overview.md), the [LINE Front-end Framework (LIFF)](../../../en/docs/liff/overview.md), and the [LINE MINI App](../../../en/docs/line-mini-app/discover/introduction.md), you can obtain user profile information.

The types of profile information that can be obtained depend on the method used to obtain it. In addition, there is profile information that requires a separate application or contract in order to obtain, such as a user's email address and address.

This page explains the types of user profile information and how to obtain it.

- [What is user profile information](#what-is-profile)
  - [Common Profile](#what-is-common-profile)
  - [LINE Profile+](#what-is-line-profile-plus)
- [How to get profile information](#how-to-get-profile)
- [Types of profile information that can be obtained](#profile-information-types)

## [#](#what-is-profile) What is user profile information

Users can set their profile information, such as their name and profile picture, in the LINE app under **Settings** > **Profile**. For more information about the information that can be set in **Profile**, see [Your profile (opens new window)](https://help.line.me/line/smartphone/pc?lang=en&contentId=20000134) in the LINE Help Center.

![Users can set their profile information in the LINE app](/assets/img/my-profile-en.7d8396b3.png)

In addition to this **Profile**, there are also the following types of profile information:

- [Common Profile](#what-is-common-profile)
- [LINE Profile+](#what-is-line-profile-plus)

### [#](#what-is-common-profile) Common Profile

Common Profile is a profile that users create by combining the profile information they have registered with the LINE app or Yahoo! JAPAN. Users can set their Common Profile in the Account Center.

![Users can set their Common Profile in the Account Center](/assets/img/quick-fill-ja.22b14337.png)

For information about the Common Profile, see [Set Common Profile to use Quick-fill (opens new window)](https://guide.line.me/ja/services/quick-fill.html) (only available in Japanese) in the LINE user's guide.

### [#](#what-is-line-profile-plus) LINE Profile+

In addition to the usual profile information, users can also register additional information such as their address and phone number by going to **Settings** > **Profile** > **LINE Profile+** in the LINE app.

![Users can set additional profile information with LINE Profile+.](/assets/img/profile-plus-en.f28f5768.png)

With **LINE Profile+**, users can set the following information:

- Name (last name, first name, middle name, first name pronunciation, etc.)
- Gender
- Birthday (the information users registered in **Settings** > **Profile** > **Birthday** will also be displayed in LINE Profile+)
- Phone number (the information users registered in **Settings** > **Account** > **Phone number** will also be displayed in LINE Profile+)
- Email address (the information users registered in **Settings** > **Account** > **Email address** will also be displayed in LINE Profile+)
- Address (postal code, state, city, street address, etc.)

By registering this information in LINE Profile+, users can avoid having to manually enter their address, phone number, etc. when using LINE family apps or external services. For more information, see [LINE Profile+ (opens new window)](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20000134) (only available in Japanese) in the "Your profile" section of the LINE Help Center.

For more information on how to use profile information registered with LINE Profile+, see LINE Profile+ in the options for corporate customers documentation.

## [#](#how-to-get-profile) How to get profile information

On the LINE Platform, you can obtain user profile information using the following methods:

- Method 1: Get it from the [Get profile](../../../en/reference/messaging-api.md#get-profile) endpoint of the Messaging API
- Method 2: Get it from the [Get user information](../../../en/reference/line-login.md#userinfo) endpoint of LINE Login
- Method 3: Get it from the [Get user profile](../../../en/reference/line-login.md#get-user-profile) endpoint of LINE Login
- Method 4: Get it from the [payload](../../../en/docs/line-login/verify-id-token.md#payload) of the ID token of LINE Login
- Method 5: Get it from the [liff.getProfile()](../../../en/reference/liff.md#get-profile) method of LIFF
- Method 6: Get it from the [payload](../../../en/docs/line-login/verify-id-token.md#payload) using the [liff.getDecodedIDToken()](../../../en/reference/liff.md#get-decoded-id-token) method of LIFF
- Method 7: Get it using the Quick-fill feature of the LINE MINI App

Methods 1 to 6 allow you to obtain information from the LINE profile and LINE Profile+. Method 7 allows you to get information from the Common Profile.

You can only get the main profile information. You can't get the user's [subprofile](../../../en/glossary.md#subprofile).

For more information about the types of profile information that can be obtained using each method, see [Types of profile information that can be obtained](#profile-information-types).

## [#](#profile-information-types) Types of profile information that can be obtained

The types of profile information that can be obtained depend on the method used to obtain it.

The table below shows the types of profile information that can be obtained using methods 1 to 7, as explained in [How to get profile information](#how-to-get-profile).

scrollable

| Profile information | Method 1Get profileendpoint of Messaging API | Method 2Get user informationendpoint of LINE Login | Method 3Get user profileendpoint of LINE Login | Method 4Payload ofID token of LINE Login | Method 5liff.getProfile() | Method 6Payload ofliff.getDecodedIDToken() | Method 7Quick-fill ofLINE MINI App       |
| ------------------- | -------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | ---------------------------------------- | ------------------------- | ------------------------------------------ | ---------------------------------------- |
| User ID             | ✅ (userId)                                  | ✅ (sub)                                           | ✅ (userId)                                    | ✅ (sub)                                 | ✅ (userId)               | ✅ (sub)                                   | ❌                                       |
| Display name        | ✅ (displayName)                             | ✅ (name)                                          | ✅ (displayName)                               | ✅ (name)                                | ✅ (displayName)          | ✅ (name)                                  | ❌                                       |
| Profile image       | ✅ (pictureUrl)                              | ✅ (picture)                                       | ✅ (pictureUrl)                                | ✅ (picture)                             | ✅ (pictureUrl)           | ✅ (picture)                               | ❌                                       |
| Status message      | ✅ (statusMessage)                           | ❌                                                 | ✅ (statusMessage)                             | ❌                                       | ✅ (statusMessage)        | ❌                                         | ❌                                       |
| Language            | ✅ (language)                                | ❌                                                 | ❌                                             | ❌                                       | ❌                        | ❌                                         | ❌                                       |
| Email address       | ❌                                           | ❌                                                 | ❌                                             | ✅ (email)                               | ❌                        | ✅ (email)                                 | ✅ (email)                               |
| Name                | ❌                                           | ❌                                                 | ❌                                             | ✅ (given_name, family_name etc.)        | ❌                        | ✅ (given_name, family_name etc.)          | ✅ (given-name, family-name etc.)        |
| Gender              | ❌                                           | ❌                                                 | ❌                                             | ✅ (gender)                              | ❌                        | ✅ (gender)                                | ✅ (sex-enum)                            |
| Birthday            | ❌                                           | ❌                                                 | ❌                                             | ✅ (birthdate)                           | ❌                        | ✅ (birthdate)                             | ✅ (bday-year, bday-month etc.)          |
| Address             | ❌                                           | ❌                                                 | ❌                                             | ✅ (address)                             | ❌                        | ✅ (address)                               | ✅ (address-level1, address-level2 etc.) |
| Phone number        | ❌                                           | ❌                                                 | ❌                                             | ✅ (phone_number)                        | ❌                        | ✅ (phone_number)                          | ✅ (tel)                                 |

To obtain email addresses using method 4 and method 6, you must request permission to access the user's email address. For more information, see [Requesting permission to access the user's email address](../../../en/docs/line-login/integrate-line-login.md#applying-for-email-permission) in the LINE Login documentation.

In addition, to obtain the name, gender, birthday, address, and phone number using method 4 and method 6, you must apply for LINE Profile+, an option for corporate users. For more information about LINE Profile+, see LINE Profile+ in the options for corporate customers documentation.

To obtain profile information using method 7, you will need to apply to use the Quick-fill feature, which is an optional feature for corporate users. For more information about applying to use Quick-fill, see Overview of Quick-fill in the options for corporate customers documentation.

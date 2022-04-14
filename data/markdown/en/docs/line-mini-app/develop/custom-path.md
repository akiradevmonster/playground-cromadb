---
title: 'Configuring Custom Path | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/custom-path/'
---

## Table of Contents

[How to apply](#how-to-apply)

[If your service area is Japan](#area-is-japan) [If your service area is Taiwan or Thailand](#area-is-taiwan-or-thailand)

[Notes on applying for Custom Path](#note)

[String that can be used as a Custom Path](#note-constraint)

# [#](#page-title) Configuring Custom Path

This feature can only be used for verified MINI Apps

This feature is only available for verified MINI Apps.

Custom Path is a unique string that is set in the LIFF URL of published channel. The Custom Path feature allows you to set your own string in the LIFF URL as follows:

| Example URL with LIFF ID               | Example of setting Custom Path      |
| -------------------------------------- | ----------------------------------- |
| <https://miniapp.line.me/123456-abcdefg> | <https://miniapp.line.me/cony_coffee> |

For example, by setting a unique name as a Custom Path, users will be able to identify which brand or shop's LINE MINI App from the URL. Even when Custom Path is set, the URL by LIFF ID can still be accessed as before.

## [#](#how-to-apply) How to apply

If you use the Custom Path feature in your LINE MINI App, an application is required. The application differs depending on the area where the service is provided.

- [If your service area is Japan](#area-is-japan)
- [If your service area is Taiwan or Thailand](#area-is-taiwan-or-thailand)

### [#](#area-is-japan) If your service area is Japan

If your service area is Japan, to use the Custom Path feature, apply using the form below. Instructions on how to apply a Custom Path for multiple LINE MINI Apps at once can also be found in the form below (only available in Japanese).

[Application form (opens new window)](https://form.line.me/01JJ8V1B2858G8T4CCSYQYRQM5)

You will be notified of the confirmation of your application and the result of the review by email. It'll take 1-2 weeks from the time of application until the URL by Custom Path becomes available.

### [#](#area-is-taiwan-or-thailand) If your service area is Taiwan or Thailand

If you provide services in Taiwan or Thailand and would like to use the Custom Path feature, please contact your sales representative.

## [#](#note) Notes on applying for Custom Path

Even if a Custom Path is set, the LIFF URL with the Custom Path set won't be displayed on the [LINE Developers Console](../../../../console.md).

You can apply for a Custom Path before your LINE MINI App is reviewed. However, the Custom Path will only be set after the LINE MINI App have passed the review.

In principle, once a Custom Path has been set, it can't be changed.

### [#](#note-constraint) String that can be used as a Custom Path

The following restrictions apply to the string you enter when applying for a Custom Path. Take these restrictions into account when filling in the string.

- Must be a minimum of 4 characters and a maximum of 29 characters.
- Only single-byte alphanumeric characters (`a-z`, `0-9`) and underscore (`_`) are allowed.
- Underscore (`_`) can't be used as the last character.
- Can't be numeric characters only.
- Spaces are not allowed.
- Include a proper noun that identify the brand or service.
- Can't use the same strings as services provided by LY Corporation.
- Can't use strings that are already in use, including by others.
- Strings that we deem inappropriate may not be used.

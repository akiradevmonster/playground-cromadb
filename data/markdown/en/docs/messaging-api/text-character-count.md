---
title: 'Character counting in a text | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/text-character-count/'
---

# [#](#page-title) Character counting in a text

The Messaging API counts text characters in UTF-16 code units (16-bit). Characters made up of multiple code units (e.g. some Kanji characters, Unicode emojis) are counted as more than one character. For example, a Unicode emoji 🍎 is expressed in two code units. Thus 🍎 is two characters long, not one.

When the Messaging API counts a text that has a LINE emoji, the emoji placeholder (`$`) is replaced with the emoji's alternative text. Alternative text is the text displayed instead of the emoji on devices that can't display LINE emojis. Therefore, when sending a text message that has a LINE emoji, the text length may unintentionally exceed the maximum length and sending the message may fail. Note that LINE doesn't disclose the alternative text for LINE emojis.

However, the properties listed below are counted in [grapheme cluster (opens new window)](https://unicode.org/reports/tr29/) units, not in UTF-16 code units:

| Type                       | Property                       |
| -------------------------- | ------------------------------ |
| All action objects         | label                          |
| Postback action objects    | displayTextfillInTextlabeltext |
| Message action objects     | labeltext                      |
| Buttons template messages  | texttitle                      |
| Confirm template messages  | text                           |
| Carousel template messages | texttitle                      |
| Rich menu objects          | chatBarTextname                |

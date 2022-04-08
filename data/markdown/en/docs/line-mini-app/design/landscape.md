---
title: 'Safe area of LINE MINI App | LINE Developers'
description: 'To make every part of your LINE MINI App visible, even on devices with a notch, use CSS to contain LINE MINI App in safe area.'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/design/landscape/'
---

## Table of Contents

[For normal mode](#for-normal-mode)

[For landscape mode](#for-landscape-mode)

# [#](#page-title) Safe area of LINE MINI App

To make every part of your LINE MINI App visible, even on devices with a notch, we recommend to use CSS to contain LINE MINI App in safe area. LINE MINI App supports both normal mode and landscape mode. Normal mode and landscape mode require different safe areas.

Set the padding of the LINE MINI App page as follows:

- [For normal mode](#for-normal-mode)
- [For landscape mode](#for-landscape-mode)

## [#](#for-normal-mode) For normal mode

- Bottom: 34px

Example padding:

```
{
  padding-bottom: 34px;
}
```

<!-- 画像: ここに適切な代替テキストが必要です -->

## [#](#for-landscape-mode) For landscape mode

- Left and right: 44px
- Bottom: 21px

Example padding:

```
{
  padding-right: 44px;
  padding-bottom: 21px;
  padding-left: 44px;
}
```

![mini_design_safearea_landscape](/assets/img/mini_design_safearea_landscape.125ae7e4.png)

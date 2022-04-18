---
title: 'Performance guidelines | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-mini-app/develop/performance-guidelines/'
---

# [#](#page-title) Performance guidelines

To provide the best possible LINE MINI App experience to your users, take the performance of LINE MINI App into consideration.

A good reference regarding the importance of HTML5 performance, [Why does speed matter? (opens new window)](https://web.dev/learn/performance/why-speed-matters), can be found on web.dev.

For measuring performance, we recommend using performance measurement tools such as [Lighthouse (opens new window)](https://developer.chrome.com/docs/lighthouse/overview/) and [PageSpeed Insights (opens new window)](https://pagespeed.web.dev/), provided by Google.

LY Corporation recommends the following score.

| Performance measurement tool  | Score                     |
| ----------------------------- | ------------------------- |
| Lighthouse (opens new window) | Performance: 50 and above |

> [!warning]
> Note
>
> - Measure without executing LINE Login. When LINE Login is executed simultaneously, the performance of the LINE Login page is measured, preventing LINE MINI App's performance from being measured.
> - Be sure to measure in the production environment (real environment). Note that the network environment can affect the performance score.

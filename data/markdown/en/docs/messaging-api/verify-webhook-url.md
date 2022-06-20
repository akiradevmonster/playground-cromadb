---
title: 'Verify webhook URL | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/verify-webhook-url/'
---

## Table of Contents

[Verification method 1: Verify with the endpoint for webhook URL validation](#verify-method-01)

[Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console](#verify-method-02)

[Investigate the cause of webhook reception failure](#investigate-webhook-reception-failure)

# [#](#page-title) Verify webhook URL

If you're using Messaging API webhooks, we recommend that you use one of these methods to verify that the LINE Platform can communicate with the webhook URL (bot server).

- [Verification method 1: Verify with the endpoint for webhook URL validation](#verify-method-01)
- [Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console](#verify-method-02)

Return status code 200 for the communication request

The LINE Platform sends an HTTP POST request that doesn't include a webhook event to the webhook URL (bot server) to confirm communication. Design your bot server to return status code `200`.

Example HTTP POST request without a webhook event:

```
{
  "destination": "xxxxxxxxxx",
  "events": []
}
```

If the bot server didn't receive the webhook after verifying the webhook URL, [investigate the cause of webhook reception failure](#investigate-webhook-reception-failure).

## [#](#verify-method-01) Verification method 1: Verify with the endpoint for webhook URL validation

Verify the communication by using the endpoint for webhook URL test.

- [Test webhook endpoint](../../../en/reference/messaging-api.md#test-webhook-endpoint)

## [#](#verify-method-02) Verification method 2: Use the webhook URL's "Verify" button in the LINE Developers Console

In the [LINE Developers Console](../../../console.md), click the webhook URL's **Verify** button to perform the verification.

![send target](/assets/img/webhook-url-verify-button.99619dc0.png)

## [#](#investigate-webhook-reception-failure) Investigate the cause of webhook reception failure

If the bot server didn't receive the webhook after verifying the webhook URL, use the following methods to investigate the cause of webhook reception failure:

- Check the [response](../../../en/reference/messaging-api.md#test-webhook-endpoint-response) or [error response](../../../en/reference/messaging-api.md#test-webhook-endpoint-error-response) returned from the endpoint to test webhook URL
- [Check webhook error causes and statistics](../../../en/docs/messaging-api/check-webhook-error-statistics.md)
- Check [SSL/TLS specification of the webhook source](../../../en/docs/messaging-api/ssl-tls-spec-of-the-webhook-source.md)

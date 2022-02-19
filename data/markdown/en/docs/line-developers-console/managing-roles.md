---
title: 'Managing roles | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-developers-console/managing-roles/'
---

## Table of Contents

[Provider roles](#roles-for-provider)

[Adding developers, editing roles, and deleting developers on provider](#role-settings-for-provider)

[Channel roles](#roles-for-channel)

[Adding developers, editing roles, and deleting developers on channel](#role-settings-for-channel)

# [#](#page-title) Managing roles

By managing provider and channel roles, you can control the information that developers can view and edit on the [LINE Developers Console](../../../console.md). This page describes the types of roles that can be assigned to developers registered on providers and channels.

The provider and channel each have respective roles.

- [Provider roles](#roles-for-provider)
- [Channel roles](#roles-for-channel)

## [#](#roles-for-provider) Provider roles

A developer who is registered as a provider can be given either the Admin role or Member role.

It's possible to grant channel access to a developer without granting provider access. In this case, the developer's role in the provider will be "No role".

|                                          | Admin | Member | No role \*1 |
| ---------------------------------------- | ----- | ------ | ----------- |
| View provider name                       | ✅    | ✅     | ✅          |
| View provider ID                         | ✅    | ✅ \*2 | ✅ \*2      |
| Edit provider name                       | ✅    | ❌     | ❌          |
| Delete provider \*3                      | ✅    | ❌     | ❌          |
| View list of channels linked to provider | ✅    | ❌     | ❌          |
| Create a channel under provider          | ✅    | ❌     | ❌          |
| Add or delete developer to/from provider | ✅    | ❌     | ❌          |
| View or edit provider role settings      | ✅    | ❌     | ❌          |

\*1 Only with access to the channel linked to the provider.

\*2 Cannot view the **Provider settings** screen, but provider ID will be included in the URL when developer selects a provider.

\*3 Cannot delete a provider with existing channels.

> [!warning]
> On provider roles and channel roles
>
> Note the following points on provider roles and channel roles:
>
> - Even with the Admin role on the provider, without channel access, you can't see detailed information of the channel that is linked to the provider
> - Even if you grant provider access to a developer, the developer won't automatically be given access to the channel(s) linked to the provider
> - When deleting a developer from the provider, even if **Also delete the selected developer(s) from the channels that belong to this provider.** is checked, the developer won't be deleted from the channel(s) with the status "Pending"

What is the difference between "Member" and "No role" on the provider?

Both "Member" and "No role" on the provider can only view the provider name.

If you grant the Member role to a developer on a provider, you can add the developer to a channel linked to the provider, simply by clicking **Import from provider** on the **Roles** tab of the channel.

**Import from provider** is only available to a developer account with the Admin role both in the channel and the provider.

![Import from provider](/assets/img/managing-roles-en.fcf7f980.png)

### [#](#role-settings-for-provider) Adding developers, editing roles, and deleting developers on provider

Follow these steps to open the **Roles** tab.

1. Select provider from the [LINE Developers Console](../../../console.md) sidebar.
2. Click **Roles** tab.

    | Action | Steps                                                                                                                                                                                                                                                                                                             |
    | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Add    | Click Invite by email, register the email address, set the role of the developer, and then click Send invitation. The developer will receive an email with the title, "You have received an invitation to join a provider". If the developer accepts the invitation, the developer will be added to the provider. |
    | Edit   | Click Edit and then select a role from the dropdown list.                                                                                                                                                                                                                                                         |
    | Delete | Select the checkbox next to a member's name and click Delete selected.                                                                                                                                                                                                                                            |

## [#](#roles-for-channel) Channel roles

A developer can be given the Admin, Member, or Tester role on a channel.

|                                                                     | Admin | Member | Tester | No role |
| ------------------------------------------------------------------- | ----- | ------ | ------ | ------- |
| View basic information of the channel (Channel ID, icon, name etc.) | ✅    | ✅     | ✅     | ❌      |
| View Your user ID \*4                                               | ✅    | ✅     | ✅     | ❌      |
| Test on a channel set to "Developing" \*5                           | ✅    | ❌     | ✅     | ❌      |
| View statistics information                                         | ✅    | ✅     | ❌     | ❌      |
| Stop testing Feature                                                | ❌    | ❌     | ✅     | ❌      |
| Edit channel icon or channel name                                   | ✅    | ❌     | ❌     | ❌      |
| Delete channel \*6                                                  | ✅    | ❌     | ❌     | ❌      |
| Edit channel description                                            | ✅    | ❌     | ❌     | ❌      |
| View or edit channel settings                                       | ✅    | ❌     | ❌     | ❌      |
| Edit Privacy policy URL or Terms of Service                         | ✅    | ❌     | ❌     | ❌      |
| Edit email to which notifications about the channel are sent        | ✅    | ❌     | ❌     | ❌      |
| Add or delete developer to/from channel                             | ✅    | ❌     | ❌     | ❌      |
| View or edit channel roles                                          | ✅    | ❌     | ❌     | ❌      |

\*4 In either role, **Your User ID** won't be displayed for business account not linked to a LINE account. For more information, see [Available features](../../../en/docs/line-developers-console/login-account.md#available-features).

\*5 Only LINE Login, LINE MINI App, and Blockchain service channels display statuses. For testing methods after you've granted Tester access to your developer account in the LINE Login channel, see [How to test with a LINE Login channel with the "Developing" status](../../../en/docs/line-login/getting-started.md#how-to-test-login-channel).

\*6 You can't delete Blockchain Service and LINE MINI App channel.

### [#](#role-settings-for-channel) Adding developers, editing roles, and deleting developers on channel

Open the **Roles** tab of the channel on the [LINE Developers Console](../../../console.md).

| Action | Steps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add    | Click Invite by email, register the email address, set the role of the developer, and then click Send inivitaion. The developer will receive an email with the title, "You have received an invitation to join a channel". If the developer accepts the invitation, the developer will be added to the channel.Click Import from provider and select previously registered members under the same provider. The role is assigned to the developer immediately after you click Import. It isn't necessary for the developer to accept your invitation. |
| Edit   | Click Edit and select a role from the dropdown list.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Delete | Select the checkbox next to a member's name and click Delete selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

> [!warning]
> Restrictions on adding a developer with an Admin role in Messaging API channels
>
> If developer A is registered as an Admin in 100 Messaging API channels, developer A cannot be added as an Admin to Messaging API channels created by developer B, but can be added as a Member or Tester.
>
> This is because it conflicts with the "LINE Official Account Manager restrictions" described in [The number of channels that can be created](../../../en/docs/line-developers-console/overview.md#number-of-channels).

#### [#](#email-address-only-use-invitation) "The email address entered when sending an invitation" will be used only for the invitation

The email address you enter when clicking **Invite by email** will be used only for an invitation to the channel. The role specified at the time of the invitation will be granted to the developer account that logs in to the LINE Developers Console after clicking **Accept the invitation** in the email.

"The email address entered when sending an invitation" doesn't have to be the same as "the email address of the developer account to which a role is granted". Therefore, note that a role may be unintentionally granted to a developer account that is registered with an email address different from the one used for the invitation.

> [!warning]
> Note when you receive an invitation
>
> When receiving an invitation and granting a role to your developer account, take note of the following:
>
> - If you haven't logged in to the LINE Developers Console, log in to the LINE Developers Console with a developer account that should be given the role
> - If you've already logged in to the LINE Developers Console, make sure that the developer account you are logging in is the one which should be given the role

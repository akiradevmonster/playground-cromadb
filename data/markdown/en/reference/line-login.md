---
title: 'LINE Login v2.1 API reference | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/reference/line-login/'
---

## Table of Contents

[Common specifications](#common-specifications)

[Rate limits](#rate-limits) [Status codes](#status-codes) [Response headers](#response-headers)

[OAuth](#oauth)

[Issue access token](#issue-access-token) [Verify access token validity](#verify-access-token) [Refresh access token](#refresh-access-token) [Revoke access token](#revoke-access-token) [Deauthorize your app to which the user has granted permissions](#deauthorize) [Verify ID token](#verify-id-token) [Get user information](#userinfo)

[Profile](#profile)

[Get user profile](#get-user-profile)

[Friendship status](#friendship-status)

[Get friendship status](#get-friendship-status)

# [#](#page-title) LINE Login v2.1 API reference

## [#](#common-specifications) Common specifications

### [#](#rate-limits) Rate limits

If you send a large number of requests to the LINE Login API within a short period of time, and it is determined that it will affect the operation of the LINE Platform, we may temporarily restrict your requests. Refrain from sending large numbers of requests for any purpose, including load testing.

On rate limit thresholds

Rate limit thresholds for the LINE Login API are not disclosed.

### [#](#status-codes) Status codes

These HTTP status codes are returned after an API call. We follow the [HTTP status code specification (opens new window)](https://datatracker.ietf.org/doc/html/rfc7231#section-6) unless otherwise stated.

| Status code               | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| 200 OK                    | The request succeeded.                                                                                 |
| 400 Bad Request           | There was a problem with the request. Check the request parameters and JSON format.                    |
| 401 Unauthorized          | Check that the authorization header is correct.                                                        |
| 403 Forbidden             | You are not authorized to use the API. Confirm that your account or plan is authorized to use the API. |
| 413 Payload Too Large     | Request exceeds the max size of 2MB. Make the request smaller than 2MB and try again.                  |
| 429 Too Many Requests     | Temporarily restricting requests because rate-limit has been exceeded by a large number of requests.   |
| 500 Internal Server Error | There was a temporary error on the API server.                                                         |

### [#](#response-headers) Response headers

The following HTTP headers are included in LINE Login API responses:

| Response header   | Description                                   |
| ----------------- | --------------------------------------------- |
| x-line-request-id | Request ID. An ID is issued for each request. |

## [#](#oauth) OAuth

### [#](#issue-access-token) Issue access token

`POSThttps://api.line.me/oauth2/v2.1/token`

Issues access tokens.

The access tokens managed through the LINE Login API attest that an app has been granted permission to access user data (such as user IDs, display names, profile images, and status messages) saved on the LINE Platform.

LINE Login API calls require you to provide an access token or refresh token that was sent in an earlier response.

> [!warning]
> Note
>
> - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Issue access token](../../en/reference/line-login-v2.md#issue-access-token) in the v2.0 API reference.
> - As new LINE Login features are added and existing features are modified, the structure of the JSON objects in responses and ID tokens may change. These changes may cause properties to be added or ordered differently; whitespace and line breaks to be added or removed between elements; and the size of the data to vary. Design your backend to be tolerant of future payloads that are structured differently.

_Example request_

Shell

[Link](#)

```
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=authorization_code' \
-d 'code=1234567890abcde' \
--data-urlencode 'redirect_uri=https://example.com/auth?key=value' \
-d 'client_id=1234567890' \
-d 'client_secret=1234567890abcdefghij1234567890ab' \
-d 'code_verifier=wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'
```

#### [#](#issue-token-request-headers) Request headers

Content-Type

Required

application/x-www-form-urlencoded

#### [#](#issue-token-request-body) Request body

grant_type

String

Required

`authorization_code`

code

String

Required

[Authorization code](../../en/docs/line-login/integrate-line-login.md#receiving-the-authorization-code) received from the LINE Platform

redirect_uri

String

Required

Same value as `redirect_uri` specified in the [authorization request](../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request).

client_id

String

Required

Channel ID. Found in the [LINE Developers Console](../../console.md).

client_secret

String

Required

Channel secret. Found in the [LINE Developers Console](../../console.md).

code_verifier

String

Optional

A random 43-128 character string consisting of single-byte alphanumeric characters and symbols (e.g. `wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1`).

If your LINE Login implements PKCE, you can add this parameter to verify the validity of the `code_verifier` on the LINE Platform side before returning the access token.

For more information on how to implement PKCE, see [Implement PKCE for LINE Login](../../en/docs/line-login/integrate-pkce.md#how-to-integrate-pkce) in the LINE Login documentation.

#### [#](#issue-token-response) Response

Returns status code `200` and a JSON object with the following information.

access_token

String

Access token. Valid for 30 days.

expires_in

Number

Number of seconds until the access token expires.

id_token

String

[JSON Web Token (JWT) (opens new window)](https://datatracker.ietf.org/doc/html/rfc7519) with information about the user. This property is returned only if you requested the `openid` scope. For more information about ID tokens, see [Get profile information from ID tokens](../../en/docs/line-login/verify-id-token.md).

refresh_token

String

Token used to get a new access token (refresh token). Valid for 90 days after the access token is issued.

For more information, see [Refresh access token](#refresh-access-token).

scope

String

Permissions granted to the access token. For more information on scopes, see [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes).

Note that the `email` scope isn't returned as a value of the `scope` property even if access to it has been granted.

token_type

String

`Bearer`

_Example response_

JSON

[Link](#)

```
{
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw5YPs...",
  "expires_in": 2592000,
  "id_token": "eyJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "Aa1FdeggRhTnPNNpxr8p",
  "scope": "profile",
  "token_type": "Bearer"
}
```

### [#](#verify-access-token) Verify access token validity

Verifies if an access token is valid.

For general recommendations on how to securely handle user registration and login with access tokens, see [Creating a secure login process between your app and server](../../en/docs/line-login/secure-login-process.md) in the LINE Login documentation.

> [!warning]
> Note
>
> This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Verify access token validity](../../en/reference/line-login-v2.md#verify-access-token) in the LINE Login v2.0 API reference.

_Example request_

Shell

[Link](#)

```
curl -v -X GET \
'https://api.line.me/oauth2/v2.1/verify?access_token=eyJhbGciOiJIUzI1NiJ9.UnQ_o-GP0VtnwDjbK0C8E_NvK...'
```

#### [#](#verify-access-token-http-request) HTTP request

`GET https://api.line.me/oauth2/v2.1/verify`

#### [#](#verify-access-token-query-parameters) Query parameters

access_token

Required

Access token

#### [#](#verify-access-token-response) Response

If the access token is valid, a `200 OK` status code is returned with a JSON object that has the following information.

scope

String

Permissions granted to the access token. To learn more about scopes, see [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes).

client_id

String

Channel ID for which the access token is issued

expires_in

Number

Number of seconds until the access token expires.

_Example response_

JSON

[Link](#)

```
{
  "scope": "profile",
  "client_id": "1440057261",
  "expires_in": 2591659
}
```

#### [#](#verify-access-token-error-response) Error response

If the access token has expired, a `400 Bad Request` HTTP status code and a JSON response are returned.

_Example error response_

JSON

[Link](#)

```
{
  "error": "invalid_request",
  "error_description": "access token expired"
}
```

### [#](#refresh-access-token) Refresh access token

Gets a new access token using a refresh token.

A refresh token is returned along with an access token once user authentication is complete.

> [!warning]
> Note
>
> - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Refresh access token](../../en/reference/line-login-v2.md#refresh-access-token) in the LINE Login v2.0 API reference.
> - You can't use this to refresh a channel access token for the Messaging API.

_Example request_

Shell

[Link](#)

```
curl -v -X POST https://api.line.me/oauth2/v2.1/token \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'grant_type=refresh_token&refresh_token={your_refresh_token}&client_id={your_channel_id}&client_secret={your_channel_secret}'
```

#### [#](#refresh-token-http-request) HTTP request

`POST https://api.line.me/oauth2/v2.1/token`

#### [#](#refresh-token-request-headers) Request headers

Content-Type

Required

application/x-www-form-urlencoded

#### [#](#refresh-token-request-body) Request body

grant_type

String

Required

`refresh_token`

refresh_token

String

Required

The refresh token corresponding to the access token to be reissued. Valid for up to 90 days after the access token was issued. If the refresh token expires, you must prompt the user to log in again to generate a new access token.

client_id

String

Required

Channel ID. Found in the [LINE Developers Console](../../console.md).

client_secret

String

See description

Channel secret. Found in the [LINE Developers Console](../../console.md).

- Required for channels whose **App types** is only **Web app**.
- Ignored for channels whose **App types** is **Mobile app** and **Web app**.
- Ignored for channels whose **App types** is only **Mobile app**.

#### [#](#refresh-token-response) Response

If the access token is successfully refreshed, a new access token and refresh token are returned.

access_token

String

Access token. Valid for 30 days.

token_type

String

`Bearer`

refresh_token

String

Refresh token you specified for the `refresh_token` property when requesting to reissue an access token. Getting a new access token won't extend the validity period of the refresh token.

expires_in

Number

Validity period of the access token. Expressed in the remaining number of seconds to expiry from when the API was called.

scope

String

Permissions obtained through the access token. For more information on scopes, see [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes).

_Example response_

JSON

[Link](#)

```
{
  "token_type": "Bearer",
  "scope": "profile",
  "access_token": "bNl4YEFPI/hjFWhTqexp4MuEw...",
  "expires_in": 2591977,
  "refresh_token": "8iFFRdyxNVNLWYeteMMJ"
}
```

#### [#](#refresh-token-error-response) Error response

If the refresh token has expired, a `400 Bad Request` HTTP status code and a JSON response are returned.

_Example error response_

JSON

[Link](#)

```
{
  "error": "invalid_grant",
  "error_description": "invalid refresh token"
}
```

### [#](#revoke-access-token) Revoke access token

Invalidates a user's access token.

> [!warning]
> Note
>
> - This is the reference for the LINE Login v2.1 endpoint. For information on the v2.0 endpoint, see [Revoke access token](../../en/reference/line-login-v2.md#revoke-access-token) in the LINE Login v2.0 API reference.
> - You can't use this to invalidate a channel access token for the Messaging API.

_Example request_

Shell

[Link](#)

```
curl -v -X POST https://api.line.me/oauth2/v2.1/revoke \
-H "Content-Type: application/x-www-form-urlencoded" \
-d "client_id={channel id}&client_secret={channel secret}&access_token={access token}"
```

#### [#](#revoke-token-http-request) HTTP request

`POST https://api.line.me/oauth2/v2.1/revoke`

#### [#](#revoke-token-request-headers) Request headers

Content-Type

Required

application/x-www-form-urlencoded

#### [#](#revoke-token-request-body) Request body

access_token

String

Required

Access token

client_id

String

Required

Channel ID. Found in the [LINE Developers Console](../../console.md).

client_secret

String

See description

Channel secret. Found in the [LINE Developers Console](../../console.md).

- Required for channels whose **App types** is only **Web app**.
- Ignored for channels whose **App types** is **Mobile app** and **Web app**.
- Ignored for channels whose **App types** is only **Mobile app**.

#### [#](#revoke-token-response) Response

Returns status code `200` and an empty response body.

### [#](#deauthorize) Deauthorize your app to which the user has granted permissions

Deauthorize your app on behalf of the user, revoking the permissions previously granted by the user. For more information, see the required matter "[Deauthorize your app when a user unregisters from your app](../../en/docs/line-login/development-guidelines.md#deauthorize)" in the [LINE Login development guidelines](../../en/docs/line-login/development-guidelines.md).

For more information about how a user can deauthorize apps to which the user has granted permissions, see [Managing authorized apps](../../en/docs/line-login/managing-authorized-apps.md) in the LINE Login documentation.

_Example request_

Shell

[Link](#)

```
curl -v -X POST https://api.line.me/user/v1/deauthorize \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d '{
    "userAccessToken": "{user access token}"
}'
```

#### [#](#deauthorize-http-request) HTTP request

`POST https://api.line.me/user/v1/deauthorize`

#### [#](#deauthorize-request-headers) Request headers

Authorization

Required

Bearer `{channel access token}`

The following types of channel access tokens are available:

- [Channel access token with a user-specified expiration (Channel access token v2.1)](../../en/docs/basics/channel-access-token.md#user-specified-expiration)
- [Stateless channel access token](../../en/docs/basics/channel-access-token.md#stateless-channel-access-token)

For more information about how to issue channel access tokens, see [Channel access token](../../en/docs/basics/channel-access-token.md) in the LINE Platform basics.

#### [#](#deauthorize-request-body) Request body

userAccessToken

String

Required

Access token of the target user

#### [#](#deauthorize-response) Response

Returns status code `204` and an empty response body.

#### [#](#deauthorize-error-response) Error response

Returns the following HTTP status code and an error response:

| Code | Description                                                                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | Invalid access token for the target user. Consider these reasons:The user has already deauthorized your app.You have already deauthorized your app on behalf of the user via the API. |

_Error response example_

JSON

[Link](#)

```
// If the access token for the target user is invalid (400 Bad Request)
{
  "message": "invalid token"
}
```

### [#](#verify-id-token) Verify ID token

ID tokens are JSON web tokens (JWT) with information about the user. It's possible for an attacker to spoof an [ID token](../../en/docs/line-login/verify-id-token.md#id-tokens). Use this call to verify that a received ID token is authentic, meaning you can use it to obtain the user's profile information and email.

_Example request_

Shell

[Link](#)

```
curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
-H 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
--data-urlencode 'client_id=1234567890'
```

#### [#](#verify-id-token-http-request) HTTP request

`POST https://api.line.me/oauth2/v2.1/verify`

#### [#](#verify-id-token-request-headers) Request headers

Content-Type

Required

application/x-www-form-urlencoded

#### [#](#verify-id-token-request-body) Request body

id_token

String

Required

ID token

client_id

String

Required

Expected channel ID. Unique identifier for your channel issued by the LINE Platform. Found in the [LINE Developers Console](../../console.md).

nonce

String

Optional

Expected `nonce` value. Use the `nonce` value provided in the authorization request. Omit if the `nonce` value was not specified in the authorization request.

user_id

String

Optional

Expected user ID. Learn how to get the user ID from [Get user profile](#get-user-profile).

#### [#](#verify-id-token-response) Response

The ID token payload is returned when the specified ID token is successfully verified.

iss

String

URL used to generate the ID token.

sub

String

User ID for which the ID token was generated.

aud

String

Channel ID

exp

Number

The expiration time of the ID token in UNIX time (in seconds).

iat

Number

Time when the ID token was generated in UNIX time (in seconds).

auth_time

Number

Time the user was authenticated in UNIX time (in seconds). Not included if the `max_age` value wasn't specified in the authorization request.

nonce

String

The `nonce` value specified in the authorization URL. Not included if the `nonce` value wasn't specified in the authorization request.

amr

Array of strings

A list of authentication methods used by the user. Not included in the payload under certain conditions.

One or more of:

- `pwd`: Log in with email and password
- `lineautologin`: LINE automatic login (including through LINE SDK)
- `lineqr`: Log in with QR code
- `linesso`: Log in with single sign-on
- `mfa`: Log in with two-factor authentication

name

String

User's display name. Not included if the `profile` scope wasn't specified in the authorization request.

picture

String

User's profile image URL. Not included if the `profile` scope wasn't specified in the authorization request.

email

String

User's email address. Not included if the `email` scope wasn't specified in the authorization request.

_Example response_

JSON

[Link](#)

```
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "nonce": "0987654asdf",
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456",
  "email": "taro.line@example.com"
}
```

#### [#](#verify-id-token-error-response) Error response

A JSON object is returned when the specified ID token fails to be verified.

| error_description                   | Description                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| Invalid IdToken.                    | The ID token is malformed or the signature is invalid.                                         |
| Invalid IdToken Issuer.             | The ID token was generated on a site other than "<https://access.line.me>".                      |
| IdToken expired.                    | The ID token has expired.                                                                      |
| Invalid IdToken Audience.           | The ID token's Audience value is different from the client_id specified in the request.        |
| Invalid IdToken Nonce.              | The ID token's Nonce value is different from the nonce specified in the request.               |
| Invalid IdToken Subject Identifier. | The ID token's SubjectIdentifier value is different from the user_id specified in the request. |

_Example error response_

JSON

[Link](#)

```
{
  "error": "invalid_request",
  "error_description": "Invalid IdToken."
}
```

### [#](#userinfo) Get user information

Gets a user's ID, display name, and profile image. The scope required for the access token is different for the [Get user profile](#get-user-profile) endpoint.

You can only get the main profile information. You can't get the user's [subprofile](../../en/glossary.md#subprofile).

> [!warning]
> Note
>
> Requires an access token with the `openid` scope. For more information, see [Authenticating users and making authorization requests](../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) and [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes) in the LINE Login documentation.

_Example request_

Shell

[Link](#)

```
curl -v -X GET https://api.line.me/oauth2/v2.1/userinfo \
-H 'Authorization: Bearer {access token}'
```

#### [#](#userinfo-http-request) HTTP request

`GET https://api.line.me/oauth2/v2.1/userinfo`

`POST https://api.line.me/oauth2/v2.1/userinfo`

#### [#](#userinfo-request-headers) Request headers

Authorization

Required

Bearer `{access token}`

#### [#](#userinfo-response) Response

sub

String

User ID

name

String

User's display name. Not included if the `profile` scope wasn't specified in the authorization request.

picture

String

User's profile image URL. Not included if the `profile` scope wasn't specified in the authorization request.

_Example response_

JSON

[Link](#)

```
{
  "sub": "U1234567890abcdef1234567890abcdef",
  "name": "Taro Line",
  "picture": "https://profile.line-scdn.net/0h8pWWElvzZ19qLk3ywQYYCFZraTIdAGEXEhx9ak56MDxDHiUIVEEsPBspMG1EGSEPAk4uP01t0m5G"
}
```

## [#](#profile) Profile

### [#](#get-user-profile) Get user profile

Gets a user's ID, display name, profile image, and status message. The scope required for the access token is different for the [Get user information](#userinfo) endpoint.

You can only get the main profile information. You can't get the user's [subprofile](../../en/glossary.md#subprofile).

> [!warning]
> Note
>
> Requires an access token with the `profile` scope. For more information, see [Authenticating users and making authorization requests](../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) and [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes) in the LINE Login documentation.

_Example request_

Shell

[Link](#)

```
curl -v -X GET https://api.line.me/v2/profile \
-H 'Authorization: Bearer {access token}'
```

#### [#](#get-profile-http-request) HTTP request

`GET https://api.line.me/v2/profile`

#### [#](#get-profile-request-headers) Request headers

Authorization

Required

Bearer `{access token}`

#### [#](#get-profile-response) Response

userId

String

User ID

displayName

String

User's display name

pictureUrl

String

Profile image URL. This is an HTTPS URL. It's only included in the response if the user has set a profile image.

Profile image thumbnails:

You can get a thumbnail version of a user's profile image by appending any of the following suffixes to their profile image URL.

| Suffix | Thumbnail size |
| ------ | -------------- |
| /large | 200 x 200      |
| /small | 51 x 51        |

e.g. `https://profile.line-scdn.net/abcdefghijklmn/large`

statusMessage

String

User's status message. Not included in the response if the user doesn't have a status message.

_Example response_

JSON

[Link](#)

```
{
  "userId": "U4af4980629...",
  "displayName": "Brown",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage": "Hello, LINE!"
}
```

## [#](#friendship-status) Friendship status

### [#](#get-friendship-status) Get friendship status

Gets the friendship status between a user and the LINE Official Account linked to your LINE Login channel.

For more information on how to use the add friend option, see [Add a LINE Official Account as a friend when logged in (add friend option)](../../en/docs/line-login/link-a-bot.md) in the LINE Login documentation.

_Example request_

Shell

[Link](#)

```
curl -v -X GET https://api.line.me/friendship/v1/status \
-H 'Authorization: Bearer {access token}'
```

#### [#](#get-friendship-status-http-request) HTTP request

`GET https://api.line.me/friendship/v1/status`

#### [#](#get-friendship-status-request-headers) Request headers

Authorization

Required

Bearer `{access token}`

> [!warning]
> Note
>
> Requires an access token with the `profile` scope. For more information, see [Authenticating users and making authorization requests](../../en/docs/line-login/integrate-line-login.md#making-an-authorization-request) and [Scopes](../../en/docs/line-login/integrate-line-login.md#scopes) in the LINE Login documentation.

#### [#](#get-friendship-status-response) Response

friendFlag

Boolean

- `true`: The user has added the LINE Official Account as a friend and has not blocked it.
- Otherwise, `false`.

_Example response_

JSON

[Link](#)

```
{
  "friendFlag": true
}
```

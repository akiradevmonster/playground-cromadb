---
title: 'Get profile information from ID tokens | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/line-login/verify-id-token/'
---

## Table of Contents

[Get an ID token](#get-an-id-token)

[About ID tokens](#id-tokens)

[Header](#header) [Payload](#payload) [Signature](#signature)

[Get profile information from an ID token](#get-profile-info-from-id-token)

# [#](#page-title) Get profile information from ID tokens

The LINE Platform issues ID tokens compliant with the [OpenID Connect (opens new window)](https://openid.net/developers/how-connect-works/) specification, allowing you to securely obtain user [profile information](../../../en/glossary.md#profile-information) (user ID, display name, profile picture, email address) from the LINE Platform.

If you have LINE Profile+ permission, you can also safely obtain data registered with [LINE Profile+](../../../en/glossary.md#line-profile-plus) (name, gender, birthday, phone number, address). For more information, see Get user data registered with LINE Profile+.

- [Get an ID token](#get-an-id-token)
- [About ID tokens](#id-tokens)
  - [Header](#header)
  - [Payload](#payload)
  - [Signature](#signature)
- [Get profile information from an ID token](#get-profile-info-from-id-token)

## [#](#get-an-id-token) Get an ID token

You can also get an ID token when you [get an access token](../../../en/docs/line-login/integrate-line-login.md#get-access-token).

You can also get an ID token with the LIFF app.

You can also use [liff.getIDToken()](../../../en/reference/liff.md#get-id-token) to get an ID token.

## [#](#id-tokens) About ID tokens

ID tokens are JSON web tokens (JWT) with information about the user. The ID token consists of a [header](#header), [payload](#payload), and [signature](#signature) separated by period (.) characters. Each part is a base64url-encoded value. For more information, see the [JWT (opens new window)](https://datatracker.ietf.org/doc/html/rfc7519) specification.

To ensure the security of your app, you should always validate the ID token using the signature. Unless the ID token is obtained directly from the LINE Platform, validate the ID token on the server.

To validate the ID token, write a verification code or use the [Verify ID token](../../../en/reference/line-login.md#verify-id-token) endpoint. For more information about using the endpoint to verify the ID token, see [Get profile information from an ID token](#get-profile-info-from-id-token).

### [#](#header) Header

These are the values included in the header.

| Property | Type   | Description                                                                                                                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| alg      | String | ID token signature algorithm. For native apps, LINE SDK, or LIFF apps, ES256 (ECDSA using P-256 and SHA-256) is returned, and for web login, HS256 (HMAC using SHA-256) is returned. |
| type     | String | Payload format. JWT is returned.                                                                                                                                                     |
| kid      | String | Public key ID. Included in a header only when the value of alg is ES256. For more information on the kid property, see the JSON Web Key (JWK) document (opens new window).           |

This is an example of a decoded header portion.

When `alg` is `HS256`:

```
{
  "typ": "JWT",
  "alg": "HS256"
}
```

When `alg` is `ES256`:

```
{
  "typ": "JWT",
  "alg": "ES256",
  "kid": "a2a459aec5b65fa..."
}
```

### [#](#payload) Payload

The user's information is found in the payload section. You can only get the main profile information. You can't get the user's [subprofile](../../../en/glossary.md#subprofile).

| Property  | Type             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iss       | String           | <https://access.line.me>. URL where the ID token is generated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| sub       | String           | User ID for which the ID token is generated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| aud       | String           | Channel ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| exp       | Number           | The expiration time of the ID token in UNIX time (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| iat       | Number           | Time when the ID token was generated in UNIX time (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| auth_time | Number           | Time when the user was authenticated in UNIX time (in seconds). Not included if the max_age parameter wasn't specified in the authorization request.                                                                                                                                                                                                                                                                                                                                                                            |
| nonce     | String           | The nonce value specified in the authorization URL. Not included if the nonce value was not specified in the authorization request.                                                                                                                                                                                                                                                                                                                                                                                             |
| amr       | Array of strings | List of authentication methods used by the user. Not included in the payload under certain conditions.Includes one or more of the values below:pwd: Log in with email and passwordlineautologin: LINE automatic login (including through LINE SDK)lineqr: Log in with QR codelinesso: Log in with single sign-onmfa: Log in with two-factor authenticationFor more information on user authentication, see User authentication. Also, for more information on two-factor authentication, see Require two-factor authentication. |
| name      | String           | User's display name. Not included if the profile scope was not specified in the authorization request.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| picture   | String           | User's profile image URL. Not included if the profile scope was not specified in the authorization request.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| email     | String           | User's email address. Not included if the email scope was not specified in the authorization request.                                                                                                                                                                                                                                                                                                                                                                                                                           |

This is an example of a decoded payload section.

```
{
  "iss": "https://access.line.me",
  "sub": "U1234567890abcdef1234567890abcdef ",
  "aud": "1234567890",
  "exp": 1504169092,
  "iat": 1504263657,
  "nonce": "0987654asdf",
  "amr": ["pwd"],
  "name": "Taro Line",
  "picture": "https://sample_line.me/aBcdefg123456"
}
```

### [#](#signature) Signature

The signature is a hashed value of a string of the base64url-encoded header and payload separated by period characters. It is used to prevent tampering with the ID token.

The hashing algorithm is specified by the `alg` property in the header. The key required to validate the ID token is different for each algorithm used to hash the signature.

| Algorithm                             | Key for verification                                                                                           |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ES256 (ECDSA using P-256 and SHA-256) | Element in the JSON Web Key (JWK) document URL (opens new window) that contains the kid property in the header |
| HS256 (HMAC using SHA-256)            | Channel secret                                                                                                 |

For more information on ID token verification, see [ID Token Validation (opens new window)](https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation) on OpenID Connect Core 1.0.

For information about the OpenID provider, see [OpenID Provider Configuration Document (opens new window)](https://access.line.me/.well-known/openid-configuration).

## [#](#get-profile-info-from-id-token) Get profile information from an ID token

When using the information contained in the ID token, write a verification code or use the [Verify ID token](../../../en/reference/line-login.md#verify-id-token) endpoint on LINE Login to verify the ID token.

If you use the verify ID Token endpoint, you can validate the ID token and get the corresponding user's profile information and email address by simply sending the ID token you acquired with the access token and LINE Login channel ID to our dedicated API endpoint.

Example request:

```
curl -v -X POST 'https://api.line.me/oauth2/v2.1/verify' \
 -d 'id_token=eyJraWQiOiIxNmUwNGQ0ZTU2NzgzYTc5MmRjYjQ2ODRkOD...' \
 -d 'client_id=1234567890'
```

Example response:

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

For more information, see [Verify ID token](../../../en/reference/line-login.md#verify-id-token) in the LINE Login API reference.

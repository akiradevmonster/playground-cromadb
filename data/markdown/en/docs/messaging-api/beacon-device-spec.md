---
title: 'LINE Beacon device specification | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/beacon-device-spec/'
---

## Table of Contents

[Requirements for LINE Beacon compliant devices](#requirements-for-devices-compliant-with-line-beacon-specs)

[LINE Beacon packets](#line-beacon-packet)

[Packet transmission interval](#packet-transmission-interval) [Advertising packet specification](#format-of-ad-data)

[Generate a secure message](#generating-secure-message)

[1\. Generate a message authentication code](#step-one-generate-message-auth-code) [2\. Generate a masked timestamp](#step-two-generate-masked-timestamp) [3\. Concatenate items](#step-three-concatentate-items) [Required parameters for secure messages](#parameters)

[iBeacon packets](#ibeacon-packet)

# [#](#page-title) LINE Beacon device specification

This LINE Beacon specification is for corporate users who wish to deploy beacon devices to use LINE Beacon. Your beacon devices must comply with this specification.

Unlike [LINE Simple Beacon (opens new window)](https://github.com/line/line-simple-beacon) packets, LINE Beacon packets have the [secure message](#generating-secure-message) field as a mechanism for security.

## [#](#requirements-for-devices-compliant-with-line-beacon-specs) Requirements for LINE Beacon compliant devices

A beacon device compliant with the LINE Beacon specification supports Bluetooth® Low Energy Version 4.0 and Apple's [iBeacon (opens new window)](https://developer.apple.com/ibeacon/) and can advertise LINE Beacon packets. Specifically, the device must meet the following requirements:

- Advertise [LINE Beacon packets](#line-beacon-packet).
- Generate a [secure message](#generating-secure-message) from data hashed by SHA-256 and XOR (exclusive OR) operations.
- Update the secure message every 15 seconds.
- Have a unique [HWID](#hwid) written to the device and displayed on the body of the device.

## [#](#line-beacon-packet) LINE Beacon packets

For LINE to detect your beacon device quickly, control beacon devices according to the broadcaster role (BLUETOOTH SPECIFICATION Version 4.0 \[Vol 3\], Part C Section 2.2.2.1) specified in the generic access profile.

### [#](#packet-transmission-interval) Packet transmission interval

We strongly recommend that you send LINE Beacon packets at 152.5ms intervals.

### [#](#format-of-ad-data) Advertising packet specification

Compose advertising packets with three AD structures, as illustrated below.

![LINE Beacon packet](/assets/img/advDataFormat.8d6aaa95.png)

The advertising packet specification is as follows. The hexadecimal values in the value column are equivalent to the bracketed values in the description column.

| Octet | Field                       | Value                 | Description                                                                                                                                                                                                                                                                  |
| ----- | --------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00    | Length                      | 0x02                  | The data length of the first AD structure (2 bytes)                                                                                                                                                                                                                          |
| 01    | AD type                     | 0x01                  | The AD type of the first AD structure (Flags)                                                                                                                                                                                                                                |
| 02    | AD data                     | 0x06                  | The flags set (LE General Discoverable Mode, BR/EDR Not Supported)                                                                                                                                                                                                           |
| 03    | Length                      | 0x03                  | The data length of the second AD structure (3 bytes)                                                                                                                                                                                                                         |
| 04    | AD type                     | 0x03                  | The AD type of the second AD structure (Complete list of 16-bit UUIDs available)                                                                                                                                                                                             |
| 05    | 16-bit UUID                 | 0x6F                  | The 16-bit UUID of LINE, when joined with the next byte (0xFE6F)                                                                                                                                                                                                             |
| 06    | 16-bit UUID                 | 0xFE                  | The 16-bit UUID of LINE, when joined with the previous byte (0xFE6F)                                                                                                                                                                                                         |
| 07    | Length                      | 0x11                  | The data length of the third AD structure (17 bytes)                                                                                                                                                                                                                         |
| 08    | AD type                     | 0x16                  | The AD type of the third AD structure (Service Data - 16-bit UUID)                                                                                                                                                                                                           |
| 09    | 16-bit UUID                 | 0x6F                  | The 16-bit UUID of LINE, when joined with the next byte (0xFE6F)                                                                                                                                                                                                             |
| 10    | 16-bit UUID                 | 0xFE                  | The 16-bit UUID of LINE, when joined with the previous byte (0xFE6F)                                                                                                                                                                                                         |
| 11    | Frame type                  | 0x02                  | The frame type (LINE Beacon)                                                                                                                                                                                                                                                 |
| 12-16 | HWID                        | Device-specific value | A 5-byte unique ID of the beacon device. For more information, see HWID.                                                                                                                                                                                                     |
| 17    | Measured TxPower            | Device-specific value | RSSI (Received Signal Strength Indicator) when the device with LINE installed and the beacon device is one meter apart. Set the same value as for the iBeacon packet. For more information, see the iBeacon documentation.Set this field to 0x7F if you don't use RSSI data. |
| 18-21 | Message authentication code | Variable              | A 4-byte code for message authentication                                                                                                                                                                                                                                     |
| 22-23 | Masked timestamp            | Variable              | A 2-byte masked timestamp                                                                                                                                                                                                                                                    |
| 24    | Battery level               | Variable              | Remaining battery level                                                                                                                                                                                                                                                      |
| 25-30 | Non-significant part        | 0x00                  | Unused. Set each byte to 0x00.                                                                                                                                                                                                                                               |

## [#](#generating-secure-message) Generate a secure message

LINE requests you to send a secure message to prevent tampering of LINE Beacon packets and replay attacks. A secure message is 7-byte data that contains message authentication code, masked timestamp, and battery level. LINE passes the secure messages transmitted from beacon devices to the LINE Platform for verification.

To generate a secure message, perform XOR (exclusive OR) operation three times on a hash value computed with SHA-256, by the flow illustrated below. For more information about the required parameters, see [Required parameters for secure messages](#parameters).

![Generation algorithm of the secure message](/assets/img/secureMessageAlgorithm.372e0255.png)

Generate a secure message by the instructions below.

### [#](#step-one-generate-message-auth-code) 1. Generate a message authentication code

1. Concatenate these items in the order listed and generate a 32-byte hash value with SHA-256.

    - [Timestamp](#timestamp)
    - [HWID](#hwid)
    - [Vendor key](#vendor-key)
    - [Lot key](#lot-key)
    - [Battery level](#battery-level)

2. Perform XOR operation on the first 16 bytes and the second 16 bytes of the hash value.
3. Perform XOR operation on the first 8 bytes and second 8 bytes of the value computed in the previous step.
4. Perform XOR operation on the first 4 bytes and second 4 bytes of the value computed in the previous step.

Now you have a message authentication code.

### [#](#step-two-generate-masked-timestamp) 2. Generate a masked timestamp

Mask 6 bytes from the beginning of the timestamp and leave the last 2 bytes. This is a masked timestamp.

### [#](#step-three-concatentate-items) 3. Concatenate items

To generate a secure message, concatenate these items in the order listed:

- Message authentication code generated in [step 1](#step-one-generate-message-auth-code)
- Masked timestamp generated in [step 2](#step-two-generate-masked-timestamp)
- [Battery level](#battery-level)

The result of concatenation is a secure message. See [Sample code and data for generating secure messages](../../../en/docs/messaging-api/secure-message-sample.md) to develop and test for your beacon device to generate secure messages.

### [#](#parameters) Required parameters for secure messages

To generate a secure message, you need these parameters:

- [Battery level](#battery-level)
- [HWID](#hwid)
- [Lot key](#lot-key)
- [Timestamp](#timestamp)
- [Vendor key](#vendor-key)

LY Corporation generates and manages the HWID, lot key, and vendor key. To obtain these required parameters, contact the LY Corporation representative for your organization. Only after you (corporate users) submit an application form and get permission, the required parameters will be issued to you.

#### [#](#battery-level) Battery level

The battery level is the remaining battery capacity. Specify the level as guided below:

| Decimal value | Hexadecimal value | Description                                       |
| ------------- | ----------------- | ------------------------------------------------- |
| 0             | 0x00              | Unknown or connected to an external power supply. |
| 1             | 0x01              | 0% left. The battery is fully discharged.         |
| 2             | 0x02              | 10% left                                          |
| …             | …                 | …                                                 |
| 10            | 0x0A              | 90% left                                          |
| 11            | 0x0B              | 100%. The battery is fully charged.               |
| 12–255        | 0x0C–0xFF         | Reserved for future use. Don't use.               |

#### [#](#hwid) HWID

The HWID is the hardware ID of a beacon device issued by LY Corporation. The ID is a 10-character string in hexadecimal notation. Convert the HWID to a byte array and write the byte array to the beacon device as 5-byte binary data. Also, mark the HWID on the beacon device.

#### [#](#lot-key) Lot key

A lot key is assigned to each lot, issued by LY Corporation. The keys are 16-character strings. Like HWID, convert the key to a byte array and write the byte array to the beacon device as 8-byte binary data.

#### [#](#timestamp) Timestamp

A timestamp is an unsigned 64-bit integer.

- Start incrementing the timestamp when the beacon device is switched on for the first time.
- Start the timestamp at zero and increment the value every 15 seconds. For example, the timestamp for a beacon device one minute after the beacon is switched on is 4.
- Don't reset the timestamp to zero when the beacon device is switched on again. Continue to increment the timestamp value at power-off.
- Reset the timestamp to start at zero again when you rewrite the HWID of the beacon device to the newly issued HWID.

#### [#](#vendor-key) Vendor key

A vendor key is assigned to each vendor, issued by LY Corporation. The key is an 8-character string in hexadecimal notation. Like HWID, convert the key to a byte array and write the byte array to the beacon device as 4-byte binary data.

## [#](#ibeacon-packet) iBeacon packets

To notify iOS devices that a LINE Beacon device is nearby, you must send iBeacon packets. Include these LINE Beacon specific parameters in the iBeacon packets.

| Parameter | Value                                |
| --------- | ------------------------------------ |
| UUID      | D0D2CE24-9EFC-11E5-82C4-1C6A7A17EF38 |
| Major     | 0x4C49                               |
| Minor     | 0x4E45                               |

For more information about the AD structure and transmission interval of iBeacon packets, see Apple's Proximity Beacon Specification document. You can download this document from the [iBeacon section of the Apple Developer site (opens new window)](https://developer.apple.com/ibeacon/).

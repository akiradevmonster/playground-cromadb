---
title: 'Flex Message elements | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/flex-message-elements/'
---

## Table of Contents

[Container](#container)

[Bubble](#bubble) [Carousel](#carousel)

[Block](#block)

[Component](#component)

[Box](#box) [Button](#button) [Image](#image) [Video](#video) [Icon](#icon) [Text](#text) [Span](#span) [Separator](#separator) [Filler](#filler)

[Learn more](#related-flex-message-elements-pages)

# [#](#page-title) Flex Message elements

Flex Messages have a hierarchical structure for building blocks, in three levels. The top level is [container](#container), followed by [blocks (header, hero, body, footer)](#block) and then [components](#component). This page explains elements constituting a Flex Message through an example.

![Structure of a Flex Message](/assets/img/overviewSample.772a618f.png)

## [#](#container) Container

Container is the top-level building block of Flex Messages. Available container types are:

| Type     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| Bubble   | A container that displays a single message bubble                         |
| Carousel | A container that displays multiple message bubbles, laid out side by side |

### [#](#bubble) Bubble

Bubble is a container that contains only one instance of a message bubble. For more information about the JSON schema, see [Bubble](../../../en/reference/messaging-api.md#bubble) in the Messaging API reference.

![Bubble example](/assets/img/bubbleSample.0b02ab67.png)

### [#](#carousel) Carousel

Carousel is a container that contains multiple bubbles. You can browse the bubbles in a carousel by scrolling sideways.

![Carousel example](/assets/img/carouselSample.b7d44737.png)

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Carousel](../../../en/reference/messaging-api.md#f-carousel) in the Messaging API reference.

```
{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "wrap": true
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    },
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "Hello, World!",
            "wrap": true
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "uri",
              "label": "Go",
              "uri": "https://example.com"
            }
          }
        ]
      }
    }
  ]
}
```

## [#](#block) Block

Block is a unit that composes a bubble. Available block types are:

| Type   | Description                                               |
| ------ | --------------------------------------------------------- |
| Header | Block that displays the message subject or header         |
| Hero   | Block that displays the main image                        |
| Body   | Block that displays the main message                      |
| Footer | Block that displays buttons and supplementary information |

The order of placement is from header, hero, body, and footer. You don't have to use all block types in one message bubble. But if used, the block type can be used only once in a message bubble. For more information about the JSON schema, see the properties `header`, `hero`, `body`, and `footer` in the [Bubble](../../../en/reference/messaging-api.md#bubble) in the Messaging API reference.

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows:

```
{
  "type": "bubble",
  "styles": {
    "header": {
      "backgroundColor": "#ffaaaa"
    },
    "body": {
      "backgroundColor": "#aaffaa"
    },
    "footer": {
      "backgroundColor": "#aaaaff"
    }
  },
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "header"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": "https://example.com/flex/images/image.jpg",
    "size": "full",
    "aspectRatio": "2:1"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "body"
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "footer"
      }
    ]
  }
}
```

## [#](#component) Component

Component is a unit that composes a [block](#block). Available components are:

| Component           | Description                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Box                 | This component defines a horizontal or vertical layout orientation and holds components together.                               |
| Button              | This component renders a button. When the user taps a button, a specified action is performed.                                  |
| Image               | This component renders an image.                                                                                                |
| Video               | This component renders a video.                                                                                                 |
| Icon                | This component renders an icon.                                                                                                 |
| Text                | This component renders a text string. You can specify the font color, size, and weight.                                         |
| Span                | This component renders multiple text strings in different styles. You can specify the font color, size, weight, and decoration. |
| Separator           | This component renders a separating line.                                                                                       |
| Filler (deprecated) | This component renders an empty space.                                                                                          |

### [#](#box) Box

This component defines a horizontal or vertical layout orientation and holds components together. Any component can be contained, including a box. For more information on layout information, see [Flex Message layout](../../../en/docs/messaging-api/flex-message-layout.md). For more information on the JSON schema, see [Box](../../../en/reference/messaging-api.md#box) in the Messaging API reference.

### [#](#button) Button

This component renders a button. You can set an [action](../../../en/docs/messaging-api/actions.md) to be executed when a user taps the button. You have three button styles to choose from as shown below. You can change the color of the button of all button styles.

![Button example](/assets/img/buttonSample.883974d5.png)

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Button](../../../en/reference/messaging-api.md#button) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "action": {
          "type": "uri",
          "label": "Primary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "secondary",
        "action": {
          "type": "uri",
          "label": "Secondary style button",
          "uri": "https://example.com"
        }
      },
      {
        "type": "button",
        "style": "link",
        "action": {
          "type": "uri",
          "label": "Link style button",
          "uri": "https://example.com"
        }
      }
    ]
  }
}
```

### [#](#image) Image

This component renders an image.

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Image](../../../en/reference/messaging-api.md#f-image) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg",
        "size": "md"
      }
    ]
  }
}
```

### [#](#video) Video

This component renders a video. For more information on using videos, see [Create a Flex Message including a video](../../../en/docs/messaging-api/create-flex-message-including-video.md).

![Video example](/assets/img/video-sample.fe37878c.png)

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Video](../../../en/reference/messaging-api.md#f-video) in the Messaging API reference.

```
{
  "type": "bubble",
  "size": "mega",
  "hero": {
    "type": "video",
    "url": "https://example.com/video.mp4",
    "previewUrl": "https://example.com/video_preview.jpg",
    "altContent": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://example.com/image.jpg"
    },
    "aspectRatio": "20:13"
  }
}
```

### [#](#icon) Icon

This component renders an icon for decorating the adjacent text. You can use this component only in a [baseline box](../../../en/docs/messaging-api/flex-message-layout.md#baseline-box).

![Icon example](/assets/img/iconSample.b167cb60.png)

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Icon](../../../en/reference/messaging-api.md#icon) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "md"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "md"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "lg"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "lg"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "xxl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "xxl"
          }
        ]
      },
      {
        "type": "box",
        "layout": "baseline",
        "contents": [
          {
            "type": "icon",
            "url": "https://example.com/flex/images/icon.png",
            "size": "3xl"
          },
          {
            "type": "text",
            "text": "The quick brown fox jumps over the lazy dog",
            "size": "3xl"
          }
        ]
      }
    ]
  }
}
```

### [#](#text) Text

This component renders a text string. You can specify the color, size, and weight of the text. You can [wrap](#text-wrap) long text and adjust the line spacing for wrapped text.

![Text example](/assets/img/textSample.1cfc72ff.png)

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Text](../../../en/reference/messaging-api.md#f-text) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "md",
        "align": "center",
        "color": "#ff0000"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "lg",
        "align": "center",
        "color": "#00ff00"
      },
      {
        "type": "text",
        "text": "Closing the distance",
        "size": "xl",
        "align": "center",
        "weight": "bold",
        "color": "#0000ff"
      }
    ]
  }
}
```

#### [#](#text-wrap) Text wrapping

By default, overflowing text is truncated with an ellipsis. This is an example of how a long text gets displayed.

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
}
```

To avoid truncation, you can wrap long text. To apply text wrapping, set the `wrap` property to `true`. You can make a part of the text begin from a new line, with a new line character (`\n`). This is an example of a Flex Message with text wrapping and a new line character.

![Example with text wrapping](/assets/img/wrap-sample.98366a3c.png)

> [!warning]
> Note
>
> The new line character (`\n`) at the end of a text can be rendered differently by the device environment.

The JSON definition of the text wrapping example is as follows. The `wrap` property is added with a value of `true`.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true
      }
    ]
  }
}
```

##### [#](#text-line-spacing) Line spacing in a text

When you wrap a text, you can specify the line spacing of a wrapped text with the `lineSpacing` property.

> [!warning]
> Line spacing scope
>
> Line spacing isn't applied to the top of the first line and the bottom of the last line.

![Example of increasing the line spacing in a text](/assets/img/line-spacing-sample.c44d46d1.png)

The JSON definition of this Flex Message example is as follows. The `lineSpacing` property is added with a value of `20px`.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua.",
        "wrap": true,
        "lineSpacing": "20px"
      }
    ]
  }
}
```

### [#](#span) Span

This component renders multiple text strings in different styles. You can specify the color, size, weight, and decoration of each text. Span is set to `contents` property of [texts](#text).

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Span](../../../en/reference/messaging-api.md#span) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "text",
        "text": "hello, world",
        "contents": [
          {
            "type": "span",
            "text": "Hello, world!",
            "decoration": "line-through"
          },
          {
            "type": "span",
            "text": "\nClosing",
            "color": "#ff0000",
            "size": "sm",
            "weight": "bold",
            "decoration": "none"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "the",
            "size": "lg",
            "color": "#00ff00",
            "decoration": "underline",
            "weight": "bold"
          },
          {
            "type": "span",
            "text": " "
          },
          {
            "type": "span",
            "text": "distance",
            "color": "#0000ff",
            "weight": "bold",
            "size": "xxl"
          }
        ],
        "wrap": true,
        "align": "center"
      }
    ]
  }
}
```

### [#](#separator) Separator

This component renders a separating line inside a [box](#box). A vertical line is drawn if included in a box with the horizontal layout. Similarly, a horizontal line is drawn if included in a box with the vertical layout.

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Separator](../../../en/reference/messaging-api.md#separator) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "orange"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "apple"
          }
        ]
      },
      {
        "type": "separator"
      },
      {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "text": "grape"
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "text": "lemon"
          }
        ]
      }
    ]
  }
}
```

### [#](#filler) Filler

> [!danger]
> Filler is deprecated
>
> To add a space, use the properties of each component instead of adding fillers. For more information, see [Component position](../../../en/docs/messaging-api/flex-message-layout.md#component-position).

This component renders an empty space. You can put a space in between, before, or after components within a [box](#box). The example below illustrates a box with two [images](#image) and a filler in between the images.

<!-- 画像: ここに適切な代替テキストが必要です -->

The JSON definition of this Flex Message example is as follows. For more information about the JSON schema, see [Filler](../../../en/reference/messaging-api.md#filler) in the Messaging API reference.

```
{
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      },
      {
        "type": "filler"
      },
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg"
      }
    ]
  }
}
```

## [#](#related-flex-message-elements-pages) Learn more

- [Send Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md)
- [Flex Message layout](../../../en/docs/messaging-api/flex-message-layout.md)
- [Flex Message](../../../en/reference/messaging-api.md#flex-message) (Messaging API reference)

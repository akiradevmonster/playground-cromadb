---
title: 'Tutorial - Create a digital business card with Flex Message Simulator | LINE Developers'
description: 'The LINE Developers site is a portal site for developers. It contains documents and tools that will help you use our various developer products. Creating LINE Login and Messaging API applications and services has never been easier!'
date: '2025-04-16'
source_url: 'https://developers.line.biz/en/docs/messaging-api/using-flex-message-simulator/'
---

## Table of Contents

[Goal](#goal)

[Before you start](#before-starting)

[Learn about Flex Message Simulator](#what-is-simulator)

[Tutorial shortcut](#preview-json)

[1\. Select container type](#select-flex-message)

[2\. Add a header](#add-header)

[3\. Add an image](#add-image)

[4\. Add a name](#add-name)

[5\. Add a job title](#add-title)

[6\. Add a separator](#add-separator)

[7\. Add buttons](#add-button)

[7-1. Add a button to jump to the company's website](#add-action-1) [7-2. Add a button to open a registration form made with LIFF](#add-action-2) [7-3. Distribute the buttons](#add-action-3)

[Next steps](#next-step)

[Conclusion](#conclusion)

[Related pages](#related-pages)

# [#](#page-title) Tutorial - Create a digital business card with Flex Message Simulator

Flex Messages are messages that can be freely customized based on [CSS Flexible Box (CSS Flexbox) (opens new window)](https://www.w3.org/TR/css-flexbox-1/). Depending on your needs, you can adjust the size of the message, allocate text, images, and icons in specific locations, and add interactive buttons.

In this tutorial, you'll learn how to use [Flex Message Simulator](../../../flex-simulator.md) to create a digital business card. Flex Message Simulator is a tool to help you brainstorm, design, and prototype Flex Messages **without writing code**. If you are new to Flex Messages, see [Sending Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md) first.

## [#](#goal) Goal

The outcome of this tutorial is a digital business card as shown below. You can see the outcome defined in JSON from this [download link](../../../media/code-samples/flex-message-simulator-example.json.md). But we recommend that you to go through this tutorial to become familiar with Flex Message Simulator. We guarantee, this tool will become quite handy to deal with a limitless number of use cases for Flex Messages.

![Final Output](/assets/img/en-final-output.c7510d9f.png)

## [#](#before-starting) Before you start

To follow this tutorial, we recommend that you read [Messaging API overview](../../../en/docs/messaging-api/overview.md) and [Send Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md), before you get started. Also, read on this section to learn about Flex Message Simulator if you are new to the simulator. If you're familiar with the simulator, [start with the tutorial](#select-flex-message) right now.

### [#](#what-is-simulator) Learn about Flex Message Simulator

Flex Message Simulator is a tool with which you can compose and preview a Flex Message. You don't have to set up a development environment or write code to compose Flex Messages and send Flex Messages to preview.

First, open [Flex Message Simulator](../../../flex-simulator.md). If you aren't logged in to the [LINE Developers Console](../../../console.md), you're prompted to log in. If you have a LINE Developers account, log in with your account. If not, click **Create an account** and create one.

The UI of Flex Message Simulator has three areas:

- **Preview area**: Displays the Flex Message generated with the data specified in the tree view area and property area.
- **Tree view area**: Displays and lets you edit the data structure of the Flex Message.
- **Property area**: Lets you set the properties of the item selected in the tree view area. The simulator uses the data entered here to generate a Flex Message.

![Flex Message Areas](/assets/img/en-areas.c9d67548.png)

If you hover your mouse over an item in the tree view area, the corresponding area is highlighted in the preview area. See this in action from the video.

Your browser does not support the video tag.

#### [#](#predefined-layouts) You can use Flex Message layout presets

Flex Message Simulator offers predefined Flex Message layouts.

To use a predefined layout, click **Showcase** at the top of the simulator. Once you make a choice, click **Create**.

> [!warning]
> About layout
>
> In this tutorial, we don't use a predefined layout. We'll create a Flex Message from scratch.

![Flex Message Simulator Showcase](/assets/img/showcase.57ccc2da.png)

#### [#](#copy-json) You can copy the Flex Message in JSON

To copy a Flex Message generated in JSON, click **</>View as JSON** and then the **Copy** button.

![View as JSON](/assets/img/view-as-json.d2599611.png)

## [#](#preview-json) Tutorial shortcut

To skip reading through the instructions and jump right to preview the outcome, [download](../../../media/code-samples/flex-message-simulator-example.json.md) the Flex Message object in JSON. To preview the outcome in Flex Message Simulator:

1. Click **</>View as JSON**. A modal with JSON data is displayed.
2. Remove the content in the modal.
3. Copy and paste the content of the downloaded JSON file into the modal.
4. Click **Apply** to save the change. The preview area shows the Flex Message we pasted in.

![Preview Flex Message created from sample JSON data](/assets/img/en-confirm-example-code-output.6304dd66.png)

## [#](#select-flex-message) 1. Select container type

Now that we learnt about Flex Message Simulator, let's get started to create a digital business card. We only need one bubble to create a business card, so we'll set our Flex Message container to the [bubble type](../../../en/docs/messaging-api/flex-message-elements.md#bubble).

To create a bubble container, click **New** and select **bubble** from the drop-down menu.

![Select Bubble Type Container](/assets/img/select-bubble-type.e00f4585.png)

Tip

When you select **bubble** from the drop-down menu, an "OK" message pops up at the bottom of the preview area. This means that your update is successfully reflected in the preview area.

<!-- 画像: ここに適切な代替テキストが必要です -->

For more information about the types of containers, see [container](../../../en/docs/messaging-api/flex-message-elements.md#container).

## [#](#add-header) 2. Add a header

In the container we created, let's add a header to show the company name. A header is a type of a [block](../../../en/docs/messaging-api/flex-message-elements.md#block) and so are hero, body, and footer. Header is mainly used to display the message subject or content heading.

![Block style example](/assets/img/elements.dcd26ecd.png)

1. To add a header, select the **header** node in the tree view area. Click **+** at the top and click **box**.
2. Set the background color of the header. In the property area, set the **backgroundColor** field with hexadecimal color code, `#00B900` in this tutorial, and hit the Enter key. Now the header is visually distinguishable from the body block.

    Hit the Enter key to apply your entry

    Whenever you add or select a property in the property area, hit the Enter key to apply your entry in the preview area. Then you can see the result in the preview area. From this point onward in this tutorial, we'll omit this instruction to not overwhelm you.

    ![Set Header Background Color](/assets/img/set-header-color.3b534aaa.png)

3. Add a text in the header:

    1. From the tree view, click the **box \[vertical\]** node under **header**.

        Tip

        Vertical box is one of the box types for Flex Messages, that determines how the box's child components are placed within the box. For more information, see [Box component orientation](../../../en/docs/messaging-api/flex-message-layout.md#box-component-orientation).

    2. Click **+** in the tree view and then **text** from the drop-down menu. A **text** node is created under the **box \[vertical\]** node.
    3. Click the text node from the tree view.
    4. In the property area, replace "hello, world" in the **text** field with "Flex Message Corp".

We made the header distinguishable with the new background color, but the header text is a bit difficult to read. Let's make the text stand out with a new color and style. In the tree view, click the text node and set the **color** property to `#FFFFFF` and **weight** to `bold`.

Now you should see something like this. We have a distinguishable header with the text clearly visible.

![Add Header Final Output](/assets/img/add-header-final.414f975f.png)

## [#](#add-image) 3. Add an image

One way to supplement our a digital business card visually is to add an image. With Flex Message Simulator, adding or styling an image can't get easier. To add an image, we'll use the [hero block](../../../en/docs/messaging-api/flex-message-elements.md#block) which is mainly used to display image type content.

1. In the tree view, click the **hero** node.
2. Click **+** and then **image** from the drop-down list. A default image is displayed in the preview.
3. To change the image, click the **image** node from the tree view. In the property area, change the value of the **url** property to the location for your image. Your image must be in portrait mode. For the tutorial, you can use [this](../../../media/messaging-api/using-flex-message-simulator/mary.png.md) image.

    > [!warning]
    > Image requirements
    >
    > You can't upload image files to Flex Message Simulator. Specify a URL to an image that is uploaded on the web. The image and the image URL must satisfy these conditions:
    >
    > - Protocol: HTTPS (TLS 1.2 or later)
    > - Image format: JPEG or PNG
    > - Max image size: 1024 x 1024 px
    > - Max file size: 10 MB

    File size recommendation

    To display a message without delay, we recommend that you keep the size of each image file to 1 MB or less.

The image is changed successfully, but the image looks a little small compared to the background. Let's make the image bigger.

![Add Image](/assets/img/add-image.a0ad611c.png)

To change the image size, click the **image** node from the tree view and set the maximum image width in the **size** property. For this tutorial, click the button next to the property's input field and the `xl` keyword from the drop-down list. You _can_ enter a value in pixels or %, instead. For more information, see the "size" property specification for [Image](../../../en/reference/messaging-api.md#f-image).

Now you have a business card with an enlarged image:

![Add Image Final Output](/assets/img/add-image-final.1ead6c9f.png)

## [#](#add-name) 4. Add a name

A name in a business card is a must. Presenting key information such as a name in a noticeable style helps. To add a name under the image:

1. In the tree view, click the **box \[vertical\]** node under **body**.
2. Click **+** and then **text** from the drop-down menu. A text node is created under the box node.
3. Click the **text** node from the tree view.
4. In the property area, replace the "hello, world" in the **text** field with a name.

Like we did with the [header text](#add-header), let's style the name text. We want to increase the font size, make the font bold, and center align the text.

- **Size**: Set the **size** property to `xl`. (Default size is "md".)
- **Bold**: Set the **weight** property to `bold`.
- **Center align**: Set the **align** property to `center`.

Now your business card has a name under the image:

![Add Name Final Output](/assets/img/en-add-name-final.1414995c.png)

## [#](#add-title) 5. Add a job title

Another piece of information as important as a name in a business card is your job title. Let's add a job title under the name.

1. In the tree view, click the **box \[vertical\]** node under **body**.
2. Click **+** and then **text** from the drop-down menu. A new text node is created.
3. Click the new **text** node from the tree view.
4. In the property area, replace "hello, world" in the **text** field with a job title.

Since we aligned the name to the center, we want to align the job title also to the center. While the text node is selected, set the **align** property to `center`.

Now your business card has a job title:

![Add Job Title Final](/assets/img/en-add-job-title-final.23388d02.png)

## [#](#add-separator) 6. Add a separator

Later on, we'll add buttons to make the business card interactive. Before we do that, let's add a [separator](../../../en/reference/messaging-api.md#separator) to visually separate the information section and interactive section.

1. In the tree view, click the **box \[vertical\]** node under **body**.
2. Click **+** and then **separator** from the drop-down menu. A separator is created right under the job title.

![Add Separator](/assets/img/en-add-separator.6c1a49c3.png)

The gap between the separator and the job title is almost none. Let's give a room between the two by giving a [margin](../../../en/reference/messaging-api.md#separator) to the separator. For more information about margins, see [Separator](../../../en/reference/messaging-api.md#separator) in the Messaging API reference.

1. In the tree view, click the **separator** node.
2. In the property area, set the **margin** property to `md`.

Now you have a separator in your business card with some room:

![Add Separator Final](/assets/img/en-add-separator-final.39d4e768.png)

## [#](#add-button) 7. Add buttons

As mentioned in step 6, we want to add buttons to make our business card interactive. We want to add two buttons under the separator. First, we want a component to group the buttons.

1. Click the **box \[vertical\]** under **body**.
2. Click **+** and then **box** from the drop-down menu. A box node is created to add buttons to.

We want the buttons to execute an action when pressed. Available action types for buttons are [URI action](../../../en/reference/messaging-api.md#uri-action) and [postback action](../../../en/reference/messaging-api.md#postback-action). For this tutorial, we'll add buttons to:

1. [Jump to the company's website](#add-action-1)
2. [Open a registration form made with LIFF](#add-action-2)

### [#](#add-action-1) 7-1. Add a button to jump to the company's website

To set a button to open the company's website:

1. In the tree view, click the **box \[vertical\]** created for the buttons.
2. Click **+** and then **button** from the drop-down menu.
3. Click the **button \[action\]** node.
4. In the property area, scroll down to the **Action** section. By default, the **type** property is set to `uri`. Since we want to open a website URL, let's keep the value as is.
5. From the **Action** section, set the **label** property to "Visit our website". This becomes the button label.
6. To open a website, set the **uri** property to the URL of your choice.

> [!warning]
> Apply percent encoding to the URI
>
> [Percent-encode (opens new window)](https://en.wikipedia.org/wiki/Percent-encoding) the domain name, path, query parameters, and fragments in the `uri` property, with the UTF-8 encoding. For example, the final URL becomes `https://example.com/path?q=Good%20morning#Good%20afternoon` with these settings:
>
> | Scheme | Domain name | Path  | Query parameter | Fragment     |
> | ------ | ----------- | ----- | --------------- | ------------ | -------------- |
> | Key    | Value       |       |                 |              |
> | https  | example.com | /path | q               | Good morning | Good afternoon |

Now we have a button in the business card to open the company website.

![Add URI Action Button](/assets/img/en-add-uri-button.e3a9ec9f.png)

Like we did in the header text, name, and job title, we want to style the button. To make the tappable area more visible, we can add a color to the button. You can choose from three preset button styles to add the color with:

- **Primary**: Style for dark colored buttons
- **Secondary**: Style for light colored buttons
- **Link**: Renders the button like an HTML text link

We recommend that you use the link style if you have multiple buttons stacked vertically, as in our tutorial. Instead of coloring the background, let's apply the link style to our button:

1. In the tree view, click the **button** node.
2. In the property area, set the **style** property to `link`.

Your button should look something like this:

![Change Button Color](/assets/img/en-change-button-color.112bfd65.png)

### [#](#add-action-2) 7-2. Add a button to open a registration form made with LIFF

Let's continue to add the rest of the buttons. For the second button, we want to add a [LINE Front-end Framework (LIFF)](../../../en/docs/liff/overview.md) URL to the business' registration form. You can create registration forms with LIFF and later send a new message to the user with the information you retrieved from the form. For more information on LIFF, see [Developing a LIFF App](../../../en/docs/liff/developing-liff-apps.md) or [Trying the LIFF starter app](../../../en/docs/liff/trying-liff-app.md).

To create the second button:

1. In the tree view, click the **box \[vertical\]** node that you created for the first button.
2. Click **+** and then **button** from the drop-down menu. A button node is created.
3. In the property area:
    - Set the **style** property to `link`.
    - Set the **label** property to "Register with us".
    - Keep the **type** property to `uri`.
    - Set the **uri** property to a LIFF app URL.

Now we have the second button set with a LIFF URL:

![Add LIFF Button](/assets/img/en-add-liff-button.bb3dfdd6.png)

### [#](#add-action-3) 7-3. Distribute the buttons

The buttons are stacked very tight to each other. It doesn't look like so, but if you change the button style to primary or secondary, you can tell right away. To distribute the buttons with some room in between, you can use [margin](../../../en/docs/messaging-api/flex-message-layout.md#margin-property) or [padding](../../../en/docs/messaging-api/flex-message-layout.md#padding-property) on the parent node, which is a box component for us. For this tutorial, we'll add padding:

1. In the tree view, click the **box \[vertical\]** that contains the two buttons you created.
2. In the property area, under the **Padding** section, set the **paddingTop** property to `10px`.

Now we have the buttons with more space in between:

![Style Buttons](/assets/img/en-style-buttons.ca639684.png)

This is it. You completed this tutorial to create a digital business card!

## [#](#next-step) Next steps

When you compose a Flex Message, export the result in JSON as introduced at the [beginning of this tutorial](#copy-json). This is handy when you want to send a Flex Message with the Messaging API. For more information, see [Call the Messaging API to send the Flex Message](../../../en/docs/messaging-api/using-flex-messages.md#sending-messages-with-the-messaging-api).

## [#](#conclusion) Conclusion

Flex Message Simulator is a simple tool to help you brainstorm, design, and prototype a Flex Message without writing code. Like this tutorial, there are a limitless number of use cases you can use Flex Messages for. Use Flex Message Simulator to conceptualize ideas, test prototypes, and speed up the creation of Flex Messages, without technical barriers. Create unique Flex Messages with Flex Message Simulator!

## [#](#related-pages) Related pages

- [Send Flex Messages](../../../en/docs/messaging-api/using-flex-messages.md)
- [Flex Message elements](../../../en/docs/messaging-api/flex-message-elements.md)
- [Flex Message layouts](../../../en/docs/messaging-api/flex-message-layout.md)
- [Flex Message](../../../en/reference/messaging-api.md#flex-message) (Messaging API reference)

Moved to https://github.com/kickstartDS/storybook-addon-html

***

# Storybook Addon HTML

This addon for Storybook adds a tab that displays the compiled HTML for each
story. It uses [highlight.js](https://highlightjs.org/) for syntax highlighting.

![Animated preview](https://raw.githubusercontent.com/whitespace-se/storybook-addon-html/master/image.gif)

## Getting Started

With NPM:

```sh
npm i --save-dev @whitespace/storybook-addon-html
```

With Yarn:

```sh
yarn add -D @whitespace/storybook-addon-html
```

### Register addon

```js
// .storybook/main.js

module.exports = {
  // ...
  addons: [
    '@whitespace/storybook-addon-html',
    // ...
  ],
};
```

## Usage

The HTML is formatted with Prettier. You can override the Prettier config
(except `parser` and `plugins`) by providing an object following the
[Prettier API override format](https://prettier.io/docs/en/options.html) in the
`html` parameter:

```js
// .storybook/preview.js

export const parameters = {
  // ...
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};
```

You can override the `showLineNumbers` and `wrapLines` settings for the syntax
highlighter by using the `highlighter` parameter:

```js
export const parameters = {
  html: {
    highlighter: {
      showLineNumbers: true, // default: false
      wrapLines: false, // default: true
    },
  },
};
```

You can add a [decorator](https://storybook.js.org/docs/react/writing-stories/decorators) to wrap the story:

```js
export const parameters = {
  html: {
    decorator: (Story, context) => (
      <MyProvider>
        <Story {...context}>
      </MyProvider>
    )
  },
};
```

## Supported frameworks

As of version 4.0.0 all frameworks are supported per default 🎉

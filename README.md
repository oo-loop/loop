<p align="center"><a href="https://oo-loop.github.io/" title="loop"><img src="https://avatars2.githubusercontent.com/u/36288586?s=300" width="150" alt=""></a></p>
<p align="center">
<a href="https://www.npmjs.com/package/oo-loop"><img alt="Npm" src="https://img.shields.io/npm/v/oo-loop.svg"></a>
<a href="https://opensource.org/licenses/MIT"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg"></a>
</p>

# Loop

**Flexible and Expressive CSS**

[Loop](https://oo-loop.github.io/) is a fully customizable Sass framework aiming to create a more maintainable and readable CSS.
It gives you complete control on your project to let you create and match your styles with your design needs.

## Installation

Quick install via *npm* or *yarn*

`npm install oo-loop` / `yarn add oo-loop`

Being a sass framework, Loop requires a sass environment to be setup. Here are some options
- [Sass](https://sass-lang.com/install) applications or command line
- [node-sass](https://github.com/sass/node-sass#readme)
- Webpack and [sass loader](https://webpack.js.org/loaders/sass-loader/)
- Rollup and [rollup-plugin-sass](https://github.com/differui/rollup-plugin-sass#readme)

## Getting started

Import Loop framework into your sass file and launch it to start developing with it.
Basing all its settings around the [config map](https://oo-loop.github.io/docs/config), the main file is the only import needed. 

```scss
@import 'oo-loop/loop'; // Import
@include ooCreate(); // Launch
```

## Separation of concerns

Loop differentiates [components](https://oo-loop.github.io/docs/components) and [utilities](https://oo-loop.github.io/docs/utilities) with semantic for more clarity

- `data-oo-componentName` / `oo-componentName` for component attributes
- `.prefixName-valueName` for utility classes

## Documentation

To know more how to use Loop in your project check the live [documentation](https://oo-loop.github.io/)

## Why Loop?

The first iteration of Loop (0.4) focused on bringing the minimum to bootstrap any project. Instead of providing any possible existing components, Loop worked towards flexibility and customization to let the developer manage his own set of utilities; thus, making the CSS easier to maintain. Loop also introduced a new component syntax to improve HTML readibility making styling code more expressive and less confusing.

Loop v1 continues into the same philosophy tackling this time the variables situation. What we often get from a css framework, is a list of single variable to customize elements or components properties. The list, covering a multitude of parameters, tends to be exhaustive and can become painful while searching for a possible change.

Loop proposes to treat the variables as a single structured map to facilitate its use. As the result, the config map is enabling easy parsing and access to all the data during the development. Moreover, the introduction of properties such props and states offers a complete control over the style of elements and components. It is simplifying its customization by allowing you to add whatever CSS properties your need without worrying if it's changeable or not.

## License
[MIT](https://opensource.org/licenses/MIT)
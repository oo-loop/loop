<p align="center">
    <img align="center" src="https://avatars2.githubusercontent.com/u/36288586?s=400" width="200" alt="">
</p>
<h3 align="center">Loop</h3>
<p align="center">
<em>"Why go in circles?"</em>
<br>
<br>
    <a href="https://oo-loop.github.io/" title="documentation">> Documentation</a>  
</p>  

[![npm](https://img.shields.io/npm/v/oo-loop.svg?style=flat-square)](https://www.npmjs.com/package/oo-loop)


Loop wants to reconsider the way CSS is created, aiming to make it more maintainable, readable and expressive.   
Loop works towards flexibility and customization without a bunch of superfluous rules and components.   
Not opinionated about any style and based on variables, it allows the addition and removal of rules and properties with ease.   
Being like a partner for CSS development, it assists the developer matching their styles with their design needs.

Loop differentiates components and utilities with semantic for more clarity

* `oo-componentName` loop attribute for component
* `.utilityName` class attribute for utility.

## Beware
The loop attribute is not a valid html5 attribute.   
If it does concern you, set the variable `$loop-component-html5-validity` to true.   
Loop components will be then available through the data attribute `data-oo-componentName`.

## Install
Use yarn
`yarn add oo-loop`
Use Npm
`npm install oo-loop` 
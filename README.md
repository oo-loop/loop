<p align="center">
    <img align="center" src="https://avatars2.githubusercontent.com/u/36288586?s=400" width="200" alt="">
</p>
<h3 align="center">Loop</h3>
<p align="center">
<em>"Why go in circles?"</em>
<br>
<strong>CSS framework for Front-end Developer</strong>
<br>
<br>
    <a href="https://oo-loop.github.io/" title="documentation">> Documentation</a>  
</p>  

[![npm](https://img.shields.io/npm/v/oo-loop.svg?style=flat-square)](https://www.npmjs.com/package/oo-loop)


Loop wants to reconsider the way CSS is created and used, aiming to make it more maintainable, readable and expressive.

Loop works towards flexibilty and customization to give the developer complete control on his project letting him create his own set of utilities.   
It is specifically based on variables to allow the addition and removal of rules and properties with ease.

Loop is not meant to be a framework providing any possible existing components. Its philosophy is to be non-opinionated and to be more like a companion for CSS development assisting the developer matching their styles with their design needs.

Anything specific to the project you're working on is for you to develop.   
Loop is here to help.

## Semantic
Loop differentiates components and utilities with semantic for more clarity

* `oo-componentName` loop attribute for component
* `.utilityName` class attribute for utility.

## Beware
The loop attribute is not a valid html5 attribute.   
If it does concern you, set the variable `$loop-component-html5-validity` to true.   
Loop components will be then available through the data attribute `data-oo-componentName`.

## Start
Use yarn
`yarn add oo-loop`   
Use Npm
`npm install oo-loop` 
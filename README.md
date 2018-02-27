<p align="center">
    <img align="center" src="https://avatars2.githubusercontent.com/u/36288586?s=400" width="200" alt="">
</p>
<h3 align="center">Loop</h3>
<p align="center">
<em>"Why go in circles?"</em>
<br>
<br>
<strong>CSS Framework for Front-end Developer</strong>
<br>
    <a href="https://oo-loop.github.io/" title="documentation">> Documentation</a>  
</p>  

[![npm](https://img.shields.io/npm/v/oo-loop.svg?style=flat-square)](https://www.npmjs.com/package/oo-loop)

## Introduction
Have you never had a mockup to code and while making it with your go-to css framework you realized that you were only using 10% of it. You had to add your own utilities, your own components and when you tried to reuse something from its library, you actually had to overwrite some rules, tweak it, in order to reproduce what you wish for. Have you even started to wonder if the framework you were using was a real fit?.   
Loop has been developed out of that feeling to overcome this problem.

Loop wants to reconsider the way CSS is created and used, aiming to make it more maintainable, readable and expressive.

Loop works towards flexibilty and customization to give the developer complete control on his project letting him create his own set of utilities.   
It is specifically based on variables to facilitate the addition and removal of rules and properties.

## Loop
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

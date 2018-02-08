# Loop
![](./logo-md.svg)
*Why going in circles?
Need a partner?*

#### 0.3.1 Beta

Loop wants to reconsider the way CSS is created, aiming to make it more maintainable, readable and expressive.
Loop works towards flexibility and customization without a bunch of superfluous rules and components.
Not opinionated about any style and based on variables, it allows the addition and removal of rules and properties with ease.
Being like a partner for CSS development, it assists the developer matching their styles with their design needs.

Loop differentiates components and utilities with semantic for more clarity

* `oo-componentName` loop attribute for component
* `.utilityName` class attribute for utility.

#### Beware
The loop attribute is not a valid html5 attribute.
If it does concern you, set the variable `$loop-component-html5-validity` to true
Loop components will be then available through the data attribute `data-oo-componentName`.

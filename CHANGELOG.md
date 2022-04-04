# Loop changelog

## 1.0.2: 2022-04-04

### Fixes
- Fix `pointbreak()` on rem unit
- Fix generating double properties when merging custom map with camelCase `props`
- Fix the lost of references when merging custom config on `init`
- Bump dependencies

## 1.0.1 : 2020-07-30

- Add missing `states` properties in variants
- Fix rule to add any pseudo elements, states and pseudo-selectors from `props`
- Bump lodash from 4.17.15 to 4.17.19

## 1.0.0

### Changes
- Unify all `props` to use kebab-case css properties
- `dataAttr` is set to *false* by default, back to `oo-component` from start
- Form inputs components are not included by default except for `oo-input`

### Features
- Add `variants` property to column
- Ability to generate variants component only from the config map

## 1.0.0-beta.2

- Reset properly the column to auto on breakpoint `auto@sm` `auto@md` `auto@lg` 

## 1.0.0-beta.1

- Fix spread operator chaining
- Add option to set a size for a template area column

## 1.0.0-beta

New Version implementing the single config map approach for the framework settings

- Initialize Loop from `ooInit()` and launch it from `ooCreate()`
- Configuration from Functions `ooSet()` `ooAdd()` `ooPipe()`
- New Column and Form syntax
- New Template component
- New Utilities structure

## 0.4.17

* Fix Radio button on IE 11

## 0.4.16

* Fix radio checkmark alignment on old browser

## 0.4.15

* Fix Toggle compatibility with older browser

## 0.4.14

* `loopBreakpoints()` correctly generates utilities from `$breakpoints` parameter (Was always reading from global `$breakpoints-classes`)

## 0.4.13

* Remove scaling on button active status to avoid adding conflict in a case where the button needs to be animated

## 0.4.12

* Fix grid when it contains elements with overflow content

## 0.4.11

### Features
* Ability to have a set of vertical gutters for `oo-column` via the variable `$columns-v-gutter-sizes` 
* Responsive v-gutter modifiers `v-gutter-${gutterName}@{breakpoint}` (assign the needed breakpoints to `$columns-v-gutter-sizes-breakpoints-classes`) see doc for more info.

**Sample of use**

```html
<div oo-column="row v-gutter-less v-gutter-tiny@sm v-gutter-small@md v-gutter-large@lg">
  <div oo-column="col"></div>
  <div oo-column="col"></div>
  <div oo-column="col"></div>
</div>
```

### Changes
* The variable `$anchor-color-hover` gets a darker version of  `$anchor-color` as default value. (No more `$color-secondary`)

### Functions
New functions available to facilitate the reuse of values coming from Map type variables
* `getColors($keyName)` to get value from the `$colors` map
* `getTextColors($keyName)` to get value from the `$text-colors` map
* `getBgColors($keyName)` to get value from the `$bg-colors` map
* `getBorderColors($keyName)` to get value from the `$border-colors` map
* `getTextSizes($keyName)` to get value from the `$text-sizes` map
* `getMapValue($map, $key)` get map value by passing the map to retrieve from and the name of the key . (Combination of sass functions  `map-get` and `map-has-key`)

## 0.4.10
* `normalize.css` has been removed from dependencies and moved to its own loop partial `loop/scss/base/_normalize.scss`
* Allowing the use of loop without any javascript task runner building the css file.

## 0.4.9

* Fix `Textarea` height  and max-width when using `oo-form="input"`
* Fix custom input paddings bug created by firefox fix from `v0.4.8`

## 0.4.8

* Fix Firefox form inputs and selects (get the same height)
* Fix typo, correct class name => `.container-fluid` now working

## 0.4.7

### Features
* `oo-grid="areas"` Add template areas to Grid
* `order-{$number}@{$breakpoint}` Add order modifier to `oo-grid="col"`
* `$font-size-root` Root font-size is now modifiable (default = 62.5%)
* `$spacing-ratio` Ratio to translate px into rem. Spacing generated values are rem but className still use the pixel number for better representation
* `$use-grid-layout` `$use-grid-areas` `$use-grid-order` `$use-grid-gap` `$use-v-grid-gap` Variables to turn on/off the options

### Deprecated
* `inArray()` function in favour of `inList()` and `InNotList()`

## 0.4.6

* Ability to have responsive gutter modifiers `gutter-${gutterName}@{breakpoint}` (assign the needed breakpoints to `$columns-gutter-sizes-breakpoints-classes`) see doc for more info.

**Sample of use**

```html
<div oo-column="row gutter-less gutter-tiny@sm gutter-small@md gutter-large@lg">
  <div oo-column="col"></div>
  <div oo-column="col"></div>
  <div oo-column="col"></div>
</div>
```

## 0.4.5

**The column system has been reverted to the old one to avoid overloading the css file with rules**.

The v0.4.4 handling the hotfix for gutters on the new column was adding 48 rules per gutter.
The default gutters tiny and less were then adding 96 extra rules instead of 4 on the previous one.

The ability to have different gutters makes the use of the oo-column flexible to cover lots of purposes.
In a project we're working on, we're already using 5 extra gutters generating 240 more rules instead of 10

Those significant numbers made us revert the changes made on v0.4.3 and v0.4.4

## 0.4.4

* Recalculate the columns with the different gutters

## 0.4.3

* New approach to the column system, to be able to style and apply classes to  `oo-column="col-*"` without implicating the gutter.

```html
<div oo-column="row">
  <div oo-column="col" class="bg-primary"></div>
  <div oo-column="col" class="border-primary"></div>
</div>
```

## 0.4.2

* Add `$input-focus-border-color` variable to change the color of the border on focus state

## 0.4.0

### Features
* Breakpoint option to wrapper `$wrapper-breakpoints-classes` (`.wrapper-tiny@sm`...)
* Handle Float utility with variables
* Spacing variables `$v-spacing-from` `$v-spacing-to` `$h-spacing-from` `$h-spacing-to`
* `$btn-border-color` variable added
* `$btn-colors` and `$btn-outline-colors` variables added (custom colors mapType)
* Function `isString` `isList` `isMap` as well as `isNotString` `isNotList` `isNotMap`

### Bug fixes
* Mixin dependencies including in the mixin file
* Toggle refactor
* `isEmpty` correctly returning false
* Grid responsive columns and rows

### Changes
* Single variables `$h*-font-size` and `$heading-font-sizes-breakpoints`  are not used anymore. All the sizes are set in `$heading-font-sizes` allowing map values for breakpoints.
* `$heading-letter-spacing-list` replaced by `$heading-letter-spacing-tags`

### Deprecated
* `.wrapper` in favor of `.wrapper-medium`
* `large` `tiny` as default gutter values
* `danger` `warning` `success` as default color values (let the user decide to add them)
* $text-transforms `capitalize` `lowercase` as default values (let the user decide to add them)
* `.text-italic` in favor of `.font-italic` 

### Removals
* All utility addon variabes. `$text-sizes-addon` `$text-alignments-addon` `$text-transforms-addon` `$text-decorations-addon` `$font-styles-addon` `$font-weights-addon` `$font-families-addon` `$letter-spacings-addon` `$text-colors-addon` `$bg-colors-addon` `$border-colors-addon`
* `code.scss` not needed for main loop (been moved to looper)
* `.disabled` not having the characteristics to be on main loop (been moved to looper)
* `form="group"` too specific, not loop philosophy (been moved to looper)

## 0.3.9

* Fix Radio resizing, and transition conflict (same bug as checkbox)

## 0.3.8

* Fix checkbox resizing, and transition conflict

## 0.3.7

* Add `normalize.css` dependency

## 0.3.6

* Add `form="group"` to create input group

## 0.3.5

* Added to npm as `oo-loop`

## 0.3.4

* Launch Loop beta

## 0.2.0

* Differentiates components from utilities  

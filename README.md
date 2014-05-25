# create-event

[![Dependency Status](https://gemnasium.com/KenanY/create-event.svg)](https://gemnasium.com/KenanY/create-event)

Create an `event` object.

Rewrite of
[ianstormtaylor/create-event](https://github.com/ianstormtaylor/create-event) to
add npm+browserify support.

## Example

``` javascript
var createEvent = require('create-event');

var event = createEvent('keydown', {
  ctrl: true,
  key: 'enter'
});
```

## Installation

``` bash
$ npm install create-event
```

## API

``` javascript
var createEvent = require('create-event');
```

### createEvent(type[, options])

Creates an `event` object, where `type` is one of the following possible
Strings:

  - `'click'`
  - `'dblclick'`
  - `'keydown'`
  - `'keyup'`

Default `options`:

``` javascript
{
  alt: false,
  bubbles: true,
  button: 0,
  cancelable: true,
  clientX: 0,
  clientY: 0,
  ctrl: false,
  detail: 1,
  key: 0,
  meta: false,
  relatedTarget: null,
  screenX: 0,
  screenY: 0,
  shift: false,
  view: window
}
```
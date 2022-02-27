# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hass0319/lotide`

**Require it:**

`const _ = require('@hass0319/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`:  Takes in two arrays, checks if Equal, and logs the appropriate message.

* `EqArrays()`: Takes in two arrays and returns a true or false value.

* `Head()`: Retrieves the first element of an array.

* `tail(arr)`: Retrieves all other elements except the head.

* `middle()`: Takes in an array and returns the middle-most elements

* `assertObjectEqual ()`: Takes in two objects and returns failed or passed assertions, based on a perfect match.

* `countOnly()`: Takes in an object and return counts for a specific subset of the object

* `countletters()`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `eqobjects()`: take in two objects and returns true or false, based on a perfect match.

* `findKey()`: Takes in an object and a callback. It will traverse the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.

* `findKeyByValue()`: Takes in an object and a value. It should scan the object and return the first key which contains the given value, if not , returns undefined.

* `letterPositions()`: returns all the indicies in the string where each character is found.

* `Map()`: Takes in an array and a callback and returns a new array based on the results of the callback function.

* `reverseString()`: takes in a string, and prints it in reverse 

* `takeUntil()`: Takes in an Array and a Callback, returns a slice of the array taken from the beginning until the callback function returns a truthy value.

* `without()`: Takes in an array and itemsToRemove returning a subset of a given array, removing unwanted elements.
<!-- * `()`: description -->

### version "1.0.0" 

### description

### author
* hass0319


* `head(arr)`:  Retrieves the first element of an array.

* `tail(arr)`: Retrieves all other elements except the head.

* `middle(array)`: Takes in an array and returns the middle-most elements.

* `flatten(array)`: Takes in an array of arrays and returns a single array.


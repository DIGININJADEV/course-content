# Introduction to Programming Using JavaScript

This section provides an introduction to computer programming languages using
JavaScript.

Prerequisite reading material:

 <http://docs.webplatform.org/wiki/concepts/programming/programming_basics>

## Basic Structure

JavaScript is reminiscent of many other computer languages, notably C, Java,
and C#.

```javascript
// lines beginning with two forward slashes are comments, or
/*
Larger comment blocks can be created this way. This is useful in cases where
more information needs to be written - everything between the markers is
commented out
*/

// basic statements use mathmatical inpired syntax.
// parentheses are used to group related items, and lines should end with a
// semi-colon to mark the end of the statement (more on this later)
var value = (1 + 2) * 3;
```

## Variables

Variables are used to store references to values, which is one of the
fundamental building blocks to writing code:

```javascript
var value = 1234;
var state = 'Colorado';
```

The `var` keyword defines a new variable and the `=` operator *assigns* values
to the variable. Unlike many other languages, variables don't have any
particular type - once it is defined, it can refer to anything.

Once a variable has been defined, you can change it later by assigning it a
new value:

```javascript.interactive
var value = 1234;         // the value reference is a number
value = 'something else'; // now it is a string

return value;
```

## Basic Data Types

JavaScript has several primitive data types that support working with various
values:

* **String** - Represents text data
* **Number** - Numbers, including integers and floating point values
* **Boolean** - True or false values
* **Null and Undefined** - Special objects that represent *nothing*

### Strings

Strings represent text data, which are stored as sequences (*strings*) of
characters.

The are defined by enclosing the text value in single or double-quotes - it 
doesn't matter which you use, but the end quote must be the same as the
initial one:

```javascript.interactive
var sentence = 'The quick brown fox jumps over the lazy dog';
var language = "English";
```

Quotes can be embedded within strings either by using the opposite quote to
contain the value, or *escaping* the quote with a backslash:

```javascript.interactive
var message = "You can't do that";
var details = "She said to tell you \"hello\".";
```

### String Operators

Multiple strings can be combined together using the addition (`+`) operator.
Some languages have separate operators for text concatenation and numeric
addition - JavaScript uses the same operator.

```javascript.interactive
var first = "Stuart";
var last = "O'Malley";
return (first + ' ' + last);
```

Note that literal string references (`' '`) can be combined with variables
that refer to strings.

### String Properties and Methods

JavaScript objects typically have a number *properties*, which are referenced
using a period and the property name.

Strings have a `length` property that returns the number of characters in the
text:

```javascript.interactive
var value = 'abcd';
return value.length;
```

Strings objects also have quite a few
[methods](http://www.w3schools.com/jsref/jsref_obj_string.asp), which support
a wide range of common actions that can be performed on the values. We'll
cover these more in a bit in the functions section.

For instance, there are `toUpperCase` and `toLowerCase` methods that change
the value of the current variable:

```javascript.interactive
var value = 'shouting';
return value.toUpperCase();
```

### Numbers

JavaScript has one number type that can refer to whole numbers (integers) and
floating point numbers (decimals):

```javascript.interactive
var count = 42;
var factor = 2.34;
var negative = -0.5;
```

Basic math operators allow you to perform addition (`+`), subtraction (`-`),
multiplication (`*`), and division (`/`). Use parentheses to force the order
of operations:

```javascript.interactive
return (5 + 7) / 9;
```

### Boolean

Boolean values consist of two keywords: `true` and `false`

The *not* operator (`!`) inverts the value of a boolean expression:

```javascript.interactive
var enabled = true;
return !enabled;
```

### Null/Undefined

The final primitive types are `null` and `undefined`, which are used to
refer to uninitialized and non-existent values. The difference might seem a
little esoteric at the moment, but will be covered in more detail later.

Now might be a good time to mention the `typeof` function, which returns the
basic type of a value or variable.

```javascript.interactive
typeof('abc');  // returns 'string'
typeof(123);    // returns 'number'
typeof(false);  // returns 'boolean'
var ref;
typeof(ref);    // returns 'undefined'
ref = null;
typeof(ref);    // returns 'null'
```

## Control Statements

Up to this point we've only seen static values and very simple calculations,
which aren't particularly useful. Programming languages provide an assortment
of statements that allow you to control what the computer does when it is
running your program.

### Conditional Statements

The most fundamental control statement is the *if*, *then*, *else* block that
lets you execute different code depending on the context.

At a minimum, the statement must start with `if(expression)`, and can be
followed by any number of additional statements as needed.

```javascript.interactive
var enabled = true;
if(enabled) {
  return 1234;
}
else {
  return 0;
}
```

### Looping Constructs

'for' loops provide the ability to execute a block of code a number of times.
The basic syntax is

`for(<loop initialization>; <truth test>; <increment statement>) { <block> }`

The *loop initialization* code is executed to start the loop, and the program
keeps executing the *block* statement as long as the *truth test* evaluates
to `true`. Each time the block runs, the *increment statement* is executed to
move to the next iteration in the loop.

A simple example looks like:

```javascript.interactive
var message = '';
for(var index = 0; index < 10; index++) {
  if(index > 0) {
    message += ', ';
  }
  message += index;
}
return message;
```

There are a couple of new concepts here:

* `++` is the increment operator, which adds one to the value
* `+=` is the add and assign shortcut - this statement is equivalent to
`message = message + index`
* Note that the addition operator performs text concatenation here - because
`message` is a string, the second argument is converted to a string as well

## Logical Statements

At the heart of controlling program logic is defining logical statements
that match the conditions that should trigger different behavior in a 
program.

### Equality Operators

JavaScript has two sets of comparison operators to test whether variables
match a certain value:

* `==` and `!=`: loose comparison, attempts to convert values to the same
time before comparing
* `===` and `!==`: strict comparison, only returns true if the arguments 
have the same type and value

For [various reasons](http://oreilly.com/javascript/excerpts/javascript-good-parts/bad-parts.html),
the first set can produce inconsistent and strange behavior, and it is 
typically recommended to only use the latter.

```javascript.interactive
var color = 'black';
if(color === 'black') {
  return 'dark';
}
else if(color === 'white') {
  return 'light';
}
else {
  return 'neither';
}
```

### Numeric Comparisons

In addition to the equality operators, numeric comparisons are extremely
useful to test whether values fall into particular ranges:

```javascript.interactive
var score = 6;
if(score >= 7) {
  return 'great';
}
else if(score >= 5) {
  return 'ok';
}
else if(score > 0) {
  return 'poor';
}
```

Note that even though the second and third statements evaluate to `true`,
the code *short-circuits* and stops executing after the first statement that
matches.

### Boolean Logic Operators

We've already seen the `!` operator, which inverts the value of a boolean
statement. Two additional operators are essential for defining conditions:

* And (`&&`): returns `true` when both arguments are `true`
* Or (`||`): returns `true` if either argument is `true`

```javascript.interactive
var enabled = false;
var priority = 15;
if(enabled && (priority > 10)) {
  return 'first';
}
else if(!enabled || (priority === 5)) {
  return 'second';
}
```

Note that similar to the *if* statements described above, these operators
*short-circuit* once the outcome of the operator is known. For instance, if
the first argument in an *and* statement returns `false`, the interpreter
does not even evaluate the second statement (because the result is `false`
regardless of the second value).

### Boolean Coercion

A final note about boolean expressions is that JavaScript will coerce any
value in a statement to a `true` or `false` value in order to evaluate the
conditional block.

Several values are *falsey*, and thus evalute to `false` in a boolean
context:

* `false` - of course
* `0` - numeric zero
* `''` - empty string
* `null` and `undefined`

Everything else evaluates to `true`

```javascript.interactive
var value = '';
if(value) {
  return 'something';
}
else {
  return 'nothing';
}
```

This *usually* does what you want, but it often is often better to be as
explicit as possible when defining conditions to avoid 

## Functions

Functions allow you to create reusable chunks of code in order to simplify
writing program. In most realistic programs, certain functionality is used
over and over, therefore encapsulating that logic in a function organizes
the code better.

Functions take some input and produce an output (note that the input and 
output might be `null` or `undefined` depending on the circumstances).

Because functions are an essential aspect of working with JavaScript, there
is an upcoming section devoted specifically to how they work. For now,
we'll just cover the basics.

###Function Syntax

The basic syntax for defining a function is:

```javascript
var functionName = function(parameter1, parameter2) {
  // code goes here
  return result;
}
```

This actually defines an *anonymous* function, and assigns it to the
`functionName` variable. The parameter list can be zero or more variables
that will be passed to the function. The return statement is needed to
produce output - otherwise the function will return `undefined`.

Note that defining a function simply defines the logic contained within the
method, it *does not* actually execute the code. For instance:

```javascript.interactive
var safeLength = function(text) {
  if(!text) {
    return 0;
  }
  // convert parameter to a string if needed
  else if(typeof(text) !== 'string') {
    text = String(text);
  }
  return text.length;
}
```

Functions are executed, or *invoked*, using parentheses to supply arguments 
to the method: `var length = safeLength( theValue );`


## Arrays

`TODO`

## Objects

`TODO`
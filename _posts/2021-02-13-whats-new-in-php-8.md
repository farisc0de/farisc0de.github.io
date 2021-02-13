---
title: "What's new in PHP 8"
published: true
---

Hey,

In this article will go into PHP 8 and the new fetures and changes that PHP introduced.

And I will show you the different between PHP 7 and PHP 8

## PHP 8

PHP 8.0 is a major update of the PHP language.

It contains many new features and optimizations including named arguments
union types, attributes, constructor property promotion, match expression,
nullsafe operator, JIT, and improvements in the type system, error handling, and consistency.

Better performance, better syntax, improved type safety.

## Index
1. Named arguments
2. Attributes
3. Constructor property promotion
4. Union types
5. Match expression
6. Nullsafe operator
7. Saner string to number comparisons
8. Consistent type errors for internal functions
9. Just-In-Time compilation


## Named arguments

1. Specify only required parameters, skipping optional ones.
2. Arguments are order-independent and self-documented.

#### PHP 7
```php
htmlspecialchars($string, ENT_COMPAT | ENT_HTML401, 'UTF-8', false);
```

#### PHP 8

```php
htmlspecialchars($string, double_encode: false);
```

## Attributes

Instead of PHPDoc annotations, you can now use structured metadata with PHP's native syntax.

#### PHP 7

```php
class PostsController
{
    /**
     * @Route("/api/posts/{id}", methods={"GET"})
     */
    public function get($id) { /* ... */ }
}
```

#### PHP 8

```php
class PostsController
{
    #[Route("/api/posts/{id}", methods: ["GET"])]
    public function get($id) { /* ... */ }
}
```

## Constructor property promotion

Less boilerplate code to define and initialize properties.

#### PHP 7

```php
class Point {
  public float $x;
  public float $y;
  public float $z;

  public function __construct(
    float $x = 0.0,
    float $y = 0.0,
    float $z = 0.0
  ) {
    $this->x = $x;
    $this->y = $y;
    $this->z = $z;
  }
}
```

#### PHP 8

```php
class Point {
  public function __construct(
    public float $x = 0.0,
    public float $y = 0.0,
    public float $z = 0.0,
  ) {}
}
```

## Union types

Instead of PHPDoc annotations for a combination of types, you can use native union type declarations that are validated at runtime.

#### PHP 7

```php
class Number {
  /** @var int|float */
  private $number;

  /**
   * @param float|int $number
   */
  public function __construct($number) {
    $this->number = $number;
  }
}

new Number('NaN'); // Ok
```

#### PHP 8

```php
class Number {
  public function __construct(
    private int|float $number
  ) {}
}

new Number('NaN'); // TypeError
```

## Match expression

The new match is similar to switch and has the following features:

1. Match is an expression, meaning its result can be stored in a variable or returned.
2. Match branches only support single-line expressions and do not need a break; statement.
3. Match does strict comparisons.

#### PHP 7

```php
switch (8.0) {
  case '8.0':
    $result = "Oh no!";
    break;
  case 8.0:
    $result = "This is what I expected";
    break;
}
echo $result;
//> Oh no!
```

#### PHP 8

```php
echo match (8.0) {
  '8.0' => "Oh no!",
  8.0 => "This is what I expected",
};
//> This is what I expected
```

## Nullsafe operator

Instead of null check conditions, you can now use a chain of calls with the new nullsafe operator. 

When the evaluation of one element in the chain fails, the execution of the entire chain aborts and the entire chain evaluates to null.

#### PHP 7

```php
$country =  null;

if ($session !== null) {
  $user = $session->user;

  if ($user !== null) {
    $address = $user->getAddress();
 
    if ($address !== null) {
      $country = $address->country;
    }
  }
}
```

#### PHP 8

```php
$country = $session?->user?->getAddress()?->country;
```

## Saner string to number comparisons

When comparing to a numeric string, PHP 8 uses a number comparison. Otherwise, it converts the number to a string and uses a string comparison.

#### PHP 7

```php
0 == 'foobar' // true
```

#### PHP 8

```php
0 == 'foobar' // false
```

## Consistent type errors for internal function

Most of the internal functions now throw an Error exception if the validation of the parameters fails.

#### PHP 7

```php
strlen([]); // Warning: strlen() expects parameter 1 to be string, array given

array_chunk([], -1); // Warning: array_chunk(): Size parameter expected to be greater than 0
```

#### PHP 8

```php
strlen([]); // TypeError: strlen(): Argument #1 ($str) must be of type string, array given

array_chunk([], -1); // ValueError: array_chunk(): Argument #2 ($length) must be greater than 0
```

## Just-In-Time compilation

PHP 8 introduces two JIT compilation engines. 

Tracing JIT, the most promising of the two, shows about 3 times better performance on synthetic benchmarks and 1.5–2 times improvement on some specific long-running applications.

Typical application performance is on par with PHP 7.4.

![Relative JIT contribution to PHP 8 performance](https://f.top4top.io/p_1870hlfxl1.png)

## Other Changes

### Type system and error handling improvements

1. Stricter type checks for arithmetic/bitwise operators
2. Abstract trait method validation
3. Correct signatures of magic methods
4. Reclassified engine warnings
5. Fatal error for incompatible method signatures
6. The @ operator no longer silences fatal errors.
7. Inheritance with private methods
8. Mixed type
9. Static return type
10. Types for internal functions Email thread
11. Opaque objects instead of resources for Curl, Gd, Sockets, OpenSSL, XMLWriter, and XML extensions

### Other syntax tweaks and improvements

1. Allow a trailing comma in parameter lists RFC and closure use lists
2. Non-capturing catches
3. Variable Syntax Tweaks
4. Treat namespaced names as single token
5. Throw is now an expression
6. Allow ::class on objects

### New Classes, Interfaces, and Functions

1. Weak Map class
2. Stringable interface
4. str_contains(), str_starts_with(), str_ends_with()
5. fdiv()
6. get_debug_type()
7. get_resource_id()
8. token_get_all() object implementation
9. New DOM Traversal and Manipulation APIs

## In th end

For source downloads of PHP 8 you can find it [here](http://www.php.net/downloads)

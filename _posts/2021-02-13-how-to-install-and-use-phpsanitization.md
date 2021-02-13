---
title: "How to install and use PhpSanitization"
published: true
---

Hey Readers.

In this simple article I will explain how to install and use PhpSanitization.

But I will tell what is PhpSanitization how can it help you.

## What is PhpSanitization

PhpSanitization is a simple class that can verify and clean values to assure they are valid.

It can take a given string and remove or encode certain types of text values, so it can be displayed in Web pages lowering the risk of being used to perform security attacks.

The class can also sanitize arrays of data by processing the array values one by one.

## Features

1. Out-Of-The-Box.
2. Support String, Arrays, and Associative Arrays.
3. Escape PDO and SQL queries.
4. Easy to Use.

## How to use

First you need to install composer before installing it.

You can install Composer simplay from here [Composer](https://getcomposer.org/).

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

After installing composer now you will be able install PhpSanitization.

Cd to your project folder using the terminal after that use this command to install the project using composer

``` composer require phpsanitization/phpsanitization ```

## How to use

The usage of the project is simple.

In your form handler add this block of code to sanitize any POST request.

```php
include_once 'vendor/autoload.php';

use PhpSanitization\PhpSanitization\Sanitization;

$s = new Sanitization();

$post = $s->useSanitize($_POST);
```

## Documentation

The documentation for PhpSanitization is available [here](https://farisotaibi.com/PhpSanitization/).

## In the End

If you have any ideas or like to contribute please do this the project GitHub page.

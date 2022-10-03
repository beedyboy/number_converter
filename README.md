# Kata: number to french converter

Number can be hard to write in French.

[https://fr.wikipedia.org/wiki/Nombres_en_français](https://fr.wikipedia.org/wiki/Nombres_en_fran%C3%A7ais)

## Quick Start

  The quickest way to get started with this package is to clone the git repository [`number_converter`](https://github.com/beedyboy/number_converter) as shown below:

```console
$ git clone git@github.com:beedyboy/number_converter.git
```

  Change directory to the newly cloned repository:

```console
$ cd number_converter
```

  Install dependencies:

```console
$ npm install
```

  Start the server:

```console
$ npm start:dev
```
## Usage
- `Entry Point` - The main entry point is the `index.ts file` where you can import the `NumberParser` class and use the available methods.
- `Custom Point` - You can use any file of choice to run the application, however, you will need to import the main module `FrenchConverter`, this gives you the opportunity to use many other methods (the main methods) available to convert your number to french.

### Example Implementation

<code>
const converter = new NumberParser(new FrenchConverter());
console.log(converter.singleNumber(999999));
console.log(converter.singleNumber(100));
console.log(converter.singleNumber(200));
console.log(converter.singleNumber(802));
console.log(converter.singleNumber(1110));
console.log(converter.singleNumber(180000));
console.log(converter.singleNumber(2000));
console.log(converter.multipleNumbers([0, 2, 10]));
</code>


### Running Tests

To run the test suite, first install the dependencies, then run `npm test`:

```console
$ npm install
$ npm test
```
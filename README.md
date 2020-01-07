# ReasonML uncaught exception demo

[StackOverflow question](https://stackoverflow.com/questions/59619235/how-to-catch-the-failure-exception-raised-during-number-parsing-in-reasonml)

I have created this boilerplate using `bsb -init -theme react-hooks` and then I have removed the react-related code.

## Run

```sh
npm install
npm run server
# in a new tab
npm start
```

Open a new web page to [http://localhost:8000/](http://localhost:8000/).

## Issue

If running in a browser there is an uncaught `Failure` exception.

In [index.bs.js](https://github.com/jakub-zawislak/reasonml-exception-demo/blob/master/src/index.bs.js)
there is a comparison:

```js
exn[0] === Caml_builtin_exceptions.failure
```

Both `exn[0]` and `Caml_builtin_exceptions.failure` are `["Failure", -2, tag: 248]`,
 but the comparison of these doesn't return `true`.

```js
console.log(exn[0])                                     // ["Failure", -2, tag: 248]
console.log(Caml_builtin_exceptions.failure)            // ["Failure", -2, tag: 248]
console.log(exn[0] === Caml_builtin_exceptions.failure) // false
```

There is no problem with running from command line:
```sh
node src/index.bs.js
```

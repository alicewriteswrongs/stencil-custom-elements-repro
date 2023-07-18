# defineCustomElements type issue repro

This project showcases an issue with the typing for `defineCustomElements`.

The repro includes a Stencil project and a project which imports and uses that
project. The importing project includes a typescript file (`test.ts`) which typechecks
but which fails at runtime, showing that the types are not accurate!

To test it out do:

```sh
npm install
npm run build
npm start
```

you should see a console like like 

```
Uncaught TypeError: Cannot read properties of undefined (reading 'then')
    at test.js:763:25
    at test.js:766:3
```

even though if you open up `packages/importing-package/test.ts` you won't see
any errors in the editor.

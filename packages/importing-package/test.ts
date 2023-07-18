import { defineCustomElements } from "stencil-project/loader"

defineCustomElements().then(() => {
  console.log('defineCustomElements');
})

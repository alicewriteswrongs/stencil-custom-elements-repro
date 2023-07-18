import { defineCustomElements } from "test-component/loader"

defineCustomElements().then(() => {
  console.log('defineCustomElements');
})

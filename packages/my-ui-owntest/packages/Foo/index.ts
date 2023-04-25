import { App, Plugin } from 'vue';
import MyFoo from './src/index.vue';

export const FooPlugin: Plugin = {
  install(app: App) {
    app.component('my-foo', MyFoo);
  },
};

export {
  MyFoo,
};

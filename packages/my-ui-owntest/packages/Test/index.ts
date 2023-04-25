import { App, Plugin } from 'vue';
import MyTest from './src/index.vue';

export const TestPlugin: Plugin = {
  install(app: App) {
    app.component('my-test', MyTest);
  },
};

export {
  MyTest,
};

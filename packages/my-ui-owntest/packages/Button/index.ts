import { App, Plugin } from 'vue';
import MyButton from './src/index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('my-button', MyButton);
  },
};

export { MyButton };
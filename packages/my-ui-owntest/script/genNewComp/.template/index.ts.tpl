import { App, Plugin } from 'vue';
import My{{ compName }} from './src/index.vue';

export const {{ compName }}Plugin: Plugin = {
  install(app: App) {
    app.component('my-{{ compClassName }}', My{{ compName }});
  },
};

export {
  My{{ compName }},
};

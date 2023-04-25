/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { TestPlugin } from './Test';

const MYUiPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
    TestPlugin.install?.(app);
  },
};

export default MYUiPlugin;

export {MyButton} from './Button'
export {MyFoo} from './Foo'
export {MyTest} from './Test'
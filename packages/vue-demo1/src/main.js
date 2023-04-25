import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import mzlUi from "mzl-ui";
import MyUI from "my-ui-owntest";
const app = createApp(App);
// app.use(ElementPlus);
// console.log(MyUI);
app.use(MyUI);
app.mount('#app');

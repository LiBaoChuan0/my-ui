<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import { mButton } from "mzl-ui";
// import { ElButton, ElTree, ElDialog } from 'element-plus'
import { isNumber } from 'my-utils/is-number'
import { MyButton, MyTest, MyFoo } from "my-ui-owntest";
isNumber('123');
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <m-button>点击</m-button>
<m-input  placeholder="基本使用"></m-input> -->
<!-- <el-button>我是 ElButton</el-button>
<ElTree></ElTree>
<el-dialog></el-dialog> -->
<my-foo></my-foo>
<my-test></my-test>
<!-- <my-button></my-button>
<my-foo></my-foo> -->
<!-- Button -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<template>
  <div class="my-{{ compClassName }}">
    我是{{ compZhName }}组件
  </div>
</template>
<script lang="ts">
export default {
  name: "My{{compName}}",
};
</script>
<script lang="ts" setup>

</script>

<style scoped>
.my-{{ compClassName }} {
  
}
</style>
<!--
 * @Descripttion: 组件预览界面，用于调试组件
 * @Author: shenqiang
 * @Date: 2021-09-06 16:38:22
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-09-07 13:56:16
-->
<!--  -->
<template>
  <div class="">
    <testSq />

    <!-- <a-icon :component="logoSvg"></a-icon> -->
    <a-icon type="setting" theme="filled" :style="{ color: 'red' }" />
    <a-icon :component="TestSvg" class="svg-class"/>
    <!-- <a-icon type="star" theme="filled" /> -->
  </div>
</template>

<script>
import testSq from '../../../../packages/test-sq-vue/index.js'
import TestSvg from '@/assets/test.svg?inline'
export default {
  components: { testSq },
  data() {
    return {
      TestSvg,
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style scoped>
.svg-class{
  color: green;
  font-size: 30px;
 
}
</style>

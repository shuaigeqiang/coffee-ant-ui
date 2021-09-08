<!--
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-09-07 10:44:20
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-09-07 10:46:25
-->
<!--  -->
<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'coffeeSvg',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

/*
 * @Descripttion: 
 * @Author: shenqiang
 * @Date: 2021-09-07 10:43:37
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-09-07 10:53:26
 */


import Vue from 'vue'
import SvgIcon from './svg-vue'// svg组件

// register globally
Vue.component('coffee-svg', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

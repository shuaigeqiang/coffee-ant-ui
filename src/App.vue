<!--
 * @Descripttion:
 * @Author: shenqiang
 * @Date: 2021-09-03 16:42:49
 * @LastEditors: shenqiang
 * @LastEditTime: 2021-09-06 11:28:01
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <!-- <testVue /> -->
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
// import testVue from 'module-test-sq'
export default {
  data () {
    return {}
  },
  components: {
    // testVue
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && setDocumentTitle(`${i18nRender(title)} - ${domTitle}`)

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  }
}
</script>

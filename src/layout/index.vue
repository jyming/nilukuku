<template>
  <page-header
    :title="pageStyle.navigationBarTitleText"
    :text-style="pageStyle.navigationBarTextStyle"
    :background-color="pageStyle.navigationBarBackgroundColor"
  />
  <page-body />
</template>
<script>
import PageHeader from './page-header/index.vue'
import PageBody from './page-body/index.vue'
import pages from '../../pages'

export default {
  name: 'Layout',
  components: { PageHeader, PageBody },
  data() {
    return {
      pageStyle: {}
    }
  },
  created() {
    this.setPageStyle()
  },
  methods: {
    setPageStyle() {
      const globalStyle = pages.globalStyle
      const pageStyle = this.$route.meta.style

      this.pageStyle = this.$utils.deepMerge(globalStyle, pageStyle)
    }
  }
}
</script>
<template>
  <page-header
    :mode="headerMode"
    :title="pageStyle.navigationBarTitleText"
    :text-style="pageStyle.navigationBarTextStyle"
    :background-color="pageStyle.navigationBarBackgroundColor"
    @menu="pageMenu"
  />
  <page-body ref="pageBody" />
</template>
<script>
import PageHeader from "./page-header/index.vue";
import PageBody from "./page-body/index.vue";
import pages from "../../pages";

export default {
  name: "Layout",
  components: { PageHeader, PageBody },
  data() {
    return {
      headerMode: "back",
      pageStyle: {},
    };
  },
  watch: {
    $route(route) {
      this.setPageStyle(route);
    },
    $route: {
      handler(route) {
        this.setPageStyle(route);
      },
      immediate: true,
    },
  },
  methods: {
    setPageStyle(route) {
      const globalStyle = pages.globalStyle;
      const pageStyle = route.meta.style;

      this.headerMode = route.name === "Index" ? "menu" : "back";

      document.title = pageStyle.navigationBarTitleText;

      this.pageStyle = this.$utils.deepMerge(globalStyle, pageStyle);
    },
    pageMenu(){
      this.$refs.pageBody.pageMenu()
    }
  },
};
</script>
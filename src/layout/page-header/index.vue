<template>
  <div class="page-header">
    <div class="page-header-left">
      <div
        v-if="mode === 'back'"
        class="left-btn flex-center"
        @click="pageBack"
      >
        <var-icon namespace="al-icon" name="back" />
      </div>
      <div
        v-if="mode === 'menu'"
        class="left-btn flex-center"
        @click="pageMenu"
      >
        <var-icon namespace="al-icon" name="menu" />
      </div>
    </div>
    <div class="page-header-title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "PageHeader",
  props: {
    mode: {
      type: String,
      default: "back",
    },
    title: {
      type: String,
      default: "",
    },
    textStyle: {
      type: String,
      default: "white",
    },
    backgroundColor: {
      type: String,
      default: "#3A7AFE",
    },
  },
  methods: {
    pageBack() {
      this.$router.back();
    },
    pageMenu() {
      this.$emit("menu");
    },
  },
};
</script>
<style lang="scss">
.page-header {
  display: flex;
  align-items: center;
  height: 44px;
  background-color: v-bind(backgroundColor);
  color: v-bind('textStyle==="white"?"#fff":"#232222"');
}
.page-header-left {
  width: 40px;
  height: 100%;
  margin-right: 5px;
  .left-btn {
    width: 100%;
    height: 100%;
  }
  .var-icon {
    font-size: 22px;
    font-weight: lighter;
  }
}
.page-header-title {
  font-size: 16px;
}
</style>
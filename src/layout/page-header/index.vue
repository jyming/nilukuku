<template>
  <div class="page-header">
    <div class="page-header-back flex-center">
      <var-icon name="chevron-left" />
    </div>
    <div class="page-header-title">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    textStyle: {
      type: String,
      default: 'white'
    },
    backgroundColor: {
      type: String,
      default: '#3A7AFE'
    }
  }
}
</script>
<style lang="scss">
.page-header {
  display: flex;
  align-items: center;
  height: 44px;
  background-color: v-bind(backgroundColor);
  color: v-bind('textStyle==="white"?"#fff":"#232222"');
}
.page-header-back {
  width: 37px;
  height: 100%;
  margin-right: 5px;
  .var-icon {
    font-size: 38px;
  }
}
.page-header-title {
  font-size: 16px;
}
</style>
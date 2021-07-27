<template>
  <div class="page-body">
    <router-view ref="page" />
  </div>
</template>
<script>
export default {
  name: "PageBody",
  methods: {
    pageMenu() {
      this.$nextTick(()=>{
        mycharts.resize();
      })
      console.log(this.$refs.page);
    },
  },
};
</script>
<style lang="scss">
</style>
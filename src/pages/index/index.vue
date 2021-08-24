<template>
  <div class="container">
    <div class="navigate-cell">
      <var-button @click="navigateTo('inputs')">文件选择</var-button>
      <var-button @click="navigateTo('video')">视频播放</var-button>
      <var-button @click="navigateTo('wx')">打开小程序</var-button>
    </div>
  </div>
  <var-popup position="left" v-model:show="popup">
    <div class="block">
      素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。
    </div>
  </var-popup>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
    };
  },
  methods: {
    navigateTo(type) {
      this.$router.push(`/pages/${type}`);
    },
    onNavigationBarMenuTap() {
      this.popup = true;
    },
  },
};
</script>

<style lang="scss">
.navigate-cell {
  .var-button {
    width: 70%;
    height: 40px;
    display: block;
    margin: 20px auto;
    border-radius: 40px;
  }
}
</style>

<template>
  <div class="container pd">
    <var-input
      v-model="val"
      placeholder="请输入路径"
      style="margin-top:20px"
    />
    <var-button
      @click="openWX"
      style="margin-top:20px"
    >跳转齐鲁工惠</var-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'pages/service/service'
    }
  },
  mounted() {},
  methods: {
    openWX() {
      labor.openWxapp('gh_610ae6ebd44b', this.val)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

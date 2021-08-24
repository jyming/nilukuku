<template>
  <div class="container pd">
    <div style="display:flex;align-items:center;margin-top:20px">
      <var-input
        v-model="val"
        placeholder="请输入路径"
      />
      <var-button
        @click="openWX(val)"
        style="margin-left:10px"
      >跳转</var-button>
    </div>
    <var-button
      @click="openWX('pages/service/service')"
      style="margin-top:20px"
    >跳转服务</var-button>
    <var-button
      @click="openWX('pages/individual/individual')"
      style="margin-top:20px"
    >跳转我的</var-button>
    <var-button
      @click="openWX('pages/workerCircle/workerCircle')"
      style="margin-top:20px"
    >跳转工友圈</var-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ''
    }
  },
  mounted() {},
  methods: {
    openWX(link) {
      labor.openWxapp('gh_610ae6ebd44b', link)
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

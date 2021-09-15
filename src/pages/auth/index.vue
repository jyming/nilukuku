<template>
  <div class="container pd">
    <var-button type="primary" @click="open('join')">入会</var-button>
    <var-button type="primary" @click="open('transfer')">转会</var-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        link: "",
      },
      val: "",
      sheet: {
        show: false,
        actions: [
          {
            name: "首页",
            link: "",
          },
          {
            name: "服务",
            link: "pages/service/service",
          },
          {
            name: "我的",
            link: "pages/individual/individual",
          },
          {
            name: "工友圈",
            link: "pages/workerCircle/workerCircle",
          },
        ],
      },
    };
  },
  methods: {
    open(type) {
      if (type === "join") {
        labor.openJoin();
      } else {
        labor.openTransfer();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.var-button {
  margin-top: 30px;
}
</style>

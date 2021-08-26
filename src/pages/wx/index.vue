<template>
  <div class="container pd">
    <var-form ref="form">
      <var-input
        v-model="form.id"
        clearable
        :rules="[(v) => !!v || '原始id不能为空']"
        placeholder="小程序原始id"
      />
      <var-input v-model="form.link" clearable placeholder="小程序跳转路径" />
      <var-button type="primary" @click="validate">打开小程序</var-button>
    </var-form>
    <var-button class="labor-btn" type="primary" @click="sheet.show = true"
      >打开齐鲁工惠小程序</var-button
    >
    <var-action-sheet
      :actions="sheet.actions"
      v-model:show="sheet.show"
      @select="handleSelect"
    />
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
    validate() {
      this.$refs.form.validate().then((status) => {
        if (status) {
          const { id, link } = this.form;
          this.openWX(id, link);
        }
      });
    },
    handleSelect({ link }) {
      this.openWX("gh_610ae6ebd44b", link);
    },
    openWX(id, link) {
      labor.openWxapp(id, link);
    },
  },
};
</script>

<style lang="scss" scoped>
.var-form {
  width: 90%;
  .var-input {
    margin-bottom: 10px;
  }
  .var-button {
    width: 100%;
    margin-top: 10px;
  }
}
.labor-btn {
  width: 90%;
  margin-top: 20px;
}
</style>

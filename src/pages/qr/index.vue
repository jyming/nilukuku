<template>
  <div class="container">
    
  </div>
</template>

<script>
import qr from "../../assets/image/qr.png";
export default {
  data() {
    return {
      qr,
    };
  },
};
</script>

<style lang="scss" scoped>
.rich-text {
  overflow: hidden;
  * {
    max-width: 100% !important;
  }
  a {
    display: inline-block;
  }
  iframe,
  video {
    display: block;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    width: 100% !important;
  }
  video {
    background-color: #333;
  }
}
</style>

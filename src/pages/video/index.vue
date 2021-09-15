<template>
  <div class="container">
    <div class="news-text"><p style="text-align: center;">一线职工求学圆梦行动职工报读指引</p><p style="text-align: center;"><video id="tmpVedio0" class="edui-upload-video video-js vjs-default-skin video-js" controls="" preload="none" width="420" height="280" src="https://zxfw.sdgh.org.cn/oss/download/path/cms/M00/01/09/CsgjWGExylaANSsMAEOCu-l1H1o950.mp4" data-setup="{}" style="height: 192.938px;"><source src="https://zxfw.sdgh.org.cn/oss/download/path/cms/M00/01/09/CsgjWGExylaANSsMAEOCu-l1H1o950.mp4" type="video/mp4"></video></p><p><br></p><p style="text-align: center;">一线职工求学圆梦行动各级工会指引</p><p style="text-align: center;"><video class="edui-upload-video  vjs-default-skin  video-js video-js" controls="" preload="none" width="420" height="280" src="https://zxfw.sdgh.org.cn/oss/download/path/cms/M00/01/09/CsgjWGExyoeATPD4AJuP2b5T2SE871.mp4" data-setup="{}" style="height: 192.938px;"><source src="https://zxfw.sdgh.org.cn/oss/download/path/cms/M00/01/09/CsgjWGExyoeATPD4AJuP2b5T2SE871.mp4" type="video/mp4"></video></p></div>
  </div>
</template>

<script>
import Player from 'xgplayer'
export default {
  data() {
    return {
      src: "https://zxfw.sdgh.org.cn/oss/download/path/cms/M00/01/09/CsgjWGExylaANSsMAEOCu-l1H1o950.mp4",
    };
  },
  mounted() {
    // this.initVideo();
  },
  methods: {
    // 初始化视频播放器
    initVideo() {
      let player = new Player({
        id: "video",
        url: this.src,
      });
    },
  },
};
</script>

<style>
.video {
  display: block;
  width: 300px;
  height: calc(300px / 1.777777777777778);
  margin: 20px auto;
  background-color: #000;
}
</style>

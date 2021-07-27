<template>
  <div class="container">
    <video
      class="video"
      src="https://www.runoob.com/try/demo_source/movie.mp4"
      controls
    ></video>
  </div>
</template>

<script>
export default {
  mounted() {
    const video = document.querySelector("video");
    video.addEventListener("play", () => {
      labor.videoPlay('https://www.runoob.com/try/demo_source/movie.mp4');
      video.pause();
    });
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

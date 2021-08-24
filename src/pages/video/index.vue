<template>
  <div class="container">
    <video
      class="video"
      src="https://www.runoob.com/try/demo_source/movie.mp4"
      :poster="cover"
    ></video>
  </div>
</template>

<script>
import cover from '../../assets/image/cover.png'
import photo1 from '../../assets/image/photo1.jpg'
export default {
  data() {
    return {
      cover,
      photo1
    }
  },
  mounted() {
    const video = document.querySelector('video')
    video.addEventListener('play', () => {
      labor.videoPlay('https://www.runoob.com/try/demo_source/movie.mp4')
      video.pause()
    })
  }
}
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

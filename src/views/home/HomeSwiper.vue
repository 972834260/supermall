<!--  -->
<template>
  <div>
    <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: '',
  props: {
    banners: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: { Swiper, SwiperItem }
}
</script>

<style lang='scss' scoped>

</style>

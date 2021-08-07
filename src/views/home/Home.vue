<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners='banners'></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view/>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>

  </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { getHomeMultidata } from 'network/home'
import HomeSwiper from 'views/home/HomeSwiper.vue'
import RecommendView from './RecommendView.vue'
import FeatureView from './FeatureView.vue'
import { } from ''

export default {
  components: { NavBar, HomeSwiper, RecommendView, FeatureView },
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  padding-bottom: 50px;
}
.home-nav {
  background-color:var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

</style>

<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div>
  </nav-bar>
  <home-swiper :banners='banners'></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view/>
  <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick='tabClick'></tab-control>
  <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import { getHomeMultidata } from 'network/home'
import HomeSwiper from 'views/home/HomeSwiper.vue'
import RecommendView from './RecommendView.vue'
import FeatureView from './FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import { getHomeGoods } from '@/network/home'
import GoodsList from '@/components/content/goods/GoodsList.vue'

export default {
  components: { NavBar, HomeSwiper, RecommendView, FeatureView, TabControl, GoodsList },
  name: 'Home',
  data() {
    return {
      currentType: 'pop',
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      }
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 网路请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log('this.recommends: ', this.recommends)
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0 :
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }

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
.tab-control{
  position: sticky;
  top: 44px;
}

</style>

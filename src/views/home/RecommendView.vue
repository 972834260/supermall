<!--  -->
<template>
  <div id="recommend">
    <div v-for="item in recommends" :key="item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  data() {
    return {
    }
  },
  props: {
    recommends: {
      Type: Array,
      default() {
        return []
      }
    }
  },

  components: {}
}

</script>
<style lang='scss' scoped>
#recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 8px;
  }
</style>

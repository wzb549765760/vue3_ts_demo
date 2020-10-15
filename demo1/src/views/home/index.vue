<template>
<div class="home">
  <!--首页头部-->
  <home-header :category="category" @setCurrentCategory="setCurrentCategory"></home-header>
  <!--轮播图-->
  <home-swiper></home-swiper>
  <!--课程列表-->
  <home-list></home-list>
</div>
</template>

<script lang="ts">
import HomeHeader from './home-header.vue'
import HomeList from './home-list.vue'
import HomeSwiper from './home-swiper.vue'
import {
  computed,
  defineComponent
} from 'vue'
import {
  Store,
  useStore
} from 'vuex'
import {
  IGlobalState
} from '../../store/index'

import {
  CATOGORY_TYPES
} from '@/typings/home'

import * as Types from '@/store/action-types'
// 专门为修改分类使用的 options api
function userCategory(store: Store < IGlobalState > ) {
  let category = computed(() => store.state.home.currentCatogory)

  function setCurrentCategory(category: CATOGORY_TYPES) {
    store.commit(`home/${Types.SET_CATOGORY}`, category)
  }
  return {
    category,
    setCurrentCategory,
  }
}

export default defineComponent({
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper,
  },
  setup(props, content) {
    // 1需要获取vuex中的分类状态,有个更改状态的功能
    let store = useStore < IGlobalState > ()
    let {
      category,
      setCurrentCategory
    } = userCategory(store)

    return {
      category,
      setCurrentCategory,
    }
  },
})
</script>

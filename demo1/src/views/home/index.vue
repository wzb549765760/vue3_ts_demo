<template>
<div class="home">
  <!--首页头部-->
  <home-header :category="category" @setCurrentCategory="setCurrentCategory"></home-header>
  <div class="home-container" style="padding-top:70px" ref="refreshElm">
    <!--轮播图-->
    <Suspense>
      <template #default>
        <home-swiper></home-swiper>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    <!--课程列表-->
    <home-list :lessonList="lessonList"></home-list>
    <div v-if="isLoading">loading...{{isLoading}}</div>
    <div v-if="!hasMore">到底了{{hasMore}}</div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.home-container {
  position: absolute;
  top: 50px;
  bottom: 50px;
  overflow-y: scroll;
  width: 100%;
}
</style>

<script lang="ts">
import HomeHeader from './home-header.vue'
import HomeList from './home-list.vue'
import HomeSwiper from './home-swiper.vue'
import {
  computed,
  defineComponent,
  onMounted,
  ref
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
import {
  useLoadMore
} from '../../hooks/useLoadMore';
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

function useLessonList(store: Store < IGlobalState > ) {
  const lessonList = computed(() => store.state.home.lessons.list)
  onMounted(() => {
    //初始化加载 如果已经有数据了就不要初始化加载了
    if (lessonList.value.length == 0) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`)
    }
  })

  return {
    lessonList,
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
    // 分类
    let {
      category,
      setCurrentCategory
    } = userCategory(store)
    // 课程获取
    let {
      lessonList
    } = useLessonList(store)

    // 获取真实dom
    const refreshElm = ref < null | HTMLElement > (null)
    const {
      isLoading,
      hasMore
    } = useLoadMore(
      refreshElm,
      store,
      `home/${Types.SET_LESSON_LIST}`
    )
    return {
      category,
      setCurrentCategory,
      lessonList,
      refreshElm,
      isLoading,
      hasMore
    }
  },
})
</script>

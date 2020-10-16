<template>
<div>
  <van-swipe class="my-swipe">
    <van-swipe-item v-for="(image, index) in sliderList" :key="index">
      <img :src="image.url" style="max-width:100%" />
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent
} from 'vue'
import {
  useStore
} from 'vuex'
import {
  IGlobalState
} from '../../store'

import * as Types from '@/store/action-types'

export default defineComponent({
  async setup(props, context) {
    // 页面一加载就获取数据
    let store = useStore < IGlobalState > ()
    let sliderList = computed(() => store.state.home.sliders)

    if (sliderList.value.length == 0) {
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
    }
    return {
      sliderList,
    }
  },
})
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>

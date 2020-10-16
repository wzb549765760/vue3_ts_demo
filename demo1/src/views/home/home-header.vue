<template>
<div class="home-header">
  <img src="@/assets/logo.png" alt="" />
  <!-- 以前的v-model = input事件+value-->
  <van-dropdown-menu>
    <van-dropdown-item :modelValue="category" :options="options" @change="change" />
  </van-dropdown-menu>
</div>
</template>

<style lang="scss" scoped>
.home-header {
  height: 70px;
  background: #202020;
  display: flex;
  justify-self: space-between;
  align-self: center;
  padding: 10px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;

  img {
    flex: 1;
    height: 50px;
  }
}
</style>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  toRefs
} from 'vue'
import {
  CATOGORY_TYPES
} from '@/typings/home'
export default defineComponent({
  props: {
    category: {
      type: Number as PropType < CATOGORY_TYPES > ,
    },
  },

  setup(props, context) {
    let state = reactive({
      options: [{
          text: '全部课程',
          value: CATOGORY_TYPES.ALL,
        },
        {
          text: 'react课程',
          value: CATOGORY_TYPES.REACT,
        },
        {
          text: 'vue课程',
          value: CATOGORY_TYPES.VUE,
        },
        {
          text: 'node课程',
          value: CATOGORY_TYPES.NODE,
        },
      ],
    })

    function change(value: CATOGORY_TYPES) {
      context.emit("setCurrentCategory", value);
    }

    return {
      ...toRefs(state),
      change,
    }
  },
})
</script>

<template>
<div>
  <van-card v-for="ll in lessonList" :key="ll.id" :price="ll.price" title="ll.title" :thumb="ll.poster">
    <template #tags>
      <van-tag plain type="danger">
        {{ formateCategory(ll.category) }}
      </van-tag>
    </template>
  </van-card>
</div>
</template>

<script lang="ts">
import {
  PropType
} from 'vue'
import {
  computed,
  defineComponent
} from 'vue'
import {
  ILesson,
  ILssons
} from '../../typings/home'

export default defineComponent({
  props: {
    lessonList: {
      type: Array as PropType < ILesson[] > ,
    },
  },
  setup(props, context) {
    function formateCategory(type: number) {
      switch (type) {
        case 1:
          return 'react课程'
        case 1:
          break
          return 'vue课程'
      }
    }

    return {
      formateCategory,
    }
  },
})
</script>

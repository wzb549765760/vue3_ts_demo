<template>
<div></div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType
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
    console.log(props.category)
  },
})
</script>

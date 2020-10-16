import { Ref, onMounted, computed } from 'vue';
import { Store } from 'vuex';
import { IGlobalState } from '../store/index';
// 防抖
import lodash from "lodash"
export function useLoadMore(refreshElm: Ref<null | HTMLElement>, store: Store<IGlobalState>, type: string) {

  let element: HTMLElement;
  // 防抖

  function _loadMore() {
    // 获取可是区域高度  卷曲的高度 整个高度

    let containerHeighr = element.clientHeight;
    let scrollTop = element.scrollTop;
    let scrollHeight = element.scrollHeight;
    if (containerHeighr + scrollTop + 20 >= scrollHeight) {
      store.dispatch(type);
    }
  }
  onMounted(() => {
    element = refreshElm.value as HTMLElement;
    element.addEventListener("scroll", lodash.debounce(_loadMore, 200))
  })

  const isLoading = computed(() => {
    return store.state.home.lessons.loading
  })

  const hasMore = computed(() => {
    return store.state.home.lessons.hasMore
  })

  return {
    isLoading,
    hasMore
  }
}
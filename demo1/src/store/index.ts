import { createStore } from 'vuex'
import home from "./modules/home"
import { IHomeState } from '@/typings/home';
export interface IGlobalState {
  home: IHomeState,//某个页面,某个模块可以在这里增加
}

const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  }
})

export default store

import { CATOGORY_TYPES, IHomeState, ISlider, ILssons } from '@/typings/home';
import { Module } from 'vuex';
import { IGlobalState } from '../index';
import * as Types from "../action-types"
import { getSliders, getLessons } from '../../api/home';

// 首页里应该存哪些数据
const state: IHomeState = {
  currentCatogory: CATOGORY_TYPES.REACT,//首页头部
  sliders: [],//轮播图
  lessons: {//课程列表
    hasMore: true,//有没有更多的数据
    loading: false,//默认有没有正在加载
    offset: 0,
    limit: 5,
    list: []//当前以及显示的数据
  }
}

// moduleli的参数 1 自己的状态  2 其它的状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATOGORY](state, payload: CATOGORY_TYPES) {
      state.currentCatogory = payload;
    },
    [Types.SET_SLIDER_LIST](state, payload: ISlider[]) {
      state.sliders = payload;
    },
    [Types.SET_LESSON_LIST](state, payload: ILssons) {
      state.lessons.list = [...state.lessons.list, ...payload.list];
      state.lessons.hasMore = payload.hasMore,
        state.lessons.offset = state.lessons.offset + payload.list.length;
    },
    [Types.SET_LOADING](state, payload: boolean) {
      state.lessons.loading = payload;
    },
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({ commit }) {
      let sliders = await getSliders<ISlider>();
      commit(Types.SET_SLIDER_LIST, sliders)
    },
    async [Types.SET_LESSON_LIST]({ commit }) {
      if (state.lessons.loading) {
        return;
      }

      if (!state.lessons.hasMore) {
        return
      }
      commit(Types.SET_LOADING, true);//开始加载
      let lessons = await getLessons<ILssons>(state.currentCatogory, state.lessons.offset, state.lessons.limit);
      commit(Types.SET_LESSON_LIST, lessons);
      commit(Types.SET_LOADING, false);//开始加载
    }
  }
}

export default home;
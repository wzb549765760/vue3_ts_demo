import { CATOGORY_TYPES, IHomeState } from '@/typings/home';
import { Module } from 'vuex';
import { IGlobalState } from '../index';
import * as Types from "../action-types"

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
  mutations:{
    [Types.SET_CATOGORY](state,payload:CATOGORY_TYPES){
      state.currentCatogory = payload;
    }
  }
}

export default home;
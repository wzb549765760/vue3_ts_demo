
interface ISlider {
  url: string
}

interface ILesson {
  title: string,
  video: string,
  poster: string,
  price: number,
  category?: string
}

interface ILssons {
  hasMore: boolean,//有没有更多的数据
  loading: boolean,//默认有没有正在加载
  offset: number,
  limit: number,
  list: ILesson[]//当前以及显示的数据
}

export interface IHomeState {
  currentCatogory: CATOGORY_TYPES,
  sliders: ISlider[],
  lessons: ILssons,
}



export enum CATOGORY_TYPES {//下标
  ALL,
  REACT,
  VUE,
  NODE
}
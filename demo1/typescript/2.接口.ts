// 用来描述对象性质的  interface ? 可以不填

interface ISchool {
  readonly name: string,
  age: number,
  address?: string
}

let school: ISchool{
  name: 'zd',
  age: 123,
  address: "asdfasdf"
}

let school2:ISchool{
  name: 'zd',
  age: 123,
  address: "asdfasdf",
  lessons:["123","123"]
} as ISchool //类型断言 标识这个对象就是这样一个类型

// key:string]:any 可以加任意类型
interface IZhufeng extends ISchool {
  type: string,
  [key: string]: any//任意类型
}

let zhufeng: IZhufeng = {
  ...school,
  type: "web"
}

let zhufeng1: IZhufeng = {
  ...school,
  type: "web",
  a: 1,
  b: 2
}








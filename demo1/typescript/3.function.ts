// 函数主要关系返回值 和 参数

function sum1(a: string, b: string): string {
  return a + b
}

sum1("a", "b")
/*
声明一个类型
方式1
type Sum = ((aa:number,bb:number)=>number) | string ;//类型是一个函数或者是一个字符串
方式2
interface Sum{
  (aa:number,bb:number):number
}

区别 interface 可以继承  可以被类来实现
     type 仅仅是一个别名 一般在定义联合类型 定义临时变量时可以使用
*/

// 可以通过表达式来定义

const sum2 = (a: number, b: number): number => a + b;

sum2(1,2)




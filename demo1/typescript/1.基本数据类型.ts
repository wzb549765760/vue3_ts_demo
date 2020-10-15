/*
node 环境下跑ts文件
npm install typescript  ts-node -g
code runner

*/

// ts 中冒号后面都是类型
const str:String = "123";
const num :number = 11;

console.log(str);
console.log(num);

// 联合类型

let age:String | number = 1;

// 数组 对象 函数
 
const arr:number[] = [123,123];

// 元组
const tuple:[string,number] = ["zf",1];
console.log(tuple);

let n:null = null;
let u:undefined = undefined;

// 枚举
enum USER_ROLE{
  USER,
  MANAGHER,
  ASMIN
}
enum USER_ROLE1{
  USER="user",
  MANAGER="manager",
  ASMIN="admin"
}

console.log(USER_ROLE.USER);
console.log(USER_ROLE1.USER);

// any

const arry = [1,1,"2"];


// object 类型 非原始数据类型

const create = (obj:object)=>{
  console.log(obj)
};

create({})

// 对象类型{}

export {}
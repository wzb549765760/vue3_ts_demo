
/*
  泛型,用来在代码执行时传入的类型 为确定结果
*/

function createArray<T>(len:number, value:T):T[] {
  let resule = [];

  for (let i = 0; i < len; i++) {
    resule.push(value)
  }
  return resule;
}

let arr = createArray(3, 'zf');

console.log(arr)

/*
  多个泛型 
  元组的交换 [string,number] = [number,string]
*/ 

const swap = <T,K>(tuple:[T,K]):[K,T]=>{
  return [tuple[1],tuple[0]]
}

console.log(swap<string,number>(["1",2]))


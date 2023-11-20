console.log(`05-let-const`);

//Let с ES6 используется вместо var
// let это переменные которые можно изменить
let a = 'Variable a';
let b = 'Variable b';

{ //block scope (блок области видимости)
  a = 'New variable a';
  let b = 'Local variable b';   //доступна ТОЛЬКО в рамках этого scope
  console.log(`Scope A`, a);
  console.log(`Scope B`, b);
}
console.log(`A`, a);
console.log(`B`, b);



//Const
const PORT = 5051;
//  PORT = 2000; //TypeError!!! это касается только примитивов

const array = ['JavaScript', 'is', 'awesome'];
array.push(`!`);
array[0] = 'JS';
console.log(array);
// array = []; //TypeError!!! нельзя изменить значение всего массива

const obj = {};
obj.name = 'Ivan';
obj.age = 33;
console.log(obj);
delete obj.age;
console.log(obj);
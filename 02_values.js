console.log(`02-Values`);

let a = 42;
let b = a;    //Произошло копирование, потому что a - это примитив
console.log(`a=${a}`);  //42
console.log(`b=${b}`);  //43

//Массивы
let c = [1,2,3];
let d = c;              //Скопировали ссылку на объект (массив), меняем d - меняется c
let e = c.concat();     //Скопировали объект, вызвав concat для массива

d.push(4);
e.push(5);
console.log(`c=${c}`);  //1,2,3,4
console.log(`d=${d}`);  //1,2,3,4 
console.log(`e=${e}`);  //1,2,3,5 

let f = [1,2,3,4];
console.log(a === b);   //true
console.log(a === f);   //false, a и f это разные объекты!




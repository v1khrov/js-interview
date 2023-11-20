console.log(`01-Types`);
//7 Типов данных

// //  null
// console.log(typeof null) //object
// //  undefined
// console.log(typeof undefined)
// //  boolean - единственный НЕ примитивный
// console.log(typeof true)
// //  number
// console.log(typeof 0)
// //  string
// console.log(typeof `JavaScript`)
// //  object
// console.log(typeof {name: 'object'})
// //  symbol
// console.log(typeof Symbol('JS'))
// //typeof определяет тип данных
// console.log(typeof function() {}) //function
// console.log(typeof NaN)           //number
// console.log(typeof []);           //object

// undefined - переменная не объявлена и не имеет никакого значения,
// null - переменная объявлена, но нет никакого значения

// Приведение типов
let language = 'JavaScript';
if(language) {
  console.log(`The best language is ${language}`);
}

//if работает только с boolean, if приводит тип данных к boolean
// Существуют значения которые приводятся к false:
//  '', 0, null, undefined, NaN, false
console.log(Boolean('0'));          //true
console.log(Boolean(0));            //false
console.log(Boolean([]));           //true !!!
console.log(Boolean({}));           //true
console.log(Boolean(function(){})); //true

// Строки и Числа 
console.log(1 + '2');       //'12'  concat -> приводит к строке число 1
console.log('' + 1 + 2);    //'12' то же самое
console.log('' - 1 + 0);    //-1, т.к. для строк не определён оператор -, то всё приводится к числу
console.log('3' * '8');     //24 то же самое, у строк нет умножения
console.log(4 + 10 + 'px'); //'14px'
console.log('px' + 5 + 10); //'px510'
console.log('42' - 40);     //2
console.log('42px' - 40);   //NaN
console.log(null + 2);      //2
console.log(undefined + 42);//NaN

// == vs === (== сравнивает значение с привидением типов, === сравнивает значение и тип)
console.log(2 == '2')           //true
console.log(2 === '2')          //false
console.log(undefined == null)  //true
console.log(undefined === null) //false
console.log('0' == false)       //true


// ==========
console.log(false == '');       //true
console.log(false == []);       //true
console.log(false == {});       //false !!!

console.log('' == 0);           //true
console.log('' == []);          //true
console.log('' == {});          //false !!!

console.log(0 == null);         //false !!!
console.log(0 == []);           //true
console.log(0 == {});           //false !!!

// ===== специфичные методы для типов данных =====
//map return array используется для трансформации массива
[1,2,3].map((x,y,z) => {});     
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});
// получили массив с длинами
alert( nameLengths ); // 4,3,10

//filter return array используется для фильтрации массива через функцию
[1,2,3].filter((x,y,z) => {});  
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
  return number > 0;
});
alert( positiveArr ); // 1,2,3

//some возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
[1,2,3].some((x,y,z)=>{});
//every возвращает true, если вызов callback вернёт true для каждого элемента arr.
[1,2,3].every((x,y,z)=>{});
//includes возвращает true если массив содержит элемент
[1,2,3].includes(element, fromIndex);

//unshift добавляет элементы в начало и возвращает длину нового массива
[1,2,3].unshift(...[4,5,6]);
//slice возвращает копию массива с индекса start по индекс end
[1,2,3].slice(start, end);
//splice Он изменяет arr начиная с индекса start: удаляет deleteCount элементов 
//и затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
[1,2,3].splice(start, deleteCount, ...elements);

//create создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
Object.create(proto);
let dictionary = Object.create(null, {
  toString: { // определяем свойство toString
    value() { // значение -- это функция
      return Object.keys(this).join();
    }
  }
});

//Функция Object.assign получает список объектов и копирует в первый target свойства из остальных. НЕглубокое копирование
Object.assign(target, src1, src2);
//функция возвращает true если объект имеет поле с указанным ключом
Object.prototype.hasOwnProperty('propertyKey');

//Вызовем метод knows в контексте объекта john
person.knows.call(john, 'nothing', 'John');
person.knows.apply(john, ['nothing', 'John']);
person.knows.call(john, ...['nothing', 'John']);    //ES6
//bing не вызывает функцию, а возвращает новую
const bound = person.knows.bind(john, 'nothing', 'John');
bound();

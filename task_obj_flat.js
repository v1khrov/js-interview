/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj = {
  a: {
    b: {
      c: 1,
      d: 2
    },
    e: 3
  },
  f: 4
};

const flattenObject = (obj) => { 

  const stack = [{obj, prefix: ''}];
  const result = {};
  while(stack.length > 0) {

    let {obj, prefix} = stack.pop();    

    
    for(let key in obj) {
      const value = obj[key];
      const newKey = prefix + key;     

      if(typeof value === 'object' && value !== null) {
        stack.push({obj: value, prefix: `${newKey}.`});
      }
      else {
        result[newKey] = value;
      }
    }  
  }

  return result;

}

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }
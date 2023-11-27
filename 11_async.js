console.log(`11-async`);

//JS работает в 1 потоке
//Callback-Queue

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setTimeout(second, 0);  //Таймаут отработает неожиданно, функция станет последней
third();


//===Task===
console.log(1);                                                   //1
setTimeout(() => console.log(2));                                 //5
Promise.resolve().then(() => console.log(3));                     //3
Promise.resolve().then(() => setTimeout(() => console.log(4)));   //7
Promise.resolve().then(() => console.log(5));                     //4
setTimeout(() => console.log(6));                                 //6
console.log(7);                                                   //2

// 1,7,3,5,2,6,4

//===Promise===
Promise
  .reject('a')
  .catch(p => p + 'b')
  .catch(p => p + 'c')        //не выполнится
  .then(p => p + 'd')
  .finally(p => p + 'e')      //ничего не возвращает
  .then(p => console.log(p)); //abd
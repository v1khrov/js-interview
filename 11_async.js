console.log(`11-async`);

//JS работает в 1 потоке
//Callback-Queue

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setTimeout(second, 0);  //Таймаут отработает неожиданно, функция станет последней
third();
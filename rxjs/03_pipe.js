const { Observable, timer, take, debounceTime, from, map, filter } = require("rxjs");

//Pipe - преобразования над потоком данных

// timer(0,500).pipe(
//   take(12)  //получаем первые 12 значений
// ).subscribe(res => console.log(res));

timer(0,250).pipe(
  take(40),                          // получаем первые 12 значений
  filter(() => Math.random() < 0.3), // в результат попадают значения подходящие под условие
  debounceTime(500)                  // задержка времени, если значение не менялось 500 мс, то выводим его
).subscribe(res => console.log(res));
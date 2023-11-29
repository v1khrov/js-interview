const { Observable, timer, interval, take, mergeMap, switchMap, map, filter } = require("rxjs");

timer(0, 1500).pipe(
  take(3),
  map((i) => 'abcd'[i]),
  mergeMap(letter => {          //На каждое значение создаёт свой поток
    return timer(0, 625).pipe(
      take(6),
      map(digit => letter + digit)
    );
  })
).subscribe(i => {console.log(`MergeMap: ${i}`)});

timer(0, 1500).pipe(
  take(3),
  map((i) => 'abcd'[i]),
  switchMap(letter => {
    return timer(0, 625).pipe(  //На каждое значение останавливает предыдущий поток и стартует новый
      take(6),
      map(digit => letter + digit)
    );
  })
).subscribe(i => {console.log(`SwitchMap: ${i}`)});


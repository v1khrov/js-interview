const { Observable, timer, take, combineLatest, from, map, filter } = require("rxjs");

const streamA$ = timer(0, 1500).pipe(take(4));
const streamB$ = timer(1000, 1000).pipe (
  take(6),
  map((i) => 'abcdef'[i])
);

//Комбинирование данных. НО важно чтобы данные начались от обоих источников
combineLatest([streamA$, streamB$]).pipe(
  map(([a,b]) => a + b)
).subscribe(data => console.log(data));
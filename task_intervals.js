const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  const result = [];
  if(intervals.lenght < 2) return intervals;

  //Сортируем по первому числу в интервале в порядке возрастания
  intervals.sort(([a,b], [c,d]) => {return a-c});
  result.push(intervals[0]);

  for(let interval of intervals) {
    [a, b] = interval;
    let last = result[result.length-1];

    if(last[1] >= interval[0]) {  //merge если окончание предыдущего больше или равно началу интервала
      // if(last[1] < interval[1]) {
      //   last[1] = interval[1];
      // }
      last[1] = Math.max(last[1], interval[1]);
    }
    else {
      result.push(interval);
    }

  }

  return result;
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
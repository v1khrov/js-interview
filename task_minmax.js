const array = [1, 6, 8, 99, 22, 0, 665];


function minMax(array) {
  if(!array.length) return () => {
    console.log(`array is empty`);
  };

  let min = array[0];
  let max = array[0];

  for(let i of array) {
    if(i < min) min = i;
    if(i > max) max = i;
  }

  console.log(`min: ${min}, max: ${max}, array: ${array}`);
}

minMax(array);
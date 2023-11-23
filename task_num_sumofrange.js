const summOfRange = (num1, num2) => {
  if(num2 < num1) return false;

  let result = 0;

  for(let i = num1; i<=num2; i++) {
    result += i;
  }

  return result;
}

const summOfRange2 = (num1, num2) => {
  if(num2 < num1) return false;

  let count = num2 - num1 + 1;
  return count*((num2+num1)/2);
}

console.log(summOfRange2(2,120));
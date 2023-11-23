const isPrimeNumber = (number) => {
  if(Math.abs(number) < 2) return true;

  number = Math.abs(number);

  for(let i = 2; i < Math.sqrt(number); i++) {
    console.log(i);
    if(number % i ===0) return false;
  }

  return true;
}

console.log(isPrimeNumber(13));
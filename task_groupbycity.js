// Данные на вход
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
]

const groupByCity = (array) => {
  const result = {};

  for(const item of array) {    

    if(!result[item.city]) {
      result[item.city] = item.name;
    } else if(Array.isArray(result[item.city])) {
      result[item.city].push(item.name);
    }
    else {
      result[item.city] = [result[item.city], item.name];
    }
  }
  return result;
}

console.log(groupByCity(people));


// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/
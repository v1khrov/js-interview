const strToObject = (str) => {
  let strs = str.split('.');

  let object = {};

  for(let i = strs.length - 1; i >= 0; i--) {
    let prevObj = {};
    Object.assign(prevObj, object);
    object = {}; 
    object[strs[i]] = prevObj;
  }

  return object;
}

const strToObject2 = (str) => {
  const arrStr = str.split('.')
  const result = arrStr.reduceRight((acc, val) => {
    return { [val]: acc }
  }, {});
  return result;
}

// console.log(JSON.stringify(strToObject('one.two.three.four.five'), undefined, 2));
console.log(JSON.stringify(strToObject2('one.two.three.four.five'), undefined, 2));

// RESULT

// {
//   one: {
//     two: {
//       three: {
//         four: {
//           five: }
//         }
//       }
//     }
//   }
// }

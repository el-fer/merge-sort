function split (arr){
  const newArr = []
  arr.forEach(element => {
    newArr.push([element]);
  });
  return newArr;
}

function mergeSort (arr){
  let newArr = []
  if (arr.length === 1 && !Array.isArray(arr[0])){
    return arr;
  }
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] < arr[index+1] && (arr[index+1])){
      newArr.push(arr[index].concat(arr[index+1]))
      index++;
    }
    else if (arr[index+1]) {
      newArr.push(arr[index+1].concat(arr[index]))
      index++;
    }
    else{
      newArr.push(arr[index])
    }
  }


  return newArr;
}

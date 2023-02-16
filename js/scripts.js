//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; index --) {
    countUpArray.push(index);
  }
  countUpArray.reverse();
  return countUpArray;
}

function robogerResponse(countUpArray) {
  let stringArray = countUpArray.map(function(element) {
    return element.toString();
  })
  for (let index = 0; index < stringArray.length; index+=1) {
    
  }
}
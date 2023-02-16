//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; index --) {
    countUpArray.push(index);
  }
  countUpArray.reverse();
  return countUpArray;
}
//Business Logic

function countUp(input) {
  let countUpArray = [];
  for(let index = input; index >= 0; index --) {
    countUpArray.push(index);
  }
  countUpArray.reverse();
  return countUpArray;
}

function robogerResponds(countUpArray) {
  let stringArray = countUpArray.map(function(element){
    return element.toString();
  });
  for (let index = 0; index < stringArray.length; index+=1) {
      if (stringArray[index].includes("3")) {
        stringArray[index] = " Won't you be my neighbor? ";
      } else if (stringArray[index].includes("2")) {
        stringArray[index] = " Boop! ";
      } else if (stringArray[index].includes("1")) {
        stringArray[index] = " Beep! ";
      }
  }
    return stringArray
  }

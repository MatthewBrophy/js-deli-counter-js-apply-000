array = [4, 5];

function takeANumber(line) {
  line.push(line[line.length] + 1);
  return "Welcome. You are number " + line.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";

  } else {
    return "There is nobody waiting to be served!"
  }
  }



function currentLine(line) {
  let newArray = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (let i = 0; i <line.length; i++) {
      newArray.push (" " + `${i + 1}. ${line[i]}`)
    }
  }
  return "The line is currently:" + newArray;
}

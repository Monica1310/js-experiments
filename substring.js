let partCode = "27543-large";
let partNum, size;

let colonPos = partCode.indexOf("-");
partNum = partCode.substring(0, colonPos);
size = partCode.substring(colonPos + 1);

console.log(colonPos);
console.log(partNum);
console.log(size);
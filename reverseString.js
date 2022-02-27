

const string = process.argv.slice(2);
function reverseString(string) {
  //string = process.argv;
  let newStr =  "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  //console.log(newStr)
  return newStr;
}
module.exports = reverseString;
//reverseString('goodbye');
console.log(reverseString());
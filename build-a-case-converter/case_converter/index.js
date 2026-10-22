
function getUpperCase(str) {
  return str.toUpperCase();
}

function getLowerCase(str) {
  return str.toLowerCase();
}

function getSentenceCase(str) {
  const lowerCase = getLowerCase(str);
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

console.log(getSentenceCase("hello world"));



function getProperCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

getProperCase("hello world")

module.exports ={
   getUpperCase ,getLowerCase,getSentenceCase,getProperCase
}
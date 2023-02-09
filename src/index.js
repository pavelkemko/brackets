module.exports = function check(str, bracketsConfig) {
  let pareBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    pareBrackets.push(bracketsConfig[i].join(''));
  }
  for (let j = 0; j < pareBrackets.length;) {
    if (str.includes(pareBrackets[j])) {
      str = str.replace(pareBrackets[j], '');
      j = 0;
    } else {j++}
  }
  console.log(str)
  return str.length === 0;
}
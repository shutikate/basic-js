function repeater(str, options) {
 const obj = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 1,
  additionSeparator: '|'
 }

 for (let option in options) {
  if(obj.hasOwnProperty(option)) {
    obj[option] = options[option];
  }
 }

 let array = [];
 for (let i = 0; i < obj.repeatTimes; i++) {
  array.push(String(str));
  for (let j = 0; j < obj.additionRepeatTimes; j++) {
    if (j != obj.additionRepeatTimes - 1) {
      array.push(String(obj.addition) + obj.additionSeparator);
    } else {
      array.push(String(obj.addition));
    }
  }
  if(i != obj.repeatTimes - 1) {
    array.push(obj.separator);
   }
}
return array.join('');
}

module.exports = {
  repeater
};

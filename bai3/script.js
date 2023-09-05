Array.prototype.push2 = function (push) {
  var newArr = [];
  for (let i in this) {
    newArr[i] = this[i];
  }
  return newArr;
};
var a = [1, 2, 3, 4, "j", true];

var newAr = a.push2();
console.log(newAr);

var Sum = function (...args) {
  var result = 0;
  checkFalse = false;
  if (args.length) {
    for (let i = 0; i < arguments.length; i++) {
      var oop = Number(args[i]);
      if (!isNaN(oop) && !oop !== Infinity && typeof oop === "number") {
        result += oop;
      }else{
checkFalse = true;
      }
    }
    if(!checkFalse){
        return result;
    }else{
        return "Tham số không hợp lệ!";
    }
    
  } else {
    return "cần có đối số";
  }
};

console.log(Sum(1, 2, "h"));

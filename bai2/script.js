Object.prototype.getCurrency = function (currency) {
  if (currency) {
    var number = Number(this);

    if (!isNaN(number) && number !== Infinity && typeof number === "number") {
      return number.toLocaleString("") + " " + `${currency}`;
    } else {
      return "lỗi giá trị tiền ((: ";
    }
  } else {
    return "cần nhập đơn vị tiền";
  }
};

var price =100000;
console.log(price.getCurrency("đ"));

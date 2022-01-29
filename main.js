var total = 0;

const print = () => {
  console.log("calculateInvoice");
  calculateInvoice(23, 80, 35, 20);
  calculateInvoice(20, 70, 45, 18);
  calculateInvoice(50, 55, 36, 36);
  calculateInvoice(40, 76, 50, 23);
  console.log("studentInvoice");
  studentInvoice(20, 70, 45, 18);
  studentInvoice(50, 55, 36, 36);
  studentInvoice(40, 76, 50, 23);
};
const calculateInvoice = (
  starterPrice,
  maindishPrice,
  desertPrice,
  beveragePrice
) => {
  var invoice = `
  <------------invoice-------------->
  starterPrice : ${starterPrice}
  maindishPrice : ${maindishPrice}
  desertPrice : ${desertPrice}
  beveragePrice : ${beveragePrice}

  total :${starterPrice + maindishPrice + desertPrice + beveragePrice}
  <--------------------------------->
  `;
  console.log(invoice);
  return;
};

const studentInvoice = (
  starterPrice,
  maindishPrice,
  desertPrice,
  beveragePrice
) => {
  var invoice = `
  <------------student invoice-------------->
  starterPrice : ${starterPrice} => ${starterPrice - starterPrice * 0.1}
  maindishPrice : ${maindishPrice} => ${maindishPrice - maindishPrice * 0.1}
  desertPrice : ${desertPrice} => ${desertPrice - desertPrice * 0.1}
  beveragePrice : ${beveragePrice}
  
  total :${starterPrice + maindishPrice + desertPrice + beveragePrice} => ${
    starterPrice -
    starterPrice * 0.1 +
    maindishPrice -
    maindishPrice * 0.1 +
    desertPrice -
    desertPrice * 0.1 +
    beveragePrice
  }
  <--------------------------------->
  `;
  console.log(invoice);
  return;
};

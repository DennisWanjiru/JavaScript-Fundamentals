function Math() {
  var apple, orange;

  function add(a, b) {
    apple = a;
    orange = b;

    return a + b;
  }

  var pubAPT = {
    sum: add
  };

  return pubAPT;
  console.log(pubAPT);
}

var total = Math();

total.sum(3, 4);

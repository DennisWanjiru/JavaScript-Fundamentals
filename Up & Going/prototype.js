var foo = {
  a: 43
};

var bar = Object.create(foo);

bar.b = "Hello World";
console.log(bar.b);
console.log(bar.a);

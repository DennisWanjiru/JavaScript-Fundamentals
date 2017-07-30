function foo() {
  console.log(this.bar);
}

var bar = "Global";

var obj1 = {
  bar: "obj1",
  foo: "foo"
};

var obj2 = {
  bar: "obj2",
  foo: "foo3"
};

foo();
//obj1.foo();
foo.call(obj2);
new foo();

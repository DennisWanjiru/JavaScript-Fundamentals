function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greetings = "Hello, I'm " + identify.call(this);
  console.log(greetings);
}

var me = {
  name: 'Dennis'
};

var you = {
  name: 'Kyle'
};


identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);

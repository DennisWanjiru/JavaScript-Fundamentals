// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   var greetings = "Hello, I'm " + identify.call(this);
//   console.log(greetings);
// }

// var me = {
//   name: 'Dennis'
// };

// var you = {
//   name: 'Kyle'
// };


// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

'use strict';

var name;

function identify() {
    return this.item[2].last.toUpperCase();
    //console.log(this.item[2].last.toUpperCase()) ;
}

function speak() {
  var greetings = "Hello, " + identify.call(this) + ". You are " + this.item[0];
  console.log(greetings);
}

var me = {
  name: "dennis",
  item: ["one", 1, {name: "kyle", last: "kym"}]
};

identify.call(me);
speak.call(me);



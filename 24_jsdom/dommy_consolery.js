// Team unless? :: Helena Williams, Jonathan Lee
// SoftDev pd1
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-15r
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO"); //AYOOOOOOOO

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};
// f(10) outputs 40

//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };
// yoooo o drops it in the console
// o.func(10) outputs 40
// o.age outputs 15
// etc.

//(define fact (lambda (n) ...)
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};
// ah. factorials.

//(define fact (lambda (n) ...)
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};
// recursive factorial defn 

// adding that item.
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem); // remember appendChild
};
// YOOOO addItem("hi") adds hi to the actual list
// kinda gameing

// yeeting an item.
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};
// 0 is the topmost item, etc. by id. yep.

// yooo we can red 
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};
// adds red to the items, so item 0 and 8 which have no colors turn red
// the rest have colors so don't turn red, just added red

// adds alternating red and blue
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};
// same standard as red-ing

// button click puts this in console
// here comes e...
// here comes 'this' ...
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

// also posts MouseEvent log upon button click
// because the button's id is "b", see below

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);


var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this); // wow this is cool, just throws itself in the console
  this.classList.add('red');
}

// this gets called whenever mouseover happens on an item
// kinda weird behavior, doesn't change color on first hover,
// turns red upon leaving, 
// and green on 2nd hover
// because it's mouseover and mouseout but the first mouseover is weird huh.
var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}

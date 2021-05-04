// this gets called whenever mouseover happens on an item
// kinda weird behavior, doesn't change color on first hover,
// turns red upon leaving,
// and green on 2nd hover
// because it's mouseover and mouseout but the first mouseover is weird huh.
var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('white');
  });
}

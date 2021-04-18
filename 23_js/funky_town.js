// Team unless? :: Helena Williams, Jonathan Lee (feat. AN INTERLOPER WHO GOES BY DCAREY)
// SoftDev pd1
// K23 -- Basic functions in JavaScript
// 2021-04-15r
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here
function factI(n) { //returns factorial of n, computed iteratively.
    if (n < 0) return "error, negative input";
    else if (n == 0) return 1;
    for (i = n - 1; i > 0; i--) {
      n = n * i;
    }
    return n;
  }

  function factR(n) { //returns factorial of n, computed recursively.
    if (n < 0) return "error, negative input";
    else if (n == 0) return 1;
    else if (n == 1) return 1;
    else return n * factR(n-1);
  }

  function fibI(n) { //returns the nth Fibonacci number, computed iteratively.
    var ans = 0;
    var pri = 0;
    var sec = 1;
    if (n < 0) return "error, negative input";
    else if (n == 0) return 0;
    else if (n == 1) return 1;
    for (i = 1; i < n; i++) {
      ans = pri + sec;
      pri = sec;
      sec = ans;
    }
    return ans;
  }

  function fibR(n) { //returns the nth Fibonacci number, computed recursively.
    if (n < 0) return "error, negative input";
    else if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fibR(n-1) + fibR(n-2);
  }

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
let gcd = (a,b) => {
  champ = 1
  lamp = 1 // counter
  while(lamp <= a && lamp <= b){
    if (a % lamp == 0 && b % lamp == 0){
        champ = lamp
    }
    lamp++
  }
  return champ
}
console.log(gcd(5, 1)); // 1
console.log(gcd(4, 100)); // 4
console.log(gcd(25, 5)); // 5
console.log(gcd(7, 37)); // 1
console.log(gcd(55, 88)); // 11


//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
var randomstudentlist = [];

function randomstudent() {
    
    randomnumber = Math.floor(Math.random() * randomstudentlist.length());

}
//You may want to create helper functions or external list variables here.
function addstudent() {
    
}
//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

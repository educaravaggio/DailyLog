/* codes for learning, not used on the pages */

// LOOPS & CLOSURES

// For-loops need functions within functions to work using 'var'

for ( var i = 1; i <=5; i++) {
  (function(){
    var j = i;
    setTimeout( function timer(){
      console.log( j );
    }, j*1000);
  })();
}

// while 'let' doesn't require other function within

for ( let i = 1; i<= 5; i++) {
  setTimeout( function timer(){
    console.log( i, 'teste' );
  }, i*1000);
}

// any variables declared in a function get created
// everytime the function is called
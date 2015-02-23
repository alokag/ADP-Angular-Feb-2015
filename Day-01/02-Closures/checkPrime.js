/*Write a function to check if the given number is a prime number (returns true) or not (returns false). 

The algorithm is invoked only once for a given number.  For all subsequent times, the result should be returned from a cache
*/
var isPrime = (function(){
   var cache= {};
   function checkPrime(n){
      console.log("Prime check triggered");
      if (n <= 3) return true;
      for(var i = 2; i <= (n/2); i++)
        if (n % i === 0) return false;
      return true;
   }

  return function(n){ 
     if (typeof cache[n] === "undefined") cache[n] = checkPrime(n);
     return cache[n];
  }
})()


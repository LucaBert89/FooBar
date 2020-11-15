for(var i = 0; i <= 100; i++) {
    if(i % 5 == 0 && i %3 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0) {
        console.log("fizz");
    } else if (i%5 == 0) {
        console.log("buzz");
    } else {
        console.log(i)
    }
        
};

// recursion
/*
function fizzBuzz(num) {
    if(num === 100) {
        console.log("stop");
    } else {
        if(num % 5 == 0 && num % 3 == 0) {
            console.log("FizzBuzz");
        } else if(num % 3 == 0) {
            console.log("fizz");
        } else if (num % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(num);
        }
        return fizzBuzz(num+1);
    }
      
} 

fizzBuzz(8);
*/
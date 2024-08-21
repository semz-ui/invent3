function fizzBuzz(i) {
    for (let num = 1; num <= i; num++) {
        if (num % 15 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }
}
fizzBuzz(30);

// note that we are using a for loop to iterate from 1 to i
// if the number is divisible by 15, we print "FizzBuzz"
// if the number is divisible by 3, we print "Fizz"
// if the number is divisible by 5, we print "Buzz"
// otherwise, we print the number itself
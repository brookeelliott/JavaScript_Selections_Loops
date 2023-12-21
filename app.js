
let i;
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(i = 1; i < 101; i++)
{
    if( i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i = 1; i < 101; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ");

    } else if (i % 3 == 0 && i % 5 != 0){
        console.log("FIZZ");

    } else if (i % 5 == 0 && i % 3 != 0){
        console.log("BUZZ");

    } else {
        console.log(i);
    }
}

// Exercise 3 Section
i = 1;
while (i < 101) {
    if( i % 2 != 0)
    {
        console.log(i);
    }
    i++;
}

i = 1;
do {
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ");

    } else if (i % 3 == 0 && i % 5 != 0){
        console.log("FIZZ");

    } else if (i % 5 == 0 && i % 3 != 0){
        console.log("BUZZ");

    } else {
        console.log(i);
    }
    i++;
} while (i < 101);

// Exercise 4 Section
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(i = 0; i < n + 1; i++)
{
    if(i == value)
    {
        console.log("Found Value!");
        break;
    }
    if(i == n && i != value)
    {
        console.log("Did not find value");
        break;
    }
}

// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(i = start; i <= end; i++)
{
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log("FIZZBUZZ");

    } else if (i % fizzDivisor == 0 && i % buzzDivisor != 0){
        console.log("FIZZ");

    } else if (i % buzzDivisor == 0 && i % fizzDivisor != 0){
        console.log("BUZZ");

    } else {
        console.log(i);
    }
}
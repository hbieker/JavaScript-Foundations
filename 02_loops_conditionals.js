const toggle = true

//If Statement
if(!toggle)
{
    console.log("toggle const is set to true")
}
else
{
    console.log("toggle const is set to false")
}

//While loop
let i = 0
while(i < 10)
{
console.log("I am looping 10 times")
console.log(i)
i++
}

//Do while loop
//One round of loop will run before it checks the condition
let j = 0
do{
    console.log("I am looping 10 times")
    console.log(j)
    j++
}
    while (j<10)

//For loop
//Wrap while loop variable, condition, increment in one statement
//Use when you know how many times to run loop
for(let k=0;k<=10;k++)
{
    console.log(k)
    console.log("I am looping 10 times")
}
    
//From 1 to 100, give me the common multiple values of 2 and 5
//Remainder comparison, not assigning. Both need to be true to pass with &&
//To pass it if it's a common of either use the or ||
//n variable used to exit after 3 matches
let n = 0
for(let k=1;k<=100;k++)
{
    if (k%2 == 0 && k%5 == 0) 
    {
        n++
        console.log(k)
        if (n==3)
        break  // no braces required with one statement
    }
}
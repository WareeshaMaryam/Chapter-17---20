//Q.1 Declare and initialize an empty multidimensional array. (Array of arrays)  

array = [[]]
document.write(array);




//Q.2 Declare and initialize a multidimensional array representing the following matrix:  
document.write(`Question 2 <br>`)
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
let strMatrix = matrix[0].join(" ")
let strMatrix1 = matrix[1].join(" ")
let strMatrix2 = matrix[2].join(" ")
document.write(strMatrix + "</br>")
document.write(strMatrix1 + "</br>")
document.write(strMatrix2 + "</br>" + "</br>" + "</br>" + "</br>" + "</br>")




// Q.3 Write a program to print numeric counting from 1 to 10.  
document.write(`Question 3 <br>`)
let count = 1;
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br/>")
}




//Q.4 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  
document.write(` <br/><br/><br/><br/>Question 4 <br><br>`);
let num = +prompt(`Enter a number to print table`);
let num1 = +prompt(`Enter a number to start the table`);
let num2 = +prompt(`Enter a number to end the table`);
document.write(`Multiplication table of ${num} from length ${num1} to ${num2} <br>`);
for (let i = num1; i <= num2; i++) {
  document.write(`${num} X ${i} = ${num * i} <br/>`);
}




// Q.5 Write a program to print items of the following array using for loop: 
document.write(` <br/><br/><br/><br/>Question 5 <br>`);
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]} <br/>`);
}
document.write("<br>" + "<br>")

for (let i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]} <br/>`);
}





//Q.6 Generate the following series in your browser. See example output. 
document.write(` <br/><br/><br/><br/>Question 6 <br>`);
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write(`a) Counting:`)
for (let i = 1; i <= 15; i++) {
  document.write(` ${i},`);
}

//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.write(`<br> b) Reverse Counting: <br>`)
for (let i = 10; i > 0; i--) {
  document.write(` ${i},`);
}

// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write(`<br> c) Even:<br>`)
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(`${i},`)
  }
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write(`<br> e) Odd: <br>`)
for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(`${i},`)
  }
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write(`<br> f) Series:<br>`)
for (i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(`${i}k,`)
  }
}




//Q.7  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. array. found in the list or not. Example:
document.write(` <br/><br/><br/><br/>Question 7 <br>`);
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
let userDemand = prompt(`Welcome to ABC Bakery. What do you want to order sir/ma'am?`)
if (userDemand == "cake" || userDemand == "apple pie" || userDemand == "cookie" || userDemand == "chips" || userDemand == "patties") {
  document.write(`${userDemand} is available at index ${bakery.indexOf(userDemand)} in our bakery`)
}
else {
  document.write(`We are sorry. ${userDemand} is not available in our bakery`)
}




//Q.8  Write a program to identify the largest number in the given array.   
document.write(` <br/><br/><br/><br/>Question 8 <br>`);
let A = ["24", "53", "78", "91", "12"]
document.write(`Array items; ${A} <br>`)
let largestNum = Math.max(...A);
document.write(`The Largest Number ${largestNum}`)




//Q.9  Write a program to identify the smallest number in the  given array.   
document.write(` <br/><br/><br/><br/>Question 9 <br>`);
document.write(`Array items; ${A} <br>`)
let smallestNum = Math.min(...A);
document.write(`The Smallest Number ${smallestNum}`)




//Q.10  Write a program to print multiples of 5 ranging 1 to 100.    
document.write(` <br/><br/><br/><br/>Question 10 <br>`);

for (let i = 5; i <= 100; i++) {
  if (i % 5 == 0) {
    document.write(`${i} , `)
  }
}
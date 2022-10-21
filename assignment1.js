/*1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign
value to it and use the typeof operator to check different data types.*/

let firstName = "abc";
let lastName ="xyz";
let country ="India";
let city = "Mumbai";
let age = 26 ;
let isMarried = false ;
let year = 2022;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof year);
console.log(typeof isMarried);
console.log("\n");

/*2. Boolean value is either true or false.
a. Write three JavaScript statements which provide truthy value.
b. Write three JavaScript statements which provide falsy value.*/

//true 

let total =5+5;
let total2=8+2;
console.log(total===total2);

let tru = 1;
let btru = true;
console.log(tru==btru);

let char = null;
console.log(char==undefined);
console.log('\n');

//false value
let t = 25;
let dt = "25";
console.log(t===dt);

let falsei = 0;
let bfalsi = false;
console.log(falsei===bfalsi);

let ti = "25";
let di = "25";
console.log(ti.length!=di.length);
console.log("\n")

/*3. Figure out the result of the following expressions first without using console.log().
After you decide the result confirm it by using console.log()
a. 4 > 3 && 10 < 12
b. 4 > 3 && 10 > 12
c. 4 > 3 || 10 < 12
d. 4 > 3 || 10 > 12
e. !(4 > 3)
f. !(4 < 3)
g. !(false)
h. !(4 > 3 && 10 < 12)
i. !(4 > 3 && 10 > 12)
j. !(4 === '4')*/

//a. 4 > 3 && 10 < 12  it will print true(1)
let a = 4 > 3 && 10 < 12;
console.log(a);

//b. 4 > 3 && 10 > 12 it will print false(0)
let b = 4 > 3 && 10 > 12 ;
console.log(b);

//c. 4 > 3 || 10 < 12 it will print true(1)
let c = 4 > 3 || 10 < 12;
console.log(c);

//d. 4 > 3 || 10 > 12 it will print true(1)
let d = 4 > 3 || 10 > 12;
console.log(d);

//e. !(4 > 3) it will print false(0) because !(1)= 0
let e = !(4 > 3);
console.log(e);

//f. !(4 < 3) it will print true(1) because !(0) = 1
let f = !(4 < 3);
console.log(f);

//g. !(false) it will print !(false) = true
let g = !(false); 
console.log(g);

//h. !(4 > 3 && 10 < 12) it will print false !(1)=0
let h = !(4 > 3 && 10 < 12);
console.log(h);

//i. !(4 > 3 && 10 > 12) it will print true !(0) = 1
let i = !(4 > 3 && 10 > 12);
console.log(i);

//j. !(4 === '4') it will print true because !(0)=1
let j = !(4 === '4');
console.log(j);
console.log("\n")

/*4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
number is even or not using JavaScript?*/

let num = 2 ; 
if (num % 2 == 0){
    console.log(" num is even ");
}else{
    console.log(" num is odd ");
}
console.log("\n")

/*5. Write a code which can give grades to students according to theirs scores:
a. 80-100, A
b. 70-89, B
c. 60-69, C
d. 50-59, D
e. 0-49, F */
let percentage = 62;
if (percentage <= 100 && percentage >= 80) {
  console.log("A");
} else if (percentage <= 89 && percentage >= 70) {
  console.log("B");
} else if (percentage <= 69 && percentage >= 60) {
  console.log("C");
} else if (percentage <= 59 && percentage >= 50) {
  console.log("D");
}else {
  console.log("F");
}
console.log("\n")


//6.Write a program which tells the number of days in a month.
let month_no = 10 ;

if (month_no == 2 ){
	console.log("No. of days: 28/29 days ");
}else if (month_no == 4 || month_no== 6){
    console.log("No. of days: 30 days")
}else if (month_no== 9 || month_no== 11){
	console.log("No. of days: 30 days");
}else if(month_no == 1 || month_no == 3){
    console.log("No. of days: 31 day"); 
}else if (month_no== 5 || month_no== 7){
    console.log("No. of days: 31 day");
}else if (month_no== 8 || month_no== 10 || month_no== 12){
	console.log("No. of days: 31 day");
}else{
	console.log("Wrong month name") ;
}
console.log("\n")

/*7. Create a human readable time format using the Date time object
a. YYYY-MM-DD HH:mm
b. DD-MM-YYYY HH:mm
c. DD/MM/YYYY HH:mm */
let currentDate = new Date();
let currentyear =currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let time = currentDate.toLocaleTimeString();

//a. YYYY-MM-DD HH:mm
const formattedDateandtime1 = currentyear + "-" + month +"-" +day+" "+ time;
console.log(formattedDateandtime1);
//b. DD-MM-YYYY HH:mm
const formattedDateandtime2 = day + "-" + month +"-" +currentyear+" "+ time;
console.log(formattedDateandtime2);
//c. DD/MM/YYYY HH:mm
const formattedDateandtime3 = day + "/" + month +"/" +currentyear+" "+ time;
console.log(formattedDateandtime3);
console.log("\n")

/*8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts
dollars to rupees.*/

let dollars = 1 ;
let rupees = dollars * 82.23;
console.log(rupees + " Rupees");
console.log("\n");

/*9. Write a program to print unit digit of a given number.
Input : 6693
Output : 3*/

let num1 = 6693 ;
let num2;
num2=num1%10;
console.log("unit digit of 6693 is " + num2);
console.log("\n");

/*10. Write a program to find the area of the circle. Take radius of circle from user as input
and print the result in below given format.*/

const prompt = require("prompt-sync")();
let radiusofC ;
radiusofC = prompt("Enter r value of circle : ");
area = 3.14 * radiusofC * radiusofC;
console.log("Area of the circle is : ",area);
console.log("\n");

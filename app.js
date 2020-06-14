
// Chapter #1

//  Question #1
alert("Welcome To  Our Website");
//  Question #2
alert("Error! Please Enter Valid Password");
//  Question #3
alert("Hello to JS land...\nHappy Coding..!");
//  Question #4
alert("Welcome to JS Land...");

alert("Happy Coding..!\nPrevent this page from creating additional dialogs.");
//  Question #5
console.log("Hello...I can run my Js through my web Browswe's console");

// Chapter # 2
//  Question #1
var username;
//  Question #2
var myName= "Hansa Devi";
//  Question #3
var message;
message= "Hello World"
alert(message);
//  Question #4
var studentName= "Jhone Doe";
var studentAge= "15 year old";
var studentCourse= "Certified Mobile Application Developmevt";
alert(studentName);
alert(studentAge);
alert(studentCourse);
//  Question #5
// var aarPizza= ["P" ,"I", "Z", "Z", "A"];
// for (var i=0; i<aarPizza.length; i++)
// { 
// pizza += aarPizza[i] + '\n';
// }
// alert(pizza);

//  Question #6
var email= "hansapirwani@gmail.com"
alert("My email address is "+ email);
//  Question #7
var book="A smarter way to Learn JavaScript";
alert("I am trying to learn the Book "+book);
//  Question #8
document.write("Yah! I can write HTML content through JavaScript");
//  Question #9
var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(design);


//  Chapter#3
//  Question#1
var age= 20;
alert("I am " +age+" years old");
//  Question#2
 //  Question#3
var birthYear=1999;
document.write("My birth year is "+birthYear + "<br>Data type of my declared variable is number");
 //  Question#4
var visitorName="John Doe";
var productTitle= "T-shirt(s)";
var quality=5 ;
document.write("<br>"+ visitorName+" ordered "+quality+productTitle+ " on XYZ Clothing store");

// Chapter # 4
// Question#1
var value1,value2,value3;
// Question#2
// var names,age,dateOfBirth,user_id,user$allery;
// var myVar, user name, var, #name, alert;
 // Question#3
  document.write("<h1> Rules for naming JS variable</h1><br><br><p>Variable names can only contain:number,$ and _.For Example : $my_1stVariable.<br>Variable  must begin with a letter,$ or _.For Example : $name, _name or name. <br>Variable names are case sentitive.<br> Variable names not be JS keywords.</P>");

// Chapter # 5
// Question # 1

var value1 = +prompt("Enter num1:");
var value2 = +prompt("Enter num2:"); 
var result = value1+value2;
document.write("Sum of "+ value1 +" and " +value2 +" is "+result);

// Question #2
var result = value1-value2;
document.write("<br>Sub of "+ value1 +" and " +value2 +" is "+result);
var result = value1*value2;
document.write("<br>Mul of "+ value1 +" and " +value2 +" is "+result);
var result = value1/value2;
document.write("<br>Div of "+ value1 +" and " +value2 +" is "+result);
var result = value1%value2;
document.write("<br>Module of "+ value1 +" and " +value2 +" is "+result);

// Question #3
var value;
document.write("Value after variable declaration "+value);
value = 5;
document.write("<br>Initial value :" +value);
++value;
document.write("<br> Value after increment :"+value);
value += 7;
document.write("<br> Value after addition :"+value);
--value;
document.write("<br> Value after decrement :"+value);
value =value%3;
document.write("<br> The remainder is :"+value);

// Question #4
var ticketPrice=600;
var noOftickets= +prompt("Enter How many tickets you want to buy:","5");
var total = ticketPrice*noOftickets;
document.write("Total  cost of  "+noOftickets+ " tickets to a movie is:" +total+"PKR");

// Question #5
document.write("Table of 4<br> 4*1=4<br>4*2=8<br>4*3=12<br>4*4=16<br>4*5=20<br>4*6=24<br>4*7=28<br>4*8=32<br>4*9=36<br>4*10=40");

// Question #6
var celsiusTemp = 25;
var fahrenheitTemp  = (celsiusTemp*9/5)+32;
document.write(celsiusTemp+"°C is "+fahrenheitTemp+"°F");
var fahrenheitTemp  = 70; 
var celsiusTemp = (fahrenheitTemp-32)*(5/9);
document.write(fahrenheitTemp+"°F is "+celsiusTemp+"°C");




// Ref: http://slides.com/ifang/javascriptbasics#/0/1
//Run on HTTPServer
// this is a comment
/* this is a block comment */

// this is a string
var myName = "Alex";

// this is an integer
var myAge = 17;

// boolean type
var booleanExample = true;

//
undefined

// not a number
NaN

// array
var myArray = ['one', 2, 'seven', 'batman', true]

// objects

// Null
// Is written literally. 
var HALP = null; HALP


// example reminder: spaces count as characters and follows pemdas
// var firstName = "Alex";
// var lastName = "Aguinaldo";

// console.log(firstName);

// double equal AND (==) is used to compare

// || OR

// Funct is an execute statement
function (){

}

function ohai (){
	console.log ("hello i am a new function");
}

//invoking a function
ohai ();

// Can put parameters
function hello (a, b) {
	console.log(a + b);
}

hello(10, 11);

function creategreeting(name, age) {
	if ( age < 32){
		console.log('hello ' + name);
		}else{
			console.log('hello Mr. ' + name);
			return 'hello Mr. ' + name;
			return ''
		}
}
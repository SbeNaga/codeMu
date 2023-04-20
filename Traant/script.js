"use strict"
// Функции

// no 172

//1 
let num = 1;
		
function func() {
	console.log(num);
}

func();
//(1)

//2
let num1 = 1;
		
function func() {
	console.log(num);
}

num = 2;
func();
//(1)

//3
function func() {
	console.log(num);
}

let num3;

num = 1;
func();

num = 2;
func();
//(2)

//no 173

//1
function func() {
	let num = 5;
	return num;
}

console.log(num);
//(none)

//2
function func() {
	let num = 5;
	return num;
}

console.log(func());
//(5)

//no  174

//1
let num4= 1;

function func() {
	num = 2;
}
func();

console.log(num);
//(2)

//2

let num5 = 1;

function func() {
	let num = 2;
}
func();

console.log(num);
//(1)

//no 175

//1 
let num = 1;

function func() {
	num = 2;
}
func();

console.log(num);
//(2)

//2
let num = 1;

function func() {
	num = 2;
}

console.log(num);
//(1,2)

//8
function func() {
	num = 2;
}

let num = 1;
func();
console.log(num);
//(none,1)

//no 176

//1

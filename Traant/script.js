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
let num6 = 1;

function func() {
	num = 2;
}
func();

console.log(num);
//(2)

//2
let num7 = 1;

function func() {
	num = 2;
}

console.log(num);
//(1,2)

//8
function func() {
	num = 2;
}

let num8 = 1;
func();
console.log(num);
//(none,1)

//no 176

//1
function func(localNum) {
	console.log(localNum);
}

func(1);
//ошибка


//2
function func(localNum) {
	console.log(localNum);
}

let num9 = 1;
func(num);
//1

//3
function func(localNum) {
	console.log(localNum);
}

let num10 = 1;
func(num);
num = 2;
//1

//4
let num11 = 1;

function func(localNum) {
	console.log(localNum);
}

num = 2;
func(num);
//2

//5
function func(localNum) {
	localNum = 2;
}

let num12 = 1;
func(num);
console.log(num);
//1

//6
function func(localNum) {
	num = 2;
}

let num13 = 1;
func(num);
console.log(num);
//(1)

//7
function func(localNum) {
	let num = 2;
}

let num14 = 1;
func(num);
console.log(num);
//(1)

// no 177

//1
function func(num) {
	num = 2;
}

let num15 = 1;
func(num);
console.log(num);
//(1)

//2
function func() {
	num = 2;
}

let num16 = 1;
func();
console.log(num);
//(2)

//3
function func() {
	let num = 2;
}

let num17 = 1;
func();
console.log(num);
//(2,1)

//no 178

//1
function func(obj) {
	obj.a = '!';
}

let obj1 = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj);
//(!,2,3)

//2
function func(arg) {
	arg = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj.a);
console.log(obj);
//(!,1,2,3)

//3
function func(obj) {
	obj = '!';
}

let obj = {a: 1, b: 2, c: 3};
func(obj.a);
console.log(obj);
//(!,2,3)

//4
function func(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);
//(1,3)

//5
function func(arr) {
	arr.slice(1, 1);
}

let arr19 = [1, 2, 3];
func(arr);
console.log(arr);
//(1,3)

//6
function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}

let arr20 = [1, 2, 3];
func(arr);
console.log(arr);
//(!,2,3)

//NO 179
function func() {
	return '!';
}

console.log(func);
//(!)

//no 180

//1,2,3,4
let arr1 = ()=>
{
	return console.log(strcon)
}
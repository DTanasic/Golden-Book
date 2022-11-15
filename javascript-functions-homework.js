//numberToString(Number)

let numToString=myFunction1(5);

function myFunction1(a){
    return numToString.toString();
}

console.log( numToString);


// increase(n)

let a= myFunction1(10)
function myFunction1(a){
    return a+1;
}
console.log(a);

//decrease(n)

let b= myFunction2(10)
function myFunction2(b){
    return b-1;
}
console.log(b);

//add(x, y)
let c=myFunction3(13,5);
function myFunction3 (c,d){
    return c+d;
}
console.log(c);

//subtract(x, y) 

let d=myFunction4(2,5);
function myFunction4(c,d){
    return c-d;
}
console.log(d);

//multiply(x, y)

let e= myFunction5 (111,5);
function myFunction5 (c,d){
    return c*d;
}
console.log(e);

//divide(x, y) 

let f=myFunction6(255,5);
function myFunction6(c,d){
    return c/d;
}
console.log(f);

//square(x) 
let g=myFunction7(3);
function myFunction7(c){
    return c*c;
}
console.log(g);

//calculate(operation, x, y)



//isGreaterThan(a, b)

let j=myFunction9 (16,15);

function myFunction9(a,b){
    if (a>b){
        return true;
    }
    else {
        return false;
    }
}
console.log(j+ "a is larger than b");

//isLessThan(a, b)

let k=myFunction9 (20,15);

function myFunction9(a,b){
    if (a<b){
        return true;
    }
    else {
        return false;
    }
}
console.log(k+"a is smaller than b");

let l=myFunction9 (1,15);

function myFunction9(a,b){
    if (a==b){
        return true;
    }
    else {
        return false;
    }
}
console.log(l+"the numbers are equal");

//minimum(x, y)
function minimum(x,y){
  return ((x + y - Math.abs(x - y)) / 2);
}

console.log(1, 2, 'minimum', minimum(1,2));

//maximum(x, y)
var z = Math.max(a, b);

console.log(Math.max(4,5));

//isEven(n)
let x = myFunction10(125);

function myFunction10(a){
if(a % 2 == 0) {
    return true
}
else {
   return false
}
}
console.log(x);

//isOdd{}
let v = myFunction10(2);

function myFunction10(a){
if(a % 2 == 0) {
    return false
}
else {
   return true
}
}
console.log(v);
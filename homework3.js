//Log in console the numbers from 0 to 15 using for loop
const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let result ="";

for (let i=0; i<num.length;i++) {
    result+=num[i]+",";
}

console.log(result);

//Print the numbers from 12 to 24 using while loop
let num1="";
let i=12;
while(i<24) {
    num1 += "\n" +i; i++;
}
console.log(num1);



//Log in console the ODD numbers from numDaysInMonth array
const  numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let odd =numDaysInMonth.filter(n=>n%2);

console.log(odd);

//Log in console  the EVEN numbers from 10 to -20

const arr1 = [-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

    for (var I = 0; I < arr1.length; I++) {
        if (arr1[I] % 2 === 0) {
            console.log(arr1[I] + "");
        }
    };


// Log in console all the elements of the daysInWeek   array

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
for (I = 0; I < daysInWeek.length; I++){
        console.log(daysInWeek[I]);
    }
















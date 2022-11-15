const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
]

//MAP
//1. Get array of all names
 let charactersNames = characters.map((value)=>{
    return value.name
 });

 console.log(charactersNames);
//2. Get array of all heights
 let charactersHeight = characters.map((value)=>{
    return value.height
 });
 console.log(charactersHeight);
//3. Get array of objects with just name and height properties
 let charactersObject = characters.map((value)=>{
    return {name: value.name, height:value.height}
 });

 console.log(charactersObject);

//  let charactersFName = characters.map((value)=>{
//     [first,...rest]=value.split(" ");
//     return first;
//  });
//  console.log(charactersFName);

//REDUCE
//1. Get total mass of all characters
let charactersMass= characters.map((value)=>{
    return value.mass
});
console.log(charactersMass);

let charactersSumMass = charactersMass.reduce((num,acc)=>{
    return num + acc;  
});
console.log(charactersSumMass);

//2. Get total height of all characters
let charactersSumHeight = charactersHeight.reduce((num,acc)=>{
    return num + acc; 
});
console.log(charactersSumHeight);

//3. Get total number of characters by eye color
let charactersEyeColor=characters.map((value)=>{
    return value.eye_color;
});
console.log(charactersEyeColor);

let Count= charactersEyeColor.length;


console.log(Count);

//4. Get total number of characters in all the character names
let sumNames = charactersNames.join("").length;
console.log(sumNames);



//***FILTER***
//1. Get characters with mass greater than 100

let characters100= characters.find(function(greater100){
    return greater100.mass > 100;
})

console.log(characters100);

//2. Get characters with height less than 200

let character200=characters.filter(function(less200){
    return less200.height<200;
});
console.log(character200);

//3. Get all male characters

let charactersMale=characters.filter(function(males){
    return males.gender ==='male';});



console.log(charactersMale);
//4. Get all female characters
let charactersFemale=characters.filter(function(females){
    return females.gender ==='female';});

console.log(charactersFemale);


//***SORT***
//1. Sort by mass

characters.sort(function(a,b){
    return a.mass - b.mass;
})
console.log(characters);
//2. Sort by height
characters.sort(function(x,y){
    return x.height - y.height;
})
console.log(characters);

//3. Sort by name
characters.sort(function(a,b){
    let x=a.name.toUpperCase();
    let y=b.name.toUpperCase();
    return x==y ? 0: x>y ? 1 :-1; 
});
console.log(characters);
//4. Sort by gender
characters.sort(function(a,b){
    let x=a.gender.toUpperCase();
    let y=b.gender.toUpperCase();
    return x==y ? 0: x>y ? 1 :-1; 
});
console.log(characters);

//***EVERY***
//1. Does every character have blue eyes?
let blue = characters.every(characters=>characters.eye_color==='blue');
console.log(blue);
//2. Does every character have mass more than 40?
let mass40= characters.every(characters=>characters.mass>40);
console.log(mass40);
//3. Is every character shorter than 200?
let height200= characters.every(characters=>characters.height<200);
console.log(height200);
//4. Is every character male?
let everyMale= characters.every(characters=>characters.gender==='male');
console.log(everyMale);


//***SOME***
//1. Is there at least one male character?
let oneMale=characters.some(characters=>characters.gender==='male');
console.log(oneMale)
//2. Is there at least one character with blue eyes?
let blue2=characters.some(characters=>characters.eye_color==='blue');
console.log(blue2);
//3. Is there at least one character taller than 210?
let tall210=characters.some(characters=>characters.height>210);
console.log(tall210);
//4. Is there at least one character that has mass less than 50?
let mass50=characters.some(characters=>characters.mass<50);
console.log(mass50);
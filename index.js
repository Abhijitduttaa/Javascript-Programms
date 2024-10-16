/*
Q  >>  Create a business na,e generator by combining list of adjectives ,shop name and another word


Abjective:
Crazy
Amazing
fire

shop name:
engine
foods
garments

another word:
bors
limited
Hub

*/
let random= Math.random();
let first , second ,third;

//generate first number
if(random<0.33){
    first ="Crazy";
}
else if(random<0.66 && random>=0.33){
    first="Amazing";
}
else{
    first="fire";
}
//generate second  number
random= Math.random();
if(random<0.33){
    second ="Engine";
}
else if(random<0.66 && random>=0.33){
    second ="foods";
}
else{
    second ="Garments";
}
//generate third  number
random= Math.random();
if(random<0.33){
    third ="Bros";
}
else if(random<0.66 && random>=0.33){
    third ="Limited";
}
else{
    third ="Hub";
}

console.log(`${first} ${second} ${third}`);
document.write(`${first} ${second} ${third}`);
//javascript Function
// function  myfun(fullname,age,dob=1991){
//     console.log('hello'+fullname+'I am '+age +' my date of birth'+ dob);
// }
// myfun('  abhi  ' ,30, 2000);
// myfun('  ariojit  ',35);
let c=0;
function isclicked(){
    console.log('clicked done');
    // c++;
    // console.log(c);
}
document.getElementById('btn').addEventListener('click',isclicked);

(function(message){
    console.log('this is self-invokeing function',message);
})('hello');


let maths=function(x,y){
    return x*y;
};
console.log(maths(3,4));
console.log(maths(5,4));


function newfun(){
    let fname='abhi';
    console.log(fname);
}
for(let i=0; i<10; i++){
newfun();
}


function newfun(){
    let fname='abhi';
    console.log(fname);
}
for(let i=0; i<10; i++){
newfun();
}

let sq=[2,1,4,6,6,8,9];
let sq1= sq.map(function(sq){
    return sq*sq;
});
console.log(sq1);
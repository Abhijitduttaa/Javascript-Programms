// let array=[1,3,6,7];
// let newa=[];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newa.push(element+2)
// }
// console.log(newa);

let a= [1,2,3,4,5,6];
let newa=a.map((value,index,a)=>{
    return value**2
})
console.log(newa);

let b =[1,3,8,9];
newarr= [];
const greaterthanseven = (e)=>{
    if(e>7){
        return true;
    }
    return false
}
console.log(b.filter(greaterthanseven))
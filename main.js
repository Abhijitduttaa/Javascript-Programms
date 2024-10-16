const a = document.getElementsByTagName("p");
const b= document.getElementsByClassName("btn");
// b.addEventlisiner('click',()=>{
//                     a.innerHtml="hiii";
//                 });
b.addEventListener('click' , ()=>{
    a.innerText="hii";
});
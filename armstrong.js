let n=153;
let x;
let s=0;
let r;
x=n;
while(n>0){
    r=n%10;
    n=n/10;
    s=s+Math.pow(r,3);
}
if(x==s){
    console.log("Armstrong Number")
}
else{
    console.log("Not Armstrong Number");
}
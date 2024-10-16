var a=121,r,n,f=0;
var b=a;
while(a>0){
    r=a/10;
    a=a%10;
    f=f*10+r;
}
if(b===f){
    console.log("Palindrome Number");
}
else{
    console.log("Not a Palindrome Number");
}
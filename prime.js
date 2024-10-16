var i,p=20,flag=0;
for(i=2;i<p/2;i++){
    if(p%i==0){
        flag=1;
        break;
    }
}
if(flag==0){
    console.log("prime");    
}
else{
    console.log("Non-prime");
}
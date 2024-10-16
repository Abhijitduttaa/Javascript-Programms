var n = 27;
var s = 0;
var t =Math.pow(n,3);
temp = n;
console.log(t)
while(t>0){
    var r = t % 10;
    s = s + r;
    t = parseInt(t/10);
}
console.log(s);
if( temp == s){
    console.log("Dudeney Number")
}
else{
    console.log(" None - Dudeney Number")
}
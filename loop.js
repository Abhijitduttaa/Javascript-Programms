// var i,n,j;
// n=5;
// c=65;
// for(i=0;i<n;i++){
//     for(j=0;j<i;j++){
//         // console.log( String.fromCharCode(c))
//         str = str + String.fromCharCode(65 +j)
        
//     }
//     str = str +"\n"
//     console.log("\n")
// }
var i ,j ,alpha ,n =5;
for(i=0;i<n;i++){
    alpha = 65;
    for(j=0;j<i;j++){
        console.log(String.fromCharCode(alpha))
        alpha++;
    }
    // console.log("\n")
}
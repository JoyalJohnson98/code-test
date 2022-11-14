const fs = require('fs')
let points=0
var read = require('readline-sync')
let name = (read.question("Enter the name passenger:"))
var one = parseInt(read.question("Enter the distance travelled:"))
if(one>10000 & one<=20000){
    points+=10;
}
else if(one>20000 & one<=50000){
    points+=20;
}
else if(one>50000 & one<=100000){
    points+=50;
}
console.log(points)

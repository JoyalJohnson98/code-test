var read = require('readline-sync')
var arr=[]
var weight=23
var n = read.question('Enter the number of passengers')
console.log("enter the weights:")
for(i=0;i<n;i++)
{
    input = read.question('')
    if(input>23){
        arr.push((input-weight)*15)
    }
    }
console.log(arr.reverse())


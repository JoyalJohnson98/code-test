var read = require('readline-sync')
var arr=[]
var arr1=[]
var weight=23
var n =parseInt(read.question('Enter the number of passengers'))
console.log("enter the passengers names:")
for(i=0;i<n;i++)
{
    input = read.question('')
    arr.push(input)
}
console.log("enter the destination names:")
for(i=0;i<n;i++){
    input = read.question('')
    arr1.push(input)
}
console.log("Merged Data:")
arr1.forEach(element=>{
    arr.push(element)
})
console.log(arr)
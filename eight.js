var read =require('readline-sync')
var fare=[]
var destination=[]
var n=read.question("Enter no of destinations:")
console.log("Enter destinations:")
for(i=0;i<n;i++)
{
    inp=read.question('')
    destination.push(inp)
}
console.log("Enter fares:")
for(i=0;i<n;i++)
{
    inp=read.question('')
    fare.push(inp)
}
var m=read.question("Enter an integer:")
console.log(destination[m])
console.log(fare[m])
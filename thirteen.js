var read = require('readline-sync')
var arr = []
while(true)
{
    input=read.question('')
    if(input == 'quit')
    {
        break
    }
    arr.push(input)
}
console.log(arr)
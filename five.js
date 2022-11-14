var read = require('readline-sync')
var arr = []
var a=0
var b=1
var n = read.question("Enter array length:")
console.log('Enter the elements:')
for(i=0;i<n;i++){
    var input = read.question('')
    if(input%2==0)
    {
        arr[b]=input
        b=b+2
    }
    else{
        arr[a]=input
        a=a+2
    }
}
console.log(arr)
var read =require('readline-sync')
var arr=[]
var dup=[]
var c=0
console.log('Enter elements:')
for(i=0;i<10;i++){
var inp=parseInt(read.question(''))
arr.push(inp)
}
for(i=0;i<10;i++){
    for(j=i+1;j<10;j++)
    {
        if(arr[i]>arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log("Elements in descending order:"+arr)
for(i=0;i<10;i++){
    for(j=i+1;j<10;j++)
    {
        if(arr[i]<arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log("Elements in ascending order:"+arr)
var inp=read.question("Enter element to be serached:")
arr.forEach((data)=>{
if(data==inp){
    console.log("Searched element:",data)
}
})
var maxmin=arr[0]
arr.forEach((data)=>{
    if(data>maxmin)
    {
        maxmin=data         
    }
})
console.log("Maximum is:"+maxmin)
arr.forEach((data)=>{
    if(data<maxmin)
    {
        maxmin=data
    }
})
console.log("Minimum is:"+maxmin)

console.log("Duplicate elements are:")
for(i=0;i<10;i++){
    for(j=i+1;j<10;j++)
    {
        if(arr[i]==arr[j])
        {
            c++
        }
    }
    if(c>0 && !(dup.includes(arr[i])))
        {
            dup.push(arr[i])
        }
    c=0
}
console.log(dup)
var read = require('readline-sync')
var arr=[]
var c=0
var duplicate=[]
console.log('Enter Elements')
for(i=0;i<5;i++){
    let input = read.question('');
    arr.push(input);
}
console.log(arr)
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]>arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log('Enter the elements in the ascending order:'+arr)
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]<arr[j])
        {
            t=arr[i]
            arr[i]=arr[j]
            arr[j]=t
        }
    }
}
console.log('Enter the elements in descending order:'+arr)
var input=read.question('Enter the element to be searched:')
arr.forEach((data)=>{
    if(data==input){
        console.log('searched element:',data)
    }
})
console.log('length of each elements are:'+arr)
arr.forEach((data)=>{
    console.log(data.length)
})
console.log('Names after split:')
arr.forEach((data)=>{
    console.log(data.split(' '))
})
console.log('Duplicate elements are:')
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++)
    {
        if(arr[i]==arr[j])
        {
            c++
        }
    }
    if(c>0 && !(duplicate.includes(arr[i])))
    {
        
        duplicate.push(arr[i]);
    }
    c=0
}
console.log(duplicate)
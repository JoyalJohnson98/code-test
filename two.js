var read = require('readline-sync')
var fare = parseInt(read.question("Enter fare"))
var bookingTime=parseInt(read.question('enter the booking time in 24hours format:'))
var t = [23,0,1,2,3,4,5]

if(bookingTime>=6 && bookingTime<=9)
{
    
    var increase=(fare*10)/100
    console.log(increase+fare)

}
else if(bookingTime>=9 &&  bookingTime<17)
{
    var increase=(fare*20)/100
    console.log(increase+fare)
}
else if(bookingTime>=17 &&  bookingTime<23)
{
    var increase=(fare*7)/100
    console.log(increase+fare)
}
else if(t.includes(bookingTime)){
    var increase=(fare*5)/100
    console.log(increase+fare)
}



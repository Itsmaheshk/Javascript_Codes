// 01-11-2020
console.log('hey there');
 let marks= 9

 let validmarks = (marks<=10);
 console.log(validmarks);

 let invalidmarks = (marks>10);
 console.log(invalidmarks);



 if (marks == 10)
 {
     console.log('Great! You got A Grade');
 }
 else if ( marks <10 && marks > 5)
 {
     console.log('Good ! You got B Grade');
 }
 else if (marks < 5 && marks >1)
 {
     console.log('You got C Grade. Practice more');
 }
else if(marks==0)
{
    console.log('Ohh! You failde in exam.Try harder next time');
}
else
{
    console.log('You entered wrong marks')
}

// In this we have covered boolean, logical operators & if, else , else if conditions
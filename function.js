//02-11-2020
// lets make functions to get name & mobile no and display it
//defining Name Function
let Name= function(FirstName, LastName)
{
 console.log(`Welcome ${FirstName + LastName} on Website`)
}

//Defining contact Function
const Contact = function(num, mail, city)
{
 console.log(`You entered with Mobile no. as ${num} and Mail as ${mail} and you're from ${city}`)
}

// calling Name  & contact Func.

Name('Mahesh','Kamble')  //both input are string text
Contact (9975255403, 'maheshbkamble@coep.sveri.ac.in','Kurduwadi') // here one input is integer & another is string
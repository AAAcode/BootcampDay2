var prompt = require('prompt');

var properties = [
    {
        name: 'firstNum',
        description: "what's your first number?"
    },
    {
        name: "secNum",
        description: "what's your second number?"
    }
];

prompt.start();


prompt.get(properties, function(err ,result){
    if(err || !result || !result.firstNum || !result.secNum){
        console.error("we had a f***ing error ");
    return ;
    }
var firstNum = parseInt(result.firstNum,10);
 var secNum = parseInt(result.secNum,10);
 if(isNaN(firstNum)|| isNaN(secNum)){
 console.log("Non of them are numbers");
 }
 if(firstNum > secNum) {
console.log("First number is bigger");
 }
   else if(firstNum < secNum) {
   console.log("Second number is bigger");
 }
    else if (firstNum === secNum) {
 console.log("Numbers are equal");
    }

});







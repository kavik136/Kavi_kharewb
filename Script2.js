var num = 10;
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(typeof(num));
num = false;
// function
console.log(typeof(num));
var sayHello = function(){
    alert("Hello World!");
}
sayHello();
// array
let numArray = [1, 2, 3];
let animals= new Array["cat", "dog", "lion"];
const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1==sym2)
{
    console.log("true");
}
else
{
    console.log("false");
}




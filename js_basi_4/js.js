alert("Задание 10");
let a = prompt("Число 1 ");
let b = prompt("Число 2 ");
d=multiply(a,b) ;
alert(d);

   function multiply(num1,num2) 
{
    let result = num1 * num2;

  return result;
}

a = 1;
b = 10;
a1 = Math.floor(a + (b - a + 1) * Math.random());
b1 = Math.floor(a + (b - a + 1) * Math.random());
var d1 = prompt("Задание 11: " + a1 + "+" + b1 + "= ?");
if (d1 == a1 + b1) {alert("++");} else{alert("--");}
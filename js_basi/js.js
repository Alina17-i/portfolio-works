document.write(" Привет из JS!");
alert("Задание 3: Привет, мир!"); 

yme= "Алина";
alert("Задание 4: Привет, "+ "я " +yme + "!"); 

alert("Задание 5: Ваше имя: " + prompt("Ваше имя?"));

alert("Задание 6: калькулятор");
a = prompt("Число 1?");
b = prompt("Число 2?");
c = Number(a) + Number(b);
alert("Ответ: " + c);

for(i=1;i<=10;i++){
    document. write("<hr width=\""+i*10+"%\">") 
}

for(i=10;i>=1;i--) {
    document.write("<hr width=\"" + i * 10 + "%\">");
}

a=5
for (i = 1; i <=9; i++)  
{ 
document.write(i+ "*" +a+ "="+ (i*a) +"<br>");
} 

document.write("<table border=1>")
for (i = 1; i <= 100; i++) {
  if (i % 10 === 1){
    document.write("<tr>");
  }
  document.write("<td>" + i + "</td>");
  if (i % 10 === 0){
    document.write("</tr>");
  }
}
document.write("</table>")


a=prompt("Задание 12: Введите число") 
i=1 
while(i<=10) 
{
document.write(a+"x"+i+"="+a*i+"<br>") 
i++
} 

alert("Задание 13:");
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
var d1 = prompt("Задание 14:" + a1 + "+" + b1 + "= ?");
if (d1 == a1 + b1) {alert("++");} else{alert("--");}
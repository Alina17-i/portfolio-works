alert("Задание 6: калькулятор");
a = prompt("число 1?");
b = prompt("число 2?");
c = Number(a) + Number(b);
alert("Ответ: " + c);

a=5
document.write("Задание 7:");
for (i = 1; i <=9; i++)  
{ 
document.write( + i + "*" +a+ "="+ (i*a) +"<br>");
} 

document.write("Задание 8:");
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
document.write("</table>");

a=prompt("Задание 9: Введите число") 
i=1 
while(i<=10) 
{
document.write(a+"x"+i+"="+a*i+"<br>") 
i++
} 


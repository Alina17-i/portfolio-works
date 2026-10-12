let num = prompt('Введите натуральное число n:');
let revers = '';
for (let i = num.length - 1; i >= 0; i--) 
{
  revers += num[i];
}
alert("Обратный порядок вашего числа: " + revers);


let a = prompt('Введите число:');
let m = prompt('Введите число:');
let n = prompt('Введите число:');
let p = prompt('Введите число:');

    function chec(m, n, p, a) {
 if (m % a == 0) {
 alert(`Число ${m} делится на ${a}`);
} else {
 alert(`Число ${m} НЕ делится на ${a}`);
}
 if (n % a == 0) {
 alert(`Число ${n} делится на ${a}`);
} else {
 alert(`Число ${n} НЕ делится на ${a}`);
}
 if (p% a == 0) {
 alert(`Число ${p} делится на ${a}`);
} else {
 alert(`Число ${p} НЕ делится на ${a}`);
}
}
chec(m, n, p, a);

document.write('<table border=1  cellpadding=6>');
    for (let j = 1; j <= 10; j++) {
    }

    for (let i = 1; i <= 10; i++) {
        document.write('<tr>');
        for (let j = 1; j <= 10; j++) {
            if (i === j) {
                document.write('<td rowapan = "3">' + (i * j) + '</td>');
            } else {
                document.write('<td>' + (i * j) + '</td>');
            }
        }
        document.write('</tr>');
    }
    document.write('</table>');
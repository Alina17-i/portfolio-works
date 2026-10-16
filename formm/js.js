function validate_form() {
    let valid = true;
    if (document.forms.forma8.contact_name.value === "") {
        alert("Пожалуйста, заполните поле 'Ваше имя'.");
        valid = false;
    }
    return valid;
}

function check()
{
    if ( calc.answer.value == "4" )
    alert("Правильно!");
else alert("Неправильно!");
}

function beg(){
    var elem = document.getElementById("btn");
    var pos = 0;
    var id = setInterval(frames,0.003);
    function frames(){
        if(pos == 850){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

function dvig(){
    alert("Поймал");
}

function check(num, correct) {
    let input = document.getElementById('a' + num).value;
    let result = document.getElementById('r' + num);
    
    if (input == correct) {
        result.innerText = "верно";
        result.style.color = "green";
        result.dataset.ok = "1"; 
    } else {
        result.innerText = "не верно";
        result.style.color = "red";
        result.dataset.ok = "0"; 
    }
}
function resetTest() {
    document.getElementById('a1').value = "";
    document.getElementById('a2').value = "";
    
    let r1 = document.getElementById('r1');
    let r2 = document.getElementById('r2');
    
    r1.innerText = ""; r1.style.color = "black"; delete r1.dataset.ok;
    r2.innerText = ""; r2.style.color = "black"; delete r2.dataset.ok;
    
    document.getElementById('total').innerText = "";
}
function score() {
    let count = 0;
    if (document.getElementById('r1').dataset.ok == "1") count++;
    if (document.getElementById('r2').dataset.ok == "1") count++;
    
    document.getElementById('total').innerText = "Правильных ответов: " + count + " из 2";
}
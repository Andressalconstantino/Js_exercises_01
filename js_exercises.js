const button1 = document.getElementById('submit');

button1.addEventListener("click", actOne);

function actOne(){
    const grade = document.getElementById('one');
    let grades = grade.elements[0].value;
    grades = grades.split(' ');
    const media = grades.length;
    let soma = 0;
    for (let i=0; i<media; i++){
        soma += parseInt(grades[i], 10);
    }
    const results = soma/media;
    document.getElementById('Result').innerHTML = results.toString();
}

const button2 = document.getElementById('send');

button2.addEventListener("click", actTwo);

function actTwo(){
    const number = document.getElementById('two');
    let numbers= number.elements[0].value;
    numbers = numbers.split(' ');
    let result = `<table id="tableTwo">`;
    numbers.forEach(function (numb){
        numb = parseInt(numb, 10);
        result += `<tr><td>${numb} = ${numb*numb}</td></tr>`
    });
    result += `</table>`;
    document.getElementById('ResultTwo').innerHTML = result;
}

const button3 = document.getElementById('enviar');
button3.addEventListener("click", actThree);

function actThree(){
    const numero = document.getElementById('three');
    let numeros = numero.elements[0].value;
    numeros = numeros.split(' ');
    numeros.forEach(function (num){
        num = parseInt(num, 10);
    });
    const result = Math.max.apply(null, numeros);
    document.getElementById('maior').innerHTML = result.toString();
}



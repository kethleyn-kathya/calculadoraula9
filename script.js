function soma(num1,num2){
    return num1 + num2;
}

function subtracao(num1,num2){
    return num1 - num2;
}

function multiplicao(num1,num2){
    return num1 * num2;
}

function divisao(num1,num2){
    return num1 / num2;
}

let menu = prompt("Digite:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão");
menu = parseInt(menu);

let n1 = parseInt(prompt("Digite um número"));
let n2 = parseInt(prompt("Digite outro número"));

if(menu==1){
    let resultado = soma(n1,n2);
    alert("O resultado é "+ resultado);
}
if(menu==2){
    let resultado = subtracao(n1,n2);
    alert("O resultado é "+ resultado);
}
if(menu==3){
    let resultado = multiplicao(n1,n2);
    alert("O resultado é "+ resultado);
}
if(menu==4){
    let resultado = divisao(n1,n2);
    alert("O resultado é "+ resultado);
}
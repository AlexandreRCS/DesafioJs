let numberOne = Number(prompt("Digite o primeiro numero"))
let numberTwo = Number(prompt("Digite o segundo numero"))
let iter = 0

let result = [numberOne + numberTwo, numberOne - numberTwo, numberOne * numberTwo, numberOne / numberTwo, numberOne % numberTwo]
let operators = ["Soma", "Subtração", "Multiplicação", "Divisão", "Resto da divisão"]

while(iter < operators.length){
    alert(`O resultado da ${operators[iter]} e ${result[iter]}`)
    iter ++
}

if (result[4] == 0){
    alert(`A soma dos dois numeros e PAR`)
}else{
    alert(`A soma dos dois numeros e ÍMPAR`)
}

if(numberOne == numberTwo){
    alert(`Os dois numeros são iguais`)
}else{
    alert(`Os dois numeros não são iguais`)
}
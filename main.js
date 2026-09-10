// let num_one = Number(prompt("Digite o primeiro número:"))
// let num_two = Number(prompt("Digite o segundo número:"))

// console.log(typeof num_one)
// console.log(typeof num_two)

// let sum = num_one + num_two
// let sub = num_one - num_two
// let mult = num_one * num_two
// let div = num_one / num_two
// let pot = num_one ** num_two
        
// alert(`soma: ${sum}`)
// console.log("soma: ", sum)

// alert(`subtração: ${sub}`)
// console.log("subtração:", sub)

// alert(`multiplicação: ${mult}`)
// console.log("multiplicação:", mult)

// alert(`divisão: ${div}`)
// console.log("divisão: ", div)

// alert(`potenciação: ${pot}`)
// console.log("pontenciação: ", pot)

// let idade = Number(prompt("Digite a sua idade: "))

// if (idade <= 12) {
//     alert("Criança")
// } else if (idade <= 18) {
//     alert("Adolescente")
// } else if (idade <= 60) {
//     alert("Adulto")
// } else {
//     alert("Idoso")
// }

// let valor = Number(prompt("Digite o valor da compra: "))

// if (valor < 100) {
//     alert(`Sem desconto! Ficando R$${valor}`)
// } else if (valor < 300) {
//     let desconto = valor * 0.1
//     let valor_total = valor - desconto
//     alert(`Sua compra tem 10% de desconto! Ficando R$${valor_total}`)
// } else if (valor < 500) {
//     alert(`Sua compra tem 20% de desconto! Ficando R$${valor * 0.8}`)
// } else {
//     alert(`Sua compra tem 30% de desconto! Ficando R$${valor * 0.7}`)
// }

let valor = Number(prompt("Digite o valor da compra: "))
let desconto = Number(prompt("Digite a porcentagem de desconto: "))

if (valor < 100) {
    alert(`Sem desconto! Ficando R$${valor}`)
} else if (valor >= 100) {
    let valor_total = valor * (100 - desconto) / 100
    alert(`Sua compra tem ${desconto}% de desconto! Ficando R$${valor_total}`)
}
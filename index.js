// 1)Criar 3 variáveis:
// a)A primeira variável deverá conter o seu nome. 
// b)A segunda variável deverá conter a sua idade.
// c)Converter a segunda variável para string.
// d)A terceira variável deverá conter a concatenação das duas variáveis anteriores.
// e)Exibir no console a terceira variável.
// f)Exibir no console o tamanho da terceira variável.

var nome = "Cleyton"
var idade = String(20)
var conc = nome + idade

console.log(conc)
console.log(conc.length)


/*
2)Criar 2 variáveis:
a)A primeira variável deverá conter o valor 17.
b)A segunda variável deverá conter o valor 28.
c)Converter os valores das duas variáveis
d)Exibir no console a terceira variável.
*/

var num = [17]
var newNum = [28]
let arrayNum = newNum.concat(num)
let strNum = String(arrayNum)
console.log(strNum)
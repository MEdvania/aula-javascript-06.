/*
1)Criar um arquivo javascript para:
a)Exibir no console a posição da letra h na string txt
*/

let txt1 = "abcdefghijklmn"
console.log(txt1.indexOf("h"))
//b)Exibir no console a palavra bananas, use o método slice.

let txt2 = "Posso comer banana o dia todo"
console.log(txt2.slice(12, 18))

//c)Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
let txt3 = "Olá mundo"
console.log(txt3.replace("Olá mundo", "Bem vindo"))

//d)Converter o texto em letras maiúsculas e exibir no console.
let txt4 = "Olá mundo"
console.log(txt4.toUpperCase())

//e) Converter o texto em letras minúsculas e exibir no console.
let txt5 = "OLÁ MUNDO"
console.log(txt5.toLowerCase())

//f) Exibir no console o tamanho da string
let txt6 = "Posso comer banana o dia todo"
console.log(txt6.length)

// g) Concatenar as strings e exibir no console.
let str1 = "Hello"
let str2 = " World"
console.log(str1.concat(str2))

//h) Ordenar o array de frutas em ordem alfabética e exibir no console
let frutas = ["Banana", "Laranja", "Maçã", "Kiwi"];
console.log(frutas.sort())

//i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
let frutas1 = ["Banana", "Laranja", "Maçã", "Kiwi"];
console.log(frutas1.slice(1,3))

//j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.
console.log(frutas1)
let novasFrutas = ["Uva", "Caju", "Kiwi"]
console.log(frutas1.concat(novasFrutas))

//k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas,
//remover  o último item do array e exibir no console o novo array.

frutas1.unshift("Pera")
frutas1.unshift("Manga")
frutas1.pop()
console.log(frutas1)

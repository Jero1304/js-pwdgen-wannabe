const PWgenerator = document.getElementById('first-title')

console.log(PWgenerator.innerHTML)

let nome
let cognome
let colore
let numero
let pwResult

let message='Ey ciao sono un generatore di PW'

nome = prompt('dimmi come ti chiami')
console.log('nome = ' + nome)

cognome = prompt('E il tuo cognome?')
console.log('cognome = ' + cognome)

colore = prompt('Colore preferito?')
console.log('colore = ' + colore)

eta = prompt('Età?')
console.log('eta = ' + eta)

pwResult = nome + cognome + colore + eta
console.log('La tua PW è: ' + pwResult)

PWgenerator.innerHTML=('La tua PW è: ' + pwResult)
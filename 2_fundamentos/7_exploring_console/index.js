// mais de um valor
const a = 10
const b = "um texto"
const c = [1, 2]

console.log(a, b, c)

// contagem de impressoes
console.count(`O valor de a é ${a}, contagem`)
console.count(`O valor de a é ${a}, contagem`)
console.count(`O valor de a é ${a}, contagem`)

//variavel entre string
console.log('isto é %s', b)

//limpeza console
setTimeout(() => {
console.clear()
}, 2000)
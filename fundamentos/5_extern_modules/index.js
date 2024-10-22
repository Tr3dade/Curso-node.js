const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const name = args["name"]
const profission = args["profission"]   
console.log(nome, profission)

console.log(`O nome dele é ${name} e ele é ${profission}`)
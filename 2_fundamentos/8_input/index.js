const readline = require("readline").createInterface({
    input: process.input,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida?", (linguage) => {
    console.log(`A minha linguagem preferida é: ${linguage}`)
    readline.close()
})
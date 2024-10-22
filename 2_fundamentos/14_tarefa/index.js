const inquerer =  require("inquirer");
const chalk = require("chalk")

inquerer.prompt([{
    name: 'p1',
    message:'Insira seu nome: ',
},
{
    name:'p2',
    message:'Insira sua idade: ',
}]).then((answers) =>{
console.log(chalk.bgYellow.black(`Nome: ${answers.p1}\nIdade:${answers.p2}`))
}).catch((err) => console.log(err))
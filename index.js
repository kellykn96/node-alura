import fs from 'fs';
import chalk from "chalk";

console.log(chalk.bgWhiteBright('olá mundo'));

// fs.readFile('package.json', 'utf-8', function (err,conteudo){
//     console.log(conteudo)
// })

//usando dentro de uma função
function trataErro(p){
    throw new Error(chalk.redBright(p));
};

function leArquivo(nomeArquivo) {
    fs.readFile(nomeArquivo, 'utf-8', function (err,conteudo){
        if (err) {
            trataErro(err)
            console.log(err)
        }else{
            console.log(chalk.greenBright(conteudo))
        }

    })
}

leArquivo('package.jso');

leArquivo('package.json')
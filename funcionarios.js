const fs = require('fs');
var arquivo = fs.readFileSync("funcionarios.json");
var empresa = JSON.parse(arquivo);

function maior_salario(empresa) {
    var salario = 0;
    var funcionario = "";
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        if (empresa.funcionarios[i].salario > salario){
            funcionario = empresa.funcionarios[i];
            salario = empresa.funcionarios[i].salario;
        }
    }
    return funcionario
}

function menor_salario(empresa){
    var salario = 9999;
    var funcionario = "";
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        if (empresa.funcionarios[i].salario < salario){
            funcionario = empresa.funcionarios[i];
            salario = empresa.funcionarios[i].salario;
        }
    }
    return funcionario
}

function media_salario(empresa){
    var salario = 0;
    var media = 0;
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        salario += empresa.funcionarios[i].salario
    }
    media = salario / empresa.funcionarios.length;
    return media;
}

function maior_salario_setor(empresa, set){
    var salario = 0;
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        if (empresa.funcionarios[i].setor == set){
            if (empresa.funcionarios[i].salario > salario) {
                salario = empresa.funcionarios[i].salario;
                var funcionario = empresa.funcionarios[i];
            } 
        }   
    }
    return funcionario;
}

function menor_salario_setor(empresa, set){
    var salario = 9999;
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        if (empresa.funcionarios[i].setor == set){
            if (empresa.funcionarios[i].salario < salario) {
                salario = empresa.funcionarios[i].salario;
                var funcionario = empresa.funcionarios[i];
            } 
        }   
    }
    return funcionario;
}

function media_salario_setor(empresa, set){
    var salario = 0;
    var media = 0;
    var setor = [];
    for (var i = 0 ; i < empresa.funcionarios.length ; i++){
        if (empresa.funcionarios[i].setor == set){
            salario += empresa.funcionarios[i].salario;
            setor.push(empresa.funcionarios[i])
            } 
        }
    media = salario/setor.length;
    return media;
    }
var select_setor = ["Comercial","Produção", "Administrativo"];

console.log(menor_salario(empresa));
console.log(maior_salario(empresa));
console.log(media_salario(empresa));
console.log(maior_salario_setor(empresa, select_setor[0]));
console.log(menor_salario_setor(empresa, select_setor[1]));
console.log(media_salario_setor(empresa, select_setor[2]));
// variáveis

var nome = "Joel Jhimmy"


alert(nome + ", Bem-vindo ao Javascritp!")


// array
lista_frutas = ["maçã", "pera", "uva"];



// operação com lista: remover
lista_frutas.pop();
console.log(lista_frutas.toString());



// operação com lista: adicionar
lista_frutas.push("uva");
console.log(lista_frutas.toString());



// dicionário
var aluno = { nome: "Joel Jhimmy", curso: "Javascript", situacao: 'Aprovado' }
console.log(aluno)


// Condicionais
var idade = prompt("Qual é a sua idade ?");

if (idade >= 16) {
    alert("Você já pode dirigir !");
} else {
    alert("Ainda é muito cedo para você dirigir carros! ");
}

// Estrutura de repetição

var contador = prompt("Eu gosto de contar, até que número você quer que eu conte ?");
var inicio = 0;

while (inicio <= contador) {
    confirm(inicio + " Acertei? ");
    inicio++;
};
var inicio = 0;

alert("Pronto, você me ensinou a contar de " + inicio + " a " + contador--);


// Trabalhando com datas

var data = new Date();
alert("Hoje é um dia muito importante!" + data.getDate() + "É o dia em que te conheci!");




// Funções

function par_ou_impar(numero){

    if(numero%2 == 0){
        confirm("O número "+ numero +" é par !");
    }else{
        confirm("O número "+ numero +" é impar");
    }
}


par_ou_impar(prompt("Eu sei se um número é par ou impar. Digite um número para ver: "));
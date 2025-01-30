//Desafios feito durante as aulas de JavaScript
//Desafio 01:Usando o if else 
let porcentagemDesconto = 0;
let quantidadeMilhas=5000;

if(quantidadeMilhas >=5000){
    porcentagemDesconto = porcentagemDesconto + 100;
}
if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}
alert('A porcentagem de desconto é : ' + porcentagemDesconto);


//Desafio 02: Concatenando

let dia = prompt('Qual é o dia da semana hoje? ');
if (dia == 'sábado'||dia=='domingo') {
    alert('Bom final de Semana! '+' hoje é  '+ dia);
    
} else {
    alert('Boa semana!'+ ' hoje é '+ dia);
    
}

let numero = prompt('Digite um numero: ');
if (numero>=0) {
    alert('O número '+numero+' é Positivo .');
    
}else{
    alert('O número '+ numero+ ' é Negativo');
}

let pontuacao = prompt('Digite sua pontuação final do jogo: ');
if (pontuacao>=100) {
    alert('Parabéns, você venceu!');
        
} else {
    alert('Tente novamente para ganhar! ');
    
}
//usando concatenação com Template Strings (Interpolação)
let saldoConta = 17000;
alert (`Seu saldo é  ${saldoConta}`);

let nome = prompt('Digite seu nome: ');
alert('Seja Bem-vindo(a), ' + nome);

//Contador usando o While
//Contador crescente 
let contador=1;

while(contador<4){
    
    console.log('Contando interação: ' + contador);
    contador++;

}

//Contador decrescente 
let numeroMaximo= prompt('Digite um número para a contagem regressiva: ');

while (numeroMaximo>=0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

//contagem crescente 
let contador2=0;
let numero = prompt('Digite um número para continuar contando a partir do ZERO: ');
while (contador2<=numero) {
    console.log(contador2);
    contador2++;
    
}

alert('Boas Vindas');

let nome = 'Nayara Scherer';
console.log(`Olá,  ${nome}!`);
alert(`Olá, ${nome}!`);

let resposta1 =prompt(`Qual a linguagem de Programação você mais gosta ${nome}?`)
console.log(`Linguagem de programação preferida é ${resposta1}`);

let valor1=7;
let valor2=35;

let resultado =(valor1+valor2);
let resultado2 =(valor2-valor1);

console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);
console.log(`A diferença entre ${valor2} e ${valor1} é igual a ${resultado2}`);

let idade = prompt(`Digite a sua idade : `);
/*if (idade>=18) {
    console.log(`Você é maior de idade`);
}else{
    console.log(`Você ainda é menor de idade`)
}*/
//Operadores ternário
let MaiorMenorIdade = idade >=18 ?(`você é maior de idade`):(`você ainda é menor de idade`);
console.log (`Você tem ${idade}. Portanto  ${MaiorMenorIdade}`);

//Verificação se o número digitado é Positivo, Negativo ou zero 
let numero = prompt('Digite um número: ');
let numeroPosNegZero= numero > 0 ? ('Positivo'): numero== 0 ? ('Zero'):('Negativo')
console.log(`O número ${numero} é ${numeroPosNegZero}`);

let contagem = 0;
while (contagem < 10) {

    contagem++;
    console.log(contagem);
}

let nota = prompt('Digite a sua nota: ');
let verificaNota = nota >=7?('APROVADO'):('REPROVADO');
console.log(`Você tirou nota ${nota}, portanto está ${verificaNota}`);*/

//Número aleátório
let numeroAle= parseInt(Math.random()*10 );
let numeroAteDez= parseInt(Math.random() *10+1);
let numeroAteMil= parseInt(Math.random() * 1000+1);

console.log('Número aleatório: ' + numeroAle);
console.log('Número aleatório de 0 a 10: ' + numeroAteDez);
console.log('Número aleatório de 0 a 1000: ' + numeroAteMil);
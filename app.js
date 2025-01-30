alert('Boas vindas ao jogo do mundo secreto');
let numeroMaximo = 5000;
let numeroSecreto =parseInt(Math.random()*numeroMaximo+1);
let chute;
let tentativas=1;
console.log(numeroSecreto
    
);

//enquato o chute não for igual ao número secreto
while(chute!=numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if(numeroSecreto == chute){
        break;
       // usando a variável com Template Strings ${ numeroSecreto} 
    }else{
       if (chute>numeroSecreto) {
        alert(`O número secreto é menor que  ${numeroSecreto}`);
       } else {
        alert(`O número secreto é maior que  ${numeroSecreto}`)
        
       }
    }
    //tentativas=tentativas+1; ou a expressão debaixo
    tentativas++;
    
}
//Operador ternário 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
/*if (tentativas==1) {
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}else{
    alert(`Isso ai, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
}*/





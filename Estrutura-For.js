function acaobotao() {

    var numero,fatorial,contador
     numero = prompt("Digite o numero para calcular o fatorial.")
     fatorial = 1 
     for (contador = 1;  contador <= numero; contador++){
     fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + " e: " + fatorial
}
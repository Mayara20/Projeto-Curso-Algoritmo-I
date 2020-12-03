
function acaobotao() {
 var valor01,valor02,operacao,Resultado; 
valor01 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operacao: EX: + , - , * ,/")
valor02 = prompt("Digite o segundo valor: ")

switch (operacao) {
    case "+":
        Resultado = parseInt(valor01) + parseInt(valor02) 
        break;
    case "-": 
        Resultado = parseInt(valor01) - parseInt(valor02)
        break;
    case "*":
        Resultado = parseInt(valor01) * parseInt(valor02)
        break;
    case "/":
        Resultado = parseInt(valor01) / parseInt(valor02)
        break;
 }
 document.getElementById("paragrafo").innerText = Resultado
}

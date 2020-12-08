

function acaobotao() {
    var valor01 ,operacao ,valor02 ,Resultado

  valor01 = prompt("Digite o valor01: ")
  operacao = prompt("Digite a operacao: EX: +,-,*,/ ")
  valor02 = prompt("Digite o valor02: ")

   if(operacao == "+"){
     Resultado = parseInt( valor01 ) + parseInt( valor02 )
   }else if(operacao == "-"){
     Resultado = parseInt( valor01 ) - parseInt( valor02 )
   }else if(operacao == "*"){
     Resultado = parseInt( valor01 ) * parseInt( valor02 )
   }else if (operacao == "/"){
     Resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
  document.getElementById("paragrafo").innerText = Resultado
} 





var nome,nota01,nota02,Media; 

passou = false 

nome = prompt("Digite o Nome do Aluno: ")
nota01 = prompt("Digite a Nota01 do Aluno: ")
nota02 = prompt("Digite a Nota02 do Aluno: ")

Media = parseInt(nota01) + parseInt(nota02) /2;

if (Media >= 5)
  passou = true;
if (passou = Media >= 8)
  alert("Aprovado!" + nome)
else 
  alert("Reprovado!" + nome)
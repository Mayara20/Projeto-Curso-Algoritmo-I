var nome,nota01,nota02,Media; 

nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota01 do aluno: ")
nota02 = prompt("Digite a nota02 do aluno: ")

Media = parseInt(nota01) + parseInt(nota02) /2

if (Media >= 7)
  alert("Aprovado! ")
else
  alert("Reprovado! ")
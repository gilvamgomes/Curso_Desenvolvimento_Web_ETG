/*
5.3.Exercício 3: Verificador de Aprovação
Faça um algoritmo que leia duas notas de um aluno, calcule a média e verifique se o aluno foi aprovado. Considere que a média para aprovação é 7.0. O programa deve exibir a média e uma mensagem de "Aprovado" ou "Reprovado". Este exercício combina cálculo de média, uso de operadores relacionais e estrutura de decisão para determinar o resultado final
*/

//Notas
let nota1 = 5, nota2 = 7;

//Cálculo da média
let mediaDasNotas = (nota1 + nota2)/2;

//Conferência da média
if (mediaDasNotas>=7){
    console.log("Aprovado com nota:", mediaDasNotas)
}else {
    console.log("Reprovado com nota:", mediaDasNotas)
}

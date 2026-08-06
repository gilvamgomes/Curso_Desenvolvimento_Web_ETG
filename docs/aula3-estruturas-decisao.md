# Estruturas de Decisão na Lógica de Programação

As **estruturas de decisão** (ou estruturas condicionais) são recursos fundamentais na lógica de programação que permitem ao código tomar caminhos diferentes com base em condições lógicas ou comparações (**Verdadeiro** ou **Falso**).

---

## 1. Estrutura Simples (`if`)

A estrutura simples testa uma condição. Se essa condição for **verdadeira**, o bloco de código correspondente é executado. Se for **falsa**, o programa ignora o bloco e segue adiante.

- **Exemplo conceitual:** "Se a nota for maior ou igual a 7, informe que o aluno passou."
- **Exemplo em código (JavaScript):**
  ```javascript
  if (nota >= 7) {
    console.log("Aprovado!");
  }
  
## 2. Estrutura Composta (if / else)
A estrutura composta adiciona uma alternativa caso a condição seja falsa.

Exemplo conceitual: "Se a idade for maior ou igual a 18, permita a entrada; caso contrário, negue a entrada."

Exemplo em código (JavaScript):

JavaScript
if (idade >= 18) {
  console.log("Acesso permitido.");
} else {
  console.log("Acesso negado.");
}

## 3. Estruturas Aninhadas e Múltiplas (if / else if / else)
Quando existem três ou mais cenários possíveis, utiliza-se o encadeamento de condições (else if).

Exemplo conceitual: Avaliação de notas escolares.

Exemplo em código (JavaScript):

JavaScript
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

## 4. Estrutura de Seleção Múltipla (switch / case)
O switch é ideal para quando precisamos avaliar o valor exato de uma mesma variável em múltiplos casos conhecidos, evitando criar vários if / else encadeados.

Exemplo em código (JavaScript):

JavaScript
const diaDaSemana = 3;

switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}
# Estruturas de Repetição na Lógica de Programação

As **estruturas de repetição** (também conhecidas como *laços*, *loops* ou *malhas de repetição*) são recursos fundamentais na lógica de programação que permitem executar um determinado bloco de código **várias vezes consecutivas**, enquanto uma condição específica for verdadeira ou até que um limite seja atingido.

---

## 1. Para que servem?

* **Automação de tarefas repetitivas:** Evita a necessidade de duplicar linhas de código manualmente.
* **Processamento de coleções de dados:** Permite percorrer listas, vetores (*arrays*) ou tabelas item por item.
* **Otimização e legibilidade:** Torna o programa mais limpo, fácil de manter e com menor consumo de linhas no código-fonte.

---

## 2. Principais Tipos de Estruturas de Repetição

Existem três estruturas fundamentais de repetição, cada uma indicada para cenários específicos:

### A. Repetição com Teste no Início (`while` / `enquanto`)
O bloco de código só é executado **se** a condição for verdadeira logo de início. Se a condição for falsa na primeira verificação, o código dentro do laço nem chega a ser executado.

* **Quando usar:** Quando você não sabe previamente quantas vezes a repetição precisará acontecer.
* **Exemplo de lógica:**
  * *Enquanto o usuário não digitar a senha correta, continue pedindo a senha.*

### B. Repetição com Teste no Fim (`do...while` / `faca...enquanto`)
O bloco de código é executado **pelo menos uma vez** antes que a condição seja testada. O teste condicional ocorre após a execução do bloco.

* **Quando usar:** Quando a ação precisa acontecer obrigatoriamente uma vez antes de avaliar se deve continuar.
* **Exemplo de lógica:**
  * *Exiba o menu de opções. Faça a leitura da opção. Continue exibindo enquanto a opção escolhida não for "Sair".*

### C. Repetição Contada (`for` / `para`)
Essa estrutura integra em uma única declaração a **inicialização** de uma variável contadora, a **condição de parada** e o **incremento/decremento** dessa variável.

* **Quando usar:** Quando você sabe exatamente (ou pode determinar previamente) quantas vezes o ciclo deve ser repetido.
* **Exemplo de lógica:**
  * *Para uma variável i variando de 1 até 10, imprima o valor de i.*

---

## 3. Conceitos Importantes

* **Variável Contadora:** Uma variável usada para contar o número de iterações executadas (ex: `contador = contador + 1`).
* **Variável Acumuladora:** Uma variável que junta/soma valores a cada iteração (ex: `soma = soma + valor`).
* **Condição de Parada:** É a regra que determina o fim do laço. Sem uma condição de parada adequada, o sistema entra em um **loop infinito** (laço sem fim), travando a execução do programa.
* **Controle de Fluxo (`break` e `continue`):**
  * `break`: Interrompe e sai imediatamente do laço de repetição.
  * `continue`: Pula a iteração atual e avança diretamente para o próximo ciclo do laço.
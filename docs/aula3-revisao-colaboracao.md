# Processo de Trabalho no GitHub, Formas de Colaboração e Boas Práticas

## 1. O Processo de Trabalho no GitHub (GitHub Flow)
O **GitHub Flow** é um fluxo de trabalho leve e baseado em ramificações (*branches*) que permite atualizar projetos de forma organizada e sem afetar a versão principal em produção.

1. **Criar uma Branch**: A partir da branch principal (`main` ou `master`), crie uma ramificação secundária com um nome descritivo para realizar uma alteração ou adicionar uma funcionalidade (ex: `feature/login`, `fix/bugs`).
2. **Fazer Commits**: Modifique os arquivos e salve o progresso com mensagens de commit claras e explicativas.
3. **Abrir um Pull Request (PR)**: Solicite a integração das alterações da sua branch com a branch principal. O PR é o espaço onde a equipe debate e revisa o código.
4. **Revisão de Código (Code Review)**: Outros colaboradores analisam o que foi alterado, fazem testes, comentam sugestões de melhoria ou aprovam a alteração.
5. **Mesclar (Merge)**: Após a aprovação e a ausência de conflitos, a branch é mesclada com a branch principal.
6. **Deletar a Branch**: Uma vez concluído o *merge*, a branch secundária deve ser apagada para manter o repositório limpo.

---

## 2. Formas de Colaboração no GitHub

Existem duas formas principais de colaborar em repositórios no GitHub:

* **Modelo Colaborativo Direto (Shared Repository / Branching)**:
  * Usado por equipes no mesmo projeto/empresa.
  * O desenvolvedor ganha acesso direto de escrita ao repositório central, cria suas próprias branches e envia Pull Requests internos.

* **Modelo Fork e Pull Request (Forking Workflow)**:
  * Comum em projetos *Open Source* (código aberto).
  * O colaborador faz uma cópia completa do repositório para a sua própria conta do GitHub (chamada de **Fork**).
  * Ele faz as alterações no seu próprio repositório e envia um **Pull Request** para o repositório original solicitando a inclusão das melhorias.

---

## 3. Boas Práticas no Controle de Versionamento

Para garantir o bom andamento de um projeto e facilitar a comunicação entre os desenvolvedores, adote as seguintes práticas:

* **Mensagens de Commit Claras**: Escreva mensagens objetivas e explicativas sobre o que foi feito (ex: `git commit -m "Adiciona validação no formulário de cadastro"` em vez de `git commit -m "ajustes"`).
* **Commits Pequenos e Frequentes**: Salve alterações em pequenas partes funcionais. Isso facilita a identificação de erros e a reversão de códigos antigos.
* **Mantenha a Branch Principal Estável**: A branch `main` só deve receber código testado e funcionando corretamente.
* **Escreva Bons Pull Requests**: Ao abrir um PR, descreva o que foi alterado, o motivo da mudança e como testá-la.
* **Documentação (README.md)**: Mantenha o arquivo `README.md` atualizado com informações básicas sobre o projeto, como instalar e como contribuir.
* **Uso do .gitignore**: Adicione ao arquivo `.gitignore` arquivos temporários, senhas, chaves de API e pastas pesadas (como `node_modules/`) para não subir arquivos desnecessários ou sensíveis ao repositório.
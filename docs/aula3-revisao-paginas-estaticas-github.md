# Criação de Páginas Estáticas no GitHub

## 1. O que são Páginas Estáticas?
Uma **página estática** é um site composto por arquivos como **HTML, CSS, JavaScript** e imagens que são entregues ao navegador exatamente como estão salvos no servidor. 

Diferente das páginas dinâmicas (como sistemas com banco de dados em PHP, Python ou Node.js), as páginas estáticas não exigem processamento no servidor a cada requisição, resultando em:
* **Alta velocidade de carregamento.**
* **Maior segurança** (sem banco de dados para ser vulnerável a ataques).
* **Baixo custo de hospedagem** (frequentemente gratuita).

---

## 2. O que é o GitHub Pages?
O **GitHub Pages** é um serviço de hospedagem de sites estáticos oferecido diretamente pelo GitHub. Ele pega arquivos HTML, CSS e JS do seu repositório público (ou privado em planos pagos) e publica um site acessível na web através de um endereço público.

* **URL Padrão do Usuário:** `https://seu-usuario.github.io/`
* **URL do Projeto:** `https://seu-usuario.github.io/nome-do-repositorio/`

---

## 3. Como Criar e Hospedar uma Página Estática no GitHub

Para publicar um site no GitHub Pages, siga os passos abaixo:

### Passo 1: Preparar os Arquivos
1. Crie os arquivos do seu site (por exemplo: `index.html`, `style.css`, `script.js`).
2. O arquivo principal **deve obrigatoriamente se chamar `index.html`**, pois ele funciona como a página inicial padrão acessada pelos navegadores.

### Passo 2: Enviar para o Repositório no GitHub
1. Crie um repositório no GitHub (ex: `meu-site`).
2. Envie seus arquivos para o repositório usando o Git terminal ou diretamente pela interface do GitHub.

### Passo 3: Ativar o GitHub Pages
1. No seu repositório no GitHub, acesse a aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment** (Construção e implantação), selecione a origem (*Source*):
   * Escolha a opção **Deploy from a branch**.
4. Abaixo, selecione a branch principal (geralmente `main` ou `master`) e a pasta desejada (geralmente `/root` ou `/docs`).
5. Clique em **Save** (Salvar).

### Passo 4: Acessar o Site
Após alguns minutos, o GitHub processará o ambiente e exibirá o link público no topo da página de configurações do *GitHub Pages*. Bastará clicar no link fornecido para ver sua página estática online!
# mywallet-back
[Read this page in English](https://github.com/AldusD/mywallet-back#readme)


## API de MyWallet app que permite usuários criar, editar e persistir dados.

*MyWallet é responsivo somente para dispositivos mobile*

*[Deploy da aplicação](https://mywalletfinances.vercel.app)* |
*[Repositório front-end](https://github.com/AldusD/mywallet-front)*

Como um dos projetos semanais do bootcamp Desenvolvedor Web Full Stack da Driven Education, MyWallet surgiu com a intenção de reforçar o aprendizado os seguintes conhecimentos aprendidods no período: 
- Registrar usuários e salvar senhas com criptografia
- Gerenciar o acesso dos usuários com sessões e tokens de acesso
- CRUD de entidaddes com MongoDb 
- Separação de responsabilidades em arquivos separados: Routers, middlewares e controllers 
- Criação de single page application usando o Framework React

#### Como iniciar MyWallet
- 1 - Clone os repositórios de front-end e back-end
- 2 - Instale todas as dependências de  produção usando 'npm install'
- 3 - Se preferir, preencha arquivos .env para especificar onde a API deve executar e como o app front-end vai encontra-lo 
- 4 - Execute na pasta raiz do projeto back-end 'node app.js'
- 5 - Execute na pasta raiz do projeto front-end 'npm start'

#### Explicando a nova branch
- A branch Feat/finishing-project foi criada para completar features do projeto que por gestão de tempo não consegui terminar na semana especifica   
- As features trazidas pela branch feat/finishing-project branch respeitam as limitações de tecnologias e práticas que eu possuia quando iniciei o projeto

#### Problemas e limitações conhecidos:
- Botões na home vão, em alguns dispositivos, bloquear o saldo  
- Chamadas da API estão expostas nos arquivos dos componentes
- Não uso de Custom Hooks

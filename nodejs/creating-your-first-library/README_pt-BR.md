# Projeto de Processamento de Arquivos e Validação de Links

Este projeto consiste em uma aplicação em JavaScript que permite processar arquivos de texto e extrair os links presentes neles. Além disso, é possível realizar a validação dos links, verificando o status de cada um deles através de requisições HTTP.

## Funcionalidades

- Processamento de arquivos de texto e extração de links.
- Validação dos links através de requisições HTTP.
- Apresentação dos resultados no console.

## Requisitos

- Node.js instalado na máquina.

## Instalação

1. Faça o download ou clone este repositório para o seu computador.
2. Abra o terminal e navegue até a pasta raiz do projeto.
3. Execute o comando `npm install` para instalar as dependências do projeto.

## Utilização

A aplicação pode ser executada através do comando `node cli.js`, seguido de dois parâmetros obrigatórios:

1. Caminho para o arquivo ou diretório a ser processado.
2. (Opcional) `--validate` para realizar a validação dos links.

Exemplo de uso para processar um arquivo:

```
node cli.js arquivo.md
```

ou

```
npm run cli
```

Exemplo de uso para processar um arquivo e validar os links:

```
node cli.js arquivo.md --validate
```

ou

```
npm run cli:validate
```

Exemplo de uso para processar um diretório:

```
node cli.js diretorio/
```

## Resultados

Após a execução do comando, a aplicação irá apresentar os resultados no console. Será exibida uma lista contendo os links encontrados nos arquivos processados, juntamente com o status de cada link, caso a opção `--validate` tenha sido utilizada.

## Bibliotecas Utilizadas

- [fs](https://nodejs.org/api/fs.html): Biblioteca nativa do Node.js para interação com o sistema de arquivos.
- [chalk](https://www.npmjs.com/package/chalk): Biblioteca para estilização de texto no console.
- [node-fetch](https://www.npmjs.com/package/node-fetch): Biblioteca para realizar requisições HTTP no Node.js.

## Autor

Alura

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).

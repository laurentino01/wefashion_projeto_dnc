



![We Fashion](https://github.com/laurentino01/wefashion_projeto_dnc/assets/81561554/7dfa73ee-0809-4b72-99a2-63abc97380c3)





# We Fashion - Escola de moda.
Site
 da escola de moda We Fashion para o projeto prático da DNC.

Documentação feita para o grupo trabalhar com mais organização e padronização do site. 

Foi desenvolvido uma espécie de framework para este projeto visando a organização do desenvolvimento. Layout, Variáveis, Organização dos arquivos... Tudo esta explicado nesta documentação. 

## Referência
- [Link](https://github.com/laurentino01/wefashion_projeto_dnc#link)
- [Protótipo](https://github.com/laurentino01/wefashion_projeto_dnc#prot%C3%B3tipo)
 - [Getting Started](https://github.com/laurentino01/wefashion_projeto_dnc#getting-started)
    - [Iniciando](https://github.com/laurentino01/wefashion_projeto_dnc#iniciando)
    - [Trabalhando](https://github.com/laurentino01/wefashion_projeto_dnc#trabalhando)
    - [Entregando](https://github.com/laurentino01/wefashion_projeto_dnc#entregando)

 - [Layout](https://github.com/laurentino01/wefashion_projeto_dnc#layout)
 - [Variáveis](https://github.com/laurentino01/wefashion_projeto_dnc#vari%C3%A1veis)
    - [Textos](https://github.com/laurentino01/wefashion_projeto_dnc#textos)
    - [Cores](https://github.com/laurentino01/wefashion_projeto_dnc#cores)
    - [Espaçamentos](https://github.com/laurentino01/wefashion_projeto_dnc#espa%C3%A7amentos)
 - [Componentes](https://github.com/laurentino01/wefashion_projeto_dnc#componentes)
    - [Botões](https://github.com/laurentino01/wefashion_projeto_dnc#bot%C3%B5es)
 - [Tecnologias utilizadas](https://github.com/laurentino01/wefashion_projeto_dnc#Link)
      


## Link
https://projetowefashiontech04.netlify.app/
  
## Protótipo
### Desktop 
https://www.figma.com/proto/5oUUlDi04SgjwEoyDDrAPB/We-fashion?type=design&node-id=72-530&t=dMgHxdeE2Ab4PjBt-1&scaling=scale-down-width&page-id=72%3A2&mode=design

### Mobile 
https://www.figma.com/proto/5oUUlDi04SgjwEoyDDrAPB/We-fashion?type=design&node-id=72-735&t=QMBg6bntWodbacPj-1&scaling=min-zoom&page-id=72%3A725&mode=design

## Getting Started
Neta seção você encontrará a explicação de como inciar, trabalhar e como fazer a pull request de forma que mantenha a organização. 


### iniciando
Passo a passo para iniciar o projeto
 1. Faça um fork deste projeto
 2. Crie uma nova branch. Essa branch deve ter o nome da seção ou funcionalidade que irá ser trabalhado.
 3. Fique atento para que essa funcionalidade ou seção já não esteja sendo trabalhada.


### trabalhando
 1. No arquivo `index.hmtl` há marcações das seções. Trabalhe apenas na que se propôs a trabalhar.
 2. Na pasta `css` no arquivo `index.css` há configurações gerais que vão alterar todo estilo do projeto como: Configurações gerai, imports, layout, variaveis e os componentes. Caso haja necessidade de alterar algo é necessário avisar o grupo.
 3. Neste mesmo arquivo `index.css` na pasta `css` há as importações dos estilos de todas as outras seções, caso não haja, deve ser importado. Este arquivo está linkado com o `index.html` e apenas importanto outras partes para o index.css já será aplicado o estilo.
 4. No arquivo Javascript Cada função deve ser feita em um arquivo, ou seja, um arquivo por função e adicionada no `<head>` com a tag script colocando o atributo `defer`
 5. Nomes de funções, classes, arquivos e pastas devem ser em inglês.
 6. Funções, pastas e arquivos deverão ser no formato Camel Case.
 7. Classes, devem ser nomeadas utilizando o padrão BEM.
### entregando
 1. Deve ser criado uma pull request com o código funcionando em seu computador.
 2. Suas alterações deveram estar todas contidas na branch criada e não na branch main.

    
## Layout
Para manter o design e alinhamento do site, foi criado 3 classes para auxiliar na criação do layout. 
São elas `.container`,`.row`,`.col`

A classe `.col` é destinada aos items das seções, ele se ajusta ao espaço da seção e tem comportamento responsivo.

`.col{ flex-grow: 1; }`

A classe `.row` controla as cols e deve ser destinada às seções ex: sobre nos, hero... 

`.row{  border: 1px solid red;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 12px;
  width: 100%; }`

  A classe `.container` ja esta configurada, deve ficar em um conjunto de seções, ela mantem o espaçamento lateral e alinhamento, além de ter uma  largura maxima. 

  `.container{ max-width: 1334px;
  padding-left: var(--paddingX);
  padding-right: var(--paddingX);
  margin: 0 auto; }`

  


## Variáveis
As variáveis vão auxiliar na padronização do design. nos textos e espaçamentos esta sendo usado o atributo `clamp()` para que o design fique fluído e haja pouca ou nenhuma utilização de media query.  

!! Caso haja necessidade de media query, utilizar os padrões do google: 1440px, 1024px, 768px, 425px, 375px, 320px  !!
### Textos
`
--title: "";
  --subtitle: "";
  --paragraph: "";`
### Cores
`--primary-color: "";
  --secondary-color: "";
  --dark: " ";
  --light: " ";
`
### Espaçamentos
`
  --paddingX: clamp(0.5rem, -0.0714rem + 2.8571vw, 2.5rem);
  --paddingY: "";
  --marginX: "";
  --marginY: "";
  --gap: "";`

## Componentes
### Botões

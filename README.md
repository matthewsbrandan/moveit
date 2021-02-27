# MOVE.IT

Projeto baseado na ideia de Pomodoros. A cada 25 minutos te incentiva a fazer uma pausa e praticar algum tipo de exercício, aquecimento ou alongamento, para voltar com total foco após essa breve pausa. 

[APP](https://moveit-matthewsbrandan.vercel.app/)

## NEXT.JS

Ele é considerado um framework encima do React.
- *SPA*(Single Page Application): Reutilização de código, não muda a página, apenas o conteúdo.
- *SSR*(Server Side Rendering): O Next é uma camada intermediária entre o backend e o frontend, e ajuda a resolver o problema que o React tem com SEO(Search Engine Optimization), pois algumas vezes os buscadores(Google, Bing,etc) desativam o JS das páginas quando estão lendo, e o Next.js, através do Node(Que consegue interpretar JS), contorna esse problema.
- *SSG*(Static Side Generator): Gera uma página estática com HTML+CSS+JS puro para que não haja a necessidade de ficar fazendo várias chamada da mesma coisa no banco. É geralmente utilizado em blogs ou páginas de noticia, que tem um grande alcance de público e apresenta o mesmo objeto.

## FORMAS DE GERAR UM APP REACT

- *create-react-app*: Não tem suporte ao SSR e SSG.
- *Gatsby*: É muito para o caso de SSG.
- *Next.js*: Junto todas as 3 funcionalidades na mesma aplicação.

## INSTALADO TYPESCRIPT

yarn add typescript @types/react @types/react-dom @types/node -D

### INSTRUÇÕES

- Para rodar aplicação, execute o comando *yarn dev*
- Tudo que irá repetir em várias páginas fica em _app.

- Para importações que fariamos no head em um html normal podemos importar o component Head do next e utilizá-lo como um componente normal, dessa forma:
    - import Head from 'next/head'
- Outra forma é criando uma página _document, para ser o mais próximo possível de um Html comum. Para funcionar deve seguir os seguintes padrões.
    - import Document, { Html, Head, Main, NextScript } from 'next/document';
    - export default class MyDocument extends Document {
        - render(){
            - return(
                - < Html >
                    - < Head ></ Head >
                    - < Main /> (Que chamará a aplicação)
                    - < NextScript /> (Scripts do Next)
                - </ Html >
    - ... fechamentos de () e {}
- O arquivo _document é executado apenas uma vez, por isso vale apena utilizá-lo para carregamento de componentes que serão estáticos na página. Apesar do _app ser reaproveitado, ele é recalculado para ver se houve alteração, ou seja, gera um processamento a mais.

### CSS MODULES

- Funciona para que o CSS se torne exclusivo do elemento, não influenciando assim outros componentes.
- Para utilizá-lo coloque antes da extensão '.module', assim como no exemplo.
    - style.module.css
- Outros pontos é que é recomendado utilizar o camelcase ao invés de '-', e ao invés de passar uma string no no className, passamos um objeto JS, semelhante ao que é feito no ReactNative.

### CONTEXTO NO REACT

- Serve para compartilhar informações entre mais componentes na aplicação. Sintaxe:
    - import { createContext } from 'react';
    - export const ChallengesContext = createContext({});
- Sua utilização é igual á um componente normal, para incluir seus componentes neste contexto, basta envolver os outros componentes com a sua tag utilizando '.provider'.
    - < ChallengesContext.Provider > ...demais componentes... </ ChallengesContext.Provider >
- Para pegar os dados usamos a função useContext() importado do react:
    - import {useContext} from 'react';
    - const contextData = useContext(ChallengesContext);

### COOKIE
- Para utilizá-lo temos uma biblioteca chamada js-cookie. Execute os comandos a seguir para importá-la ao seu projeto:
    - yarn add js-cookie
    - yarn add @types/js-cookie -D

- *LocalStorage*: Só tem como armazenar dados com chave e valor, não é possível armazenar objetos, a não ser que sejam convertidos em texto.
- *SessionStorage*: É semelhante ao LocalStorage, porém ele é perdido na seção, com um Session PHP.
- *IndexedDB*: É um banco de dados mais completo.
- *WebSQL*: É semelhante ao SQLite, porém não são todos os browsers que tem suporte para ele. 
- *Cookie*: É semelhante ao LocalStorage, porém temos algumas funções a mais.
    - Conseguimos usar ele em mais de um dominio
    - Conseguimos dizer data de expiração
    - Conseguimos definir se ele pode ser acessado só pelo backend(Na camada HTTP), ou se o front também tem acesso
    - Conseguimos fazê-lo funcionar apenas se o site tiver SSL

### getServerSideProps
- Essa função executa o Next na camada backend, é ideal para fazer requisições a APIs, ou outros serviços, quando você deseja que as informações sejam carregadas antes da aplicação carregar no Browser. Isso é fundamental para que buscadores vejam seu conteúdo(SEO), porque eles não costumam esperar a resposta de requisições frontend.
- Essa função só pode ser aplicada em páginas, não componentes, pois os componentes são executados na camada front.

### DEPLOY
- *Netlify* | *Vercel*

#### FEATURES
- Melhorar a Documentação (Como rodar na máquina, Print de Telas e Lista de Funcionalidades)
- Configurar vercel para fazer o deploy junto com o push do github: https://vercel.com/docs/git
- Fazer a versão 2.0 do figma
- Logar com github: pesquisar oauth github
- Pesquisar sobre 'Serverless com React.js e Next.js na Vercel'(RocketSeat)
- Fazer funcionalidade de postar no twitter
- Fazer rancking
- Gerar um PWA

#### BUGS
- Erro inesperado na versão mobile

#missioncomplete
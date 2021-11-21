### HTTP

Antes de falarmos mais sobre APIs HTTP, vamos relembrar os principais conceitos sobre esse protocolo e entender quais informações podemos enviar ou receber quando estivermos falando com um servidor HTTP.
Vamos relembrar o que compõe uma requisição HTTP. Para isso, analisaremos a requisição que é feita pelo navegador quando abrimos a página https://developer.mozilla.org .
Copiar
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html
Vejamos quais são as informações presentes nessa requisição:
O método HTTP, definido por um verbo em inglês. Nesse caso, utilizamos o GET , que normalmente é utilizado para "buscar" algo do servidor, e é também o método padrão executado por navegadores quando acessamos uma URL. Veremos mais sobre verbos HTTP em breve.
O caminho, no servidor, do recurso que estamos tentando acessar. Nesse caso, o caminho é / , pois estamos acessando a página inicial.
A versão do protocolo (1.1 é a versão nesse exemplo).
O local (host) onde está o recurso que se está tentando acessar, ou seja, a URL ou o endereço IP servidor. Nesse caso, utilizamos developer.mozilla.org , mas poderia ser localhost:3000 , caso você esteja trabalhando localmente.
Os headers . São informações adicionais a respeito de uma requisição ou de uma resposta. Eles podem ser enviados do cliente para o servidor, ou vice-versa. Na requisição de exemplo, temos o header Host , que informa o endereço do servidor, e o header Accept , que informa o tipo de resposta que esperamos do servidor. Um outro exemplo bem comum são os tokens de autenticação, em que o cliente informa ao servidor quem está tentando acessar aquele recurso: Authorization: Bearer {token-aqui} . Alguns exemplos extras de headers podem ser vistos aqui. .
Esses são os dados transmitidos em uma request do tipo GET . No entanto, o GET não é o único método HTTP existente. Na verdade, existem 39 métodos diferentes! Os mais comuns são cinco: GET , PUT , POST , DELETE e PATCH , além do método OPTIONS , utilizado por clientes para entender como deve ser realizada a comunicação com o servidor.
A principal diferença entre os métodos é o seu significado. Cada método costuma dizer para o servidor que uma operação diferente deve ser executada. O método POST , por exemplo, costuma ser utilizado para criar um determinado recurso naquele servidor.
Além da diferença de significado, requisições do tipo POST , PUT e PATCH carregam mais uma informação para o servidor: o corpo, ou body . É no corpo da requisição que as informações de um formulário, por exemplo, são transmitidas.
Quando um servidor recebe uma requisição, ele envia de volta uma resposta . Veja um exemplo:
Copiar
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)
A composição da resposta é definida por:
A versão do protocolo (1.1 no nosso exemplo).
O código do status, que diz se a requisição foi um sucesso ou não (nesse caso, deu certo, pois recebemos um código 200 ), acompanhado de uma pequena mensagem descritiva ( OK , nesse caso).
Os Headers , no mesmo esquema da requisição. No caso do exemplo acima, o Content-Type diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página.
Um body , que é opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo.
Após a resposta, a conexão com o servidor é fechada ou guardada para futuras requisições (seu navegador faz essa parte por você).
Note que tanto requisições quanto respostas podem ter headers e um body. No entanto, é importante não confundir uma coisa com a outra: o body e os headers da requisição representam a informação que o cliente está enviando para o servidor . Por outro lado, o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente .

### Códigos de status de respostas HTTP

Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:

1 - Respostas de informação (100-199),
2 - Respostas de sucesso (200-299),
3 - Redirecionamentos (300-399)
4 - Erros do cliente (400-499)
5 - Erros do servidor (500-599).

  6. Response Status Codes ..........................................47
      6.1. Overview of Status Codes ..................................48
      6.2. Informational 1xx .........................................50
           6.2.1. 100 Continue .......................................50
           6.2.2. 101 Switching Protocols ............................50
      6.3. Successful 2xx ............................................51
           6.3.1. 200 OK .............................................51
           6.3.2. 201 Created ........................................52
           6.3.3. 202 Accepted .......................................52
           6.3.4. 203 Non-Authoritative Information ..................52
           6.3.5. 204 No Content .....................................53
           6.3.6. 205 Reset Content ..................................53
      6.4. Redirection 3xx ...........................................54
           6.4.1. 300 Multiple Choices ...............................55
           6.4.2. 301 Moved Permanently ..............................56
           6.4.3. 302 Found ..........................................56
           6.4.4. 303 See Other ......................................57
           6.4.5. 305 Use Proxy ......................................58
           6.4.6. 306 (Unused) .......................................58
           6.4.7. 307 Temporary Redirect .............................58
      6.5. Client Error 4xx ..........................................58
           6.5.1. 400 Bad Request ....................................58
           6.5.2. 402 Payment Required ...............................59
           6.5.3. 403 Forbidden ......................................59
           6.5.4. 404 Not Found ......................................59
           6.5.5. 405 Method Not Allowed .............................59
           6.5.6. 406 Not Acceptable .................................60
           6.5.7. 408 Request Timeout ................................60
           6.5.8. 409 Conflict .......................................60
           6.5.9. 410 Gone ...........................................60
           6.5.10. 411 Length Required ...............................61
           6.5.11. 413 Payload Too Large .............................61
           6.5.12. 414 URI Too Long ..................................61
           6.5.13. 415 Unsupported Media Type ........................62
           6.5.14. 417 Expectation Failed ............................62
           6.5.15. 426 Upgrade Required ..............................62
      6.6. Server Error 5xx ..........................................62
           6.6.1. 500 Internal Server Error ..........................63
           6.6.2. 501 Not Implemented ................................63
           6.6.3. 502 Bad Gateway ....................................63
           6.6.4. 503 Service Unavailable ............................63
           6.6.5. 504 Gateway Timeout ................................63
           6.6.6. 505 HTTP Version Not Supported .....................64

### API
API é uma sigla para `A`pplication `P`rogramming `I`interface. ou seja , interface de programação de aplicação. isso que dizer que uma api é , basicamente, qualquer coisa que permita a comuunicação, de forma programatica, com uma determinada aplicação.
Um tipo muito comum  de API sao as APIs HTTP, que permitem que código se comuniquem com aplicações através de requisições HTTP. È desse tipo de API que boa parte da web é feita

Elas são extramamente importante nos dias de hoje , em que temos multiplos clients(web, apps mobile, tvs, smartwatches etc) se comunicando com o mesmo servidor! È assim que a nestflix esta sempre sincronizada entre seu celular e seu computador e sua televisão
nos projetos de front-end, voĉe integrou varias APIs com suas aplicações.

### Contextualizando

A partir de agora, você irá criar APIs, que vão receber requisições e devolver dados , passando por validações , regras de negócio , acesso ao banco de dados , etc.
Se compararmos uma aplicação web a um restaurante, o Front-End é a área das mesas , garçons e garçonetes: é onde a comunicação direta com clientes acontece, onde os pedidos são anotados, e também a parte que leva as receitas da cozinha até a mesa das pessoas.
O Back-End, por sua vez, é cozinha . É onde uma pessoa cozinheira, mediante o recebimento de um pedido, vai preparar os ingredientes , montar a receita e devolvê-lo para que uma pessoa atendente apresente esse prato a quem o pediu . É no Back-End que os dados serão filtrados , manipulados e preparados para envio ao Front-end. Esse, por sua vez, se encarrega de apresentá-los a quem fez o pedido.
Ainda na analogia da cozinha, uma API seria o quadro de pedidos que os setores de "Cozinha" e "Atendimento" usam para se comunicar:
Quando o client envia uma requisição para o Back-End , é como se uma pessoa atendente anotasse o pedido em um papel e o colocasse no balcão para ser preparado pela cozinha .
Quando o servidor envia a resposta para a requisição do client , ele mostra essas informações ao usuário via Front-End. É como se a cozinha entregasse o prato que foi pedido para que o atendente o leve para a mesa da pessoa cliente.
Pra ilustrar, a coisa toda funciona como a imagem abaixo:

Imagem que demonstra o panorama de uma aplicação web
Daqui pra frente, vamos focar nos conceitos e na construção das APIs, visto que uma API bem feita, assim como um quadro de pedidos bem organizado, pode ser a chave para uma aplicação (ou um restaurante) bem sucedida. 🧑‍🍳💻

## Express
O express é um framework Node.js criado para facilitar a criação de APIs HTTP com node. Ele nos fornece uma serie de recursos e abstração que facilitam a vida na hora  de decidir quais requisiçoes tratar, como tratalas, quais regras de negocio aplicar afins

O Frameork foi construido pensando em um padrao de contrução de APis Chamado de Rest, que você vai estudar mais a frente. Seu objetivo é nos ajudar a contruir APIs de forma mais facil, essencialmente nos permitindo criar Apis altamente funcionais com metade do trabalho  que teriamos para fazer isso na mão

existe outras ferramentas semelhantes no mercado, mas o Express é largamente adotado na comunidade hoje, e dois so motivos sâo:
- ele foi lançado no final de 2010, ou seja é um framework maduro e testadoi em batalha
- ele é um "unopinionated frameork"(frameorwk sem opinião). isso significa que ele não impões um padrão de desenvolvimento na hora de escrever o codigo

Hoje, o Express faz parte da Node.js Foundation . Isso demonstra o quão relevante ele é para a comunidade.
### exemplo em express

const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}

## Cabeçalhos HTTP

Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome case-insensitive (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha).  Espaços em branco antes do valor serão ignorados.
Cabeçalhos proprietários personalizados podem ser adicionados usando o prefixo 'X-', mas essa convenção foi descontinuada em Junho de 2012, devido aos inconvenientes que causou quando os campos não-padronizados tornaram-se padronizados na RFC 6648; outros estão listados em um registro IANA, cujo o conteúdo original foi definido na RFC 4229. O IANA também mantém o registro das propostas de novas mensagens de cabeçalhos HTTP.
[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers]

## Uma visão geral do HTTP
HTTP é um protocolo (protocol) que permite a obtenção de recursos, como documentos HTML. É a base de qualquer troca de dados na Web e um protocolo cliente-servidor, o que significa que as requisições são iniciadas pelo destinatário, geralmente um navegador da Web. Um documento completo é reconstruído a partir dos diferentes sub-documentos obtidos, como por exemplo texto, descrição do layout, imagens, vídeos, scripts e muito mais.

Clientes e servidores se comunicam trocando mensagens individuais (ao contrário de um fluxo de dados). As mensagens enviadas pelo cliente, geralmente um navegador da Web, são chamadas de solicitações (requests), ou também requisições, e as mensagens enviadas pelo servidor como resposta são chamadas de respostas (responses).
Projetado no início da década de 1990, o protocolo HTTP é extensível e evoluiu ao longo do tempo. Atua na camada de aplicação e é enviado sobre o protocoloTCP, ou em uma conexão TCP criptografada com TLS, embora qualquer protocolo de transporte confiável possa, teoricamente, ser usado. Devido à sua extensibilidade, ele é usado não só para buscar documentos de hipertexto, mas também imagens e vídeos ou publicar conteúdo em servidores, como nos resultados de formulário HTML (veja os elementos <html> e <form>). O HTTP também pode ser usado para buscar partes de documentos para atualizar páginas da Web sob demanda.

### Componentes de sistemas baseados em HTTP
[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview]

### Cookies HTTP
Um cookie HTTP (um cookie web ou cookie de navegador) é um pequeno fragmento de dados que um servidor envia para o navegador do usuário. O navegador pode armazenar estes dados e enviá-los de volta na próxima requisição para o mesmo servidor. Normalmente é utilizado para identificar se duas requisições vieram do mesmo navegador — ao manter um usuário logado, por exemplo. Ele guarda informações dinâmicas para o protocolo HTTP sem estado.

Cookies são usados principalmente para três propósitos:

Gerenciamento de sessão
Logins, carrinhos de compra, placar de jogos ou qualquer outra atividade que deva ser guardada por um servidor.
Personalização
Preferências de usuário, temas e outras configurações.
Rastreamento
Registro e análise do comportamento de um usuário.

Os cookies eram usados para armazenamento geral no lado do cliente. Embora isso fosse aceitável quando eram a única forma de armazenar dados no cliente, atualmente é recomendável utilizar APIs de armazenamento mais modernas. Os cookies são enviados em todas as requisições, por isso podem prejudicar a performance (especialmente em conexões móveis).  APIs modernas de armazenamento no cliente são Web storage API (localStorage e sessionStorage) e IndexedDB.

### Criando cookies
Ao receber uma requisição HTTP, um servidor pode enviar um cabeçalho Set-Cookie com a resposta. O  cookie normalmente é armazenado pelo navegador, então o cookie é enviado  com as requisições feitas para o mesmo servidor dentro  do cabeçalho HTTP Cookie. Uma data de expiração ou duração pode ser especificada, e após esta data o cookie não é mais enviado. Adicionalmente, restrições para um domínio específico e caminho podem ser configuradas, limitando para onde o cookie é enviado.

### Os cabeçalhos Set-Cookie e Cookie
O cabeçalho HTTP de resposta Set-Cookie envia cookies do servidor para o cliente. Um cookie simples é configurado da seguinte forma:

Set-Cookie: <cookie-name>=<cookie-value>
Este cabeçalho de servidor informa ao cliente para armazenar um cookie.

[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies]
[http://expressjs.com/en/resources/middleware/cookie-session.html]


## construir uma API: o REST RESTful
Antes de começarmos, vamos entender a diferença entre REST e RESTful: RESTful é, basicamente, um web service que segue as regras definidas pelo padrão REST.

Pronto, agora vamos à definição formal:
Representational State Transfer (REST), em português Transferência de Estado Representacional, é um estilo de arquitetura de software, controlado pelo W3C , que define um conjunto de restrições a serem usadas para a criação de APIs.
Uma maneira interessante de explicar é a seguinte:
Imagine que você está em um jantar. Existem algumas coisas que você deveria fazer, como:
Comer com a boca fechada;
Não colocar os cotovelos na mesa;
Usar os talheres corretamente;
Não arrotar.

O REST deve ser visto da mesma forma: um conjunto de boas práticas. Quando você está construindo uma API, existem algumas normas que você deve seguir para ser "educado" (RESTful).
Para o REST, uma aplicação é um conjunto de recursos que podem ter seu estado representado de alguma forma. Ao consumir esses recursos, você está transferindo as informações sobre esse estado para o cliente (uma requisição GET , por exemplo) ou fazendo uma alteração nele (um POST , PUT ou DELETE ). Daí o nome Transferência de Estado Representacional , ou seja, estamos transferindo uma representação do estado de algum recurso.

Mas o que é um Recurso, afinal?
Um recurso, em REST, é uma abstração da informação. Dito isso, qualquer coisa que possa ser nomeada pode ser um recurso. Por exemplo:
Usuários;
Produtos;
Compras;
Etc.
Todos os exemplos acima podem ser considerados recursos.
No universo de Star Wars existem vários planetas. Na SWAPI , podemos chamar um endpoint para listar todos os planetas ou apenas um. Nesse caso, um planeta é um recurso , e planetas é uma coleção de recursos .

## As 6 restrições para ser RESTful
A arquitetura REST define seis restrições, chamadas constraints , que devem ser respeitadas para que sua API seja RESTful .
 1 -  Interface uniforme ( Uniform Interface )
 A interface de comunicação entre seu servidor e seu cliente deve ser definida e seguida à risca, através de um padrão, para que ela se mantenha consistente. Dessa forma, essa "constraint", se seguida à risca, simplifica e desacopla a sua arquitetura.
Essa interface inclui o endpoint , o tipo de retorno e o uso dos verbos HTTP .

O recurso a ser acessado/alterado deve ser identificado pelo endpoint da requisição. Exemplo: https://swapi.dev/api/planets/:id . Nessa URL, vemos que o recurso que queremos acessar, planet , é facilmente identificado.
Usar plural ou singular? Não importa. O importante é manter o padrão.

Tipo do retorno
Talvez você já tenha visto um header chamado Content-type nas respostas de requisições. Ele serve para dizer, para o nosso cliente, que tipo de conteúdo estamos retornando.
Se estamos retornando um JSON, enviamos o header como Content-type: application/json . Se fosse HTML, seria Content-type: text/html , e por aí vai.
Alguns formatos comuns são JSON , XML e JavaScript .

Esse tópico é, literalmente, sobre manter esses retornos consistentes. Se o cliente pede ou envia informação no formato JSON, você deve processar e retornar mantendo o formato JSON. Se um erro em um endpoint retorna os campos code , error e message , todos os erros devem retornar, pelo menos, esses campos. Se uma requisição ao endpoint de uma coleção ( GET /posts , por exemplo), retorna um Array, todos os endpoints de coleção devem retornar Arrays. Se, por exemplo, quando realizamos uma requisição GET /products , recebemos um array de produtos, ao realizar a requisição GET /sales , não devemos receber um JSON no formato { "sales": [{ ... }] } , já que esse comportamento é inconsistente com o do endpoint GET /products .
Dessa forma, ao consumir um endpoint da sua API, é possível até mesmo deduzir o comportamento dos demais endpoints, dispensando "tentativa e erro".

A ação que vamos realizar no recurso deve ser identificada pelo verbo HTTP da requisição. Para o REST, os principais verbos HTTP são POST , GET , PUT e DELETE , e cada um realiza uma ação, dependendo se for enviado para o endpoint de um recurso ou de uma coleção .

Respostas
Respostas são sempre obrigatórias. Nunca deixe seu cliente sem resposta, mesmo que ela não tenha um corpo.
Existem boas práticas em relação aos status code que nosso servidor envia como resposta. Temos uma variedade de códigos que devemos utilizar em situações específicas:
1xx: Informação;
2xx: Sucesso;
3xx: Redirecionamento;
4xx: Erro do cliente;
5xx: Erro no servidor.

### 2 - Arquitetura cliente-servidor
vocẽ ja ouviu falar muito arquitetura  clientw servidor, nao é ? De  termos uma  API e um cliente desacoplado? è exatamente exemplo
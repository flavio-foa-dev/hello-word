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
API é uma sigla para `A`pplication `P`rogramming `I`interface. ou seja , interface de programação de aplicação. isso que dizer que uma apié, basicamente, qualquer coisa que permita a comuunicação, de forma programatica, com uma determinada aplicação.
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

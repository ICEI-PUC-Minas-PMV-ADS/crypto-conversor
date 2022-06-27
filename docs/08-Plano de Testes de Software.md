# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
*	Site publicado na Internet
*	Navegador da Internet - Chrome, Firefox ou Edge
*	Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|     Caso de teste      | CT-01 – Acessar serviços       |
|:----------------------:|:---------------------------------------------------------------|
| Requisitos Associados	 | RF-01 - O site terá uma página em que será possível acessar os serviços disponíveis, quais sejam: conversão, cálculo de carteira e monitoramento de mercado.       |
|   Objetivo do Teste    | 	Verificar se a página está direcionando o usuário para os serviços corretos.        |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar a URL  https://icei-puc-minas-pmv-ads.github.io/crypto-conversor/ <br> 3) Visualizar a página principal <br> 4) Clicar em cada um dos links dos serviços disponíveis         |
|   Critérios de Êxito   | 	Ao clicar no link o usuário deve ser direcionado para a página correta. 
 
 
|     Caso de teste      | CT-02 – Utilização do formulário de contato           |
|         :---:          | :---             |
| Requisitos Associados	 | RF-04 - O site terá uma página em que será possível acessar um formulário de contato de modo que o usuário poderá enviar dúvidas, sugestões ou críticas aos desenvolvedores do projeto.    |
|   Objetivo do Teste    | 	Verificar se  o fomulário de contato funciona de modo adequado.         |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar a URL  https://icei-puc-minas-pmv-ads.github.io/crypto-conversor/ e clicar no menu "Contato" <br> 3) Visualizar a página de contato - contact.html <br> 4) Preencher os campos presentes no formulário de contato, e, após a inserção dos dados, clicar no botão de envio ao final do formulário com a seguinte descrição: "ENVIAR A MINHA MENSAGEM" - Os campos presentes no formulário de contato são de preenchimento obrigatório, salvo o número de telefone. |
| Critérios de Êxito |	Após o preenchimento dos campos obrigatórios, ao clicar no botão de envio, não deverá nenhum tipo de mensagem alertando que os campos não foram preenchidos adequadamente.


|     Caso de teste      | CT-03 – Acessar cotações das criptomoedas  selecionadas   |
|         :---:          | :---      |
| Requisitos Associados	 | RF-03 - O site terá uma página em que será possível companhar a cotação de algumas criptomoedas selecionadas.                                                                                                                           |
|   Objetivo do Teste    | 	Verificar se as cotações estão sendo exibidas corretamente e atualizadas.                                                                                                                                                                                                                                                    |
|        Passos	         | 1) Acessar o Navegador <br> 2) Informar o endereço do Site <br> 3) Acessar a página de cotações por meio do link na seção de serviços <br> 4) Verificar se as cotações estão sendo exibidas corretamente e atualizadas. |
| Critérios de Êxito |	Após acesso no link, as cotações foram exibidas corretamente e estão atualizadas.




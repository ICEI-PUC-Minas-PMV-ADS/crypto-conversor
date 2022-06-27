# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

<p align="justify"> <b>Resultado do teste de êxito - RF-04:</b></p>
<p align="justify"> A imagem a seguir demonstra o resultado do teste deste requisito, sendo que o usuário inseriu os seus dados no formulário de contato e o sistema não retornou nenhum alerta de erro, o que demonstra o sucesso no envio da mensagem:</p>

<img width="500" alt="imagem_contato_testes" src="https://user-images.githubusercontent.com/103080346/173123471-8a5e2695-fcc5-4c69-83cb-f6366c320b68.png">

<p align="justify"> <b>Conclusão - RF-04:</b></p>
<p align="justify"> A obrigatoriedade do atributo <i>required</i> no formulário de contato se mostra muito importante, pois, faz com que o usuário preencha corretamente os dados lá contidos, o que evita o envio de <i>spam</i> e mensagens com conteúdo fragmentado ou insuficiente, bem como possibilita o retorno ao contato do usuário de forma mais otimizada.</p>
<p align="justify"> Futuramente, e, em momento oportuno, com o uso de <i>scripts</i> mais elaborados em dada linguagem de programação, a equipe de desenvolvimento pretende aprimorar os testes de confirmação de e-mail via formulário.</p>

<hr>

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

# Testes da Página de Conversão

## Sucessos

### Usuário converte valor de uma criptomoeda em uma moeda fiduciária

O valor convertido em tempo real aparece graças à API utilizada

![semCriptoSessão1](img/Testes/Conversor/Sucesso%20Cripto%20para%20Moeda.png)

### Usuário inverte as seleções para fazer a conversão oposta

Os selects têm os valores invertidos e a parte de criptomoedas passa a ser a parte de moedas e vice-versa

![semCriptoSessão1](img/Testes/Conversor/Bot%C3%A3o%20Invers%C3%A3o.png)

### Após a inversão, usuário converte valor de uma moeda fiduciária em uma criptomoeda

Mesmo após a inversão dos valores, a funcionalidade do projeto ainda se comporta da maneira correta

![semCriptoSessão1](img/Testes/Conversor/Sucesso%20Moeda%20para%20Cripto.png)

## Erros

### Usuário não escolhe uma criptomoeda para a conversão

Na sessão de resultados aparece a mensagem "Selecione uma criptomoeda":

#### Normal (Criptomoeda para Moeda Fiduciária)

![semCriptoSessão1](img/Testes/Conversor/semCripto-primeiraSess%C3%A3o.png)

#### Invertido (Moeda Fiduciária para Criptomoeda)

![semCriptoSessão2](img/Testes/Conversor/semCripto%20-%20segunda%20sess%C3%A3o.png)

### Usuário não escolhe uma moeda fiduciária para a conversão

Na sessão de resultados aparece a mensagem "Selecione uma moeda fiduciária":

#### Normal (Criptomoeda para Moeda Fiduciária)

![semMoedaSessão1](img/Testes/Conversor/semMoeda-primeiraSess%C3%A3o.png)

#### Invertido (Moeda Fiduciária para Criptomoeda)

![semMoedaSessão2](img/Testes/Conversor/semMoeda-segundaSess%C3%A3o.png)

### Usuário não escolhe nem uma moeda fiduciária nem uma criptomoeda

Na sessão de resultados aparece a mensagem "Escolha o tipo de conversão":

#### Normal (Criptomoeda para Moeda Fiduciária)

![semEscolhaSessão1](img/Testes/Conversor/semEscolha-primeiraSess%C3%A3o.png)

#### Invertido (Moeda Fiduciária para Criptomoeda)

![semEscolhaSessão2](img/Testes/Conversor/semEscolha-segundaSess%C3%A3o.png)

### Usuário não insere um valor a ser convertido ou digita '0'

Na sessão de resultados aparece a mensagem "Digite um valor!":

#### Normal (Criptomoeda para Moeda Fiduciária)

![semValorSessão1](img/Testes/Conversor/semValor-primeiraSess%C3%A3o.png)

#### Invertido (Moeda Fiduciária para Criptomoeda)

![semEscolhaSessão1](img/Testes/Conversor/semValor-segundaSess%C3%A3o.png)

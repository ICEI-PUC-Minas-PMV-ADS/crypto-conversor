# Programação de Funcionalidades

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

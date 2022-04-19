
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A aplicação será desenvolvida com base no protocolo HTTP, utilizando a linguagem de marcação HTML5 com formatação em CSS. A programação da aplicação será feita em javascrip com a utilização da ferramenta Visual Studio Code. Todo o versionamento do projeto será feito via Git com repositório GitHub. Quanto ao método de gestão, será utilizada a metodologia ágil SCRUM.

<b>Relação de Ambientes de Trabalho</b></br>

Os artefatos do projeto são elaborados a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada conforme a tabela a seguir:

Ambiente                                 | Plataforma  |  Link de Acesso
-----------------------------------------|-------------|---------------------------------------------------------------
 Repositório de código fonte             |  GitHub     |  https://github.com/ICEI-PUC-Minas-PMV-ADS/crypto-conversor   
 Documentos do projeto                   |             |
 Projeto de Interface e  Wireframes      |  Figma      |  https://www.figma.com/file/SIyHLd7Ac93NYTJUTCdpuw/Crypto-Project?node-id=0%3A1
 Gerenciamento do Projeto                |  Trello     |  https://trello.com/b/OgaaFkog/projeto-cripto </br> https://github.com/ICEI-PUC-Minas-PMV-ADS/crypto-conversor/projects
      
                       
## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software;
- `unstable`: versão já testada do software, porém instável;
- `testing`: versão em testes do software;
- `dev`: versão de desenvolvimento do software.

A *branch* **main** será utilizada para versões que estão prontas para produção. Ela será replicada na *branch* **dev**, que conterá versões em desenvolvimento e ainda passíveis de teste. A *branch* **teste** será usada para a realização de testes nos código para preparaçao para produção. Caso problemas sejam identificados, as correções serão isoladas na *branch* **unstable** de modo a estabilizar a versão que entrará em produção.

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação;
- `bug`: uma funcionalidade encontra-se com problemas;
- `enhancement`: uma funcionalidade precisa ser melhorada;
- `feature`: uma nova funcionalidade precisa ser introduzida.

## Gerenciamento de Projeto

Conforme citado, a equipe utilizará a metodologia *scrum*, de modo que haverá esforços concentrados e incrementais divididos em *sprints* que durarão, como regra, 2 semanas.

A equipe está organizada da seguinte forma:

* *Scrum master*: Aaron Duarte Dalla
* *Product owner*: Iago José Silva Ferreira
* Equipe de desenvolvimento
    * Gabriel Miranda Cangussu
    * Matheus Henique Rodrigues
    * Thiago Costa Prates
* Equipe de *design*:
    * Tafarel Luis de Mello
    * Renan Costa Cunha

A metodologia *scrum* foi conjugada com o método *kanban* de forma a tornar visual a distribuição de tarefas, o que está sendo feito por meio da ferramenta *projects* do *github*. As raias existentes são:

* *Backlog*: contém as tarefas identificadas e necessárias para a criação do produto;
* *To do*: contém as tarefas que serão incluídas na *sprint*;
* *In progress*: contém as tarefas que foram iniciadas e estão em desenvolvimento;
* *Test*: contém as tarefas que foram concluídas e serão checadas, de forma a se controlar a qualidade do desenvolvimento;
* *Done*: contém as tarefas que foram concluídas e testadas;
* *Locked*: nesta coluna são colocadas tarefas que foram paralisadas em razão de algum motivo impeditivo que precisa de solução.



### Ferramentas

**Editores de Código:**

> - [Github](https://github.com/): Ferramenta utilizada tanto como editor de código quanto como ferramenta de organização, serve como local síncrono de armazenamento e edição do repositório do projeto.
> - [Visual Studio Code](https://code.visualstudio.com/): Ferramenta utilizada em conjunto com o Github para a confecção de códigos mais complexos.

**Ferramentas de Comunicação e Organização:**

> - [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software): Ferramenta utilizada para realizar as reuniões de equipe, assim como as reuniões semanais em conjunto com a coordenadora do projeto.
> - [Microsoft Office](https://www.office.com/): Ferramenta utilizada em suas diversas funcionalidades. O Microsoft Word foi usado para a confecção da documentação do projeto, o Power Point foi a ferramenta escolhida para a apresentação da proposta de projeto. O próprio sistema Office serviu como local de compartilhamento de documentos.
> - [Trello](https://trello.com/): Ferramenta utilizada para a organização e separação de tarefas no projeto.

**Ferramentas de Desenho de Tela (_wireframing_):**

> - [Canva](https://www.canva.com/): Ferramenta utilizada como um protótipo na realização do _design_ do projeto de interface.
> - [Figma](https://www.figma.com/): Ferramenta utilizada na versão final do projeto de interface.
> - [Draw.io](https://drawio-app.com/): Ferramenta utilizada na confecção dos _wireframes_.


As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o
sistema de versão. As ferramentas de comunicação utilizadas possuem
integração semelhante e por isso foram selecionadas. Por fim, para criar
diagramas utilizamos essa ferramenta por melhor captar as
necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software)
> - [Github](https://github.com/)
> - [Trello](https://trello.com/)
> - [Visual Studio Code](https://code.visualstudio.com/)
> - [Canva](https://www.canva.com/)
> - [Figma](https://www.figma.com/)
> - [Draw.io](https://drawio-app.com/)
> - [Microsoft Office](https://www.office.com/)

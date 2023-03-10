# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

|Maria de Fátima     | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/103972585/223270233-a9813350-f227-4b4e-bd93-ebb044f604b8.png)| **Idade:** 45 <br> **Ocupação:** Professora | **Aplicativos:** <br> ⦁ Facebook <br> ⦁ Netflix <br> ⦁ Pinterest <br> ⦁ WhatsApp 
| **Motivações:** <br> ⦁ Se manter estável financeiramente. <br> ⦁ Poder viajar mais. <br> ⦁ Cuidar da saúde. <br> ⦁ Tempo hábil com sua família | **Frustrações:**<br> ⦁ Não consegue colocar a academia na rotina <br> ⦁ Hábitos alimentares ruins |  **Hobbies, História:**<br> ⦁ Estudar. <br> ⦁ Beber. <br> ⦁ Tempo de qualidade com a família. <br> ⦁ Viajar. |


|Gabriel Almeida      | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/103972585/223275758-56a08ab9-6d45-4136-9353-8b61cf51fc11.png)| **Idade:** 23 <br> **Ocupação:** Operador de média audiovisual, funcionário de uma emissora de TV aberta | **Aplicativos:** <br> ⦁ Youtube  <br> ⦁ Instagram <br> ⦁ WhatsApp 
| **Motivações:** <br> ⦁ Melhorar qualidade de vida. <br> ⦁ Melhores hábitos. <br> ⦁ Conseguir uma nova certificação.  <br> ⦁  Promoção no emprego. | **Frustrações:**<br> ⦁ Não consegue emagrecer.  <br> ⦁ Dificuldade em criar hábitos |  **Hobbies, História:**<br> ⦁ Jogar. <br> ⦁ Natação. <br> ⦁ Assistir vídeo no Youtube. |


|Marcelo Gonçalves       | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/103972585/223276603-a55cebfc-bcd8-4f1c-8417-a3b36b78195a.png)| **Idade:** 31 <br> **Ocupação:**  Empresário - Atua no mercado financeiro sendo sócio fundador de uma corretora de investimentos. | **Aplicativos:** <br> ⦁ Linkedin  <br> ⦁ Instagram <br> ⦁ WhatsApp <br> ⦁ Microsoft Teams 
| **Motivações:** <br> ⦁ Aumentar o número de acionistas de sua empresa <br> ⦁ Conseguir que sua corretora seja top 3 nacional  <br> ⦁ Que sua empresa esteja no portfólio de Warren Buffet | **Frustrações:**<br> ⦁ Não consegue passar tempo com a família  <br> ⦁ Se acha improdutivo em certos dias <br> ⦁ Tem diferentes opiniões com seu sócio quanto aos rumos que a empresa deve seguir  |  **Hobbies, História:**<br> ⦁ Ler. <br> ⦁ Estudar sobre o Mercado Financeiro. <br> ⦁ Investir dinheiro |

|Marcos Ribeiro Souza        | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/103972585/223277379-304d00a6-0701-4b50-bd11-3c9e74e13be2.png)| **Idade:** 22 <br> **Ocupação:**  Encarregado de obras.  | **Aplicativos:** <br> ⦁ Instagram <br> ⦁ WhatsApp
| **Motivações:** <br> ⦁ Melhores hábitos;  <br> ⦁ Ter uma boa saúde financeira. | **Frustrações:**<br> ⦁ Não conseguir administrar o tempo corretamente;  <br> ⦁ Não conseguir fazer algo por falta de tempo. |  **Hobbies, História:**<br> ⦁ Jogar futebol; <br> ⦁ Ler livros; <br> ⦁ Jogar videogame;  <br> ⦁ Sair com a família;  |


|Ana Paula Santana         | Informações:                       |                                        |
|--------------------|------------------------------------|----------------------------------------|
|![image](https://user-images.githubusercontent.com/103972585/223277974-b089e89e-6368-4f91-a28d-2caf8f59cead.png)| **Idade:** 21 <br> **Ocupação:**  Estudante universitária, estagiária no setor financeiro de uma empresa.  | **Aplicativos:** <br> ⦁ Instagram <br> ⦁ WhatsApp <br> ⦁ Linkedin 
| **Motivações:** <br> ⦁ Criar novos hábitos e melhorar a qualidade de vida;  <br> ⦁ Ter bons resultados no trabalho, faculdade e projetos. | **Frustrações:**<br> ⦁ Muitas tarefas e dificuldade para organizar e criar um cronograma. <br> ⦁ Não conseguir organizar-se para ter tempo de praticar novo hábito ou passar tempo com a família e amigos. |  **Hobbies, História:**<br> ⦁ Jogar videogames;  <br> ⦁ Ler livros; <br> ⦁ Assistir filmes/séries;   <br> ⦁ Sair com amigos e família;  |



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                       |
|--------------------|------------------------------------|----------------------------------------------|
|Maria de Fátima      | Conseguir acompanhar meus afazeres do dia   | Ser mais produtiva                    |
|Maria de Fátima      | Ter uma saúde melhor                         | Viver mais anos                      |
|Maria de Fátima      | Melhorar o condicionamento físico | Conseguir continuar realizando todas as tarefas |
|Maria de Fátima      | Conhecer maneiras de acompanhar minha rotina | Permitir que possam administrar contas |
|Gabriel Almeida      | Criar hábitos saudáveis             | Para conseguir achar uma mulher                |
|Gabriel Almeida      | Deixar de procrastinar                  | Para concluir os objetivos diários  |
|Marcelo Gonçalves    | Organizar seus afazeres diários | Conseguir completar o maior número de tarefas possíveis |
|Marcelo Gonçalves    | Gerenciar melhor o seu dia | Poder passar um tempo de qualidade com sua família  |
|Marcelo Gonçalves    | Rastrear seus feitos ao longo da semana | Não esquecer de fazê-las               |
|Marcos Ribeiro Souza | Controlar melhor o meu tempo. | Passar mais tempo com a família.  |
|Marcos Ribeiro Souza | Criar hábitos melhores. | Conseguir atingir os meus objetivos.            |
|Marcos Ribeiro Souza | Um aplicativo. Controlar meus afazeres e não esquecer de nenhum.  |
|Ana Paula Santana    | Identificar e organizar as tarefas da minha rotina. | Identificar e organizar as tarefas da minha rotina. |
|Ana Paula Santana    | Ser capaz de controlar meu tempo e minha rotina. | Encontrar tempo para praticar hobbies, encontrar com amigos e familiares e dedicar a mim |
|Ana Paula Santana    | Criar novo hábito e praticá-lo. | Melhorar qualidade de vida.  |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)

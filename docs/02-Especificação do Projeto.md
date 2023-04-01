# 👷Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## 👩 Personas

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



## 📚 Histórias de Usuários

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

O projeto apresenta uma tela inicial onde consiste uma aprensentação com todos os dias em sequencia, sem especificação de qual mês o usuário está analisando sua aderencia. 

### Descrição Geral da Proposta

Acredita-se que para melhorar a experiencia do usuário é possível realizar a segregação dos dias através dos meses do ano, tornando a aplicação mais visual e facilitando a utilização pelo cliente.

### Processo 1 

Segue a apresentação do BPMN referente a alteração do processo de exposição das datas na tela inicial de acordo com o mes selecionado.

![BPMN](https://user-images.githubusercontent.com/103972585/229315581-5e97c19c-d7ad-400d-8c2b-320e2ff85d2e.jpeg)

  

## Indicadores de Desempenho

|#|Indicador|Objetivos|Descrição|Calculo|Fonte|Perspectiva|
|--|------|--------|--------|---------|--------|-----------|
|1|Número de downloads|Acompanhar a taxa de crescimento do aplicativo|Avaliar a taxa de downloads realizados|Número mensal de download da aplicaçao ao longo do tempo|Estatisticas fornecidas pela Playstore/AppleStore|Crescimento do app|
|2|Avaliação na PlayStore/AppleStore|Acompanhar o feedback dos usuarios|Medir a média das avaliações dadas pelo usuários|Nota média dada pelos usuarios para a aplicação ao longo do tempo|Estatísticas fornecidas pela Playstore/AppleStore|Qualidade do produto| 
|3|Número de desinstalações|Avaliar o que pode ser mudado para prevenir outras desinstalações do aplicativo|Entender oque levou o usuario a desintalar o app|Numero de usuarios que desinstalaram o aplicativo ao longo do tempo|Estatísticas fornecidas pela Playstore/AppleStore|Melhoria continua|
|4|Funcionamento em multiplos sistemas operacionais|Verificar se o aplicativo funciona em sistemas com características difententes sem ocorrer alteração da qualidade e de suas funcionalidades|Verificar reclamaçoes de usuários|Reclamações|Banco de dados da aplicação|Monitorar a adesão dos usuários ao uso da plataforma|
|5|Número de reclamações sobre a qualidade do produto recebido|Verificar se a curadoria estar prestando o serviços corretamente|Avaliar os serviços prestados pela curadoria|Número de reclamações encaminhadas a empresa relativas a qualidade do produto recebido|Reclamações prestadas à ouvidoria da empresa|avaliar a melhorar a qualidade do produto e do serviço prestado|


## 🎯 Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O aplicativo deve apresentar na página principal uma dinâmica que permite verificar o quão aderente as metas da pessoa está no mês.  | ALTA | 
|RF-02| O aplicativo deverá permitir selecionar um dia e verificar as tarefas a serem realizadas e as já realizadas.    | Alta |
|RF-03| O aplicativo deve apresentar na página principal uma aba “inserir um novo objetivo”. | Alta |
|RF-04| O aplicativo deverá apresentar uma opção para marcar a atividade como feita.    | Alta |
|RF-05| O aplicativo não deve permitir que o usuário selecione uma data inválida.   | Alta |
|RF-06| O aplicativo deve mostrar se o usuário está ou não monitorando algum objetivo   | MÉDIA |
|RF-07| O aplicativo deve permitir que o usuário escolha os dias que tal objetivo/tarefa/hábito deve aparecer   | Alta |
|RF-08| O aplicativo deve possibilitar ao usuário visualizar as atividades a nível diário, semanal e mensal.    | Baixa |
|RF-09| O aplicativo deve possibilitar ao usuário colocar um horário para finalizar determinada atividade.    | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O aplicativo deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages, Vercel, ou similar)  | Alta | 
|RNF-02| O aplicativo deverá ser responsivo permitindo a visualização em um celular de forma adequada |  Alta | 
|RNF-03| O aplicativo deve ter bom nível de contraste entre os elementos da tela em conformidade | Média | 
|RNF-04| O aplicativo deve ser compatível com os principais sistemas operacionais do mercado (IOS e Android) |  Alta |
|RNF-05| O aplicativo deve funcionar 24 horas por dia em todos os dias da semana  | Alta | 
|RNF-06| O aplicativo deve se manter funcionando mesmo que haja 100.000 usuários ativos  |  Média |
|RNF-07| O aplicativo deve ser intuitivo e de fácil aprendizagem.  | Alta | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 27/06/2023. |
|02| O aplicativo deve se restringir às tecnologias disponíveis para desenvolvimento mobile |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho |



## 📈 Diagrama de Casos de Uso

![image](https://user-images.githubusercontent.com/103972585/226764037-8aa7f854-157a-4538-823d-e55d0db58a00.png)


# 🧑‍🏫 Matriz de Rastreabilidade

![image](https://user-images.githubusercontent.com/103972585/226764125-b027df49-fc44-4cdc-908a-5c593f79e5c4.png)


# 📊 Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

![image](https://user-images.githubusercontent.com/103972585/226764262-7bdfd919-f606-477d-b752-08111ba4e9d4.png)

### Grafico de Gantt

![image](https://user-images.githubusercontent.com/103972585/226764295-7aa11ac9-9282-4a88-a852-2178772a7ad6.png)


## Gerenciamento de Equipe

![image](https://user-images.githubusercontent.com/103972585/226764399-fd22113d-dada-4b1d-893f-2c73045c3a2a.png)

### Trello

![image](https://user-images.githubusercontent.com/103972585/226764465-55ac9297-dbef-4c6d-83ec-97ac66a12506.png)

Etiquetas: Apresenta o tipo daquele produto no desenvolvimento 
Elas são dividias (até o momento 03/03/23) em: 

* Documentação 
* Desenvolvimento  
* Desenvolvimento RNF 
* Arquitetura 
* Teste 

Cor: As cores é para a equipe de desenvolvimento saber qual é o nível do atributo Prioridade 

Elas são dividas em: 
* Vermelho: Prioridade Alta 
* Amarelo: Prioridade Média 
* Azul: Prioridade Baixa 

### Sprint - Etapa 1
A Sprint dessa etapa se consiste de produtos que foram movidos do Quadro “Backlog” para o Quadro “Sprint – Etapa 1

![image](https://user-images.githubusercontent.com/103972585/226764822-1d0bbcc5-1fae-48d9-8285-35129d35a0b8.png)



## 💵 Gestão de Orçamento

* Recursos Humanos: Considerando um grupo de desenvolvedores trabalhando por 1h por dia, 5 dias por semana até a conclusão do projeto (23/06/23 -> 74 dias úteis). Cada um com o custo de R$30,00/hora. Obs: Todos os papéis Do Scrum estão dentro desse time. 
* Os custos de hardware são aqueles de depreciação, manutenção dos equipamentos dos colaboradores, bem como o custo de uma máquina virtual para armazenamento de arquivos e realização de testes. 
* Os custos de rede são aqueles necessários para realização do projeto, não levando em conta a manutenção do mesmo após entrega do produto, que será por conta do cliente que o comercializará. 
* Softwares considerados foram aqueles instalados nas máquinas dos funcionários para realização do projeto 
* Serviços indiretos considerados foram: água, luz, internet, telefone. Serviços terceirizados diretos não estão previstos. 

![image](https://user-images.githubusercontent.com/103972585/226764930-4af8d025-413d-4880-81e0-120564ec4ea0.png)


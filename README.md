# Sistema de Consulta de Turmas e Avaliações — IEWW

Aplicação web para consultar o cronograma acadêmico do IEWW, localizar turmas e visualizar aulas, unidades e datas de avaliações regulares e substitutivas. A fonte de dados é uma planilha Excel, processada diretamente no navegador.

O projeto utiliza **HTML, CSS e JavaScript puro**, sem servidor de aplicação, banco de dados ou etapa de compilação. A atualização do cronograma é feita substituindo o arquivo `cronograma.xlsx`.

**Domínio configurado:** [calendario.ieww.com.br](https://calendario.ieww.com.br)  
**Repositório:** [Algor365/cronograma](https://github.com/Algor365/cronograma)

> O calendário acadêmico está sujeito a alterações sem aviso prévio. O ano das aulas está fixado em **2026** no código atual.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias e dependências](#tecnologias-e-dependências)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Execução local](#execução-local)
- [Como utilizar](#como-utilizar)
- [Formato da planilha](#formato-da-planilha)
- [Regras de funcionamento](#regras-de-funcionamento)
- [Atualização do cronograma](#atualização-do-cronograma)
- [Manutenção do código](#manutenção-do-código)
- [Hospedagem](#hospedagem)
- [Validação manual](#validação-manual)
- [Solução de problemas](#solução-de-problemas)
- [Limitações atuais](#limitações-atuais)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Funcionalidades

- Leitura automática da primeira aba da planilha Excel.
- Filtros combináveis por mês, código da turma, disciplina e unidade.
- Pesquisa parcial de turmas com lista de sugestões.
- Disciplinas organizadas por grupos da matriz curricular.
- Consulta de aulas síncronas, teóricas, práticas e práticas clínicas.
- Agrupamento de aulas relacionadas em um mesmo cartão.
- Exibição das avaliações regular e substitutiva.
- Manutenção de registros no modo padrão enquanto a avaliação substitutiva não tiver encerrado.
- Modo de consulta exclusivo de aulas realizadas.
- Ordenação dos registros por mês e dia.
- Aviso para disciplinas sem registros disponíveis nos filtros selecionados.
- Limpeza dos filtros com um botão.
- Layout responsivo para computadores e celulares.
- Aviso sobre possíveis alterações no calendário acadêmico.

## Tecnologias e dependências

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura da página e controles de consulta |
| CSS3 | Layout, cartões, cores e adaptação a diferentes telas |
| JavaScript | Importação, normalização, filtros e apresentação dos dados |
| SheetJS `xlsx` 0.18.5 | Leitura do arquivo Excel no navegador |
| Excel `.xlsx` | Armazenamento e manutenção do cronograma |
| GitHub Pages | Estrutura preparada para hospedagem estática |

A biblioteca SheetJS é carregada pelo endereço definido em `index.html`:

```text
https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js
```

Não há `package.json`, instalação com npm ou dependências Python da aplicação. Python é apenas uma opção para servir os arquivos localmente.

## Estrutura do projeto

```text
.
├── .vscode/                       # Configuração local do editor
├── backup/                        # Cópias anteriores do cronograma
├── icons/                         # Imagens e variações de ícones
├── .nojekyll                      # Desativa o processamento Jekyll no Pages
├── CNAME                          # Domínio personalizado
├── cronograma.xlsx                # Planilha lida pela aplicação
├── Documentação do projeto.txt    # Anotações iniciais do projeto
├── index.html                     # Interface e carregamento dos recursos
├── README.md                      # Documentação do repositório
├── script.js                      # Regras, filtros e renderização
├── style.css                      # Estilos e responsividade
└── update.txt                     # Anotações de atualizações
```

Os arquivos de `backup/` não são utilizados pela aplicação. O arquivo consultado é sempre `cronograma.xlsx`, localizado na raiz.

## Execução local

### Pré-requisitos

- Navegador moderno com JavaScript habilitado.
- Servidor HTTP local, como Python 3 ou Live Server.
- Acesso à internet para carregar a dependência SheetJS do CDN.
- Git, caso deseje clonar o repositório pela linha de comando.

### 1. Obter o projeto

```bash
git clone https://github.com/Algor365/cronograma.git
cd cronograma
```

Também é possível baixar o repositório como ZIP e extrair os arquivos.

### 2. Iniciar um servidor local

Na pasta que contém `index.html`:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

No Windows, se o comando `python3` não estiver disponível:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Abra [http://localhost:8000](http://localhost:8000) no navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

### Alternativa: Live Server

Abra a pasta do projeto no Visual Studio Code, instale a extensão **Live Server** e utilize **Open with Live Server** no arquivo `index.html`.

> Abrir `index.html` diretamente por `file://` pode impedir o carregamento da planilha pelo `fetch`. Utilize um servidor HTTP.

## Como utilizar

1. Aguarde o carregamento da planilha.
2. Escolha um mês, se desejar restringir o período.
3. Digite parte do código da turma ou selecione uma sugestão.
4. Escolha uma disciplina e/ou unidade.
5. Consulte os cartões exibidos na área de resultados.
6. Para consultar datas de aulas anteriores ao dia atual, ative **Mostrar aulas realizadas (anteriores)**.
7. Para voltar à consulta padrão, utilize **Limpar Filtros**.

A consulta é atualizada automaticamente quando um filtro muda. Não existe botão separado para pesquisar.

### Comportamento dos controles

| Controle | Comportamento |
| --- | --- |
| Mês | Seleciona um mês entre os registros do modo atual |
| Código da turma | Busca por trecho do código, sem diferenciar maiúsculas, minúsculas ou acentos |
| Disciplina | Seleciona uma opção da matriz curricular e consulta sua família de disciplinas |
| Unidade | Mostra opções compatíveis com os filtros de mês, turma e disciplina |
| Mostrar aulas realizadas | Alterna o modo de consulta e limpa os quatro filtros |
| × no campo da turma | Limpa somente o código da turma |
| Limpar Filtros | Limpa os quatro filtros e desativa o modo de aulas realizadas |

Ao selecionar uma opção teórica ou prática da mesma família curricular, o sistema pode apresentar ambas as modalidades relacionadas. Isso permite consultar as etapas de uma disciplina em conjunto.

## Formato da planilha

A aplicação lê **somente a primeira aba** de `cronograma.xlsx`. A primeira linha deve conter os cabeçalhos esperados. As demais abas não são importadas.

### Colunas reconhecidas

| Cabeçalho | Preenchimento esperado | Uso |
| --- | --- | --- |
| `MÊS` | Nome completo do mês em português | Filtro, ordenação e data da aula |
| `DIA` | Dia do mês, como `15` | Data da aula e ordenação |
| `TURMA` | Código da turma | Pesquisa e identificação do cartão |
| `DISCIPLINA` | Nome da disciplina e modalidade, quando aplicável | Correspondência curricular e título |
| `UNIDADE` | Unidade ou identificação de aula síncrona | Filtro e cabeçalho do cartão |
| `AVALIAÇÃO REGULAR` | Data, intervalo ou orientação textual | Exibição da avaliação regular |
| `AVALIAÇÃO SUBSTITUTIVA` | Data, intervalo ou orientação textual | Exibição e determinação do encerramento do ciclo |
| `ABA_ORIGEM` | Identificação da fonte original | Importada como metadado; não aparece nos cartões |

São aceitos também `MES`, `AVALIACAO REGULAR` e `AVALIACAO SUBSTITUTIVA`, sem acentos. Os outros cabeçalhos devem seguir a grafia da tabela.

Para um registro completo, preencha mês, dia, turma e disciplina. Unidade e avaliações vazias recebem mensagens de ausência de informação nos cartões. O importador não valida integralmente o preenchimento: uma linha é mantida quando possui **turma ou disciplina**.

### Exemplo de preenchimento

Os dados abaixo são fictícios e servem apenas para ilustrar o formato:

| MÊS | DIA | TURMA | DISCIPLINA | UNIDADE | AVALIAÇÃO REGULAR | AVALIAÇÃO SUBSTITUTIVA | ABA_ORIGEM |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Outubro | 15 | TURMA 001 | Legislação Estética | Aulas síncronas | 20/10/2026 a 24/10/2026 | 03/11/2026 a 07/11/2026 | SÃO PAULO |
| Outubro | 16 | TURMA 002 | Eletroterapia Aplicada à Estética - Teórica | São Paulo | 22/10/2026 | 29/10/2026 | SÃO PAULO |
| Outubro | 17 | TURMA 002 | Eletroterapia Aplicada à Estética - Prática | São Paulo | 22/10/2026 | 29/10/2026 | SÃO PAULO |

### Recomendações de preenchimento

- Use nomes completos de meses, como `Outubro`, em vez de números ou abreviações.
- Use dias numéricos válidos para o mês correspondente.
- Preserve os códigos das turmas, incluindo zeros e caracteres significativos.
- Mantenha os nomes das unidades consistentes para evitar opções duplicadas.
- Use nomes de disciplinas compatíveis com o mapeamento de `script.js`.
- Nas avaliações substitutivas, prefira datas com ano explícito: `07/11/2026`.
- Para períodos de avaliação, utilize um texto como `03/11/2026 a 07/11/2026`.
- Evite cabeçalhos com espaços extras ou títulos antes da linha de cabeçalhos.

O SheetJS é configurado com `raw: false` e `defval: ""`: os valores são lidos em sua representação formatada e células vazias recebem uma string vazia. O código remove espaços nas extremidades e reduz espaços repetidos nos valores importados.

## Regras de funcionamento

### Fluxo de carregamento

```text
index.html
  → carrega SheetJS e script.js
  → solicita cronograma.xlsx por fetch
  → lê a primeira aba
  → normaliza os registros
  → determina os registros do modo atual
  → preenche os filtros
  → aplica os filtros e ordena as aulas
  → agrupa e apresenta os cartões
```

A solicitação da planilha inclui `?v=` seguido de `Date.now()`, para solicitar uma URL diferente a cada carregamento. A planilha não é monitorada continuamente: para buscar uma atualização, recarregue a página.

### Matriz curricular e correspondência de nomes

A lista de disciplinas do filtro é definida em `MATRIZ_CURRICULAR`, no início de `script.js`, e não é gerada diretamente dos nomes da planilha. Os grupos são:

- Aulas Síncronas;
- Práticas Clinicas / Básicas;
- Práticas Clinicas / Avançadas.

`chavesCurricularesDaDisciplina()` associa os nomes da planilha às chaves internas. A normalização remove diferenças de acentuação, capitalização e espaços repetidos. Existem tratamentos específicos, como a padronização de `Biostimulador` para `Bioestimulador` e o reconhecimento de algumas variações de numeração das práticas.

`disciplinaCorrespondeAoFiltro()` reúne as chaves da mesma família, removendo os sufixos de teoria e prática para determinar essa relação. Por isso, selecionar uma modalidade não necessariamente restringe o resultado somente a ela.

### Consulta padrão e encerramento do ciclo

No modo padrão, o sistema mantém os registros cujo ciclo ainda não foi encerrado:

1. Se encontrar uma data na avaliação substitutiva, utiliza essa data como referência de encerramento.
2. Se o texto contiver várias datas reconhecidas, utiliza a **última ocorrência**, como o fim de um intervalo.
3. Se não encontrar uma data substitutiva válida, utiliza a data da aula.
4. O ciclo é considerado encerrado quando a data de referência é anterior ao dia atual.

As avaliações são reconhecidas nos formatos `DD/MM/AAAA`, `DD-MM-AAAA` e suas versões com ano de dois dígitos. Anos de dois dígitos são interpretados no intervalo de 2000 a 2099.

**Exemplo:** uma aula em 15/10/2026 com avaliação substitutiva até 07/11/2026 permanece no modo padrão até 07/11/2026, mesmo depois da realização da aula. Se não houver uma data substitutiva reconhecida, passa a ser excluída do modo padrão no dia seguinte à aula.

### Aulas realizadas

Com a chave ativada, a consulta mostra somente registros cuja data da aula é anterior ao dia atual. Ela não adiciona o histórico à consulta padrão: muda para uma consulta de aulas anteriores.

Uma aula já realizada pode aparecer nos dois modos quando a avaliação substitutiva ainda não encerrou. As comparações usam o dia e o fuso local do dispositivo, desconsiderando o horário.

### Agrupamento e aparência dos cartões

Os registros são ordenados por mês e dia e depois agrupados quando compartilham:

- mês;
- turma;
- unidade;
- nome-base normalizado da disciplina;
- conteúdo da avaliação regular;
- conteúdo da avaliação substitutiva.

Modalidades como teoria e prática podem aparecer em um único cartão. Se as avaliações ou unidades forem diferentes, os registros ficam em cartões separados. O agrupamento não elimina linhas duplicadas da planilha.

Cartões com todas as aulas anteriores ao dia atual recebem borda cinza. No modo de aulas realizadas, as datas recebem destaque vermelho. No modo padrão, a lista tenta rolar até o primeiro cartão que não esteja cinza.

### Práticas clínicas

Quando o nome da disciplina contém `Prática Clínica`, os campos de avaliação são apresentados como **Prática Clínica**, independentemente do texto das avaliações na planilha.

Essa substituição ocorre na apresentação. As regras de seleção de registros continuam utilizando os valores importados da planilha.

### Resultados sem registros

Sem disciplina selecionada, a aplicação informa que nenhuma aula foi encontrada para os filtros. Com uma disciplina selecionada no modo padrão, pode exibir um cartão informando que ainda não possui data definida.

Esse aviso significa que não há registros correspondentes **na consulta atual**; também pode ocorrer por efeito dos filtros ou do encerramento dos ciclos. No modo de aulas realizadas, a ausência de registros gera uma mensagem específica de nenhuma aula realizada encontrada.

### Regra específica de calendário

O código inclui um aviso **“Aula referente ao mês de outubro”** para cartões de Biossegurança em novembro que contenham aula no dia 1. Essa é uma regra específica implementada em `cardComData()`.

## Atualização do cronograma

1. Salve uma cópia do arquivo atual em `backup/`, usando um nome que identifique a data.
2. Edite a primeira aba da planilha e preserve os cabeçalhos reconhecidos.
3. Confira meses, dias, turmas, disciplinas, unidades e avaliações.
4. Salve o arquivo com o nome exato `cronograma.xlsx` na raiz do projeto.
5. Execute a aplicação localmente.
6. Confira a consulta padrão e o modo de aulas realizadas.
7. Revise as alterações antes de enviá-las ao repositório.

Exemplo para registrar uma atualização da planilha:

```bash
git status
git add cronograma.xlsx
git commit -m "Atualiza cronograma acadêmico"
git push
```

Se também tiver criado uma cópia de segurança ou alterado o código, inclua os arquivos correspondentes no commit após revisá-los.

## Manutenção do código

### Funções principais

| Função / constante | Responsabilidade |
| --- | --- |
| `MATRIZ_CURRICULAR` | Define os grupos, títulos e chaves do filtro de disciplinas |
| `normalizar()` | Prepara textos para comparação |
| `lerPlanilha()` | Converte a primeira aba em registros da aplicação |
| `chavesCurricularesDaDisciplina()` | Relaciona nomes da planilha à matriz |
| `disciplinaCorrespondeAoFiltro()` | Consulta disciplinas da mesma família |
| `dataDaAulaValida()` | Verifica se a aula é de hoje ou de uma data futura |
| `dataDaAvaliacao()` | Extrai a última data reconhecida de um texto |
| `cicloDaAulaEncerrado()` | Determina o encerramento pela substitutiva ou pela aula |
| `dadosAtivos()` | Seleciona os registros do modo padrão ou de aulas realizadas |
| `atualizarFiltros()` | Atualiza os controles da interface |
| `filtrarDados()` | Aplica os quatro filtros |
| `ordenarAulas()` | Ordena por mês e dia |
| `renderizarCards()` | Agrupa os registros para apresentação |
| `cardComData()` / `cardSemData()` | Geram os cartões |
| `escaparHtml()` | Escapa valores antes de inseri-los no HTML dos cartões |
| `consultar()` | Atualiza os resultados e mensagens |
| `iniciar()` | Carrega a planilha e inicia a consulta |

### Adicionar uma disciplina

1. Adicione um objeto em `MATRIZ_CURRICULAR` com `grupo`, `titulo` e `chave`.
2. Atualize `chavesCurricularesDaDisciplina()` para reconhecer o nome na planilha.
3. Revise o agrupamento por família em `disciplinaCorrespondeAoFiltro()`.
4. Inclua os registros na planilha.
5. Teste a disciplina sozinha e combinada com turma e unidade.

### Alterar o ano letivo

O ano **2026** aparece em três pontos de `script.js`:

- `dataDaAulaValida()`: construção da data usada na comparação;
- `dataFormatada()`: composição da data exibida;
- `cardComData()`: ano no cabeçalho do cartão.

Atualize os três pontos e as datas da planilha ao adaptar o projeto para outro ano. Alterar apenas o texto dos cartões não altera o cálculo de aulas realizadas.

### Personalizar a interface

- `index.html`: título, textos, aviso institucional e controles.
- `style.css`: cores, fontes, espaçamentos, cartões e responsividade.
- `icons/`: imagens utilizadas como identidade visual.
- `script.js`: textos dinâmicos, modalidades e regras dos resultados.

Os parâmetros `?v=` dos arquivos CSS e JavaScript em `index.html` podem ser atualizados para renovar suas URLs após alterações.

## Hospedagem

A aplicação pode ser hospedada em um serviço que publique arquivos estáticos e permita acessar `cronograma.xlsx` pelo mesmo endereço-base da página.

O repositório contém `CNAME` com o domínio `calendario.ieww.com.br` e `.nojekyll`, arquivos relacionados à publicação no GitHub Pages.

Para usar o GitHub Pages, publique os arquivos na origem configurada para o repositório e configure a hospedagem em **Settings → Pages**. Depois da implantação, verifique a página e o acesso à planilha.

Em uma cópia do projeto para outro domínio, ajuste ou remova o `CNAME` antes da publicação. Se utilizar um domínio personalizado, configure também o DNS correspondente.

### Dados publicados

A planilha é baixada pelo navegador e pode ser acessada diretamente por quem tem acesso ao site. Os filtros não restringem o acesso ao conteúdo do arquivo.

Revise a planilha, os backups e os demais arquivos antes de publicá-los em um repositório público. Inclua apenas informações adequadas à consulta pública do cronograma.

## Validação manual

O projeto não possui suíte de testes automatizados. Antes de publicar alterações, confira:

- [ ] Planilha carregada sem erros no console do navegador.
- [ ] Meses válidos em ordem cronológica.
- [ ] Pesquisa parcial de turma e seleção de sugestões.
- [ ] Combinação de mês, turma, disciplina e unidade.
- [ ] Agrupamento de modalidades relacionadas.
- [ ] Avaliações regulares e substitutivas com datas e intervalos.
- [ ] Aula anterior ainda visível enquanto a substitutiva está vigente.
- [ ] Registro excluído do modo padrão após o encerramento do ciclo.
- [ ] Modo de aulas realizadas exibindo somente aulas anteriores.
- [ ] Filtros limpos ao alternar esse modo.
- [ ] Tratamento das práticas clínicas.
- [ ] Mensagens para consultas sem resultados.
- [ ] Botões de limpeza funcionando.
- [ ] Layout utilizável em computador e celular.

Para testar datas, utilize registros de exemplo em uma cópia local da planilha. A data atual do dispositivo influencia os resultados.

## Solução de problemas

| Problema | Verificações e ações |
| --- | --- |
| “Não foi possível carregar a planilha cronograma.xlsx.” | Confira o nome e a localização do arquivo, use HTTP e verifique se o Excel está íntegro. Consulte o console e a aba de rede do navegador. |
| `XLSX is not defined` no console | Verifique o carregamento do script SheetJS e o acesso ao CDN. |
| Meses incorretos ou ausentes | Confira o cabeçalho `MÊS` ou `MES` e os nomes completos dos meses em português. |
| Nenhuma turma nas sugestões | Revise os filtros e o modo atual. As sugestões dependem dos registros disponíveis. |
| Disciplina da planilha ausente do filtro | Inclua a disciplina em `MATRIZ_CURRICULAR` e ajuste o mapeamento. |
| Seleção de teoria também mostra prática | O filtro reúne modalidades da mesma família curricular. Esse é o comportamento implementado. |
| Aula anterior continua na consulta padrão | Confira a data final da avaliação substitutiva: ela pode manter o ciclo aberto. |
| Aula desapareceu da consulta padrão | Confira o encerramento da substitutiva, a data da aula, o ano fixado e a data do dispositivo. |
| Cartões relacionados não se juntam | Compare mês, turma, unidade, nome-base e os textos das duas avaliações. |
| Alteração da planilha não aparece | Recarregue a página e confira se a versão publicada de `cronograma.xlsx` foi atualizada. |
| Alterações de CSS ou JavaScript não aparecem | Atualize os parâmetros de versão em `index.html` e faça uma recarga forçada. |
| Ícone da aba não aparece | Confira o caminho configurado em `index.html`: ele referencia `icons/icon-192.png`, nome que não consta na pasta atual. Ajuste o caminho ou adicione o arquivo correspondente. |

## Limitações atuais

- Ano das aulas fixado em 2026, sem coluna de ano utilizada pelo código.
- Importação restrita à primeira aba da planilha.
- Dependência de acesso ao CDN para carregar o SheetJS.
- Ausência de autenticação, painel de edição ou persistência dos filtros.
- Atualizações da planilha exigem recarregar a página.
- Ausência de validação completa e de remoção automática de registros duplicados.
- Meses ou dias não reconhecidos podem permanecer na consulta padrão, pois `dataDaAulaValida()` os trata como válidos.
- Datas de aula impossíveis podem ser ajustadas automaticamente pelo construtor `Date`; revise a planilha antes de publicar.
- Aviso de disciplina sem data baseado na consulta atual, sem distinguir todos os motivos de ausência de registros.
- Ícone referenciado no HTML com nome diferente dos arquivos disponíveis atualmente.

## Contribuições

Ao propor uma alteração:

1. Descreva o problema ou melhoria desejada.
2. Faça a mudança em uma branch própria.
3. Valide o carregamento da planilha e os cenários afetados.
4. Atualize este README se alterar formato, filtros ou regras de datas.
5. Envie um pull request com a descrição da mudança e da validação realizada.

Evite alterar os cabeçalhos da planilha sem atualizar o importador e a documentação.

## Licença

O repositório atualmente não contém um arquivo `LICENSE`. Uma licença de uso e distribuição deve ser definida pelos responsáveis pelo projeto.

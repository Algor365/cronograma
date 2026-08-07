# Sistema de Consulta de Turmas e Avaliações — IEWW

Aplicação web para consulta do cronograma acadêmico do IEWW. O sistema carrega os dados de uma planilha Excel e permite filtrar aulas e avaliações por mês, código da turma, disciplina e unidade.

O projeto é inteiramente estático: não possui back-end, banco de dados ou etapa de compilação. Os dados são mantidos no arquivo `cronograma.xlsx` e processados diretamente no navegador.

## Funcionalidades

- Consulta de aulas e avaliações previstas no cronograma;
- filtros combináveis por mês, turma, disciplina e unidade;
- campo de turma com pesquisa e sugestões;
- disciplinas organizadas por grupos da matriz curricular;
- exibição das datas das avaliações regular e substitutiva;
- tratamento específico para disciplinas de prática clínica;
- aviso quando uma disciplina ainda não possui data definida;
- ocultação automática de aulas cuja data já passou;
- ordenação dos resultados por mês e dia;
- interface responsiva para computadores e dispositivos móveis;
- leitura automática da primeira aba da planilha Excel.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro;
- [SheetJS](https://sheetjs.com/) (`xlsx` 0.18.5), carregado por CDN;
- arquivos `.xlsx` como fonte de dados;
- GitHub Pages para hospedagem estática.

## Estrutura do projeto

```text
.
├── backup/                 # Cópias anteriores da planilha
├── icons/                  # Ícones e arquivos de identidade visual
├── CNAME                   # Domínio personalizado do GitHub Pages
├── cronograma.xlsx         # Fonte de dados utilizada pela aplicação
├── index.html              # Estrutura da interface
├── script.js               # Leitura da planilha, filtros e renderização
├── style.css               # Estilos e responsividade
└── README.md               # Documentação do projeto
```

## Como executar localmente

### Pré-requisitos

É necessário apenas um navegador moderno e um servidor HTTP local. A conexão com a internet também é necessária para baixar a biblioteca SheetJS do CDN na primeira abertura.

Não abra o `index.html` diretamente pelo protocolo `file://`, pois navegadores normalmente bloqueiam o `fetch` usado para carregar a planilha.

### Opção 1: Python

Na raiz do projeto, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

### Opção 2: extensão Live Server

Abra a pasta em um editor que ofereça um servidor local, como a extensão **Live Server** do Visual Studio Code, e inicie o servidor a partir do `index.html`.

## Formato da planilha

A aplicação lê somente a **primeira aba** de `cronograma.xlsx`. A primeira linha deve conter os cabeçalhos abaixo:

| Coluna | Obrigatória | Finalidade |
| --- | --- | --- |
| `MÊS` | Sim | Nome do mês da aula, por exemplo `Agosto` |
| `DIA` | Sim | Dia da aula em formato numérico |
| `TURMA` | Sim | Código de identificação da turma |
| `DISCIPLINA` | Sim | Nome da disciplina |
| `UNIDADE` | Recomendada | Campus ou unidade responsável |
| `AVALIAÇÃO REGULAR` | Recomendada | Data ou orientação da avaliação regular |
| `AVALIAÇÃO SUBSTITUTIVA` | Recomendada | Data ou orientação da avaliação substitutiva |
| `ABA_ORIGEM` | Opcional | Identificação da aba ou fonte original do registro |

Os cabeçalhos `MES`, `AVALIACAO REGULAR` e `AVALIACAO SUBSTITUTIVA`, sem acentos, também são aceitos. Ainda assim, recomenda-se manter a grafia acentuada da tabela para padronização.

Exemplo:

| MÊS | DIA | TURMA | DISCIPLINA | UNIDADE | AVALIAÇÃO REGULAR | AVALIAÇÃO SUBSTITUTIVA | ABA_ORIGEM |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Agosto | 15 | TURMA 001 | Legislação Estética | São Paulo | 20/08/2026 | 27/08/2026 | SÃO PAULO |

Linhas sem turma e sem disciplina são ignoradas. Espaços duplicados são removidos durante a importação.

> **Atenção:** o nome da coluna de mês deve ser exatamente `MÊS` ou `MES`. Se o sistema exibir números sequenciais no lugar dos meses, verifique esse cabeçalho.

## Como atualizar o cronograma

1. Faça uma cópia de segurança do arquivo atual em `backup/`.
2. Edite a primeira aba de `cronograma.xlsx` sem alterar os cabeçalhos esperados.
3. Preserve os nomes das disciplinas usados pela matriz curricular ou ajuste o mapeamento em `script.js`.
4. Salve o arquivo com o nome exato `cronograma.xlsx` na raiz do projeto.
5. Execute o site localmente e confira os filtros, as datas e as unidades.
6. Publique as alterações no repositório.

O carregamento da planilha inclui um parâmetro com o horário atual, evitando que o navegador reutilize uma versão antiga do arquivo em cache.

## Regras de funcionamento

### Disciplinas

A lista exibida no filtro não é extraída diretamente da planilha. Ela é definida em `MATRIZ_CURRICULAR`, no início de `script.js`, e dividida nestes grupos:

- Aulas síncronas;
- Práticas Clínicas / Básicas;
- Práticas Clínicas / Avançadas.

A função `chavesCurricularesDaDisciplina()` associa variações de nomes encontradas na planilha às disciplinas da matriz. Ao incluir uma disciplina nova, adicione-a à matriz e atualize esse mapeamento.

### Datas e registros expirados

O ano letivo está atualmente definido como **2026** nas funções `dataDaAulaValida()` e `dataFormatada()`. Registros anteriores à data atual são removidos dos filtros e resultados.

Ao reutilizar o projeto em outro ano, altere o ano nos dois pontos citados e revise as datas da planilha. Uma evolução recomendada é incluir uma coluna de ano e deixar de fixá-lo no código.

### Práticas clínicas

Quando o nome da disciplina contém `Prática Clínica`, os campos de avaliação regular e substitutiva são apresentados como `Prática Clínica`, independentemente do conteúdo dessas colunas na planilha.

### Disciplina sem data

Quando uma disciplina específica é escolhida e não existe um registro correspondente nos demais filtros, a aplicação informa que o cronograma ainda não possui data definida para ela.

## Publicação

O projeto foi preparado para publicação no GitHub Pages e usa o domínio personalizado definido em `CNAME`:

```text
calendario.ieww.com.br
```

Para publicar:

1. envie os arquivos para a branch configurada no GitHub Pages;
2. em **Settings > Pages**, selecione a origem da publicação;
3. mantenha o arquivo `CNAME` na raiz;
4. confirme que o DNS do domínio aponta para o GitHub Pages;
5. após a implantação, teste o carregamento de `cronograma.xlsx` e os filtros.

Como todos os arquivos são públicos em uma hospedagem estática, não inclua dados pessoais, credenciais ou informações confidenciais na planilha.

## Solução de problemas

### A mensagem “Não foi possível carregar a planilha” é exibida

- Confirme que o arquivo se chama exatamente `cronograma.xlsx`;
- verifique se ele está na mesma pasta de `index.html`;
- execute o projeto por um servidor HTTP, não por `file://`;
- confira no console e na aba de rede do navegador se o arquivo retornou HTTP 200;
- valide se o arquivo é uma planilha Excel íntegra.

### Os meses não aparecem corretamente

Confira se o cabeçalho é `MÊS` ou `MES` e se os valores são nomes de meses em português. Os nomes são comparados sem diferenciar maiúsculas, minúsculas ou acentos.

### Uma disciplina não aparece ou aparece no grupo errado

Verifique o nome presente na planilha e o mapeamento de `MATRIZ_CURRICULAR` e `chavesCurricularesDaDisciplina()` em `script.js`.

### Aulas válidas desapareceram

Confira `MÊS`, `DIA` e o ano fixado no JavaScript. A aplicação considera expirado todo registro anterior ao dia atual no ano configurado.

### Alterações visuais ou de JavaScript não aparecem

Atualize os parâmetros de versão dos arquivos `style.css` e `script.js` em `index.html`, ou faça uma recarga forçada no navegador.

## Manutenção e validação

O projeto ainda não possui testes automatizados. Antes de publicar uma atualização, recomenda-se validar manualmente:

- carregamento da planilha sem erros no console;
- exibição dos meses em ordem cronológica;
- busca parcial pelo código da turma;
- combinação dos quatro filtros;
- correspondência das disciplinas teóricas, práticas e práticas clínicas;
- datas e unidades apresentadas nos cartões;
- botão **Limpar Filtros**;
- layout em telas de computador e celular.

## Licença

Este repositório não contém um arquivo de licença. Até que uma licença seja adicionada, o uso, a cópia e a distribuição do código dependem de autorização dos responsáveis pelo projeto.

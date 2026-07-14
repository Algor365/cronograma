let dados = [];

const MATRIZ_CURRICULAR = [

  {
    grupo: "Aulas síncronas",
    titulo: "Legislação Estética",
    chave: "legislacao-estetica"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Prescrição Aplicada à Estética",
    chave: "prescricao-aplicada-estetica"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Biossegurança e Primeiros Socorros Aplicados à Saúde Estética",
    chave: "biosseguranca-primeiros-socorros"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Patologia e Imunologia Aplicada à Estética",
    chave: "patologia-imunologia"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Cosmetologia Avançada",
    chave: "cosmetologia-avancada"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Farmacologia dos Injetáveis Corporais e Faciais",
    chave: "farmacologia-injetaveis"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Multidisciplinaridade na Estética e Saúde",
    chave: "multidisciplinaridade"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Anatomofisiologia da Cabeça e Pescoço",
    chave: "anatomofisiologia-cabeca-pescoco"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Anatomofisiologia do Sistema Tegumentar e Endócrino",
    chave: "anatomofisiologia-tegumentar-endocrino"
  },
  {
    grupo: "Aulas síncronas",
    titulo: "Ciência Estética",
    chave: "ciencia-estetica"
  },
    {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Eletroterapia Aplicada à Estética - Teórica",
    chave: "eletroterapia-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Eletroterapia Aplicada à Estética - Prática",
    chave: "eletroterapia-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Tricologia e Terapias Capilares Avançadas - Teórica",
    chave: "tricologia-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Tricologia e Terapias Capilares Avançadas - Prática",
    chave: "tricologia-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Inovação e Tecnologias em Harmonização - Teórica",
    chave: "inovacao-harmonizacao-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Inovação e Tecnologias em Harmonização - Prática",
    chave: "inovacao-harmonizacao-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimentos Intradérmicos e Intramusculares - Teórica",
    chave: "intradermicos-intramusculares-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimentos Intradérmicos e Intramusculares - Prática I",
    chave: "intradermicos-intramusculares-pratica-1"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimentos Intradérmicos e Intramusculares - Prática II",
    chave: "intradermicos-intramusculares-pratica-2"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimentos Intradérmicos e Intramusculares - Prática III",
    chave: "intradermicos-intramusculares-pratica-3"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Toxina Botulínica - Teórica",
    chave: "toxina-botulinica-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Toxina Botulínica - Prática",
    chave: "toxina-botulinica-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Bioestimuladores - Teórica",
    chave: "bioestimuladores-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Bioestimuladores - Prática",
    chave: "bioestimuladores-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Preenchedores - Teórica",
    chave: "preenchedores-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Preenchedores - Prática",
    chave: "preenchedores-pratica"
  },

  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Fios de Sustentação - Teórica",
    chave: "fios-sustentacao-teorica"
  },
  {
    grupo: "Práticas Clinicas / Básicas",
    titulo: "Procedimento Injetável Estético: Fios de Sustentação - Prática",
    chave: "fios-sustentacao-pratica"
  },

  {
    grupo: "Práticas Clinicas / Avançadas",
    titulo: "Prática Clínica: Toxina Botulínica",
    chave: "pratica-clinica-toxina"
  },
  {
    grupo: "Práticas Clinicas / Avançadas",
    titulo: "Prática Clínica: Bioestimuladores",
    chave: "pratica-clinica-bioestimuladores"
  },
  {
    grupo: "Práticas Clinicas / Avançadas",
    titulo: "Prática Clínica: Preenchedores",
    chave: "pratica-clinica-preenchedores"
  },
  {
    grupo: "Práticas Clinicas / Avançadas",
    titulo: "Prática Clínica: Fios de Sustentação",
    chave: "pratica-clinica-fios"
  }
];

const selects = {
  mes: document.getElementById("mes"),
  turma: document.getElementById("turma"),
  disciplina: document.getElementById("disciplina"),
  unidade: document.getElementById("unidade")
};

const listaTurmas = document.getElementById("listaTurmas");
const limparTurma = document.getElementById("limparTurma");
const estadoInicial = document.getElementById("estadoInicial");
const listaResultado = document.getElementById("listaResultado");

function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function limparValor(valor) {
  if (valor === undefined || valor === null) {
    return "";
  }

  return String(valor)
    .trim()
    .replace(/\s+/g, " ");
}

function nomeDisciplinaPadrao(disciplina) {
  return limparValor(disciplina)
    .replace(/Biostimulador/gi, "Bioestimulador");
}

function chavesCurricularesDaDisciplina(disciplina) {
  const n = normalizar(disciplina)
    .replace(/biostimulador/g, "bioestimulador");

  const chaves = [];

  const ehTeorica =
    n.includes("teorica") ||
    n.includes("teoria");

  const ehPraticaClinica =
    n.includes("pratica clinica");

  const ehPratica1 =
    n.includes("pratica i") &&
    !n.includes("pratica ii");

  const ehPratica2 =
    n.includes("pratica ii");

  const ehPratica3 =
    n.includes("pratica iii")

  const ehPraticaComum =
    n.includes("pratica") &&
    !ehPraticaClinica &&
    !ehPratica1 &&
    !ehPratica2;

  if (n.includes("legislacao estetica")) {
    chaves.push("legislacao-estetica");
  }

  if (n.includes("prescricao aplicada")) {
    chaves.push("prescricao-aplicada-estetica");
  }

  if (
    n.includes("biosseguranca") ||
    n.includes("primeiros socorros")
  ) {
    chaves.push("biosseguranca-primeiros-socorros");
  }

  if (
    n.includes("patologia") ||
    n.includes("imunologia")
  ) {
    chaves.push("patologia-imunologia");
  }

  if (n.includes("cosmetologia")) {
    chaves.push("cosmetologia-avancada");
  }

  if (n.includes("farmacologia")) {
    chaves.push("farmacologia-injetaveis");
  }

  if (n.includes("multidisciplinaridade")) {
    chaves.push("multidisciplinaridade");
  }

  if (
    n.includes("cabeca") &&
    n.includes("pescoco")
  ) {
    chaves.push("anatomofisiologia-cabeca-pescoco");
  }

  if (
    n.includes("tegumentar") ||
    n.includes("endocrino")
  ) {
    chaves.push("anatomofisiologia-tegumentar-endocrino");
  }

  if (n.includes("ciencia estetica")) {
    chaves.push("ciencia-estetica");
  }

  if (n.includes("eletroterapia")) {
    if (ehTeorica) {
      chaves.push("eletroterapia-teorica");
    } else if (ehPraticaComum) {
      chaves.push("eletroterapia-pratica");
    }
  }

  if (
    n.includes("tricologia") ||
    n.includes("terapia capilar")
  ) {
    if (ehTeorica) {
      chaves.push("tricologia-teorica");
    } else if (ehPraticaComum) {
      chaves.push("tricologia-pratica");
    }
  }

  if (
    n.includes("inovacao") &&
    n.includes("harmonizacao")
  ) {
    if (ehTeorica) {
      chaves.push("inovacao-harmonizacao-teorica");
    } else if (ehPraticaComum) {
      chaves.push("inovacao-harmonizacao-pratica");
    }
  }

if (
  n.includes("intradermicos") ||
  n.includes("intramusculares")
) {
  if (ehPratica3) {
    chaves.push("intradermicos-intramusculares-pratica-3");
  } else if (ehPratica2) {
    chaves.push("intradermicos-intramusculares-pratica-2");
  } else if (ehPratica1) {
    chaves.push("intradermicos-intramusculares-pratica-1");
  } else if (ehTeorica) {
    chaves.push("intradermicos-intramusculares-teorica");
  } else if (ehPraticaComum) {
    chaves.push("intradermicos-intramusculares-pratica-1");
  }
}

  if (n.includes("toxina botulinica")) {
    if (ehPraticaClinica) {
      chaves.push("pratica-clinica-toxina");
    } else if (ehTeorica) {
      chaves.push("toxina-botulinica-teorica");
    } else if (ehPraticaComum) {
      chaves.push("toxina-botulinica-pratica");
    }
  }

  if (n.includes("bioestimulador")) {
    if (ehPraticaClinica) {
      chaves.push("pratica-clinica-bioestimuladores");
    } else if (ehTeorica) {
      chaves.push("bioestimuladores-teorica");
    } else if (ehPraticaComum) {
      chaves.push("bioestimuladores-pratica");
    }
  }

  if (
    n.includes("preenchimento") ||
    n.includes("preenchedor")
  ) {
    if (ehPraticaClinica) {
      chaves.push("pratica-clinica-preenchedores");
    } else if (ehTeorica) {
      chaves.push("preenchedores-teorica");
    } else if (ehPraticaComum) {
      chaves.push("preenchedores-pratica");
    }
  }

  if (n.includes("fios de sustentacao")) {
    if (ehPraticaClinica) {
      chaves.push("pratica-clinica-fios");
    } else if (ehTeorica) {
      chaves.push("fios-sustentacao-teorica");
    } else if (ehPraticaComum) {
      chaves.push("fios-sustentacao-pratica");
    }
  }

  if (!chaves.length) {
    chaves.push(normalizar(disciplina));
  }

  return [...new Set(chaves)];
}

function disciplinaPertenceAMatriz(disciplina, chaveMatriz) {
  return chavesCurricularesDaDisciplina(disciplina)
    .includes(chaveMatriz);
}

function lerPlanilha(workbook) {
  const registros = [];

  const nomeAba = workbook.SheetNames[0];
  const planilha = workbook.Sheets[nomeAba];

  const linhas = XLSX.utils.sheet_to_json(planilha, {
    defval: "",
    raw: false
  });

  linhas.forEach(linha => {
    registros.push({
      mes: limparValor(
        linha["MÊS"] ||
        linha["MES"]
      ),

      dia: limparValor(
        linha["DIA"]
      ),

      turma: limparValor(
        linha["TURMA"]
      ),

      disciplina: nomeDisciplinaPadrao(
        linha["DISCIPLINA"]
      ),

      unidade: limparValor(
        linha["UNIDADE"]
      ),

      avaliacaoRegular: limparValor(
        linha["AVALIAÇÃO REGULAR"] ||
        linha["AVALIACAO REGULAR"]
      ),

      avaliacaoSubstitutiva: limparValor(
        linha["AVALIAÇÃO SUBSTITUTIVA"] ||
        linha["AVALIACAO SUBSTITUTIVA"]
      ),

      origem: limparValor(
        linha["ABA_ORIGEM"]
      )
    });
  });

  return registros.filter(item =>
    item.turma ||
    item.disciplina
  );
}

function ordemMes(mes) {
  const meses = {
    janeiro: 1,
    fevereiro: 2,
    marco: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12
  };

  return meses[normalizar(mes)] || 99;
}

function numeroMes(mes) {
  const meses = {
    janeiro: "01",
    fevereiro: "02",
    marco: "03",
    abril: "04",
    maio: "05",
    junho: "06",
    julho: "07",
    agosto: "08",
    setembro: "09",
    outubro: "10",
    novembro: "11",
    dezembro: "12"
  };

  return meses[normalizar(mes)] || "";
}

function ehListaDeMeses(lista) {
  return lista.every(item =>
    ordemMes(item) !== 99
  );
}

function unicos(lista) {
  const valores = [
    ...new Set(lista.filter(Boolean))
  ];

  if (ehListaDeMeses(valores)) {
    return valores.sort(
      (a, b) => ordemMes(a) - ordemMes(b)
    );
  }

  return valores.sort((a, b) =>
    String(a).localeCompare(
      String(b),
      "pt-BR"
    )
  );
}

function disciplinasUnicas() {
  return MATRIZ_CURRICULAR.map(item => ({
    value: item.chave,
    text: item.titulo,
    grupo: item.grupo
  }));
}

function preencherSelect(
  select,
  valores,
  textoPadrao
) {
  const valorAtual = select.value;

  select.innerHTML =
    `<option value="">${textoPadrao}</option>`;

  valores.forEach(valor => {
    const option =
      document.createElement("option");

    option.value = valor;
    option.textContent = valor;

    select.appendChild(option);
  });

  const valorAindaExiste =
    [...select.options].some(option =>
      option.value === valorAtual
    );

  if (valorAindaExiste) {
    select.value = valorAtual;
  }
}

function preencherSelectDisciplina(valores) {
  const valorAtual =
    selects.disciplina.value;

  selects.disciplina.innerHTML =
    `<option value="">Todas as disciplinas</option>`;

  const grupos = new Map();

  valores.forEach(item => {
    const nomeGrupo =
      item.grupo || "Disciplinas";

    if (!grupos.has(nomeGrupo)) {
      const optgroup =
        document.createElement("optgroup");

      optgroup.label = nomeGrupo;

      grupos.set(nomeGrupo, optgroup);
      selects.disciplina.appendChild(optgroup);
    }

    const option =
      document.createElement("option");

    option.value = item.value;
    option.textContent = item.text;

    if (
      item.text.startsWith("Prática Clínica:")
    ) {
      option.classList.add(
        "pratica-clinica"
      );
    }

    grupos.get(nomeGrupo)
      .appendChild(option);
  });

  const valorAindaExiste =
    [...selects.disciplina.options].some(
      option => option.value === valorAtual
    );

  if (valorAindaExiste) {
    selects.disciplina.value =
      valorAtual;
  }
}

function dataDaAulaValida(item) {
  const meses = {
    janeiro: 0,
    fevereiro: 1,
    marco: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11
  };

  const mes =
    meses[normalizar(item.mes)];

  const dia =
    Number.parseInt(item.dia, 10);

  if (
    mes === undefined ||
    !dia
  ) {
    return true;
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataAula =
    new Date(2026, mes, dia);

  dataAula.setHours(0, 0, 0, 0);

  return dataAula >= hoje;
}

function dadosAtivos() {
  return dados.filter(item =>
    dataDaAulaValida(item)
  );
}

function dataFormatada(item) {
  const mes = numeroMes(item.mes);

  if (!mes) {
    return item.dia || "-";
  }

  return `${String(item.dia).padStart(2, "0")}/${mes}/2026`;
}

function ehPraticaClinica(item) {
  return normalizar(item.disciplina)
    .includes("pratica clinica");
}

function turmasDisponiveis() {
  const mes = selects.mes.value;
  const disciplina =
    selects.disciplina.value;
  const unidade =
    selects.unidade.value;

  let lista = dadosAtivos();

  if (mes) {
    lista = lista.filter(item =>
      item.mes === mes
    );
  }

  if (disciplina) {
    lista = lista.filter(item =>
      disciplinaPertenceAMatriz(
        item.disciplina,
        disciplina
      )
    );
  }

  if (unidade) {
    lista = lista.filter(item =>
      item.unidade === unidade
    );
  }

  return unicos(
    lista.map(item => item.turma)
  );
}

function renderizarListaTurmas() {
  const busca =
    normalizar(selects.turma.value);

  const turmas =
    turmasDisponiveis().filter(turma =>
      normalizar(turma).includes(busca)
    );

  listaTurmas.innerHTML = "";

  if (!turmas.length) {
    const vazio =
      document.createElement("div");

    vazio.className =
      "item-turma vazio";

    vazio.textContent =
      "Nenhuma turma encontrada";

    listaTurmas.appendChild(vazio);
    listaTurmas.classList.remove("escondido");

    return;
  }

  turmas.forEach(turma => {
    const item =
      document.createElement("button");

    item.type = "button";
    item.className = "item-turma";
    item.textContent = turma;

    item.addEventListener(
      "mousedown",
      event => {
        event.preventDefault();

        selects.turma.value = turma;

        listaTurmas.classList.add(
          "escondido"
        );

        atualizarFiltros();
        consultar();
      }
    );

    listaTurmas.appendChild(item);
  });

  listaTurmas.classList.remove(
    "escondido"
  );
}
function atualizarFiltros() {
  const base = dadosAtivos();

  const mesAtual =
    selects.mes.value;

  const turmaAtual =
    selects.turma.value;

  const disciplinaAtual =
    selects.disciplina.value;

  const unidadeAtual =
    selects.unidade.value;

  let listaSemUnidade = base;

  if (mesAtual) {
    listaSemUnidade =
      listaSemUnidade.filter(item =>
        item.mes === mesAtual
      );
  }

  if (turmaAtual) {
    listaSemUnidade =
      listaSemUnidade.filter(item =>
        normalizar(item.turma).includes(
          normalizar(turmaAtual)
        )
      );
  }

  if (disciplinaAtual) {
    listaSemUnidade =
      listaSemUnidade.filter(item =>
        disciplinaPertenceAMatriz(
          item.disciplina,
          disciplinaAtual
        )
      );
  }

  preencherSelect(
    selects.mes,
    unicos(base.map(item => item.mes)),
    "Todos os meses"
  );

  preencherSelectDisciplina(
    disciplinasUnicas()
  );

  preencherSelect(
    selects.unidade,
    unicos(
      listaSemUnidade.map(
        item => item.unidade
      )
    ),
    "Todas as unidades"
  );

  selects.mes.value = mesAtual;
  selects.turma.value = turmaAtual;
  selects.disciplina.value =
    disciplinaAtual;
  selects.unidade.value =
    unidadeAtual;

  destacarDisciplinaSelecionada();
}

function filtrarDados() {
  const mes =
    selects.mes.value;

  const turma =
    normalizar(selects.turma.value);

  const disciplina =
    selects.disciplina.value;

  const unidade =
    selects.unidade.value;

  return dadosAtivos().filter(item => {
    const correspondeMes =
      !mes ||
      item.mes === mes;

    const correspondeTurma =
      !turma ||
      normalizar(item.turma)
        .includes(turma);

    const correspondeDisciplina =
      !disciplina ||
      disciplinaPertenceAMatriz(
        item.disciplina,
        disciplina
      );

    const correspondeUnidade =
      !unidade ||
      item.unidade === unidade;

    return (
      correspondeMes &&
      correspondeTurma &&
      correspondeDisciplina &&
      correspondeUnidade
    );
  });
}

function escaparHtml(valor) {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function ordenarAulas(lista) {
  return [...lista].sort((a, b) => {
    const diferencaMes =
      ordemMes(a.mes) -
      ordemMes(b.mes);

    if (diferencaMes !== 0) {
      return diferencaMes;
    }

    const diaA =
      Number.parseInt(a.dia, 10) || 99;

    const diaB =
      Number.parseInt(b.dia, 10) || 99;

    return diaA - diaB;
  });
}

function cardSemData(disciplina) {
  return `
    <article class="card card-sem-data">
      <h2>
        ${escaparHtml(disciplina.titulo)}
      </h2>

      <div class="estado">
        Aguarde. Nosso cronograma é atualizado semestralmente e, no momento, ainda não possuímos uma data definida para esta disciplina.
.
      </div>
    </article>
  `;
}

function cardComData(
  item,
  tituloMatriz
) {
  const pratica =
    ehPraticaClinica(item);

  const avaliacaoRegular = pratica
    ? "Prática Clínica"
    : item.avaliacaoRegular ||
      "Não informado";

  const avaliacaoSubstitutiva = pratica
    ? "Prática Clínica"
    : item.avaliacaoSubstitutiva ||
      "-";

  return `
    <article class="card">
      <h2>
        ${escaparHtml(tituloMatriz)}
      </h2>

      <div class="grid">
        <div>
          <span>Mês</span>

          <strong>
            ${escaparHtml(item.mes || "-")}
          </strong>
        </div>

        <div>
          <span>Data da aula</span>

          <strong>
            ${escaparHtml(
              dataFormatada(item)
            )}
          </strong>
        </div>

        <div>
          <span>Código da turma</span>

          <strong>
            ${escaparHtml(
              item.turma || "-"
            )}
          </strong>
        </div>

        <div>
          <span>Unidade</span>

          <strong>
            ${escaparHtml(
              item.unidade || "-"
            )}
          </strong>
        </div>

        <div class="${
          pratica ? "sem-prova" : ""
        }">
          <span>Avaliação regular</span>

          <strong>
            ${escaparHtml(
              avaliacaoRegular
            )}
          </strong>
        </div>

        <div class="${
          pratica ? "sem-prova" : ""
        }">
          <span>
            Avaliação substitutiva
          </span>

          <strong>
            ${escaparHtml(
              avaliacaoSubstitutiva
            )}
          </strong>
        </div>
      </div>
    </article>
  `;
}

function consultar() {
  const listaFiltrada = ordenarAulas(
    filtrarDados()
  );

  const disciplinaSelecionada =
    selects.disciplina.value;

  /*
   * Quando nenhuma disciplina estiver selecionada:
   * mostra somente as aulas que possuem datas na planilha.
   */
  if (!disciplinaSelecionada) {
    if (!listaFiltrada.length) {
      listaResultado.innerHTML = "";

      listaResultado.classList.add(
        "escondido"
      );

      estadoInicial.textContent =
        "Nenhuma aula encontrada para os filtros selecionados.";

      estadoInicial.classList.remove(
        "escondido"
      );

      return;
    }

    const html = listaFiltrada.map(item => {
      const disciplinaMatriz =
        MATRIZ_CURRICULAR.find(disciplina =>
          disciplinaPertenceAMatriz(
            item.disciplina,
            disciplina.chave
          )
        );

      const titulo =
        disciplinaMatriz?.titulo ||
        item.disciplina ||
        "Disciplina";

      return cardComData(
        item,
        titulo
      );
    }).join("");

    estadoInicial.classList.add(
      "escondido"
    );

    listaResultado.classList.remove(
      "escondido"
    );

    listaResultado.innerHTML = html;

    return;
  }

  /*
   * Quando uma disciplina específica estiver selecionada:
   * mostra as datas dela ou o aviso de que ainda não possui data.
   */
  const disciplinaMatriz =
    MATRIZ_CURRICULAR.find(item =>
      item.chave === disciplinaSelecionada
    );

  if (!disciplinaMatriz) {
    estadoInicial.textContent =
      "Disciplina não encontrada.";

    estadoInicial.classList.remove(
      "escondido"
    );

    listaResultado.classList.add(
      "escondido"
    );

    return;
  }

  const aulasDaDisciplina =
    listaFiltrada.filter(item =>
      disciplinaPertenceAMatriz(
        item.disciplina,
        disciplinaSelecionada
      )
    );

  let html = "";

  if (!aulasDaDisciplina.length) {
    html = cardSemData(
      disciplinaMatriz
    );
  } else {
    html = aulasDaDisciplina.map(item =>
      cardComData(
        item,
        disciplinaMatriz.titulo
      )
    ).join("");
  }

  estadoInicial.classList.add(
    "escondido"
  );

  listaResultado.classList.remove(
    "escondido"
  );

  listaResultado.innerHTML = html;
}

function limparConsulta() {
  selects.mes.value = "";
  selects.turma.value = "";
  selects.disciplina.value = "";
  selects.unidade.value = "";

  listaTurmas.classList.add(
    "escondido"
  );

  atualizarFiltros();
  consultar();
}

selects.mes.addEventListener(
  "change",
  () => {
    atualizarFiltros();
    consultar();
  }
);

selects.turma.addEventListener(
  "focus",
  () => {
    renderizarListaTurmas();
  }
);

selects.turma.addEventListener(
  "click",
  () => {
    renderizarListaTurmas();
  }
);

selects.turma.addEventListener(
  "input",
  () => {
    renderizarListaTurmas();
    atualizarFiltros();
    consultar();
  }
);

selects.turma.addEventListener(
  "blur",
  () => {
    setTimeout(() => {
      listaTurmas.classList.add(
        "escondido"
      );
    }, 150);
  }
);

limparTurma.addEventListener(
  "click",
  () => {
    selects.turma.value = "";
    selects.turma.focus();

    atualizarFiltros();
    consultar();
    renderizarListaTurmas();
  }
);

selects.disciplina.addEventListener(
  "change",
  () => {
    atualizarFiltros();
    consultar();
    destacarDisciplinaSelecionada();
  }
);

selects.unidade.addEventListener(
  "change",
  () => {
    atualizarFiltros();
    consultar();
  }
);

document
  .getElementById("limpar")
  .addEventListener(
    "click",
    limparConsulta
  );

document.addEventListener(
  "click",
  event => {
    const campoTurma =
      document.querySelector(
        ".campo-turma"
      );

    if (
      campoTurma &&
      !campoTurma.contains(event.target)
    ) {
      listaTurmas.classList.add(
        "escondido"
      );
    }
  }
);

function destacarDisciplinaSelecionada() {
  const opcaoSelecionada =
    selects.disciplina.options[
      selects.disciplina.selectedIndex
    ];

  const textoSelecionado =
    opcaoSelecionada?.textContent || "";

  if (
    textoSelecionado.startsWith(
      "Prática Clínica:"
    )
  ) {
    selects.disciplina.classList.add(
      "pratica-clinica-selecionada"
    );
  } else {
    selects.disciplina.classList.remove(
      "pratica-clinica-selecionada"
    );
  }
}

async function iniciar() {
  try {
    estadoInicial.textContent =
      "Carregando planilha...";

    const resposta = await fetch(
      "./cronograma.xlsx?v=" +
      Date.now()
    );

    if (!resposta.ok) {
      throw new Error(
        "Planilha não encontrada."
      );
    }

    const arrayBuffer =
      await resposta.arrayBuffer();

    const workbook = XLSX.read(
      arrayBuffer,
      {
        type: "array"
      }
    );

    dados = lerPlanilha(workbook);

    atualizarFiltros();
    consultar();
  } catch (erro) {
    console.error(erro);

    estadoInicial.textContent =
      "Não foi possível carregar a planilha cronograma.xlsx.";
  }
}

iniciar();
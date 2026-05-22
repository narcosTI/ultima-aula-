import { IndicatorRow, Citation } from './types';

export const INDICATORS_DATA: IndicatorRow[] = [
  {
    indicator: "Linha de extrema pobreza",
    text1: "US$ 2,15/dia PPC (~R$ 209)",
    text2: "R$ 209 per capita/mês",
    variation: "—",
    highlights: "Monitora ODS1 (Erradicação da Pobreza). Parâmetro internacional do Banco Mundial.",
    category: "geral"
  },
  {
    indicator: "Linha de pobreza",
    text1: "US$ 6,85/dia PPC (~R$ 665)",
    text2: "R$ 665 per capita/mês",
    variation: "—",
    highlights: "Linha de corte atualizada pelo Banco Mundial em 2022 para renda média-alta.",
    category: "geral"
  },
  {
    indicator: "População em extrema pobreza",
    text1: "12,7 milhões (5,9%)",
    text2: "9,5 milhões (4,4%)",
    variation: "-3,2 milhões (-1,5%)",
    highlights: "Menor proporção desde 2012; primeira vez na história abaixo de 5% da população nacional.",
    category: "geral"
  },
  {
    indicator: "População em pobreza",
    text1: "67,8 milhões (31,6%)",
    text2: "59,0 milhões (27,4%)",
    variation: "-8,8 milhões (-4,2%)",
    highlights: "Queda expressiva representada pela reativação econômica e reforço dos benefícios.",
    category: "geral"
  },
  {
    indicator: "Efeito dos programas sociais",
    text1: "Não detalhado no texto original para 2022",
    text2: "Sem programas, extrema pobreza iria a 11,2% (+6,8%) e pobreza a 32,4% (+5,0%)",
    variation: "—",
    highlights: "Impacto imenso da redistribuição: 27,9% de todos os domicílios brasileiros recebiam benefícios em 2023.",
    category: "geral"
  },
  {
    indicator: "Cesta Rural e Proteção Social",
    text1: "Não detalhado",
    text2: "51,0% dos domicílios da área rural brasileira recebiam benefícios de renda",
    variation: "—",
    highlights: "A vulnerabilidade no interior do país destaca a importância vital do amparo agrícola.",
    category: "regional"
  },
  {
    indicator: "Crianças e Adolescentes",
    text1: "—",
    text2: "42,7% das pessoas de 0 a 14 anos viviam em domicílios com benefícios de renda",
    variation: "—",
    highlights: "Foco prioritário no Novo Bolsa Família, com adicionais monetários por criança e gestante.",
    category: "demografia"
  },
  {
    indicator: "Desigualdades regionais (Pobreza)",
    text1: "—",
    text2: "Maiores proporções: Vale do Rio Purus/AM (66,6%), Litoral Maranhense (63,8%)",
    variation: "—",
    highlights: "Regiões Sul, Sudeste e Centro-Oeste registram as menores taxas de privação material.",
    category: "regional"
  },
  {
    indicator: "Pobreza no Mercado de Trabalho",
    text1: "—",
    text2: "Ocupados: 14,2% pobres / Desocupados externos: 54,9% pobres",
    variation: "—",
    highlights: "Estar ocupado reduz significativamente o risco, mas o emprego precário não blinda totalmente contra a pobreza.",
    category: "trabalho"
  },
  {
    indicator: "Taxa de Informalidade de Trabalho",
    text1: "—",
    text2: "Informalidade maior entre pretos/pardos (45,8%) do que em brancos (34,3%)",
    variation: "—",
    highlights: "Desigualdade racial de ocupação reflete barreiras de acesso e escolaridade.",
    category: "trabalho"
  },
  {
    indicator: "Jovens 'Nem-Nem' (15 a 29 anos)",
    text1: "—",
    text2: "10,3 milhões (21,2% dos jovens)",
    variation: "Queda para menor número e taxa desde 2012",
    highlights: "Dentre os 10% mais pobres da população, 49,3% dos jovens estavam sob essa condição.",
    category: "jovens"
  },
  {
    indicator: "Desigualdade Racial nos jovens 'Nem-Nem'",
    text1: "—",
    text2: "Mulheres negras: 45,2% | Homens negros: 23,4% vs Mulheres brancas: 18,9% | Homens brancos: 11,3%",
    variation: "—",
    highlights: "A interseccionalidade de gênero e raça desvela abismos cruéis na transição educacional.",
    category: "jovens"
  }
];

export const CITATIONS_DATA: Citation[] = [
  {
    field: "Teoria da Desigualdade Brasileira",
    author: "Jessé Souza",
    title: "A elite do atraso: Da escravidão a Bolsonaro",
    edition: "1. ed.",
    city: "Rio de Janeiro",
    publisher: "Estatégia Brasil",
    year: "2017",
    link: "https://www.google.com.br/books/edition/A_elite_do_atraso/2uKXDwAAQBAJ"
  },
  {
    field: "Dominação Social e Capital Simbólico",
    author: "Pierre Bourdieu",
    title: "O poder simbólico",
    edition: "16. ed.",
    city: "Rio de Janeiro",
    publisher: "Bertrand Brasil",
    year: "2012",
    link: "https://www.google.com.br/books/edition/O_poder_simb%C3%B3lico/0rWbAwAAQBAJ"
  },
  {
    field: "Mecanismos do Poder e Combate",
    author: "Bruno Wilhelm Speck",
    title: "Corrupção e Estado de Direito no Brasil",
    edition: "1. ed.",
    city: "São Paulo",
    publisher: "Editora Unesp",
    year: "2020",
    link: "https://www.editoraunesp.com.br"
  }
];

export const WORK_QUESTIONS = [
  {
    num: 1,
    title: "Como decisões corporativas que priorizam maximizar lucros afetam regiões vulneráveis, perpetuando desigualdades estruturais?",
    answer: "Decisões focadas exclusivamente no lucro, como o desvio de recursos e a manipulação de ações descritos no Caso 1, drenam capital que poderia ser reinvestivo em políticas públicas ou em iniciativas de desenvolvimento local. Em regiões vulneráveis, essa sangria agrava a carência de serviços básicos e de oportunidades de emprego digno. A concentração de renda no topo da hierarquia corporativa reduz a circulação de riqueza na base da pirâmide social, travando a mobilidade e cristalizando as desigualdades históricas. O caso ilustra como a crença de que “grandes lucros contribuem para a economia nacional” mascara a realidade: os ganhos permanecem privados, enquanto os custos sociais se espalham pela população mais pobre.",
    badge: "regiões vulneráveis"
  },
  {
    num: 2,
    title: "De que forma a imposição de um modelo econômico que desvaloriza a participação democrática pode ser considerada uma forma de violência institucional contra a sociedade?",
    answer: "Quando um CEO toma decisões sem supervisão ética, sem registro digital e sem consulta pública, elimina-se a possibilidade de controle social e de transparência. Esse movimento configura violência institucional porque impõe uma lógica autoritária que ignora direitos fundamentais de participação e de informação. A sociedade é tratada como mero receptáculo passivo de decisões que afetam políticas públicas e a economia. Ao manipular decisões políticas sem ser identificado, o executivo corrompe o espaço democrático e legitima um modelo em que o poder econômico se sobrepõe à vontade coletiva. A violência, aqui, não é física, mas simbólica e estrutural: mina a confiança nas instituições e naturaliza a exclusão dos cidadãos do debate sobre os rumos do país.",
    badge: "violência institucional"
  },
  {
    num: 3,
    title: "Como a valorização apenas do lucro, acima de qualquer consideração ética ou social, pode comprometer a construção de uma sociedade mais justa?",
    answer: "Uma sociedade justa pressupõe equilíbrio entre eficiência econômica, equidade social e sustentabilidade. A maximização do lucro como único princípio orientador transforma direitos em custos, trabalhadores em variáveis descartáveis e comunidades em obstáculos. No Caso 1, o sistema que permite desvios e manipulações sem fiscalização subverte a própria função social da empresa, criando um ambiente de impunidade que incentiva a repetição do comportamento antiético. O resultado é uma economia de aparência pujante, mas que amplia o fosso entre ricos e pobres e enfraquece os laços de solidariedade, tornando mais distante a construção de uma cidadania plena.",
    badge: "sociedade justa"
  },
  {
    num: 4,
    title: "A crença do CEO na suposta superioridade de suas decisões para a sociedade, sem consulta pública ou supervisão ética, se desdobra em quais reflexos sociais?",
    answer: "Esta crença se manifesta em importantes reflexos estruturais nas esferas políticas, econômicas e sociais:\n\n• Político: Decisões unilaterais com impacto social profundo acabam capturando e influenciando o Estado, subordinando políticas públicas a interesses econômicos setoriais privados em detrimento da soberania e direitos da população mais carente.\n\n• Econômico: A manipulação de balanços, as sonegações e a simulação de lucros desviam recursos valiosos do mercado produtivo e minam a estabilidade das contas nacionais, afetando diretamente pequenas empresas, fornecedores locais e a integridade de fundos de investimento.\n\n• Social: Ao rejeitar mecanismos de participação popular ou regulação independente, fortalece-se o ideal aristocrático de impunidade patronal e a convicção social de que super-ricos e corporações estão acima das leis nacionais e da sã justiça. Com isso, perpetua-se um ambiente onde a própria desigualdade é tida como subproduto natural da meritocracia tecnológica, deixando incólumes canais intocáveis que retroalimentam a pobreza no Brasil.",
    badge: "reflexos sociais"
  }
];

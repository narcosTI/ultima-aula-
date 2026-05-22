import * as React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, BookmarkCheck, FileCheck, Share2, CornerDownRight } from 'lucide-react';
import { CITATIONS_DATA } from '../data';

export default function TheorySection() {
  const [copiedEssay, setCopiedEssay] = React.useState(false);

  const essayText = `A análise do Caso 1 exige articular três categorias centrais: desigualdade estrutural, violência simbólica e corrupção sistêmica. Jessé Souza (2017) demonstra que a desigualdade brasileira não é um acidente do capitalismo, mas um projeto de elite que atualiza privilégios herdados da escravidão. A decisão do CEO de desviar lucros e manipular o mercado se inscreve nessa lógica: ao concentrar ainda mais renda no topo, o executivo reproduz o “pacto antipopular” que Souza identifica como marca da modernização conservadora do país.

Pierre Bourdieu (2012) oferece as lentes da violência simbólica, entendida como a imposição de significações que mascaram as relações de força. Quando o CEO se convence de que suas ações são justificadas porque “contribuiriam para a economia nacional”, ele opera essa violência: naturaliza o próprio privilégio e desqualifica a necessidade de participação democrática, como se a vontade do mercado fosse a expressão mais racional do interesse público. A ausência de supervisão ética e de consulta pública materializa essa dominação, pois retira dos cidadãos o direito de questionar as decisões que moldam suas vidas.

Por fim, a corrupção descrita no caso não é um desvio individual isolado, mas um sintoma de fragilidades institucionais que Speck (2020) analisa como “corrupção de Estado”, na qual agentes econômicos capturam o aparato estatal para benefício privado. A capacidade do CEO de influenciar decisões políticas sem ser identificado exemplifica essa captura. Os dados dos textos do IBGE comprovam que, mesmo com a queda conjuntural da pobreza, a estrutura de concentração de renda permanece intacta — exatamente porque mecanismos como o do Caso 1 blindam as elites da fiscalização e da redistribuição efetiva. Dessa forma, a articulação entre desigualdade historicamente construída, violência simbólica que a legitima e corrupção que a perpetua permite compreender por que iniciativas empresariais aparentemente “modernas” podem aprofundar as mesmas feridas sociais que os indicadores oficiais insistem em revelar.`;

  const copyEssay = () => {
    navigator.clipboard.writeText(essayText).then(() => {
      setCopiedEssay(true);
      setTimeout(() => setCopiedEssay(false), 2000);
    });
  };

  return (
    <section className="scroll-mt-6" id="secao-fundamentacao">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#144e6b] border-l-4 border-[#f4b942] pl-3.5 tracking-tight flex items-center gap-2">
          <span>📚 IV — Fundamentação Teórica e Marco de Referência</span>
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 print:hidden">
          Mapeamento bibliográfico e articulação conceitual baseada em referenciais de sociologia estrutural e política nacional.
        </p>
      </div>

      {/* Bibliographic References Grid */}
      <div className="bg-white border border-[#cbdde6] rounded-3xl p-5 sm:p-6 mb-7 shadow-xs">
        <h3 className="text-sm sm:text-base font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2 print:border-b print:pb-2">
          <BookOpen className="w-5 h-5 text-sky-600 print:hidden" />
          Referências Bibliográficas (Normas Sociais)
        </h3>

        {/* Desktop Styled Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4 font-bold text-[#144e6b] w-1/5">Categoria</th>
                <th className="py-3 px-4 font-semibold text-slate-800">Referência 1 (Classe & História)</th>
                <th className="py-3 px-4 font-semibold text-slate-800">Referência 2 (Sociologia Simbólica)</th>
                <th className="py-3 px-4 font-semibold text-slate-800">Referência 3 (Estrutura Política)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Autoria</td>
                <td className="py-2.5 px-4 font-bold text-[#0b2b3b]">Jessé Souza</td>
                <td className="py-2.5 px-4 font-bold text-[#0b2b3b]">Pierre Bourdieu</td>
                <td className="py-2.5 px-4 font-bold text-[#0b2b3b]">Bruno Wilhelm Speck</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Título</td>
                <td className="py-2.5 px-4 italic text-slate-700">A elite do atraso: Da escravidão a Bolsonaro</td>
                <td className="py-2.5 px-4 italic text-slate-700">O poder simbólico</td>
                <td className="py-2.5 px-4 italic text-slate-700">Corrupção e Estado de Direito no Brasil</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Edição</td>
                <td className="py-2.5 px-4 text-slate-600">1. ed.</td>
                <td className="py-2.5 px-4 text-slate-600">16. ed.</td>
                <td className="py-2.5 px-4 text-slate-600">1. ed.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Cidade</td>
                <td className="py-2.5 px-4 text-slate-600">Rio de Janeiro</td>
                <td className="py-2.5 px-4 text-slate-600">Rio de Janeiro</td>
                <td className="py-2.5 px-4 text-slate-600">São Paulo</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Editora</td>
                <td className="py-2.5 px-4 text-slate-600">Estatégia Brasil</td>
                <td className="py-2.5 px-4 text-slate-600">Bertrand Brasil</td>
                <td className="py-2.5 px-4 text-slate-600">Editora Unesp</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-bold text-slate-500 bg-slate-50/40">Ano</td>
                <td className="py-2.5 px-4 text-slate-600 font-semibold text-[#144e6b]">2017</td>
                <td className="py-2.5 px-4 text-slate-600 font-semibold text-[#144e6b]">2012</td>
                <td className="py-2.5 px-4 text-slate-600 font-semibold text-[#144e6b]">2020</td>
              </tr>
              <tr className="print:hidden">
                <td className="py-3 px-4 font-bold text-slate-500 bg-slate-50/40">Link Acadêmico</td>
                <td className="py-3 px-4">
                  <a 
                    href={CITATIONS_DATA[0].link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium hover:underline text-xs"
                  >
                    Google Books <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-3 px-4">
                  <a 
                    href={CITATIONS_DATA[1].link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium hover:underline text-xs"
                  >
                    Google Books <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
                <td className="py-3 px-4">
                  <a 
                    href={CITATIONS_DATA[2].link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium hover:underline text-xs"
                  >
                    Editora Unesp <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Concept guides / Essay box */}
      <div className="bg-[#fefdf7] border border-[#e9e2cf] rounded-3xl p-6 sm:p-8 shadow-xs relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3.5 border-b border-yellow-200/50">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#a87f28] bg-[#fef7e0] px-2.5 py-0.5 rounded-full border border-yellow-200/60 inline-block mb-1.5">
              Marco Conceitual Integrado
            </span>
            <h4 className="font-bold text-base sm:text-lg text-amber-950 m-0">
              📖 Articulação Sociológica das Categoria de Análise
            </h4>
          </div>

          <button
            onClick={copyEssay}
            className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-[#fef5db] hover:bg-[#fadfa3] px-4 py-2 rounded-xl transition-all self-start sm:self-center print:hidden border border-amber-200"
          >
            {copiedEssay ? (
              <>
                <FileCheck className="w-4 h-4 text-emerald-600" />
                Copiado com Sucesso!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                Copiar Texto Completo
              </>
            )}
          </button>
        </div>

        {/* Essay Text */}
        <div className="text-slate-800 text-sm leading-relaxed sm:text-[15px] space-y-4 font-sans max-w-none">
          <p>
            A análise do Caso 1 exige articular três categorias centrais: <strong className="text-amber-950 font-bold decoration-amber-200 underline decoration-2">desigualdade estrutural</strong>, <strong className="text-amber-950 font-bold decoration-amber-200 underline decoration-2">violência simbólica</strong> e <strong className="text-amber-950 font-bold decoration-amber-200 underline decoration-2">corrupção sistêmica</strong>. Jessé Souza (2017) demonstra que a desigualdade brasileira não é um acidente do capitalismo, mas um projeto de elite que atualiza privilégios herdados da escravidão. A decisão do CEO de desviar lucros e manipular o mercado se inscreve nessa lógica: ao concentrar ainda mais renda no topo, o executivo reproduz o “pacto antipopular” que Souza identifica como marca da modernização conservadora do país.
          </p>
          <p>
            Pierre Bourdieu (2012) oferece as lentes da violência simbólica, entendida como a imposição de significações que mascaram as relações de força. Quando o CEO se convence de que suas ações são justificadas porque “contribuiriam para a economia nacional”, ele opera essa violência: naturaliza o próprio privilégio e desqualifica a necessidade de participação democrática, como se a vontade do mercado fosse a expressão mais racional do interesse público. A ausência de supervisão ética e de consulta pública materializa essa dominação, pois retira dos cidadãos o direito de questionar as decisões que moldam suas vidas.
          </p>
          <p>
            Por fim, a corrupção descrita no caso não é um desvio individual isolado, mas um sintoma de fragilidades institucionais que Speck (2020) analisa como “corrupção de Estado”, na qual agentes econômicos capturam o aparato estatal para benefício privado. A capacidade do CEO de influenciar decisões políticas sem ser identificado exemplifica essa captura. Os dados dos textos do IBGE comprova que, mesmo com a queda conjuntural da pobreza, a estrutura de concentração de renda permanece intacta — exatamente porque mecanismos como o do Caso 1 blindam as elites da fiscalização e da redistribuição efetiva. Dessa forma, a articulação entre desigualdade historicamente construída, violência simbólica que a legitima e corrupção que a perpetua permite compreender por que iniciativas empresariais aparentemente “modernas” podem aprofundar as mesmas feridas sociais que os indicadores oficiais insistem em revelar.
          </p>
        </div>

        {/* Academic Tag line */}
        <div className="mt-6 pt-4 border-t border-yellow-200/50 flex flex-wrap gap-2 items-center text-slate-500 text-xxs font-semibold uppercase print:hidden">
          <span>📚 Conceitos de Apoio:</span>
          <span className="bg-white border border-yellow-250 px-2 py-0.5 rounded-full text-amber-800">Jessé Souza - Elite do Atraso</span>
          <span className="bg-white border border-yellow-250 px-2 py-0.5 rounded-full text-amber-800">Bourdieu - Poder Simbólico</span>
          <span className="bg-white border border-yellow-250 px-2 py-0.5 rounded-full text-amber-800">Speck - Estado de Direito</span>
        </div>

      </div>

    </section>
  );
}

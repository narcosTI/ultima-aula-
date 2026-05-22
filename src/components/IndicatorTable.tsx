import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Info, Eye, AlertCircle, FileText } from 'lucide-react';
import { IndicatorRow } from '../types';
import { INDICATORS_DATA } from '../data';

interface IndicatorTableProps {
  highlightsKey: string[];
  onToggleHighlight: (indicatorName: string) => void;
}

const CATEGORY_LABELS = {
  all: 'Todos Indicadores',
  geral: '📊 Gerais / Linhas',
  regional: '🗺️ Regionais',
  demografia: '👶 Demográficos',
  trabalho: '💼 Mercado de Trabalho',
  jovens: '🎓 Jovens "Nem-Nem"'
};

export default function IndicatorTable({ highlightsKey, onToggleHighlight }: IndicatorTableProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState<keyof typeof CATEGORY_LABELS | 'all'>('all');

  // Filter indicators
  const filteredIndicators = INDICATORS_DATA.filter(row => {
    const matchesCategory = activeCategory === 'all' || row.category === activeCategory;
    const matchesSearch = row.indicator.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          row.text1.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          row.text2.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          row.highlights.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="scroll-mt-6" id="secao-indicadores">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#144e6b] border-l-4 border-[#f4b942] pl-3.5 tracking-tight flex items-center gap-2">
            <span>📊 II — Leitura e Síntese dos Indicadores</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 print:hidden">
            Indicadores de pobreza e extrema pobreza no Brasil (2022–2023). <span className="font-semibold text-sky-600">Clique nas linhas</span> para destacá-las.
          </p>
        </div>

        {/* Search controls */}
        <div className="relative w-full md:w-80 print:hidden">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar indicador ou termo..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#cbdde6] rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-hidden transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none print:hidden">
        {(Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              activeCategory === cat
                ? 'bg-[#144e6b] text-white border-[#144e6b] shadow-xs'
                : 'bg-white text-slate-600 border-[#e2edf2] hover:bg-slate-50'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Responsive table-wrapper */}
      <div className="overflow-hidden border border-[#e0edf2] rounded-2xl bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs sm:text-sm min-w-[700px]">
            <thead>
              <tr className="bg-[#eef3f7] border-b border-[#cde0e8]">
                <th className="py-3 px-4 text-left font-bold text-[#144e6b] w-1/4">Indicador</th>
                <th className="py-3 px-3 text-left font-bold text-[#144e6b] w-1/5">Texto 1 (2022)</th>
                <th className="py-3 px-3 text-left font-bold text-[#144e6b] w-1/5">Texto 2 (2023)</th>
                <th className="py-3 px-3 text-left font-bold text-[#144e6b] w-1/8 text-center">Variação</th>
                <th className="py-3 px-4 text-left font-bold text-[#144e6b] w-1/3">Destaques Adicionais / Análise</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredIndicators.map((row, idx) => {
                  const isHighlighted = highlightsKey.includes(row.indicator);
                  return (
                    <motion.tr
                      key={row.indicator}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.15, delay: idx * 0.02 }}
                      onClick={() => onToggleHighlight(row.indicator)}
                      className={`cursor-pointer group transition-all select-none border-b border-[#e9f0f4] last:border-none ${
                        isHighlighted 
                          ? 'bg-[#fef7e0] font-medium text-slate-900 shadow-inner' 
                          : 'hover:bg-[#f1f6fa]/60'
                      }`}
                    >
                      {/* Name */}
                      <td className="py-3 px-4">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-[#113f57] group-hover:text-blue-700 transition-colors">
                            {row.indicator}
                          </span>
                        </div>
                      </td>

                      {/* Text 1 (2022) */}
                      <td className="py-3 px-3 text-slate-600 font-medium">
                        {row.text1}
                      </td>

                      {/* Text 2 (2023) */}
                      <td className="py-3 px-3 text-slate-800 font-semibold bg-sky-50/20 group-hover:bg-sky-50/45 transition-colors">
                        {row.text2}
                      </td>

                      {/* Variação */}
                      <td className="py-3 px-3 text-center">
                        {row.variation === '—' ? (
                          <span className="text-slate-300 font-bold">—</span>
                        ) : row.variation.startsWith('-') ? (
                          <span className="inline-block bg-emerald-50 text-emerald-700 pointer-events-none rounded-md px-1.5 py-0.5 text-[11px] font-bold border border-emerald-200/50">
                            {row.variation}
                          </span>
                        ) : (
                          <span className="text-slate-600 font-medium">{row.variation}</span>
                        )}
                      </td>

                      {/* Destaques / Análise */}
                      <td className="py-3 px-4 text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                        {row.highlights}
                      </td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>

              {filteredIndicators.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <AlertCircle className="w-8 h-8 text-slate-300" />
                      <p className="font-medium text-sm">Nenhum indicador corresponde à sua busca.</p>
                      <button 
                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                        className="text-xs text-sky-600 hover:underline mt-1 font-semibold"
                      >
                        Limpar filtros e pesquisa
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Synthesis Callout with Beautiful micro-details */}
      <div className="mt-5 bg-gradient-to-r from-[#f1f9fe] to-[#e4f3fd] border-l-6 border-[#1f8cad] p-4 sm:p-5 rounded-2xl shadow-xxs">
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-[#1f8cad]/10 text-[#1f8cad] rounded-lg mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#113e4f]">📌 SÍNTESE INTERPRETATIVA DO ESTUDO</h4>
            <p className="text-[#214352] text-xs sm:text-[13px] leading-relaxed mt-1">
              Ambos os textos revelam queda recente nos índices de pobreza e extrema pobreza, fortemente influenciada pelos programas de transferência de renda. Contudo, permanecem abismos regionais e raciais: Norte e Nordeste concentram as piores taxas, e a população negra está sobrerrepresentada entre os mais pobres e entre os jovens que não estudam nem trabalham. A proteção social impede um cenário ainda mais crítico, mas não elimina as causas estruturais da desigualdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

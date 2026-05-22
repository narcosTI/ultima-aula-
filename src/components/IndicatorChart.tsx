import * as React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, Users, Percent, Sparkles, HelpCircle } from 'lucide-react';

export default function IndicatorChart() {
  const [hoveredBar, setHoveredBar] = React.useState<string | null>(null);

  // Poverty data setup
  const chartData = [
    {
      label: "Linha de Extrema Pobreza",
      key: "extrema",
      subtext: "Menos de R$ 209 per capita/mês",
      color2022: "from-amber-400 to-amber-500",
      color2023: "from-emerald-400 to-emerald-500",
      v2022: 12.7, // M
      pct2022: 5.9,
      v2023: 9.5, // M
      pct2023: 4.4,
      reduction: "-3.2M (-25.2%)"
    },
    {
      label: "Linha Geral de Pobreza",
      key: "pobreza",
      subtext: "Menos de R$ 665 per capita/mês",
      color2022: "from-blue-500 to-indigo-600",
      color2023: "from-teal-400 to-teal-600",
      v2022: 67.8, // M
      pct2022: 31.6,
      v2023: 59.0, // M
      pct2023: 27.4,
      reduction: "-8.8M (-13.0%)"
    }
  ];

  return (
    <div className="bg-white border border-[#cbdde6] rounded-3xl p-5 sm:p-6 mb-11 shadow-xs print:hidden">
      
      {/* Title block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-sky-600 uppercase bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 mb-1.5 inline-block">
            Visualização de Dados IBGE
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2 m-0 leading-tight">
            <TrendingDown className="w-5 h-5 text-emerald-500" />
            Redução Histórica da Vulnerabilidade Social (2022 ➔ 2023)
          </h3>
        </div>
        <div className="flex items-center gap-3.5 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-3 h-3 bg-indigo-500 rounded-xs" /> Ano 2022
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-3 h-3 bg-teal-400 rounded-xs" /> Ano 2023
          </div>
        </div>
      </div>

      {/* Main visualization grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Visual Bars Container */}
        <div className="space-y-6">
          {chartData.map((group) => (
            <div 
              key={group.key} 
              className="bg-slate-50 hover:bg-slate-100/80 p-4 sm:p-5 rounded-2xl border border-slate-100 transition-all shadow-2xs"
            >
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-800">{group.label}</h4>
                  <p className="text-xxs text-slate-400 mt-0.5">{group.subtext}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-100/60 text-emerald-700 font-bold px-2 py-0.5 rounded-md border border-emerald-200/40">
                  {group.reduction}
                </span>
              </div>

              {/* Data comparison bars */}
              <div className="space-y-3.5 mt-4">
                
                {/* 2022 */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium text-slate-500">
                    <span>População (2022): <strong className="text-slate-700 font-bold">{group.v2022}M</strong></span>
                    <span className="font-semibold text-slate-700">{group.pct2022}%</span>
                  </div>
                  <div className="h-3.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${group.pct2022 * 2.5}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-slate-400 rounded-full"
                    />
                  </div>
                </div>

                {/* 2023 */}
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium text-slate-600">
                    <span>População (2023): <strong className="text-[#0b2b3b] font-bold">{group.v2023}M</strong></span>
                    <span className="font-bold text-emerald-600">{group.pct2023}%</span>
                  </div>
                  <div className="h-4.5 w-full bg-slate-200/60 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${group.pct2023 * 2.5}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-sky-400 to-[#1f8cad] rounded-full"
                    />
                    {/* Pulsing indicator */}
                    <div className="absolute right-0 top-0 bottom-0 pr-4 flex items-center pointer-events-none">
                      <Sparkles className="w-3.5 h-3.5 text-white/50 animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Key metrics highlights */}
        <div className="bg-[#f0f6fa] border border-[#d2e5f0] p-5 rounded-2.5xl flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider mb-2">
              💡 Fatos Notáveis do Estudo
            </h4>

            {/* Metric 1 */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-xl">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                <strong>Queda Coletiva:</strong> Um total de <span className="font-bold text-emerald-600">-12,0 milhões</span> de brasileiros deixaram a vulnerabilidade financeira em apenas 12 meses.
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-500/10 text-indigo-600 rounded-xl">
                <Percent className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                <strong>Nível Histórico:</strong> Pela primeira vez desde o início da série histórica do IBGE em 2012, a extrema pobreza desceu abaixo da marca de <span className="font-bold text-indigo-600">5%</span> do contingente total brasileiro.
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-500/10 text-amber-600 rounded-xl">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                <strong>O Papel Crucial do Estado:</strong> O estudo comprova que se não existissem os programas sociais federais, a taxa de pobreza subiria imediatamente para <span className="font-black text-[#0b2b3b]">32,4%</span> e a de extrema pobreza saltaria para <span className="font-black text-red-600">11,2%</span>.
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-[#d2e5f0] pt-4 flex items-center justify-between text-xxs text-slate-400 font-semibold uppercase">
            <span>Fontes: IBGE / Síntese de Indicadores Sociais</span>
            <span>Estudos 2022–2023</span>
          </div>

        </div>

      </div>

    </div>
  );
}

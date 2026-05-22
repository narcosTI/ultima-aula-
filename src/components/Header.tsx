import * as React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Printer, Download, Sparkles } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  onExportJSON: () => void;
}

export default function Header({ onPrint, onExportJSON }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#0b2b3b] via-[#103a4f] to-[#1a4a5f] text-white border-b-4 border-[#f4c542] px-6 py-8 sm:px-10 sm:py-10 print:bg-white print:text-black print:border-b-2 print:border-gray-800 print:p-0">
      {/* Background Decorative Shapes */}
      <div className="absolute right-0 top-0 -mt-12 -mr-12 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none print:hidden" />
      <div className="absolute left-1/3 bottom-0 w-96 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none print:hidden" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 print:hidden">
            <motion.div 
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-yellow-400 text-slate-900 p-1.5 rounded-lg shadow-sm"
            >
              <Award className="w-5 h-5 font-bold" />
            </motion.div>
            <span className="text-xs tracking-wider uppercase font-semibold text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">
              Trabalho Acadêmico Premiado
            </span>
            <span className="text-xs tracking-wider uppercase font-semibold text-cyan-300 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/10">
              Sociologia e Ética
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3.5xl font-black tracking-tight leading-tight uppercase print:text-xl print:m-0"
          >
            Trabalho — Sociedade Brasileira e Cidadania
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base text-slate-200 border-l-4 border-[#f4c542] pl-3 py-0.5 max-w-3xl font-medium print:text-xs print:text-gray-700 print:border-gray-500"
          >
            Análise crítica de desigualdades regionais e raciais, violência institucional estruturada e impacto ético das corporações sobre o território nacional.
          </motion.p>
        </div>

        {/* Dynamic Buttons for desktop interaction */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 print:hidden">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whilePressed={{ scale: 0.98 }}
            onClick={onPrint}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-[#f4b942] hover:from-yellow-500 hover:to-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Imprimir Relatório
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            whilePressed={{ scale: 0.98 }}
            onClick={onExportJSON}
            className="flex items-center gap-2 bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all"
            title="Exportar respostas para backup pessoal"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            Salvar Backup
          </motion.button>
        </div>

      </div>
    </header>
  );
}

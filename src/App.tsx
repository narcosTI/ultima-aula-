import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Printer, 
  HelpCircle, 
  BookmarkCheck, 
  CheckCircle2, 
  ChevronRight, 
  GraduationCap, 
  Info, 
  Sparkles,
  ClipboardCheck,
  Smartphone,
  Check,
  ArrowUp,
  AlertCircle
} from 'lucide-react';

// Components
import Header from './components/Header';
import StudentId from './components/StudentId';
import IndicatorTable from './components/IndicatorTable';
import IndicatorChart from './components/IndicatorChart';
import QuestionsAnswers from './components/QuestionsAnswers';
import TheorySection from './components/TheorySection';
import SelfEvaluation from './components/SelfEvaluation';

// Types
import { StudentInfo } from './types';

export default function App() {
  // Toast notifications state
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  // Load and store Student Info
  const [studentInfo, setStudentInfo] = React.useState<StudentInfo>(() => {
    try {
      const saved = localStorage.getItem('sbc_student_info');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      name: 'Marcos Agirti',
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia Aplicada',
      caseSelected: 'Caso 1 – Empresa multinacional de tecnologia',
      badge: 'lucro x desigualdade'
    };
  });

  // Highlighted indicators key list
  const [highlightsKey, setHighlightsKey] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sbc_highlights_key');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default highlights to make table visually interesting on load
    return [
      "População em extrema pobreza",
      "Efeito dos programas sociais",
      "Jovens 'Nem-Nem' (15 a 29 anos)"
    ];
  });

  // Custom study notes
  const [customNotes, setCustomNotes] = React.useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('sbc_custom_notes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // Self assessment score
  const [score, setScore] = React.useState<number>(() => {
    try {
      const saved = localStorage.getItem('sbc_score');
      if (saved) return Number(saved);
    } catch (e) {
      console.error(e);
    }
    return 5; // Default score
  });

  // Active navigation section tracker for floating sidebar
  const [activeNav, setActiveNav] = React.useState('secao-indicadores');

  // Trigger effect to save state
  React.useEffect(() => {
    localStorage.setItem('sbc_student_info', JSON.stringify(studentInfo));
  }, [studentInfo]);

  React.useEffect(() => {
    localStorage.setItem('sbc_highlights_key', JSON.stringify(highlightsKey));
  }, [highlightsKey]);

  React.useEffect(() => {
    localStorage.setItem('sbc_custom_notes', JSON.stringify(customNotes));
  }, [customNotes]);

  React.useEffect(() => {
    localStorage.setItem('sbc_score', score.toString());
  }, [score]);

  // Handle toast trigger
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Student updates handle
  const handleStudentUpdate = (updated: Partial<StudentInfo>) => {
    setStudentInfo((prev) => ({ ...prev, ...updated }));
    triggerToast("Credenciais acadêmicas atualizadas com sucesso!");
  };

  // Toggle highlight from table
  const handleToggleHighlight = (indicatorName: string) => {
    if (highlightsKey.includes(indicatorName)) {
      setHighlightsKey(highlightsKey.filter(k => k !== indicatorName));
      triggerToast("Destaque removido.");
    } else {
      setHighlightsKey([...highlightsKey, indicatorName]);
      triggerToast("Indicador destacado!");
    }
  };

  // Add notes update
  const handleUpdateNote = (qNum: number, note: string) => {
    setCustomNotes((prev) => ({ ...prev, [qNum]: note }));
    triggerToast(note ? `Anotação salva na Questão ${qNum}!` : `Anotação da Questão ${qNum} removida.`);
  };

  // Action methods
  const handlePrint = () => {
    triggerToast("Configurando documento para impressão...");
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const handleExportJSON = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        studentInfo,
        highlightsKey,
        customNotes,
        score
      }, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `trabalho_sbc_${studentInfo.name.toLowerCase().replace(/\s+/g, '_')}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      triggerToast("Parabéns! Backup acadêmico exportado com sucesso.");
    } catch (e) {
      triggerToast("Erro ao exportar dados.");
    }
  };

  // Layout navigation links
  const NAV_LINKS = [
    { target: 'secao-indicadores', number: 'II', label: 'Tabela IBGE' },
    { target: 'secao-questionamento', number: 'III', label: 'Questionários' },
    { target: 'secao-fundamentacao', number: 'IV', label: 'Fundamentação' },
    { target: 'secao-revisitando', number: 'V', label: 'Autoavaliação' }
  ];

  const scrollToElement = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#eef2f5] text-[#1b2d3f] font-sans relative antialiased print:bg-white print:text-black">
      
      {/* Dynamic Toast Feedback Overlay */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 z-50 bg-[#0b2b3b] text-light border border-sky-400/30 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="p-1 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Check className="w-4.5 h-4.5" strokeWidth={3} />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-tight text-white m-0">
              {toastMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header Actions on Screen Corner for Quick-Access */}
      <div className="fixed top-20 right-6 z-45 flex flex-col gap-2 print:hidden lg:flex hidden">
        <button
          onClick={handlePrint}
          className="p-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#144e6b] rounded-xl shadow-md border border-[#cbdde6] transition-all"
          title="Imprimir Trabalho"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>

      {/* Main Container Envelope */}
      <div className="max-w-7xl mx-auto px-0 sm:px-4 py-0 sm:py-8 print:p-0 print:m-0 print:max-w-none">
        
        <div className="bg-white rounded-none sm:rounded-3xl shadow-xl overflow-hidden border border-slate-100/50 print:border-none print:shadow-none print:rounded-none">
          
          {/* Top Hero Heading */}
          <Header onPrint={handlePrint} onExportJSON={handleExportJSON} />

          {/* Core Body Container divided into Dynamic Side-Rail */}
          <div className="p-4 sm:p-8 lg:p-10 print:p-0">
            
            {/* Academic identification block */}
            <StudentId info={studentInfo} onUpdate={handleStudentUpdate} />

            {/* Structured Dual Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              
              {/* Left Column Floating Table of Contents for seamless interaction */}
              <div className="xl:col-span-1 print:hidden">
                <div className="sticky top-6 space-y-4">
                  
                  {/* Subject and Work Specs card */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 p-4 rounded-2.5xl border border-slate-200/80">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-bold mb-1">
                      Disciplina Acadêmica
                    </span>
                    <h4 className="font-extrabold text-xs text-[#0f3448] uppercase leading-snug">
                      Sociedade Brasileira e Cidadania
                    </h4>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Caso 1 — Multinacional de Tecnologia
                    </span>
                    
                    <div className="mt-4 pt-3 border-t border-slate-200/80 text-xxs text-slate-400 flex flex-wrap gap-1">
                      <span className="bg-white px-2 py-0.5 rounded-full border border-slate-200 uppercase font-bold text-[9px] text-[#294a5a]">
                        Estudo de Pobreza
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded-full border border-slate-200 uppercase font-bold text-[9px] text-[#294a5a]">
                        Ética Corporativa
                      </span>
                    </div>
                  </div>

                  {/* Navigation Rail Buttons */}
                  <div className="bg-white p-2.5 rounded-2.5xl border border-[#e2edf2] space-y-1">
                    <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider px-3.5 pt-2 pb-1">
                      Navegação do Trabalho
                    </span>
                    
                    {NAV_LINKS.map(link => {
                      const isActive = activeNav === link.target;
                      return (
                        <button
                          key={link.target}
                          onClick={() => scrollToElement(link.target)}
                          className={`w-full flex items-center justify-between text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                            isActive 
                              ? 'bg-[#144e6b]/5 text-[#144e6b] border border-sky-200/40' 
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                              isActive ? 'bg-[#144e6b] text-white' : 'bg-slate-100 text-slate-500'
                            }`}>
                              {link.number}
                            </span>
                            <span>{link.label}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                            isActive ? 'rotate-90 text-[#144e6b]' : 'opacity-0'
                          }`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* PDF Tip banner */}
                  <div className="bg-amber-50/50 border border-amber-205 p-3.5 rounded-2xl">
                    <div className="flex gap-2.5">
                      <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg shrink-0 h-fit">
                        <Printer className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-bold text-[11px] text-amber-900 leading-none">Dica de Compilação</h5>
                        <p className="text-[10px] text-slate-600 leading-snug mt-1">
                          Clique em &quot;Imprimir Relatório&quot; para exportar em formato PDF oficial. Todo o menu interativo será ocultado automaticamente!
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Main Content Sections - Takes remaining 3 wide cells */}
              <div className="xl:col-span-3 space-y-12">
                
                {/* Section II: Leitura e Síntese dos textos */}
                <div id="secao-indicadores">
                  <IndicatorTable 
                    highlightsKey={highlightsKey} 
                    onToggleHighlight={handleToggleHighlight} 
                  />
                </div>

                {/* Section II b: Interactive Visualization Chart */}
                <IndicatorChart />

                {/* Section III: Questionamentos Críticos */}
                <div id="secao-questionamento">
                  <QuestionsAnswers 
                    customNotes={customNotes} 
                    onUpdateNote={handleUpdateNote} 
                  />
                </div>

                {/* Section IV: Fundamentação Teórica */}
                <div id="secao-fundamentacao">
                  <TheorySection />
                </div>

                {/* Section V: Revisitando o processo */}
                <div id="secao-revisitando">
                  <SelfEvaluation 
                    score={score} 
                    onUpdateScore={setScore} 
                  />
                </div>

              </div>

            </div>

          </div>

          {/* Academic Footer */}
          <footer className="bg-slate-100 text-center py-6 px-4 border-t border-slate-205 text-xxs font-semibold text-slate-500 uppercase tracking-widest leading-relaxed print:text-black print:border-none print:py-4">
            Sociedade Brasileira e Cidadania – Reflexão sobre estruturas de poder, desigualdades brasileiras, violência institucional e ética corporativa | Trabalho acadêmico
          </footer>

        </div>
      </div>
    </div>
  );
}

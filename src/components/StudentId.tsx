import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, GraduationCap, Building2, Briefcase, Edit3, Check, RefreshCw } from 'lucide-react';
import { StudentInfo } from '../types';

interface StudentIdProps {
  info: StudentInfo;
  onUpdate: (updated: Partial<StudentInfo>) => void;
}

export default function StudentId({ info, onUpdate }: StudentIdProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [nameInput, setNameInput] = React.useState(info.name);
  const [courseInput, setCourseInput] = React.useState(info.course);
  const [instInput, setInstInput] = React.useState(info.institution);

  // Sync inputs if info changed elsewhere
  React.useEffect(() => {
    setNameInput(info.name);
    setCourseInput(info.course);
    setInstInput(info.institution);
  }, [info]);

  const handleSave = () => {
    onUpdate({
      name: nameInput.trim() || '[Seu nome]',
      course: courseInput.trim() || '[Seu curso]',
      institution: instInput.trim() || '[Sua instituição]'
    });
    setIsEditing(false);
  };

  const handleReset = () => {
    setNameInput('Marcos Paulo de Souza Rocha');
    setCourseInput('Análise e Desenvolvimento de Sistemas');
    setInstInput('Faculdade de Tecnologia Aplicada');
  };

  return (
    <div className="bg-[#f8fafc] border border-[#e2edf2] rounded-3xl p-5 sm:p-6 mb-8 relative overflow-hidden shadow-xs print:bg-white print:border-none print:shadow-none print:p-0 print:mb-6">
      
      {/* Decorative vertical line */}
      <div className="absolute left-[3px] top-6 bottom-6 w-[4px] bg-sky-500 rounded-full print:hidden" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Info panel */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Aluno */}
          <div className="bg-white hover:bg-slate-50 transition-colors p-3.5 px-4 rounded-2.5xl border border-[#cbdde6] flex items-center gap-3 print:border-none print:p-0">
            <div className="p-2 bg-slate-100 text-slate-700 rounded-xl print:hidden">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xxs uppercase tracking-wider text-slate-400 font-bold">Aluno(a)</span>
              {isEditing ? (
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="font-bold text-sm text-[#0b2b3b] border-b border-sky-400 focus:outline-hidden w-full bg-transparent py-0.5 mt-0.5"
                  placeholder="Nome do Aluno"
                />
              ) : (
                <span className="block font-bold text-sm text-[#0b2b3b] truncate" title={info.name}>
                  {info.name}
                </span>
              )}
            </div>
          </div>

          {/* Curso */}
          <div className="bg-white hover:bg-slate-50 transition-colors p-3.5 px-4 rounded-2.5xl border border-[#cbdde6] flex items-center gap-3 print:border-none print:p-0">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl print:hidden">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-xxs uppercase tracking-wider text-slate-400 font-bold">Curso</span>
              {isEditing ? (
                <input
                  type="text"
                  value={courseInput}
                  onChange={(e) => setCourseInput(e.target.value)}
                  className="font-bold text-sm text-[#0b2b3b] border-b border-sky-400 focus:outline-hidden w-full bg-transparent py-0.5 mt-0.5"
                  placeholder="Seu curso"
                />
              ) : (
                <span className="block font-bold text-sm text-[#0b2b3b] truncate" title={info.course}>
                  {info.course}
                </span>
              )}
            </div>
          </div>

          {/* Caso Escolhido */}
          <div className="bg-white hover:bg-slate-50 transition-colors p-3.5 px-4 rounded-2.5xl border border-[#cbdde6] flex items-center gap-3 print:border-none print:p-0">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl print:hidden">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-xxs uppercase tracking-wider text-slate-400 font-bold">Caso Escolhido</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-bold text-xs text-[#0b2b3b]">
                  {info.caseSelected}
                </span>
                <span className="inline-block bg-[#f4c54225] border border-amber-300/30 rounded-full text-[10px] px-2 py-0.2 text-amber-800 font-bold whitespace-nowrap">
                  {info.badge}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 lg:border-l lg:border-slate-200 lg:pl-6 print:hidden">
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-2"
                key="editing-controls"
              >
                <button
                  onClick={handleSave}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-xs transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  Salvar
                </button>
                <button
                  onClick={handleReset}
                  className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors"
                  title="Restaurar dados de exemplo"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-500 hover:bg-slate-200 px-3 py-2.5 rounded-xl font-semibold transition-colors"
                >
                  Cancelar
                </button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                key="edit-trigger"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Editar Dados
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

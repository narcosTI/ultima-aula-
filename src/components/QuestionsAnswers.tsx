import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Copy, Check, Edit2, MessageSquare, ShieldAlert } from 'lucide-react';
import { WORK_QUESTIONS } from '../data';

interface QuestionsAnswersProps {
  customNotes: Record<number, string>;
  onUpdateNote: (qNum: number, note: string) => void;
}

export default function QuestionsAnswers({ customNotes, onUpdateNote }: QuestionsAnswersProps) {
  const [expandedQuestions, setExpandedQuestions] = React.useState<number[]>([1, 2, 3, 4]); // all open by default
  const [copiedQuestion, setCopiedQuestion] = React.useState<number | null>(null);
  const [activeNoteEditNum, setActiveNoteEditNum] = React.useState<number | null>(null);
  const [temporaryNote, setTemporaryNote] = React.useState('');

  const toggleExpand = (num: number) => {
    if (expandedQuestions.includes(num)) {
      setExpandedQuestions(expandedQuestions.filter(n => n !== num));
    } else {
      setExpandedQuestions([...expandedQuestions, num]);
    }
  };

  const handleCopy = (num: number, title: string, text: string) => {
    const formattedText = `Pergunta: ${title}\n\nResposta:\n${text}`;
    navigator.clipboard.writeText(formattedText).then(() => {
      setCopiedQuestion(num);
      setTimeout(() => setCopiedQuestion(null), 2000);
    });
  };

  const startEditingNote = (num: number, text: string) => {
    setActiveNoteEditNum(num);
    setTemporaryNote(text);
  };

  const saveNote = (num: number) => {
    onUpdateNote(num, temporaryNote.trim());
    setActiveNoteEditNum(null);
  };

  return (
    <section className="scroll-mt-6" id="secao-questionamento">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#144e6b] border-l-4 border-[#f4b942] pl-3.5 tracking-tight flex items-center gap-2">
          <span>⚖️ III — Questionamentos Críticos (Caso 1)</span>
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 print:hidden">
          Análise ética focada no conflito entre o lucro irrestrito e o desenvolvimento humano sustentável.
        </p>
      </div>

      <div className="space-y-6">
        {WORK_QUESTIONS.map((q) => {
          const isExpanded = expandedQuestions.includes(q.num);
          const hasCopied = copiedQuestion === q.num;
          const currentNote = customNotes[q.num] || '';
          const isEditingThisNote = activeNoteEditNum === q.num;

          return (
            <motion.div
              key={q.num}
              layout="position"
              className="bg-white border border-[#e2edf2] rounded-3xl overflow-hidden shadow-xs hover:border-[#144e6b]/30 transition-all duration-200"
            >
              {/* Question Banner Header */}
              <div 
                onClick={() => toggleExpand(q.num)}
                className="bg-[#fbfefd] border-b border-[#e2edf2] p-4 sm:p-5 flex items-start gap-3.5 cursor-pointer hover:bg-slate-50/50 transition-colors select-none"
              >
                <div className="bg-sky-50 text-sky-800 p-2 rounded-xl mt-0.5 print:hidden">
                  <span className="font-extrabold text-xs">Q{q.num}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm sm:text-[15px] text-[#16455f] leading-snug m-0 pr-6">
                    {q.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 print:hidden">
                    <span className="inline-block bg-[#1f8cad]/10 text-[#1f8cad] text-[10px] font-bold px-2 py-0.2 rounded-md">
                      {q.badge}
                    </span>
                    {currentNote && (
                      <span className="inline-block bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.2 rounded-md border border-indigo-100">
                        Contém anotação
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-slate-400 p-1 hover:text-slate-600 print:hidden">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expandable answers */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-5 sm:p-6 sm:px-8 space-y-4">
                      {/* Main answer text */}
                      <div className="text-slate-700 text-sm leading-relaxed sm:text-[15px] space-y-3.5 border-l-2 border-slate-100 pl-4 print:border-none print:pl-0 whitespace-pre-line">
                        {q.answer}
                      </div>

                      {/* Notes Box Section */}
                      <div className="mt-5 border-t border-slate-100 pt-4 print:hidden">
                        {isEditingThisNote ? (
                          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <label className="block text-xs font-bold text-slate-500 uppercase">
                              Anotações / Extensões do Aluno
                            </label>
                            <textarea
                              rows={3}
                              value={temporaryNote}
                              onChange={(e) => setTemporaryNote(e.target.value)}
                              placeholder="Adicione notas extras, referências locais ou comentários que gostaria de lembrar para a aula..."
                              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs text-slate-700 focus:outline-[#1f8cad]"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => saveNote(q.num)}
                                className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xxs px-3 py-1.5 rounded-md transition-colors"
                              >
                                Confirmar Nota
                              </button>
                              <button
                                onClick={() => setActiveNoteEditNum(null)}
                                className="text-slate-500 hover:bg-slate-200 text-xxs px-3 py-1.5 rounded-md font-semibold transition-colors"
                              >
                                Cancelar
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            {currentNote ? (
                              <div className="bg-indigo-50/40 p-4 rounded-2xl border border-indigo-100 flex items-start gap-2.5">
                                <MessageSquare className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                <div className="flex-1">
                                  <span className="block text-[10px] font-bold text-indigo-800 uppercase tracking-widest leading-none">Minha Anotação</span>
                                  <p className="text-xs text-indigo-900 mt-1 italic whitespace-pre-line">{currentNote}</p>
                                </div>
                                <button
                                  onClick={() => startEditingNote(q.num, currentNote)}
                                  className="text-xxs text-slate-400 hover:text-indigo-600 font-semibold px-2 py-1 rounded-md"
                                >
                                  Editar
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => startEditingNote(q.num, '')}
                                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#1f8cad] text-xs font-semibold py-1 transition-colors bg-slate-50 hover:bg-slate-100 border border-dashed border-slate-300 rounded-xl px-3 w-fit"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                                Adicionar anotações de estudo à resposta...
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Action buttons (only in browser, hidden when printing) */}
                      <div className="mt-5 pt-3.5 border-t border-slate-150 flex items-center justify-end gap-2.5 print:hidden">
                        <button
                          onClick={() => handleCopy(q.num, q.title, q.answer)}
                          className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all border ${
                            hasCopied
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-800'
                          }`}
                        >
                          {hasCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {hasCopied ? 'Resposta Copiada!' : 'Copiar para Trabalho'}
                        </button>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

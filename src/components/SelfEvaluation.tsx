import * as React from 'react';
import { motion } from 'motion/react';
import { Star, FileSignature, CheckCircle, Lightbulb, BookOpen } from 'lucide-react';

interface SelfEvaluationProps {
  score: number;
  onUpdateScore: (score: number) => void;
}

export default function SelfEvaluation({ score, onUpdateScore }: SelfEvaluationProps) {
  const [ratingHover, setRatingHover] = React.useState<number | null>(null);

  const bulletPoints = [
    {
      title: "Consolidação de Dados Reais do IBGE",
      desc: "Sucesso em selecionar, analisar e catalogar indicadores sociais específicos, distinguindo pobreza e extrema pobreza de forma comparada na série histórica."
    },
    {
      title: "Tradução Ética para o Contexto Corporativo",
      desc: "Construção de ressonância lógica entre as fraquezas estruturais do Caso 1 e a realidade brasileira de concentração irrestrita de renda."
    },
    {
      title: "Fundamentação Teórica Articulada",
      desc: "Excelente sinergia metodológica ao fundir os diagnósticos de desigualdade (Jessé), dominação simbólica (Bourdieu) e captura institucional (Speck)."
    }
  ];

  return (
    <section className="scroll-mt-6" id="secao-revisitando">
      
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#144e6b] border-l-4 border-[#f4b942] pl-3.5 tracking-tight flex items-center gap-2">
          <span>✍️ V — Revisitando o Processo de Pesquisa</span>
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 print:hidden">
          Autoavaliação crítica do fluxo de elaboração científica, obstáculos enfrentados e proposição de caminhos futuros.
        </p>
      </div>

      <div className="bg-gradient-to-b from-[#fafcfc] to-[#f4f7f9] border border-[#e0edf2] rounded-3xl p-5 sm:p-7 space-y-6">
        
        {/* Main prose text */}
        <div className="text-slate-700 text-sm leading-relaxed sm:text-[15px] space-y-4">
          <p>
            Realizar este trabalho foi um exercício de conectar dados concretos da realidade brasileira com conceitos sociológicos abstratos. A primeira dificuldade foi selecionar as informações mais relevantes dos textos do IBGE sem me perder na riqueza dos números. A construção da tabela ajudou a visualizar tanto os avanços quanto as subsequentes desigualdades regionais e raciais, que depois serviram de pano de fundo para as respostas do caso.
          </p>
          <p>
            Responder aos questionamentos do Caso 1 exigiu um esforço de “tradução”: como aquela situação hipotética reflete fenômenos reais? Percebi que o desconforto moral do CEO era uma ponta do iceberg; o problema maior estava na estrutura que permite que esse desconforto seja rapidamente neutralizado pela ideologia do lucro. A fundamentação teórica confirmou essa leitura, principalmente o conceito de violência simbólica, que iluminou o modo como a suposta superioridade do CEO se impõe sem precisar de força física.
          </p>
          <p>
            A etapa de pesquisa bibliográfica foi a mais desafiadora, pois foi necessário filtrar obras que realmente dialogassem com as palavras-chave e com o caso escolhido. No fim, a articulação entre Jessé Souza, Bourdieu e Speck se mostrou coerente e produtiva. Como aspecto propositivo, destaco a importância de estudos de caso como este: eles nos tiram da zona de conforto teórico e exigem que a teoria se prove capaz de explicar situações concretas. Se tivesse mais tempo, gostaria de aprofundar a relação entre corrupção empresarial e os indicadores de pobreza regional, quem sabe como tema de um futuro projeto de pesquisa.
          </p>
        </div>

        {/* Dynamic stars and deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[#dce9f0] print:hidden">
          
          {/* Star selector */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 block">
              Autoavaliação Global
            </span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => onUpdateScore(star)}
                  onMouseEnter={() => setRatingHover(star)}
                  onMouseLeave={() => setRatingHover(null)}
                  className="p-1 hover:scale-110 transition-transform text-amber-400"
                >
                  <Star
                    className="w-5 h-5 transition-colors"
                    fill={(ratingHover !== null ? star <= ratingHover : star <= score) ? "#fbbf24" : "none"}
                    stroke={star <= (ratingHover ?? score) ? "#d97706" : "#cbd5e1"}
                  />
                </button>
              ))}
            </div>
            <span className="text-xxs text-slate-500 font-bold mt-2">
              Pontuação: {score}/5.0 acadêmica
            </span>
          </div>

          {/* Core outcomes widget */}
          <div className="md:col-span-2 space-y-3.5 bg-sky-50/20 border border-sky-100/50 p-4 rounded-2xl">
            <span className="text-[10.5px] uppercase font-bold text-sky-850 tracking-wider block">
              💡 Principais Marcos de Aprendizado
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {bulletPoints.map((point, index) => (
                <div key={index} className="bg-white p-2.5 rounded-xl border border-sky-100 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-1 text-sky-700">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-bold text-[11px] leading-tight line-clamp-1">{point.title}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-snug line-clamp-3">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <hr className="border-t border-[#dce9f0]" />

        <div className="text-center text-xxs text-slate-400 font-bold tracking-wider pt-2 flex items-center justify-center gap-1 print:text-black">
          <span>📌 TRABALHO CONSTRUÍDO COM BASE NOS DADOS DO IBGE (2022/2023) E NO CASO 1 — EMPRESA MULTINACIONAL</span>
        </div>

      </div>

    </section>
  );
}

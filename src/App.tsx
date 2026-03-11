/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Heart, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  MapPin,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Data ---
const EXPERT_DATA = {
  name: "As Gêmeas Dentistas",
  experts: ["Pri Schebeski", "Sa Schebeski"],
  profession: "Especialistas em Odontopediatria",
  city: "Ponta Grossa",
  whatsapp: "5542999834983", // Formatted for link
  whatsappDisplay: "(42) 99983-4983",
  instagram: "https://www.instagram.com/asgemeas.dentistas/",
  facebook: "https://www.facebook.com/gemeasdentistas/",
  address: "R. Antônio João, 442 - Órfãs, Ponta Grossa - PR, 84015-370",
  heroImage: "https://i.imgur.com/Xkp3wnd.png",
  authorityImage: "https://i.imgur.com/rP0B6lR.png",
  results: [
    "https://i.imgur.com/Fpw2kZU.png",
    "https://i.imgur.com/JxwvQDy.png",
    "https://i.imgur.com/S61f1YS.png",
    "https://i.imgur.com/kDROGrV.png",
    "https://i.imgur.com/p8oqSsd.png",
    "https://i.imgur.com/V0KFlZN.png",
    "https://i.imgur.com/x4PHNjg.png",
    "https://i.imgur.com/ITEPD8V.png",
    "https://i.imgur.com/ZxGtRcL.png",
    "https://i.imgur.com/E3kq0WZ.png"
  ]
};

const WHATSAPP_LINK = `https://wa.me/${EXPERT_DATA.whatsapp}?text=Olá! Gostaria de agendar minha primeira consulta gratuita.`;

// --- Components ---

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-10 text-center">
    {subtitle && (
      <span className={`text-xs font-bold uppercase tracking-widest ${light ? 'text-white/70' : 'text-emerald-600'} mb-2 block`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-white' : 'text-slate-900'}`}>
      {children}
    </h2>
  </div>
);

const WhatsAppButton = ({ className = "", children = "Agendar primeira consulta gratuita" }: { className?: string, children?: React.ReactNode }) => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all cta-shadow ${className}`}
  >
    <MessageCircle className="w-6 h-6 fill-current" />
    {children}
  </motion.a>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden premium-gradient">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Especialistas em Sorrisos Infantis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Nós Somos as <span className="text-emerald-600 italic">Dentistas Gêmeas</span>, as suas dentistas de Ponta Grossa.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Transformamos a ida ao dentista em uma experiência mágica e segura para o seu filho. Comece hoje com uma avaliação completa.
            </p>
            
            <div className="space-y-4">
              <WhatsAppButton />
              <p className="text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={EXPERT_DATA.heroImage} 
                alt="Pri e Sa Schebeski" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full -z-0 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full -z-0 blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO AM I (Authority) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle subtitle="Autoridade e Cuidado">Quem somos nós</SectionTitle>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Olá! Somos a Pri e a Sa Schebeski. Mais do que dentistas, somos apaixonadas por cuidar do futuro de cada criança que passa por nossas mãos.
              </p>
              <p>
                Nossa missão é garantir que cada pequeno paciente sinta-se em casa, perdendo o medo e ganhando um sorriso saudável para a vida toda.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Especialistas em Odontopediatria",
                  "Atendimento humanizado e lúdico",
                  "Foco total na prevenção e bem-estar",
                  "Ambiente preparado para todas as idades"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-600 rounded-[2rem] rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
              <img 
                src={EXPERT_DATA.authorityImage} 
                alt="Bastidores do atendimento" 
                className="relative z-10 rounded-[2rem] shadow-xl w-full h-auto object-cover -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTS (Gallery) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Transformações">Resultados Reais</SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {EXPERT_DATA.results.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm cursor-pointer border-4 border-white"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-400 text-sm italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. WHY TRUST ME */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Diferenciais">Por que confiar em nós?</SectionTitle>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                title: "Avaliação Honesta",
                desc: "Transparência total em cada diagnóstico, priorizando sempre o que é melhor para a criança."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
                title: "Atendimento Direto",
                desc: "Sem burocracia. Você fala diretamente conosco para tirar dúvidas e agendar."
              },
              {
                icon: <Heart className="w-8 h-8 text-emerald-600" />,
                title: "Foco no Bem-estar",
                desc: "Tratamentos pensados para serem indolores e tranquilos, respeitando o tempo de cada um."
              },
              {
                icon: <Star className="w-8 h-8 text-emerald-600" />,
                title: "Especialização Real",
                desc: "Anos de estudo focados exclusivamente na saúde bucal de bebês, crianças e adolescentes."
              },
              {
                icon: <Calendar className="w-8 h-8 text-emerald-600" />,
                title: "Horários Flexíveis",
                desc: "Entendemos a rotina dos pais e oferecemos opções que se encaixam no seu dia a dia."
              },
              {
                icon: <MapPin className="w-8 h-8 text-emerald-600" />,
                title: "Localização Fácil",
                desc: "Consultório moderno e acessível no coração de Ponta Grossa."
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-emerald-50 transition-colors duration-300 border border-slate-100">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERMEDIATE CTA */}
      <section className="py-20 px-6 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Não deixe a saúde do seu filho para depois.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            A primeira consulta é o passo mais importante para um futuro sem cáries e sem traumas. Agende agora de forma gratuita.
          </p>
          <WhatsAppButton className="bg-white !text-emerald-700 hover:bg-emerald-50 shadow-xl mx-auto inline-flex">
            Quero agendar minha consulta gratuita
          </WhatsAppButton>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Passo a Passo">Como funciona a primeira consulta</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "WhatsApp",
                desc: "Clique no botão e envie uma mensagem. Nossa equipe responderá rapidamente."
              },
              {
                step: "02",
                title: "Agendamento",
                desc: "Escolhemos juntos o melhor dia e horário para você e seu filho."
              },
              {
                step: "03",
                title: "Avaliação",
                desc: "Realizamos uma análise completa e tiramos todas as suas dúvidas sem custo."
              }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <span className="text-6xl font-serif font-black text-emerald-50 opacity-10 absolute -top-8 left-1/2 -translate-x-1/2 z-0">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
            <p className="text-emerald-800 font-medium flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Lembre-se: A primeira consulta é 100% gratuita e sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* 7. MORE PROOF (Expert + Behind the scenes) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Nosso Dia a Dia">Atendimento Personalizado</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-video md:aspect-auto">
              <img 
                src={EXPERT_DATA.authorityImage} 
                alt="Atendimento lúdico" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-slate-700 italic">
                  "O segredo está no detalhe. Cada criança é única e merece um tempo de adaptação para se sentir segura."
                </p>
                <span className="block mt-4 font-bold text-emerald-600">— Pri Schebeski</span>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-slate-700 italic">
                  "Ver um sorriso sem medo é a nossa maior recompensa. Trabalhamos para que o dentista seja o melhor amigo da saúde do seu filho."
                </p>
                <span className="block mt-4 font-bold text-emerald-600">— Sa Schebeski</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Pronto para dar ao seu filho o sorriso que ele merece?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Clique no botão abaixo e garanta agora a sua <span className="text-emerald-600 font-bold underline decoration-emerald-200 underline-offset-4">primeira consulta gratuita</span>. Vagas limitadas por semana!
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <WhatsAppButton className="w-full sm:w-auto px-12 py-6 text-xl shadow-2xl" />
              <div className="flex items-center gap-8 text-slate-400">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">+500 famílias atendidas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">{EXPERT_DATA.name}</h3>
            <p className="text-slate-400 mb-6">
              {EXPERT_DATA.profession}<br />
              {EXPERT_DATA.city} - PR
            </p>
            <div className="flex gap-4">
              <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={EXPERT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-slate-500">Onde estamos</h4>
            <p className="text-slate-400 flex items-start gap-2">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              {EXPERT_DATA.address}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-slate-500">Contato</h4>
            <p className="text-slate-400 mb-2">WhatsApp: {EXPERT_DATA.whatsappDisplay}</p>
            <p className="text-slate-400">Ponta Grossa, Paraná</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl cta-shadow"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.a>
      </div>

    </div>
  );
}

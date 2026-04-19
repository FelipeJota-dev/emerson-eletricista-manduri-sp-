import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  X,
  Menu,
  Star,
  Zap,
  ShieldCheck,
  Wrench,
  ThumbsUp,
  MapPinHouse,
  Facebook,
  Cable,
  UtilityPole,
  PanelTop,
  Fan,
  Mic,
  Snowflake
} from 'lucide-react';

const WHATSAPP_NUMBER = "5514997524980";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+de+eletricista.`;

const serviceImages = [
  "https://i.imgur.com/APWYSH2.png",
  "https://i.imgur.com/76B5yYe.png",
  "https://i.imgur.com/tC1TutY.png",
  "https://i.imgur.com/nXomYUf.png",
  "https://i.imgur.com/ZvSz4Ko.png",
  "https://i.imgur.com/Xz47Ful.png",
  "https://i.imgur.com/1oe76Hh.png",
  "https://i.imgur.com/hFouG9s.png",
  "https://i.imgur.com/fWkRubW.png",
  "https://i.imgur.com/wX8F4PE.png",
  "https://i.imgur.com/Buso6kE.png",
  "https://i.imgur.com/MiiHRwg.png",
  "https://i.imgur.com/PsUVc4N.png",
  "https://i.imgur.com/mOPuZMk.png",
  "https://i.imgur.com/EMUhw4W.png"
];

const services = [
  { name: "Instalações elétricas residenciais e comerciais", icon: Cable },
  { name: "Baixa tensão rural", icon: UtilityPole },
  { name: "Ligações de telefone", icon: Phone },
  { name: "Montagem de padrão", icon: PanelTop },
  { name: "Instalação de ventiladores", icon: Fan },
  { name: "Interfones", icon: Mic },
  { name: "Ar condicionado", icon: Snowflake },
  { name: "Manutenção elétrica geral", icon: Wrench }
];

const reviews = [
  { text: "Pontualidade e profissionalismo excelentes", author: "João Silva" },
  { text: "Serviço de qualidade e preço justo", author: "Maria Oliveira" },
  { text: "Atendimento rápido e confiável", author: "Carlos Santos" }
];

const faqs = [
  { q: "Vocês atendem emergências?", a: "Sim! Trabalhamos com atendimento 24 horas para garantir sua segurança em qualquer momento." },
  { q: "Qual o tempo de atendimento?", a: "Chegamos o mais rápido possível na região de Manduri, geralmente em menos de 30 minutos em casos de emergência." },
  { q: "Trabalham com instalações completas?", a: "Sim, fazemos desde pequenos reparos até instalações completas residenciais e comerciais." },
  { q: "Atendem zona rural?", a: "Sim, atendemos propriedades rurais com serviços de baixa tensão e manutenção geral." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [certLightboxOpen, setCertLightboxOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [viewers, setViewers] = useState(5);

  // Viewers simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => Math.max(3, Math.min(12, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Popup logic
  useEffect(() => {
    const timer1 = setTimeout(() => setShowPopup(true), 120000); // 2 mins
    return () => clearTimeout(timer1);
  }, []);

  const closePopupAndReset = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 120000);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightBoxImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % serviceImages.length : null);
  const prevLightBoxImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + serviceImages.length) % serviceImages.length : null);

  const CTAButton = ({ text, className = "" }: { text: string, className?: string }) => (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-electric-blue hover:bg-energy-red text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(30,144,255,0.5)] hover:shadow-[0_0_20px_rgba(211,47,47,0.6)] transform hover:-translate-y-1 ${className}`}
    >
      <Phone className="w-5 h-5 mr-2 animate-pulse" />
      {text}
    </a>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F3A]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://i.imgur.com/I4jRNZc.png" alt="Emerson Eletricista Logo" className="h-12 w-auto rounded-full border-2 border-electric-blue" />
            <div>
              <h1 className="text-xl font-bold font-heading">Emerson Eletricista</h1>
              <div className="flex items-center text-sm text-electric-blue font-semibold">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-energy-red"></span>
                </span>
                Atendimento 24h
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="hover:text-electric-blue transition-colors">Sobre</a>
            <a href="#certificacao" className="hover:text-electric-blue transition-colors">Certificação</a>
            <a href="#servicos" className="hover:text-electric-blue transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-electric-blue transition-colors">Diferenciais</a>
            <a href="#faq" className="hover:text-electric-blue transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-electric-blue transition-colors">Contato</a>
          </nav>

          <div className="hidden md:block">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-electric-blue hover:bg-energy-red px-6 py-2.5 rounded-full font-bold transition-colors inline-block">
              Fale Conosco
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0A192F] overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 space-y-4">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg">Sobre</a>
                <a href="#certificacao" onClick={() => setIsMenuOpen(false)} className="text-lg">Certificação</a>
                <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg">Serviços</a>
                <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg">Diferenciais</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg">FAQ</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg">Contato</a>
                <a href={WHATSAPP_LINK} onClick={() => setIsMenuOpen(false)} className="bg-electric-blue text-center py-3 rounded-full font-bold">
                  Fale Conosco agora
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center md:py-20 py-12">
          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-8"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-energy-red/10 border border-energy-red/20 text-energy-red font-bold uppercase tracking-wider text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Atendimento 24h
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  Eletricista em Manduri SP 24h <span className="text-electric-blue block mt-2">– Atendimento Rápido e Profissional</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Instalações, manutenção e soluções elétricas com segurança e qualidade. Precisou? Chegamos rápido!
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <CTAButton text="Chamar no WhatsApp agora" className="w-full sm:w-auto" />
                </div>
                
                <div className="flex items-center gap-4 pt-4 text-sm text-gray-400">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B1F3A] bg-gray-600 flex items-center justify-center text-xs font-bold overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p>Mais de <strong className="text-white">500+</strong> clientes satisfeitos na região</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent rounded-2xl"></div>
                  <img src="https://i.imgur.com/07kpuo7.jpeg" alt="Trabalho de eletricista" className="w-full object-cover rounded-2xl shadow-2xl border border-gray-800" />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -left-6 bg-dark-gray p-4 rounded-xl border border-gray-700 shadow-xl flex items-center gap-4 animate-bounce hover:animate-none">
                    <div className="bg-green-500/20 p-3 rounded-full text-green-500">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold">Serviço 100%</p>
                      <p className="text-sm text-gray-400">Garantido & Seguro</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 bg-dark-gray/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12"
              >
                <img src="https://i.imgur.com/I4jRNZc.png" alt="Emerson Eletricista" className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl border border-electric-blue/30" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-7/12 space-y-6"
              >
                <h3 className="text-electric-blue font-bold tracking-wider uppercase">Sobre Nós</h3>
                <h2 className="text-4xl font-bold">Soluções elétricas com segurança e experiência.</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Emerson Eletricista</strong> é especialista em serviços elétricos residenciais, comerciais e rurais, oferecendo soluções seguras, rápidas e com excelente custo-benefício.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Atendemos Manduri e toda a região com compromisso, profissionalismo e pontualidade, garantindo que sua casa ou empresa funcione perfeitamente sem riscos elétricos.
                </p>
                <div className="pt-6">
                  <CTAButton text="Fale com Emerson agora" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CERTIFICAÇÃO */}
        <section id="certificacao" className="py-20 bg-dark-blue border-y border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Certificação Profissional</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Profissional qualificado com certificação na área elétrica, garantindo serviços seguros, dentro das normas e com alto padrão de qualidade.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="max-w-xl mx-auto cursor-pointer rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(30,144,255,0.2)] border-2 border-electric-blue/30"
              onClick={() => setCertLightboxOpen(true)}
            >
              <img src="https://i.imgur.com/RxGwUbL.jpeg" alt="Certificado Profissional" className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </section>

        {/* SERVIÇOS & GALERIA */}
        <section id="servicos" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-electric-blue font-bold tracking-wider uppercase mb-2">Nossos Serviços</h3>
              <h2 className="text-4xl font-bold mb-6">Tudo que você precisa em elétrica</h2>
              <p className="text-gray-400 text-lg">Especialidade em alta e baixa tensão para resolver o seu problema na hora que você mais precisa.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-gray p-6 rounded-2xl border border-gray-800 hover:border-electric-blue/50 group cursor-default hover:-translate-y-[6px] hover:scale-[1.03] transition-all duration-300 ease-out"
                >
                  <div className="bg-electric-blue/10 w-12 h-12 rounded-xl flex items-center justify-center text-electric-blue mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(30,144,255,0.6)] transition-all duration-300 ease-out">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{service.name}</h4>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">Galeria Profissional do Nosso Trabalho</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4">
              {serviceImages.slice(0, 10).map((src, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img src={src} alt={`Serviço ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
               <CTAButton text="Solicite seu Orçamento Gratuito" />
            </div>
          </div>
        </section>

        {/* FACEBOOK CTA */}
        <section className="py-16 bg-white/5 border-y border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-3">Quer ver mais serviços realizados?</h2>
            <p className="text-gray-400 text-lg mb-8">Acesse nosso Facebook e confira mais trabalhos reais</p>
            <a 
              href="https://www.facebook.com/p/Emerson-Eletricista-100067402749524/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-electric-blue hover:bg-energy-red text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(30,144,255,0.5)] hover:shadow-[0_0_20px_rgba(211,47,47,0.6)] transform hover:-translate-y-1"
            >
              <Facebook className="w-5 h-5 mr-3" />
              Ver mais serviços
            </a>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="py-20 bg-electric-blue">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="text-5xl font-bold">4,8</span>
                  <div className="flex text-yellow-300">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-6 h-6 ${i === 4 ? 'opacity-50' : ''}`} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-xl opacity-90 font-medium">Avaliação no Google (6 avaliações)</p>
              </div>
              
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="flex text-yellow-300 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="currentColor" />)}
                    </div>
                    <p className="text-lg font-medium mb-4">"{review.text}"</p>
                    <p className="text-sm opacity-80">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="py-24">
          <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">Por que escolher o Emerson Eletricista?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Atendimento 24 horas", desc: "Sempre prontos para qualquer emergência, dia ou noite." },
                { icon: MapPinHouse, title: "Residencial, Comercial e Rural", desc: "Especialistas em diferentes tipos de infraestrutura." },
                { icon: Wrench, title: "Profissional Experiente", desc: "Anos de prática garantindo instalações impecáveis." },
                { icon: ThumbsUp, title: "Preço Justo", desc: "Qualidade de ponta com um custo que cabe no seu bolso." },
                { icon: Zap, title: "Agilidade no Atendimento", desc: "Chegamos rápido para você não ficar no escuro." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 bg-dark-gray rounded-2xl">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-electric-blue/20 text-electric-blue flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-dark-gray/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-dark-gray rounded-2xl p-6 border border-gray-800">
                  <h4 className="text-xl font-bold mb-3 text-electric-blue">{faq.q}</h4>
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl mb-6">Ainda tem dúvidas?</p>
              <CTAButton text="Tire suas dúvidas no WhatsApp" />
            </div>
          </div>
        </section>

        {/* CONTATO & MAPA */}
        <section id="contato" className="py-24 bg-dark-blue/80">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-300">Atendimento rápido, fale agora e solicite seu orçamento sem compromisso</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 bg-dark-gray/60 p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
                    <div className="bg-electric-blue/20 p-4 rounded-full text-electric-blue">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">WhatsApp / Telefone</p>
                      <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-2xl font-bold hover:text-electric-blue transition-colors block">
                        +55 14 99752-4980
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 bg-black/40 p-6 rounded-2xl border border-gray-800">
                    <div className="bg-energy-red/20 p-4 rounded-full text-energy-red">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Endereço (Manduri - SP)</p>
                      <p className="text-lg font-medium text-white">Av. Emílio Tozoni, 1061 - Centro<br/>CEP: 18780-000</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <CTAButton text="Falar no WhatsApp" className="w-full sm:w-auto text-lg py-5 px-10" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-gray-700 shadow-xl relative group">
                <div className="absolute inset-0 bg-electric-blue/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Av.%20Em%C3%ADlio%20Tozoni,%201061%20-%20Centro,%20Manduri%20-%20SP,%2018780-000+(Emerson%20Eletricista)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização Emerson Eletricista"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl font-bold">Emerson Eletricista</h2>
          <p className="text-gray-400">Atendimento rápido, seguro e profissional em toda a região.</p>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-gray-400">Manduri - SP</span>
          </div>
          <div className="pt-4 border-t border-gray-800 text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Emerson Eletricista. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 md:bottom-10 md:right-10 flex items-center group"
      >
        <span className="absolute right-full mr-4 bg-white text-black text-sm font-bold py-2 px-4 rounded-xl shadow-lg whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
          Dúvidas? Fale conosco!
        </span>
        <Phone className="w-8 h-8" />
      </a>

      {/* SOCIAL PROOF WIDGET */}
      <div className="fixed bottom-6 left-6 z-40 bg-dark-gray/90 backdrop-blur-sm border border-gray-700 p-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in pointer-events-none hidden md:flex">
         <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="text-sm font-medium"><strong className="text-white">{viewers} pessoas</strong> vendo este site agora</p>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lightbox-overlay flex flex-col pt-4 items-center justify-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-energy-red transition-colors z-[110]"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-4">
               <button onClick={(e) => { e.stopPropagation(); prevLightBoxImage(); }} className="absolute left-4 md:left-10 text-white hover:text-electric-blue z-[110] p-2 bg-black/50 rounded-full">
                 <ChevronLeft className="w-12 h-12" />
               </button>
               <motion.img 
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={serviceImages[lightboxIndex]} 
                  alt="Serviço" 
                  className="max-w-full max-h-full object-contain rounded-md shadow-2xl z-[100]" 
               />
               <button onClick={(e) => { e.stopPropagation(); nextLightBoxImage(); }} className="absolute right-4 md:right-10 text-white hover:text-electric-blue z-[110] p-2 bg-black/50 rounded-full">
                 <ChevronRight className="w-12 h-12" />
               </button>
            </div>
            <div className="absolute bottom-6 text-white font-medium tracking-widest text-lg">
              {lightboxIndex + 1} / {serviceImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {certLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setCertLightboxOpen(false)}
          >
            <button 
              onClick={() => setCertLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-energy-red transition-colors z-[110]"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src="https://i.imgur.com/RxGwUbL.jpeg" 
              alt="Certificado Profissional Expandido" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(30,144,255,0.4)] relative z-[105]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP LEAD */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-4 md:right-10 z-[60] bg-[#1A1A1A] p-6 rounded-2xl shadow-2xl border border-electric-blue max-w-[320px]"
          >
            <button onClick={closePopupAndReset} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-energy-red p-2 rounded-full text-white">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg leading-tight">Precisa de um<br/>orçamento rápido?</h4>
            </div>
            <p className="text-gray-400 text-sm mb-5">Atendimento 24h. Fale direto com o Emerson pelo WhatsApp agora mesmo.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopupAndReset}
              className="block text-center bg-electric-blue hover:bg-energy-red text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm"
            >
              Sim, quero falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

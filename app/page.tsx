"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check,
  ChevronDown, Code2, Layers3, Menu, MousePointer2, Sparkles,
  X, Zap
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "MAJÚ & MALÚ",
    type: "Experiência gastronômica",
    description: "Cardápio digital pensado para abrir o apetite e transformar visitas em pedidos.",
    tags: ["Digital menu", "Mobile first"],
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1500&q=85",
    className: "project-food"
  },
  {
    number: "02",
    name: "ANA HELENA",
    type: "Presença digital para saúde",
    description: "Uma presença elegante, acolhedora e objetiva para aproximar profissionais e pacientes.",
    tags: ["Landing page", "Healthcare"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1500&q=85",
    className: "project-health"
  },
  {
    number: "03",
    name: "DICA MINEIRA",
    type: "Vitrine de produtos",
    description: "Catálogo digital que organiza produtos e facilita a jornada de compra.",
    tags: ["Catalog", "Conversion"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1500&q=85",
    className: "project-catalog"
  }
];

const services = [
  { n: "01", title: "Sites institucionais", text: "Credibilidade, posicionamento e uma presença digital à altura da sua marca.", icon: Layers3 },
  { n: "02", title: "Landing pages", text: "Páginas construídas para apresentar, convencer e gerar oportunidades.", icon: MousePointer2 },
  { n: "03", title: "Catálogos & cardápios", text: "Vitrines digitais rápidas, intuitivas e preparadas para o mobile.", icon: Sparkles },
  { n: "04", title: "Experiências sob medida", text: "Interfaces e soluções web desenhadas para necessidades específicas.", icon: Code2 }
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.18 } };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span className="pulse-dot" /> DIGITAL STUDIO · SALVADOR, BRASIL
        <span className="announcement-right">ESTRATÉGIA + DESIGN + TECNOLOGIA</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="NotaNFC+ início">
          <span className="brand-symbol">N<span>+</span></span>
          <span className="brand-name">nota<span>NFC</span><b>+</b><small>DIGITAL STUDIO</small></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#servicos" onClick={closeMenu}>O que fazemos</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
          <a href="#sobre" onClick={closeMenu}>Estúdio</a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowUpRight size={16} /></a>
        <button className="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero dark-section" id="inicio">
        <div className="hero-grid" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-content">
          <motion.div className="eyebrow light" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>
            <span className="eyebrow-line" /> DESIGN DIGITAL COM INTENÇÃO
          </motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .2 }}>
            Sua marca merece<br />um <span className="hero-outline">outro</span> nível<span className="blue-period">.</span>
          </motion.h1>
          <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65, duration: .8 }}>
            <p>Transformamos ideias em experiências digitais que posicionam marcas, conectam pessoas e movimentam negócios.</p>
            <a className="round-link" href="#projetos" aria-label="Explorar projetos"><ArrowDownRight /></a>
            <div className="hero-index"><span>01 / 06</span><i /></div>
          </motion.div>
        </div>
        <div className="hero-art" aria-label="Composição abstrata de identidade digital">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="art-core"><span>N</span><i>+</i></div>
          <div className="art-chip chip-top"><Zap size={14} /> DIGITAL CRAFT</div>
          <div className="art-chip chip-bottom">IDEIAS EM MOVIMENTO <ArrowUpRight size={13} /></div>
          <span className="art-cross cross-one">✳</span><span className="art-cross cross-two">✳</span>
        </div>
        <div className="hero-foot"><span>SCROLL PARA EXPLORAR</span><span>NOTANFC+ © 2026</span></div>
      </section>

      <section className="intro-section light-section" id="sobre">
        <motion.div className="section-kicker" {...reveal}><span>01 — QUEM SOMOS</span><Asterisk size={18} /></motion.div>
        <div className="intro-layout">
          <motion.h2 {...reveal}>Não fazemos<br />mais do <em>mesmo.</em></motion.h2>
          <motion.div className="intro-copy" {...reveal}>
            <p className="lead">Acreditamos que uma boa experiência digital muda a forma como uma marca é percebida.</p>
            <p>Unimos estratégia, design e desenvolvimento para criar soluções que fazem sentido para pessoas e para negócios. Cada detalhe tem um propósito. Cada interação tem uma intenção.</p>
            <a className="text-link" href="#processo">Conheça nosso jeito de criar <ArrowUpRight size={16} /></a>
          </motion.div>
        </div>
        <div className="capability-strip">
          <span>ESTRATÉGIA DIGITAL</span><i>✳</i><span>UI / UX DESIGN</span><i>✳</i><span>DESENVOLVIMENTO</span><i>✳</i><span>PERFORMANCE</span><i>✳</i><span>CONVERSÃO</span>
        </div>
      </section>

      <section className="work-section dark-section" id="projetos">
        <div className="section-kicker light"><span>02 — SELEÇÃO DE PROJETOS</span><Asterisk size={18} /></div>
        <div className="work-heading">
          <h2>Feito para<br /><em>ser lembrado.</em></h2>
          <p>Ideias diferentes pedem soluções únicas. Explore uma seleção de experiências digitais desenvolvidas com intenção e personalidade.</p>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.number} initial={reduceMotion ? false : { opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, delay: index * .08 }}>
              <div className={`project-visual ${project.className}`}>
                <div className="project-topline"><span>NOTANFC+ / SELECTED WORK</span><span>{project.number} — 03</span></div>
                <div className="project-image-wrap"><img src={project.image} alt={`Referência visual do projeto ${project.name}`} loading="lazy" /></div>
                <div className="project-overlay">
                  <span>EXPERIÊNCIA DIGITAL</span><strong>{project.name}</strong>
                  <div className="project-window"><div className="window-bar"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(" ", "")}.com.br</span></div><div className="window-content"><b>{index === 0 ? "Sabor que aproxima." : index === 1 ? "Cuidado em cada detalhe." : "Sua próxima descoberta."}</b><small>DESIGN · ESTRATÉGIA · DIGITAL</small></div></div>
                </div>
                <span className="project-asterisk">✳</span>
              </div>
              <div className="project-info">
                <div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div>
                <div className="project-meta"><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="work-note"><span>PROJETOS SELECIONADOS</span><span>DESIGN COM PROPÓSITO. RESULTADO COM DIREÇÃO.</span></div>
      </section>

      <section className="services-section light-section" id="servicos">
        <div className="section-kicker"><span>03 — O QUE FAZEMOS</span><Asterisk size={18} /></div>
        <div className="services-heading"><h2>Do primeiro clique<br />ao <em>próximo passo.</em></h2><p>Ferramentas digitais para marcas que querem crescer com clareza, personalidade e performance.</p></div>
        <div className="services-list">
          {services.map((service) => {
            const Icon = service.icon;
            return <motion.div className="service-row" key={service.n} {...reveal}>
              <span className="service-number">{service.n}</span><div className="service-icon"><Icon size={22} strokeWidth={1.5} /></div>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-arrow" />
            </motion.div>;
          })}
        </div>
      </section>

      <section className="manifesto-section dark-section" id="processo">
        <div className="manifesto-orb" />
        <div className="section-kicker light"><span>04 — NOSSO PROCESSO</span><Asterisk size={18} /></div>
        <div className="manifesto-content">
          <span className="manifesto-label">MENOS RUÍDO. MAIS INTENÇÃO.</span>
          <h2>O digital não<br />precisa ser<br /><em>complicado.</em></h2>
          <p>Um processo próximo, transparente e bem construído. Da primeira conversa à entrega, cada etapa é pensada para que você saiba onde estamos e para onde vamos.</p>
          <div className="process-steps">
            <div><span>01</span><b>Imersão</b><small>Entendemos o negócio e os objetivos.</small></div>
            <div><span>02</span><b>Direção</b><small>Definimos estratégia e linguagem visual.</small></div>
            <div><span>03</span><b>Construção</b><small>Projetamos, desenvolvemos e refinamos.</small></div>
            <div><span>04</span><b>Entrega</b><small>Publicamos e orientamos os próximos passos.</small></div>
          </div>
        </div>
      </section>

      <section className="contact-section light-section" id="contato">
        <div className="section-kicker"><span>05 — VAMOS CONVERSAR</span><Asterisk size={18} /></div>
        <div className="contact-layout">
          <div><span className="contact-pretitle">SEU PRÓXIMO CAPÍTULO COMEÇA AQUI.</span><h2>Tem uma ideia?<br /><em>Vamos dar forma.</em></h2><p>Conte um pouco sobre o que você está imaginando. A gente ajuda a transformar isso em um projeto possível.</p></div>
          <a className="contact-card" href="https://wa.me/5571991345624?text=Ol%C3%A1%2C%20conheci%20a%20NotaNFC%2B%20e%20quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noreferrer">
            <span>INICIE UMA CONVERSA</span><strong>Vamos criar<br />algo relevante.</strong><div className="contact-card-bottom"><span>FALAR PELO WHATSAPP</span><ArrowUpRight /></div>
          </a>
        </div>
      </section>

      <footer className="footer dark-section">
        <div className="footer-top"><a className="brand footer-brand" href="#inicio"><span className="brand-symbol">N<span>+</span></span><span className="brand-name">nota<span>NFC</span><b>+</b><small>DIGITAL STUDIO</small></span></a><span className="footer-manifesto">IDEIAS BEM CONSTRUÍDAS<br />MERECEM IR MAIS LONGE.</span><a className="back-top" href="#inicio">VOLTAR AO TOPO <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© 2026 NOTANFC+ STUDIO. TODOS OS DIREITOS RESERVADOS.</span><span>FEITO COM INTENÇÃO NO BRASIL <span className="footer-star">✳</span></span><a href="https://www.instagram.com/notanfc/" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight size={12} /></a></div>
      </footer>
    </main>
  );
}
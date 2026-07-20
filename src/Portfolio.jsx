import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './Portfolio.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Landing Page - Oficina Wcar",
      description: "Landing page profissional e otimizada para a oficina mecânica Wcar em Pirapozinho/SP. Conta com um formulário de orçamento integrado e estruturado com validações de dados, além de seções focadas na conversão e divulgação dos serviços automotivos prestados.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Desenvolvimento Web",
      githubLink:"https://github.com/Van1723/wcar-site"
    },
    {
      title: "Agregador de Links Profissionais",
      description: "Uma aplicação elegante, responsiva e minimalista no estilo centralizador de links (Linktree), facilitando o acesso direto às redes sociais e canais de comunicação profissionais.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Desenvolvimento Web",
      githubLink:"https://github.com/Van1723/Projeto-DevLinks"
    },
    {
      title: "Jogo Interativo de Cores",
      description: "Software interativo desenvolvido com interface gráfica Tkinter em Python criado para o processo seletivo da Kodland. O game desafia a percepção rápida do usuário através do efeito Stroop (identificar a cor real ignorando o texto intencionalmente confuso).",
      tech: ["Python", "Tkinter", "Lógica de Programação"],
      category: "Software / Jogos",
      githubLink:"https://github.com/Van1723/teste_kodland"
    }
  ];

  const skillCategories = [
    {
      title: "Desenvolvimento Web",
      icon: "💻",
      skills: ["HTML5", "CSS3", "JavaScript (Básico/Intermediário)", "Bootstrap", "React (Em evolução/Projetos ativos)", "Responsividade", "Design & Usabilidade", "Compatibilidade entre Navegadores"]
    },
    {
      title: "Linguagens de Programação",
      icon: "📟",
      skills: ["Python", "JavaScript", "C# (Básico)", "SQL (Básico)"]
    },
    {
      title: "Banco de Dados & Infra",
      icon: "🗄️",
      skills: ["SQL Server (Básico)", "Linux (Básico)", "Redes de Computadores (Básico)"]
    },
    {
      title: "Ferramentas & Ambientes",
      icon: "🧰",
      skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Ferramentas de Desenvolvimento Web"]
    }
  ];

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Analytics />
      
      {/* Header / Navegação */}
      <header className="portfolio-header">
        <div className="header-content">
          <span className="logo-text">Vanessa da Silva</span>
          <nav className="nav-links">
            <a href="#about">Sobre mim</a>
            <a href="#projects">Projetos</a>
            <a href="#skills">Tecnologias</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle-btn"
              aria-label="Alternar Tema"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        
        {/* Seção Sobre Mim */}
        <section id="about" className="about-section">
          <div className="about-text-container">
            <div className="status-badge">
              <span className="status-dot"></span>
              Futura Desenvolvedora Full Stack
            </div>
            <h1 className="hero-title">
              Olá, eu sou a <span className="highlight-text">Vanessa da Silva</span>
            </h1>
            <p className="description-paragraph">
              Sou estudante de <strong>Engenharia da Computação (5º semestre)</strong>, formada como <strong>Técnica em Informática</strong> e <strong>Técnica em Meio Ambiente</strong>. Com forte base em lógica e análise, atuo no desenvolvimento de landing pages e aplicações modernas utilizando ecossistemas como React e Python.
            </p>
            <p className="description-paragraph">
              Destaco-me pela proatividade, facilidade de aprendizado, organização e histórico de liderança de equipes em Projetos Integradores. Meu foco atual está no aperfeiçoamento constante em <strong>Front-end React</strong> visando uma sólida transição para soluções Full Stack.
            </p>
            
            {/* Links e Redes */}
            <div className="social-links-container">
              <a href="https://www.linkedin.com/in/vanessa-silva-work/" target="_blank" rel="noreferrer" className="btn btn-linkedin">
                LinkedIn
              </a>
              <a href="https://github.com/Van1723" target="_blank" rel="noreferrer" className="btn btn-github">
                GitHub
              </a>
              <a href="https://wa.me/5518997125999" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                WhatsApp
              </a>
            </div>
          </div>
          
          {/* Espaço para a Foto */}
          <div className="photo-wrapper">
            <div className="photo-card-glow"></div>
            <div className="photo-card">
              <img 
                src="/VS.png" 
                alt="Vanessa da Silva" 
                className="portfolio-avatar"
                onError={(e) => {
                  // Caso a foto não carregue, ele mostra o texto como plano de fundo
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="avatar-placeholder">Vanessa da Silva</div>';
                }}
              />
              <div className="avatar-placeholder">Vanessa da Silva</div>
            </div>
          </div>
        </section>

        {/* Seção de Projetos */}
        {/* Seção de Projetos */}
        <section id="projects" className="section-container">
          <div className="section-header">
            <h2 className="section-title">Projetos em Destaque</h2>
            <div className="section-underline"></div>
          </div>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <div key={i} className="project-card">
                <div className="project-card-top">
                  <div className="project-card-header-row">
                    <span className="project-category">{proj.category}</span>
                    {/* Botão do GitHub inserido no topo direito do card */}
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noreferrer" className="project-github-btn" title="Ver código no GitHub">
                        📂 GitHub
                      </a>
                    )}
                  </div>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                </div>
                <div className="project-card-bottom">
                  <div className="tech-tags-container">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Habilidades */}
        <section id="skills" className="section-container">
          <div className="section-header">
            <h2 className="section-title">Habilidades & Tecnologias</h2>
            <div className="section-underline"></div>
          </div>
          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <div key={i} className="skills-card">
                <div className="skills-card-header">
                  <span className="skills-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skills-tags-container">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="skill-item-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Vanessa da Silva. Todos os direitos reservados.</p>
        <p className="footer-subtext">Presidente Prudente - SP</p>
      </footer>
    </div>
  );
}
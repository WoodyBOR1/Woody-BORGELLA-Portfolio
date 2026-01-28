import { useState } from 'react'
import './App.css'

// LIENS SOCIAUX - Modifiez ces URLs avec vos vrais liens
const SOCIAL_LINKS = {
  github: "https://github.com/WoodyBOR1",
  linkedin: "https://www.linkedin.com/in/woody-borgella-2794b4198/",
  email: "mailto:woodyborgella@yahoo.fr",
  cv: "portfolio/CV_Woody_BORGELLA.pdf" // Nom de fichier sécurisé pour le web
};

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      experience: "Expérience",
      realisation: "Réalisation",
      contact: "Contact"
    },
    hero: {
      hello: "Bonjour",
      im: "Je suis",
      name: "Woody BORGELLA",
      jobPrefix: "DATA ANALYTICS & MACHINE LEARNING",
      subtitle: "Data Analytics & Machine Learning",
      description: "Je transforme vos idées en données, et vos données en <span class='text-highlight'>résultats actionnables</span> pour optimiser la performance et l'innovation.",
      cta_projects: "Mes projets",
      cta_contact: "Contact",
      cta_cv: "Télécharger mon CV",
      experience_title: "EXPÉRIENCES"
    },
    stats: [
      { id: 1, label: "Années d'expérience", value: "7+" },
      { id: 2, label: "Projets livrés", value: "15+" },
      { id: 3, label: "Technologies maîtrisées", value: "20+" },
      { id: 4, label: "Certifications", value: "15+" }
    ],
    projects: {
      title: "RÉALISATIONS PHARES",
      learn_more: "En savoir plus →",
      items: [
        {
          id: 0,
          title: "Projet « Article 51 CECICS »",
          description: "Pilotage du traitement et de l’analyse des données pour l’évaluation finale du projet intégré au droit commun.",
          tags: ["Analyse de données", "Pilotage", "Santé", "Politique Publique"],
          category: "Analyse & Impact / Évaluation de projets",
          link: "https://sante.gouv.fr/IMG/pdf/rapport_final_evaluation_cecics_iexp_ic.pdf"
        },
        {
          id: 1,
          title: "Détection de fraude sur transactions bancaires",
          description: "Analyse avancée d’un dataset déséquilibré et création de visualisations exploitables pour optimiser la détection d’anomalies.",
          tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "Imbalanced-learn"],
          category: "Data Science / Machine Learning",
          link: "https://woodybor1.github.io/Credit-Card-Fraud-Detection/"
        },
        {
          id: 2,
          title: "Visualisation des Ventes Globales – Tendances, Segments et Performance",
          description: "Visualisation interactive des performances commerciales. Identification de leviers de croisssance.",
          tags: ["Power BI", "SQL", "Excel"],
          category: "Data Visualization"
        },
        {
          id: 3,
          title: "E-commerce : Analyse Rentabilité Clients",
          description: "Analyse des interactions clients avec les campagnes marketing pour identifier les segments les plus réactifs et rentables. Mise en évidence des comportements clés afin d’optimiser la stratégie et maximiser le ROI.",
          tags: ["Python", "Optimization", "Gurobi"],
          category: "Marketing Analytics"
        },
        {
          id: 4,
          title: "Projet pilotage CNAT - CAF",
          description: "Regroupement des clients par comportement d'achat (RFM). Personnalisation des stratégies marketing par segment.",
          tags: ["SQL", "Power BI", "Clustering"],
          category: "Analytics",
          link: "https://app.powerbi.com/reportEmbed?reportId=4bf4c51a-a0af-4177-9fd2-ca97b800470c&autoAuth=true&ctid=a27be1f9-c44b-47a2-b99e-810261deecb8"
        }
      ]
    },
    contact: {
      title: "DÉMARRONS UN PROJET ENSEMBLE",
      description: "Vous recherchez un collaborateur, un facilitateur en <span class='text-highlight'>Études</span> & <span class='text-highlight'>Observatoires</span>, <span class='text-highlight'>pilotage</span> d’activité et en analyse de données à forte valeur stratégique ?"
    },
    footer: "© 2026 Portfolio Woody BORGELLA - Excellence Data  & IA"
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      realisation: "Projects",
      contact: "Contact"
    },
    hero: {
      hello: "Hello",
      im: "I'm",
      name: "Woody BORGELLA",
      jobPrefix: "DATA ANALYTICS & MACHINE LEARNING",
      subtitle: "Data Analytics & Machine Learning",
      description: "I transform your ideas into data, and your data into <span class='text-highlight'>actionable results</span> to optimize performance and innovation.",
      cta_projects: "My projects",
      cta_contact: "Contact",
      cta_cv: "Download my CV",
      experience_title: "EXPERIENCES"
    },
    stats: [
      { id: 1, label: "Years of experience", value: "7+" },
      { id: 2, label: "Projects delivered", value: "15+" },
      { id: 3, label: "Mastered Technologies", value: "20+" },
      { id: 4, label: "Certifications", value: "15+" }
    ],
    projects: {
      title: "KEY REALIZATIONS",
      learn_more: "Learn more →",
      items: [
        {
          id: 0,
          title: "Project « Article 51 CECICS »",
          description: "Steering the treatment and analysis of data for the final evaluation of the project integrated into common law.",
          tags: ["Data Analysis", "Steering", "Health", "Public Policy"],
          category: "Analysis & Impact / Project Evaluation",
          link: "https://sante.gouv.fr/IMG/pdf/rapport_final_evaluation_cecics_iexp_ic.pdf"
        },
        {
          id: 1,
          title: "Bank Transaction Fraud Detection",
          description: "Analysis of the imbalance between normal and fraudulent transactions, supported by clear and actionable visualizations.",
          tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "Imbalanced-learn"],
          category: "Data Science / Machine Learning – Fraud Detection"
        },
        {
          id: 2,
          title: "Global Sales Visualization – Trends, Segments and Performance",
          description: "Interactive visualization of commercial performance. Identification of growth levers.",
          tags: ["Power BI", "SQL", "Excel"],
          category: "Data Visualization"
        },
        {
          id: 3,
          title: "E-commerce: Customer Profitability Analysis",
          description: "Analysis of customer interactions with marketing campaigns to identify the most responsive and profitable segments. Highlighting key behaviors to optimize strategy and maximize ROI.",
          tags: ["Python", "Optimization", "Gurobi"],
          category: "Marketing Analytics"
        },
        {
          id: 4,
          title: "Customer Segmentation",
          description: "Group customers by purchasing behavior (RFM). Personalization of marketing strategies by segment.",
          tags: ["K-Means", "Python", "Clustering"],
          category: "Analytics"
        }
      ]
    },
    contact: {
      title: "LET'S START A PROJECT TOGETHER",
      description: "Are you looking for a collaborator, a facilitator in <span class='text-highlight'>Studies</span> & <span class='text-highlight'>Observatories</span>, activity <span class='text-highlight'>steering</span> and strategic data analysis?"
    },
    footer: "© 2026 Woody BORGELLA Portfolio - Data Excellence & IA"
  }
}

function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  return (
    <div className="portfolio">
      <nav>
        <div className="container nav-content">
          <div className="logo-text">Woody.Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">{t.nav.home}</a></li>
            <li><a href="#experience">{t.nav.experience}</a></li>
            <li><a href="#realisation">{t.nav.realisation}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
            <li className="lang-switcher" style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
              <button onClick={() => setLang('fr')} style={{ color: lang === 'fr' ? 'var(--accent-primary)' : 'white', fontWeight: lang === 'fr' ? '800' : '400', background: 'none', border: 'none', cursor: 'pointer' }}>FR</button>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <button onClick={() => setLang('en')} style={{ color: lang === 'en' ? 'var(--accent-primary)' : 'white', fontWeight: lang === 'en' ? '800' : '400', background: 'none', border: 'none', cursor: 'pointer' }}>EN</button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Section Hero */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <div className="hello-pill-capture">
                <span className="waving-hand">👋</span> {t.hero.hello}, {t.hero.im.toLowerCase()}
              </div>

              <h1 className="hero-name-capture">
                Woody <span className="blue-text-name">BORGELLA</span>
              </h1>

              <h2 className="hero-headline-capture">
                <span className="text-white">Data</span> <span className="text-blue-accent">Analytics &</span> <br />
                <span className="text-white">Machine</span> <span className="text-blue-accent">Learning</span>
              </h2>

              <p className="hero-subtitle-capture">
                {t.hero.subtitle}
              </p>

              <div className="hero-description-box-capture">
                <p dangerouslySetInnerHTML={{ __html: t.hero.description }}></p>
              </div>

              <div className="cta-row-capture">
                <a href="#realisation" className="btn-projects-capture">{t.hero.cta_projects}</a>
                <a href={SOCIAL_LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn-cv-capture">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                  {t.hero.cta_cv}
                </a>

                <div className="social-links-capture">
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={SOCIAL_LINKS.email}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image-pro">
              <div className="image-frame-pro">
                <img src="portfolio/profile_pro.jpg" alt="Woody BORGELLA" className="main-profile-img" />

                {/* Émojis flottants thématiques */}
                <div className="floating-badge-emoji e1">📊</div>
                <div className="floating-badge-emoji e2">🤖</div>
                <div className="floating-badge-emoji e3">📈</div>
                <div className="floating-badge-emoji e4">🧠</div>
              </div>
            </div>
          </div>
        </section>


        {/* Section Stats */}
        <section className="container" style={{ marginBottom: '4rem' }}>
          <div className="stats-grid">
            {t.stats.map(stat => (
              <div key={stat.id} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Expériences (Work With) */}
        <section id="experience" className="container" style={{ marginBottom: '6rem' }}>
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">✨</span>
              {t.hero.experience_title}
            </div>
          </div>
          <div className="experience-architecture">
            <div className="experience-grid-row">
              <a href="https://www.aphp.fr" target="_blank" rel="noopener noreferrer" className="experience-link">
                <div className="logo-box-capture">
                  <img src="portfolio/aphp.png" alt="AP-HP" className="experience-logo" />
                </div>
                <span>Assistance publique – Hôpitaux de Paris (AP-HP)</span>
              </a>
              <a href="https://www.murs-erigne.fr/" target="_blank" rel="noopener noreferrer" className="experience-link">
                <div className="logo-box-capture">
                  <img src="portfolio/murs.png" alt="Mûrs-Erigné" className="experience-logo" />
                </div>
                <span>Ville de Mûrs-Erigné</span>
              </a>
              <a href="https://www.angersloiremetropole.fr/" target="_blank" rel="noopener noreferrer" className="experience-link">
                <div className="logo-box-capture">
                  <img src="portfolio/angers.png" alt="Angers" className="experience-logo" />
                </div>
                <span>Angers Loire Métropole</span>
              </a>
              <a href="https://www.mci.gouv.ht/" target="_blank" rel="noopener noreferrer" className="experience-link">
                <div className="logo-box-capture">
                  <img src="portfolio/haiti.png" alt="MCI Haiti" className="experience-logo" />
                </div>
                <span>Ministère du Commerce - Haiti</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section Réalisations */}
        <section id="realisation" className="container">
          <div className="section-header-centered">
            <div className="pill-title">
              <span className="pill-icon">🚀</span>
              {t.projects.title}
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {t.projects.items.map(project => (
              <div key={project.id} className="project-card" style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  background: 'rgba(0, 123, 255, 0.1)',
                  color: 'var(--accent-primary)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>{project.category}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">#{tag}</span>
                  ))}
                </div>
                <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>{t.projects.learn_more}</a>
              </div>
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section id="contact" className="container" style={{ padding: '100px 0' }}>
          <div className="contact-card">
            <div className="section-header-centered">
              <div className="pill-title">
                <span className="pill-icon">📬</span>
                {t.contact.title}
              </div>
            </div>
            <p
              style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: t.contact.description }}
            ></p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href={SOCIAL_LINKS.email} className="social-circle" style={{ width: '70px', height: '70px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
            <a href={SOCIAL_LINKS.email} className="btn-projects">{lang === 'fr' ? 'Envoyer un message' : 'Send a message'}</a>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App

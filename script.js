// 1. DICIONÁRIO DE TRADUÇÕES
const translations = {
    pt: {
        nav_home: "Início", nav_about: "Sobre", nav_curriculum: "Currículo", nav_skills: "Skills", nav_projects: "Projetos", nav_contact: "Contato",
        hero_title: "Olá, eu sou <span>Victor Gil</span>", hero_subtitle: "ADS | Especialista em Dados pela FIAP",
        btn_projects: "Ver Projetos", btn_resume: "Currículo",
        title_about: "Sobre Mim",
        about_p1: "Tenho 26 anos, sou técnico em Eletrônica pela ETEC e formado em Engenharia Mecânica pela UNIP. Atuo na área de tecnologia há mais de 6 anos. Atualmente curso ADS e me especializo em Dados pela FIAP, com foco em soluções orientadas a dados e automação.",
        h_course: "Eletrônica", h_inst: "Etec Takashi Morita",
        h_course1: "Engenharia Mecânica", h_inst1: "UNIP",
        h_course2: "ADS", h_inst2: "IMPACTA",
        h_course3: "Análise de Dados", h_inst3: "FIAP",
        cur_edu: "Formação", cur_exp: "Experiência",
        edu_fiap: "Pós-graduação em Análise de Dados", edu_fiap_desc: "Foco em Big Data e Machine Learning.",
        edu_ads: "Tecnólogo em ADS", edu_ads_desc: "Desenvolvimento Fullstack e Engenharia de Software.",
        edu_eng: "Engenharia Mecânica", edu_eng_desc: "Cálculo estrutural e automação industrial.",
        edu_etec: "Técnico em Eletrônica", edu_etec_desc: "Hardware e sistemas embarcados.",
        exp_title_1: "Analista de Software", exp_date_1: "Mar 2025 — Presente", exp_desc_1: "Gestão de base de dados, suporte sistêmico e implementações em campo.",
        exp_title_2: "Analista de Cadastro", exp_desc_2: "Manutenção de dados (impostos, promoções) e análise de inconsistências.",
        exp_title_3: "Analista de Service Desk", exp_desc_3: "Suporte técnico ao sistema Aloha e integração com parceiros logísticos.",
        exp_title_4: "Vendedor Técnico", exp_desc_4: "Atuação comercial técnica para venda de equipamentos de corte.",
        sk_lang: "Programação", sk_data: "Dados", sk_bi: "Visualização & BI", sk_tools: "Ferramentas", sk_support: "Atendimento",
        proj_title_1: "Exportações de Vinho", proj_desc_1: "Análise do mercado de exportação de vinhos brasileiros.",
        proj_title_2: "Ibovespa", proj_desc_2: "Previsão de valores baseada em dados históricos.",
        proj_title_3: "Análise COVID-19", proj_desc_3: "Modelo de Clusterização para análise comportamental.",
        proj_title_4: "Petróleo Brent", proj_desc_4: "Análise e modelo preditivo para o valor de fechamento.",
        proj_title_5: "Presença Estudantil", proj_desc_5: "Modelo para previsão de presença estudantil em aula.",
        btn_send: "Enviar para Victor"
    },
    en: {
        nav_home: "Home", nav_about: "About", nav_curriculum: "Resume", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        hero_title: "Hi, I am <span>Victor Gil</span>", hero_subtitle: "ADS | Data Specialist at FIAP",
        btn_projects: "View Projects", btn_resume: "Resume",
        title_about: "About Me",
        about_p1: "I'm 26 years old, Electronics Tech and Mechanical Engineer. Working in tech for 6+ years, currently specializing in Data at FIAP.",
        h_course: "Electronics", h_inst: "Etec Takashi Morita",
        h_course1: "Mechanical Engineering", h_inst1: "UNIP",
        h_course2: "Systems Analysis", h_inst2: "IMPACTA",
        h_course3: "Data Analysis", h_inst3: "FIAP",
        cur_edu: "Education", cur_exp: "Experience",
        edu_fiap: "Post-grad in Data Analysis", edu_fiap_desc: "Focus on Big Data and Machine Learning.",
        edu_ads: "Systems Analysis and Development", edu_ads_desc: "Fullstack development and Software Engineering.",
        edu_eng: "Bachelor in Mechanical Engineering", edu_eng_desc: "Structural calculus and industrial automation.",
        edu_etec: "Electronics Technician", edu_etec_desc: "Hardware and embedded systems.",
        exp_title_1: "Software Analyst", exp_date_1: "Mar 2025 — Present", exp_desc_1: "Database management, systems support and field implementations.",
        exp_title_2: "Registration Analyst", exp_desc_2: "Tax maintenance and technical data analysis.",
        exp_title_3: "Service Desk Analyst", exp_desc_3: "Aloha system technical support and logistics integration.",
        exp_title_4: "Technical Sales", exp_desc_4: "Technical commercial role for cutting equipment sales.",
        sk_lang: "Programming", sk_data: "Data", sk_bi: "Visualization & BI", sk_tools: "Tools", sk_support: "Support",
        proj_title_1: "Wine Exports", proj_desc_1: "Analysis of the Brazilian wine export market.",
        proj_title_2: "Ibovespa Forecast", proj_desc_2: "Price forecasting based on historical data.",
        proj_title_3: "COVID-19 Analysis", proj_desc_3: "Clustering model for behavioral analysis.",
        proj_title_4: "Brent Oil", proj_desc_4: "Predictive model for closing prices.",
        proj_title_5: "Student Attendance", proj_desc_5: "Predictive model for classroom attendance.",
        btn_send: "Send to Victor"
    },
    es: {
        nav_home: "Inicio", nav_about: "Sobre mí", nav_curriculum: "Currículum", nav_skills: "Skills", nav_projects: "Proyectos", nav_contact: "Contacto",
        hero_title: "Hola, soy <span>Victor Gil</span>", hero_subtitle: "ADS | Especialista en Datos por la FIAP",
        btn_projects: "Ver Proyectos", btn_resume: "Currículum",
        title_about: "Sobre Mí",
        about_p1: "Tengo 26 años, soy técnico en Electrónica y graduado en Ingeniería Mecánica. Trabajo en tecnología hace más de 6 años, especializado en Datos.",
        h_course: "Electrónica", h_inst: "Etec Takashi Morita",
        h_course1: "Ingeniería Mecánica", h_inst1: "UNIP",
        h_course2: "Análisis de Sistemas", h_inst2: "IMPACTA",
        h_course3: "Análisis de Datos", h_inst3: "FIAP",
        cur_edu: "Formación", cur_exp: "Experiencia",
        edu_fiap: "Posgrado en Análisis de Datos", edu_fiap_desc: "Enfoque en Big Data y Machine Learning.",
        edu_ads: "Tecnólogo en Análisis de Sistemas", edu_ads_desc: "Desarrollo Fullstack e Ingeniería de Software.",
        edu_eng: "Ingeniería Mecánica", edu_eng_desc: "Cálculo estructural y automatización industrial.",
        edu_etec: "Técnico en Electrónica", edu_etec_desc: "Hardware y sistemas embebidos.",
        exp_title_1: "Analista de Software", exp_date_1: "Mar 2025 — Presente", exp_desc_1: "Gestión de bases de datos, soporte e implementaciones.",
        exp_title_2: "Analista de Registro", exp_desc_2: "Mantenimiento de impuestos y análisis de datos técnicos.",
        exp_title_3: "Analista de Service Desk", exp_desc_3: "Soporte técnico al sistema Aloha y logística.",
        exp_title_4: "Vendedor Técnico", exp_desc_4: "Venta técnica de equipos de corte industrial.",
        sk_lang: "Programación", sk_data: "Datos", sk_bi: "Visualización y BI", sk_tools: "Herramientas", sk_support: "Soporte",
        proj_title_1: "Exportación de Vinos", proj_desc_1: "Análisis del mercado de exportación de vinos brasileños.",
        proj_title_2: "Ibovespa", proj_desc_2: "Predicción de valores basada en datos históricos.",
        proj_title_3: "Análisis COVID-19", proj_desc_3: "Modelo de agrupación para análisis conductual.",
        proj_title_4: "Petróleo Brent", proj_desc_4: "Análisis y modelo predictivo de precios de cierre.",
        proj_title_5: "Asistencia Estudiantil", proj_desc_5: "Modelo para predecir la asistencia en el aula.",
        btn_send: "Enviar a Victor"
    }
};

// 2. FUNÇÃO DE TROCA DE IDIOMA
function changeLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
}

// 3. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    // Carregar idioma
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    changeLang(savedLang);

    // ScrollReveal - SÓ CHAME SE A BIBLIOTECA ESTIVER CARREGADA NO HTML
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: false
        });
        sr.reveal('.hero-inner, .section-title, .about-container-text, .h-card, .resume-item, .skill-group, .project-card, .contact-wrapper');
    }

    // Botão Back to Top
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

const form = document.getElementById("my-form");
const status = document.getElementById("form-status");
const btn = document.getElementById("submit-btn");

async function handleSubmit(event) {
  event.preventDefault(); // Impede o recarregamento da página
  
  const data = new FormData(event.target);
  
  btn.disabled = true; // Desativa o botão para evitar múltiplos cliques
  btn.innerText = "Enviando...";

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "✅ Mensagem enviada com sucesso!";
      status.style.color = "#38bdf8"; // Cor do seu tema
      status.style.display = "block";
      form.reset(); // Limpa o formulário
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "❌ Ocorreu um erro ao enviar.";
        }
        status.style.color = "#ff4d4d";
        status.style.display = "block";
      })
    }
  }).catch(error => {
    status.innerHTML = "❌ Erro de conexão. Tente novamente.";
    status.style.color = "#ff4d4d";
    status.style.display = "block";
  }).finally(() => {
    btn.disabled = false;
    btn.innerText = "Enviar para Victor";
  });
}

form.addEventListener("submit", handleSubmit);
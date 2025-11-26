import React, { useState, useEffect } from 'react';
import { Book, Mail, Github, Linkedin, ExternalLink, GraduationCap, Telescope, Atom, MapPin, ChevronDown, Menu, X, Star, Activity, Clock, FileText, Link as LinkIcon, Code } from 'lucide-react';

// ==========================================
// 🚀 USER DATA SECTION - EDIT THIS AREA ONLY
// ==========================================

const portfolioData = {
  // --- HERO SECTION ---
  hero: {
    name: "Barbora Hudačková",
    title: "Mgr. Astrophysics Student",
    university: "Masaryk University",
    location: "Brno, Czech Republic",
    tagline: "Testing physics at the Planck scale through Gamma-Ray Burst analysis.",
    primaryAction: "View Research",
    secondaryAction: "Contact Me"
  },

  // --- ABOUT SECTION & EDUCATION ---
  about: {
    title: "About Me",
    description: "I am a graduate student at the Department of Theoretical Physics and Astrophysics at Masaryk University. My research focuses on high-energy astrophysics, specifically testing predictions of quantum gravity models using Gamma-Ray Bursts (GRBs).",
    education: [
      {
        degree: "Mgr. in Astrophysics", // Updated from MSc
        school: "Masaryk University, Faculty of Science",
        year: "2025 - Present",
        details: "Focus on High Energy Astrophysics and Quantum Gravity Phenomenology.",
        // ⬇️ PASTE YOUR MASTER'S THESIS ZADANIE HERE ⬇️
        thesisAssignment: "Topic: Prediction Methods for GRB Time-Delay Analysis\n\nObjective: Small time delays in gamma-ray burst (GRB) signals may carry signatures of Planck-scale physics. This thesis aims to develop and evaluate a method that uses multiple information channels to generate predictive models of GRB timing. The resulting prediction errors will then be analyzed to identify systematic patterns that could indicate such fundamental-scale effects.", 
        thesisLink: "" 
      },
      {
        degree: "Bc. in Astrophysics", // Updated from BSc
        school: "Masaryk University, Faculty of Science",
        year: "2022 - 2025",
        details: "",
        // ⬇️ BACHELOR THESIS LINK IS HERE ⬇️
        thesisTitle: "Analysis of time delay of gamma-ray bursts",
        thesisLink: "https://is.muni.cz/th/t13kj/" 
      }
    ]
  },

  // --- RESEARCH INTERESTS ---
  interests: {
    title: "Research Interests",
    items: [
      {
        icon: "Atom", 
        title: "Quantum Gravity",
        desc: "Testing modifications of Einstein's gravity and broken Lorentz invariance."
      },
      {
        icon: "Activity", 
        title: "Gamma-Ray Bursts",
        desc: "Analyzing time delays and spectral properties of GRB signals."
      },
      {
        icon: "Clock",
        title: "Time Delay Analysis",
        desc: "Developing algorithms to detect time lags in high-energy photon arrival."
      },
      {
        icon: "Code",
        title: "Computational Physics",
        desc: "Data reduction and statistical modeling of astrophysical datasets."
      }
    ]
  },

  // --- SOFTWARE & PROJECTS ---
  projects: {
    title: "Software & Projects",
    items: [
      {
        title: "GRB Simulation Framework",
        type: "Bachelor Thesis Code",
        year: "2025",
        description: "A comprehensive simulation framework developed for my Bachelor's thesis. It models Gamma-Ray Burst light curves to analyze potential time delays and constrain Quantum Gravity energy scales.",
        link: "https://github.com/baarborka?tab=repositories" // Linking to your repos so they can find it
      }
    ]
  },

  // --- CONTACT SECTION ---
  contact: {
    title: "Get in Touch",
    email: "barbora.hudackova@mail.muni.cz",
    linkedin: "https://linkedin.com",
    github: "https://github.com/baarborka?tab=repositories",
    footerText: "© 2025 Barbora Hudačková. Built with React & Tailwind."
  }
};

// ==========================================
// 🛑 END OF EDITABLE SECTION
// ==========================================

const IconMap = ({ name, size = 24, className }) => {
  switch (name) {
    case 'Star': return <Star size={size} className={className} />;
    case 'Telescope': return <Telescope size={size} className={className} />;
    case 'Atom': return <Atom size={size} className={className} />;
    case 'Activity': return <Activity size={size} className={className} />;
    case 'Clock': return <Clock size={size} className={className} />;
    case 'Code': return <Code size={size} className={className} />;
    default: return <Book size={size} className={className} />;
  }
};

const NavLink = ({ href, children, mobile = false, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`
      ${mobile ? 'block py-2 text-lg' : 'text-sm font-medium'} 
      text-slate-300 hover:text-cyan-400 transition-colors duration-300
    `}
  >
    {children}
  </a>
);

export default function AstrophysicsPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* Background Stars Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-80"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-10 left-1/4 opacity-70 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-cyan-200 rounded-full top-1/3 right-1/4 opacity-50 animate-pulse delay-75"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 opacity-20"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-10 right-10 opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-cyan-50">
            {portfolioData.hero.name.split(' ')[1]}
            <span className="text-cyan-400">.Space</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#research">Interests</NavLink>
            <NavLink href="#projects">Software</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-slate-300 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
            <NavLink href="#about" mobile onClick={toggleMenu}>About</NavLink>
            <NavLink href="#research" mobile onClick={toggleMenu}>Interests</NavLink>
            <NavLink href="#projects" mobile onClick={toggleMenu}>Software</NavLink>
            <NavLink href="#contact" mobile onClick={toggleMenu}>Contact</NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6 animate-fade-in-up">
            <Star size={14} className="mr-2" />
            <span>Astrophysics Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {portfolioData.hero.name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-2 font-light">
            {portfolioData.hero.title}
          </p>
          <div className="flex items-center justify-center text-slate-400 mb-8 space-x-2">
            <MapPin size={16} />
            <span>{portfolioData.hero.university}, {portfolioData.hero.location}</span>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#research" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-full transition-all shadow-lg shadow-cyan-900/20">
              {portfolioData.hero.primaryAction}
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-full transition-all border border-slate-700">
              {portfolioData.hero.secondaryAction}
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-cyan-500 mr-4 rounded-full"></span>
                {portfolioData.about.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {portfolioData.about.description}
              </p>
              
              <div className="space-y-8 mt-8">
                {portfolioData.about.education.map((edu, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <GraduationCap size={20} />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="text-white font-medium text-lg">{edu.degree}</h4>
                      <div className="text-cyan-400 text-sm mb-2">{edu.school} • {edu.year}</div>
                      <p className="text-slate-400 text-sm mb-2">{edu.details}</p>
                      
                      {/* Bachelor's Thesis Link */}
                      {edu.thesisTitle && (
                         <div className="flex items-center gap-2 mb-2 text-sm text-slate-300">
                           <Book size={14} className="text-cyan-500"/>
                           <span className="italic">{edu.thesisTitle}</span>
                           {edu.thesisLink && (
                             <a href={edu.thesisLink} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center text-xs px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors">
                               View Thesis <ExternalLink size={10} className="ml-1"/>
                             </a>
                           )}
                         </div>
                      )}

                      {/* Master's Assignment Block */}
                      {edu.thesisAssignment && (
                        <div className="mt-3 p-4 bg-slate-950/50 border border-slate-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs uppercase tracking-wider font-bold">
                            <FileText size={12} />
                            <span>Thesis Assignment</span>
                          </div>
                          <p className="text-slate-400 text-sm whitespace-pre-line leading-relaxed italic">
                            {edu.thesisAssignment}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative sticky top-24">
              <a 
                href="https://www.sci.muni.cz/"
                target="_blank" 
                rel="noopener noreferrer"
                className="block aspect-square max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 flex flex-col justify-center items-center relative overflow-hidden hover:scale-105 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Atom size={80} className="text-cyan-900/50 absolute top-4 right-4 animate-spin-slow group-hover:text-cyan-500/10 transition-colors" />
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">MUNI</div>
                  <div className="text-sm text-cyan-500 uppercase tracking-widest font-semibold">Faculty of Science</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Astrophysics</div>
                  <div className="w-12 h-1 bg-slate-600 mx-auto mt-6 rounded-full group-hover:bg-cyan-500 transition-colors"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{portfolioData.interests.title}</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.interests.items.map((item, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group">
                <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <IconMap name={item.icon} size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Software */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">{portfolioData.projects.title}</h2>
          </div>

          <div className="grid gap-6">
            {portfolioData.projects.items.map((project, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur border border-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-900/20 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-slate-700 text-cyan-300 text-xs rounded uppercase tracking-wider font-semibold">
                        {project.type}
                      </span>
                      <span className="text-slate-400 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                  </div>
                  {project.link !== '#' && (
                    <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                      View <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">{portfolioData.contact.title}</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Interested in collaboration or discussing astrophysics? Feel free to reach out.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700">
              <Mail size={20} />
              <span>{portfolioData.contact.email}</span>
            </a>
            <div className="flex gap-4 justify-center">
              <a href={portfolioData.contact.linkedin} className="flex items-center justify-center w-14 h-14 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg transition-all border border-slate-700">
                <Linkedin size={24} />
              </a>
              <a href={portfolioData.contact.github} className="flex items-center justify-center w-14 h-14 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-600 text-sm">
              {portfolioData.contact.footerText}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
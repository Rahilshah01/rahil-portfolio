import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ChevronDown, Github, Linkedin, FolderDot, Brain, TrendingUp, Code, Cloud, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import profilePic from './assets/your-profile-image.JPG'
import trafficProjectImg from './assets/urban-traffic.jpg';
import resumeFile from './assets/Rahil_Shah_Resume.pdf';

export default function DataSciencePortfolio() {
  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Machine Learning",
      tags: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Data Analysis",
      tags: ["Pandas", "NumPy", "Matplotlib", "PowerBI", "Tableau"]
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Programming",
      tags: ["Python", "R", "SQL", "JavaScript", "C++"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: "Big Data & Cloud",
      tags: ["Spark", "Hadoop", "AWS", "Google Cloud", "Docker"]
    }
  ];

  const projects = [
    {
      title: "Movie Recommender System",
      description: "A machine learning-powered movie recommendation system that suggests personalized movies based on user preferences and viewing history using collaborative filtering and content-based algorithms.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=400&fit=crop",
      tags: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      category: "Machine Learning",
      codeLink: "https://github.com/Rahilshah01/movie-recommender-system",
      liveLink: "https://movie-recommender-system-rahilshah.streamlit.app/"
    },
    {
      title: "Medical RAG Intelligence System",
      description: "A specialized RAG (Retrieval-Augmented Generation) system for healthcare. Uses Gemini 2.0 Flash and FAISS vector search to provide grounded, evidence-based answers with zero-hallucination guardrails.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
      tags: ["Gemini 2.0", "FAISS", "RAG", "Python"],
      category: "AI Systems",
      codeLink: "https://github.com/Rahilshah01/medical-rag-intelligence-system",
      liveLink: null
    },
    {
      title: "Autonomous Research Crew",
      description: 'An autonomous multi-agent system that automates end-to-end financial market research. Deploys specialized "Researcher" and "Writer" agents to analyze market drivers, evaluate competitive risks, and generate investor-ready reports with Buy/Hold/Sell recommendations.',
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=400&fit=crop",
      tags: ["Agentic-AI", "CrewAI", "Gemini-2.0"],
      category: "Deep Learning",
      codeLink: "https://github.com/Rahilshah01/autonomous-financial-research-agent",
      liveLink: null
    },
    {
      title: "Customer Churn Analysis",
      description: "A data-driven retention study using Python to identify churn drivers in 7,000+ customers, providing actionable strategies to reduce attrition in month-to-month segments.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Python", "Pandas", "Matplotlib", "Analytics"],
      category: "Data Analysis",
      codeLink: "https://github.com/Rahilshah01/Customer-Churn-Analysis",
      liveLink: null
    },
    {
      title: "Urban Traffic Vision",
      description: "Computer vision system for counting vehicles and detecting congestion patterns in city traffic footage using YOLOv8.",
      image: trafficProjectImg,
      tags: ["OpenCV", "YOLOv8", "Supervision", "Matplotlib"],
      category: "Computer Vision",
      codeLink: "https://github.com/Rahilshah01/urban-traffic-vision-yolov8",
      liveLink: null
    },
    {
      title: "Multimodal Vision Chatbot",
      description: "A high-performance Multimodal AI Chatbot using Gemini 2.0 Flash to perform visual reasoning, OCR, and object detection. Features robust exponential backoff logic to handle API rate limits and token optimization for efficient image processing.",
      image: "https://www.shutterstock.com/image-photo/person-using-smartphone-interact-friendly-600nw-2482428287.jpg",
      tags: ["Gen AI", "Multimodal AI", "NLP", "API"],
      category: "LLM",
      codeLink: "https://github.com/Rahilshah01/multimodal-vision-ai-chat",
      liveLink: null
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Analytics />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <span className="text-cyan-400">&gt;_</span>
            <span className="text-white">Rahil</span>
            <span className="text-cyan-400">Shah</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition text-sm">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition text-sm">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition text-sm">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition text-sm">Contact</button>
            <a 
              href={resumeFile} 
              download="Rahil_Shah_Resume.pdf"
              className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-slate-900 transition text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-xs sm:text-sm">Available for hire</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Translating <span className="text-cyan-400">Data</span> into<br />Decisions
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Hi, I'm Rahil Shah. As a Data Science Master's student, I specialize in bridging the gap between big data and decision-making. I build intelligent predictive systems and interactive analytics platforms that turn raw datasets into strategic narratives, helping organizations navigate real-world problems with data-driven precision.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 rounded-lg font-semibold hover:border-slate-500 transition flex items-center gap-2 text-sm sm:text-base"
              >
              <FolderDot size={20} />
                View Projects
              </button>
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 rounded-lg font-semibold hover:border-slate-500 transition flex items-center gap-2 text-sm sm:text-base"
                onClick={() => window.open('https://github.com/Rahilshah01', '_blank')}>
                <Github size={20} />
                GitHub
              </button>
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 rounded-lg font-semibold hover:border-slate-500 transition flex items-center gap-2 text-sm sm:text-base"
                onClick={() => window.open('https://www.linkedin.com/in/rahil-shah-067b74233/', '_blank')}>
                <Linkedin size={20} />
                LinkedIn
              </button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-2xl">
              <img 
                src={profilePic}
                alt="Rahil Shah"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 sm:p-6">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">Current Status</span>
                  <span className="text-cyan-400 font-mono">Master's Student</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1 mt-2">
                  <div className="bg-cyan-400 h-1 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Beyond the <span className="text-cyan-400">Numbers</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4">
            I don't just analyze data; I tell stories with it. My journey began with a curiosity about patterns and has evolved into a dedicated pursuit of mastering the algorithms that shape our future. Currently completing my Master's, I am bridging the gap between theoretical models and impactful business solutions.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 sm:p-6 hover:border-cyan-400/50 transition">
                <div className="mb-3 sm:mb-4">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 sm:px-3 py-1 bg-slate-700/50 text-xs sm:text-sm rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
                Featured <span className="text-purple-400">Projects</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                A selection of my recent work in data analytics, data science, and machine learning.
              </p>
            </div>
            <button className="px-4 sm:px-5 py-2 border border-slate-600 rounded-lg hover:border-slate-500 transition flex items-center gap-2 text-sm whitespace-nowrap"
              onClick={() => window.open('https://github.com/Rahilshah01', '_blank')}>
              View All on GitHub
              <ExternalLink size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition">
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-semibold text-cyan-400 z-10">
                    {project.category}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 sm:py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 sm:px-4 py-2 border border-slate-600 rounded hover:border-cyan-400 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                      <Code size={16} />
                      Code
                    </a>
                    {project.liveLink ? (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 sm:px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded hover:bg-cyan-400/20 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <a 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 sm:px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded hover:bg-cyan-400/20 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                        <ExternalLink size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Let's <span className="text-cyan-400">Collaborate</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
              I'm currently looking for full-time opportunities or internships in Data Science and Machine Learning. Have a project in mind or just want to chat about AI? Drop me a line.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-400/50 transition">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-cyan-400/10 rounded-full flex items-center justify-center">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div className="text-center">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">Email Me</div>
                <div className="font-semibold text-sm sm:text-base">rahilshah159@gmail.com</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-400/50 transition">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-purple-400/10 rounded-full flex items-center justify-center">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div className="text-center">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">Call Me</div>
                <div className="font-semibold text-sm sm:text-base">+1 (732) 522-7292</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-400/50 transition">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-blue-400/10 rounded-full flex items-center justify-center">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div className="text-center">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">Location</div>
                <div className="font-semibold text-sm sm:text-base">Jersey City, NJ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 sm:py-6 px-4 sm:px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 Rahil Shah | Portfolio. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}

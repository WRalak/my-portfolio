'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Cpu, Menu, X, ArrowDown, Briefcase, Award, Users, Rocket, Dribbble, Download, ExternalLink, Globe, Twitter, Instagram, Figma } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate stable particle positions that won't cause hydration mismatch
  const particlePositions = useMemo(() => {
    // Fixed seed for deterministic random values
    const seed = 12345;
    const particles = [];
    
    for (let i = 0; i < 50; i++) {
      // Simple pseudo-random function for deterministic values
      const seededRandom = (index: number) => {
        const x = Math.sin(index + seed) * 10000;
        return x - Math.floor(x);
      };
      
      particles.push({
        width: seededRandom(i * 3) * 4 + 1,
        height: seededRandom(i * 3 + 1) * 4 + 1,
        left: seededRandom(i * 3 + 2) * 100,
        top: seededRandom(i * 3 + 3) * 100,
        duration: seededRandom(i * 3 + 4) * 10 + 10,
        delay: seededRandom(i * 3 + 5) * 5,
      });
    }
    
    return particles;
  }, []);

  const skills = {
    'AI & Machine Learning': {
      icon: <Cpu className="w-6 h-6" />,
      items: ['TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'OpenAI API', 'RAG Pipelines', 'FastAPI', 'Model Fine-tuning']
    },
    'Programming Languages': {
      icon: <Code className="w-6 h-6" />,
      items: ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust', 'Ruby', 'Dart', 'SQL', 'PHP', 'C++']
    },
    'Frontend Development': {
      icon: <Rocket className="w-6 h-6" />,
      items: ['React', 'Next.js', 'React Native', 'Vue', 'Angular', 'Remix', 'Tailwind CSS', 'Flutter', 'TypeScript']
    },
    'Backend & APIs': {
      icon: <Database className="w-6 h-6" />,
      items: ['Node.js', 'Django', 'Express', 'Laravel', 'FastAPI', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis']
    },
    'DevOps & Cloud': {
      icon: <Cloud className="w-6 h-6" />,
      items: ['Docker', 'AWS (EC2, S3, RDS)', 'Terraform', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'Linux', 'Ansible']
    }
  };

  const experience = [
    {
      title: 'Freelance Software & AI Engineer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2026 - Present',
      highlights: [
        'Design and maintain production-ready software solutions across web, mobile, and backend systems',
        'Develop AI-driven features including ML models, NLP pipelines, recommendation systems, and automation tools',
        'Deliver full-stack applications using modern frameworks and cloud infrastructure with focus on reliability',
        'Optimize existing systems for scalability, security, and cost efficiency'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Engineering Intern',
      company: 'Valhko',
      location: 'London, UK (Remote)',
      period: 'Oct 2025 – Dec 2025',
      highlights: [
        'Contributing to research and development of agentic AI systems automating workflows',
        'Designing and deploying AI agents and autonomous frameworks for African markets',
        'Working with LLMs, LangChain, and RAG pipelines to prototype intelligent systems'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Python Django Intern',
      company: 'Digital Nexus AI',
      location: 'Bangalore, India (Remote)',
      period: 'Oct 2025 – Dec 2025',
      highlights: [
        'Building Django-based web applications with integrated AI/ML capabilities',
        'Developing REST APIs and backend services for data-driven client solutions',
        'Leveraging TensorFlow, PyTorch, and scikit-learn for model integration and inference'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile App Developer and QA',
      company: 'Gracify Technologies',
      location: 'Yaoundé, Cameroon (Remote)',
      period: 'Jun 2025 – Oct 2025',
      highlights: [
        'Built MyLook mobile app frontend using React Native for traditional African dress marketplace',
        'Maintained cloud-based applications and optimized deployment processes',
        'Collaborated on DevOps automation pipelines and QA testing for app stability'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Software Development Understudy',
      company: 'Kontorva',
      location: 'Tallinn, Estonia (Remote)',
      period: 'Aug 2024 – Feb 2025',
      highlights: [
        'Enhanced SaaS platform connecting recruiters with developers using React, Laravel, and MySQL',
        'Contributed to database optimization and backend API development',
        'Participated in code reviews and agile development with international team'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const projects = [
    {
      name: 'HAYA',
      subtitle: 'Travel SaaS Platform',
      description: 'Full-stack SaaS platform for tour operators and travel agencies featuring AI-powered itinerary generation, streamlining operations and enhancing customer experience.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'AI Integration'],
      year: '2025',
      gradient: 'from-blue-600 to-cyan-600',
      links: [
        { type: 'live', url: 'https://haya-travel.vercel.app', label: 'Live Demo' },
        { type: 'github', url: 'https://github.com/WRalak/haya-travel', label: 'GitHub' }
      ]
    },
    {
      name: 'Tukai',
      subtitle: 'Events Discovery Platform',
      description: 'Mobile application connecting users to nearby concerts, festivals, and experiences with real-time listings and location-based discovery.',
      tech: ['React Native', 'API Integration', 'Location Services', 'Real-time Data'],
      year: '2025',
      gradient: 'from-purple-600 to-pink-600',
      links: [
        { type: 'github', url: 'https://github.com/WRalak/tukai-events', label: 'GitHub' },
        { type: 'demo', url: 'https://tukai-demo.vercel.app', label: 'Web Demo' }
      ]
    },
    {
      name: 'Solgates Fashion',
      subtitle: 'E-commerce Platform',
      description: 'Complete rebuild of fashion e-commerce platform using Remix framework with enhanced performance, modern UI/UX, and improved responsiveness.',
      tech: ['Remix', 'React', 'Modern Web Stack', 'UI/UX Design'],
      year: '2025',
      gradient: 'from-orange-600 to-red-600',
      links: [
        { type: 'live', url: 'https://solgates-fashion.vercel.app', label: 'Live Site' },
        { type: 'github', url: 'https://github.com/WRalak/solgates-fashion', label: 'GitHub' }
      ]
    },
    {
      name: 'MyLook',
      subtitle: 'African Fashion Marketplace',
      description: 'Mobile platform enabling users to browse and purchase traditional African dresses with cloud-based infrastructure and optimized user experience.',
      tech: ['React Native', 'Cloud Infrastructure', 'Mobile Optimization'],
      year: '2025',
      gradient: 'from-green-600 to-emerald-600',
      links: [
        { type: 'demo', url: 'https://mylook-app.netlify.app', label: 'Web Demo' },
        { type: 'github', url: 'https://github.com/WRalak/mylook-fashion', label: 'GitHub' }
      ]
    }
  ];

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: '5+', label: 'Companies Worked With' },
    { icon: <Code className="w-8 h-8" />, value: '20+', label: 'Technologies Mastered' },
    { icon: <Rocket className="w-8 h-8" />, value: '10+', label: 'Projects Delivered' },
    { icon: <Users className="w-8 h-8" />, value: 'Global', label: 'Team Collaboration' }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/WRalak', label: 'GitHub', color: 'hover:text-cyan-400' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/wallace-ralak', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/wallace_ralak', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Dribbble size={24} />, url: 'https://dribbble.com/wallace-ralak', label: 'Dribbble', color: 'hover:text-pink-400' },
    { icon: <Figma size={24} />, url: 'https://figma.com/@wallacer', label: 'Figma', color: 'hover:text-purple-400' },
    { icon: <Instagram size={24} />, url: 'https://instagram.com/wallace.ralak', label: 'Instagram', color: 'hover:text-rose-400' },
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/wallace-ralak-cv.pdf'; // Update this with your actual CV file path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Wallace_Ralak_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to render project links
  const renderProjectLinks = (links: Array<{type: string, url: string, label: string}>) => {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              link.type === 'live' || link.type === 'demo'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {link.type === 'github' && <Github size={14} />}
            {link.type === 'live' && <ExternalLink size={14} />}
            {link.type === 'demo' && <Globe size={14} />}
            {link.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Wallace Ralak
              </span>
            </h1>
            
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0">
          {/* Render particles only on client to avoid hydration mismatch */}
          {isClient && particlePositions.map((particle, i) => (
            <div
              key={i}
              className="absolute bg-cyan-400/20 rounded-full"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s linear infinite`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center border-4 border-slate-950 overflow-hidden">
                {/* Profile Image Placeholder - Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                  WR
                </div>
                {/* If you have an image, use this instead: */}
                 <Image 
                  src="/profile.jpeg" // Replace with your image path
                  alt="Wallace Ralak"
                  fill
                  className="object-cover"
                  sizes="160px"
                  priority
                /> 
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Wallace Ralak
              </span>
            </h2>
            <p className="text-2xl md:text-4xl font-light text-slate-300">
              DevOps & Software Engineer
            </p>
          </div>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building the future of technology in Africa and beyond through scalable software, 
            AI innovation, and reliable engineering practices
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Let&apos;s Connect
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              View My Work
            </button>
            <button 
              onClick={handleDownloadCV}
              className="group px-8 py-4 border-2 border-emerald-500 rounded-full font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-slate-400 transition-colors ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
            <a href="mailto:wallaceralak@gmail.com"
               className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>

          <div className="pt-12">
            <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h3>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-xl">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              I&apos;m a DevOps and Software Engineer with hands-on experience in full-stack development, 
              AI engineering, and cloud infrastructure. My passion lies in creating practical, high-impact 
              software that merges AI innovation with reliable engineering practices.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              With a proven track record of building and deploying AI-driven applications and automation 
              systems using modern frameworks and scalable architectures, I specialize in CI/CD automation, 
              Docker, AWS, and Terraform, alongside strong foundations in machine learning model integration 
              and intelligent agents.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              I&apos;m committed to driving the future of technology in Africa and beyond by delivering solutions 
              that are not only innovative but also reliable, scalable, and built to last.
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Mombasa, Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail size={20} className="text-cyan-400" />
                  <span>wallaceralak@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={20} className="text-cyan-400" />
                  <span>+254718600199</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} 
                   className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${job.color} rounded-l-3xl`}></div>
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{job.title}</h4>
                      <p className="text-xl text-cyan-400 mb-1">{job.company}</p>
                      <p className="text-slate-400">{job.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm whitespace-nowrap">
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-300 flex items-start text-lg">
                        <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{project.name}</h4>
                      <p className="text-cyan-400">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                        {project.year}
                      </span>
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-950 rounded-full text-sm text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {renderProjectLinks(project.links)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} 
                   className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {data.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-950 rounded-lg text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Build Something Great
            </span>
          </h3>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I&apos;m currently open to new opportunities, collaborations, and exciting projects. 
            Whether you have an idea you want to bring to life or just want to connect, I&apos;d love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:wallaceralak@gmail.com" 
                 className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <Mail size={24} />
                Get In Touch
              </a>
              <button 
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-emerald-500 rounded-full text-lg font-semibold hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105">
                <Download size={24} />
                Download CV
              </button>
            </div>
            
            <div className="flex justify-center gap-6 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-slate-900 rounded-full transition-all duration-300 hover:scale-110 border border-slate-700 ${social.color.replace('hover:', 'hover:bg-gradient-to-r hover:')}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">
                © 2026 Wallace Ralak. All rights reserved.
              </p>
              <p className="text-slate-500 mt-1 text-sm">
                Crafted with passion in Mombasa, Kenya 🇰🇪
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
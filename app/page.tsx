'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Menu, X, ArrowDown, 
  Briefcase, Users, Rocket, Dribbble, ExternalLink, Globe, Twitter, Instagram, 
  Figma, Terminal, Server, Brain, Smartphone, Shield, Palette, Layers, Zap,
  Dock, FastForward, Database as DatabaseIcon, FileJson,
  Sparkles, Flame, Gitlab, Codepen,
  Coffee as CoffeeIcon, Trello as TrelloIcon, Circle, GitBranch, MessageCircle, Send
} from 'lucide-react';

// Custom icon components for technologies
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    'JavaScript': <Code className="w-4 h-4" />,
    'Python': <Code className="w-4 h-4" />,
    'TypeScript': <Code className="w-4 h-4" />,
    'React': <Code className="w-4 h-4" />,
    'Next.js': <Rocket className="w-4 h-4" />,
    'Node.js': <Code className="w-4 h-4" />,
    'Vue': <Codepen className="w-4 h-4" />,
    'Angular': <Circle className="w-4 h-4" />,
    'Java': <CoffeeIcon className="w-4 h-4" />,
    'Go': <Terminal className="w-4 h-4" />,
    'Rust': <Flame className="w-4 h-4" />,
    'Ruby': <Code className="w-4 h-4" />,
    'Dart': <Code className="w-4 h-4" />,
    'PHP': <Code className="w-4 h-4" />,
    'C++': <Code className="w-4 h-4" />,
    'TensorFlow': <Code className="w-4 h-4" />,
    'PyTorch': <Code className="w-4 h-4" />,
    'FastAPI': <FastForward className="w-4 h-4" />,
    'PostgreSQL': <Database className="w-4 h-4" />,
    'MySQL': <DatabaseIcon className="w-4 h-4" />,
    'MongoDB': <FileJson className="w-4 h-4" />,
    'Redis': <Database className="w-4 h-4" />,
    'Firebase': <Flame className="w-4 h-4" />,
    'Docker': <Dock className="w-4 h-4" />,
    'Kubernetes': <Code className="w-4 h-4" />,
    'AWS': <Cloud className="w-4 h-4" />,
    'Terraform': <Code className="w-4 h-4" />,
    'Jenkins': <Code className="w-4 h-4" />,
    'Nginx': <Server className="w-4 h-4" />,
    'Git': <GitBranch className="w-4 h-4" />,
    'GraphQL': <Sparkles className="w-4 h-4" />,
    'Express': <Server className="w-4 h-4" />,
    'Django': <Code className="w-4 h-4" />,
    'Laravel': <Code className="w-4 h-4" />,
    'Flutter': <Smartphone className="w-4 h-4" />,
    'Remix': <Code className="w-4 h-4" />,
    'Tailwind CSS': <Palette className="w-4 h-4" />,
    'LangChain': <Brain className="w-4 h-4" />,
    'Hugging Face': <Brain className="w-4 h-4" />,
    'OpenAI API': <Brain className="w-4 h-4" />,
    'RAG Pipelines': <Layers className="w-4 h-4" />,
    'Model Fine-tuning': <Zap className="w-4 h-4" />,
    'SQL': <Database className="w-4 h-4" />,
    'GitLab CI/CD': <Gitlab className="w-4 h-4" />,
    'Linux': <Terminal className="w-4 h-4" />,
    'Ansible': <Server className="w-4 h-4" />,
    'EC2': <Cloud className="w-4 h-4" />,
    'S3': <Cloud className="w-4 h-4" />,
    'RDS': <Database className="w-4 h-4" />,
    'GitHub': <Github className="w-4 h-4" />,
    'GitLab': <Gitlab className="w-4 h-4" />,
    'VS Code': <Code className="w-4 h-4" />,
    'Jira': <TrelloIcon className="w-4 h-4" />,
    'Figma': <Figma className="w-4 h-4" />,
    'Postman': <Server className="w-4 h-4" />,
    'Swagger': <FileJson className="w-4 h-4" />,
    'React Native': <Smartphone className="w-4 h-4" />,
  };

  return icons[name] || <Code className="w-4 h-4" />;
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: "Hi! I'm Wallace's portfolio assistant. Ask me about his projects, skills, experience, or anything else!", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');

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

  // Glassmorphism cursor
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') || 
                           target.closest('button') ||
                           target.style.cursor === 'pointer';
      setCursorVisible(!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    const response = generateResponse(inputMessage.toLowerCase());
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInputMessage('');
  };

  const generateResponse = (message: string): string => {
    if (message.includes('project') || message.includes('work')) {
      return "Wallace has worked on several exciting projects including Kontorva (recruitment SaaS), HAYA (travel platform), Tukai (events discovery), Solgates Fashion (e-commerce), and MyLook (African fashion marketplace). Each showcases his expertise in full-stack development!";
    }
    if (message.includes('skill') || message.includes('technology')) {
      return "Wallace is proficient in JavaScript, TypeScript, React, Next.js, Node.js, Python, PHP, and many more. He specializes in DevOps tools like Docker, Kubernetes, AWS, and has experience with databases including PostgreSQL, MySQL, and MongoDB.";
    }
    if (message.includes('experience') || message.includes('background')) {
      return "Wallace has over 5 years of experience working with various companies globally. He's a DevOps & Software Engineer with expertise in building scalable web applications and implementing CI/CD pipelines.";
    }
    if (message.includes('contact') || message.includes('hire')) {
      return "You can contact Wallace through his email or LinkedIn. He's always open to discussing new opportunities and collaborations!";
    }
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Nice to meet you. I'm here to tell you more about Wallace's portfolio and work.";
    }
    return "I'm not sure about that specific question, but feel free to ask about Wallace's projects, skills, experience, or anything else from his portfolio!";
  };

  const skills = {
    'AI & Machine Learning': {
      icon: <Brain className="w-6 h-6" />,
      items: ['TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'OpenAI API', 'RAG Pipelines', 'FastAPI', 'Model Fine-tuning']
    },
    'Programming Languages': {
      icon: <Terminal className="w-6 h-6" />,
      items: ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust', 'Ruby', 'Dart', 'SQL', 'PHP', 'C++']
    },
    'Frontend Development': {
      icon: <Palette className="w-6 h-6" />,
      items: ['React', 'Next.js', 'React Native', 'Vue', 'Angular', 'Remix', 'Tailwind CSS', 'Flutter', 'TypeScript']
    },
    'Backend & APIs': {
      icon: <Server className="w-6 h-6" />,
      items: ['Node.js', 'Django', 'Express', 'Laravel', 'FastAPI', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis', 'GraphQL']
    },
    'DevOps & Cloud': {
      icon: <Cloud className="w-6 h-6" />,
      items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'Linux', 'Ansible']
    },
    'Tools & Platforms': {
      icon: <GitBranch className="w-6 h-6" />,
      items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Jira', 'Figma', 'Postman', 'Swagger']
    }
  };

  const experience = [
    {
      title: 'Freelance Software & AI Engineer',
      company: 'Self-Employed',
      companyUrl: null,
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
      companyUrl: 'https://valhko.com',
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
      companyUrl: 'https://digitalnexusai.com',
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
      companyUrl: 'https://gracifytechnologies.com',
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
      companyUrl: 'https://platform.kontorva.com/',
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
      name: 'Kontorva Platform',
      subtitle: 'Recruitment SaaS Platform',
      description: 'A comprehensive SaaS platform that revolutionizes recruitment by connecting recruiters with top developers worldwide. Features include advanced matching algorithms, real-time collaboration tools, automated interview scheduling, and detailed analytics dashboard. Built with modern React frontend for seamless user experience and robust Laravel backend with MySQL for scalable data management.',
      tech: ['React', 'Laravel', 'MySQL', 'SaaS', 'API Development'],
      year: '2024-2025',
      gradient: 'from-indigo-600 to-purple-600',
      links: [
        { type: 'live', url: 'https://platform.kontorva.com/', label: 'Live Platform' }
      ]
    },
    {
      name: 'HAYA',
      subtitle: 'Travel SaaS Platform',
      description: 'An innovative SaaS platform designed for tour operators and travel agencies, featuring AI-powered itinerary generation, dynamic pricing optimization, and comprehensive booking management. Enables travel businesses to create personalized travel experiences, manage inventory in real-time, and provide seamless customer journeys from booking to post-trip support.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'AI Integration'],
      year: '2025',
      gradient: 'from-blue-600 to-cyan-600',
      links: [
        { type: 'live', url: 'https://www.usehaya.com/', label: 'Live Platform' },
      ]
    },
    {
      name: 'Tukai',
      subtitle: 'Events Discovery Platform',
      description: 'A mobile-first platform that transforms how people discover and attend local events. Connects users with nearby concerts, festivals, art exhibitions, and cultural experiences through real-time listings, personalized recommendations, and social features. Includes interactive maps, event filtering, and seamless ticket purchasing integration.',
      tech: ['React Native', 'API Integration', 'Location Services', 'Real-time Data'],
      year: '2025',
      gradient: 'from-purple-600 to-pink-600',
      links: [
        { type: 'live', url: 'https://www.tukai.co/', label: 'Live Platform' },
      ]
    },
    {
      name: 'Solgates Fashion',
      subtitle: 'E-commerce Platform',
      description: 'A complete rebuild of a fashion e-commerce platform using modern web technologies. Features include advanced product catalog management, personalized shopping recommendations, secure payment processing, inventory tracking, and comprehensive analytics. Optimized for performance with server-side rendering and modern UI/UX design principles.',
      tech: ['Remix', 'React', 'Modern Web Stack', 'UI/UX Design'],
      year: '2025',
      gradient: 'from-orange-600 to-red-600',
      links: [
        { type: 'live', url: 'https://solgates.com/', label: 'Live Site' },
      ]
    },
    {
      name: 'MyLook',
      subtitle: 'African Fashion Marketplace',
      description: 'A culturally-focused mobile marketplace celebrating African fashion and heritage. Enables users to discover, browse, and purchase authentic traditional African dresses and contemporary fashion pieces. Features include virtual try-on technology, artisan spotlight, cultural storytelling, secure mobile payments, and direct connections between buyers and African artisans.',
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

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/WRalak', label: 'GitHub', color: 'hover:text-[#B4E50D]' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/wallace-ralak-bb66482b9/', label: 'LinkedIn', color: 'hover:text-[#B4E50D]' },
    { icon: <Twitter size={24} />, url: 'https://x.com/home', label: 'Twitter', color: 'hover:text-[#B4E50D]' },
    { icon: <Dribbble size={24} />, url: 'https://dribbble.com/', label: 'Dribbble', color: 'hover:text-[#B4E50D]' },
    { icon: <Figma size={24} />, url: 'https://www.figma.com/Wallace_Ralak', label: 'Figma', color: 'hover:text-[#B4E50D]' },
    { icon: <Instagram size={24} />, url: 'https://instagram.com/wallaceralak', label: 'Instagram', color: 'hover:text-[#B4E50D]' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProjectLinks = (links: Array<{type: string, url: string, label: string}>) => {
    return (
      <div className="mt-6 space-y-3">
        {links.map((link, index) => (
          index === 0 ? (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B4E50D] text-gray-900 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-[#9dc70c] hover:shadow-lg hover:scale-105"
            >
              {link.type === 'github' && <Github size={16} />}
              {link.type === 'live' && <ExternalLink size={16} />}
              {link.type === 'demo' && <Globe size={16} />}
              {link.label}
            </a>
          ) : (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                link.type === 'live' || link.type === 'demo'
                  ? 'bg-[#B4E50D] text-gray-900 hover:shadow-lg hover:shadow-[#B4E50D]/50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {link.type === 'github' && <Github size={14} />}
              {link.type === 'live' && <ExternalLink size={14} />}
              {link.type === 'demo' && <Globe size={14} />}
              {link.label}
            </a>
          )
        ))}
      </div>
    );
  };

  const renderCompanyLink = (company: string, url: string | null) => {
    if (!url) {
      return <span className="text-xl text-[#B4E50D]">{company}</span>;
    }
    
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xl text-gray-900 font-semibold group"
      >
        {company}
        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#B4E50D]/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#B4E50D] rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">WR</span>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="text-gray-900">
                  Wallace Ralak
                </span>
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-[#B4E50D] text-gray-900 shadow-lg' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
                      ? 'bg-[#B4E50D] text-gray-900'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Image on right, text on left */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B4E50D]/10 via-[#B4E50D]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text on left */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-gray-600">
                    Wallace  <span className="text-[#B4E50D]">Ralak</span>
                  </span>
                </h2>
                <p className="text-xl md:text-2xl lg:text-4xl font-light text-gray-700">
                  DevOps & Software Engineer
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} className="text-[#B4E50D]" />
                  <span className="text-lg md:text-xl">Mombasa, Kenya 🇰🇪</span>
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
                Building the future of technology in Africa and beyond through scalable software, 
                AI innovation, and reliable engineering practices
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-[#B4E50D] text-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-[#B4E50D]/50 transition-all duration-300 hover:scale-105">
                  Let&apos;s Connect
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 border-2 border-[#B4E50D] rounded-full font-semibold hover:bg-[#B4E50D]/10 transition-all duration-300">
                  View My Work
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-gray-600 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
                <a href="mailto:wallaceralak@gmail.com"
                   className="flex items-center gap-2 text-gray-600 hover:text-[#B4E50D] transition-colors">
                  <Mail size={24} />
                  <span className="text-sm">Email</span>
                </a>
              </div>

              <div className="pt-12">
                <ArrowDown className="w-8 h-8 text-[#B4E50D] animate-bounce" />
              </div>
            </div>

            {/* Image on right */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#B4E50D] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-[#B4E50D] to-gray-900 flex items-center justify-center border-8 border-white overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                    WR
                  </div>
                  <Image 
                    src="/port.png"
                    alt="Wallace Ralak"
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-[#B4E50D] group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-8 text-center text-gray-900">
            About Me
          </h3>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m a DevOps and Software Engineer with hands-on experience in full-stack development, 
              AI engineering, and cloud infrastructure. My passion lies in creating practical, high-impact 
              software that merges AI innovation with reliable engineering practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a proven track record of building and deploying AI-driven applications and automation 
              systems using modern frameworks and scalable architectures, I specialize in CI/CD automation, 
              Docker, AWS, and Terraform, alongside strong foundations in machine learning model integration 
              and intelligent agents.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m committed to driving the future of technology in Africa and beyond by delivering solutions 
              that are not only innovative but also reliable, scalable, and built to last.
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} className="text-[#B4E50D]" />
                  <span className="text-sm">Mombasa, Kenya</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={20} className="text-[#B4E50D]" />
                  <span className="text-sm">wallaceralak@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={20} className="text-[#B4E50D]" />
                  <span className="text-sm">+254718600199</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} 
                   className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#B4E50D]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#B4E50D]/10">
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${job.color} rounded-l-3xl`}></div>
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{job.title}</h4>
                      <div className="mb-1">
                        {renderCompanyLink(job.company, job.companyUrl)}
                      </div>
                      <p className="text-gray-600 text-sm">{job.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm whitespace-nowrap">
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-base">
                        <span className="text-[#B4E50D] mr-3 mt-1 flex-shrink-0">▹</span>
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
          <h3 className="text-5xl font-bold mb-16 text-center text-gray-900">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#B4E50D]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B4E50D]/20"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-bl-full opacity-10 hover:opacity-20 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">{project.name}</h4>
                      <p className="text-gray-900 font-semibold text-sm">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-900 text-base mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-700 border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {renderProjectLinks(project.links)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Updated with icons */}
      <section id="skills" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 text-gray-900">
              Technical Skills
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I&apos;ve mastered through hands-on experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#B4E50D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B4E50D]/10 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#B4E50D]/10 to-[#B4E50D]/20 rounded-xl group-hover:from-[#B4E50D]/20 group-hover:to-[#B4E50D]/30 transition-all duration-300">
                    <div className="text-[#B4E50D] group-hover:scale-110 transition-transform">
                      {data.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{category}</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {data.items.map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 rounded-lg hover:bg-[#B4E50D]/5 hover:border-[#B4E50D]/20 border border-transparent transition-all duration-300 group/item"
                    >
                      <div className="text-gray-600 group-hover/item:text-[#B4E50D] transition-colors">
                        <TechIcon name={skill} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover/item:text-gray-900 truncate">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Proficiency</span>
                    <span className="text-[#B4E50D] font-semibold">Expert</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#B4E50D] to-[#9dc70c] rounded-full w-[90%]"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B4E50D]/10 to-[#B4E50D]/20 rounded-2xl mb-4">
                  <Zap className="w-8 h-8 text-[#B4E50D]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Versatile Stack</h4>
                <p className="text-gray-600">
                  Full-stack expertise from AI/ML to DevOps and everything in between
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B4E50D]/10 to-[#B4E50D]/20 rounded-2xl mb-4">
                  <Layers className="w-8 h-8 text-[#B4E50D]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Modern Stack</h4>
                <p className="text-gray-600">
                  Cutting-edge technologies and industry best practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B4E50D]/10 to-[#B4E50D]/20 rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-[#B4E50D]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Production Ready</h4>
                <p className="text-gray-600">
                  Focus on scalability, security, and maintainability
                </p>
              </div>
            </div>
            
            {/* Skill Cloud */}
            <div className="mt-12 pt-12 border-t border-gray-100">
              <h4 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Technology Cloud
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'React', 'Next.js', 'Python', 'TypeScript', 'Node.js', 'Docker',
                  'AWS', 'Kubernetes', 'TensorFlow', 'PyTorch', 'PostgreSQL',
                  'MongoDB', 'GraphQL', 'FastAPI', 'Terraform', 'Git'
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-[#B4E50D]/10 hover:border-[#B4E50D] border border-gray-200 transition-all duration-300 hover:scale-105"
                  >
                    <TechIcon name={tech} />
                    <span className="text-sm font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B4E50D]/10 via-[#B4E50D]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6 text-gray-900">
            Let&apos;s Build Something Great
          </h3>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I&apos;m currently open to new opportunities, collaborations, and exciting projects. 
            Whether you have an idea you want to bring to life or just want to connect, I&apos;d love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:wallaceralak@gmail.com" 
                 className="inline-flex items-center gap-3 px-10 py-5 bg-[#B4E50D] text-gray-900 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#B4E50D]/50 transition-all duration-300 hover:scale-105">
                <Mail size={24} />
                Get In Touch
              </a>
            </div>
            
            <div className="flex justify-center gap-6 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-full transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-[#B4E50D] hover:text-[#B4E50D]"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-16 relative z-10">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h4 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Send Me a Message
            </h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4E50D] focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4E50D] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4E50D] focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B4E50D] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#B4E50D] text-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-[#B4E50D]/50 transition-all duration-300 hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2026 Wallace Ralak. All rights reserved.
              </p>
              <p className="text-gray-500 mt-1 text-xs">
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
                  className="text-gray-500 hover:text-[#B4E50D] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Glassmorphism Cursor */}
      {cursorVisible && (
        <motion.div
          className="fixed top-0 left-0 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg shadow-white/20 pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      )}

      {/* Chatbot */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 bg-[#B4E50D] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 text-gray-900" />
          </button>
        ) : (
          <motion.div
            className="w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="p-4 bg-[#B4E50D] rounded-t-2xl flex justify-between items-center">
              <h3 className="text-gray-900 font-semibold">Portfolio Assistant</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-900 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.isUser
                        ? 'bg-[#B4E50D] text-gray-900'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B4E50D]"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-[#B4E50D] text-gray-900 rounded-lg hover:bg-[#9dc70c] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

    </div>
  );
}
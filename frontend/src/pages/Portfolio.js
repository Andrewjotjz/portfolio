import { useState, useEffect } from "react"
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe,
  Moon,
  Sun,
  BookOpen,
  Users,
  TrendingUp,
  Coffee,
  Zap,
  Target,
  Award,
  Play,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "journal", "toolbox", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const skills = {
    frontend: ["ReactJS", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    backend: ["NodeJS", "ExpressJS", "RESTful APIs", "Python"],
    database: ["MongoDB", "PostgreSQL", "NoSQL"],
    tools: ["Git & GitHub", "Postman", "JIRA", "Tableau", "Moqups"],
    cloud: ["Microsoft 365", "Google Admin Console", "Microsoft Entra"],
  }

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Empire Commercial Buildings Solutions",
      period: "May 2024 - Current",
      location: "Melbourne, Victoria",
      description: "Developed a Procurement Management System with role-based access control and real-time tracking.",
      achievements: [
        "Built full-stack procurement management system",
        "Implemented RESTful APIs and database design",
        "Applied Agile practices using JIRA",
        "Handled complete development lifecycle",
      ],
    },
    {
      title: "Purchaser and ICT Support",
      company: "Empire Commercial Buildings Solutions",
      period: "March 2023 - May 2024",
      location: "Melbourne, Victoria",
      description: "Provided ICT support while developing web applications and managing systems.",
      achievements: [
        "Designed and maintained web-based applications",
        "Managed servers ensuring security and performance",
        "Provided technical support for hardware/software issues",
        "Implemented security measures for ICT systems",
      ],
    },
    {
      title: "Digital Support Case Officer",
      company: "Unified Healthcare Group",
      period: "Oct 2021 - Feb 2023",
      location: "Melbourne, Victoria",
      description: "Provided technical support for medEbridge platform and managed customer relations.",
      achievements: [
        "Delivered technical support over phone",
        "Managed customer escalations professionally",
        "Maintained accurate patient case notes",
        "Exceeded customer service expectations",
      ],
    },
  ]

  const techJournal = [
    {
      date: "Dec 2024",
      title: "Mastering React Server Components",
      excerpt: "Deep dive into RSC patterns and how they're changing the React ecosystem...",
      tags: ["React", "Next.js", "Performance"],
      readTime: "5 min read",
    },
    {
      date: "Nov 2024",
      title: "MongoDB Aggregation Pipeline Magic",
      excerpt: "Learned advanced aggregation techniques for complex data transformations...",
      tags: ["MongoDB", "Database", "Backend"],
      readTime: "8 min read",
    },
    {
      date: "Oct 2024",
      title: "Debugging React Hydration Errors",
      excerpt: "Finally cracked the mystery behind those pesky hydration mismatches...",
      tags: ["React", "Debugging", "SSR"],
      readTime: "6 min read",
    },
  ]

  const toolbox = {
    development: [
      { name: "VS Code", description: "Primary IDE with custom theme", icon: "💻" },
      { name: "Git & GitHub", description: "Version control and collaboration", icon: "🔧" },
      { name: "Postman", description: "API testing and documentation", icon: "📡" },
      { name: "MongoDB Compass", description: "Database visualization", icon: "🗄️" },
    ],
    productivity: [
      { name: "Notion", description: "Project planning and notes", icon: "📝" },
      { name: "JIRA", description: "Agile project management", icon: "📊" },
      { name: "Figma", description: "UI/UX design and prototyping", icon: "🎨" },
      { name: "Slack", description: "Team communication", icon: "💬" },
    ],
    learning: [
      { name: "YouTube", description: "Tech tutorials and conferences", icon: "📺" },
      { name: "GitHub", description: "Open source exploration", icon: "🌟" },
      { name: "Stack Overflow", description: "Problem solving community", icon: "❓" },
      { name: "Dev.to", description: "Developer articles and insights", icon: "📚" },
    ],
  }

  const detailedProjects = [
    {
      id: 1,
      title: "Procurement Management System",
      description:
        "A comprehensive system to streamline purchase request workflows with role-based access control and real-time status tracking.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
      features: [
        "Role-based access control",
        "Real-time status tracking",
        "Responsive design",
        "RESTful API integration",
      ],
      challenges: "Managing complex user permissions and ensuring real-time updates across multiple user roles.",
      solution: "Implemented JWT-based authentication with role middleware and WebSocket connections for live updates.",
      improvements: "Would add automated testing suite and implement caching for better performance.",
      demo: "https://procurement-demo.com",
      github: "https://github.com/andrewjotjz/procurement-system",
      screenshots: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description:
        "Created efficient dashboards using Tableau for business intelligence visualization during internship at Origin Energy.",
      technologies: ["Tableau", "PostgreSQL", "Python", "PowerShell"],
      features: [
        "Complex SQL queries",
        "Automated data extraction",
        "Business intelligence visualization",
        "Custom reporting scripts",
      ],
      challenges: "Processing large datasets efficiently while maintaining dashboard responsiveness.",
      solution: "Optimized SQL queries and implemented data caching strategies with automated refresh cycles.",
      improvements: "Would migrate to a modern stack like React + D3.js for more interactive visualizations.",
      screenshots: ["/placeholder.svg?height=300&width=500"],
    },
  ]

  const stats = {
    githubCommits: "500+",
    projectsCompleted: "15+",
    technologiesUsed: "20+",
    coffeeConsumed: "∞",
  }

  const projects = [
    {
      title: "Procurement Management System",
      description:
        "A comprehensive system to streamline purchase request workflows with role-based access control and real-time status tracking.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Tailwind CSS"],
      features: [
        "Role-based access control",
        "Real-time status tracking",
        "Responsive design",
        "RESTful API integration",
      ],
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Created efficient dashboards using Tableau for business intelligence visualization during internship at Origin Energy.",
      technologies: ["Tableau", "PostgreSQL", "Python", "PowerShell"],
      features: [
        "Complex SQL queries",
        "Automated data extraction",
        "Business intelligence visualization",
        "Custom reporting scripts",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Andrew JOT</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "experience", "projects", "journal", "toolbox", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {["home", "about", "skills", "experience", "projects", "journal", "toolbox", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleDarkMode} className="flex items-center py-2 text-gray-700 hover:text-blue-600">
                {isDarkMode ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
                AJ
              </div>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 cursor-pointer"
              onClick={() => setShowEasterEgg(true)}
            >
              Andrew Jmin Zeat JOT
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full Stack Developer specializing in MERN stack with 2+ years of experience building scalable web
              applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Andrewjotjz" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-jmin-zeat-jot-36b48b134"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:andrewjotjz@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="text-center">
            <ChevronDown className="mx-auto animate-bounce text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                <Code size={120} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Full Stack Developer from Melbourne</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a MERN stack developer based in Melbourne, with close to 2 years' experience building full-stack
                applications. Mostly self-taught and driven by curiosity, I've built and deployed real projects,
                including a Procurement Management System designed to streamline purchasing workflows.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm comfortable working across the full stack: from designing responsive front ends in ReactJS to
                building APIs with ExpressJS and managing data with MongoDB. What excites me is being part of a team
                that values collaboration, continuous learning and solving problems with code.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Melbourne, VIC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Status</h4>
                  <p className="text-gray-600">Available for hire</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">2+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600">Bachelor of IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Server className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Database className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Code className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Globe className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Cloud & Admin</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">{exp.period}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{exp.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <Code size={80} className="text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    View Details <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Journal Section */}
      <section id="journal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Journal</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              My learning journey and technical discoveries. Always exploring new technologies and sharing insights.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {techJournal.map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-medium">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                  Read More <ExternalLink size={14} className="ml-1" />
                </button>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center mx-auto">
              <BookOpen size={20} className="mr-2" />
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section id="toolbox" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Toolbox</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              The tools and technologies that power my daily workflow and help me build amazing things.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
                <div className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {Object.entries(toolbox).map(([category, tools]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize flex items-center">
                  {category === "development" && <Code className="mr-3 text-blue-600" size={24} />}
                  {category === "productivity" && <TrendingUp className="mr-3 text-green-600" size={24} />}
                  {category === "learning" && <BookOpen className="mr-3 text-purple-600" size={24} />}
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-3">{tool.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Deep Dives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Deep Dives</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Detailed breakdowns of my key projects, including challenges faced and solutions implemented.
            </p>
          </div>
          <div className="space-y-12">
            {detailedProjects.map((project, index) => (
              <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <Zap size={16} className="text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{project.challenges}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Future Improvements:</h4>
                        <p className="text-gray-600">{project.improvements}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                          <Play size={16} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="space-y-4">
                      {project.screenshots.map((screenshot, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                          <img
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            className="w-full h-48 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Hire Me?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Target className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Stack Developer</h3>
              <p className="text-gray-600 mb-6">
                Looking for a MERN stack developer who can handle both frontend and backend? I've got you covered with
                real-world experience.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  2+ years MERN experience
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Full-stack project delivery
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Agile development practices
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Users className="text-green-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">IT Support Specialist</h3>
              <p className="text-gray-600 mb-6">
                Need someone who can bridge technical and business needs? My IT support background makes me perfect for
                this role.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Microsoft 365 Administration
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  End-user technical support
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  System documentation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <TrendingUp className="text-purple-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Graduate Program</h3>
              <p className="text-gray-600 mb-6">
                Perfect for graduate programs that value self-driven learners with practical experience and growth
                mindset.
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Bachelor of IT (Monash)
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Self-taught developer
                </li>
                <li className="flex items-center text-gray-600">
                  <Award size={16} className="text-green-600 mr-2" />
                  Continuous learner
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Let's Talk About Your Needs
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm currently open to junior developer roles, IT support, or graduate opportunities. Let's discuss how I
              can contribute to your team!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:andrewjotjz@gmail.com" className="text-blue-600 hover:text-blue-700">
                andrewjotjz@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+61435303047" className="text-blue-600 hover:text-blue-700">
                +61 435 303 047
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
              <a href="https://github.com/Andrewjotjz" className="text-blue-600 hover:text-blue-700">
                @Andrewjotjz
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="mailto:andrewjotjz@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Andrew Jmin Zeat JOT. Built with React and Tailwind CSS.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Andrewjotjz" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrew-jmin-zeat-jot-36b48b134"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:andrewjotjz@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md mx-4">
            <div className="text-center">
              <Coffee size={48} className="text-brown-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You Found the Easter Egg! 🥚</h3>
              <p className="text-gray-600 mb-6">
                Fun fact: I debug best with a good cup of coffee and some lo-fi music. My record is fixing 7 bugs in one
                coffee session! ☕
              </p>
              <button
                onClick={() => setShowEasterEgg(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

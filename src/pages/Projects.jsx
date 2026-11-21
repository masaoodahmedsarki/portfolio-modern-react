
import { ExternalLink, Code2, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Dev-Shop',
    category: 'E-Commerce Website',
    description:
      'A modern e-commerce website with product listing, API integration, shopping cart and responsive user interface.',
    technologies: ['React.js', 'Tailwind CSS', 'API', 'React Router'],
    github: '',
    number: '01'
  },
  {
    title: 'Quiz Application',
    category: 'Web Application',
    description:
      'An interactive quiz application with Firebase authentication and database integration.',
    technologies: ['React.js', 'Firebase', 'JavaScript', 'CSS'],
    github: 'https://github.com/masaoodahmedsarki/Quiz-App',
    number: '02'
  },
  {
    title: 'API Integration',
    category: 'Frontend Development',
    description:
      'A product management application using GET and POST methods to fetch and add products through APIs.',
    technologies: ['React.js', 'Axios', 'REST API', 'JavaScript'],
    github: '',
    number: '03'
  },
  {
    title: 'AI Fitness Coach',
    category: 'AI Application',
    description:
      'An AI-powered fitness application concept with personalized fitness goals, diet plans and workout tracking.',
    technologies: ['React', 'AI', 'Firebase'],
    github: '',
    number: '04'
  },
  {
    title: 'Personal Portfolio',
    category: 'Portfolio Website',
    description:
      'A modern developer portfolio showcasing my skills, projects, experience and contact information.',
    technologies: ['React.js', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/masaoodahmedsarki/portfolio.nextjs',
    number: '05'
  }
]

function Projects() {
  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            MY WORK
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Here are some of my projects where I have applied
            my development skills to build practical applications.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.number}
              className="group bg-[#111827] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 transition duration-300"
            >

              {/* Project Header */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-[#111827] flex items-center justify-center relative">

                <span className="absolute top-5 left-5 text-gray-500 text-sm">
                  PROJECT {project.number}
                </span>

                <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition duration-300">

                  <Layers
                    size={38}
                    className="text-cyan-400"
                  />

                </div>

              </div>

              {/* Project Content */}
              <div className="p-7">

                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {project.category}
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm leading-7 min-h-20">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-full"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Project Links */}
                <div className="flex items-center gap-5 mt-7 pt-5 border-t border-white/10">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition text-sm"
                    >
                      <FaGithub size={19} />
                      Source Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Code2 size={19} />
                      Project Details
                    </span>
                  )}

                  <span className="text-gray-600 text-xs">
                    {project.number}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects

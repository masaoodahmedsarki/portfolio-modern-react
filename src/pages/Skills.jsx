
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
  Server
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js']
  },
  {
    title: 'Styling & UI',
    icon: Palette,
    skills: ['Tailwind CSS', 'Responsive Design', 'Flexbox', 'CSS Grid']
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'API Integration']
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Database Design']
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman']
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['API Integration', 'Authentication', 'Deployment']
  }
]

function Skills() {
  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            MY EXPERTISE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Technologies and tools I use to build modern,
            responsive and user-friendly web applications.
          </p>

        </div>

        {/* Skills Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <div
                key={index}
                className="group border border-white/10 bg-[#111827] rounded-2xl p-7 hover:border-cyan-500/50 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition">

                  <Icon size={28} className="text-cyan-400" />

                </div>

                <h2 className="text-xl font-bold text-white mb-6">
                  {category.title}
                </h2>

                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:text-cyan-400 hover:border-cyan-500/40 transition"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Skills

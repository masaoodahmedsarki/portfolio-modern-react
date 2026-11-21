
import {
  Code2,
  Layers,
  Database,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'I build modern, interactive and user-friendly interfaces using React.js, JavaScript and modern frontend technologies.',
    number: '01'
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description:
      'I develop complete web applications with frontend, backend functionality and database integration.',
    number: '02'
  },
  {
    icon: Database,
    title: 'API Integration',
    description:
      'I integrate REST APIs, fetch dynamic data and connect frontend applications with backend services.',
    number: '03'
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description:
      'I create responsive websites that provide a smooth experience on mobile, tablet and desktop devices.',
    number: '04'
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'I create professional websites using React.js, Next.js and Tailwind CSS.',
    number: '05'
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description:
      'I focus on clean code, performance improvements and better user experience.',
    number: '06'
  }
]

function Services() {
  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            WHAT I OFFER
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-400">Services</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            I provide web development services focused on
            building modern, responsive and functional
            digital experiences.
          </p>

        </div>

        {/* Services Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.number}
                className="group relative bg-[#111827] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:-translate-y-2 transition duration-300"
              >

                <div className="flex justify-between items-center mb-8">

                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition">

                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </div>

                  <span className="text-gray-600 text-sm">
                    {service.number}
                  </span>

                </div>

                <h2 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-400 text-sm leading-7">
                  {service.description}
                </p>

                <div className="w-12 h-1 bg-cyan-500 rounded-full mt-7 group-hover:w-20 transition-all duration-300"></div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Services

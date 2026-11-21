
import {
  User,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ArrowRight
} from 'lucide-react'

import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            GET TO KNOW ME
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Learn more about my background, education,
            experience and passion for web development.
          </p>

        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>

            <div className="relative bg-[#111827] border border-cyan-500/20 rounded-3xl p-8 md:p-12">

              <div className="w-20 h-20 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-8">

                <User size={40} className="text-cyan-400" />

              </div>

              <h2 className="text-3xl font-bold text-white mb-5">
                Masood Ahmed
              </h2>

              <p className="text-cyan-400 font-semibold mb-6">
                Full Stack Developer
              </p>

              <p className="text-gray-400 leading-8">
                I am a Computer Science graduate and passionate
                web developer with an interest in building modern,
                responsive and user-friendly web applications.
                I work with React.js, Next.js, JavaScript and
                Tailwind CSS to turn ideas into practical
                digital experiences.
              </p>

              <div className="border-t border-white/10 mt-8 pt-7">

                <div className="flex justify-between items-center mb-5">
                  <span className="text-gray-400">Location</span>
                  <span className="text-white">Hyderabad, Pakistan</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Degree</span>
                  <span className="text-white">BS Computer Science</span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <h2 className="text-3xl font-bold text-white mb-6">
              My Journey in <span className="text-cyan-400">Technology</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              My journey in technology started with an interest
              in computers and programming. Over time, I developed
              my skills in frontend development and started building
              real-world projects using modern web technologies.
            </p>

            {/* Education */}
            <div className="flex gap-5 bg-[#111827] border border-white/10 rounded-xl p-6 mb-5 hover:border-cyan-500/40 transition">

              <div className="w-12 h-12 shrink-0 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-cyan-400" size={26} />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  Education
                </h3>

                <p className="text-cyan-400 text-sm mt-2">
                  BS Computer Science
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  University of Sindh — 2025
                </p>
              </div>

            </div>

            {/* Experience */}
            <div className="flex gap-5 bg-[#111827] border border-white/10 rounded-xl p-6 mb-5 hover:border-cyan-500/40 transition">

              <div className="w-12 h-12 shrink-0 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <BriefcaseBusiness className="text-cyan-400" size={26} />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  Development Experience
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-7">
                  Hands-on experience building responsive
                  websites, React applications and API-integrated
                  projects.
                </p>
              </div>

            </div>

            {/* Technologies */}
            <div className="flex gap-5 bg-[#111827] border border-white/10 rounded-xl p-6 mb-8 hover:border-cyan-500/40 transition">

              <div className="w-12 h-12 shrink-0 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                <Code2 className="text-cyan-400" size={26} />
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  Technologies
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-7">
                  React.js, Next.js, JavaScript, Tailwind CSS,
                  Node.js and REST APIs.
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg transition duration-300 hover:-translate-y-1"
            >
              Let's Work Together
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About

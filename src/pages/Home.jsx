
import {
  ArrowRight,
  Download,
  Code2,
  Sparkles,
  ExternalLink
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 min-h-[85vh] flex items-center">

        <div className="grid md:grid-cols-2 gap-14 items-center py-20 w-full">

          {/* LEFT CONTENT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm mb-7">

              <Sparkles size={16} />

              Available for Opportunities

            </div>

            {/* Heading */}

            <p className="text-cyan-400 font-semibold tracking-widest mb-5">

              HELLO, I'M A DEVELOPER

            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">

              Masood Ahmed

              <span className="block text-cyan-400 mt-3">

                Full Stack Developer

              </span>

            </h1>

            {/* Description */}

            <p className="text-gray-400 leading-8 mt-7 max-w-xl text-base md:text-lg">

              I build modern, responsive and user-friendly
              web applications using React, Next.js,
              JavaScript and modern technologies.

              I love turning ideas into real-world
              digital experiences.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-9">

              <Link

                to="/projects"

                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300 hover:-translate-y-1"

              >

                View Projects

                <ArrowRight size={19} />

              </Link>

              <Link

                to="/contact"

                className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition duration-300"

              >

                Contact Me

              </Link>

              {/* Download CV */}

              <a

                href="/Masood-Ahmed-CV.pdf"

                download

                className="border border-white/20 text-gray-300 px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2"

              >

                <Download size={18} />

                Download CV

              </a>

            </div>

            {/* Social Links */}

            <div className="flex items-center gap-6 mt-10">

              <a

                href="https://github.com/masaoodahmedsarki"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="GitHub"

                className="text-gray-400 hover:text-cyan-400 transition duration-300"

              >

                <FaGithub size={26} />

              </a>

              <a

                href="https://linkedin.com/in/masood-ahmed-826a90246/"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="LinkedIn"

                className="text-gray-400 hover:text-cyan-400 transition duration-300"

              >

                <FaLinkedin size={26} />

              </a>

              <a

                href="https://github.com/masaoodahmedsarki"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="GitHub Projects"

                className="text-gray-400 hover:text-cyan-400 transition duration-300"

              >

                <ExternalLink size={25} />

              </a>

            </div>

            {/* Skills Text */}

            <div className="flex flex-wrap gap-3 mt-10">

              {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'].map(
                (skill) => (

                  <span

                    key={skill}

                    className="text-xs md:text-sm border border-white/10 bg-white/5 text-gray-400 px-4 py-2 rounded-full"

                  >

                    {skill}

                  </span>

                )

              )}

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="relative flex justify-center items-center">

            {/* Glow */}

            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 blur-[110px] rounded-full"></div>

            {/* Main Card */}

            <div className="relative w-full max-w-md border border-cyan-500/30 rounded-3xl p-8 md:p-12 bg-[#111827]/90 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.12)]">

              {/* Top */}

              <div className="flex justify-between items-center mb-12">

                <div className="flex items-center gap-2 text-gray-400">

                  <Code2 size={20} className="text-cyan-400" />

                  <span className="text-sm">

                    Developer Profile

                  </span>

                </div>

                <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]"></span>

              </div>

              {/* Code Icon */}

              <div className="text-center">

                <div className="text-7xl md:text-8xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">

                  {'</>'}

                </div>

                <h2 className="text-2xl md:text-3xl font-bold mt-8">

                  Developer Mindset

                </h2>

                <p className="text-gray-400 mt-3">

                  Build. Learn. Innovate.

                </p>

              </div>

              {/* Divider */}

              <div className="border-t border-white/10 my-9"></div>

              {/* Code Details */}

              <div className="space-y-5">

                <div className="flex justify-between items-center">

                  <span className="text-gray-400 text-sm">

                    Frontend

                  </span>

                  <span className="text-cyan-400 text-sm font-semibold">

                    React / Next.js

                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-400 text-sm">

                    Styling

                  </span>

                  <span className="text-cyan-400 text-sm font-semibold">

                    Tailwind CSS

                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <span className="text-gray-400 text-sm">

                    Backend

                  </span>

                  <span className="text-cyan-400 text-sm font-semibold">

                    Node.js / Express

                  </span>

                </div>

              </div>

              {/* Bottom */}

              <div className="mt-10 text-center text-gray-500 text-xs tracking-widest">

                CODE • CREATE • DEPLOY

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )

}

export default Home

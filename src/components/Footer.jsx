
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Code2 } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-2">
            <Code2 size={26} className="text-cyan-400" />
            <span className="text-xl font-bold text-white">
              Masood<span className="text-cyan-400">.</span>
            </span>
          </div>

          <p className="text-gray-400 text-sm text-center">
            Building modern and responsive web experiences.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/masaoodahmedsarki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://linkedin.com/in/masood-ahmed-826a90246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin size={23} />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Masood Ahmed. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

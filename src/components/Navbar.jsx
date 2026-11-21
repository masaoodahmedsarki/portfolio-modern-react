
import { NavLink } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const Navbar = () => {

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/90 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <NavLink to="/" className="flex items-center gap-2">
          <Code2 className="text-cyan-400" size={30} />

          <span className="text-2xl font-bold">
            Masood<span className="text-cyan-400">.dev</span>
          </span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-all ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>

        <NavLink
          to="/contact"
          className="hidden sm:block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-lg transition"
        >
          Let's Talk
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar

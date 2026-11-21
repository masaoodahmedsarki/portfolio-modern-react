
import { useState } from 'react'
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mailtoLink = `mailto:masaoodsarki@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <section className="min-h-screen bg-[#0B1120] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Have a project idea or want to work together?
            Feel free to contact me. I would love to hear from you.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Information */}
          <div>

            <h2 className="text-2xl font-bold text-white mb-5">
              Let's Work Together
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              I am always interested in new opportunities,
              creative projects and collaborations.
              Let's build something amazing together.
            </p>

            {/* Email */}
            <div className="flex items-center gap-5 bg-[#111827] border border-white/10 rounded-xl p-5 mb-5">

              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Mail className="text-cyan-400" size={24} />
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Email
                </h3>

                <a
                  href="mailto:masaoodsarki@gmail.com"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition"
                >
                  masaoodsarki@gmail.com
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-5 bg-[#111827] border border-white/10 rounded-xl p-5 mb-5">

              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <MapPin className="text-cyan-400" size={24} />
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  Location
                </h3>

                <p className="text-gray-400 text-sm">
                  Hyderabad, Sindh, Pakistan
                </p>
              </div>

            </div>

            {/* Social Links */}
            <h3 className="text-white font-semibold mt-10 mb-5">
              Connect With Me
            </h3>

            <div className="flex items-center gap-5">

              <a
                href="https://github.com/masaoodahmedsarki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaGithub size={23} />
              </a>

              <a
                href="https://linkedin.com/in/masood-ahmed-826a90246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-lg bg-[#111827] border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaLinkedin size={23} />
              </a>

            </div>

          </div>

          {/* Right Contact Form */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-7 md:p-10">

            <div className="flex items-center gap-3 mb-8">

              <MessageCircle className="text-cyan-400" size={25} />

              <h2 className="text-2xl font-bold text-white">
                Send Me a Message
              </h2>

            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-3 transition duration-300 hover:-translate-y-1"
              >
                Send Message
                <Send size={19} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact

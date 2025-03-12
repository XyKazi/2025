import type { Route } from "./+types/home";
import Header from "~/components/header";
import { Link } from "react-router";
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu } from "lucide-react"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bjorn Heuten | Portfolio" },
    { name: "description", content: "bjornheuten.nl" },
  ];
}

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      height: 32,
      width: 32,
    },
    project: {
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(138, 75, 175, 0.2)",
      mixBlendMode: "difference" as const,
    },
    link: {
      x: cursorPosition.x - 24,
      y: cursorPosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference" as const,
    },
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
  }


  return (
    <div>
      <Header />
      <motion.section id="home" className="min-h-screen flex flex-col pt-24 md:justify-center px-6 md:px-12 lg:px-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
      > 
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div

          className="max-w-4xl order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Bjorn<span className="text-purple-500"> Heuten</span>
          </h1>
          <p className="text-lg flex flex-row md:text-xl text-gray-400 mb-8 max-w-2xl">
            Full-stack developer specializing in creating unique, performant, and accessible web applications that solve
            real-world problems.

          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
            >
              <Link to="#projects" className="flex flex-row items-center px-4 py-2">
                View my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </button>
            <button

              className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 rounded-full"
            >
              <Link to="#contact">Get in touch</Link>
            </button>
          </div>
        </div>
        <img src="/clipart.png" alt="Illustration of a developer" className=" md:order-2 order-1 w-64 md:w-44 lg:w-96 mb-8" />
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ height: [6, 12, 6] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 bg-purple-500 rounded-full"
            />
          </motion.div>
        </div>
      </motion.section>


      <section
        id="projects"
        className="min-h-screen py-24 px-6 md:px-12 lg:px-24 "
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A selection of my recent work, showcasing my skills in design, development, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "2024 Website",
              description:
                "My first ever portfolio website made in 2024.",
              image: "/2024.png?height=600&width=800",
              tags: ["React", "Tailwind CSS", "Particles.js"],
              link: "https://2024.bjornheuten.nl",
              github: "https://github.com/XyKazi/2024",
            },
            {
              title: "mid2024 Website",
              description:
                "My second ever portfolio website made in 2024.",
              image: "/mid2024.png",
              tags: ["React", "Tailwind CSS", "three.js"],
              link: "https://mid2024.bjornheuten.nl",
              github: "https://github.com/XyKazi/Bjornheuten.nl",
            },

          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank"
                    className="rounded-full flex flex-row items-center hover:bg-purple-900/20 transition-all hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </a>
                  <a href={project.github} target="_blank"
                    className="rounded-full flex flex-row items-center hover:bg-purple-900/20 transition-all hover:text-purple-400"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/XyKazi" target="_blank"
            className="rounded-full flex flex-row items-center border-gray-700 hover:border-purple-500 hover:text-purple-400"

          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
      <section
        id="skills"
        className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-purple-950/5 to-black"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            My expertise spans across various technologies and methodologies in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              icon: <Code className="h-8 w-8 text-purple-500" />,
              skills: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "HTML5/CSS3",
                "Responsive Design",
              ],
            },
            {
              title: "Backend Development",
              icon: <Code className="h-8 w-8 text-purple-500" />,
              skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "MongoDB"],
            },
            {
              title: "Tools & Methodologies",
              icon: <Code className="h-8 w-8 text-purple-500" />,
              skills: ["Git/GitHub", "Docker", "Vercel", "Agile/Scrum"],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">My Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Research & Planning",
                description: "Understanding requirements and planning architecture",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Creating wireframes and interactive prototypes",
              },
              { step: "03", title: "Development", description: "Writing clean, efficient, and maintainable code" },
              { step: "04", title: "Testing & Deployment", description: "Ensuring quality and seamless deployment" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-bold text-purple-500/20">{process.step}</div>
                <h4 className="text-lg font-semibold mt-2">{process.title}</h4>
                <p className="text-gray-400 mt-2">{process.description}</p>
                {index < 3 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-8 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-transparent w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-400">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:info@bjornheuten.nl"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      info@bjornheuten.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="h-6 w-6 text-purple-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Linkedin</h4>
                    <a
                      href="https://www.linkedin.com/in/bjorn-heuten-ba41ba296/"
                      target="_blank"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Bjorn Heuten
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="h-6 w-6 text-purple-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/XyKazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      github.com/XyKazi
                    </a>
                  </div>
                </div>
                
              </div>
            </div>

        
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="#home" className="text-2xl font-bold tracking-tighter">
              Bjorn<span className="text-purple-500"> Heuten</span>
            </Link>
            <p className="text-gray-500 mt-2">© 2025. All rights reserved.</p>
          </div>


        </div>
      </footer>
    </div>
  );
}

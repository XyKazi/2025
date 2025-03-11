import type { Route } from "./+types/home";
import Header from "~/components/header";
import { Link } from "react-router";
import { ArrowRight, Code, ExternalLink, Github, Mail, Menu } from "lucide-react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Crafting digital <span className="text-purple-500">experiences</span> that leave an impression
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            Full-stack developer specializing in creating unique, performant, and accessible web applications that solve
            real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full"
            >
              <Link to="#projects">
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

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div
            className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2"
          >
            <div
              className="w-1 bg-purple-500 rounded-full"
            />
          </div>
        </div>
      </section>


      <section
        id="projects"
        className="min-h-screen py-24 px-6 md:px-12 lg:px-24 "
      >
        <div
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A selection of my recent work, showcasing my skills in design, development, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "E-commerce Platform",
              description:
                "A full-featured online store with cart functionality, payment processing, and inventory management.",
              image: "/placeholder.svg?height=600&width=800",
              tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
              link: "#",
            },
            {
              title: "AI Content Generator",
              description:
                "An application that leverages AI to generate marketing copy, blog posts, and social media content.",
              image: "/placeholder.svg?height=600&width=800",
              tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
              link: "#",
            },
            {
              title: "Real-time Dashboard",
              description:
                "A data visualization dashboard that displays real-time analytics and metrics for business intelligence.",
              image: "/placeholder.svg?height=600&width=800",
              tags: ["Vue.js", "D3.js", "Firebase", "WebSockets"],
              link: "#",
            },
            {
              title: "Mobile Fitness App",
              description: "A cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
              image: "/placeholder.svg?height=600&width=800",
              tags: ["React Native", "TypeScript", "GraphQL", "AWS"],
              link: "#",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <image
                  href={project.image || "/placeholder.svg"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
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
                <div className="flex gap-3">
                  <button
                    className="rounded-full hover:bg-purple-900/20 hover:text-purple-400"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </button>
                  <button
                    className="rounded-full hover:bg-purple-900/20 hover:text-purple-400"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button

            className="rounded-full border-gray-700 hover:border-purple-500 hover:text-purple-400"

          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}

import type { Project } from "~/types"

// make an export for the data of the project

export const project2024Site: Project = [
    {
        title: "2024 Site",
        description: "A personal portfolio site built with React, TypeScript, and Tailwind CSS.",
        image: "https://res.cloudinary.com/dk2gh8shj/image/upload/v1633946827/portfolio-2024.png",
        url: "https://2024-site.netlify.app/",
    },
]


export default function Site2024() {
    return (
        <div>
            <h1>2024 Site</h1>
            <p>A personal portfolio site built with React, TypeScript, and Tailwind CSS.</p>
            <a href="https://2024-site.netlify.app/">View Live</a>
        </div>
    )
}
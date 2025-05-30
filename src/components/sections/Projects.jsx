import { useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Amore </h3>
                        <p className="text-gray-300 mb-4"> Amore is a web-based application that serves as a gathering place for hobby and business enthusiasts, specifically designed to help them develop their interests into successful businesses. With a variety of features, guides, and tips, members can easily start and develop businesses from their hobbies. With a dynamic and diverse environment, this platform not only enhances experiences in hobbies but also helps reduce the unemployment rate in Indonesia. </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Laravel", "MySQL", "Bootstrap"].map((tech, key) => <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>)}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/miamore7/Project3" className="text-blue-400 hover:text-blue-300 trasition-colors my-4"> View Project ➡️ </a>
                        </div>
                    </div>

                    {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Amore </h3>
                    <p className="text-gray-300 mb-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero deserunt veniam quidem dolor in distinctio tenetur debitis error. Nam fuga itaque voluptates doloribus nihil expedita numquam, sapiente aperiam esse distinctio! </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Laravel", "MySQL"].map((tech, key) => <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech}
                        </span>)}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/miamore7/Project3" className="text-blue-400 hover:text-blue-300 trasition-colors my-4"> View Project ➡️ </a>
                    </div>
                </div> */}
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
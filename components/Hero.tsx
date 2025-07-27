"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-amber-400 dark:to-yellow-400 rounded-full opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-amber-500 dark:to-orange-400 rounded-lg opacity-20 animate-bounce"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-yellow-400 dark:to-amber-400 rounded-full opacity-20 animate-ping"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-amber-500 dark:to-yellow-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Kush Madan"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-amber-500 dark:to-yellow-500 bg-clip-text text-transparent">
              Kush Madan
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6">
            Statistics & Machine Learning Student
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            University of Waterloo • Passionate about data science, AI, and building innovative solutions
          </p>
        </div>

        {/* Call to Action */}
        <div className="animate-fade-in-delay">
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-amber-600 dark:to-yellow-600 text-white dark:text-black font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 dark:hover:from-amber-500 dark:hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-lg font-medium">Explore My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}

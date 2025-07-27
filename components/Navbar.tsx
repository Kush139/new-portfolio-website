"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Download, Github, Linkedin } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "experience"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This is the public URL
    link.download = "Kush_Madan_Resume.pdf" // This is the filename for the user
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Kush Madan</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-amber-400 bg-purple-50 dark:bg-amber-900/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <a
              href="https://github.com/Kush139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-amber-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kush-madan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Resume Download */}
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-3 py-2 bg-purple-600 dark:bg-amber-600 text-white dark:text-black font-medium rounded-md hover:bg-purple-700 dark:hover:bg-amber-500 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-amber-400 transition-colors"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

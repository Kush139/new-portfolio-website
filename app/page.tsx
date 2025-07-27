"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import LiveStats from "@/components/LiveStats"
import Chatbot from "@/components/Chatbot"
import CustomCursor from "@/components/CustomCursor"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100 dark:from-slate-900 dark:via-black dark:to-amber-900 transition-all duration-500 relative overflow-hidden">
        {/* Background Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* University of Waterloo Logos */}
          <div className="absolute top-20 left-10 opacity-5 transform rotate-12">
            <img src="/placeholder.svg?height=120&width=120" alt="" className="w-32 h-32" />
          </div>
          <div className="absolute top-1/3 right-20 opacity-5 transform -rotate-12">
            <img src="/placeholder.svg?height=100&width=100" alt="" className="w-28 h-28" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 opacity-5 transform rotate-45">
            <img src="/placeholder.svg?height=80&width=80" alt="" className="w-24 h-24" />
          </div>

          {/* Chelsea FC Logos */}
          <div className="absolute top-1/2 left-16 opacity-5 transform -rotate-45">
            <img src="/placeholder.svg?height=100&width=100" alt="" className="w-28 h-28" />
          </div>
          <div className="absolute bottom-32 right-16 opacity-5 transform rotate-30">
            <img src="/placeholder.svg?height=90&width=90" alt="" className="w-26 h-26" />
          </div>
          <div className="absolute top-16 right-1/3 opacity-5 transform -rotate-30">
            <img src="/placeholder.svg?height=110&width=110" alt="" className="w-30 h-30" />
          </div>
        </div>

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Sticky Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen py-20">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>
        </main>

        {/* Fixed Position Components */}
        <LiveStats />
        <Chatbot />
      </div>
    </ThemeProvider>
  )
}

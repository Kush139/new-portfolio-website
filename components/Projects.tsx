"use client"

import { Github, ExternalLink, Star } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Cross-Platform Malware Detection",
      description:
        "Designed a CNN to detect malware by converting binary files into grayscale images and classifying them as benign or malicious. Built a secure dataset of macOS and Windows binaries using isolated VMs. Trained and optimized the model for cross-platform generalization and detection accuracy.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "TensorFlow", "OpenCV", "macOS", "Windows"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Web Scraper and Sentiment Analysis ML Model",
      description:
        "Developed a sentiment analysis model using SVM with a linear kernel, achieving 81% accuracy on a test dataset of 2,748 samples. Optimized data preprocessing with custom stopword removal, TF-IDF feature extraction, and hyperparameter tuning. Integrated the model into a Python app for real-time sentiment analysis of both manual and web-scraped text.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Beautiful Soup", "Scikit-learn"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500 mx-auto mb-8" />
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills in data science, machine learning, and full-stack
          development.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Featured Projects - Full Width */}
        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-amber-100 dark:text-amber-800">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 dark:bg-amber-600 text-white dark:text-black font-medium rounded-lg hover:bg-purple-700 dark:hover:bg-amber-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 dark:bg-amber-600 text-white dark:text-black font-medium rounded-lg hover:bg-purple-700 dark:hover:bg-amber-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-2 bg-purple-600 dark:bg-amber-600 text-white dark:text-black font-medium rounded-md hover:bg-purple-700 dark:hover:bg-amber-500 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-2 bg-purple-600 dark:bg-amber-600 text-white dark:text-black font-medium rounded-md hover:bg-purple-700 dark:hover:bg-amber-500 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

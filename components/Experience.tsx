"use client"

import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Transport Canada",
      location: "Ottawa, ON",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Optimized data pipelines in Azure Databricks, improving run-time by 92% through efficient transformation logic and pipeline tuning.",
        "Developed optimized SQL queries, Python scripts, and DAX expressions to analyze and model data, driving actionable insights.",
        "Designed and built interactive Power BI dashboards and reports to support data-driven decision-making across the organization."
      ],
      type: "internship",
    },
    {
      title: "Naval Combat Information Operator",
      company: "Royal Canadian Naval Reserves",
      location: "Kitchener, ON",
      period: "Jan 2023 – Present",
      description: [
        "Completed Basic Military Qualification, mastering advanced time and stress management techniques through rigorous operational training.",
        "Enhanced team efficiency and readiness under high-pressure scenarios."
      ],
      type: "internship",
    },
    {
      title: "Data Science Intern",
      company: "Department of National Defence",
      location: "Ottawa, ON",
      period: "Sept 2025 – Dec 2025",
      description: [
        "Applying NLP and machine learning techniques to support national defence initiatives.",
        "Collaborated with cross-functional teams to deliver actionable insights for national security."
      ],
      type: "internship",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "research":
        return "from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500"
      case "internship":
        return "from-indigo-500 to-purple-500 dark:from-yellow-500 dark:to-orange-500"
      default:
        return "from-purple-600 to-pink-500 dark:from-amber-600 dark:to-yellow-600"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "research":
        return "🔬"
      case "internship":
        return "💼"
      default:
        return "🏢"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500 mx-auto mb-8" />
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          My journey through various roles in data science, machine learning, and research.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500" />

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-purple-500 dark:border-amber-500 rounded-full flex items-center justify-center text-sm z-10">
                {getTypeIcon(exp.type)}
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getTypeColor(exp.type)} text-white mb-3`}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-slate-600 dark:text-slate-300">
                        <span className="w-2 h-2 bg-purple-500 dark:bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

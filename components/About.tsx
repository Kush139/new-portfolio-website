"use client"

import { Code, Database, Brain, TrendingUp } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Python, R, SQL, JavaScript, C, C++, TypeScript, HTML, CSS",
      color: "from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn, Deep Learning, NLP, SVM, CNN",
      color: "from-indigo-500 to-purple-500 dark:from-yellow-500 dark:to-orange-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Pandas, NumPy, Power BI, Databricks, Spark, Statistical Analysis",
      color: "from-purple-600 to-pink-500 dark:from-orange-500 dark:to-amber-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cloud & Tools",
      description: "Azure, Git, Docker, Kubernetes, Django, Databricks, Cursor",
      color: "from-pink-500 to-purple-600 dark:from-amber-600 dark:to-yellow-600",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500 mx-auto mb-8" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I'm a passionate Statistics and Machine Learning student at the University of Waterloo, driven by the power
            of data to solve real-world problems. My journey in data science combines rigorous statistical foundations
            with cutting-edge machine learning techniques.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Beyond the classroom, I serve in the Royal Canadian Naval Reserve, where I’ve developed critical skills in first aid, 
          firefighting, flood control, sea survival, and tactical operations. This experience has strengthened my ability to stay calm under pressure, 
          work effectively in diverse teams, and adapt quickly in high-stakes environments.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          When I’m not analyzing data or exploring new AI tools, I enjoy hiking in nature, playing soccer, and experimenting in the kitchen. 
          I also follow the latest breakthroughs in AI and contribute to open-source projects, always looking for ways to bridge the gap between 
          theory and real-world impact.
          </p>
        </div>

        {/* Image/Visual Element */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 flex items-center justify-center">
            <img
              src="/firefighting.jpeg?height=400&width=400"
              alt="Data Science Visualization"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{skill.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

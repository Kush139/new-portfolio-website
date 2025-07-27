"use client"

import { useState, useEffect } from "react"
import { Eye, MapPin, Code, X } from "lucide-react"

export default function LiveStats() {
  const [isOpen, setIsOpen] = useState(false)
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/visit-stats")
      const data = await res.json()
      setStats(data)
    } catch {
      setStats(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-amber-600 dark:to-yellow-600 text-white dark:text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <Eye className="w-6 h-6" />
      </button>

      {/* Stats Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-80 max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Live Stats</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {loading || !stats ? (
            <div className="text-center text-slate-500 dark:text-slate-400 py-8">Loading live stats...</div>
          ) : (
            <>
              {/* Visits Counter */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-5 h-5 text-purple-500 dark:text-amber-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Total Visits</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">{stats.visits?.toLocaleString?.() ?? stats.visits}</div>
                <div className="text-xs text-green-500 mt-1">Live</div>
              </div>

              {/* Recent Visitor Locations */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-purple-500 dark:text-amber-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Recent Visitors</span>
                </div>
                <div className="space-y-2">
                  {stats.recentLocations?.length ? stats.recentLocations.map((location: string, index: number) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">{location}</span>
                      <div className="flex space-x-1">
                        {[...Array(Math.floor(Math.random() * 3) + 1)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )) : <div className="text-slate-400">No recent visitors yet.</div>}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="w-5 h-5 text-purple-500 dark:text-amber-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Tech Stack</span>
                </div>
                <div className="space-y-3">
                  {stats.techStack?.map((tech: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">{tech.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{tech.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-amber-500 dark:to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

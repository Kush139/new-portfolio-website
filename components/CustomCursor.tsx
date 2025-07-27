"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 transition-transform duration-150 ${
        isHovering ? "scale-150" : "scale-100"
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    >
      {/* Soccer Ball Icon */}
      <div className="w-full h-full text-purple-600 dark:text-amber-500">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="white"
          />
          <path d="M12 6l1.5 4.5h4.5l-3.5 2.5 1.5 4.5L12 15l-3.5 2.5L10 13l-3.5-2.5h4.5L12 6z" fill="white" />
          <path
            d="M8.5 8.5l2 1.5-1 3-2.5-1.5L8.5 8.5zm7 0l1.5 2.5L14.5 13l-1-3 2-1.5zm-3.5 7l1.5 2.5L12 19.5l-1.5-1.5L12 15.5z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}

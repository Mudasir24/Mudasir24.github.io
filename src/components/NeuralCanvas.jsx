import { useEffect, useRef, useCallback } from 'react'
import './NeuralCanvas.css'

const NeuralCanvas = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const nodesRef = useRef([])
  const animationRef = useRef(null)

  const initNodes = useCallback((width, height) => {
    const nodes = []
    const nodeCount = Math.floor((width * height) / 15000)
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        baseOpacity: 0.3 + Math.random() * 0.4
      })
    }
    return nodes
  }, [])

  const drawNetwork = useCallback((ctx, width, height, nodes, mouse, isDark) => {
    ctx.clearRect(0, 0, width, height)
    
    const connectionDistance = 150
    const mouseInfluenceRadius = 200
    const primaryColor = isDark ? '139, 92, 246' : '99, 102, 241'
    const secondaryColor = isDark ? '6, 182, 212' : '34, 211, 238'
    
    // Update and draw connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      
      // Mouse influence
      const dx = mouse.x - node.x
      const dy = mouse.y - node.y
      const distToMouse = Math.sqrt(dx * dx + dy * dy)
      
      if (distToMouse < mouseInfluenceRadius && distToMouse > 0) {
        const force = (mouseInfluenceRadius - distToMouse) / mouseInfluenceRadius
        node.vx += (dx / distToMouse) * force * 0.02
        node.vy += (dy / distToMouse) * force * 0.02
      }
      
      // Apply velocity with damping
      node.vx *= 0.99
      node.vy *= 0.99
      node.x += node.vx
      node.y += node.vy
      
      // Wrap around edges
      if (node.x < 0) node.x = width
      if (node.x > width) node.x = 0
      if (node.y < 0) node.y = height
      if (node.y > height) node.y = 0
      
      // Update pulse
      node.pulsePhase += node.pulseSpeed
      const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7
      
      // Draw connections to nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j]
        const cdx = other.x - node.x
        const cdy = other.y - node.y
        const dist = Math.sqrt(cdx * cdx + cdy * cdy)
        
        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.3
          const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y)
          gradient.addColorStop(0, `rgba(${primaryColor}, ${opacity})`)
          gradient.addColorStop(1, `rgba(${secondaryColor}, ${opacity})`)
          
          ctx.beginPath()
          ctx.strokeStyle = gradient
          ctx.lineWidth = 0.5
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        }
      }
      
      // Draw node with glow effect
      const nodeOpacity = node.baseOpacity * pulse
      const glowSize = node.radius * (distToMouse < mouseInfluenceRadius ? 3 : 2)
      
      // Outer glow
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowSize
      )
      glowGradient.addColorStop(0, `rgba(${primaryColor}, ${nodeOpacity * 0.5})`)
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.beginPath()
      ctx.fillStyle = glowGradient
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
      ctx.fill()
      
      // Core node
      ctx.beginPath()
      ctx.fillStyle = `rgba(${primaryColor}, ${nodeOpacity})`
      ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2)
      ctx.fill()
    }
    
    // Draw mouse cursor effect
    if (mouse.x > 0 && mouse.y > 0) {
      const cursorGradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 100
      )
      cursorGradient.addColorStop(0, `rgba(${primaryColor}, 0.1)`)
      cursorGradient.addColorStop(0.5, `rgba(${secondaryColor}, 0.05)`)
      cursorGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.beginPath()
      ctx.fillStyle = cursorGradient
      ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2)
      ctx.fill()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      nodesRef.current = initNodes(width, height)
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      drawNetwork(ctx, width, height, nodesRef.current, mouseRef.current, isDark)
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initNodes, drawNetwork])

  return <canvas ref={canvasRef} className="neural-canvas" />
}

export default NeuralCanvas

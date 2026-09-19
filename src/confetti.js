// Confete leve em canvas — sem dependências
const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#22c55e', '#0ea5e9', '#f43f5e']

export function burstConfetti(count = 90) {
  const canvas = document.createElement('canvas')
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999'
  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')
  canvas.width = innerWidth
  canvas.height = innerHeight

  const parts = Array.from({ length: count }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * innerWidth * 0.4,
    y: innerHeight * 0.35,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 13 - 4,
    w: Math.random() * 9 + 5,
    h: Math.random() * 6 + 4,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: COLORS[(Math.random() * COLORS.length) | 0],
  }))

  let frame = 0
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const p of parts) {
      p.vy += 0.35
      p.vx *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.rot += p.vr
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.fillStyle = p.color
      ctx.globalAlpha = Math.max(0, 1 - frame / 110)
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
      ctx.restore()
    }
    frame++
    if (frame < 120) requestAnimationFrame(tick)
    else canvas.remove()
  }
  tick()
}

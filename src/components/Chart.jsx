import { fmtDateShort } from '../utils'

// Gráfico de linha em SVG puro — leve e colorido
export default function Chart({ data, goalY, height = 230, color = '#8b5cf6', color2 = '#ec4899', unit = 'kg' }) {
  if (!data || data.length === 0) {
    return <div className="chart-empty">Sem dados ainda — registre sua primeira pesagem.</div>
  }

  const W = 640
  const H = height
  const padL = 44
  const padR = 16
  const padT = 18
  const padB = 30

  const ys = data.map((d) => d.y)
  if (goalY != null) ys.push(goalY)
  let minY = Math.min(...ys)
  let maxY = Math.max(...ys)
  const span = Math.max(maxY - minY, 1)
  minY -= span * 0.15
  maxY += span * 0.15

  const x = (i) => padL + (i / Math.max(data.length - 1, 1)) * (W - padL - padR)
  const y = (v) => padT + (1 - (v - minY) / (maxY - minY)) * (H - padT - padB)

  const pts = data.map((d, i) => [x(i), y(d.y)])
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${y(minY)} L${pts[0][0].toFixed(1)},${y(minY)} Z`

  const xLabels = data.length === 1
    ? [{ i: 0, label: fmtDateShort(data[0].x) }]
    : [0, Math.floor((data.length - 1) / 2), data.length - 1]
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((i) => ({ i, label: fmtDateShort(data[i].x) }))

  const yTicks = [minY + span * 0.15, (minY + maxY) / 2, maxY - span * 0.15]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Gráfico de peso">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color2} stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>

      {yTicks.map((v, i) => (
        <g key={i}>
          <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)} stroke="#e2e8f0" strokeDasharray="3 5" />
          <text x={padL - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#94a3b8">
            {v.toFixed(1)}
          </text>
        </g>
      ))}

      {goalY != null && (
        <g>
          <line x1={padL} x2={W - padR} y1={y(goalY)} y2={y(goalY)} stroke="#22c55e" strokeWidth="2" strokeDasharray="8 6" />
          <text x={W - padR} y={y(goalY) - 6} textAnchor="end" fontSize="11" fontWeight="800" fill="#16a34a">
            meta {goalY} {unit}
          </text>
        </g>
      )}

      <path d={area} fill="url(#chartFill)" />
      <path d={line} fill="none" stroke="url(#chartLine)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="5" fill="#fff" stroke={color2} strokeWidth="2.5" />
          <title>{`${fmtDateShort(data[i].x)} — ${data[i].y} ${unit}`}</title>
        </g>
      ))}

      {xLabels.map((l) => (
        <text key={l.i} x={x(l.i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#94a3b8">
          {l.label}
        </text>
      ))}
    </svg>
  )
}

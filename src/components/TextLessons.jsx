import { useState } from 'react'
import Icon from './Icon'
import { LESSONS } from '../data/lessons'

export default function TextLessons({ db, update }) {
  const [open, setOpen] = useState(null)
  const done = new Set(db.completedLessons)
  const pct = Math.round((done.size / LESSONS.length) * 100)

  function toggleDone(id, e) {
    e?.stopPropagation()
    update((d) => {
      d.completedLessons = done.has(id)
        ? d.completedLessons.filter((x) => x !== id)
        : [...d.completedLessons, id]
      return d
    })
  }

  if (open) {
    const l = open
    return (
      <div className="page">
        <button className="btn ghost" onClick={() => setOpen(null)}>
          <Icon name="chevron" size={16} style={{ transform: 'rotate(180deg)' }} /> Voltar para aulas
        </button>
        <article className="reader card" style={{ '--c': l.color }}>
          <span className="pl-tag" style={{ background: l.color }}>{l.tag}</span>
          <h1>{l.title}</h1>
          <div className="reader-meta">
            <span><Icon name="clock" size={15} /> {l.minutes} min</span>
            <span><Icon name="dumbbell" size={15} /> {l.level}</span>
            <button className={`chip ${done.has(l.id) ? 'active' : ''}`} onClick={() => toggleDone(l.id)}>
              {done.has(l.id) ? '✓ Concluída' : 'Marcar como concluída'}
            </button>
          </div>
          <p className="reader-intro">{l.intro}</p>
          {l.sections.map((s, i) => (
            <section key={i}>
              <h3>{s.h}</h3>
              <ul>
                {s.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </section>
          ))}
          {l.tips?.length > 0 && (
            <div className="tips-box">
              <strong><Icon name="sparkles" size={15} /> Dicas</strong>
              <ul>
                {l.tips.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          )}
        </article>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page-head">
        <h1>Treinos em texto</h1>
        <p className="muted">Treinos completos em texto: aquecimento, exercícios passo a passo e dicas — tudo no seu ritmo, sem precisar de vídeo.</p>
        <div className="progress slim">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="hint">{done.size}/{LESSONS.length} aulas concluídas</span>
      </header>

      <div className="lesson-grid">
        {LESSONS.map((l) => (
          <button key={l.id} className="lesson-card card" style={{ '--c': l.color }} onClick={() => setOpen(l)}>
            <div className="lesson-top">
              <span className="pl-tag" style={{ background: l.color }}>{l.tag}</span>
              {done.has(l.id) && <span className="done-badge"><Icon name="check" size={13} /></span>}
            </div>
            <strong>{l.title}</strong>
            <div className="lesson-meta">
              <span><Icon name="clock" size={14} /> {l.minutes} min</span>
              <span><Icon name="dumbbell" size={14} /> {l.level}</span>
            </div>
            <p className="muted clamp">{l.intro}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

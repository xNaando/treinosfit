import Avatar3D from './Avatar3D'
import Chart from './Chart'
import Icon from './Icon'
import { burstConfetti } from '../confetti'
import {
  bmi, bmiInfo, currentWeight, sortedWeighIns, weekCheckIns,
  streak, tdee, todayStr, weeklyRate, daysBetween,
} from '../utils'

export default function Dashboard({ db, update, go }) {
  const p = db.profile
  const w = currentWeight(db)
  const b = bmi(w, p.heightCm)
  const bi = bmiInfo(b)
  const week = weekCheckIns(db.checkIns)
  const weekDone = week.filter((d) => d.done).length
  const s = streak(db.checkIns)
  const today = todayStr()
  const trainedToday = db.checkIns.includes(today)
  const sorted = sortedWeighIns(db.weighIns)
  const firstW = sorted[0]?.weight ?? w
  const delta = w != null && firstW != null ? w - firstW : 0
  const rate = weeklyRate(db.weighIns)
  const kcal = tdee(p, w)

  function checkIn() {
    if (trainedToday) return
    update((d) => {
      d.checkIns.push(today)
      return d
    })
    burstConfetti()
  }

  // progresso da meta
  let goalPct = null
  if (db.goal && firstW != null && w != null) {
    const total = firstW - db.goal.targetKg
    const done = firstW - w
    goalPct = total !== 0 ? Math.max(0, Math.min(100, (done / total) * 100)) : 100
  }

  let projection = null
  if (db.goal && rate && w != null) {
    const remaining = db.goal.targetKg - w
    if (Math.sign(remaining) === Math.sign(rate)) {
      const weeks = remaining / rate
      if (weeks > 0 && weeks < 520) projection = weeks
    }
  }

  return (
    <div className="page">
      <div className="dash-hero card">
        <div className="dash-hello">
          <h1>
            Olá, <span className="grad-text">{p.name}</span>!
          </h1>
          <p className="muted">
            {s > 0 ? `Sequência de ${s} dia${s > 1 ? 's' : ''} treinando — continue assim!` : 'Pronto(a) para se mover hoje?'}
          </p>
          <div className="dash-actions">
            <button className={`btn ${trainedToday ? 'success' : 'primary'}`} onClick={checkIn} disabled={trainedToday}>
              <Icon name={trainedToday ? 'check' : 'dumbbell'} size={17} />
              {trainedToday ? 'Treino registrado hoje' : 'Treinei hoje'}
            </button>
            <button className="btn ghost" onClick={() => go('progresso')}>
              <Icon name="scale" size={16} /> Registrar peso
            </button>
          </div>
          <div className="week-strip">
            {week.map((d, i) => (
              <div key={i} className={`week-dot ${d.done ? 'done' : ''} ${d.date === today ? 'today' : ''}`} title={d.date}>
                {d.done ? <Icon name="check" size={13} /> : ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][i]}
              </div>
            ))}
            <span className="week-label">{weekDone}/{p.weeklyWorkouts} treinos na semana</span>
          </div>
        </div>
        <div className="dash-avatar">
          <Avatar3D heightCm={p.heightCm} weightKg={w} avatar={db.avatar} />
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat card" style={{ '--c': '#8b5cf6' }}>
          <Icon name="scale" size={20} />
          <div>
            <span className="stat-value">{w != null ? `${w.toFixed(1)} kg` : '—'}</span>
            <span className="stat-label">Peso atual</span>
          </div>
        </div>
        <div className="stat card" style={{ '--c': bi.color }}>
          <Icon name="heart" size={20} />
          <div>
            <span className="stat-value">{b ? b.toFixed(1) : '—'}</span>
            <span className="stat-label">IMC · {bi.label}</span>
          </div>
        </div>
        <div className="stat card" style={{ '--c': delta <= 0 ? '#22c55e' : '#f59e0b' }}>
          <Icon name="chart" size={20} />
          <div>
            <span className="stat-value">{delta > 0 ? '+' : ''}{delta.toFixed(1)} kg</span>
            <span className="stat-label">Desde o início</span>
          </div>
        </div>
        <div className="stat card" style={{ '--c': '#f59e0b' }}>
          <Icon name="flame" size={20} />
          <div>
            <span className="stat-value">{kcal ? `~${kcal}` : '—'}</span>
            <span className="stat-label">kcal/dia estimado</span>
          </div>
        </div>
      </div>

      <div className="dash-cols">
        <div className="card">
          <div className="card-head">
            <h3><Icon name="chart" size={18} /> Evolução do peso</h3>
            <button className="link" onClick={() => go('progresso')}>ver tudo</button>
          </div>
          <Chart
            data={sorted.map((x) => ({ x: x.date, y: x.weight }))}
            goalY={db.goal?.targetKg ?? null}
            height={200}
          />
          {rate != null && (
            <p className="hint" style={{ marginTop: 6 }}>
              Ritmo atual: {rate > 0 ? '+' : ''}{rate.toFixed(2)} kg/semana
              {projection != null && ` · na sua meta em ~${Math.ceil(projection)} semanas`}
            </p>
          )}
        </div>

        <div className="card">
          <div className="card-head">
            <h3><Icon name="target" size={18} /> Sua meta</h3>
            <button className="link" onClick={() => go('progresso')}>{db.goal ? 'editar' : 'definir'}</button>
          </div>
          {db.goal ? (
            <>
              <div className="goal-big">
                <span>{w?.toFixed(1)} kg</span>
                <Icon name="chevron" size={18} />
                <strong>{db.goal.targetKg} kg</strong>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: `${goalPct ?? 0}%` }} />
              </div>
              <p className="hint">{Math.abs((w ?? 0) - db.goal.targetKg).toFixed(1)} kg restantes · {Math.round(goalPct ?? 0)}% do caminho</p>
            </>
          ) : (
            <p className="muted">Defina um peso-alvo para acompanhar seu progresso e ver projeções.</p>
          )}
          <div className="mini-links">
            <button className="mini-link" onClick={() => go('aulas-video')}><Icon name="video" size={15} /> Aulas em vídeo</button>
            <button className="mini-link" onClick={() => go('receitas-texto')}><Icon name="utensils" size={15} /> Receitas fit</button>
            <button className="mini-link" onClick={() => go('aulas-texto')}><Icon name="book" size={15} /> Planos de treino</button>
          </div>
        </div>
      </div>
    </div>
  )
}

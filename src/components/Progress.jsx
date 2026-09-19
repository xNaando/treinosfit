import { useState } from 'react'
import Avatar3D from './Avatar3D'
import Chart from './Chart'
import Icon from './Icon'
import {
  bmi, bmiInfo, currentWeight, sortedWeighIns, weeklyRate,
  todayStr, fmtDate, daysBetween,
} from '../utils'

export default function Progress({ db, update }) {
  const p = db.profile
  const sorted = sortedWeighIns(db.weighIns)
  const w = currentWeight(db)
  const b = bmi(w, p.heightCm)
  const bi = bmiInfo(b)
  const rate = weeklyRate(db.weighIns)

  const [date, setDate] = useState(todayStr())
  const [weight, setWeight] = useState('')
  const [goalInput, setGoalInput] = useState(db.goal?.targetKg ?? '')
  const [evoIdx, setEvoIdx] = useState(sorted.length - 1)
  const [editingGoal, setEditingGoal] = useState(false)

  const firstW = sorted[0]?.weight ?? w
  const delta = w != null && firstW != null ? w - firstW : 0

  // avatar na linha do tempo: usa o peso do registro selecionado
  const evoEntry = sorted[Math.min(Math.max(evoIdx, 0), Math.max(sorted.length - 1, 0))]
  const evoWeight = evoEntry?.weight ?? w

  function addWeighIn() {
    const kg = Number(String(weight).replace(',', '.'))
    if (!kg || kg < 25 || kg > 300 || !date) return
    update((d) => {
      d.weighIns = d.weighIns.filter((x) => x.date !== date)
      d.weighIns.push({ date, weight: kg })
      return d
    })
    setWeight('')
    setEvoIdx(sorted.length)
  }

  function removeWeighIn(d) {
    update((db2) => {
      db2.weighIns = db2.weighIns.filter((x) => !(x.date === d.date && x.weight === d.weight))
      return db2
    })
  }

  function saveGoal() {
    const kg = Number(String(goalInput).replace(',', '.'))
    update((d) => {
      d.goal = kg && kg > 20 ? { targetKg: kg, note: '' } : null
      return d
    })
    setEditingGoal(false)
  }

  let goalPct = null
  if (db.goal && firstW != null && w != null) {
    const total = firstW - db.goal.targetKg
    goalPct = total !== 0 ? Math.max(0, Math.min(100, ((firstW - w) / total) * 100)) : 100
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
      <header className="page-head">
        <h1>Progresso</h1>
        <p className="muted">Registre suas pesagens, acompanhe os gráficos e veja seu avatar evoluir com você.</p>
      </header>

      <div className="prog-grid">
        <div className="card">
          <div className="card-head">
            <h3><Icon name="scale" size={18} /> Registrar pesagem</h3>
          </div>
          <div className="weigh-form">
            <div className="field">
              <label>Data</label>
              <input type="date" value={date} max={todayStr()} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field">
              <label>Peso (kg)</label>
              <input inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={w ? String(w) : '70.0'} onKeyDown={(e) => e.key === 'Enter' && addWeighIn()} />
            </div>
            <button className="btn primary" onClick={addWeighIn}>
              <Icon name="plus" size={16} /> Salvar
            </button>
          </div>

          <div className="weigh-stats">
            <div className="wstat"><strong>{w?.toFixed(1) ?? '—'} kg</strong><span>atual</span></div>
            <div className="wstat"><strong>{delta > 0 ? '+' : ''}{delta.toFixed(1)} kg</strong><span>total</span></div>
            <div className="wstat"><strong>{rate != null ? `${rate > 0 ? '+' : ''}${rate.toFixed(2)}` : '—'}</strong><span>kg/semana</span></div>
            <div className="wstat"><strong style={{ color: bi.color }}>{b ? b.toFixed(1) : '—'}</strong><span>IMC · {bi.label}</span></div>
          </div>

          {sorted.length > 0 ? (
            <ul className="weigh-list">
              {[...sorted].reverse().slice(0, 8).map((x, i) => (
                <li key={`${x.date}-${i}`}>
                  <span>{fmtDate(x.date)}</span>
                  <strong>{x.weight.toFixed(1)} kg</strong>
                  <button className="icon-btn" onClick={() => removeWeighIn(x)} aria-label="Excluir registro">
                    <Icon name="trash" size={14} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Nenhuma pesagem ainda.</p>
          )}
          {sorted.length > 8 && <p className="hint">Mostrando as 8 mais recentes de {sorted.length} registros.</p>}
        </div>

        <div className="card">
          <div className="card-head">
            <h3><Icon name="target" size={18} /> Meta de peso</h3>
          </div>
          {editingGoal || !db.goal ? (
            <div className="goal-form">
              <div className="field">
                <label>Peso-alvo (kg)</label>
                <input inputMode="decimal" value={goalInput} onChange={(e) => setGoalInput(e.target.value)} placeholder="Ex: 68" onKeyDown={(e) => e.key === 'Enter' && saveGoal()} />
              </div>
              <div className="row-gap">
                <button className="btn primary sm" onClick={saveGoal}>Salvar meta</button>
                {db.goal && (
                  <button className="btn ghost sm" onClick={() => { update((d) => { d.goal = null; return d }); setEditingGoal(false) }}>
                    Remover
                  </button>
                )}
              </div>
              <p className="hint">Dica: 0,5–1% do seu peso por semana é um ritmo sustentável.</p>
            </div>
          ) : (
            <>
              <div className="goal-big">
                <span>{w?.toFixed(1)} kg</span>
                <Icon name="chevron" size={18} />
                <strong>{db.goal.targetKg} kg</strong>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: `${goalPct ?? 0}%` }} />
              </div>
              <p className="hint">
                {Math.abs((w ?? 0) - db.goal.targetKg).toFixed(1)} kg restantes · {Math.round(goalPct ?? 0)}% do caminho
                {projection != null && ` · estimativa: ~${Math.ceil(projection)} semanas no ritmo atual`}
              </p>
              <button className="btn ghost sm" onClick={() => { setGoalInput(db.goal.targetKg); setEditingGoal(true) }}>
                <Icon name="edit" size={14} /> Editar meta
              </button>
            </>
          )}

          <div className="evo-box">
            <h4><Icon name="refresh" size={15} /> Linha do tempo do avatar</h4>
            {sorted.length < 2 ? (
              <p className="muted">Registre pelo menos 2 pesagens para ver sua evolução no avatar.</p>
            ) : (
              <>
                <div className="evo-avatar">
                  <Avatar3D heightCm={p.heightCm} weightKg={evoWeight} avatar={db.avatar} interactive={false} />
                </div>
                <input
                  type="range"
                  min="0"
                  max={sorted.length - 1}
                  value={Math.min(evoIdx, sorted.length - 1)}
                  onChange={(e) => setEvoIdx(Number(e.target.value))}
                />
                <div className="evo-labels">
                  <span>{fmtDate(evoEntry?.date)}</span>
                  <strong>{evoEntry?.weight?.toFixed(1)} kg</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3><Icon name="chart" size={18} /> Gráfico de peso</h3>
          <span className="hint">{sorted.length} registro{sorted.length !== 1 ? 's' : ''}{sorted.length > 1 ? ` · ${daysBetween(sorted[0].date, sorted[sorted.length - 1].date)} dias` : ''}</span>
        </div>
        <Chart data={sorted.map((x) => ({ x: x.date, y: x.weight }))} goalY={db.goal?.targetKg ?? null} height={260} />
      </div>
    </div>
  )
}

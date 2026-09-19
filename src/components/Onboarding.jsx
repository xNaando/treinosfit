import { useState } from 'react'
import Avatar3D from './Avatar3D'
import AvatarCustomizer from './AvatarCustomizer'
import Icon from './Icon'
import { todayStr } from '../utils'

const STEPS = ['Você', 'Medidas', 'Avatar', 'Meta']

export default function Onboarding({ onDone }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [sex, setSex] = useState('M')
  const [age, setAge] = useState(25)
  const [heightCm, setHeightCm] = useState(170)
  const [weightKg, setWeightKg] = useState(70)
  const [avatar, setAvatar] = useState({ skin: '#c98d64', hairColor: '#3b2a20', hairStyle: 'curto', shirt: '#7c3aed' })
  const [targetKg, setTargetKg] = useState('')

  const canNext = step === 0 ? name.trim().length >= 2 : true

  function finish() {
    onDone((db) => {
      db.profile = {
        name: name.trim(),
        sex,
        age: Number(age) || 25,
        heightCm: Number(heightCm) || 170,
        weightKg: Number(weightKg) || 70,
        activity: 'leve',
        weeklyWorkouts: 4,
        createdAt: todayStr(),
      }
      db.avatar = avatar
      db.weighIns = [{ date: todayStr(), weight: Number(weightKg) || 70 }]
      if (targetKg && !isNaN(Number(targetKg))) {
        db.goal = { targetKg: Number(targetKg), note: '' }
      }
      return db
    })
  }

  return (
    <div className="onboarding">
      <div className="onboard-card card">
        <div className="onboard-steps">
          {STEPS.map((s, i) => (
            <div key={s} className={`ostep ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <span className="ostep-dot">{i < step ? <Icon name="check" size={12} /> : i + 1}</span>
              <span className="ostep-label">{s}</span>
            </div>
          ))}
        </div>

        {step === 0 && (
          <div className="ostep-body">
            <h2>Bem-vindo(a) ao <span className="grad-text">Treinos Fit</span>!</h2>
            <p className="muted">Vamos montar seu perfil e seu avatar em menos de 1 minuto.</p>
            <div className="field">
              <label>Como podemos te chamar?</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome ou apelido" autoFocus />
            </div>
            <div className="field-row">
              <div className="field">
                <label>Sexo biológico</label>
                <div className="seg">
                  <button className={sex === 'M' ? 'active' : ''} onClick={() => setSex('M')}>Masculino</button>
                  <button className={sex === 'F' ? 'active' : ''} onClick={() => setSex('F')}>Feminino</button>
                </div>
              </div>
              <div className="field">
                <label>Idade</label>
                <input type="number" min="10" max="100" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
            </div>
            <p className="hint">Sexo e idade servem só para estimar seu gasto calórico diário.</p>
          </div>
        )}

        {step === 1 && (
          <div className="ostep-body">
            <h2>Suas medidas</h2>
            <p className="muted">O avatar muda de tamanho junto com você — arraste e veja.</p>
            <div className="field">
              <label>Altura: <strong>{heightCm} cm</strong></label>
              <input type="range" min="130" max="220" value={heightCm} onChange={(e) => setHeightCm(Number(e.target.value))} />
            </div>
            <div className="field">
              <label>Peso: <strong>{weightKg} kg</strong></label>
              <input type="range" min="35" max="160" value={weightKg} onChange={(e) => setWeightKg(Number(e.target.value))} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="ostep-body">
            <h2>Monte seu avatar</h2>
            <p className="muted">Arraste o boneco para girar. Deixe ele com a sua cara!</p>
            <AvatarCustomizer avatar={avatar} onChange={setAvatar} />
          </div>
        )}

        {step === 3 && (
          <div className="ostep-body">
            <h2>Qual é a sua meta?</h2>
            <p className="muted">Opcional — você pode mudar depois na aba Progresso.</p>
            <div className="field">
              <label>Peso-alvo (kg)</label>
              <input type="number" min="30" max="250" step="0.5" value={targetKg} onChange={(e) => setTargetKg(e.target.value)} placeholder={`Hoje: ${weightKg} kg`} />
            </div>
            {targetKg && Number(targetKg) !== weightKg && (
              <p className="hint">
                {Number(targetKg) < weightKg
                  ? `Perder ${(weightKg - Number(targetKg)).toFixed(1)} kg — num ritmo saudável de ~0,5 kg/semana, dá cerca de ${Math.ceil((weightKg - Number(targetKg)) / 0.5)} semanas.`
                  : `Ganhar ${(Number(targetKg) - weightKg).toFixed(1)} kg — com superávit leve e treino de força, ~0,25 kg/semana é um bom ritmo.`}
              </p>
            )}
          </div>
        )}

        <div className="onboard-actions">
          {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>Voltar</button>}
          <span style={{ flex: 1 }} />
          {step < 3 ? (
            <button className="btn primary" disabled={!canNext} onClick={() => setStep(step + 1)}>
              Próximo <Icon name="chevron" size={16} />
            </button>
          ) : (
            <button className="btn primary big" onClick={finish}>
              <Icon name="sparkles" size={18} /> Começar minha jornada
            </button>
          )}
        </div>
      </div>

      <div className="onboard-avatar">
        <Avatar3D heightCm={heightCm} weightKg={weightKg} avatar={avatar} />
      </div>
    </div>
  )
}

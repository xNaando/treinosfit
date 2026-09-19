import Avatar3D from './Avatar3D'
import AvatarCustomizer from './AvatarCustomizer'
import Icon from './Icon'
import { ACTIVITY, currentWeight, HAIR_STYLES_M, HAIR_STYLES_F } from '../utils'

export default function Profile({ db, update }) {
  const p = db.profile
  const w = currentWeight(db)

  const setP = (k, v) => update((d) => { d.profile[k] = v; return d })
  const setA = (a) => update((d) => { d.avatar = a; return d })

  function changeSex(s) {
    update((d) => {
      d.profile.sex = s
      const list = s === 'F' ? HAIR_STYLES_F : HAIR_STYLES_M
      if (!list.some((h) => h.id === d.avatar.hairStyle)) {
        d.avatar.hairStyle = s === 'F' ? 'longo' : 'curto'
      }
      return d
    })
  }

  return (
    <div className="page">
      <header className="page-head">
        <h1>Perfil e avatar</h1>
        <p className="muted">Edite suas informações e personalize seu avatar — ele muda de altura, peso e visual junto com você.</p>
      </header>

      <div className="prog-grid">
        <div className="card">
          <div className="card-head"><h3><Icon name="user" size={18} /> Seus dados</h3></div>
          <div className="field">
            <label>Nome</label>
            <input value={p.name} onChange={(e) => setP('name', e.target.value)} />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Altura (cm)</label>
              <input type="number" min="100" max="250" value={p.heightCm} onChange={(e) => setP('heightCm', Number(e.target.value))} />
            </div>
            <div className="field">
              <label>Idade</label>
              <input type="number" min="10" max="100" value={p.age} onChange={(e) => setP('age', Number(e.target.value))} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Sexo biológico</label>
              <div className="seg">
                <button className={p.sex === 'M' ? 'active' : ''} onClick={() => changeSex('M')}>M</button>
                <button className={p.sex === 'F' ? 'active' : ''} onClick={() => changeSex('F')}>F</button>
              </div>
            </div>
            <div className="field">
              <label>Nível de atividade</label>
              <select value={p.activity} onChange={(e) => setP('activity', e.target.value)}>
                {ACTIVITY.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label>Treinos por semana (meta): <strong>{p.weeklyWorkouts}x</strong></label>
            <input type="range" min="1" max="7" value={p.weeklyWorkouts} onChange={(e) => setP('weeklyWorkouts', Number(e.target.value))} />
          </div>
          <p className="hint">Perfil criado em {p.createdAt ? new Date(p.createdAt).toLocaleDateString('pt-BR') : '—'}.</p>
        </div>

        <div className="card avatar-panel">
          <div className="card-head"><h3><Icon name="sparkles" size={18} /> Seu avatar</h3></div>
          <div className="profile-avatar">
            <Avatar3D heightCm={p.heightCm} weightKg={w} avatar={db.avatar} sex={p.sex} />
          </div>
          <AvatarCustomizer avatar={db.avatar} sex={p.sex} onChange={setA} />
        </div>
      </div>
    </div>
  )
}

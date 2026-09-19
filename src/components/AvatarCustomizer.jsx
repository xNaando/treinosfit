import Icon from './Icon'
import { SKIN_COLORS, HAIR_COLORS, HAIR_STYLES_M, HAIR_STYLES_F, SHIRT_COLORS } from '../utils'

function Swatches({ colors, value, onChange }) {
  return (
    <div className="swatches">
      {colors.map((c) => (
        <button
          key={c}
          type="button"
          className={`swatch ${value === c ? 'active' : ''}`}
          style={{ background: c }}
          onClick={() => onChange(c)}
          aria-label={`Cor ${c}`}
        />
      ))}
    </div>
  )
}

// Painel de customização do avatar — usado no onboarding e no perfil
export default function AvatarCustomizer({ avatar, sex = 'M', onChange }) {
  const set = (k, v) => onChange({ ...avatar, [k]: v })

  let styles = sex === 'F' ? HAIR_STYLES_F : HAIR_STYLES_M
  // se o estilo salvo não existe para este sexo, mantém como opção extra
  if (!styles.some((s) => s.id === avatar.hairStyle)) {
    styles = [{ id: avatar.hairStyle, label: 'Atual' }, ...styles]
  }

  return (
    <div className="customizer">
      <div className="field">
        <label><Icon name="user" size={15} /> Cor da pele</label>
        <Swatches colors={SKIN_COLORS} value={avatar.skin} onChange={(v) => set('skin', v)} />
      </div>

      <div className="field">
        <label><Icon name="sparkles" size={15} /> Penteado {sex === 'F' ? '(feminino)' : '(masculino)'}</label>
        <div className="hair-grid">
          {styles.map((h) => (
            <button
              key={h.id}
              type="button"
              className={`chip ${avatar.hairStyle === h.id ? 'active' : ''}`}
              onClick={() => set('hairStyle', h.id)}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label><Icon name="edit" size={15} /> Cor do cabelo</label>
        <Swatches colors={HAIR_COLORS} value={avatar.hairColor} onChange={(v) => set('hairColor', v)} />
      </div>

      <div className="field">
        <label><Icon name="heart" size={15} /> Cor da camiseta</label>
        <Swatches colors={SHIRT_COLORS} value={avatar.shirt} onChange={(v) => set('shirt', v)} />
      </div>
    </div>
  )
}

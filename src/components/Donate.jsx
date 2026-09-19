import { useMemo, useState } from 'react'
import QRCode from 'react-qr-code'
import Icon from './Icon'
import { pixPayload } from '../pix'

const AMOUNTS = [
  { id: null, label: 'Qualquer valor' },
  { id: 5, label: 'R$ 5' },
  { id: 10, label: 'R$ 10' },
  { id: 20, label: 'R$ 20' },
  { id: 50, label: 'R$ 50' },
]

export default function Donate() {
  const [amount, setAmount] = useState(null)
  const [copied, setCopied] = useState(false)

  const payload = useMemo(() => pixPayload(amount), [amount])

  async function copy() {
    try {
      await navigator.clipboard.writeText(payload)
    } catch {
      // fallback pra browsers sem clipboard API
      const ta = document.createElement('textarea')
      ta.value = payload
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page donate-page">
      <header className="page-head">
        <h1>Apoie o Treinos Fit</h1>
        <p className="muted">
          Esse projeto é feito com carinho e é 100% gratuito. Se ele te ajuda na sua jornada,
          considere apoiar com um Pix — cada doação ajuda a manter e melhorar a plataforma.
        </p>
      </header>

      <div className="donate-grid">
        <div className="card donate-qr">
          <span className="donate-badge"><Icon name="heart" size={15} /> Faça sua doação</span>

          <div className="chip-row donate-amounts">
            {AMOUNTS.map((a) => (
              <button
                key={a.label}
                className={`chip ${amount === a.id ? 'active' : ''}`}
                onClick={() => setAmount(a.id)}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="qr-box">
            <QRCode value={payload} size={200} bgColor="#ffffff" fgColor="#1e1b3a" />
          </div>
          <span className="hint">Aponte a câmera do app do seu banco</span>
        </div>

        <div className="card donate-copy">
          <h3><Icon name="plus" size={16} /> Pix copia e cola</h3>
          <p className="muted">Prefere copiar o código? Funciona em qualquer banco:</p>
          <button className={`btn ${copied ? 'success' : 'primary'}`} onClick={copy}>
            <Icon name={copied ? 'check' : 'download'} size={16} />
            {copied ? 'Código copiado!' : 'Copiar código Pix'}
          </button>
          <p className="hint">
            No seu banco: Pix → Pagar → Pix copia e cola → cole o código
            {amount ? '' : ' e escolha o valor'}.
          </p>
        </div>
      </div>
    </div>
  )
}

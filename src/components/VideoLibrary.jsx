import { useEffect, useState } from 'react'
import Icon from './Icon'
import PlaylistView from './PlaylistView'
import { parseYouTube } from '../utils'
import { fetchItemMeta } from '../youtube'

// Card de playlist/vídeo: capa, título e canal vêm do YouTube
function PlaylistCard({ pl, accent, onOpen, onRemove }) {
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    let alive = true
    fetchItemMeta(pl).then((m) => alive && m && setMeta(m))
    return () => {
      alive = false
    }
  }, [pl.id, pl.kind])

  const thumb =
    meta?.thumb || (pl.kind === 'video' ? `https://img.youtube.com/vi/${pl.id}/hqdefault.jpg` : null)

  return (
    <button className="pl-card card" onClick={() => onOpen(pl)} style={{ '--c': pl.color || accent }}>
      <div className="pl-thumb">
        {thumb ? <img src={thumb} alt="" loading="lazy" /> : null}
        <span className="pl-play"><Icon name="play" size={26} /></span>
      </div>
      <div className="pl-info">
        <strong>{meta?.title || pl.title}</strong>
        <span className="muted">{meta?.channel || pl.channel}</span>
        <div className="pl-foot">
          <span className="pl-tag">{pl.tag}</span>
          <span className="muted">{pl.kind === 'playlist' ? 'Playlist' : 'Vídeo'}</span>
        </div>
      </div>
      {pl.tag === 'Minhas' && (
        <span
          className="pl-del"
          role="button"
          tabIndex={0}
          aria-label="Remover"
          onClick={(e) => { e.stopPropagation(); onRemove(pl.id, pl.kind) }}
          onKeyDown={(e) => e.key === 'Enter' && (e.stopPropagation(), onRemove(pl.id, pl.kind))}
        >
          <Icon name="trash" size={15} />
        </span>
      )}
    </button>
  )
}

// Biblioteca de playlists/vídeos do YouTube — usada em "Aulas em vídeo" e "Receitas em vídeo"
export default function VideoLibrary({ title, subtitle, playlists, custom, onAdd, onRemove, accent = '#8b5cf6' }) {
  const [open, setOpen] = useState(null) // item aberto na tela de vídeos
  const [url, setUrl] = useState('')
  const [customTitle, setCustomTitle] = useState('')
  const [error, setError] = useState('')
  const [tag, setTag] = useState('Todas')

  const tags = ['Todas', ...new Set(playlists.map((p) => p.tag))]
  const all = [...playlists, ...(custom || []).map((c) => ({ ...c, tag: 'Minhas', color: '#f43f5e', channel: 'Você adicionou' }))]
  const filtered = tag === 'Todas' ? all : all.filter((p) => p.tag === tag)

  function add() {
    const parsed = parseYouTube(url)
    if (!parsed) {
      setError('Não consegui entender esse link. Cole a URL de uma playlist ou vídeo do YouTube.')
      return
    }
    onAdd({ ...parsed, title: customTitle.trim() || (parsed.kind === 'playlist' ? 'Minha playlist' : 'Meu vídeo') })
    setUrl('')
    setCustomTitle('')
    setError('')
  }

  if (open) {
    return <PlaylistView item={open} onBack={() => setOpen(null)} accent={accent} />
  }

  return (
    <div className="page">
      <header className="page-head">
        <h1>{title}</h1>
        <p className="muted">{subtitle}</p>
      </header>

      <div className="add-video card" style={{ '--c': accent }}>
        <Icon name="plus" size={18} />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Cole aqui o link de uma playlist ou vídeo do YouTube..."
          onKeyDown={(e) => e.key === 'Enter' && add()}
        />
        <input
          className="add-title"
          value={customTitle}
          onChange={(e) => setCustomTitle(e.target.value)}
          placeholder="Nome (opcional)"
        />
        <button className="btn primary sm" onClick={add}>Adicionar</button>
      </div>
      {error && <p className="error-text">{error}</p>}

      <div className="chip-row">
        {tags.map((t) => (
          <button key={t} className={`chip ${tag === t ? 'active' : ''}`} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>

      <div className="pl-grid">
        {filtered.map((pl, i) => (
          <PlaylistCard
            key={`${pl.id}-${i}`}
            pl={pl}
            accent={accent}
            onOpen={setOpen}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

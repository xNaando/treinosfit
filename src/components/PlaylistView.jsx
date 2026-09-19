import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { fetchItemMeta, fetchPlaylistVideos, videoEmbedUrl } from '../youtube'

// Tela de uma playlist (ou vídeo solto): player + lista de todos os vídeos
// com título e descrição vindos do YouTube. Vídeos ocultos/bloqueados são filtrados.
export default function PlaylistView({ item, onBack, accent = '#8b5cf6' }) {
  const [meta, setMeta] = useState(null)
  const [videos, setVideos] = useState(null) // null = carregando
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(0)
  const playerRef = useRef(null)

  function goTo(i) {
    setSelected(i)
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  const isPlaylist = item.kind === 'playlist'

  useEffect(() => {
    let alive = true
    setMeta(null)
    setVideos(null)
    setError('')
    setSelected(0)

    fetchItemMeta(item).then((m) => alive && m && setMeta(m))

    if (isPlaylist) {
      fetchPlaylistVideos(item.id)
        .then((v) => {
          if (!alive) return
          if (!v.length) setError('Não encontrei vídeos públicos nessa playlist.')
          setVideos(v)
        })
        .catch(() => alive && setError('Não consegui carregar os vídeos agora. Tente de novo mais tarde.'))
    } else {
      setVideos([
        {
          id: item.id,
          title: item.title,
          description: '',
          thumb: `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`,
        },
      ])
    }
    return () => {
      alive = false
    }
  }, [item.id, item.kind, isPlaylist])

  const title = meta?.title || item.title
  const channel = meta?.channel || item.channel
  const current = videos?.[selected]

  return (
    <div className="page">
      <button className="btn ghost back-btn" onClick={onBack}>
        <Icon name="arrow-left" size={16} /> Voltar
      </button>

      <header className="page-head" style={{ '--c': accent }}>
        <h1>{title}</h1>
        <p className="muted">
          {channel}
          {videos ? ` · ${videos.length} ${videos.length === 1 ? 'vídeo' : 'vídeos'}` : ''}
        </p>
        {meta?.description && <p className="pl-desc">{meta.description}</p>}
      </header>

      {error && (
        <div className="card yt-error">
          <p>{error}</p>
          <a
            className="btn primary sm"
            href={isPlaylist ? `https://www.youtube.com/playlist?list=${item.id}` : `https://youtu.be/${item.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no YouTube
          </a>
        </div>
      )}

      {videos === null && !error && (
        <div className="yt-loading card">
          <span className="spinner" />
          <p className="muted">Buscando vídeos no YouTube...</p>
        </div>
      )}

      {current && (
        <div className="player-wrap card" ref={playerRef}>
          <div className="player-frame">
            <iframe
              src={videoEmbedUrl(current.id)}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {videos.length > 1 && (
            <div className="yt-nav">
              <button className="btn ghost sm" disabled={selected === 0} onClick={() => goTo(selected - 1)}>
                <Icon name="arrow-left" size={15} /> Anterior
              </button>
              <span className="yt-nav-pos">{selected + 1} / {videos.length}</span>
              <button className="btn ghost sm" disabled={selected === videos.length - 1} onClick={() => goTo(selected + 1)}>
                Próximo <Icon name="chevron" size={15} />
              </button>
            </div>
          )}
          <div className="player-info">
            <h3>{current.title}</h3>
            {current.description && <p className="muted">{current.description}</p>}
          </div>
        </div>
      )}

      {videos && videos.length > 1 && (
        <div className="yt-list">
          {videos.map((v, i) => (
            <button
              key={v.id}
              className={`yt-item card ${i === selected ? 'active' : ''}`}
              style={{ '--c': accent }}
              onClick={() => goTo(i)}
            >
              <span className="yt-num">{i + 1}</span>
              <img className="yt-thumb" src={v.thumb} alt="" loading="lazy" />
              <span className="yt-item-info">
                <strong>{v.title}</strong>
                {v.description && <span className="muted yt-item-desc">{v.description}</span>}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

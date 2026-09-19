import { useState } from 'react'
import { useDb } from './db'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'
import VideoLibrary from './components/VideoLibrary'
import TextLessons from './components/TextLessons'
import TextRecipes from './components/TextRecipes'
import Progress from './components/Progress'
import Profile from './components/Profile'
import AvatarGallery from './components/AvatarGallery'
import Icon from './components/Icon'
import { LESSON_PLAYLISTS, RECIPE_PLAYLISTS } from './data/playlists'

const NAV = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'aulas-video', label: 'Aulas em vídeo', icon: 'video' },
  { id: 'aulas-texto', label: 'Aulas em texto', icon: 'book' },
  { id: 'receitas-video', label: 'Receitas em vídeo', icon: 'utensils' },
  { id: 'receitas-texto', label: 'Receitas em texto', icon: 'heart' },
  { id: 'progresso', label: 'Progresso', icon: 'chart' },
  { id: 'perfil', label: 'Perfil', icon: 'user' },
]

export default function App() {
  const [db, update] = useDb()
  const [tab, setTab] = useState('inicio')

  // galeria de desenvolvimento: ?dev=avatars
  if (new URLSearchParams(window.location.search).get('dev') === 'avatars') {
    return <AvatarGallery />
  }

  if (!db.profile) {
    return <Onboarding onDone={update} />
  }

  const addCustom = (section) => (item) =>
    update((d) => {
      d.customPlaylists[section].push(item)
      return d
    })

  const removeCustom = (section) => (id, kind) =>
    update((d) => {
      d.customPlaylists[section] = d.customPlaylists[section].filter((x) => !(x.id === id && x.kind === kind))
      return d
    })

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand" onClick={() => setTab('inicio')}>
          <span className="brand-mark"><Icon name="dumbbell" size={18} /></span>
          <span>Treinos <em>Fit</em></span>
        </div>
        <nav className="nav">
          {NAV.map((n) => (
            <button key={n.id} className={`nav-btn ${tab === n.id ? 'active' : ''}`} onClick={() => setTab(n.id)}>
              <Icon name={n.icon} size={17} />
              <span>{n.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {tab === 'inicio' && <Dashboard db={db} update={update} go={setTab} />}
        {tab === 'aulas-video' && (
          <VideoLibrary
            title="Aulas em vídeo"
            subtitle="Playlists públicas do YouTube para treinar em casa — escolha uma e aperte o play."
            playlists={LESSON_PLAYLISTS}
            custom={db.customPlaylists.lessons}
            onAdd={addCustom('lessons')}
            onRemove={removeCustom('lessons')}
            accent="#8b5cf6"
          />
        )}
        {tab === 'aulas-texto' && <TextLessons db={db} update={update} />}
        {tab === 'receitas-video' && (
          <VideoLibrary
            title="Receitas em vídeo"
            subtitle="Playlists públicas de culinária para variar o cardápio sem sair da dieta."
            playlists={RECIPE_PLAYLISTS}
            custom={db.customPlaylists.recipes}
            onAdd={addCustom('recipes')}
            onRemove={removeCustom('recipes')}
            accent="#f59e0b"
          />
        )}
        {tab === 'receitas-texto' && <TextRecipes db={db} update={update} />}
        {tab === 'progresso' && <Progress db={db} update={update} />}
        {tab === 'perfil' && <Profile db={db} update={update} />}
      </main>

      <nav className="bottomnav">
        {NAV.map((n) => (
          <button key={n.id} className={`bnav-btn ${tab === n.id ? 'active' : ''}`} onClick={() => setTab(n.id)}>
            <Icon name={n.icon} size={20} />
            <span>{n.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

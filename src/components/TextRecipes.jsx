import { useState } from 'react'
import Icon from './Icon'
import { RECIPES, RECIPE_TAGS } from '../data/recipes'

export default function TextRecipes({ db, update }) {
  const [open, setOpen] = useState(null)
  const [tag, setTag] = useState('Todas')
  const favs = new Set(db.favRecipes)

  const filtered = tag === 'Todas' ? RECIPES : RECIPES.filter((r) => r.tag === tag)

  function toggleFav(id, e) {
    e?.stopPropagation()
    update((d) => {
      d.favRecipes = favs.has(id) ? d.favRecipes.filter((x) => x !== id) : [...d.favRecipes, id]
      return d
    })
  }

  if (open) {
    const r = open
    return (
      <div className="page">
        <button className="btn ghost" onClick={() => setOpen(null)}>
          <Icon name="chevron" size={16} style={{ transform: 'rotate(180deg)' }} /> Voltar para receitas
        </button>
        <article className="reader card" style={{ '--c': r.color }}>
          <div className="reader-topline">
            <span className="pl-tag" style={{ background: r.color }}>{r.tag}</span>
            <button className={`icon-btn fav ${favs.has(r.id) ? 'on' : ''}`} onClick={() => toggleFav(r.id)} aria-label="Favoritar">
              <Icon name="heart" size={18} />
            </button>
          </div>
          <h1>{r.title}</h1>
          <div className="reader-meta">
            <span><Icon name="clock" size={15} /> {r.time}</span>
            <span><Icon name="user" size={15} /> {r.servings} porç{r.servings > 1 ? 'ões' : 'ão'}</span>
          </div>
          <div className="macros">
            <div className="macro" style={{ '--c': '#ef4444' }}><strong>{r.kcal}</strong><span>kcal</span></div>
            <div className="macro" style={{ '--c': '#8b5cf6' }}><strong>{r.protein}g</strong><span>proteína</span></div>
            <div className="macro" style={{ '--c': '#f59e0b' }}><strong>{r.carbs}g</strong><span>carbs</span></div>
            <div className="macro" style={{ '--c': '#0ea5e9' }}><strong>{r.fat}g</strong><span>gordura</span></div>
          </div>
          <section>
            <h3>Ingredientes</h3>
            <ul className="ing-list">
              {r.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
          </section>
          <section>
            <h3>Modo de preparo</h3>
            <ol className="step-list">
              {r.steps.map((s, idx) => <li key={idx}>{s}</li>)}
            </ol>
          </section>
          {r.tip && (
            <div className="tips-box">
              <strong><Icon name="sparkles" size={15} /> Dica</strong>
              <p>{r.tip}</p>
            </div>
          )}
        </article>
      </div>
    )
  }

  return (
    <div className="page">
      <header className="page-head">
        <h1>Receitas em texto</h1>
        <p className="muted">Receitas saudáveis com macros estimados por porção.</p>
      </header>

      <div className="chip-row">
        {RECIPE_TAGS.map((t) => (
          <button key={t} className={`chip ${tag === t ? 'active' : ''}`} onClick={() => setTag(t)}>{t}</button>
        ))}
        {favs.size > 0 && (
          <button className={`chip ${tag === 'Favoritas' ? 'active' : ''}`} onClick={() => setTag('Favoritas')}>
            ♥ Favoritas
          </button>
        )}
      </div>

      <div className="recipe-grid">
        {(tag === 'Favoritas' ? RECIPES.filter((r) => favs.has(r.id)) : filtered).map((r) => (
          <button key={r.id} className="recipe-card card" style={{ '--c': r.color }} onClick={() => setOpen(r)}>
            <div className="lesson-top">
              <span className="pl-tag" style={{ background: r.color }}>{r.tag}</span>
              <span
                className={`icon-btn fav sm ${favs.has(r.id) ? 'on' : ''}`}
                role="button"
                tabIndex={0}
                onClick={(e) => toggleFav(r.id, e)}
                onKeyDown={(e) => e.key === 'Enter' && toggleFav(r.id, e)}
                aria-label="Favoritar"
              >
                <Icon name="heart" size={15} />
              </span>
            </div>
            <strong>{r.title}</strong>
            <div className="lesson-meta">
              <span><Icon name="clock" size={14} /> {r.time}</span>
              <span><Icon name="flame" size={14} /> {r.kcal} kcal</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

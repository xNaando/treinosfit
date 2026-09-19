import { useState, useCallback } from 'react'

const KEY = 'treinosfit_db_v1'

export const defaultDb = {
  profile: null, // { name, sex, age, heightCm, weightKg, activity, weeklyWorkouts, createdAt }
  avatar: {
    skin: '#c98d64',
    hairColor: '#3b2a20',
    hairStyle: 'curto',
    shirt: '#7c3aed',
  },
  weighIns: [], // [{ date: 'YYYY-MM-DD', weight }]
  goal: null, // { targetKg, note }
  checkIns: [], // ['YYYY-MM-DD']
  completedLessons: [], // [lessonId]
  favRecipes: [], // [recipeId]
  customPlaylists: { lessons: [], recipes: [] }, // [{ id, title, kind: 'playlist'|'video' }]
}

let memFallback = null // fallback caso localStorage esteja indisponível

export function loadDb() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return structuredClone(defaultDb)
    const parsed = JSON.parse(raw)
    return {
      ...structuredClone(defaultDb),
      ...parsed,
      avatar: { ...defaultDb.avatar, ...(parsed.avatar || {}) },
      customPlaylists: {
        lessons: parsed.customPlaylists?.lessons || [],
        recipes: parsed.customPlaylists?.recipes || [],
      },
    }
  } catch {
    return memFallback || structuredClone(defaultDb)
  }
}

export function saveDb(db) {
  memFallback = db
  try {
    localStorage.setItem(KEY, JSON.stringify(db))
  } catch {
    // sem localStorage: mantém só em memória
  }
}

// Hook central: [db, update]
export function useDb() {
  const [db, setDb] = useState(loadDb)

  const update = useCallback((fn) => {
    setDb((prev) => {
      const next = typeof fn === 'function' ? fn(structuredClone(prev)) : fn
      saveDb(next)
      return next
    })
  }, [])

  return [db, update]
}

export function resetDb() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    // ignora
  }
  memFallback = null
}

export function exportDb(db) {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `treinosfit-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

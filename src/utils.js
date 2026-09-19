// ---------- helpers gerais ----------
export const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
export const lerp = (a, b, t) => a + (b - a) * t

export function todayStr(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function fmtDate(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export function fmtDateShort(iso) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

export function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000)
}

// ---------- corpo / saúde ----------
export function bmi(weightKg, heightCm) {
  const h = heightCm / 100
  if (!h || !weightKg) return null
  return weightKg / (h * h)
}

export function bmiInfo(b) {
  if (b == null) return { label: '—', color: '#94a3b8' }
  if (b < 18.5) return { label: 'Abaixo do peso', color: '#38bdf8' }
  if (b < 25) return { label: 'Peso saudável', color: '#22c55e' }
  if (b < 30) return { label: 'Sobrepeso', color: '#f59e0b' }
  return { label: 'Obesidade', color: '#ef4444' }
}

// Mifflin-St Jeor
export function bmr({ sex, age, weightKg, heightCm }) {
  if (!weightKg || !heightCm || !age) return null
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return Math.round(sex === 'F' ? base - 161 : base + 5)
}

export const ACTIVITY = [
  { id: 'sedentario', label: 'Sedentário', factor: 1.2 },
  { id: 'leve', label: 'Leve (1-3x/sem)', factor: 1.375 },
  { id: 'moderado', label: 'Moderado (3-5x/sem)', factor: 1.55 },
  { id: 'intenso', label: 'Intenso (6-7x/sem)', factor: 1.725 },
]

export function tdee(profile, currentWeight) {
  const b = bmr({ ...profile, weightKg: currentWeight ?? profile.weightKg })
  if (!b) return null
  const act = ACTIVITY.find((a) => a.id === profile.activity) || ACTIVITY[1]
  return Math.round(b * act.factor)
}

// ---------- avatar ----------
// fator de largura do corpo a partir do IMC (21.5 = referência)
export function fatFactor(weightKg, heightCm) {
  const b = bmi(weightKg, heightCm)
  if (!b) return 1
  return clamp(b / 21.5, 0.72, 1.8)
}

export function heightFactor(heightCm) {
  return clamp((heightCm || 170) / 170, 0.8, 1.3)
}

export const SKIN_COLORS = [
  '#ffdfc4', '#f0c8a0', '#d9a066', '#c98d64',
  '#a06a42', '#7a4b2b', '#5c3820', '#3f2717',
]

export const HAIR_COLORS = [
  '#1a1a1a', '#3b2a20', '#6b4226', '#a05a2c',
  '#d4a017', '#e8c547', '#b5522a', '#8a8a8a',
  '#d1d1d1', '#7c3aed', '#ec4899', '#38bdf8',
]

export const HAIR_STYLES_M = [
  { id: 'careca', label: 'Careca' },
  { id: 'raspado', label: 'Raspado' },
  { id: 'curto', label: 'Curto' },
  { id: 'topete', label: 'Topete' },
  { id: 'moicano', label: 'Moicano' },
  { id: 'cacheado', label: 'Cacheado' },
  { id: 'bone', label: 'Boné' },
]

export const HAIR_STYLES_F = [
  { id: 'bob', label: 'Bob / Chanel' },
  { id: 'longo', label: 'Longo' },
  { id: 'rabo', label: 'Rabo de cavalo' },
  { id: 'coque', label: 'Coque' },
  { id: 'chiquinhas', label: 'Maria-chiquinha' },
  { id: 'cacheada', label: 'Cacheada' },
  { id: 'bone', label: 'Boné' },
]

export const SHIRT_COLORS = [
  '#7c3aed', '#ec4899', '#ef4444', '#f59e0b',
  '#22c55e', '#0ea5e9', '#1e293b', '#f8fafc',
]

// ---------- pesagens ----------
export function sortedWeighIns(weighIns) {
  return [...weighIns].sort((a, b) => a.date.localeCompare(b.date))
}

export function currentWeight(db) {
  const s = sortedWeighIns(db.weighIns)
  return s.length ? s[s.length - 1].weight : db.profile?.weightKg || null
}

// taxa de mudança em kg/semana (primeiro -> último registro)
export function weeklyRate(weighIns) {
  const s = sortedWeighIns(weighIns)
  if (s.length < 2) return null
  const days = daysBetween(s[0].date, s[s.length - 1].date)
  if (days < 3) return null
  const weeks = days / 7
  return (s[s.length - 1].weight - s[0].weight) / weeks
}

// ---------- check-ins / streak ----------
export function weekCheckIns(checkIns, ref = new Date()) {
  const d = new Date(ref)
  const dow = (d.getDay() + 6) % 7 // segunda = 0
  const monday = new Date(d)
  monday.setDate(d.getDate() - dow)
  const set = new Set(checkIns)
  const days = []
  for (let i = 0; i < 7; i++) {
    const dd = new Date(monday)
    dd.setDate(monday.getDate() + i)
    const key = todayStr(dd)
    days.push({ date: key, done: set.has(key), future: dd > ref })
  }
  return days
}

export function streak(checkIns) {
  const set = new Set(checkIns)
  let n = 0
  const d = new Date()
  if (!set.has(todayStr(d))) d.setDate(d.getDate() - 1)
  while (set.has(todayStr(d))) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}

// ---------- youtube ----------
export function parseYouTube(input) {
  const s = (input || '').trim()
  if (!s) return null
  try {
    const u = new URL(s)
    const list = u.searchParams.get('list')
    if (list) return { kind: 'playlist', id: list }
    const v = u.searchParams.get('v')
    if (v) return { kind: 'video', id: v }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '')
      if (id) return { kind: 'video', id }
    }
    const m = u.pathname.match(/\/(shorts|embed)\/([\w-]+)/)
    if (m) return { kind: 'video', id: m[2] }
  } catch {
    if (/^[\w-]{11}$/.test(s)) return { kind: 'video', id: s }
    if (/^[\w-]{12,}$/.test(s)) return { kind: 'playlist', id: s }
  }
  return null
}

export function ytEmbedUrl(item) {
  return item.kind === 'playlist'
    ? `https://www.youtube.com/embed/videoseries?list=${item.id}`
    : `https://www.youtube.com/embed/${item.id}`
}

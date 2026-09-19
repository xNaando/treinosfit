import fs from 'node:fs'

// Busca candidatos no Openverse (Flickr CC) e Commons para os novos itens
const SLOTS = {
  'lessons_gluteos-pernas': ['woman squat exercise home', 'lunge exercise woman home'],
  'lessons_bracos-ombros': ['woman arm exercise home dumbbell', 'triceps dip chair exercise'],
  'lessons_alongamento-noite': ['woman stretching yoga relax', 'child pose yoga woman'],
  'lessons_caminhada-guia': ['woman walking park exercise', 'people walking outdoors fitness'],
  'lessons_treino-express': ['woman home workout exercise', 'fitness woman living room exercise'],
  'lessons_postura-sentado': ['woman stretching desk office', 'office stretch neck exercise'],
  'recipes_parfait': ['yogurt parfait granola', 'parfait glass fruit'],
  'recipes_crepioca': ['tapioca crepe brazilian', 'crepioca'],
  'recipes_frango-cremoso': ['creamy chicken pan', 'chicken cream sauce'],
  'recipes_sopa': ['vegetable soup bowl', 'chicken vegetable soup'],
  'recipes_barrinha': ['homemade granola bars', 'oat bars baked'],
  'recipes_mousse': ['chocolate mousse dessert glass', 'chocolate mousse avocado'],
}

const OUT = 'C:/Projetos/treinosfit/.shots/candidates'
fs.mkdirSync(OUT, { recursive: true })

async function openverse(q) {
  const r = await fetch('https://api.openverse.org/v1/images/?q=' + encodeURIComponent(q) + '&page_size=6')
  const d = await r.json()
  return (d.results || []).map((x) => ({ url: x.url, title: x.title || '' }))
}

for (const [slot, queries] of Object.entries(SLOTS)) {
  const dir = `${OUT}/${slot}`
  fs.mkdirSync(dir, { recursive: true })
  let i = 0
  for (const q of queries) {
    try {
      for (const x of (await openverse(q)).slice(0, 3)) {
        try {
          const b = Buffer.from(await (await fetch(x.url)).arrayBuffer())
          if (b.length < 15000 || b.length > 6_000_000) continue
          fs.writeFileSync(`${dir}/c${i}.jpg`, b)
          console.log(`${slot} c${i} <- ${x.title.slice(0, 55)} (${Math.round(b.length / 1024)}KB)`)
          i++
        } catch {}
        if (i >= 5) break
      }
    } catch (e) {
      console.log(slot, 'ERR', e.message)
    }
    await new Promise((r) => setTimeout(r, 700))
    if (i >= 5) break
  }
}
console.log('fim')

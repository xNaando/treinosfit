import fs from 'node:fs'

const SLOTS = {
  'lessons_comecar-zero': ['beginner workout woman home', 'first workout home woman'],
  'lessons_agachamento': ['air squat form woman', 'bodyweight squat exercise'],
  'lessons_lombar': ['glute bridge exercise woman', 'bird dog exercise mat'],
  'lessons_flexibilidade': ['front split stretch woman', 'leg stretching flexibility woman'],
  'lessons_parque': ['pull up bar park workout', 'outdoor fitness bar'],
  'lessons_manha': ['morning workout woman home', 'woman exercising morning bedroom'],
  'recipes_mingau': ['oatmeal porridge bowl', 'porridge breakfast bowl'],
  'recipes_salada-frango': ['grilled chicken salad', 'chicken salad bowl'],
  'recipes_frango-crocante': ['baked breaded chicken', 'oven chicken tenders'],
  'recipes_hummus': ['hummus bowl chickpea', 'hummus plate'],
  'recipes_salmao': ['grilled salmon vegetables', 'salmon fillet dinner'],
  'recipes_nice-cream': ['banana ice cream', 'banana nice cream'],
}

const OUT = 'C:/Projetos/treinosfit/.shots/candidates2'
fs.mkdirSync(OUT, { recursive: true })

for (const [slot, queries] of Object.entries(SLOTS)) {
  const dir = `${OUT}/${slot}`
  fs.mkdirSync(dir, { recursive: true })
  let i = 0
  for (const q of queries) {
    try {
      const r = await fetch('https://api.openverse.org/v1/images/?q=' + encodeURIComponent(q) + '&page_size=6')
      const d = await r.json()
      for (const x of (d.results || []).slice(0, 3)) {
        try {
          const b = Buffer.from(await (await fetch(x.url)).arrayBuffer())
          if (b.length < 15000 || b.length > 6_000_000) continue
          fs.writeFileSync(`${dir}/c${i}.jpg`, b)
          console.log(`${slot} c${i} <- ${(x.title || '').slice(0, 55)} (${Math.round(b.length / 1024)}KB)`)
          i++
        } catch {}
      }
    } catch (e) {
      console.log(slot, 'ERR', e.message)
    }
    await new Promise((r) => setTimeout(r, 700))
    if (i >= 5) break
  }
}
console.log('fim')

import fs from 'node:fs'

const SLOTS = {
  'lessons_hipertrofia': ['woman lifting dumbbells home', 'woman weight training home gym'],
  'lessons_yoga': ['downward dog yoga woman', 'yoga pose woman mat beginner'],
  'lessons_corda': ['woman jump rope', 'jumping rope exercise'],
  'lessons_prancha': ['side plank woman exercise', 'plank variation woman'],
  'lessons_volta': ['tying running shoes woman', 'woman lacing sneakers exercise'],
  'lessons_boxe': ['shadow boxing woman', 'woman boxing training punch'],
  'recipes_vitamina': ['strawberry smoothie glass', 'strawberry milkshake healthy'],
  'recipes_xadrez': ['chicken stir fry vegetables', 'stir fry chicken wok'],
  'recipes_batata': ['stuffed sweet potato', 'baked sweet potato filling'],
  'recipes_omelete-caneca': ['mug omelet', 'microwave omelet mug'],
  'recipes_carne-panela': ['beef stew vegetables', 'beef stew pot'],
  'recipes_bark': ['frozen yogurt bark', 'yogurt bark fruit'],
}

const OUT = 'C:/Projetos/treinosfit/.shots/candidates4'
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

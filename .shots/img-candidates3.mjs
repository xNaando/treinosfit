import fs from 'node:fs'

const SLOTS = {
  'lessons_corrida': ['woman running park jogging', 'woman jogging morning run'],
  'lessons_costas': ['dumbbell row exercise woman', 'woman back workout home'],
  'lessons_tabata': ['high knees exercise woman', 'intense workout woman jump'],
  'lessons_emagrecimento': ['healthy food plate vegetables', 'weight loss healthy eating'],
  'lessons_dupla': ['couple workout together home', 'partner exercise fitness'],
  'lessons_equilibrio': ['woman single leg balance', 'tree pose yoga woman'],
  'recipes_escondidinho': ['shepherd pie casserole', 'shepherds pie'],
  'recipes_chia': ['chia pudding', 'chia seed pudding fruit'],
  'recipes_sanduiche': ['chicken sandwich', 'chicken salad sandwich'],
  'recipes_sopa-moranga': ['pumpkin soup', 'squash soup bowl'],
  'recipes_acai': ['acai bowl', 'acai bowl fruit'],
  'recipes_marmita-carne': ['ground beef rice meal', 'beef meal prep container'],
}

const OUT = 'C:/Projetos/treinosfit/.shots/candidates3'
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

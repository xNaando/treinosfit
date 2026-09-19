import fs from 'node:fs'

// Busca candidatos no Wikimedia Commons para imagens fracas
const SLOTS = {
  'lessons/aquecimento': 'woman jumping jacks exercise home',
  'lessons/hiit-iniciante': 'burpee exercise gym woman',
  'lessons/forca-sem-equipamento': 'woman push-up home exercise',
  'recipes/omelete-forno': 'frittata',
  'recipes/panqueca-banana': 'pancakes stack breakfast',
  'recipes/smoothie-verde': 'green smoothie glass',
  'recipes/quinoa-grao': 'quinoa salad bowl',
}

const OUT = 'C:/Projetos/treinosfit/.shots/candidates'
fs.mkdirSync(OUT, { recursive: true })

const api = (q) =>
  'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6' +
  `&gsrsearch=${encodeURIComponent(q + ' filetype:bitmap')}&gsrlimit=6` +
  '&prop=imageinfo&iiprop=url|size&iiurlwidth=800&format=json'

for (const [slot, q] of Object.entries(SLOTS)) {
  try {
    const d = await (await fetch(api(q))).json()
    const pages = Object.values(d.query?.pages || {})
      .filter((p) => p.imageinfo?.[0]?.thumburl)
      .sort((a, b) => a.index - b.index)
    const dir = `${OUT}/${slot.replace('/', '_')}`
    fs.mkdirSync(dir, { recursive: true })
    for (const [i, p] of pages.slice(0, 4).entries()) {
      const buf = Buffer.from(await (await fetch(p.imageinfo[0].thumburl)).arrayBuffer())
      const fn = `${dir}/c${i}.jpg`
      fs.writeFileSync(fn, buf)
      console.log(`${slot} c${i} <- ${p.title} (${Math.round(buf.length / 1024)}KB)`)
    }
  } catch (e) {
    console.log(slot, 'ERR', e.message)
  }
  await new Promise((r) => setTimeout(r, 1200))
}
console.log('fim')

import { chromium } from 'playwright'

const OUT = 'C:/Users/Nandox/AppData/Local/Temp/treinosfit-shots'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1400, height: 950 }, deviceScaleFactor: 1.4 })

await p.goto('http://localhost:5173/')
await p.waitForTimeout(1500)

if (await p.locator('input[placeholder="Seu nome ou apelido"]').count()) {
  await p.fill('input[placeholder="Seu nome ou apelido"]', 'Nando')
  for (let i = 0; i < 3; i++) {
    await p.click('button:has-text("Próximo")')
    await p.waitForTimeout(500)
  }
  await p.click('button:has-text("Começar minha jornada")')
  await p.waitForTimeout(1500)
}

// rola até o fim do grid e abre o ÚLTIMO card — detalhe deve abrir com scroll=0
await p.click('nav >> text=Treinos em texto')
await p.waitForTimeout(800)
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await p.waitForTimeout(600)
await p.click('.lesson-card >> nth=-1')
await p.waitForTimeout(600)
const y1 = await p.evaluate(() => window.scrollY)
await p.screenshot({ path: `${OUT}/scroll-lesson.png` })
console.log('scrollY apos abrir aula:', y1)

await p.click('nav >> text=Receitas em texto')
await p.waitForTimeout(800)
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await p.waitForTimeout(600)
await p.click('.recipe-card >> nth=-1')
await p.waitForTimeout(600)
const y2 = await p.evaluate(() => window.scrollY)
console.log('scrollY apos abrir receita:', y2)

await b.close()
console.log('done')

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

// abre detalhe de aula e clica no MESMO menu -> deve voltar pro grid
await p.click('nav >> text=Treinos em texto')
await p.waitForTimeout(800)
await p.click('.lesson-card >> nth=0')
await p.waitForTimeout(600)
await p.click('nav >> text=Treinos em texto')
await p.waitForTimeout(700)
const backToGrid = await p.locator('.lesson-card').count()
await p.screenshot({ path: `${OUT}/nav-reset.png` })
console.log('cards no grid apos clicar no mesmo menu:', backToGrid)

await b.close()
console.log('done')

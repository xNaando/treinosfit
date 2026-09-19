import { chromium } from 'playwright'

const OUT = 'C:/Users/Nandox/AppData/Local/Temp/treinosfit-shots'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1400, height: 950 }, deviceScaleFactor: 1.4 })

await p.goto('http://localhost:5173/')
await p.waitForTimeout(1500)

// Se cair no onboarding, preenche rápido
if (await p.locator('input[placeholder="Seu nome ou apelido"]').count()) {
  await p.fill('input[placeholder="Seu nome ou apelido"]', 'Nando')
  for (let i = 0; i < 3; i++) {
    await p.click('button:has-text("Próximo")')
    await p.waitForTimeout(500)
  }
  await p.click('button:has-text("Começar minha jornada")')
  await p.waitForTimeout(1500)
}

// Treinos em texto
await p.click('nav >> text=Treinos em texto')
await p.waitForTimeout(1200)
await p.screenshot({ path: `${OUT}/lessons-grid.png` })

// abre uma aula
await p.click('text=Força sem equipamentos')
await p.waitForTimeout(800)
await p.screenshot({ path: `${OUT}/lesson-detail.png` })
await p.click('text=Voltar para aulas')
await p.waitForTimeout(600)

// Receitas em texto
await p.click('nav >> text=Receitas em texto')
await p.waitForTimeout(1200)
await p.screenshot({ path: `${OUT}/recipes-grid.png` })

await p.click('text=Brownie fit')
await p.waitForTimeout(800)
await p.screenshot({ path: `${OUT}/recipe-detail.png` })
await p.click('text=Voltar para receitas')
await p.waitForTimeout(600)

// PlaylistView: prev/next
await p.click('nav >> text=Treinos em vídeo')
await p.waitForTimeout(2500)
await p.locator('.pl-card').first().click()
await p.waitForTimeout(3500)
await p.screenshot({ path: `${OUT}/playlist-nav.png` })

await b.close()
console.log('done')

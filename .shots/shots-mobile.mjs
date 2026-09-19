import { chromium } from 'playwright'

const OUT = 'C:/Users/Nandox/AppData/Local/Temp/treinosfit-shots'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })

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

// barra normal (início do scroll)
await p.screenshot({ path: `${OUT}/mobile-nav-a.png` })

// rola a bottomnav até o fim (deve revelar Apoiar, sem scrollbar visível)
await p.evaluate(() => {
  const nav = document.querySelector('.bottomnav')
  nav.scrollTo({ left: nav.scrollWidth })
})
await p.waitForTimeout(400)
await p.screenshot({ path: `${OUT}/mobile-nav-b.png` })

const info = await p.evaluate(() => {
  const nav = document.querySelector('.bottomnav')
  return { scrollW: nav.scrollWidth, clientW: nav.clientWidth }
})
console.log('scrollWidth', info.scrollW, 'clientWidth', info.clientW)

await b.close()
console.log('done')

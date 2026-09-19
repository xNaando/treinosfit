import { chromium } from 'playwright'

// Screenshots vão para o temp do sistema (fora do repo)
const OUT = 'C:/Users/Nandox/AppData/Local/Temp/treinosfit-shots'

const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1400, height: 950 }, deviceScaleFactor: 1.6 })

await p.goto('http://localhost:4173/')
await p.waitForTimeout(2500)
await p.screenshot({ path: `${OUT}/ob1-inicio.png` })

// passo 0: nome + sexo
await p.fill('input[placeholder="Seu nome ou apelido"]', 'Nando')
await p.click('text=Próximo')
await p.waitForTimeout(800)

// passo 1: medidas — deixa o peso alto pra ver o corpo gordo
await p.locator('input[type=range]').nth(0).fill('175')
await p.locator('input[type=range]').nth(1).fill('115')
await p.waitForTimeout(600)
await p.screenshot({ path: `${OUT}/ob2-medidas-gordo.png` })

// altura máxima — cabeça não pode ser cortada
await p.locator('input[type=range]').nth(0).fill('220')
await p.waitForTimeout(600)
await p.screenshot({ path: `${OUT}/ob2b-altura-max.png` })
await p.locator('input[type=range]').nth(0).fill('175')

await p.locator('input[type=range]').nth(1).fill('55')
await p.waitForTimeout(600)
await p.screenshot({ path: `${OUT}/ob3-medidas-magro.png` })

await p.locator('input[type=range]').nth(1).fill('78')
await p.click('text=Próximo')
await p.waitForTimeout(800)

// passo 2: avatar — testa penteados
await p.screenshot({ path: `${OUT}/ob4-avatar-m.png` })
await p.click('text=Boné')
await p.waitForTimeout(500)
await p.screenshot({ path: `${OUT}/ob5-bone.png` })
await p.click('text=Moicano')
await p.waitForTimeout(500)
await p.screenshot({ path: `${OUT}/ob6-moicano.png` })

// troca para feminino e testa
await p.click('text=Voltar')
await p.waitForTimeout(300)
await p.click('text=Voltar')
await p.waitForTimeout(300)
await p.click('text=Feminino')
await p.click('text=Próximo')
await p.waitForTimeout(300)
await p.click('text=Próximo')
await p.waitForTimeout(800)
await p.screenshot({ path: `${OUT}/ob7-avatar-f.png` })
await p.click('text=Maria-chiquinha')
await p.waitForTimeout(500)
await p.screenshot({ path: `${OUT}/ob8-chiquinhas.png` })

// galeria completa
await p.goto('http://localhost:4173/?dev=avatars')
await p.waitForTimeout(4000)
await p.screenshot({ path: `${OUT}/galeria.png`, fullPage: true })

await b.close()
console.log('ok')

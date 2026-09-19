# Treinos Fit

Plataforma de treinos com avatar 3D que evolui com você. Feita com React + Vite + Three.js, roda 100% no navegador e funciona no GitHub Pages.

## O que tem

- **Avatar 3D** — personalize cor da pele, cor/estilo do cabelo e camiseta. Ele muda de **altura** conforme sua altura e fica **mais magro/gordo** conforme seu peso (via IMC). Arraste para girar.
- **Aulas em vídeo** — playlists públicas do YouTube embutidas + adicione as suas.
- **Aulas em texto** — guias de treino escritos (aquecimento, HIIT, força, mobilidade, core, planejamento).
- **Receitas em vídeo** — playlists públicas de culinária + adicione as suas.
- **Receitas em texto** — receitas fit com macros estimados.
- **Progresso** — registro de pesagens, gráfico, metas com projeção e **linha do tempo do avatar**.
- **Dashboard** — check-in de treino com confete, sequência, IMC, gasto calórico estimado.
- **Banco fake** — tudo salvo em `localStorage` (sobrevive ao F5), com exportar/importar backup.

## Rodar local

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview  # testa o build
```

## Deploy (GitHub Pages)

O workflow `.github/workflows/deploy.yml` faz build + deploy automático a cada push na `main`.

**Uma única configuração manual é necessária:**

1. No GitHub, vá em **Settings → Pages**
2. Em **Build and deployment → Source**, selecione **GitHub Actions**
3. Faça push para a `main` — o deploy acontece sozinho

O site fica em `https://<seu-usuario>.github.io/treinosfit/`.

## Estrutura

```
src/
  db.js            # banco fake (localStorage) + hook useDb
  utils.js         # IMC, TDEE, streak, parser de URLs do YouTube
  confetti.js      # confete em canvas
  data/            # playlists, aulas e receitas
  components/
    Avatar3D.jsx   # boneco 3D procedural (three.js / react-three-fiber)
    Onboarding.jsx # wizard de setup inicial
    Dashboard.jsx  # tela inicial
    VideoLibrary.jsx / TextLessons.jsx / TextRecipes.jsx
    Progress.jsx   # pesagens, gráficos, metas, evolução do avatar
    Profile.jsx    # perfil, avatar, backup
    Chart.jsx      # gráfico de linha em SVG
    Icon.jsx       # ícones SVG
```

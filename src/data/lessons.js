import imgAquecimento from '../assets/img/lessons/aquecimento.jpg'
import imgHiit from '../assets/img/lessons/hiit-iniciante.jpg'
import imgForca from '../assets/img/lessons/forca-sem-equipamento.jpg'
import imgMobilidade from '../assets/img/lessons/mobilidade.jpg'
import imgCore from '../assets/img/lessons/core.jpg'
import imgSemana from '../assets/img/lessons/semana-treino.jpg'
import imgGluteos from '../assets/img/lessons/gluteos-pernas.jpg'
import imgBracos from '../assets/img/lessons/bracos-ombros.jpg'
import imgAlongamento from '../assets/img/lessons/alongamento-noite.jpg'
import imgCaminhada from '../assets/img/lessons/caminhada-guia.jpg'
import imgExpress from '../assets/img/lessons/treino-express.jpg'
import imgPostura from '../assets/img/lessons/postura-sentado.jpg'
import imgComecar from '../assets/img/lessons/comecar-zero.jpg'
import imgAgachamento from '../assets/img/lessons/agachamento-perfeito.jpg'
import imgLombar from '../assets/img/lessons/lombar-saudavel.jpg'
import imgFlexibilidade from '../assets/img/lessons/flexibilidade-4semanas.jpg'
import imgParque from '../assets/img/lessons/treino-parque.jpg'
import imgManha from '../assets/img/lessons/treino-manha-7min.jpg'
import imgCorrida from '../assets/img/lessons/corrida-iniciante.jpg'
import imgCostas from '../assets/img/lessons/costas-sem-barra.jpg'
import imgTabata from '../assets/img/lessons/tabata-4min.jpg'
import imgEmagrecimento from '../assets/img/lessons/emagrecimento-verdade.jpg'
import imgDupla from '../assets/img/lessons/treino-a-dois.jpg'
import imgEquilibrio from '../assets/img/lessons/equilibrio-core.jpg'
import imgHipertrofia from '../assets/img/lessons/hipertrofia.jpg'
import imgYoga from '../assets/img/lessons/yoga.jpg'
import imgCorda from '../assets/img/lessons/corda.jpg'
import imgPrancha from '../assets/img/lessons/prancha.jpg'
import imgVolta from '../assets/img/lessons/volta.jpg'
import imgBoxe from '../assets/img/lessons/boxe.jpg'

export const LESSONS = [
  {
    id: 'aquecimento',
    img: imgAquecimento,
    title: 'Comece por aqui: aquecimento essencial',
    level: 'Iniciante',
    minutes: 8,
    tag: 'Mobilidade',
    color: '#8b5cf6',
    intro:
      'Nunca pule o aquecimento: ele eleva a temperatura muscular, lubrifica as articulações e reduz (muito) o risco de lesão. Esta sequência de 8 minutos prepara o corpo inteiro para qualquer treino.',
    sections: [
      {
        h: 'Sequência (40s cada, sem pausa)',
        items: [
          'Polichinelo — acelera o coração e acorda o corpo todo',
          'Rotação de ombros para trás — afrouxa peito e ombros',
          'Rotação de quadril — círculos grandes nos dois sentidos',
          'Agachamento livre — desça até onde for confortável',
          'Afundo alternado com torção — mobiliza quadril e coluna',
          'Caminhada do urso — mãos no chão, caminhe até a prancha e volte',
          'Skipping baixo — joelhos sobem alternadamente',
          'Panturrilha + elevação de braços — finalize alongando em pé',
        ],
      },
      {
        h: 'Sinais de que você está pronto',
        items: [
          'Respiração levemente acelerada',
          'Corpo aquecido, sem suor excessivo',
          'Articulações sem "estalos" de rigidez',
        ],
      },
    ],
    tips: [
      'Se algum movimento doer (dor aguda, não esforço), troque por uma versão mais suave.',
      'Em dias frios, repita a sequência uma segunda vez.',
    ],
  },
  {
    id: 'hiit-iniciante',
    img: imgHiit,
    title: 'HIIT para iniciantes: queime em 15 minutos',
    level: 'Iniciante',
    minutes: 15,
    tag: 'Cardio',
    color: '#ec4899',
    intro:
      'HIIT (treino intervalado de alta intensidade) alterna picos de esforço com pausas curtas. É o treino que mais queima calorias por minuto — e continua queimando depois que você para. Aqui, uma versão segura para começar.',
    sections: [
      {
        h: 'Formato',
        items: [
          '30 segundos de esforço + 30 segundos de descanso',
          '5 exercícios, 3 rodadas = 15 minutos',
          'Intensidade: 7/10 — ofegante, mas conseguindo manter a forma',
        ],
      },
      {
        h: 'Exercícios',
        items: [
          'Agachamento — pés na largura do quadril, desça como se sentasse numa cadeira',
          'Flexão inclinada — mãos apoiadas em mesa/sofá, corpo em linha reta',
          'Corrida parada — joelhos alternados na altura do quadril',
          'Prancha com toque de ombro — quadril estável, sem balançar',
          'Afundo alternado — passo para trás, joelho quase toca o chão',
        ],
      },
      {
        h: 'Progressão',
        items: [
          'Semanas 1-2: 30s/30s conforme acima',
          'Semanas 3-4: 40s esforço / 20s descanso',
          'Semana 5+: troque corrida parada por polichinelo com agachamento',
        ],
      },
    ],
    tips: [
      'Faça em dias alternados — o corpo precisa de 24-48h para se recuperar do HIIT.',
      'Se sentir tontura, pare, respire e hidrate-se.',
      'Tênis com bom amortecimento faz diferença nas articulações.',
    ],
  },
  {
    id: 'forca-sem-equipamento',
    img: imgForca,
    title: 'Força sem equipamentos: treino completo',
    level: 'Todos',
    minutes: 25,
    tag: 'Força',
    color: '#f59e0b',
    intro:
      'Peso do próprio corpo é suficiente para construir músculos — desde que você progrida a dificuldade. Este treino cobre empurrar, puxar (adaptado), pernas e core.',
    sections: [
      {
        h: 'Bloco A — Membros inferiores (4x)',
        items: [
          'Agachamento completo — 12-15 reps (se fácil, faça agachamento búlgaro com pé apoiado atrás)',
          'Ponte de glúteo — 15 reps, aperte o glúteo 1s no topo',
          'Afundo reverso — 10 reps por perna',
        ],
      },
      {
        h: 'Bloco B — Membros superiores (4x)',
        items: [
          'Flexão de braço — 8-12 reps (joelhos no chão se precisar; pés elevados se fácil)',
          'Mergulho entre cadeiras — 8-10 reps para tríceps',
          'Remada com mochila — encha uma mochila, incline o tronco e puxe 12-15x',
        ],
      },
      {
        h: 'Bloco C — Core (3x)',
        items: [
          'Prancha — 30-45s, corpo em linha reta',
          'Dead bug — 10 reps por lado, lombar colada no chão',
          'Prancha lateral — 20-30s por lado',
        ],
      },
    ],
    tips: [
      'Descanse 60-90s entre as séries.',
      'Quando conseguir o topo da faixa de reps em todas as séries, suba a dificuldade (versão mais dura ou mochila mais pesada).',
      'Dor muscular leve 24-48h depois é normal; dor articular não é.',
    ],
  },
  {
    id: 'mobilidade',
    img: imgMobilidade,
    title: 'Mobilidade diária: 10 minutos que mudam tudo',
    level: 'Todos',
    minutes: 10,
    tag: 'Mobilidade',
    color: '#22c55e',
    intro:
      'Mobilidade é a capacidade de mover as articulações em toda a amplitude com controle. Dez minutos por dia melhoram postura, aliviam dores e deixam seus treinos mais eficientes.',
    sections: [
      {
        h: 'Rotina (1 minuto por posição)',
        items: [
          'Postura do gato-vaca — mobiliza a coluna inteira',
          'Alongamento de flexores de quadril — meio ajoelhado, quadril para frente',
          'Rotação torácica deitado — "livro aberto", 30s cada lado',
          'Postura da criança com respiração profunda',
          'Agachamento profundo apoiado — segure num batente e "afunde" o quadril',
          'Alongamento de peitoral na porta — antebraço no batente, gire o peito para fora',
          'Círculos de tornozelo + flexão dorsal',
          'Pescoço: inclinações laterais suaves + "sim" e "não" lentos',
          'Respiração diafragmática — 10 respirações profundas para encerrar',
          'Postura do pombo (ou 4 deitado) — 30s cada lado para glúteos',
        ],
      },
    ],
    tips: [
      'Faça ao acordar ou antes de dormir — o importante é a constância diária.',
      'Respire lento e fundo: é a respiração que "destrava" a amplitude.',
    ],
  },
  {
    id: 'core',
    img: imgCore,
    title: 'Core forte: abdômen e lombar sem segredo',
    level: 'Intermediário',
    minutes: 12,
    tag: 'Core',
    color: '#0ea5e9',
    intro:
      'Core não é só "tanquinho": é o cinto de segurança da sua coluna. Um core forte melhora todos os outros exercícios e protege a lombar no dia a dia.',
    sections: [
      {
        h: 'Circuito (3 rodadas, 40s cada)',
        items: [
          'Dead bug — braços e pernas alternados, lombar no chão',
          'Prancha — abdômen firme, sem deixar o quadril cair',
          'Bird dog — mão e pé opostos estendidos, quadril estável',
          'Prancha lateral — cada lado',
          'Superman — peito e coxas levantados, glúteos e lombar ativos',
          'Abdominal hollow hold (ou crunch controlado) — lombar sempre apoiada',
        ],
      },
      {
        h: 'Erros comuns',
        items: [
          'Puxar o pescoço nos abdominais — o queixo fica "segurando uma laranja"',
          'Prender a respiração — solte o ar no esforço',
          'Fazer mil repetições rápidas — 10 lentas e controladas valem mais',
        ],
      },
    ],
    tips: [
      'Treine core 3-4x por semana — ele se recupera rápido.',
      'Definição abdominal vem principalmente da cozinha (déficit calórico), não de mil abdominais.',
    ],
  },
  {
    id: 'semana-treino',
    img: imgSemana,
    title: 'Monte sua semana de treinos',
    level: 'Todos',
    minutes: 6,
    tag: 'Planejamento',
    color: '#e879f9',
    intro:
      'O melhor plano de treino é aquele que você consegue cumprir. Aprenda a montar uma semana equilibrada combinando força, cardio e descanso.',
    sections: [
      {
        h: 'Estrutura sugerida (iniciante)',
        items: [
          'Segunda — Força corpo todo (treino "Força sem equipamentos")',
          'Terça — HIIT ou caminhada rápida 30 min',
          'Quarta — Descanso ativo: mobilidade 10 min',
          'Quinta — Força corpo todo',
          'Sexta — Cardio leve/moderado (dança, bike, caminhada)',
          'Sábado — Aula em vídeo que você gostar + alongamento',
          'Domingo — Descanso total',
        ],
      },
      {
        h: 'Regras de ouro',
        items: [
          '2-3 sessões de força por semana são a base — músculo é o que sustenta o metabolismo',
          'Nunca coloque dois dias de HIIT seguidos',
          'Descanso faz parte do treino — é nele que o corpo melhora',
          'Use o check-in do app para marcar cada dia treinado e manter a sequência',
        ],
      },
      {
        h: 'E se eu falhar um dia?',
        items: [
          'Sem culpa: retome no dia seguinte, sem "compensar" com treino dobrado',
          'Meta realista: 4 dias de movimento por semana já transforma o corpo em meses',
        ],
      },
    ],
    tips: [
      'Marque o treino na agenda como um compromisso inadiável com você mesmo.',
      'Reavalie a cada 4 semanas: aumente um pouco a dificuldade ou o volume.',
    ],
  },
  {
    id: 'gluteos-pernas',
    img: imgGluteos,
    title: 'Pernas e glúteos fortes em casa',
    level: 'Intermediário',
    minutes: 20,
    tag: 'Força',
    color: '#f97316',
    intro:
      'Pernas são os maiores músculos do corpo — treiná-las queima mais calorias e constrói a base de tudo: postura, corrida, subir escada sem cansar. Este treino usa só o peso do corpo.',
    sections: [
      {
        h: 'Circuito (4 rodadas, descanso de 60s entre elas)',
        items: [
          'Agachamento — 15 reps, desça até as coxas ficarem paralelas ao chão',
          'Afundo alternado — 10 reps por perna, tronco ereto',
          'Ponte de glúteo — 15 reps, aperte 2s no topo',
          'Agachamento sumô — pés afastados, pontas para fora, 12 reps',
          'Elevação de panturrilha — 20 reps, suba na ponta dos pés e desça devagar',
          'Agachamento isométrico na parede — 30s de "cadeirinha"',
        ],
      },
      {
        h: 'Progressão',
        items: [
          'Semanas 1-2: 4 rodadas conforme acima',
          'Semanas 3-4: segure uma mochila com peso ou garrafas d\'água',
          'Semana 5+: troque agachamento por agachamento búlgaro (pé apoiado atrás numa cadeira)',
        ],
      },
      {
        h: 'Sinais de boa execução',
        items: [
          'Joelhos acompanham a direção das pontas dos pés — nunca caindo para dentro',
          'Calcanhares firmes no chão durante o agachamento',
          'Queimação no músculo é ok; dor no joelho não é',
        ],
      },
    ],
    tips: [
      'Faça 2x por semana com pelo menos 48h de intervalo.',
      'Desça devagar (3 segundos) e suba com força — a descida controlada constrói mais músculo.',
    ],
  },
  {
    id: 'bracos-ombros',
    img: imgBracos,
    title: 'Braços e ombros sem academia',
    level: 'Todos',
    minutes: 15,
    tag: 'Força',
    color: '#6366f1',
    intro:
      'Braços definidos não precisam de halteres: garrafas d\'água, mochila pesada e o próprio corpo já dão estímulo suficiente. Foque em tríceps — ele é 2/3 do volume do braço.',
    sections: [
      {
        h: 'Circuito (3 rodadas)',
        items: [
          'Flexão de braço — 8-12 reps (joelhos no chão se precisar)',
          'Mergulho entre cadeiras — 8-10 reps para tríceps',
          'Elevação lateral com garrafas — 12-15 reps, cotovelos levemente flexionados',
          'Rosca direta com mochila — 12 reps, cotovelos colados no tronco',
          'Prancha com toque de ombro — 10 toques por lado, quadril estável',
        ],
      },
      {
        h: 'Erros que roubam seu resultado',
        items: [
          'Balançar o tronco para levantar o peso — diminua a carga e controle',
          'Encolher os ombros na elevação lateral — mantenha-os longe das orelhas',
          'Amplitude curta no mergulho — desça até ~90° de cotovelo',
        ],
      },
    ],
    tips: [
      'Tríceps responde melhor com repetições mais lentas e amplitude completa.',
      'Duas garrafas de 1,5L = ~3kg. Encheu fácil? Adicione areia ou água.',
    ],
  },
  {
    id: 'alongamento-noite',
    img: imgAlongamento,
    title: 'Alongamento noturno para dormir melhor',
    level: 'Todos',
    minutes: 10,
    tag: 'Mobilidade',
    color: '#8b5cf6',
    intro:
      'Dez minutos de alongamento lento antes de deitar baixam a frequência cardíaca, soltam a tensão acumulada do dia e preparam o corpo para um sono mais profundo.',
    sections: [
      {
        h: 'Sequência (1 minuto por posição, respirando fundo)',
        items: [
          'Postura da criança — joelhos abertos, testa no chão, braços estendidos',
          'Torção deitado — joelhos para um lado, olhar para o outro (30s cada)',
          'Borboleta — pés juntos, joelhos abertos, relaxe o quadril',
          'Alongamento de posterior — perna estendida, puxe a ponta do pé',
          'Postura do pombo ou 4 deitado — 30s cada lado',
          'Pernas na parede — 2 min com as pernas apoiadas na vertical',
          'Pescoço: incline a orelha em direção ao ombro, 20s cada lado',
        ],
      },
      {
        h: 'Respiração que desliga o corpo',
        items: [
          'Inspire por 4 segundos, segure 2, solte por 6 — repita em todas as posições',
          'A soltura longa do ar ativa o modo "descanso" do sistema nervoso',
        ],
      },
    ],
    tips: [
      'Não force a amplitude — a meta aqui é relaxar, não ganhar flexibilidade.',
      'Faça de pijama, com luz baixa: transforme em ritual de sono.',
    ],
  },
  {
    id: 'caminhada-guia',
    img: imgCaminhada,
    title: 'Caminhada: o cardio mais subestimado',
    level: 'Iniciante',
    minutes: 7,
    tag: 'Cardio',
    color: '#10b981',
    intro:
      'Caminhar não é "exercício de mentira": é o cardio mais seguro que existe, queima gordura sem destruir as articulações e qualquer pessoa consegue começar hoje — sem equipamento.',
    sections: [
      {
        h: 'Por que funciona',
        items: [
          '30 min de caminhada rápida queimam ~150 kcal — e quase ninguém desiste por lesão',
          'Melhora humor e sono no mesmo dia, sem precisar de semanas',
          'Pode ser quebrada em 3x 10 min ao longo do dia com o mesmo benefício',
        ],
      },
      {
        h: 'Como progredir (8 semanas)',
        items: [
          'Semanas 1-2: 20-30 min em ritmo confortável, 5x por semana',
          'Semanas 3-4: 30-40 min + 5 min de ritmo forte no meio',
          'Semanas 5-6: 40 min + morros ou escadas no trajeto',
          'Semanas 7-8: 45-60 min ou intervalos de 2 min rápido / 2 min normal',
        ],
      },
      {
        h: 'Teste da conversa (intensidade certa)',
        items: [
          'Ritmo certo: você fala frases completas, mas não consegue cantar',
          'Falou sem esforço? Acelere. Não conseguiu falar? Diminua.',
        ],
      },
    ],
    tips: [
      'Conte passos: 7.000-8.000 por dia já mudam a saúde — não precisa dos famosos 10 mil.',
      'Podcast ou playlist favorita transformam a caminhada em momento esperado do dia.',
    ],
  },
  {
    id: 'treino-express',
    img: imgExpress,
    title: 'Treino express de 20 minutos para dias corridos',
    level: 'Todos',
    minutes: 6,
    tag: 'Planejamento',
    color: '#ef4444',
    intro:
      'Dia sem tempo? Um treino de 20 minutos bem feito vale mais que zero — e manter o hábito importa mais que a duração. Aqui está o formato mais eficiente.',
    sections: [
      {
        h: 'Formato AMRAP (quantas rodadas conseguir em 20 min)',
        items: [
          '10 agachamentos',
          '8 flexões (qualquer variação)',
          '10 afundos alternados (5 por perna)',
          '12 mountain climbers (6 por perna)',
          '30s de prancha',
          'Repita sem parar até o cronômetro zerar — descanse só o necessário',
        ],
      },
      {
        h: 'Regras do dia corrido',
        items: [
          'Aqueça só 2 minutos: polichinelo + rotação de articulações',
          'Intensidade 8/10 — é curto, então vale apertar o ritmo',
          'Anote as rodadas: na próxima vez, tente bater seu número',
        ],
      },
      {
        h: 'Quando usar',
        items: [
          'Viagens, dias de trabalho pesado, fim de semana cheio',
          'Não substitua o plano semanal — é o "quebra-galho", não a regra',
        ],
      },
    ],
    tips: [
      'Programe o alarme: "são só 20 minutos" é a mentira produtiva que funciona.',
      'Feito é melhor que perfeito — 20 min mantêm a sequência e o ânimo.',
    ],
  },
  {
    id: 'postura-sentado',
    img: imgPostura,
    title: 'Postura de quem trabalha sentado',
    level: 'Todos',
    minutes: 8,
    tag: 'Mobilidade',
    color: '#0ea5e9',
    intro:
      'Oito horas sentado encurtam o quadril, enfraquecem o glúteo e jogam a cabeça para frente — daí vêm as dores no pescoço e na lombar. Dez minutos de correção por dia revertem isso.',
    sections: [
      {
        h: 'Pausa ativa (a cada 1-2h sentado, 3 min)',
        items: [
          'Levante e faça 10 agachamentos livres — acorda o glúteo "adormecido"',
          'Rotação de ombros para trás — 10 círculos grandes',
          'Alongamento de peitoral na porta — 20s cada lado',
          'Olhe para longe por 20s — descansa os olhos da tela',
        ],
      },
      {
        h: 'Corretivo diário (5 min)',
        items: [
          'Alongamento de flexor de quadril — meio ajoelhado, 40s cada lado',
          'Ponte de glúteo — 15 reps, reativa o músculo que a cadeira desliga',
          'Retração de queixo — "empurre" a cabeça para trás, 10 reps (corrige a cabeça projetada)',
          'Gato-vaca — 10 repetições lentas para a coluna',
        ],
      },
      {
        h: 'Arrume sua mesa',
        items: [
          'Topo da tela na altura dos olhos — livros embaixo resolvem',
          'Pés apoiados no chão, joelhos a ~90°',
          'Cotovelos a ~90°, ombros relaxados',
        ],
      },
    ],
    tips: [
      'A melhor postura é a próxima: mova-se a cada 30-60 min, mesmo que por 1 minuto.',
      'Dor no pescoço que não some em dias merece avaliação profissional.',
    ],
  },
  {
    id: 'comecar-zero',
    img: imgComecar,
    title: 'Nunca treinei na vida: comece por aqui',
    level: 'Iniciante',
    minutes: 8,
    tag: 'Planejamento',
    color: '#22c55e',
    intro:
      'Começar do zero é intimidador — e é exatamente por isso que a maioria desiste na primeira semana: faz demais, sente dor em tudo e desanima. Este guia te coloca no ritmo certo desde o dia 1.',
    sections: [
      {
        h: 'Semana 1 — só crie o hábito',
        items: [
          'Meta: mover o corpo 15-20 min por dia, 5 dias — nada mais',
          'Caminhada rápida + a sequência de aquecimento do app já contam',
          'Não busque suor nem dor: busque "terminei e faria de novo"',
        ],
      },
      {
        h: 'Semanas 2-4 — adicione força leve',
        items: [
          '2x por semana: o treino "Força sem equipamentos" com 2 rodadas apenas',
          'Nos outros dias: caminhada ou mobilidade',
          'Dor muscular leve nos primeiros dias é normal e passa — dor articular não é',
        ],
      },
      {
        h: 'Erros clássicos de quem começa',
        items: [
          'Treinar todo dia até falhar — o corpo melhora no descanso, não no treino',
          'Mudar de dieta radicalmente junto — mude uma coisa por vez',
          'Comparar seu dia 1 com o ano 3 de alguém no Instagram',
          'Pular aquecimento "pra ganhar tempo" — é onde a lesão mora',
        ],
      },
    ],
    tips: [
      'Regra de ouro: em dúvida entre treinar leve e não treinar, treine leve.',
      'Marque cada dia no check-in do app — ver a sequência crescer vicia do jeito certo.',
    ],
  },
  {
    id: 'agachamento-perfeito',
    img: imgAgachamento,
    title: 'Agachamento perfeito: o guia completo',
    level: 'Todos',
    minutes: 8,
    tag: 'Força',
    color: '#f59e0b',
    intro:
      'O agachamento é o exercício mais importante que existe — e o mais mal-executado. Dominar a técnica vale mais que qualquer carga: é ele que constrói pernas, glúteos e protege os joelhos.',
    sections: [
      {
        h: 'Posição inicial',
        items: [
          'Pés na largura dos ombros, pontas levemente para fora (~15-30°)',
          'Peso distribuído no pé inteiro — calcanhar, não ponta',
          'Peito aberto, olhar à frente, abdômen firme',
        ],
      },
      {
        h: 'A descida (o segredo está aqui)',
        items: [
          'Inicie empurrando o quadril para trás, como se sentasse numa cadeira',
          'Desça até as coxas ficarem paralelas ao chão (ou até onde mantiver a lombar neutra)',
          'Joelhos apontam na mesma direção das pontas dos pés — nunca para dentro',
          'Desça controlado (~3 segundos), suba com força',
        ],
      },
      {
        h: 'Erros que machucam',
        items: [
          'Calcanhar levantando do chão — sinal de tornozelo rígido: treine a mobilidade do app',
          'Lombar arredondando no fundo ("butt wink") — reduza a profundidade',
          'Joelho caindo para dentro — enfraquece a articulação a cada rep',
          'Prender a respiração a série toda — inspire na descida, solte na subida',
        ],
      },
      {
        h: 'Teste rápido de execução',
        items: [
          'Filme-se de lado fazendo 5 reps — joelho estável, calcanhar no chão, lombar reta = aprovado',
          'Consegue conversar durante a série? Intensidade certa para aprender',
        ],
      },
    ],
    tips: [
      'Domine 3x15 com técnica perfeita antes de adicionar qualquer peso.',
      'Agachamento na frente do espelho acelera a correção — veja os joelhos.',
    ],
  },
  {
    id: 'lombar-saudavel',
    img: imgLombar,
    title: 'Lombar sem dor: fortaleça e proteja',
    level: 'Todos',
    minutes: 10,
    tag: 'Mobilidade',
    color: '#0ea5e9',
    intro:
      'Dor na lombar quase sempre vem de glúteo fraco + quadril travado + core desligado — não da lombar em si. Fortalecer esses três resolve o problema na raiz.',
    sections: [
      {
        h: 'Rotina diária (10 min)',
        items: [
          'Gato-vaca — 10 repetições lentas, mobiliza a coluna toda',
          'Bird dog — 10 reps por lado, braço e perna opostos, quadril estável',
          'Ponte de glúteo — 15 reps com pausa de 2s no topo',
          'Dead bug — 10 reps por lado, lombar colada no chão o tempo todo',
          'Prancha lateral — 20s cada lado',
          'Alongamento de flexor de quadril — 40s cada lado (o músculo que puxa a lombar)',
          'Respiração profunda deitado — 10 respirações para encerrar',
        ],
      },
      {
        h: 'No dia a dia (o que mais importa)',
        items: [
          'Ao pegar algo do chão: agache dobrando joelhos, não dobre a coluna',
          'Sentado: apoie os pés no chão e levante a cada 30-60 min',
          'Dormir de lado com travesseiro entre os joelhos alinha a lombar',
        ],
      },
      {
        h: 'Sinais de alerta (pare e procure ajuda)',
        items: [
          'Dor que desce pela perna abaixo do joelho (possível ciático)',
          'Formigamento ou perda de força nas pernas',
          'Dor que piora à noite ou não melhora com repouso',
        ],
      },
    ],
    tips: [
      'Dor muscular leve após a rotina é normal; dor aguda na coluna durante o exercício = pare.',
      'Consistência vence intensidade: 10 min diários > 1h num dia só.',
    ],
  },
  {
    id: 'flexibilidade-4semanas',
    img: imgFlexibilidade,
    title: 'Flexibilidade em 4 semanas: plano prático',
    level: 'Todos',
    minutes: 12,
    tag: 'Mobilidade',
    color: '#d946ef',
    intro:
      'Flexibilidade se treina como força: dose, repetição e progressão. Este plano de 4 semanas foca nas três áreas que mais travam com a vida moderna — posterior de coxa, quadril e ombros.',
    sections: [
      {
        h: 'Rotina base (todo dia, 10-12 min)',
        items: [
          'Posterior de coxa — perna estendida, incline o tronco, 40s cada lado',
          'Borboleta — pés juntos, cotovelos pressionando os joelhos, 60s',
          'Postura do pombo ou 4 deitado — 40s cada lado',
          'Alongamento de peitoral na porta — 30s cada braço',
          'Rotação torácica "livro aberto" — 30s cada lado',
          'Regra: respire fundo e relaxe a cada soltura — é a respiração que libera a amplitude',
        ],
      },
      {
        h: 'Progressão semana a semana',
        items: [
          'Semana 1: aprenda as posições, segure 20-30s por lado',
          'Semana 2: suba para 40s + faça a rotina 2x por dia',
          'Semana 3: adicione movimento lento na posição (balaço suave)',
          'Semana 4: teste de novo — meça o quanto você chega mais perto do chão/ponta do pé',
        ],
      },
      {
        h: 'O que NÃO fazer',
        items: [
          'Quicar forçando a amplitude (bouncing) — rasga mais do que alonga',
          'Alongar músculo frio com força — faça depois de 3-5 min de movimento leve',
          'Comparar sua amplitude com contorcionista de rede social',
        ],
      },
    ],
    tips: [
      'Dor aguda ≠ alongamento: a sensação certa é "repuxar confortável", nunca dor.',
      'Flexibilidade some se você parar — mantenha 3x por semana depois das 4 semanas.',
    ],
  },
  {
    id: 'treino-parque',
    img: imgParque,
    title: 'Treino no parque: barra fixa e banco',
    level: 'Intermediário',
    minutes: 25,
    tag: 'Força',
    color: '#10b981',
    intro:
      'A barra fixa de praça é a melhor "máquina de academia" gratuita que existe. Com ela + um banco você faz um treino de corpo inteiro ao ar livre — inclusive o puxar que falta nos treinos em casa.',
    sections: [
      {
        h: 'Na barra (membros superiores — puxar)',
        items: [
          'Barra fixa — 4x o máximo de reps (mesmo que seja 1-2)',
          'Sem conseguir ainda? Pendure-se 20-30s — a pegada já é treino',
          'Barra com impulso — pule até o queixo passar a barra, desça lento (4x)',
          'Joelhos elevados pendurado — 3x10 para o core',
        ],
      },
      {
        h: 'No banco (membros inferiores + empurrar)',
        items: [
          'Step-up — 12 reps por perna subindo no banco',
          'Mergulho de tríceps — 3x8-12 com mãos no banco',
          'Flexão inclinada — mãos no banco, 3x12',
          'Split squat búlgaro — pé de trás no banco, 3x8 por perna',
        ],
      },
      {
        h: 'Estrutura do treino',
        items: [
          'Alterne 1 exercício de barra + 1 de banco, descanso de 60-90s',
          'Total: ~25 min incluindo aquecimento de 3 min (polichinelo + rotações)',
        ],
      },
    ],
    tips: [
      'Barra fixa zero reps? Normal — pendurar e descer lento (negativa) constrói a força até a primeira rep sair.',
      'Leve água e escolha horário fresco — treino ao sol do meio-dia drena o rendimento.',
    ],
  },
  {
    id: 'treino-manha-7min',
    img: imgManha,
    title: '7 minutos ao acordar: o treino que acelera o dia',
    level: 'Todos',
    minutes: 7,
    tag: 'Cardio',
    color: '#ec4899',
    intro:
      'Treinar de manhã tem uma vantagem brutal: nada ainda deu errado no dia para sabotar o treino. Esta sequência de 7 minutos acorda o corpo, sobe a energia e já risca "me exercitei" da lista.',
    sections: [
      {
        h: 'Sequência (30s cada, sem pausa — 2 rodadas)',
        items: [
          'Polichinelo — acorda o corpo todo',
          'Agachamento livre — pernas e glúteos',
          'Flexão (parede ou chão) — parte superior',
          'Afundo alternado — equilíbrio e pernas',
          'Prancha — core',
          'Corrida parada com joelhos altos — cardio final',
          'Respire fundo 20s — e o dia é seu',
        ],
      },
      {
        h: 'Por que funciona',
        items: [
          '7 min é curto demais pra ter desculpa — é a barreira de entrada perfeita',
          'Eleva a temperatura e a circulação: chega ao café já acordado',
          'Feito todo dia, soma ~50 min de exercício por semana "de graça"',
        ],
      },
      {
        h: 'Como não pular',
        items: [
          'Deixe o tapete/colchonete pronto do lado da cama na véspera',
          'Faça de pijama mesmo — a regra é só começar',
          'Dia com mais tempo? Emende o treino completo depois',
        ],
      },
    ],
    tips: [
      'Beba um copo d\'água antes de começar — o corpo acorda desidratado.',
      'Comeu antes? Espere 15-20 min se sentir desconforto — de estômago vazio funciona pra maioria.',
    ],
  },
  {
    id: 'corrida-iniciante',
    img: imgCorrida,
    title: 'Do sofá aos 5 km: guia de corrida para iniciantes',
    level: 'Iniciante',
    minutes: 8,
    tag: 'Cardio',
    color: '#ef4444',
    intro:
      'Correr é o cardio mais barato e eficiente que existe — mas quem sai correndo rápido demais desiste com canela doendo na semana 1. O segredo é intercalar corrida e caminhada até o corpo aguentar.',
    sections: [
      {
        h: 'Plano 8 semanas (3x por semana)',
        items: [
          'Semanas 1-2: 1 min correndo + 2 min caminhando, 8x (24 min total)',
          'Semanas 3-4: 2 min correndo + 1 min caminhando, 10x',
          'Semanas 5-6: 5 min correndo + 1 min caminhando, 5x',
          'Semana 7: 10 min correndo + 2 min caminhando, 3x',
          'Semana 8: 30 min correndo direto — seus primeiros 5 km',
        ],
      },
      {
        h: 'Técnica que economiza energia',
        items: [
          'Passadas curtas e rápidas — pisada longa demais freia você a cada passo',
          'Tronco levemente inclinado à frente, ombros relaxados',
          'Braços a ~90° balançando junto — nunca cruzados no peito',
          'Pouse no meio do pé, não no calcanhar esticado à frente',
        ],
      },
      {
        h: 'Erros de quem está começando',
        items: [
          'Correr rápido demais — ritmo certo é conseguir falar frases completas',
          'Tênis velho ou casual — tênis de corrida amortecido evita canelite',
          'Comparar ritmo com corredor de rua — seu pace inicial é só seu',
        ],
      },
    ],
    tips: [
      'Mesmo horário + mesma rota no começo = menos decisões, mais constância.',
      'Dor aguda na canela ou joelho que não passa em 2-3 dias merece pausa e atenção.',
    ],
  },
  {
    id: 'costas-sem-barra',
    img: imgCostas,
    title: 'Costas fortes sem barra fixa',
    level: 'Todos',
    minutes: 15,
    tag: 'Força',
    color: '#6366f1',
    intro:
      'Em casa é fácil treinar peito e perna — o difícil é "puxar". Costas fracas = postura curvada e ombros para frente. A solução: mochila pesada, toalha e o próprio corpo.',
    sections: [
      {
        h: 'Circuito (4 rodadas)',
        items: [
          'Remada com mochila — encha com livros/garrafas, tronco inclinado 45°, 12-15 reps',
          'Remada unilíbrada com garrafa — mão apoiada na cadeira, 12 reps por braço',
          'Puxada com toalha — toalha presa no batente, incline-se e puxe, 10 reps',
          'Superman — peito e coxas do chão, 12 reps com pausa no topo',
          'Snow angel deitado — braços deslizam do quadril até acima da cabeça, 12 reps',
        ],
      },
      {
        h: 'Técnica da remada (o exercício-chave)',
        items: [
          'Lombar reta e abdômen firme — nunca arredonde a coluna com peso',
          'Puxe o cotovelo para trás e para cima — pense em "espremer a omoplata", não em levantar o braço',
          'Desça controlado — a fase de descida vale tanto quanto a de subida',
        ],
      },
      {
        h: 'Como progredir',
        items: [
          'Mais peso na mochila (garrafas d\'água são ~1kg por litro)',
          'Rep mais lenta (3s subindo, 3s descendo)',
          'Versão explosiva: remada com pausa de 2s no topo',
        ],
      },
    ],
    tips: [
      'Sentir os braços mais que as costas? Foque em iniciar o movimento puxando o ombro para trás.',
      'Combine com o treino "Braços e ombros" para um treino completo de parte superior.',
    ],
  },
  {
    id: 'tabata-4min',
    img: imgTabata,
    title: 'Tabata: o treino de 4 minutos',
    level: 'Intermediário',
    minutes: 6,
    tag: 'Cardio',
    color: '#f97316',
    intro:
      'Tabata é o HIIT no modo hardcore: 20 segundos de esforço máximo + 10 de descanso, 8 vezes = 4 minutos. Parece pouco — até você tentar. É a maior queima calórica por minuto já medida em estudo.',
    sections: [
      {
        h: 'O protocolo',
        items: [
          '8 rodadas de 20s esforço + 10s descanso = 4 minutos exatos',
          'Esforço é MÁXIMO mesmo — 9/10 ou 10/10, não "mais ou menos"',
          'Use um timer de Tabata ou marque no relógio — os 10s passam voando',
        ],
      },
      {
        h: 'Exercícios que funcionam no formato',
        items: [
          'Escolha 1 por sessão: burpee, agachamento com salto, mountain climber',
          'Iniciante? Comece com corrida parada de joelhos altos ou polichinelo',
          'Alternativa sem impacto: bicicleta ou elíptico em sprint',
        ],
      },
      {
        h: 'Regras de segurança',
        items: [
          'Aqueça 5 min antes — Tabata a frio é receita de lesão',
          'Máximo 2-3 sessões por semana, nunca em dias seguidos',
          'Se a forma quebrar (técnica ruim), pare — fadiga máxima + má técnica = lesão',
          'Não é para iniciantes absolutos: primeiro construa base com o HIIT do app',
        ],
      },
    ],
    tips: [
      'A última rodada deve ser quase impossível — se terminou "de boa", não foi Tabata.',
      'Registre o nº de reps da pior rodada: esse é seu número a vencer na próxima.',
    ],
  },
  {
    id: 'emagrecimento-verdade',
    img: imgEmagrecimento,
    title: 'Emagrecimento: o que realmente funciona',
    level: 'Todos',
    minutes: 7,
    tag: 'Planejamento',
    color: '#22c55e',
    intro:
      'Déficit calórico é a única lei do emagrecimento — todo o resto (jejum, low carb, detox) é só uma forma diferente de chegar nele. Entender isso te liberta de dieta da moda para sempre.',
    sections: [
      {
        h: 'A matemática honesta',
        items: [
          '1 kg de gordura ≈ 7.700 kcal — um déficit de 500 kcal/dia tira ~0,5 kg por semana',
          'Déficits maiores funcionam menos: fome extrema = desistência e efeito sanfona',
          'Pese-se sempre de manhã, em jejum, depois do banheiro — e compare médias semanais',
        ],
      },
      {
        h: 'O que mantém você no déficit sem sofrer',
        items: [
          'Proteína em toda refeição — sacia mais por caloria e preserva músculo',
          'Comida de verdade na maior parte do prato — ultraprocessado engana a fome',
          'Água antes das refeições — metade das "fomes" é sede',
          'Durma 7h+: dormir mal aumenta o hormônio da fome no dia seguinte',
        ],
      },
      {
        h: 'O papel do treino',
        items: [
          'Musculação preserva o músculo que queima calorias parado — prioridade nº 1',
          'Cardio ajuda o déficit, mas não compensa cozinha ruim — "não se corre mais que o garfo"',
          'O avatar do app é seu termômetro visual — a balança mente no dia a dia, a tendência não',
        ],
      },
    ],
    tips: [
      'Meta saudável: 0,5-1% do peso por semana. Mais rápido = mais músculo perdido junto.',
      'Um dia fora da dieta não estraga nada — a média da semana é o que conta.',
    ],
  },
  {
    id: 'treino-a-dois',
    img: imgDupla,
    title: 'Treino a dois: o parceiro é o hack',
    level: 'Todos',
    minutes: 20,
    tag: 'Força',
    color: '#ec4899',
    intro:
      'Treinar com alguém dobra a adesão: tem compromisso marcado, tem quem puxe quando a preguiça bate, e tem competição amigável que te faz dar uma rep a mais. Chame o parceiro, o colega ou o amigo.',
    sections: [
      {
        h: 'Circuito em dupla (4 rodadas)',
        items: [
          'Agachamento sincronizado — de frente um pro outro, desçam juntos, 15 reps',
          'Prancha com high-five — de frente, toquem mãos alternadas, 10 toques por mão',
          'Afundo alternado lado a lado — 10 reps por perna',
          'Flexão em escada — quem termina primeiro espera o outro (3x10-12)',
          'Ponte de glúteo competição — quem aguenta mais 1s no topo por rodada vence',
          'Polichinelo final — 30s juntos, sem parar',
        ],
      },
      {
        h: 'Por que funciona',
        items: [
          'Compromisso com outra pessoa cancela 80% das desculpas',
          'Ritmo do mais forte puxa o mais fraco — e semana que vem inverte',
          'Treino vira programa a dois, não obrigação',
        ],
      },
      {
        h: 'Versões para níveis diferentes',
        items: [
          'O mais forte faz a versão difícil (flexão normal) enquanto o outro faz a fácil (joelhos)',
          'Mesmos exercícios, contagens diferentes — cada um no seu limite',
        ],
      },
    ],
    tips: [
      'Marque como compromisso fixo — "terça e sábado 19h" funciona, "quando der" não.',
      'Aposte algo simbólico: quem faltar paga o lanche pós-treino.',
    ],
  },
  {
    id: 'equilibrio-core',
    img: imgEquilibrio,
    title: 'Equilíbrio: o músculo invisível que você esquece',
    level: 'Todos',
    minutes: 10,
    tag: 'Mobilidade',
    color: '#8b5cf6',
    intro:
      'Equilíbrio é a habilidade que mais se perde com a vida sedentária — e a que mais evita quedas, torções e lesões depois dos 30. Treina-se com exercícios simples de perna única.',
    sections: [
      {
        h: 'Teste inicial (faça agora)',
        items: [
          'Fique em uma perna só, olhos abertos — cronometre até balançar ou apoiar',
          'Menos de 20s: seu equilíbrio precisa de atenção. Mais de 45s: excelente',
          'Repita de olhos fechados — a diferença mostra o quanto você depende da visão',
        ],
      },
      {
        h: 'Rotina diária (10 min)',
        items: [
          'Apoio unipodal — 30s cada perna, perto de uma parede para segurar',
          'Avião (postura do guerreiro 3) — tronco inclinado, perna atrás, 20s cada lado',
          'Caminhada em linha — um pé na frente do outro, 10 passos ida e volta',
          'Elevação de panturrilha lenta — 15 reps, equilibrando no topo',
          'Apoio unipodal de olhos fechados — 10s cada perna (nível hard)',
          'Agachamento em perna só apoiado — segure o batente, desça parcial, 8 reps cada',
        ],
      },
      {
        h: 'Onde isso aparece na vida',
        items: [
          'Calçar sapato em pé, subir escada sem corrimão, andar em terreno irregular',
          'Melhora automaticamente agachamento, afundo e corrida',
        ],
      },
    ],
    tips: [
      'Balance muito no início? Normal — o sistema nervoso aprende em dias, não meses.',
      'Faça descalço em piso firme: os sensores do pé trabalham melhor sem tênis.',
    ],
  },
  {
    id: 'hipertrofia-guia',
    img: imgHipertrofia,
    title: 'Hipertrofia em casa: músculo sem academia',
    level: 'Intermediário',
    minutes: 10,
    tag: 'Força',
    color: '#f97316',
    intro:
      'Ganhar músculo em casa é possível — mas exige o mesmo que na academia: tensão progressiva, proteína e descanso. O equipamento muda, a fisiologia não. Aqui vão as regras que realmente constroem massa.',
    sections: [
      {
        h: 'A regra nº 1: sobrecarga progressiva',
        items: [
          'O músculo só cresce quando o estímulo aumenta — mais reps, mais séries, mais peso ou versão mais difícil',
          'Quando 15 reps ficarem fáceis: progrida (agachamento → búlgaro → com mochila)',
          'Anote reps e séries de cada treino — sem registro, não há progressão, só repetição',
        ],
      },
      {
        h: 'Treino que cresce músculo',
        items: [
          'Frequência: cada grupo muscular 2x por semana, com 48h entre estímulos',
          'Volume: 10-20 séries difíceis por músculo por semana (comece no mínimo)',
          'Esforço: termine as séries a 1-3 reps da falha — série confortável não constrói',
          'Execução lenta e controlada — impulso rouba a tensão do músculo',
        ],
      },
      {
        h: 'Os outros 80%: comer e dormir',
        items: [
          'Proteína: ~1,6-2g por kg de peso por dia, espalhada nas refeições',
          'Superávit leve (+200-300 kcal/dia) acelera ganhos; déficit trava',
          'Sono 7-9h: o músculo cresce dormindo, não treinando',
        ],
      },
      {
        h: 'Expectativa realista',
        items: [
          'Iniciante: 0,5-1kg de músculo por mês nos primeiros meses',
          'Depois do ano 1: progresso fica mais lento — e é normal',
          'Visual muda antes da balança: compare fotos mensais, não só peso',
        ],
      },
    ],
    tips: [
      'Músculo demora meses, não dias — quem promete "tanquinho em 2 semanas" está vendendo mentira.',
      'Treino pesado + proteína + sono: os três juntos ou o resultado não vem.',
    ],
  },
  {
    id: 'yoga-iniciante',
    img: imgYoga,
    title: 'Yoga para iniciantes: 8 poses essenciais',
    level: 'Iniciante',
    minutes: 15,
    tag: 'Mobilidade',
    color: '#8b5cf6',
    intro:
      'Yoga não é só alongamento: é força, equilíbrio e respiração juntos. Estas 8 poses formam a base de qualquer prática — domine elas e qualquer aula do YouTube fica fácil de acompanhar.',
    sections: [
      {
        h: 'As 8 poses (30-45s cada)',
        items: [
          'Montanha — em pé, pés firmes, coluna alongada: a base de tudo',
          'Cachorro olhando para baixo — V invertido, mãos e pés no chão',
          'Guerreiro 1 — afundo com braços ao alto: força de perna + abertura de quadril',
          'Guerreiro 2 — braços abertos paralelos: estabilidade e foco',
          'Árvore — uma perna só: o equilíbrio do app ajuda aqui',
          'Gato-vaca — a mobilização de coluna mais gentil que existe',
          'Criança — descanso ativo: volte a ela sempre que precisar',
          'Savasana — deitar e soltar 2-3 min: é onde o corpo absorve a prática',
        ],
      },
      {
        h: 'Respiração: o ingrediente esquecido',
        items: [
          'Respire pelo nariz, lento e profundo — nariz, não boca',
          'Pose difícil + respiração presa = faça metade da amplitude e respire',
          'A respiração é o termômetro: se prendeu, você foi longe demais',
        ],
      },
      {
        h: 'Começando sem travar',
        items: [
          'Yoga não é competição — a pose perfeita é a sua versão de hoje',
          'Joelhos dobrados são permitidos: cachorro para baixo com joelhos flexionados ainda é yoga',
          '15 min 3x por semana superam 1h uma vez ao mês',
        ],
      },
    ],
    tips: [
      'Tapete ajuda, mas não é obrigatório — comece no carpete ou numa toalha.',
      'Dor aguda nunca é "abertura": desconforto de músculo ok, dor de articulação não.',
    ],
  },
  {
    id: 'pular-corda',
    img: imgCorda,
    title: 'Pular corda: o cardio mais barato que existe',
    level: 'Todos',
    minutes: 12,
    tag: 'Cardio',
    color: '#ec4899',
    intro:
      'Uma corda de R$20 queima mais calorias por minuto que a maioria dos aparelhos de academia — e cabe na gaveta. O problema: quase ninguém pula direito. A técnica certa é o que torna sustentável.',
    sections: [
      {
        h: 'Técnica primeiro (2 min de prática)',
        items: [
          'Cotovelos colados ao corpo — a corda gira no punho, não no braço todo',
          'Pule baixo: 2-3cm do chão basta — pulo alto = canela doendo',
          'Pouse na ponta dos pés, joelhos levemente flexionados',
          'Sem corda ainda? Treine o salto e o giro de punho no ar',
        ],
      },
      {
        h: 'Progressão 4 semanas',
        items: [
          'Semana 1: 30s pulando + 30s descanso, 10x',
          'Semana 2: 45s + 30s, 10x',
          'Semana 3: 60s + 30s, 10x',
          'Semana 4: blocos de 2 min, 5x — aí você já é oficialmente "pessoa que pula corda"',
        ],
      },
      {
        h: 'Variações pra não enjoar',
        items: [
          'Pés alternados (corrida parada)',
          'Pés juntos com giro de quadril',
          'Salto duplo por giro (avançado — só depois do básico sólido)',
        ],
      },
    ],
    tips: [
      'Piso importa: madeira ou tapete de EVA absorvem; concreto puro castiga as canelas.',
      'Canela doendo demais? Reduza volume, pule mais baixo e confira o tênis.',
    ],
  },
  {
    id: 'prancha-variacoes',
    img: imgPrancha,
    title: 'Prancha: do zero ao avançado em 6 variações',
    level: 'Todos',
    minutes: 10,
    tag: 'Core',
    color: '#0ea5e9',
    intro:
      'A prancha é o melhor exercício de core que existe — isométrica, segura e brutalmente eficaz. Mas segurar 2 min de prancha parada não te deixa mais forte depois de certo ponto: as variações sim.',
    sections: [
      {
        h: 'Escada de progressão (domine cada nível antes de subir)',
        items: [
          'Nível 1 — Prancha com joelhos: 3x30s, foco em linha reta da cabeça aos joelhos',
          'Nível 2 — Prancha clássica: 3x30-45s, cotovelos sob ombros, abdômen puxado',
          'Nível 3 — Prancha com toque de ombro: 3x10 toques por lado, quadril sem balançar',
          'Nível 4 — Prancha lateral: 3x20-30s cada lado',
          'Nível 5 — Prancha com elevação de perna: 3x8 reps por perna',
          'Nível 6 — Prancha dinâmica (sobe-desce): cotovelo ↔ mão, 3x8 reps',
        ],
      },
      {
        h: 'Erros que anulam o exercício',
        items: [
          'Quadril caído (barriga pendurada) — a lombar sofre no lugar do core trabalhar',
          'Quadril alto demais — vira descanso, não exercício',
          'Prender a respiração — respire normal e aperte o abdômen como se fosse levar um soco',
          'Olhar para frente — pescoço neutro, olhar para o chão',
        ],
      },
      {
        h: 'Como encaixar na semana',
        items: [
          '3-4x por semana, no fim de qualquer treino',
          'Somando níveis diferentes na mesma sessão, nunca duas iguais seguidas',
        ],
      },
    ],
    tips: [
      'Qualidade antes de tempo: 30s perfeitos valem mais que 90s com lombar afundada.',
      'Tremedeira nos últimos segundos é o músculo trabalhando — dor na lombar é sinal de parar.',
    ],
  },
  {
    id: 'volta-treino',
    img: imgVolta,
    title: 'Parei de treinar há meses: como voltar sem desistir',
    level: 'Todos',
    minutes: 8,
    tag: 'Planejamento',
    color: '#22c55e',
    intro:
      'Voltar depois de uma pausa longa é psicologicamente o momento mais difícil do treino — a memória do seu nível anterior sabota a paciência do seu corpo atual. A regra: volte mais leve do que o orgulho permite.',
    sections: [
      {
        h: 'Semana 1-2: menos é mais',
        items: [
          'Treine 3x por semana, 20-30 min — metade do que você "achava" que devia',
          'Intensidade 5-6/10 — termine querendo mais, não destruído',
          'Agulhada forte nos primeiros dias é normal; lesão por pressa não',
        ],
      },
      {
        h: 'Semana 3-4: reconstruindo a base',
        items: [
          'Aumente para 4-5x por semana OU suba a intensidade — nunca os dois juntos',
          'Volte aos treinos completos do app: força + cardio alternados',
          'A força volta mais rápido que o cardio — não se assuste com o fôlego',
        ],
      },
      {
        h: 'A boa notícia: memória muscular é real',
        items: [
          'Quem já treinou recupera forma 2-3x mais rápido que quem nunca treinou',
          'Os núcleos de músculo conquistados não somem — ficam dormentes esperando o estímulo',
          'Em 8-12 semanas você estará perto do seu melhor momento — com paciência',
        ],
      },
      {
        h: 'O que derruba quem volta',
        items: [
          'Comparar-se com o "eu de antes" — seu ponto de partida é hoje, não o passado',
          'Treinar forte 7 dias pra "recuperar o tempo perdido" — caminho direto pra lesão',
          'Esperar motivação — ela volta depois do hábito, não antes',
        ],
      },
    ],
    tips: [
      'Escreva sua razão num papel ou no app: "por que eu quero voltar" vence o desânimo do dia 3.',
      'Comemore a constância, não a performance: 4 semanas treinando já é vitória.',
    ],
  },
  {
    id: 'boxe-sombra',
    img: imgBoxe,
    title: 'Boxe sombra: o cardio que diverte',
    level: 'Todos',
    minutes: 15,
    tag: 'Cardio',
    color: '#ef4444',
    intro:
      'Boxe sombra (sombra boxing) é socar o ar com técnica — e é um cardio completo: braços, core, pernas e coordenação juntos, sem equipamento e sem parecer "exercício chato".',
    sections: [
      {
        h: 'Posição de base',
        items: [
          'Pés na largura dos ombros, pé dominante atrás, joelhos flexionados',
          'Mãos fechadas na altura do queixo, cotovelos colados',
          'Queixo baixo, olhar à frente — você está "enxergando" o oponente',
        ],
      },
      {
        h: 'Os 4 golpes básicos',
        items: [
          'Jab — soco reto com a mão da frente, volta rápido',
          'Direto — soco reto com a mão de trás, gire o quadril junto',
          'Cruzado — direto forte com rotação total do corpo',
          'Gancho (hook) — soco lateral com o braço em L, gire o pé',
        ],
      },
      {
        h: 'Treino (15 min)',
        items: [
          'Rodadas de 2 min com 30s de descanso, 6 rodadas',
          'R1-R2: só jab — aprenda a estender e voltar protegendo o queixo',
          'R3-R4: jab + direto (1-2) — o combo mais usado do boxe',
          'R5: jab, direto, gancho (1-2-3) — adicione esquivas de tronco entre combos',
          'R6: livre — misture tudo com passos para frente e para trás',
        ],
      },
      {
        h: 'Detalhes que fazem diferença',
        items: [
          'Soco sai do quadril e do pé, não do braço — potência vem do corpo inteiro',
          'Mão sempre volta ao queixo — socar e deixar a mão baixa vira hábito ruim',
          'Pés leves o tempo todo — boxe é 70% pernas',
        ],
      },
    ],
    tips: [
      'Espelho ajuda muito: assista seu ombro subir no soco — é o erro nº 1.',
      'Ofegante na rodada 2? Perfeitamente normal — é cardio disfarçado de luta.',
    ],
  },
]

export const LESSONS = [
  {
    id: 'aquecimento',
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
]

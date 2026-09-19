import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { fatFactor, heightFactor } from '../utils'

const PANTS = '#3b3674'
const SHOE = '#4c1d95'
const SOLE = '#f8fafc'

// raio do torso ao longo da altura (t: 0=quadril -> 1=pescoço)
function profileRadius(t, sex, fF) {
  const ptsM = [
    [0.0, 0.17], [0.07, 0.2], [0.2, 0.19], [0.32, 0.165],
    [0.48, 0.185], [0.64, 0.2], [0.78, 0.18], [0.88, 0.135],
    [0.95, 0.08], [1.0, 0.05],
  ]
  const ptsF = [
    [0.0, 0.19], [0.07, 0.215], [0.2, 0.2], [0.32, 0.155],
    [0.48, 0.17], [0.64, 0.18], [0.78, 0.16], [0.88, 0.12],
    [0.95, 0.075], [1.0, 0.05],
  ]
  const pts = sex === 'F' ? ptsF : ptsM
  let r = pts[0][1]
  for (let i = 0; i < pts.length - 1; i++) {
    if (t >= pts[i][0] && t <= pts[i + 1][0]) {
      const k = (t - pts[i][0]) / (pts[i + 1][0] - pts[i][0])
      r = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * k
      break
    }
  }
  // barriga cresce com o IMC
  r += (fF - 0.95) * 0.16 * Math.exp(-Math.pow((t - 0.3) / 0.15, 2))
  // quadril acompanha
  r += Math.max(0, fF - 1) * 0.05 * Math.exp(-Math.pow((t - 0.08) / 0.1, 2))
  // busto sutil p/ feminino
  if (sex === 'F') r += 0.028 * Math.exp(-Math.pow((t - 0.64) / 0.08, 2))
  return Math.max(0.02, r)
}

const HEAD_R = 0.26

// ---------- cabelo ----------
function Hair({ style, color }) {
  const mat = <meshStandardMaterial color={color} roughness={0.7} />
  // capa só no topo da cabeça (theta limitado) — não cobre o rosto
  const cap = (r = HEAD_R + 0.012, sy = 0.72, y = 0.07, theta = Math.PI * 0.45) => (
    <mesh position={[0, y, 0]} scale={[1, sy, 1]}>
      <sphereGeometry args={[r, 26, 20, 0, Math.PI * 2, 0, theta]} />
      {mat}
    </mesh>
  )
  // franja: faixa curva só na testa (linha do cabelo)
  const bangs = (
    <mesh position={[0, 0.02, 0]} scale={[1, 0.8, 1]}>
      <sphereGeometry args={[HEAD_R + 0.018, 24, 16, Math.PI * 0.15, Math.PI * 0.7, Math.PI * 0.18, Math.PI * 0.22]} />
      {mat}
    </mesh>
  )

  switch (style) {
    // --- masculinos ---
    case 'careca':
      return null
    case 'raspado':
      return cap(HEAD_R + 0.008, 0.55, 0.11)
    case 'curto':
      return (
        <>
          {cap()}
          <mesh position={[0, 0.18, 0.17]} rotation={[-0.5, 0, 0]} scale={[1, 0.45, 0.55]}>
            <sphereGeometry args={[0.14, 16, 12]} />
            {mat}
          </mesh>
        </>
      )
    case 'topete':
      return (
        <>
          {cap()}
          <mesh position={[0, 0.28, 0.13]} rotation={[-0.5, 0, 0]} scale={[0.62, 0.42, 0.78]}>
            <sphereGeometry args={[0.17, 16, 12]} />
            {mat}
          </mesh>
        </>
      )
    case 'moicano':
      return (
        <>
          {cap(HEAD_R + 0.006, 0.6, 0.09)}
          <mesh position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.35, 1, 1]}>
            <capsuleGeometry args={[0.06, 0.34, 6, 12]} />
            {mat}
          </mesh>
        </>
      )
    case 'cacheado': {
      const puffs = [
        [0, 0.24, 0.06], [0.12, 0.21, 0.08], [-0.12, 0.21, 0.08],
        [0.1, 0.2, -0.08], [-0.1, 0.2, -0.08], [0, 0.26, -0.05],
        [0.18, 0.13, 0], [-0.18, 0.13, 0], [0.17, 0.13, 0.12], [-0.17, 0.13, 0.12],
      ]
      return (
        <>
          {cap(HEAD_R + 0.01, 0.68, 0.08)}
          {puffs.map((p, i) => (
            <mesh key={i} position={p}>
              <sphereGeometry args={[0.095, 14, 12]} />
              {mat}
            </mesh>
          ))}
        </>
      )
    }
    case 'bone':
      return (
        <>
          <mesh position={[0, 0.11, 0]} scale={[1.04, 0.58, 1.04]}>
            <sphereGeometry args={[HEAD_R + 0.012, 26, 20, 0, Math.PI * 2, 0, Math.PI * 0.42]} />
            {mat}
          </mesh>
          {/* aba inclinada para baixo */}
          <mesh position={[0, 0.12, 0.32]} rotation={[0.14, 0, 0]}>
            <boxGeometry args={[0.3, 0.03, 0.2]} />
            {mat}
          </mesh>
          {/* botão */}
          <mesh position={[0, 0.285, 0]}>
            <sphereGeometry args={[0.032, 10, 8]} />
            {mat}
          </mesh>
        </>
      )
    // --- femininos ---
    case 'bob':
      return (
        <>
          {/* esfera parcial: cobre topo, laterais e nuca, deixa o rosto aberto */}
          <mesh position={[0, -0.01, 0]} scale={[1.06, 1, 1.06]}>
            <sphereGeometry args={[HEAD_R + 0.02, 26, 22, Math.PI * 0.78, Math.PI * 1.44, 0, Math.PI * 0.85]} />
            {mat}
          </mesh>
          {bangs}
        </>
      )
    case 'longo':
      return (
        <>
          {cap(HEAD_R + 0.02, 0.78, 0.06)}
          {bangs}
          {/* parte de trás */}
          <mesh position={[0, -0.22, -0.17]}>
            <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
            {mat}
          </mesh>
          {/* laterais */}
          {[-1, 1].map((s) => (
            <mesh key={s} position={[s * 0.22, -0.12, 0]}>
              <capsuleGeometry args={[0.055, 0.34, 6, 12]} />
              {mat}
            </mesh>
          ))}
        </>
      )
    case 'rabo':
      return (
        <>
          {cap()}
          {bangs}
          {/* rabo de cavalo pendendo atrás */}
          <mesh position={[0, 0.03, -0.27]} rotation={[0.22, 0, 0]}>
            <capsuleGeometry args={[0.06, 0.4, 6, 12]} />
            {mat}
          </mesh>
          <mesh position={[0, 0.26, -0.17]}>
            <sphereGeometry args={[0.045, 10, 8]} />
            <meshStandardMaterial color="#ec4899" roughness={0.5} />
          </mesh>
        </>
      )
    case 'coque':
      return (
        <>
          {cap()}
          {bangs}
          <mesh position={[0, 0.28, -0.05]}>
            <sphereGeometry args={[0.105, 16, 14]} />
            {mat}
          </mesh>
        </>
      )
    case 'chiquinhas':
      return (
        <>
          {cap()}
          {bangs}
          {[-1, 1].map((s) => (
            <group key={s}>
              <mesh position={[s * 0.27, -0.03, -0.05]} rotation={[0, 0, s * 0.85]}>
                <capsuleGeometry args={[0.065, 0.28, 6, 12]} />
                {mat}
              </mesh>
              <mesh position={[s * 0.24, 0.11, -0.05]}>
                <sphereGeometry args={[0.042, 10, 8]} />
                <meshStandardMaterial color="#ec4899" roughness={0.5} />
              </mesh>
            </group>
          ))}
        </>
      )
    case 'cacheada': {
      const puffs = [
        [0, 0.26, 0.04], [0.13, 0.22, 0.08], [-0.13, 0.22, 0.08],
        [0.12, 0.22, -0.1], [-0.12, 0.22, -0.1], [0, 0.28, -0.06],
        [0.2, 0.12, 0.02], [-0.2, 0.12, 0.02], [0.19, 0.12, 0.14], [-0.19, 0.12, 0.14],
        [0.22, 0.0, -0.06], [-0.22, 0.0, -0.06], [0.1, 0.26, 0.14], [-0.1, 0.26, 0.14],
      ]
      return (
        <>
          {cap(HEAD_R + 0.012, 0.72, 0.07)}
          {puffs.map((p, i) => (
            <mesh key={i} position={p}>
              <sphereGeometry args={[0.105, 14, 12]} />
              {mat}
            </mesh>
          ))}
        </>
      )
    }
    default:
      return cap()
  }
}

// ---------- rosto ----------
function Face({ sex, hairColor, skin }) {
  const eyeL = useRef()
  const eyeR = useRef()
  const darkSkin = useMemo(() => new THREE.Color(skin).multiplyScalar(0.82), [skin])

  useFrame(({ clock }) => {
    const blink = clock.getElapsedTime() % 3.4 < 0.12 ? 0.12 : 1
    if (eyeL.current) eyeL.current.scale.y = blink
    if (eyeR.current) eyeR.current.scale.y = blink
  })

  const eye = (side, ref) => (
    <group ref={ref} position={[side * 0.095, 0.0, 0]}>
      {/* branco */}
      <mesh position={[0, 0, 0.235]} scale={[1, 1.2, 0.55]}>
        <sphereGeometry args={[0.05, 14, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.25} />
      </mesh>
      {/* pupila */}
      <mesh position={[0, 0, 0.262]} scale={[1, 1, 0.5]}>
        <sphereGeometry args={[0.028, 12, 10]} />
        <meshStandardMaterial color="#1f2937" roughness={0.2} />
      </mesh>
      {/* brilho */}
      <mesh position={[0.011 * side, 0.013, 0.272]}>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )

  return (
    <>
      {eye(-1, eyeL)}
      {eye(1, eyeR)}
      {/* sobrancelhas */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.095, 0.098, 0.22]} rotation={[0, 0, s * -0.09]}>
          <boxGeometry args={[0.075, 0.015, 0.022]} />
          <meshStandardMaterial color={hairColor} roughness={0.7} />
        </mesh>
      ))}
      {/* cílios (feminino) */}
      {sex === 'F' &&
        [-1, 1].map((s) => (
          <mesh key={s} position={[s * 0.132, 0.05, 0.225]} rotation={[0, 0, s * -0.5]}>
            <boxGeometry args={[0.045, 0.011, 0.02]} />
            <meshStandardMaterial color="#1f2937" roughness={0.4} />
          </mesh>
        ))}
      {/* nariz */}
      <mesh position={[0, -0.028, 0.257]}>
        <sphereGeometry args={[0.023, 10, 10]} />
        <meshStandardMaterial color={darkSkin} roughness={0.55} />
      </mesh>
      {/* sorriso */}
      <mesh position={[0, -0.085, 0.25]} rotation={[0, 0, Math.PI * 1.2]}>
        <torusGeometry args={[0.058, 0.012, 8, 22, Math.PI * 0.6]} />
        <meshStandardMaterial color="#7c2d12" roughness={0.4} />
      </mesh>
      {/* blush */}
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.148, -0.05, 0.2]} scale={[1, 0.65, 0.45]}>
          <sphereGeometry args={[0.035, 10, 8]} />
          <meshStandardMaterial color="#f4a7b9" transparent opacity={0.55} roughness={0.6} />
        </mesh>
      ))}
    </>
  )
}

// ---------- corpo ----------
export function Character({ heightCm, weightKg, avatar, sex }) {
  const root = useRef()
  const torsoRef = useRef()
  const armL = useRef()
  const armR = useRef()

  const hF = heightFactor(heightCm)
  const fF = fatFactor(weightKg, heightCm)
  const limbXZ = Math.pow(fF, 0.5)

  const skin = avatar?.skin || '#c98d64'
  const shirt = avatar?.shirt || '#7c3aed'
  const hairColor = avatar?.hairColor || '#3b2a20'
  const hairStyle = avatar?.hairStyle || (sex === 'F' ? 'longo' : 'curto')

  const torsoGeo = useMemo(() => {
    const pts = []
    const N = 30
    for (let i = 0; i <= N; i++) {
      const t = i / N
      pts.push(new THREE.Vector2(profileRadius(t, sex, fF), t * 0.58))
    }
    return new THREE.LatheGeometry(pts, 30)
  }, [sex, fF])

  // ombro no nível do peito (manga encosta no torso)
  const shoulderX = profileRadius(0.78, sex, fF) + 0.02
  // pernas abrem um pouco com o peso
  const legX = 0.1 + Math.max(0, fF - 1) * 0.05

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (root.current) {
      root.current.rotation.y = Math.sin(t * 0.4) * 0.22
      root.current.position.y = Math.sin(t * 1.8) * 0.012
    }
    if (torsoRef.current) torsoRef.current.scale.set(1, 1 + Math.sin(t * 1.8) * 0.014, 1)
    const swing = Math.sin(t * 1.8) * 0.07
    if (armL.current) armL.current.rotation.x = swing
    if (armR.current) armR.current.rotation.x = -swing
  })

  return (
    <group ref={root} scale={[1, hF, 1]}>
      {/* pernas */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * legX, 0, 0]}>
          <mesh position={[0, 0.38, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.078, 0.5, 8, 16]} />
            <meshStandardMaterial color={skin} roughness={0.55} />
          </mesh>
          {/* tênis */}
          <mesh position={[0, 0.062, 0.05]} scale={[limbXZ, 0.62, 1.45]}>
            <sphereGeometry args={[0.085, 18, 14]} />
            <meshStandardMaterial color={SHOE} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.024, 0.05]} scale={[limbXZ, 0.32, 1.5]}>
            <sphereGeometry args={[0.087, 18, 12]} />
            <meshStandardMaterial color={SOLE} roughness={0.4} />
          </mesh>
        </group>
      ))}

      {/* shorts */}
      <mesh position={[0, 0.72, 0]} scale={[limbXZ, 0.66, limbXZ]}>
        <sphereGeometry args={[0.215, 26, 20]} />
        <meshStandardMaterial color={PANTS} roughness={0.7} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * legX, 0.62, 0]} scale={[limbXZ, 1, limbXZ]}>
          <cylinderGeometry args={[0.105, 0.11, 0.12, 18]} />
          <meshStandardMaterial color={PANTS} roughness={0.7} />
        </mesh>
      ))}

      {/* torso (camiseta) */}
      <mesh ref={torsoRef} geometry={torsoGeo} position={[0, 0.7, 0]}>
        <meshStandardMaterial color={shirt} roughness={0.65} />
      </mesh>
      {/* gola */}
      <mesh position={[0, 1.27, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.062, 0.018, 10, 20]} />
        <meshStandardMaterial color={new THREE.Color(shirt).multiplyScalar(0.75)} roughness={0.65} />
      </mesh>

      {/* braços */}
      {[-1, 1].map((s) => (
        <group key={s} ref={s < 0 ? armL : armR} position={[s * shoulderX, 1.16, 0]} rotation={[0, 0, s * 0.3]}>
          {/* manga de camiseta (cápsula seguindo o braço) */}
          <mesh position={[0, -0.09, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.082, 0.12, 8, 14]} />
            <meshStandardMaterial color={shirt} roughness={0.65} />
          </mesh>
          <mesh position={[0, -0.26, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.058, 0.3, 8, 14]} />
            <meshStandardMaterial color={skin} roughness={0.55} />
          </mesh>
          {/* mão */}
          <mesh position={[0, -0.46, 0]}>
            <sphereGeometry args={[0.068, 14, 12]} />
            <meshStandardMaterial color={skin} roughness={0.55} />
          </mesh>
        </group>
      ))}

      {/* cabeça */}
      <group position={[0, 1.52, 0]}>
        <mesh>
          <sphereGeometry args={[HEAD_R, 30, 26]} />
          <meshStandardMaterial color={skin} roughness={0.5} />
        </mesh>
        {/* orelhas */}
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * 0.255, -0.01, 0]}>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshStandardMaterial color={skin} roughness={0.5} />
          </mesh>
        ))}
        <Face sex={sex} hairColor={hairColor} skin={skin} />
        <Hair style={hairStyle} color={hairColor} />
      </group>
    </group>
  )
}

// ajusta a câmera conforme a altura do avatar (roda dentro do Canvas)
function CameraRig({ hF }) {
  const camera = useThree((s) => s.camera)
  const controls = useThree((s) => s.controls)

  useEffect(() => {
    const z = Math.max(3.1, 3.3 * hF)
    const ty = 0.92 + Math.max(0, hF - 1) * 0.6
    camera.position.set(0, 1.3, z)
    camera.lookAt(0, ty, 0)
    camera.updateProjectionMatrix()
    if (controls) {
      controls.target.set(0, ty, 0)
      controls.update()
    }
  }, [hF, camera, controls])

  return null
}

function Stage() {
  return (
    <>
      <mesh position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.85, 48]} />
        <meshStandardMaterial color="#c4b5fd" transparent opacity={0.35} />
      </mesh>
      <mesh position={[0, 0.002, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.85, 0.95, 48]} />
        <meshStandardMaterial color="#f0abfc" transparent opacity={0.7} />
      </mesh>
    </>
  )
}

export default function Avatar3D({ heightCm = 170, weightKg = 70, avatar, sex = 'M', interactive = true, style }) {
  const hF = heightFactor(heightCm)

  return (
    <div style={{ width: '100%', height: '100%', ...style }}>
      <Canvas camera={{ position: [0, 1.3, 3.1], fov: 38 }} dpr={[1, 2]}>
        <ambientLight intensity={0.9} />
        <hemisphereLight args={['#fff7ed', '#c4b5fd', 0.5]} />
        <directionalLight position={[3, 4, 2.5]} intensity={1.2} />
        <pointLight position={[-3, 2, 2]} intensity={10} color="#f472b6" />
        <pointLight position={[3, 1.4, -2]} intensity={9} color="#38bdf8" />
        <Stage />
        <Character heightCm={heightCm} weightKg={weightKg} avatar={avatar} sex={sex} />
        <CameraRig hF={hF} />
        <OrbitControls
          enabled={interactive}
          enableZoom={false}
          enablePan={false}
          makeDefault
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.62}
        />
      </Canvas>
    </div>
  )
}

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { fatFactor, heightFactor, clamp } from '../utils'

const SKIN = '#c98d64'
const PANTS = '#312e81'
const SHOE = '#1e1b4b'

function Hair({ style, color }) {
  if (style === 'careca') return null

  const cap = (r, sy, y, z = 0) => (
    <mesh position={[0, y, z]} scale={[1, sy, 1]}>
      <sphereGeometry args={[r, 24, 20]} />
      <meshStandardMaterial color={color} roughness={0.75} />
    </mesh>
  )

  switch (style) {
    case 'raspado':
      return cap(0.218, 0.82, 0.045)
    case 'curto':
      return cap(0.228, 0.72, 0.075)
    case 'topete':
      return (
        <>
          {cap(0.228, 0.72, 0.075)}
          <mesh position={[0, 0.22, 0.11]} rotation={[-0.45, 0, 0]}>
            <boxGeometry args={[0.15, 0.1, 0.13]} />
            <meshStandardMaterial color={color} roughness={0.75} />
          </mesh>
        </>
      )
    case 'moicano':
      return (
        <mesh position={[0, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <capsuleGeometry args={[0.05, 0.3, 6, 12]} />
          <meshStandardMaterial color={color} roughness={0.7} />
        </mesh>
      )
    case 'cacheado': {
      const puffs = [
        [0, 0.22, 0.05], [0.12, 0.19, 0.05], [-0.12, 0.19, 0.05],
        [0.08, 0.18, -0.1], [-0.08, 0.18, -0.1], [0, 0.24, -0.06],
        [0.16, 0.12, -0.04], [-0.16, 0.12, -0.04], [0.15, 0.12, 0.1], [-0.15, 0.12, 0.1],
      ]
      return (
        <>
          {cap(0.225, 0.7, 0.08)}
          {puffs.map((p, i) => (
            <mesh key={i} position={p}>
              <sphereGeometry args={[0.085, 14, 12]} />
              <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
          ))}
        </>
      )
    }
    case 'longo':
      return (
        <>
          {cap(0.23, 0.75, 0.07)}
          <mesh position={[0, -0.16, -0.17]}>
            <boxGeometry args={[0.36, 0.55, 0.09]} />
            <meshStandardMaterial color={color} roughness={0.8} />
          </mesh>
          <mesh position={[0.19, -0.08, -0.03]}>
            <boxGeometry args={[0.07, 0.38, 0.09]} />
            <meshStandardMaterial color={color} roughness={0.8} />
          </mesh>
          <mesh position={[-0.19, -0.08, -0.03]}>
            <boxGeometry args={[0.07, 0.38, 0.09]} />
            <meshStandardMaterial color={color} roughness={0.8} />
          </mesh>
        </>
      )
    case 'coque':
      return (
        <>
          {cap(0.228, 0.72, 0.075)}
          <mesh position={[0, 0.26, -0.06]}>
            <sphereGeometry args={[0.095, 16, 14]} />
            <meshStandardMaterial color={color} roughness={0.75} />
          </mesh>
        </>
      )
    default:
      return cap(0.228, 0.72, 0.075)
  }
}

function Character({ heightCm, weightKg, avatar }) {
  const root = useRef()
  const torsoRef = useRef()
  const bellyRef = useRef()
  const eyeL = useRef()
  const eyeR = useRef()

  const hF = heightFactor(heightCm)
  const fF = fatFactor(weightKg, heightCm)
  const fatXZ = Math.pow(fF, 1.05)
  const bellyXZ = Math.pow(fF, 1.9)
  const limbXZ = Math.pow(fF, 0.55)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (root.current) {
      root.current.rotation.y = Math.sin(t * 0.4) * 0.22
      root.current.position.y = Math.sin(t * 1.8) * 0.012
    }
    // respiração
    if (torsoRef.current) torsoRef.current.scale.y = 1 + Math.sin(t * 1.8) * 0.012
    if (bellyRef.current) bellyRef.current.scale.y = bellyXZ * 0.82 * (1 + Math.sin(t * 1.8 + 0.4) * 0.02)
    // piscar a cada ~3.4s
    const blink = t % 3.4 < 0.12 ? 0.12 : 1
    if (eyeL.current) eyeL.current.scale.y = blink
    if (eyeR.current) eyeR.current.scale.y = blink
  })

  const skin = avatar?.skin || SKIN
  const shirt = avatar?.shirt || '#7c3aed'
  const hairColor = avatar?.hairColor || '#3b2a20'
  const hairStyle = avatar?.hairStyle || 'curto'

  const shoulderX = 0.235 * fatXZ + 0.045

  return (
    <group ref={root} scale={[1, hF, 1]}>
      {/* pernas */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * 0.11, 0, 0]}>
          <mesh position={[0, 0.42, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.085, 0.55, 8, 16]} />
            <meshStandardMaterial color={skin} roughness={0.6} />
          </mesh>
          {/* calção */}
          <mesh position={[0, 0.68, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.105, 0.18, 8, 16]} />
            <meshStandardMaterial color={PANTS} roughness={0.7} />
          </mesh>
          {/* tênis */}
          <mesh position={[0, 0.055, 0.045]} scale={[limbXZ, 1, 1]}>
            <sphereGeometry args={[0.085, 16, 12]} />
            <meshStandardMaterial color={SHOE} roughness={0.5} />
          </mesh>
        </group>
      ))}

      {/* quadril */}
      <mesh position={[0, 0.78, 0]} scale={[fatXZ * 0.95, 1, fatXZ * 0.95]}>
        <sphereGeometry args={[0.21, 24, 18]} />
        <meshStandardMaterial color={PANTS} roughness={0.7} />
      </mesh>

      {/* barriga (cresce com o peso) */}
      <mesh ref={bellyRef} position={[0, 0.97, 0.02]} scale={[bellyXZ, bellyXZ * 0.82, bellyXZ]}>
        <sphereGeometry args={[0.235, 26, 20]} />
        <meshStandardMaterial color={shirt} roughness={0.65} />
      </mesh>

      {/* torso / camiseta */}
      <mesh ref={torsoRef} position={[0, 1.12, 0]} scale={[fatXZ, 1, fatXZ]}>
        <capsuleGeometry args={[0.24, 0.34, 10, 22]} />
        <meshStandardMaterial color={shirt} roughness={0.65} />
      </mesh>

      {/* braços */}
      {[-1, 1].map((s) => (
        <group key={s} position={[s * shoulderX, 1.28, 0]} rotation={[0, 0, s * -0.38]}>
          <mesh position={[0, -0.22, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.068, 0.4, 8, 14]} />
            <meshStandardMaterial color={skin} roughness={0.6} />
          </mesh>
          {/* manga */}
          <mesh position={[0, -0.06, 0]} scale={[limbXZ, 1, limbXZ]}>
            <capsuleGeometry args={[0.08, 0.1, 8, 14]} />
            <meshStandardMaterial color={shirt} roughness={0.65} />
          </mesh>
          {/* mão */}
          <mesh position={[0, -0.47, 0]}>
            <sphereGeometry args={[0.075, 14, 12]} />
            <meshStandardMaterial color={skin} roughness={0.6} />
          </mesh>
        </group>
      ))}

      {/* cabeça */}
      <group position={[0, 1.58, 0]}>
        <mesh>
          <sphereGeometry args={[0.21, 28, 24]} />
          <meshStandardMaterial color={skin} roughness={0.55} />
        </mesh>
        {/* olhos */}
        <mesh ref={eyeL} position={[-0.075, 0.02, 0.185]}>
          <sphereGeometry args={[0.026, 10, 10]} />
          <meshStandardMaterial color="#1f2937" roughness={0.3} />
        </mesh>
        <mesh ref={eyeR} position={[0.075, 0.02, 0.185]}>
          <sphereGeometry args={[0.026, 10, 10]} />
          <meshStandardMaterial color="#1f2937" roughness={0.3} />
        </mesh>
        {/* sorriso */}
        <mesh position={[0, -0.055, 0.185]} rotation={[0, 0, Math.PI + 0.5]}>
          <torusGeometry args={[0.065, 0.011, 8, 20, Math.PI * 0.72]} />
          <meshStandardMaterial color="#7c2d12" roughness={0.4} />
        </mesh>
        {/* orelhas */}
        {[-1, 1].map((s) => (
          <mesh key={s} position={[s * 0.21, 0, 0]}>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshStandardMaterial color={skin} roughness={0.55} />
          </mesh>
        ))}
        <Hair style={hairStyle} color={hairColor} />
      </group>
    </group>
  )
}

function Stage() {
  return (
    <>
      {/* chão */}
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

export default function Avatar3D({ heightCm = 170, weightKg = 70, avatar, interactive = true, style }) {
  return (
    <div style={{ width: '100%', height: '100%', ...style }}>
      <Canvas camera={{ position: [0, 1.35, 3.1], fov: 38 }} dpr={[1, 2]}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 4, 2.5]} intensity={1.15} />
        <pointLight position={[-3, 2, 2]} intensity={12} color="#f472b6" />
        <pointLight position={[3, 1.4, -2]} intensity={10} color="#38bdf8" />
        <Stage />
        <Character heightCm={heightCm} weightKg={weightKg} avatar={avatar} />
        <OrbitControls
          enabled={interactive}
          enableZoom={false}
          enablePan={false}
          target={[0, 0.95, 0]}
          minPolarAngle={Math.PI * 0.28}
          maxPolarAngle={Math.PI * 0.62}
        />
      </Canvas>
    </div>
  )
}

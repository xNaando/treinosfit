import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { Character } from './Avatar3D'
import { HAIR_STYLES_M, HAIR_STYLES_F, SKIN_COLORS, HAIR_COLORS, SHIRT_COLORS } from '../utils'

// Página oculta de desenvolvimento: ?dev=avatars
// Renderiza todos os avatares numa grade (um único canvas WebGL)

function Label({ children }) {
  return (
    <Html position={[0, -0.28, 0]} center style={{ pointerEvents: 'none' }}>
      <div
        style={{
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 900,
          fontSize: 11,
          background: 'rgba(30,27,58,0.75)',
          color: '#fff',
          padding: '3px 9px',
          borderRadius: 99,
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </div>
    </Html>
  )
}

function Row({ items, y, gap = 1.15, render }) {
  return (
    <group position={[0, y, 0]}>
      {items.map((it, i) => (
        <group key={i} position={[(i - (items.length - 1) / 2) * gap, 0, 0]}>
          {render(it, i)}
        </group>
      ))}
    </group>
  )
}

export default function AvatarGallery() {
  const base = { skin: '#c98d64', hairColor: '#3b2a20', shirt: '#7c3aed' }

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(160deg,#f3f0ff,#fdf2f8)' }}>
      <Canvas camera={{ position: [0, 1.6, 15.5], fov: 38 }} dpr={[1, 2]}>
        <ambientLight intensity={0.9} />
        <hemisphereLight args={['#fff7ed', '#c4b5fd', 0.5]} />
        <directionalLight position={[3, 6, 4]} intensity={1.1} />

        {/* penteados M e F */}
        <Row items={HAIR_STYLES_M} y={4.4} render={(h) => (
          <>
            <Character heightCm={170} weightKg={72} sex="M" avatar={{ ...base, hairStyle: h.id }} />
            <Label>{`M · ${h.label}`}</Label>
          </>
        )} />
        <Row items={HAIR_STYLES_F} y={2.2} render={(h) => (
          <>
            <Character heightCm={170} weightKg={68} sex="F" avatar={{ ...base, hairStyle: h.id, hairColor: '#6b4226', shirt: '#ec4899' }} />
            <Label>{`F · ${h.label}`}</Label>
          </>
        )} />

        {/* corpos: pesos variados */}
        <Row items={[48, 68, 90, 118]} y={0} render={(w) => (
          <>
            <Character heightCm={170} weightKg={w} sex="M" avatar={{ ...base, hairStyle: 'curto' }} />
            <Label>{`M · ${w}kg`}</Label>
          </>
        )} />
        <Row items={[45, 60, 85, 110]} y={-2.2} render={(w) => (
          <>
            <Character heightCm={170} weightKg={w} sex="F" avatar={{ ...base, hairStyle: 'longo', shirt: '#ec4899' }} />
            <Label>{`F · ${w}kg`}</Label>
          </>
        )} />

        {/* alturas (3 primeiros) + tons de pele (4 últimos) */}
        <Row items={[150, 170, 195, 1, 2, 3, 4]} y={-4.4} render={(v, i) => {
          if (i < 3) {
            return (
              <>
                <Character heightCm={v} weightKg={Math.round(v / 2.45)} sex="M" avatar={{ ...base, hairStyle: 'topete' }} />
                <Label>{`M · ${v}cm`}</Label>
              </>
            )
          }
          const skin = SKIN_COLORS[v]
          return (
            <>
              <Character heightCm={170} weightKg={72} sex="F" avatar={{ ...base, skin, hairStyle: 'bob', hairColor: HAIR_COLORS[v], shirt: SHIRT_COLORS[v] }} />
              <Label>{`pele ${v}`}</Label>
            </>
          )
        }} />

        <OrbitControls enablePan enableZoom target={[0, 1.0, 0]} />
      </Canvas>
    </div>
  )
}

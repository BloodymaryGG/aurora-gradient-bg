import { type CSSProperties } from 'react'

interface Blob {
  color: string
  width: string
  height: string
  top: string
  left: string
  blur: number
  opacity: number
  blend: string
  borderRadius: string
  animation: string
}

const blobs: Blob[] = [
  {
    color: '#6b21a8',
    width: '70vw',
    height: '70vw',
    top: '-20%',
    left: '-15%',
    blur: 120,
    opacity: 0.85,
    blend: 'normal',
    borderRadius: '60% 40% 70% 30% / 50% 60% 40% 55%',
    animation: 'drift1 18s ease-in-out infinite alternate',
  },
  {
    color: '#c026d3',
    width: '55vw',
    height: '55vw',
    top: '10%',
    left: '40%',
    blur: 140,
    opacity: 0.7,
    blend: 'screen',
    borderRadius: '40% 60% 30% 70% / 60% 40% 55% 45%',
    animation: 'drift2 22s ease-in-out infinite alternate',
  },
  {
    color: '#f97316',
    width: '48vw',
    height: '48vw',
    top: '45%',
    left: '55%',
    blur: 100,
    opacity: 0.65,
    blend: 'screen',
    borderRadius: '50% 50% 40% 60% / 45% 55% 50% 50%',
    animation: 'drift3 16s ease-in-out infinite alternate',
  },
  {
    color: '#ec4899',
    width: '60vw',
    height: '60vw',
    top: '35%',
    left: '-10%',
    blur: 160,
    opacity: 0.6,
    blend: 'screen',
    borderRadius: '70% 30% 50% 50% / 30% 70% 45% 55%',
    animation: 'drift4 24s ease-in-out infinite alternate',
  },
  {
    color: '#dc2626',
    width: '40vw',
    height: '40vw',
    top: '60%',
    left: '30%',
    blur: 110,
    opacity: 0.55,
    blend: 'screen',
    borderRadius: '55% 45% 65% 35% / 50% 60% 40% 50%',
    animation: 'drift5 20s ease-in-out infinite alternate',
  },
  {
    color: '#7c3aed',
    width: '45vw',
    height: '45vw',
    top: '-10%',
    left: '60%',
    blur: 130,
    opacity: 0.75,
    blend: 'normal',
    borderRadius: '45% 55% 60% 40% / 55% 45% 60% 40%',
    animation: 'drift6 14s ease-in-out infinite alternate',
  },
  {
    color: '#fb923c',
    width: '35vw',
    height: '35vw',
    top: '70%',
    left: '65%',
    blur: 90,
    opacity: 0.5,
    blend: 'color-dodge',
    borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
    animation: 'drift7 26s ease-in-out infinite alternate',
  },
  {
    color: '#a855f7',
    width: '52vw',
    height: '52vw',
    top: '80%',
    left: '-5%',
    blur: 150,
    opacity: 0.45,
    blend: 'screen',
    borderRadius: '60% 40% 45% 55% / 40% 60% 55% 45%',
    animation: 'drift8 19s ease-in-out infinite alternate',
  },
]

const keyframes = `
@keyframes drift1 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(40px, 60px) rotate(12deg) scale(1.08); }
}
@keyframes drift2 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(-50px, 30px) rotate(-8deg) scale(1.05); }
}
@keyframes drift3 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(30px, -45px) rotate(15deg) scale(0.95); }
}
@keyframes drift4 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(60px, -30px) rotate(-10deg) scale(1.1); }
}
@keyframes drift5 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(-35px, -50px) rotate(20deg) scale(1.04); }
}
@keyframes drift6 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(-40px, 70px) rotate(-15deg) scale(0.92); }
}
@keyframes drift7 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(50px, 40px) rotate(25deg) scale(1.12); }
}
@keyframes drift8 {
  0%   { transform: translate(0px, 0px) rotate(0deg) scale(1); }
  100% { transform: translate(-20px, -60px) rotate(-18deg) scale(1.06); }
}
`

export default function App() {
  const canvas: CSSProperties = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#0d0014',
  }

  const blobLayer: CSSProperties = {
    position: 'absolute',
    inset: 0,
  }

  return (
    <>
      <style>{keyframes}</style>
      <div style={canvas}>
        <div style={blobLayer}>
          {blobs.map((b, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: b.top,
                left: b.left,
                width: b.width,
                height: b.height,
                backgroundColor: b.color,
                borderRadius: b.borderRadius,
                filter: `blur(${b.blur}px)`,
                opacity: b.opacity,
                mixBlendMode: b.blend as CSSProperties['mixBlendMode'],
                animation: b.animation,
                willChange: 'transform',
              }}
            />
          ))}
        </div>

        {/* Subtle noise grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />

      </div>
    </>
  )
}

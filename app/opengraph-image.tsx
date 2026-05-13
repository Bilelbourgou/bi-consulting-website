import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'B&I Consulting - Agence Digitale en Tunisie'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B3C5D 0%, #0D2A45 50%, #071828 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(27, 82, 140, 0.3)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(27, 82, 140, 0.2)',
          display: 'flex',
        }} />

        {/* Top accent bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #1B52A0, #3B82C4, #1B52A0)',
          display: 'flex',
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          padding: '0 80px',
          textAlign: 'center',
        }}>
          {/* Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(27, 82, 160, 0.3)',
            border: '1px solid rgba(59, 130, 196, 0.4)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 10,
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#3B82C4',
              display: 'flex',
            }} />
            <span style={{ color: '#7BB8E0', fontSize: 18, letterSpacing: 3, textTransform: 'uppercase' }}>
              Agence Digitale · Djerba, Tunisie
            </span>
          </div>

          {/* Company Name */}
          <div style={{
            fontSize: 90,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1,
            letterSpacing: '-2px',
          }}>
            B&I Consulting
          </div>

          {/* Divider */}
          <div style={{
            width: 100,
            height: 4,
            background: 'linear-gradient(90deg, #1B52A0, #3B82C4)',
            borderRadius: 4,
            display: 'flex',
          }} />

          {/* Tagline */}
          <div style={{
            fontSize: 26,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: 1,
          }}>
            Développement Web · Intelligence Artificielle · Marketing Digital
          </div>

          {/* Domain */}
          <div style={{
            marginTop: 12,
            fontSize: 20,
            color: '#7BB8E0',
            letterSpacing: 2,
          }}>
            biconsulting.tn
          </div>
        </div>

        {/* Bottom accent bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #1B52A0, #3B82C4, #1B52A0)',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}

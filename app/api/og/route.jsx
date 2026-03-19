import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') || ''
  const revenue = searchParams.get('revenue') || '$0'
  const fans = searchParams.get('fans') || '0'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: '#09090b',
          padding: '60px 80px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #22c0d1 0%, #1e68c3 50%, #8b5cf6 100%)',
          }}
        />

        {/* Laylo text */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 700,
            color: '#38bdf8',
            marginBottom: '40px',
            display: 'flex',
          }}
        >
          Laylo
        </div>

        {/* Name or generic title */}
        <div
          style={{
            fontSize: name ? '52px' : '48px',
            fontWeight: 900,
            color: '#f5f5f7',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          {name ? `${name}\u2019s ROI with Laylo` : 'What\u2019s a bigger fan list worth?'}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '20px',
            color: '#9ca3af',
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          {name ? 'Personalized revenue projection' : 'Calculate your fan list ROI'}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: 'auto',
          }}
        >
          {/* Revenue */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: '64px',
                fontWeight: 900,
                letterSpacing: '-3px',
                color: '#34d399',
                lineHeight: 1,
                display: 'flex',
              }}
            >
              {revenue}
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '8px',
                display: 'flex',
              }}
            >
              Additional Revenue
            </div>
          </div>

          {/* New fans */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: '64px',
                fontWeight: 900,
                letterSpacing: '-3px',
                color: '#38bdf8',
                lineHeight: 1,
                display: 'flex',
              }}
            >
              {fans}
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '8px',
                display: 'flex',
              }}
            >
              New Fans Added
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            fontSize: '15px',
            color: '#38bdf8',
            fontWeight: 600,
            marginTop: '32px',
            display: 'flex',
          }}
        >
          See the full projection →
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

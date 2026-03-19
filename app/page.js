import Calculator from './calculator'

function computeRevenue({ fans = 25000, ticket = 65, events = 4, growth = 50, conv = 3 }) {
  const newFans = Math.round(fans * (growth / 100))
  const extraRev = newFans * (conv / 100) * ticket * events
  return { newFans, extraRev }
}

function fmtCurrency(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (n >= 10000) return '$' + Math.round(n / 1000) + 'K'
  return '$' + Math.round(n).toLocaleString('en-US')
}

function fmtNum(n) {
  return Math.round(n).toLocaleString('en-US')
}

export async function generateMetadata({ searchParams }) {
  const params = await searchParams
  const name = params.name || ''
  const fans = parseFloat(params.fans) || 25000
  const ticket = parseFloat(params.ticket) || 65
  const events = parseFloat(params.events) || 4
  const growth = parseFloat(params.growth) || 50
  const conv = parseFloat(params.conv) || 3

  const { newFans, extraRev } = computeRevenue({ fans, ticket, events, growth, conv })

  const title = name ? `${name} — Laylo ROI Calculator` : 'Laylo ROI Calculator'
  const description = name
    ? `${name} could add ${fmtNum(newFans)} fans and ${fmtCurrency(extraRev)} in revenue with Laylo`
    : 'Calculate your fan list ROI with Laylo'

  const ogParams = new URLSearchParams()
  if (name) ogParams.set('name', name)
  ogParams.set('revenue', fmtCurrency(extraRev))
  ogParams.set('fans', fmtNum(newFans))

  const ogUrl = `/api/og?${ogParams.toString()}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  }
}

export default async function Page({ searchParams }) {
  return <Calculator />
}

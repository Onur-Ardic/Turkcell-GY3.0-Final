import toast from 'react-hot-toast'

export async function getArrivalItem() {
  const res = await fetch('https://vercel-json-alpha.vercel.app/arrival')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getTopSellingItems() {
  const res = await fetch('https://vercel-json-alpha.vercel.app/topSelling')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getAlsoLike() {
  const res = await fetch('https://vercel-json-alpha.vercel.app/alsolike')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getComments() {
  const res = await fetch('https://vercel-json-alpha.vercel.app/Comments', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getAllData() {
  try {
    const arrivalResponse = await fetch('https://vercel-json-alpha.vercel.app/arrival')
    const topSellingResponse = await fetch('https://vercel-json-alpha.vercel.app/topSelling')
    const alsolikeResponse = await fetch('https://vercel-json-alpha.vercel.app/alsolike')

    if (!arrivalResponse.ok || !topSellingResponse.ok || !alsolikeResponse.ok) {
      throw new Error('Failed to fetch data')
    }

    const arrivalData = await arrivalResponse.json()
    const topSellingData = await topSellingResponse.json()
    const alsolikeData = await alsolikeResponse.json()

    const combinedData = {
      arrival: arrivalData,
      topSelling: topSellingData,
      alsolike: alsolikeData,
    }

    return combinedData
  } catch (error) {
    toast.error('Error fetching data:', error)
    throw error
  }
}

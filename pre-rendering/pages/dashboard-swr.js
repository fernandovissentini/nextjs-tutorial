import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  return await response.json()
}

function DashboardSwr() {
  const {data, error} = useSWR('dashboard', fetcher)
  if (error) {
    return 'An error has occurred'
  } else if (!data) {
    return 'Loading...'
  }
  return (
      <div>
        <h2>Dashboard</h2>
        <h3>Posts - {data .posts}</h3>
        <h3>Likes - {data .likes}</h3>
        <h3>Followers - {data .followers}</h3>
        <h3>F ollowing - {data .following}</h3>
      </div>
  )
}

export default DashboardSwr

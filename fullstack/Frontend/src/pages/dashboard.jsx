import { useState } from 'react'
function Dashboard() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
        Dashboard
      </h1>
    </>
  )
}


export default Dashboard

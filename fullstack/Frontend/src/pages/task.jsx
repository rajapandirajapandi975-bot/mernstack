import { useState } from 'react'
function Task() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
        Tasks
      </h1>
    </>
  )
}

export default Task

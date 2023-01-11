import React, { useState } from 'react'

export default function Counter() {
    const [count , setCount] = useState(1)


  return (
    <>
        <button onClick={() => setCount(count + 1)}>icrement</button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>decrement</button>
    </>
  )
}

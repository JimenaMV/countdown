import React, { useState, useEffect } from "react"

const Check = () => {
  const [check, setCheck] = useState(0)

  const increment = () => {
    /*  const result = setCheck(check + 1)
    console.log(result) */
    setCheck(check + 1)
  }
  /* console.log(increment) */

  useEffect(() => {
    console.log(`La cuenta es ${check}`)
    document.title = `La cuenta es ${check}`
  })

  return (
    <div>
      <h1>La cuenta es:{check}</h1>
      <button onClick={increment}>Increment</button>
      {/* <button onClick={() => setCheck(check + 1)}>Increment</button> */}
    </div>
  )
}

export default Check

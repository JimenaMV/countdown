import React, { useState, useEffect } from "react"

const Check = () => {
  const [check, setCheck] = useState(0)

  /* const increment = () => { */
  /*  const result = setCheck(check + 1)
    console.log(result) */
  /*  setCheck(check + 1)
  } */
  /* console.log(increment) */

  /* check vive dentro del estado de react, cuando useEffect se ejectuta, estamos de cierta forma extrayendo data que vide dentro del estado y la colocamos dentro del título del documento */

  useEffect(() => {
    console.log(`La cuenta es ${check}`)
    document.title = `La cuenta es ${check}`
  })

  return (
    <div>
      <h1>La cuenta es:{check}</h1>
      {/* <button onClick={increment}>Increment</button> */}
      <button
        onClick={() => {
          setCheck(check + 1)
        }}
      >
        Increment number
      </button>
    </div>
  )
}

export default Check

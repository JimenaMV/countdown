import React, { useState, useEffect } from "react"

const Mounted = () => {
  useEffect(() => {
    console.log(`Yo soy mounted`)
  })

  return <div>Mounted</div>
}

export default Mounted

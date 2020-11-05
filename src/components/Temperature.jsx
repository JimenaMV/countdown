import React, { useRef } from "react";

const Temperature = () => {
  //Inicializando con null, por qué se inicializa con null y no cero?
  const nameRef = useRef(0);

  const calculate = () => {
    const result = 100 * nameRef.current.value + 30;
    console.log(result);
  };

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onClick={calculate}>Calculate</button>
    </div>
  );
};

export default Temperature;

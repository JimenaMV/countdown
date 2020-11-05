import React, { useState, useRef } from "react";

//useRef hace referencia a un elemento delntro del Dom
//Para un formulario y recoger ese valor, lo primero es crear un estado y su seteador
//Agregamos un input y queremos capturar el valor ingresado a medida que vayamos capturando los datos
//Useref hace erferencia a un elemento del DOM y captura todos los valores
//Current es la propiedad que da useref
//Como podemos hacer que el input se setee dentro de useref?

const UseRefExample = () => {
  /* const [text, setText] = useState(""); */
  const text2 = useRef(null);

  const Show = () => {
    /* console.log(text); */
    console.log(text2.current.value);
  };

  return (
    <>
      <div>
        <input
          ref={text2}
          type="text"
          /* onChange={(e) => setText(e.target.value)} */
        />
        <button onClick={() => Show()}>Mostrar</button>
      </div>
    </>
  );
};

export default UseRefExample;

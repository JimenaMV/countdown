import React, { useState, useRef, useEffect } from "react";
/* import Temperature from "./components/Temperature" */

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  /* hace referencia a un elemento dentro del dom y lo captura, current es su propiedad */
  let interval = useRef();

  const startTimer = () => {
    /* El método getTime() devuelve el valor numérico correspondiente a la hora para la fecha especificada */
    const countdownDate = new Date("Nov 04, 2020 16:00:00").getTime();
    console.log(countdownDate);

    interval = setInterval(() => {
      //Guardando fecha actual
      const now = new Date().getTime();
      /* console.log(now) */
      const distance = countdownDate - now;
      /* console.log(distance) */

      /* Math.floor: Devuelve el máximo entero menor o igual a un número. */
      //Cálculo de días: la distancia, entre la multiplicación de 1000 segundos por 60, se obtiene un minuto, ese resultado por 60 minutos correspondientes a una hora, se obtienen las horas y eso por 24, los días
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      /* console.log(days); */
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      /* console.log(minutes); */
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  //ComponentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <main className="timer-container">
      <section className="screen">
        <section className="timer-information">
          <span className="mdi mdi-calendar-clock timer-icon icon"></span>
          <h2>VTEX</h2>
          <hr />
          <br />
          <p>Mi entrevista con Ro</p>
        </section>
        <section className="clock">
          <div>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </div>
          <span>:</span>

          <div>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </div>
          <span>:</span>

          <div>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </div>
          <span>:</span>

          <div>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </div>
        </section>

        {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
        {/*  setInterval(tick, 1000); */}
      </section>
      {/* <Temperature /> */}
    </main>
  );
}

export default App;

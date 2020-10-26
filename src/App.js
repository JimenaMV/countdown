import React from "react";

function App() {
  return (
    <main className='timer-container'>
      <section class='timer-information'>
        <span className='mdi mdi-calendar-clock timer-icon'></span>
        <h2>Countdown timer</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          molestiae quia doloribus ipsum, velit libero voluptatum voluptatem
          repellat magni dignissimos nobis, et nesciunt totam omnis perferendis
          consequatur. Odit, voluptatem cum?
        </p>
      </section>
      <section class='clock'>
        <div>
          <p>87</p>
          <p>
            <small>Days</small>
          </p>
        </div>
        <span>:</span>

        <div>
          <p>87</p>
          <p>
            <small>Hours</small>
          </p>
        </div>
        <span>:</span>

        <div>
          <p>87</p>
          <p>
            <small>Minutes</small>
          </p>
        </div>
        <span>:</span>

        <div>
          <p>87</p>
          <p>
            <small>Seconds</small>
          </p>
        </div>
      </section>

      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      {/*  setInterval(tick, 1000); */}
    </main>
  );
}

export default App;

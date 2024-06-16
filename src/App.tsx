import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(() => {
      const currDate = new Date();
      const currHour = currDate.toLocaleTimeString();
      return currHour;
    });
  }, []);
  useEffect(() => {
    setInterval(() => {
      setTime(() => {
        const currDate = new Date();
        const currHour = currDate.toLocaleTimeString();
        return currHour;
      });
    }, 100);
  }, [time]);
  return (
    <>
      <div className="timer">{time}</div>
    </>
  );
}

export default App;

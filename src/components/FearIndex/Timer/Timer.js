import React, { useState, useEffect } from "react";

const Timer = ({ timeLeft }) => {
    let newHours = Math.floor(timeLeft / 3600);
    let newMinutes = Math.floor((timeLeft - newHours * 3600) / 60);
    let newSeconds = timeLeft - newHours * 3600 - newMinutes * 60;
  
    const [hours, setHours] = useState(newHours);
    const [minutes, setMinutes] = useState(newMinutes);
    const [seconds, setSeconds] = useState(newSeconds);
  
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(myInterval);
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    });
  
    return (
      <div className="timer">
        Time Until Next Update: {hours}h {minutes < 10 ? "0" + minutes : minutes}m{" "}
        {seconds < 10 ? "0" + seconds : seconds}s
      </div>
    );
  };

export default Timer; 
import Navigation from "../components/Navigation";
import React, { useEffect, useState } from "react"

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    // calculation
    
    const convertSecondToMinute = (time) => {
        let seconds = time;
        let minutes = 0;
        if (time == 5) {
            minutes += 1
            seconds == 0;
        }
        return minutes
    }

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    
    const reset = () => {
        setTime(0);
    };

    return (
        <>
            <p>
                {convertSecondToMinute}
            </p>
            <div>
                <button onClick={startAndStop}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={reset} >
                    Reset
                </button>
            </div >

            <Navigation />

        </>
    )
}
export default Stopwatch;
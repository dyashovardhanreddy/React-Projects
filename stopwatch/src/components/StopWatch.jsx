import React, { useState, useEffect, useRef} from "react";

export const StopWatch = () => {
    const [isRunning, setIsRuning ] = useState(false);
    const [ elapseTime, setElapsedTime ] = useState(0);
    const [ laps , setLaps ] = useState([]);
    const intervalIdRef = useRef(null);
    const startWithRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startWithRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);
    

    function start(){
        setIsRuning(true);
        startWithRef.current = Date.now() - elapseTime;
    }

    function pause(){
        setIsRuning(false);    
    }

    function lap(){
        setLaps([...laps, formatTime()]);
    }

    function reset(){
        setElapsedTime(0);
        setIsRuning(false);
        setLaps([]);
    }

    function formatTime(){

        let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapseTime / (1000) % 60);
        let milliseconds = Math.floor((elapseTime % 1000) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <>
            <div className="stopwatch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button onClick={start} className="start-button">Start</button>
                    <button onClick={pause} className="pause-button">Pause</button>
                    <button onClick={lap} className="lap-button">Lap</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                </div>
            </div>
            <div className="laps">
                <hr></hr>
                <h4 className="laps-text">Laps</h4>
                {laps && laps.map((lap, index) => (
                    <div key={index}>
                        <p className="lap-display" >{lap}</p>
                        <hr></hr>
                    </div>   
                    
                ))}
            </div>
        </>
    )
}
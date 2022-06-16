import React, {useState, useEffect} from 'react'
import { gitCall } from './CreateActivity'

function App() {
  const Timer = () => {
    const [ minutes, setMinutes ] = useState(120);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
  gitCall();

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null :
        <h3>Last update happened {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3>
    }
    <h1>hello</h1>
    </div>
  );
}
}

export default App;

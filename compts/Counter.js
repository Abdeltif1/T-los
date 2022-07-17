
import { useState, useEffect } from "react";



const Counter = function({date}) {
    //countdown to count down to the date
    const [countdown, setCountdown] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const distance = date - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountdown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);

    return (
        <div>
            <hr size = "6"></hr>
            Coming to air in {countdown}
            <hr></hr>
        </div>

    )

    
}

export default Counter;
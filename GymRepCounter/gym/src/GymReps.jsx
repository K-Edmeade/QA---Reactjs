import { useState } from "react";


const GymReps = () => {
    const [reps, setReps] = useState(0);

    const increments = () => {
        setReps(prev => prev + 1);
    }

    return (
    <><h3>YEAH BUDDY!</h3>
    <p> You've done {reps} reps! Light weight Baby!!!!</p>
    <button onClick = {increments}> I completed another rep</button></>)
   

     

}


export default GymReps;



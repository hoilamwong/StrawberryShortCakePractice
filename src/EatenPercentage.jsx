import { useEffect, useState } from "react"

export default function EatenPercentage()
{
        // Get eatenPercentage from localStorage at first render
    const [ eatenPercentage, setEatenPercentage ] = useState(parseInt(localStorage.getItem('eatenPercentage') ?? 0))
    // const [ eatenPercentage, setEatenPercentage ] = useState(0)
    const [ eatenAll, setEatenAll ] = useState(false)

    // Set eatenPercentage at localStorage ONLY when it is changed (button is clicked)

    useEffect(() => {
        localStorage.setItem('eatenPercentage', eatenPercentage)
        // Set EatenAll to true when eatenPercentage >= 100
        if(eatenPercentage >= 100){
            setEatenAll(true)
        }else{
            setEatenAll(false)
        }
        
    },[eatenPercentage])

    const buttonEat = () => {
        setEatenPercentage(eatenPercentage + 25)
    }

    const buttonRefill = () => {
        setEatenPercentage(0)
    }

    return <>
        <h3> {100 - eatenPercentage}% <br/> </h3>
        <button disabled={ eatenAll } onClick={ buttonEat }> Eat ! </button>
        {eatenAll && <> <br/> <button onClick={ buttonRefill }> More !!! </button> </>}  
    </> 
}

export default function ResultDie({dieName, squareDie}){
    return (
        squareDie ? 
        <img className="square-die" src={`/Dice/${dieName}.png`}/>
        : <img src={`/Dice/${dieName}.png`}/>
    )
}
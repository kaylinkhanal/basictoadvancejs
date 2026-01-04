import { useState } from "react";

const Dice = () => {
    const [randomNum, setRandomNum] = useState([]);
    const [output, setOutput] = useState('')
    function rollTheDice(action: string) {
        const firstRandomNum = Math.ceil(Math.random() * 6);
        const secondRandomNum = Math.ceil(Math.random() * 6);
        if(action === 'less' && (firstRandomNum + secondRandomNum) < 7) {
          setOutput('You win!');
        }else if(action === 'more' && (firstRandomNum + secondRandomNum) > 7) {
          setOutput('You win!');
        }else{
          setOutput('You lose!');
        }
        setRandomNum([firstRandomNum, secondRandomNum]);
    }

  return (
    <div>
        <button onClick={()=>rollTheDice('less')} className='text-green-600 font-semibold p4 m-4 rounded shadow-md'>
          Less than 7</button>
        <button onClick={()=>rollTheDice('more')} className='text-green-600 font-semibold p4 m-4 rounded shadow-md'>
          More than 7</button>
        {output}
       {randomNum[0] ? <img src={dice${randomNum[0]}.png} height={200} width={200} alt="dice image" /> : <div className="text-gray-300 itallic">Click the button above to roll the dice</div>}
       {randomNum[1] ? <img src={dice${randomNum[1]}.png} height={200} width={200} alt="dice image" /> : <div className="text-gray-300 itallic">Click the button above to roll the dice</div>}
    </div>
  )
}

export default Dice
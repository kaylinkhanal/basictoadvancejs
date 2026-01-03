'use client'
import React, { useState, useEffect } from 'react'

const RockPaperScissors = () => {
  const choices = ['🤜', '🫱', '✌️']

  const [userChoice, setUserChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')

  const playGame = (choice) => {
    setUserChoice(choice)
    const randomChoice = choices[Math.floor(Math.random() * 3)]
    setComputerChoice(randomChoice) 
  }

  useEffect(() => {
    if (!userChoice || !computerChoice) return

    if (userChoice === computerChoice) {
      setResult('Draw 🤝')
    } else if (
      (userChoice === '🤜' && computerChoice === '✌️') ||
      (userChoice === '🫱' && computerChoice === '🤜') ||
      (userChoice === '✌️' && computerChoice === '🫱')
    ) {
      setResult('You Win 🎉')
    } else {
      setResult('Computer Wins 😢')
    }
  }, [userChoice, computerChoice])

  return (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className='bg-cyan-300 rounded-lg shadow-md p-10'>
      <p className=" text-2xl font-bold text-center mb-10">Rock Paper Scissors Game</p> 

        <div className='flex justify-between'>
          <div>
            <p className='text-center font-bold font-serif text-2xl'>You</p>
            <p className='h-[160px] w-[190px] text-9xl mt-2 border-2 rounded-md shadow-lg p-2 flex items-center justify-center'>{userChoice} </p>
          </div>
          <div>
            <p className='text-center font-bold font-serif text-2xl'>Computer</p>
            <p className='h-[160px] w-[190px] text-9xl mt-2 border-2 rounded-md shadow-lg p-2 flex items-center justify-center'>{computerChoice} </p>
          </div>
          
        </div>
        
            <div className="m-6 h-[30px] text-lg">
             <p className="mt-2 font-semibold text-center">{result}</p>
           </div>

          <div className="flex gap-4">
            {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => playGame(choice)}
              className=" text-6xl px-6 py-2 border rounded-lg hover:bg-gray-200"
               >
              {choice}
            </button>
                ))}

          </div>

    </div>
  </div>
  )
}

export default RockPaperScissors

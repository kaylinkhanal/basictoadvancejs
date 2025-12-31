"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const DiceRollGame = () => {
  const [playerDice, setPlayerDice] = useState(null)
  const [computerDice, setComputerDice] = useState(null)
  const [result, setResult] = useState("")

  const rollTheDice = () => {
    const player = Math.ceil(Math.random() * 6)
    const computer = Math.ceil(Math.random() * 6)

    setPlayerDice(player)
    setComputerDice(computer)

    if (player > computer) {
      setResult("🎉 You Win!")
    } else if (player < computer) {
      setResult("🖥️ Computer Wins!")
    } else {
      setResult("🤝 It's a Draw!")
    }
  }

  const resetGame = () => {
    setPlayerDice(null)
    setComputerDice(null)
    setResult("")
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      
      <div className='w-[450px] h-[500px] flex flex-col items-center bg-amber-200 rounded-lg shadow-md p-20'>

      <p className='mb-6 text-2xl font-semibold'>Dice Roll Game</p>

        <div className='flex gap-10 mb-6 h-[160px]'>
          <div className='text-center w-[120px]'>
            <p className='mb-2 font-semibold'>You</p>
            <Image
              src={`/dice${playerDice || 1}.png`}
              height={120}
              width={120}
              alt="player dice"
              draggable={false}
            />
          </div>

          <div className='text-center w-[120px]'>
            <p className='mb-2 font-semibold'>Computer</p>
            <Image
              src={`/dice${computerDice || 1}.png`}
              height={120}
              width={120}
              alt="computer dice"
              draggable={false}
            />
          </div>

        </div>

        <div className='h-10 mb-6 flex items-center justify-center'>
          <p className='text-xl font-bold'>
            {result}
          </p>
        </div>

        <div className='flex gap-4'>
        <button
            onClick={rollTheDice}
            className='px-6 py-3 font-semibold rounded-lg shadow-md bg-white hover:bg-gray-100' >
            Roll The Dice
          </button>

          <button
            onClick={resetGame}
            className='px-6 py-3 font-semibold rounded-lg shadow-md bg-red-200 hover:bg-red-300'>
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default DiceRollGame

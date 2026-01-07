'use client'
import React, { useState } from 'react'

const Calculator: React.FC = () => {
  const [answer, setAnswer] = useState<string>('')

  const calcKeys = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '00', '.', '+'],
    ['AC', '⌫', '%', '='],
  ]

  const nonNumbers = ['/', '*', '-', '+', '=', 'AC', '%', '⌫']

  const calculate = (key: string) => {
    if (key === '=') {
      try {
        const finalAns = eval(answer)
        setAnswer(finalAns?.toString() ?? '')
      } catch {
        setAnswer('Error')
      }
    } else if (key === 'AC') {
      setAnswer('')
    } else if (key === '⌫') {
      setAnswer(prev => prev.slice(0, -1))
    } else {
      setAnswer(prev => prev + key)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black p-6 rounded-2xl shadow-2xl w-80">
        
        <div className="bg-gray-900 text-white text-right text-3xl p-4 rounded-lg mb-4 overflow-hidden">
          {answer || '0'}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {calcKeys.flat().map((key, id) => (
            <button
              key={id}
              onClick={() => calculate(key)}
              className={`
                h-14 rounded-full text-lg font-semibold
                transition-all active:scale-95
                ${
                  key === '='
                    ? 'bg-orange-500 text-white col-span-2'
                    : nonNumbers.includes(key)
                    ? 'bg-orange-400 text-white'
                    : 'bg-gray-700 text-white'
                }
              `}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator

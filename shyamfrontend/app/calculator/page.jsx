'use client'
import React, { useState } from 'react'

const Calculator = () => {
    const [answer, setAnswer] = useState('')
    const calcKeys = [
        ['AC', 'C','%', '⌫'],

        ['7', '8',  '9', '/' ],
        ['4', '5',  '6', '*' ],
        ['1', '2',  '3', '-' ],
        ['.', '0',  '=', '+' ],
    ]
    const nonNumbers = ['/', '.', '-', '+', '=', 'AC', '%', '⌫',"*",'C']

    const calculate = (key) => {
        if (key === '=') {
            try {
                const finalAns = eval(answer)
                setAnswer(finalAns.toString())
            } catch (e) {
                setAnswer('Error')
            }
        } else if (key === 'AC'|| key==="C") {
            setAnswer('')
        } else if (key === '⌫') {
            setAnswer(answer.slice(0, -1))
        } else if (key === '%') {
            try {
                const val = eval(answer)
                setAnswer((val / 100).toString())
            } catch (e) {
                setAnswer('Error')
            }

        } else {
            // prevent leading operators
            if (answer === '' && ['/', '*', '-', '+'].includes(key)) return
            setAnswer(answer + key)
        }

    }
  return (<>
    <div className='bg-gray-600 m-30 w-70  text-center'>
        {answer}

        {calcKeys.map((item, id)=>{
            return (
                <div className='flex' key={id}>
                    {item.map((key,keyId)=>{
                        return (
                            <div onClick={() => 
                            calculate(key)} className=
                            {`m-2 p-4 shadow-md w-12 rounded-full text-center 
                            ${nonNumbers.includes(key) ? 'bg-blue-600' : 'bg-orange-600'}`}
                             key={keyId}>
                                {key}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Calculator
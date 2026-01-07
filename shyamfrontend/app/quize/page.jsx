'use client'
import React, { useState } from 'react'
const quizQuestionsAnswers = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    }
]



const Quiz = () => {
    const [scores, setScores] = useState(0)
    const quizSelection = (questionId, answer) => {
       if(quizQuestionsAnswers[questionId].correctAnswer === answer){
        setScores(scores + 1)
       }
    }
  return (
    <div>
       Your score: {scores}
        {quizQuestionsAnswers.map((item, id)=>{
            return (
                <div key={id} className='mb-8'>
                 {id + 1}   <h2>{item.question}</h2>
                 <div className='flex'>
                {item.answers.map((ans, ansId)=>{
                    return (
                        <div onClick={()=>quizSelection(id, ans)} className='bg-pink-400 shadow-md w-fit p-4 m-2' key={ansId}>
                            {ans}
                            </div>
                    )
                })}
                </div>
                    </div>
            )
        })}
    </div>
  )
}

export default Quiz
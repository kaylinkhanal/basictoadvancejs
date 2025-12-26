import React from 'react'

const Home = () => {
  return (
    <div className=' flex h-screen'>
        <img src="https://imgs.search.brave.com/iF0P-sC8p5FwMLGROVL4fQiOfAp_y4fy06qhxjWSw1U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaW1pbGFycG5n/LmNvbS9maWxlL3Np/bWlsYXJwbmcvdmVy/eS10aHVtYm5haWwv/MjAyMC8wNS9HbG9z/c3ktV2hhdHNBcHAt/bG9nby1QTkcucG5n" alt="whatsapp logo" />
       <div className='bg-black w-[5%]'>
          <div className='flex flex-col items-center mt-4 space-y-6'>
            <div>
            🍋
            </div>
            <div>
            🟩
            </div>
          </div>
         </div>
       <div  className='bg-pink-400 w-[33%]'>
        <input placeholder='Search your friends'/>
        <div className='shadow-sm p-2 m-2 rounded-lg bg-white'>
          Ram shrestha
        </div>
        <div className='shadow-sm p-2 m-2 rounded-lg bg-white'>
          Shiva shrestha
        </div>
       </div>
       <div className='bg-green-400 w-[63%]'>a</div>
    </div>
  )
}

export default Home
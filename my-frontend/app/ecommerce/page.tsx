
import Card from '@/components/card/page'
import React from 'react'

const Ecomerce = () => {
  const data = [
    {
      id: 1,
      name: "Marcus Chen",
      position: "expert god",
      address: {
        street: "492 Oakwood Avenue",
        city: "Seattle",
        state: "WA",
        zip: "98101"
      },
      image_url: "https://img.freepik.com/premium-photo/portrait-stoic-marcus-aurelius-black-white-film-grain-highly-detailed-masterpiece_1097265-29435.jpg?w=360"
    },
    {
      id: 2,
      name: "Buddha",
      position: "Creative god",
      address: {
        street: "1227 Pinecrest Drive",
        city: "Austin",
        state: "TX",
        zip: "78704"
      },
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDMrONvd7kSsHoMxKsaK2bGyQKgrmcx333Q&s"
    },
    {
      id: 3,
      name: "Ganesh",
      position: "Senior god",
      address: {
        street: "492 Oakwood Avenue",
        city: "Seattle",
        state: "WA",
        zip: "98101"
      },
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_44KuQnPKdhQmQc1cTkL80AI4yZf8dpFtA&s"
    },
    {
      id: 4,
      name: "Marcus Chen",
      position: " Software god ",
      address: {
        street: "492 Oakwood Avenue",
        city: "Seattle",
        state: "WA",
        zip: "98101"
      },
      image_url: "https://i.pinimg.com/736x/17/21/68/1721687f42c048ec4c1a99fad73c5685.jpg"
    },
    {
      id: 5,
      name: "Parbati",
      position: "Architect goddess",
      address: {
        street: "492 Oakwood Avenue",
        city: "Seattle",
        state: "WA",
        zip: "98101"
      },
      image_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/63d5c511-fd78-40cb-bc6c-69a190b6b63f/dfx9e69-33b65179-f1fe-4a2e-980b-dd92d0c4d91b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82M2Q1YzUxMS1mZDc4LTQwY2ItYmM2Yy02OWExOTBiNmI2M2YvZGZ4OWU2OS0zM2I2NTE3OS1mMWZlLTRhMmUtOTgwYi1kZDkyZDBjNGQ5MWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A4B8Eddbn8woRArQ4xV83t5nHtSvwcdfC_vPMT6OLj8"
    },
  ]
  return (
    <div className='m-10 flex flex-row'>
  
    
        {
          data.map((item, id) => {
            return <Card person={item} />
          })
        }
    
    </div>
  )
}
export default Ecomerce
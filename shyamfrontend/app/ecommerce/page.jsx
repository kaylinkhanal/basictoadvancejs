import Card from '@/componenents/card/card'
import React from 'react'

const Ecommerce = () => {
  const productList = [
    {
      "id": "nk-001",
      "name": "Nike Air Max 270",
      "category": "Running",
      "price": 160.00,
      "currency": "USD",
      "rating": 4.8,
      "reviews_count": 1240,
      "colors": ["White/Black/University Red", "Triple Black", "Anthracite"],
      "description": "Nike's first lifestyle Air Max brings you style, comfort and big attitude. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNG5zNtE5Delzeb3BTQTwdWv47RYAGJZ6fpw&s",
      "in_stock": true,
      "sizes": [7, 8, 9, 10, 11, 12]
    },
    
    {
      "id": "nk-003",
      "name": "Nike Pegasus 40",
      "category": "Running",
      "price": 130.00,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 890,
      "colors": ["Volt/Black", "Blue Whisper", "Black/White"],
      "description": "A springy ride for every run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in sensitive areas.",
      "image_url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHEhUTBxITFhUXFh4bGBgYGCIbGhsXGBgXGxohGiMeHiggGiQoGx0YITEmJSkrLi4uGh8zPTMsNygtLisBCgoKDg0OGg8QGjcmHyYtLS83MDUwLTctMTU1LS0tLS0tLS0tLS01LS0vKy0vLSstKy0tLS0tLS0tKy0uLS0rNf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABFEAABAwIEAwQGBQgJBQAAAAABAAIDBBEFEiExBkFRB2FxgRMiMpGh8BQjUmKxFSQzQnLB0eE1Q4KSk6Ky0vEIFjRzw//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACMRAQADAAICAgEFAAAAAAAAAAABAhEDQRIhBDETIjJCUbH/2gAMAwEAAhEDEQA/AJxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFb19ZBh0T5at2VkbS5x6BoufHwQXCoVlZTUTc1W9rG9Sbe7qovx/tpw9kZbgEMjpzcfWgNYzvdZxzdQAfEjZQ1jGLYzjLicWqJZSftPuNTewAOVovyAAQTzjHbHwvhrnMi9NM5pt9W0ZfEFzm3Hgtl4O4pouLoXTYe2RgbIWFsgAcHBrHciRs5vNcs4LhVVis7IKNodLI7LG3lfcud0a0Ak+B6Lqrg/h2n4WpY6emOYjV7zu+R3tOPS52HIADkgzSIiAiIgIiICIiAiIgIiICIiAiIgIioVtbS4ewyVr2sYN3ONh8UFdY3FsfwfBi0YtUQxF3siR4aTbe1zt3qKMV7Z8RMrm4VSMEZ0ZI8kuHRz2i1uRtfS+6jjibGJMfmdJWvdLI4AEtNrFoIAH6rQBc22uXG1zdBLfH/af6Joj4RlaXFxDpy27RbYR5hZ5vu6x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xl3M5jb3W0963fy/ilfHtRiwWmit6W7+4Kdey+D6PQhuQM9cnKBa1w06/ioRZiGMSn6t8MQ6hmYj+8bKeOz2gdQ0MZkldK6X61z3G989rbcsuUDwVrvaTnTZERFpkREQUpHzD2G381Y1NVibP0MIPmP4rJog0HiCp4rqmlkdIx7T+q6NrwfJxIK0HE4O0cxuhpKPLE9hY5kcMbQWOuCNORup8RBzTT4b2oUY/NYKxvg51vcXlvwV7Tv7V2i1RFWu7xYfgF0SiDmHG8B7RcYt9LpqxwBuA45rHu1WYgf2oU7bQU9cCBYXdmHnddDIggKixDtaZf6VFVnpaOP94XqqrO1SS3ooKq99bxx7d1lPaIOb8Zw3tIxgBtZTVbgNQDlAv4Cypw0PavTtDYGVzWtFg0ZQAOgA0C6URBzkxna63lXf5VRxKg7UcVj9FiUNXIy4OVzW7g3BB3B7wuk0Qc3YXh3aLhv6Glqx5A/v1WfgxjtLpxb8nySH78dvi14/BTkizWla/ULNpn7QqeIO0YjTCyD/AOtx/wDqFi8dn7R8ZiMT6GZrTuGMy5h0cS8m3dzU/ItI5di4Q4zabsw2VugHqi237Tir2l4I4vnP5xRTgeLB+Ll0qiCJuHOzqjaG/lehme4G931Fh4ZWENI8bqU6VojaGtYGBoADRawAFgBbYWVZEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==",
      "in_stock": false,
      "sizes": [8, 9, 10]
    },
    {
      "id": "nk-003",
      "name": "Nike Pegasus 40",
      "category": "Running",
      "price": 130.00,
      "currency": "USD",
      "rating": 4.5,
      "reviews_count": 890,
      "colors": ["Volt/Black", "Blue Whisper", "Black/White"],
      "description": "A springy ride for every run, the Peg’s familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in sensitive areas.",
      "image_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7d1EFazrwQSW-cTncgNJNyWVLuF5jza4uQ&s",
      "in_stock": false,
      "sizes": [8, 9, 10]
    }
  ]

  return (
    <div className='flex flex-wrap'>
       {
        productList.map((item,id)=>{
            return < Card key={id} products={item}/>
        })
       }
    </div>
  )
}

export default Ecommerce
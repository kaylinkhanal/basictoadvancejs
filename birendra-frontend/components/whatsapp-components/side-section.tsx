import { MessageCircleCodeIcon, MessageCircleHeartIcon, PhoneCall, Star, User2 } from 'lucide-react'
const SideSection = () => {
  return (
              <div className="bg-amber-50 w-[5%]">

          <div className="flex flex-col items-center mt-4 space-y-6">
            <MessageCircleHeartIcon />
            <PhoneCall />
            <Star />
            <MessageCircleCodeIcon />
            <User2 />
          </div>
          </div>
  )
}

export default SideSection
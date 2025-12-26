import { EllipsisVertical, Mic, Paperclip, Phone, Plus, Search, UserCircle2Icon, Video } from 'lucide-react'

const ChatSection = () => {
  return (
<div className="bg-amber-50 w-[63%] rounded-lg shadow-lg flex flex-col">
          <div className="flex items-center justify-between shadow-lg bg-white h-16">
            <div className="flex m-2 gap-4 items-center">
              <UserCircle2Icon />
              <p>Ram Shrestha</p>
            </div>

            <div className="flex m-2 gap-6">
              <Phone className="text-green-500" />
              <Video className="text-green-500" />
              <Search />
              <EllipsisVertical />
            </div>
          </div>

          <div className="flex gap-4 m-4 p-4 items-center rounded-3xl shadow-lg bg-white fixed bottom-2 w-[60%]">
            <Plus />
            <Paperclip />
            <input
              className="outline-none w-full"
              placeholder="Type a message"
            />
            <Mic />
          </div>
        </div>  )
}

export default ChatSection
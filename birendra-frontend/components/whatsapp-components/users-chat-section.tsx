import ChatUserCard from '@/components/chat-user-card/page'
import { EllipsisVertical, MessageSquarePlus, Search } from 'lucide-react'

const UsersChatSection = () => {
  return (
    <div className="bg-white w-[33%] rounded-lg shadow-lg">
          <div className="flex items-center justify-between m-4">
            <p className="text-2xl">Chats</p>
            <div className="flex gap-6">
              <MessageSquarePlus />
              <EllipsisVertical />
            </div>
          </div>

          <div className="flex items-center gap-4 shadow-sm p-2 m-2 border rounded-lg bg-white">
            <Search />
            <input
              className="outline-none w-full"
              placeholder="Search or start a new chat"
            />
          </div>

          <div className="flex justify-between m-2 p-2">
            <p>All</p>
            <p>Unread</p>
            <p>Favorites</p>
            <p>Groups</p>
          </div>

      <ChatUserCard/>
        </div>

  )
}

export default UsersChatSection
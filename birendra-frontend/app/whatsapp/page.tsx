import {
  EllipsisVertical,
  Maximize,
  MessageCircleCodeIcon,
  MessageCircleHeartIcon,
  MessageSquarePlus,
  Mic,
  Minus,
  Paperclip,
  Phone,
  PhoneCall,
  Plus,
  Search,
  Star,
  User2,
  UserCircle2Icon,
  Video,
  X
} from 'lucide-react'
import React from 'react'
import Image from "next/image"
import ChatUserCard from '@/components/chat-user-card/page'
import TopSection from '@/components/whatsapp-components/top-section'
import SideSection from '@/components/whatsapp-components/side-section'
import UsersChatSection from '@/components/whatsapp-components/users-chat-section'
import ChatSection from '@/components/whatsapp-components/chat-section'

const Whatsapp = () => {
  return (
    <div className="flex flex-col h-screen bg-amber-50">
      <TopSection/>
      <div className="flex flex-1">
      <SideSection/>
      <UsersChatSection/>
        <ChatSection/>
        </div>

      </div>
  )
}

export default Whatsapp

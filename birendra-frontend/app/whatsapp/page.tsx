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

import {
  MessageCircleCodeIcon,
  MessageSquareText,
  Phone,
  Search,
  Settings,
  User,
  UserRound,
} from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen flex bg-[#0b141a] text-white">
      <div className="relative h-screen bg-gray-900">
        <img
          src="https://png.pngtree.com/element_our/png_detail/20181011/whatsapp-social-media-icon-design-template-vector-png_127011.png"
          alt="Meta AI Logo"
          className="absolute top-4 left-4 w-10 h-10"
        />
      </div>
      <div className="w-[4%] bg-[#202c33] flex flex-col items-center py-6 space-y-6">
        <a href="message">
          <MessageSquareText />
        </a>
        <a href="phone">
          <Phone />
        </a>
        <a href="code">
          <MessageCircleCodeIcon />
        </a>
        <a href="user">
          <User />
        </a>
        <div className="m-90">
          <a href="settings">
          <Settings />
          </a>
        </div>
      </div>

      <div className="w-[30%] bg-[#111b21] border-r border-gray-700">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-3">Chats</h1>

          <input
            type="search"
            placeholder="Ask Meta AI or Search"
            className="w-full p-2 rounded-lg bg-[#202c33] text-sm outline-none"
          /><Search />
        </div>

        <div className="px-2">
          <ChatItem name="Ram Shrestha"></ChatItem>
          <ChatItem name="Shiva Raj Joshi"></ChatItem>
        </div>
      </div>
      <div className="w-[66%] flex items-center justify-center bg-[#0b141a]">
        <div className="text-center text-gray-400"></div>
      </div>
    </div>
  );
};
const ChatItem = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#202c33] cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};
export default Home;

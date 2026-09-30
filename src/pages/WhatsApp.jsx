import ChatSidebar from "../whatsapp/SideBar";
import ChatWindow from "../whatsapp/ChatWindow";
import WhatsAppNav from "../whatsapp/Navbar";
import { chats } from "../whatsapp/chatData";

function WhatsApp() {
  return (
    <div className="fixed inset-0 z-[100] h-screen min-w-[1200px] overflow-auto bg-[#d9dbd5] p-6">
      <input
        className="sr-only"
        type="radio"
        name="chat"
        id="chat-affan"
        defaultChecked
      />
      <input
        className="sr-only"
        type="radio"
        name="chat"
        id="chat-sundar-pichai"
      />
      <input
        className="sr-only"
        type="radio"
        name="chat"
        id="chat-jeffrey-epstein"
      />
      <div className="mx-auto flex h-full w-full min-w-[1200px] max-w-[1600px] overflow-hidden rounded-sm bg-white shadow-xl">
        <WhatsAppNav />
        <ChatSidebar />
        {chats.map((chat) => (
          <ChatWindow key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default WhatsApp;

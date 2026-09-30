import { FiCircle, FiMessageCircle, FiMoreVertical } from "react-icons/fi";
import { Avatar, IconButton } from "./Chats";

function WhatsAppNav() {
  return (
    <nav className="flex w-16 shrink-0 flex-col items-center justify-between border-r border-[#e9edef] bg-[#f0f2f5] py-4">
      <div className="flex flex-col items-center gap-3">
        <IconButton label="Chats" className="bg-[#d9fdd3] text-[#008069]">
          <FiMessageCircle size={21} />
        </IconButton>
        <IconButton label="Status">
          <FiCircle size={21} />
        </IconButton>
      </div>
      <div className="flex flex-col items-center gap-3">
        <IconButton label="Settings">
          <FiMoreVertical size={20} />
        </IconButton>
        <Avatar
          chat={{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJV5yuzKTb-ZfQNQhUL0o4JgFH-NPDEoGhnB5rs8bEdQ&s=10",
            online: false,
          }}
          size="h-9 w-9"
        />
      </div>
    </nav>
  );
}

export default WhatsAppNav;

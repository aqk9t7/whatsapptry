import {
  FiArchive,
  FiCheck,
  FiEdit2,
  FiMoreVertical,
  FiSearch,
} from "react-icons/fi";
import { chats } from "./chatData";
import { Avatar, IconButton } from "./Chats";

const filters = ["All", "Unread", "Favourites", "Groups"];

function ChatSidebar() {
  return (
    <aside className="flex w-[360px] shrink-0 flex-col border-r border-[#e9edef] bg-white">
      <header className="flex h-[60px] shrink-0 items-center justify-between bg-[#f0f2f5] px-4">
        <h1 className="text-xl font-semibold text-[#111b21]">WhatsApp</h1>
        <div className="flex items-center gap-1">
          <IconButton label="New chat">
            <FiEdit2 size={20} />
          </IconButton>
          <IconButton label="More options">
            <FiMoreVertical size={20} />
          </IconButton>
        </div>
      </header>

      <div className="shrink-0 px-3 pb-2 pt-2">
        <div className="flex h-9 items-center gap-7 rounded-lg bg-[#f0f2f5] px-3 text-[#54656f]">
          <FiSearch size={16} />
          <span className="text-sm text-[#667781]">
            Search or start a new chat
          </span>
        </div>
      </div>

      <div className="flex shrink-0 gap-2 px-3 pb-3">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={`rounded-full px-3 py-1.5 text-[13px] ${
              index === 0
                ? "bg-[#d9fdd3] text-[#008069]"
                : "bg-[#f0f2f5] text-[#54656f]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex h-14 shrink-0 items-center gap-4 border-b border-[#e9edef] px-4 text-left text-sm text-[#111b21]"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f0f2f5] text-[#54656f]">
          <FiArchive size={20} />
        </span>
        <span className="font-medium">Archived</span>
      </button>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <label
            key={chat.id}
            htmlFor={`chat-${chat.id}`}
            className={`chat-select chat-select-${chat.id} flex w-full cursor-pointer items-center gap-3 px-3 py-3 text-left hover:bg-[#f5f6f6]`}
          >
            <Avatar chat={chat} size="h-[49px] w-[49px]" />
            <span className="min-w-0 flex-1 border-b border-[#f0f2f5] pb-3 pt-1">
              <span className="flex items-center justify-between gap-2">
                <span className="truncate text-[16px] text-[#111b21]">
                  {chat.name}
                </span>
                <span className="shrink-0 text-[11px] text-[#667781]">
                  {chat.time}
                </span>
              </span>
              <span className="mt-1 flex items-center justify-between gap-2">
                <span className="truncate text-[13px] text-[#667781]">
                  {chat.preview.startsWith("You:") && (
                    <FiCheck size={14} className="mr-1 inline text-[#53bdeb]" />
                  )}
                  {chat.preview}
                </span>
              </span>
            </span>
          </label>
        ))}
      </div>
    </aside>
  );
}

export default ChatSidebar;

import {
  FiCheck,
  FiCheckCircle,
  FiMoreVertical,
  FiPaperclip,
  FiPhone,
  FiSearch,
  FiSmile,
  FiVideo,
} from "react-icons/fi";
import { startingMessages } from "./chatData";
import { Avatar, IconButton } from "./Chats";

function ChatWindow({ chat }) {
  return (
    <section
      className={`chat-pane chat-pane-${chat.id} min-w-0 flex-1 flex-col bg-[#efeae2]`}
    >
      <header className="z-10 flex h-[60px] shrink-0 items-center justify-between bg-[#f0f2f5] px-4">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar chat={chat} size="h-10 w-10" />
          <div className="min-w-0">
            <h2 className="truncate text-[16px] text-[#111b21]">{chat.name}</h2>
            <p className="text-xs text-[#667781]">
              {chat.online ? "online" : "last seen today at 9:12 AM"}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <IconButton label="Video call">
            <FiVideo size={20} />
          </IconButton>
          <IconButton label="Voice call">
            <FiPhone size={19} />
          </IconButton>
          <IconButton label="Search in conversation">
            <FiSearch size={20} />
          </IconButton>
          <IconButton label="More options">
            <FiMoreVertical size={20} />
          </IconButton>
        </div>
      </header>

      <div
        className="flex min-h-0 flex-1 flex-col overflow-y-auto px-14 py-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20px 20px, rgba(84,101,111,.055) 1.5px, transparent 1.6px), radial-gradient(circle at 60px 60px, rgba(84,101,111,.045) 1.5px, transparent 1.6px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="mx-auto mb-5 rounded-lg bg-[#fff4c7] px-3 py-2 text-center text-xs leading-5 text-[#54656f] shadow-sm">
          <FiCheckCircle
            className="mr-1 inline align-[-3px] text-[#e0ad2f]"
            size={14}
          />
          Messages and calls are end-to-end encrypted. No one outside of this
          chat can read or listen to them.
        </div>
        <div className="mb-4 self-center rounded-lg bg-white/90 px-3 py-1.5 text-xs text-[#54656f] shadow-sm">
          TODAY
        </div>
        <div className="flex flex-col gap-2">
          {startingMessages[chat.id].map((message, index) => (
            <div
              key={`${chat.id}-${index}`}
              className={`flex ${message.own ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-[75%] rounded-lg px-2.5 pb-1.5 pt-1.5 text-[14px] leading-[1.45] shadow-sm ${
                  message.own
                    ? "rounded-tr-none bg-[#d9fdd3] text-[#111b21]"
                    : "rounded-tl-none bg-white text-[#111b21]"
                }`}
              >
                <span>{message.text}</span>
                <span className="ml-3 inline-flex items-center gap-1 whitespace-nowrap pl-1 align-baseline text-[10px] text-[#667781]">
                  {message.time}
                  {message.own && (
                    <FiCheck size={14} className="text-[#53bdeb]" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-[62px] shrink-0 items-center gap-2 bg-[#f0f2f5] px-4 py-2">
        <IconButton label="Emoji">
          <FiSmile size={22} />
        </IconButton>
        <IconButton label="Attach file">
          <FiPaperclip size={21} />
        </IconButton>
        <input
          disabled
          aria-label="Message input disabled"
          placeholder="Type a message"
          className="h-10 min-w-0 flex-1 rounded-lg bg-white px-4 text-sm text-[#111b21] outline-none placeholder:text-[#667781]"
        />
        <IconButton label="Voice message">
          <FiMoreVertical size={21} />
        </IconButton>
      </div>
    </section>
  );
}

export default ChatWindow;

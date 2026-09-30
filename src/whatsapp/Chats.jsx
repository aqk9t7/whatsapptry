export function Avatar({ chat, size = "h-12 w-12" }) {
  return (
    <div className={`${size} relative shrink-0`}>
      <img
        src={chat.avatar}
        alt=""
        className="h-full w-full rounded-full object-cover"
      />
      {chat.online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#25d366]" />
      )}
    </div>
  );
}

export function IconButton({ label, children, className = "" }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[#54656f] hover:bg-[#f0f2f5] active:bg-[#e9edef] ${className}`}
    >
      {children}
    </button>
  );
}

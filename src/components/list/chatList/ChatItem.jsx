
const ChatItem = () => {
  return (
    <div className="flex items-center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]">
        <img src="./avatar.png" className="w-[50px] h-[50px] rounded-full object-cover"/>
        <div className="flex flex-col gap-2.5">
            <span className="font-medium">Mohamed Ahmed</span>
            <p className="text-sm font-light">Hello</p>
        </div>
    </div>
  )
};

export default ChatItem;

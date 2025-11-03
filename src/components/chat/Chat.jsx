import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import MessageItem from "./MessageItem";

const Chat = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [text, setText] = useState("");

    return (
        <div className="flex-2 border-x border-[#dddddd35] h-full flex flex-col">
            {/* Top */}
            <div className="p-5 flex items-center justify-between border-b border-[#dddddd35]">
                {/* user info */}
                <div className="flex items-center gap-5">
                    <img src="./avatar.png" className="w-[60px] h-[60px] rounded-full object-cover" />
                    <div className="flex flex-col gap-1">
                        <span className="text-[18px] font-bold">Mohamed Ahmed</span>
                        <p className="text-[14px] font-light text-[#a5a5a5]">Lorem ipsum dolor sit amet consectetua.</p>
                    </div>
                </div>
                {/* icons */}
                <div className="flex gap-5">
                    <img src="./phone.png" className="w-5 h-5 cursor-pointer" />
                    <img src="./video.png" className="w-5 h-5 cursor-pointer" />
                    <img src="./info.png" className="w-5 h-5 cursor-pointer" />
                </div>
            </div>

            {/* Center */}
            <div className="p-5 flex-1 overflow-scroll flex flex-col gap-5">
                {/* messages */}
                <MessageItem isOwn={false}/>
                <MessageItem isOwn={true}/>
                <MessageItem isOwn={false}/>
                <MessageItem isOwn={true}/>
                <MessageItem isOwn={false}/>
                <MessageItem isOwn={true}/>
                <MessageItem isOwn={false}/>
                <MessageItem isOwn={true}/>
            </div>

            {/* Bottom */}
            <div className="p-5 flex items-center justify-between border-t border-[#dddddd35] gap-5 mt-auto">
                {/* icons */}
                <div className="flex gap-5">
                    <img src="./img.png" className="w-5 h-5 cursor-pointer" />
                    <img src="./camera.png" className="w-5 h-5 cursor-pointer" />
                    <img src="./mic.png" className="w-5 h-5 cursor-pointer" />
                </div>

                <input type="text" placeholder="Type a message...." onChange={(e) => setText(e.target.value)} value={text}
                    className="flex-1 bg-[rgba(17,25,40,0.5)] border-none outline-none text-white p-5 rounded-[10px] text-[16px] disabled:cursor-not-allowed" />

                {/* emoji  */}
                <div className="relative">
                    <img src="./emoji.png" className="w-5 h-5 cursor-pointer"
                        onClick={() => setShowEmojiPicker((prev) => (!prev))}
                    />
                    {showEmojiPicker && (
                        <div className="absolute bottom-[50px] left-0">
                            <EmojiPicker onEmojiClick={(e) =>
                                setText((prev) => (prev + e.emoji))} />
                        </div>
                    )}
                </div>
                <button className="bg-[#5183fe] text-white px-5 py-2.5 border-none rounded-[5px] cursor-pointer disabled:bg-[#5182feb4] disabled:cursor-not-allowed">Send</button>
            </div>
        </div>
    )
};

export default Chat;

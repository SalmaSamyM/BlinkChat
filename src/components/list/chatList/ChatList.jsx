import { useState } from "react"
import ChatItem from "./ChatItem";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="flex-1 overflow-y-auto">
            {/* Search for and add users */}
            <div className="flex items-center gap-5 p-5 ">
                {/* Search */}
                <div className="flex flex-1 bg-[rgba(17,25,40,0.5)] items-center gap-5 rounded-xl p-2.5">
                    <img src="./search.png" className="w-5 h-5" />
                    <input type="text" placeholder="Search" className="bg-transparent rounded-none outline-none text-white flex" />
                </div>
                {/* Add */}
                <img src={addMode ? "./minus.png" : "./plus.png"} onClick={() => setAddMode((prev) => !prev)}
                    className="w-10 h-10 bg-[rgba(17,25,40,0.5)] rounded-xl p-2.5 cursor-pointer" />
            </div>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </div>
    )
};

export default ChatList;

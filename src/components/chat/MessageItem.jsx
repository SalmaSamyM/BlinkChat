
const MessageItem = ({ isOwn = false }) => {
    return (
        <div className={`max-w-[70%] flex gap-5 ${isOwn ? "self-end" : ""}`} >
            {/* Avatar */}
            {!isOwn && <img src="./avatar.png" className="w-[30px] h-[30px] rounded-full object-cover" /> }
            {/* Texts */}
            <div className="flex flex-1 flex-col gap-1">
                <p
                    className={`p-5 rounded-[10px] ${isOwn
                        ? "bg-[#5183fe] text-white"
                        : "bg-[rgba(255,255,255,0.1)] text-white"
                        }`}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex commodi
                    iure aliquam nam eveniet sapiente error corrupti, saepe ipsam hic
                    totam non sequi, ratione tenetur. Dolor necessitatibus quam
                    praesentium incidunt!
                </p>
                <span className="text-xs">1 min ago</span>
            </div>
        </div>
    );
};

export default MessageItem;

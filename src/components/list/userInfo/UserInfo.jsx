
const UserInfo = () => {
    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-5">
                <img src="./avatar.png" className="w-[50px] h-[50px] rounded-[50%] object-cover" />
                <h1>Salma Samy</h1>
            </div>
            <div className="flex gap-3">
                <img src="./more.png" className="w-5 h-5 cursor-pointer" />
                <img src="./video.png" className="w-5 h-5 cursor-pointer" />
                <img src="./edit.png" className="w-5 h-5 cursor-pointer" />
            </div>

        </div>
    )
};

export default UserInfo;

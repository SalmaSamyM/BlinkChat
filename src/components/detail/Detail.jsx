import { useState } from "react";
import OptionInfo from "./OptionInfo";

const Detail = () => {
  const [openOption, setOpenOption] = useState(null);

  const toggleOption = (option) => {
    setOpenOption(openOption === option ? null : option);
  };

  return (
    <div className="flex-1">
      {/* user info */}
      <div className="px-[30px] py-[30px] flex flex-col items-center gap-[15px] border-b border-[#dddddd35]">
        <img
          src={"./avatar.png"}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
        <h2>Mohamed Ahmed</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Chat Info */}
      <div className="p-5 flex flex-col gap-[30px]">
        {/* Example OptionInfo usage */}
        <OptionInfo
          optionTitle="Chat Settings"
          isOpen={openOption === "Chat Settings"}
          toggle={() => toggleOption("Chat Settings")}
        />

        <OptionInfo
          optionTitle="Privacy & help"
          isOpen={openOption === "Privacy & help"}
          toggle={() => toggleOption("Privacy & help")}
        />


        <OptionInfo
          optionTitle="Shared Photos"
          isOpen={openOption === "Shared Photos"}
          toggle={() => toggleOption("Shared Photos")}
        >
          <div className="flex flex-col gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                    className="w-10 h-10 rounded-[5px] object-cover"
                  />
                  <span className="text-[14px] text-gray-300 font-light">
                    photo_2024_2.png
                  </span>
                </div>
                <img
                  src="./download.png"
                  className="w-[30px] h-[30px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
                />
              </div>
            ))}
          </div>
        </OptionInfo>

        <OptionInfo
          optionTitle="Shared Files"
          isOpen={openOption === "Shared Files"}
          toggle={() => toggleOption("Shared Files")}
        >
          <div className="flex flex-col gap-5">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[14px] text-gray-300 font-light">
                  file_{i}.pdf
                </span>
                <img
                  src="./download.png"
                  className="w-[30px] h-[30px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
                />
              </div>
            ))}
          </div>
        </OptionInfo>

        <button className="p-[15px] bg-[rgba(230,74,105,0.553)] text-white rounded-[5px] cursor-pointer hover:bg-[rgba(220,20,60,0.796)]"> Block User </button>
        <button className="p-2.5 bg-[#1a73e8] text-white rounded-[5px] cursor-pointer hover:bg-blue-700"> Logout </button>
      </div>
    </div>
  );
};

export default Detail;

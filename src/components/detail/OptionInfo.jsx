
const OptionInfo = ({ optionTitle, isOpen, toggle, children }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Header */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <span>{optionTitle}</span>
        <img
          src={isOpen ? "./arrowUp.png" : "./arrowDown.png"}
          className="w-[30px] h-[30px] bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full"
        />
      </div>
      {isOpen && <div className="mt-5">{children}</div>}
    </div>
  );
};

export default OptionInfo;

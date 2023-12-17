import plus from "./../../assets/usersList/plus.png";
const Adduser = () => {
  return (
    <button
      type="button"
      className="flex gap-2 bg-[#7F56D9] hover:bg-[#4b2b9f] border border-[#7F56D9] hover:border-[#4b2b9f] text-[#fff] font-Inter font-semibold text-[14px] py-[10px] px-4 rounded-[8px]"
    >
      <img src={plus} alt="plus icon" />
      <span> Add User</span>
    </button>
  );
};

export default Adduser;

import UploadIcon from "./../../assets/usersList/upload-cloud.png";
const Upload = () => {
  return (
    <label
      htmlFor="fileInput"
      className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-4 cursor-pointer flex items-center space-x-2 text-[#344054] font-Inter text-[14px] font-[600]"
    >
      <img src={UploadIcon} />
      <span>Import File</span>
      <input type="file" id="fileInput" name="fileInput" className="hidden" />
    </label>
  );
};

export default Upload;

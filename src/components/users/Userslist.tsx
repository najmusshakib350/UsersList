import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import DeleteIcon from "./../../assets/usersList/DeleteIcon.png";
import UpdateIcon from "./../../assets/usersList/UpdateIcon.png";
import { useAppSelector, useAppDispatch } from "./../../hooks";
import { RootState } from "./../../redux/store";
import { handleUserList } from "./../../redux/features/userList/userListSlice";
import { Iuser } from "./../../type/type";
import Adduser from "./Adduser";
import Upload from "./Upload";

const Users = () => {
  const dispatch = useAppDispatch();

  const [sortColumn, setSortColumn] = useState<keyof Iuser | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const userList = useAppSelector((state: RootState) => {
    return state.userlist;
  });

  useEffect(function () {
    dispatch(handleUserList({ page: 1, perPage: 5 }));
  }, []);

  const handlePageChange = (newPage: number) => {
    dispatch(handleUserList({ page: newPage, perPage: 5 }));
  };

  const handleSort = (column: keyof Iuser) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };
  const renderSortArrow = (column: keyof Iuser) => {
    if (sortColumn === column) {
      return sortOrder === "asc" ? (
        <FaArrowUp size={14} className="text-[#667085]" />
      ) : (
        <FaArrowDown size={14} className="text-[#667085]" />
      );
    }
    return null;
  };

  const sortedData = [...userList.userlist].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    return a[sortColumn!] > b[sortColumn!] ? order : -order;
  });

  const handleRowSelect = (userId: number) => {
    const id: string = userId.toString();
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((id) => id !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const isRowSelected = (userId: number) => {
    const id: string = userId.toString();
    return selectedRows.includes(id);
  };

  const isAllRowsOnCurrentPageSelected = sortedData.every((user) =>
    isRowSelected(user.id)
  );

  return (
    <div className="container mx-auto ">
      <div className="flex justify-between mt-8">
        <h1 className="text-[#101828] font-Inter text-2xl font-[500]">Users</h1>
        <div className="flex  gap-3">
          <Upload />
          <Adduser />
        </div>
      </div>
      <div className=" rounded-lg overflow-hidden bg-white border border-[#EAECF0] shadow mt-8">
        <table className="w-full ">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#EAECF0] px-6">
              <th className="relative py-3 w-12">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    onChange={() => {
                      const allUserIds = sortedData.map((user) => user.id);
                      const newSelectedRows =
                        selectedRows.length === allUserIds.length
                          ? []
                          : allUserIds;
                      let stringArray: string[] = newSelectedRows.map(String);

                      setSelectedRows(stringArray);
                    }}
                    checked={isAllRowsOnCurrentPageSelected}
                  />
                  <span className="checkmark"></span>
                </label>
              </th>

              <th
                className="cursor-pointer px-3 py-3 text-left "
                onClick={() => handleSort("first_name")}
              >
                <div className="flex gap-1 items-center ">
                  <span className="text-[#667085] font-Inter text-xs font-[500]">
                    User Info
                  </span>
                  {renderSortArrow("first_name")}
                </div>
              </th>
              <th className="cursor-pointer px-3 py-3 text-left ">
                <span className="text-[#667085] font-Inter text-xs font-[500]">
                  About
                </span>
              </th>

              <th className="cursor-pointer px-3 py-3 text-left ">
                <span className="text-[#667085] font-Inter text-xs font-[500]">
                  Status
                </span>
              </th>
              <th className="cursor-pointer px-3 py-3 text-left ">
                <span className="text-[#667085] font-Inter text-xs font-[500]"></span>
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedData.map((user) => (
              <tr key={user.id} className="border-b border-[#EAECF0]">
                <td className="relative py-3">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      onChange={() => handleRowSelect(user.id)}
                      checked={isRowSelected(user.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td className="cursor-pointer px-3 py-3 text-left ">
                  <div className="flex gap-3 items-center">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h6 className="text-[#101828] font-Inter font-[500] text-[14px] mb-1">
                        {user.first_name}
                      </h6>
                      <p className="text-[#667085] font-Inter font-normal text-[14px]">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="cursor-pointer px-3 py-3 text-left ">
                  <h6 className="text-[#101828] font-Inter font-[500] text-[14px] mb-1">
                    Some dummy Content
                  </h6>
                  <p className="text-[#667085] font-Inter font-normal text-[14px]">
                    Brings all your news into one place
                  </p>
                </td>
                <td className="cursor-pointer px-3 py-3 text-left ">
                  <span className="text-[#667085] font-Inter text-xs font-[500]">
                    Random Sticker Label
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                  >
                    <img src={DeleteIcon} alt="DeleteIcon" />
                  </button>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                  >
                    <img src={UpdateIcon} alt="UpdateIcon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-3">
          <button
            onClick={() => handlePageChange(userList.page - 1)}
            disabled={userList.page === 1}
            className="border border-[#D0D5DD] py-2 px-[14px] rounded-[8px] text-[#344054] font-Inter text-[14px] font-[500]"
          >
            Previous
          </button>
          <span className=" text-[#344054] font-Inter text-[14px] font-[500]">
            Page {userList.page} of {userList.total_pages}
          </span>
          <button
            onClick={() => handlePageChange(userList.page + 1)}
            disabled={userList.page === userList.total_pages}
            className="border border-[#D0D5DD] py-2 px-[14px] rounded-[8px] text-[#344054] font-Inter text-[14px] font-[500]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

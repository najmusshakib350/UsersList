import { useState, useEffect } from "react";
import stackImage from "./../../assets/signUp/image-1.png";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./../../hooks";
import { RootState } from "./../../redux/store";
import { useNavigate } from "react-router-dom";

import {
  handleChange,
  handleSubmit,
} from "./../../redux/features/signUp/signupSlice";
import { IcheckUserInfo } from "./../../type/type";

const Form = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<IcheckUserInfo>({
    emailIsEmpty: "",
    passwordIsEmpty: "",
  });

  const signupState = useAppSelector((state: RootState) => {
    return state.signup;
  });
  useEffect(
    function () {
      console.log("Hello chatk i am else functokn");
      if (signupState.token) {
        navigate("/users");
      }
    },
    [signupState]
  );
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setError((prev) => {
      return {
        ...prev,
        emailIsEmpty: "",
        passwordIsEmpty: "",
      };
    });
    dispatch(
      handleChange({
        ...signupState,
        [event.target.name]: event.target.value,
      })
    );
  }
  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!signupState.email && !signupState.password) {
      setError((prev) => {
        return {
          ...prev,
          emailIsEmpty: "This field is required",
          passwordIsEmpty: "This field is required",
        };
      });
    } else if (!signupState.email) {
      setError((prev) => {
        return {
          ...prev,
          emailIsEmpty: "This field is required",
        };
      });
    } else if (!signupState.password) {
      setError((prev) => {
        return {
          ...prev,
          passwordIsEmpty: "This field is required",
        };
      });
    } else {
      dispatch(handleSubmit(signupState));
    }
  }
  return (
    <div className="shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[62px] py-[63px] rounded-2xl border border-[#EEE]">
      <div className="flex gap-3 items-center mb-4">
        <img src={stackImage} alt="stack image" />
        <h1 className="text-[#4E5D78] font-Inter font-bold text-[28px]">
          Stack
        </h1>
      </div>
      <h5 className="text-[#404040] font-Inter font-semibold text-[20px] mb-8">
        Sign up to join with Stack
      </h5>
      <p className="text-[#F04438] font-Inter font-normal text-[14px] mb-2">
        {signupState.errMsg === "" ? "" : signupState.errMsg}
      </p>
      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label
            className="block text-[#344054] text-sm font-Inter font-[500] mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`${
              error.emailIsEmpty === ""
                ? "border-[#101828] outline-[#D6BBFB]"
                : "border-[#F04438] outline-[#FDA29B]"
            } border w-full py-[10px] px-[14px] text-[#101828] placeholder:text-[#A9ACB5] placeholder:text-base placeholder:font-Inter placeholder:font-normal outline outline-4  rounded-lg`}
            id="email"
            type="email"
            placeholder="Enter Email"
            name="email"
            value={signupState.email}
            onChange={handleChangeInput}
          />
          <p className="text-[#F04438] font-Inter font-normal text-[14px] mt-2">
            {error.emailIsEmpty === "" ? "" : error.emailIsEmpty}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-[#344054] text-sm font-Inter font-[500] mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`${
              error.passwordIsEmpty === ""
                ? "border-[#101828] outline-[#D6BBFB]"
                : "border-[#F04438] outline-[#FDA29B]"
            } border w-full py-[10px] px-[14px] text-[#101828] placeholder:text-[#A9ACB5] placeholder:text-base placeholder:font-Inter placeholder:font-normal outline outline-4  rounded-lg`}
            id="password"
            type="password"
            placeholder="******"
            name="password"
            value={signupState.password}
            onChange={handleChangeInput}
          />
          <p className="text-[#F04438] font-Inter font-normal text-[14px] mt-2">
            {error.passwordIsEmpty === "" ? "" : error.passwordIsEmpty}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="py-[10px] px-[18px] bg-[#6941C6] hover:bg-[#4b2b9f] border border-[#6941C6] hover:border-[#4b2b9f] text-[#FFF] font-Inter font-semibold rounded-lg w-full mb-4"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div>
        <p>
          <span className="text-[#B0B7C3] font-Inter font-[500] text-base">
            Already have an account?{" "}
          </span>
          <NavLink
            to="/signin"
            className="text-[#377DFF] font-Inter font-[500] text-base"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Form;

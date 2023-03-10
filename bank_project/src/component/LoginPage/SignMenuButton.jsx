import React from 'react'
import { LockClosedIcon,} from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';

     // 로그인 페이지 하단 영역
export default function SignMenuButton() {
    const navigate = useNavigate();

     // 회원가입 페이지 이동
    const openUserAuthPage = () => {
        navigate("/SignIn");
      };

  return (
    <div>
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500	 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <LockClosedIcon className="h-5 w-5 text-green-700 group-hover:text-green-400" />
      </span>
      로그인
    </button>
    <br></br>
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={openUserAuthPage}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <LockClosedIcon
          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
          aria-hidden="true"
        />
      </span>
      가입하기
    </button>
  </div>
  )
}

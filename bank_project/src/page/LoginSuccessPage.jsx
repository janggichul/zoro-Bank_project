import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Auth } from "../App";
import ChartPage from "../component/chart/ChartPage";
import { LoginState } from "../component/LoginState";
import AccountLink from "../component/SuccessPage/AccountLink";
import QuickMenu from "../component/SuccessPage/QuickMenu";
import SelectMenu from "../component/SuccessPage/SelectMenu";

export default function Test() {
  const [user, setUser] = useRecoilState(LoginState);
  const [button, setButton] = useState(false)

  const navigate = useNavigate();

  const Profile = () => {
    signOut(Auth)
      .then((result) => {
        navigate("/");
        window.location.reload();
        localStorage.removeItem('account')
        // console.log("로그아웃", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div class="mx-auto max-w-[450px]">
      <div class="h-full bg-gray-50">
        <div class="rounded-b-xl bg-indigo-600 p-5 pb-44 text-white">
          <div class="mb-4 flex items-center justify-between">
            <div class="rounded-lg p-3 bg-transparent">
              <button class='w-14'></button>
            </div>
            <h1 class="text-center text-3xl font-semibold">제로은행</h1>
            <button class="rounded-lg bg-indigo-50/30 p-2 hover:bg-white hover:text-indigo-500" onClick={Profile}>
                로그아웃
            </button>
          </div>
          <div class="space-y-2 text-center">
            <div class="text-slate-200">
              <span>반갑습니다</span>
            </div>
            <div class="text-2xl font-bold tracking-wider">{`${user.user.displayName}님`}</div>
          </div>
        </div>
        <AccountLink user={user} />
        {button !== true &&<SelectMenu user={user} />}
        {button === true && <ChartPage />}
        <QuickMenu button={setButton}/> 
      </div>
    </div>
  );
}
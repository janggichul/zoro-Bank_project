import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Auth } from "../App";
import ChartPage from "../component/chart/ChartPage";
import { LoginState } from "../component/LoginState";
import AccountLink from "../component/SuccessPage/AccountLink";
import QuickMenu from "../component/SuccessPage/QuickMenu";
import SelectMenu from "../component/SuccessPage/SelectMenu";
import dummy from "../data/dummy.json";

export default function Test() {
  const [user, setUser] = useRecoilState(LoginState);
  const [button, setButton] = useState(false)

  const navigate = useNavigate();

  const Profile = () => {
    signOut(Auth)
      .then((result) => {
        navigate("/");
        window.location.reload();
        // console.log("로그아웃", result);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const str = user.user.uid;
  const first = str.charAt(-1);
  // console.log(first);

  const userData = dummy.words.filter((word) => word.id == first);

  console.log("user", userData);

  useEffect(() => {
    console.log(user);
  }, []);

  // console.log("dum", dummy);

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
            <div class="text-slate-200">$0.24 - 1,112 Sats</div>
          </div>
        </div>
        <AccountLink />
        {button !== true &&<SelectMenu user={user} />}
        {button === true && <ChartPage />}
        <QuickMenu button={setButton}/> 
      </div>
    </div>
  );
}

{
  /* <div>{`안녕하세요? ${user.user.displayName}님`}</div>
  <form onSubmit={Profile}>
  <button type="submit" >로그아웃</button>
  <div>
    <tbody>
      {userData.map(word => (
        <tr>
      <td>{word.eng}</td>
      <td>{word.kor}</td>
    </tr>
    ))}
    </tbody>
  </div>
  </form> */
}

// X버튼
{/* <button
type="button"
class="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100"
>
&times;
</button> */}
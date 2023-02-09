import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LoginState } from '../component/AtomState';
import { Auth } from '../App';
import { useCookies } from 'react-cookie';
import SignMenuButton from '../component/LoginPage/SignMenuButton';
import Swal from 'sweetalert2';

export default function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggined, setIsLoggined] = useState(false);
  const [idValue, setIdValue] = useRecoilState(LoginState);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
  const [isRemember, setIsRemember] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setIsLoggined(true);
      } else {
        setIsLoggined(false);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setEmail(cookies.rememberUserId);
      console.log('ff', cookies.rememberUserId);
      setIsRemember(true);
    }
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(Auth, email, password).then((result) => {
      console.log("result", result);
      navigate('/bank');
      window.location.reload();
      setIdValue(result);
    }).catch((error) => {
            if(error.code == 'auth/wrong-password'){
              Swal.fire({
                text: '아이디 또는 비밀번호를 확인해주세요!',
                width: 350,
                padding: 10,
                confirmButtonText: '확인',
              })
      }
    })
    ;
  };

  const handelLogin = (e) => {
    e.preventDefault();
    if(password.length < 6){
      alert("비밀번호를 6자리 이상 입력해주세요.")
    } else {
      signIn();
    }
  };

  const handleCheck = (e) => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie('rememberUserId', email, { maxAge: 2000 });
    } else {
      removeCookie('rememberUserId');
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(Auth, provider)
    .then((result) => {
      navigate('/bank')
      window.location.reload();
      setIdValue(result);
    console.log('data', result)
    },
    ).catch((error) => {
        console.log(error)
    })
  }

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handelLogin}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="이메일 입력"
              defaultValue={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="영문자, 숫자 혼용(6~18자)"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={isRemember}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              onChange={handleCheck}
            />
            <label className="ml-2 block text-sm text-gray-900">
              아이디 저장
            </label>
          </div>
          <button
            type='reset'
            className="group relative flex justify-center rounded-md border border-gray-300	bg-white py-2 px-4 text-sm font-medium text-black hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleGoogleLogin}
          >
            구글 로그인
          </button>
        </div>
        <SignMenuButton />
      </form>
    </>
  );
}

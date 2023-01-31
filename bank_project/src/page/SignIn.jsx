/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { db } from '../App';
import { doc, getDoc, setDoc, } from 'firebase/firestore';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.currentTarget.value);
  };

  const handelEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handelPassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handelConfirmPassword = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  // 이름, 이메일 값 배열의 저장
  const emailRef = doc(db, 'duplication', 'state')

  const writeUserData = async () => {
    const docSnap = await getDoc(emailRef)
    const arr = docSnap.data().email
    const arr2 = docSnap.data().name
    console.log('arr', arr)
    const docData = {
        email : [...arr, email],
        name : [...arr2, name]
    }
    await setDoc((emailRef), docData )
  };
  // 이메일 중복 여부 확인
  const handleDuplicationButton = async () => {
      const docSnap = await getDoc(emailRef);
      if (docSnap.exists()) {
          const array = docSnap.data().email
          if (array.find(e => e === email)) {
              alert('다른 사용자가 이용중입니다. ');
            } else {
                alert('사용가능한 이메일입니다.');
            }
        } else {
            console.log('No such document!');
        }
        console.log(docSnap.data())
    };
  const signUp = async ({ e }) => {
      writeUserData();
      if (password !== confirmPassword) {
          return alert('비밀번호가 같지 않습니다.');
        }
        const auth = getAuth();
        const result = createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            updateProfile(auth.currentUser, { displayName: name });
        })
        .catch((error) => {
            if (error.code == 'auth/email-already-in-use') {
                alert('이메일이 중복되었습니다.');
                navigate('/signIn');
            }
        });
    console.log(result);
    navigate('/');
  };


  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmit(signUp)}>
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">회원가입</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              autoComplete="current-name"
              required
              value={name}
              onChange={handleName}
              placeholder="이름"
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              autoComplete="current-email"
              value={email}
              onChange={handelEmail}
              placeholder="이메일"
            />
            <button
              type="reset"
              onClick={handleDuplicationButton}
              className="rounded-md mb-3 -mt-2 border border-transparent bg-indigo-600 py-2 px-2 font-bold text-xs text-white hover:bg-indigo-700"
            >
              이메일 중복확인
            </button>
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              autoComplete="current-password"
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8}/,
                  message: '영문 숫자를 혼용하여 6자리 이상 입력해주세요.',
                },
              })}
              value={password}
              onChange={handelPassword}
              placeholder="비밀번호"
            />
            {errors.password && (
              <p class="flex m-2.5 text-red-500 text-xs align-center ">
                {errors.password.message}{' '}
              </p>
            )}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              autoComplete="current-password"
              required
              value={confirmPassword}
              onChange={handelConfirmPassword}
              placeholder="비밀번호 확인"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              가입하기
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              회원가입을 하시면 다음을 동의합니다.
              <br></br>
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                서비스 정책, 회원가입 약관, 개인 정보 보호 정책
              </a>
            </div>
          </div>

          <div className="text-grey-900 mt-6">
            이미 계정이 있습니까?
            <a
              className="no-underline border-b border-blue text-blue-500 text-center"
              href="/"
            >
              로그인
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

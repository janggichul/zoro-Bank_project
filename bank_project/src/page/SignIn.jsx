/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const handleName = (e) => {
        setName(e.currentTarget.value)

    }

    const handelEmail = (e) => {
        setEmail(e.currentTarget.value)
    }

    const handelPassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const handelConfirmPassword = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    
    const signUp = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            return alert('비밀번호가 같지 않습니다.')
        }
        const auth = getAuth()
        const result = createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            updateProfile(auth.currentUser, {displayName : name})
        })
        // await updateProfile(auth.currentUser, {displayName: name})
        console.log(result)
        navigate('/')
    }

  return (
      <div className="bg-grey-lighter min-h-screen flex flex-col">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={signUp}>
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
                placeholder="이름" />

            <input 
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                autoComplete="current-email"
                required
                value={email}
                onChange={handelEmail}
                placeholder="이메일" 
                />

            <input 
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={handelPassword}
                placeholder="비밀번호" />
            <input 
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                autoComplete="current-password"
                required
                value={confirmPassword}
                onChange={handelConfirmPassword}
                placeholder="비밀번호 확인" />

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >가입하기</button>

            <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div className="text-grey-900 mt-6">
            이미 계정이 있습니까?  

            <a className="no-underline border-b border-blue text-blue-500 text-center" href="/">
                로그인
            </a>.
        </div>
    </form>
    </div>
</div>
  )
}

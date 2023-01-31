import React, { useEffect, useState } from 'react'
import Main from '../../page/main'
import Header from '../Header'
import LoadingPage from '../Loading/LoadingPage'

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  },[])

  if(isLoading) return(
    <LoadingPage />
  )
  return (

<div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className=" w-screen max-w-xs space-y-8">
          <div>
            <img
              className="mx-auto h-14 w-auto "
              src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202203/113618-552/frame-624945.png"
              alt="Your Company"
            />
            <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
              <Header title="제로은행"></Header>
            </h2>
            <p className="font-medium text-indigo-600 hover:text-indigo-500 mt-6 text-center text-sm text-gray-600">
              이메일과 비밀번호를 입력해주세요.
            </p>
          </div>
          <Main />
          </div>
      </div>
            )
}

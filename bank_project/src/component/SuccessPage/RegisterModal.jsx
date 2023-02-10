import React, { useEffect, useState } from 'react';
import Register from '../Loading/Register';

 // 계좌연동 모달 페이지
export default function RegisterModal(props) {
  const { user, setShow, setRegisterModal } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // 모달페이지 취소시 연동페이지 이동

  const handleCloseModal = () => {
    setRegisterModal(false);
    // storage 삭제
    // setShow(false);
    // localStorage.removeItem('account')
  };

  const handleCheckButton = () => {
    if(user.user.photoURL === undefined) {
      alert("등록된 계좌번호가 없습니다.")
    } else {
      setRegisterModal(false);
      setShow(true)
      localStorage.setItem('account', user.user.photoURL)
      window.location.reload();
    }
  };

  console.log('계정', user)



  if (isLoading) return <Register />;

  return (
    <>
      <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-10">
        <div class="bg-white px-12 py-12 rounded-md text-center">
          <h1 class="text-lg mb-4 font-bold text-slate-500">{`${user.user.displayName}님의 계좌정보를 불러왔습니다.`}</h1>
          <h3 class="mb-4 font-bold text-slate-700 text-left">제로은행</h3>
          <h3 class="mb-7 font-bold text-slate-700 text-left">
            {`계좌번호 : ${user.user.photoURL}`}
          </h3>
          <button
            class="bg-indigo-500 px-5 py-2 rounded-md text-md text-white font-semibold"
            onClick={handleCheckButton}
          >
            연동하기
          </button>
          <button
            class="bg-red-500 px-4 py-2 rounded-md ml-6 text-md text-white"
            onClick={handleCloseModal}
          >
            취소
          </button>
        </div>
      </div>
    </>
  );
}

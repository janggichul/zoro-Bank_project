import React from 'react'
import { useRecoilState } from 'recoil';
import Inputter from '../BalanceCheck/Inputter';
import {TrasferState } from '../AtomState';
import TransferInputter from './TransferInputter';

export default function TransferPassword() {
  const [cancel, setCancel] = useRecoilState(TrasferState);


  const handleCancelButton = () => {
    setCancel(!cancel)
  }
  return (
    <>  
    <div class="bg-slate-800 bg-opacity-10 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0 z-10">
<div class="w-96	 bg-white rounded-lg">
  <button class="mt-4 mr-4 flex items-center float-right" onClick={handleCancelButton}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  </button>
    <h1 class="text-black text-center mt-10 text-2xl font-bold" >2차 비밀번호</h1>
    <p class="text-red-500 text-center text-xl font-bold" >(123456)</p>
    <TransferInputter />
    </div>
    </div>
</>
  )
}

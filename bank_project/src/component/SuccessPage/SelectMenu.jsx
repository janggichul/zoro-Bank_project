import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { balanceCheckState, ShowState, TrasferState } from '../AtomState';
import BalanceCheck from '../BalanceCheck/BalanceCheck';
import Swal from 'sweetalert2';
import Password from '../BalanceCheck/Password';
import Transfer from '../AccountTransfer/Transfer';
import TransferPassword from '../AccountTransfer/TransferPassword';

export default function SelectMenu(props) {
  const { user } = props;
  const [balanceCheck, setBalanceCheck] = useRecoilState(balanceCheckState);
  const [accountTransfer, setAccountTransfer] = useRecoilState(TrasferState)
  const [show, setShow] = useRecoilState(ShowState);

  const handleBalanceCheckButton = () => {
    if (show === false) {
      Swal.fire({
        text: `${user.user.displayName}님 계좌연동을 먼저 해주세요.`,
        width: 350,
        padding: 10,
        confirmButtonText: '확인',
      });
    } else {
      setBalanceCheck(!balanceCheck);
    }
  };
  const handleAcountTransferButton = () => {
    setAccountTransfer(!accountTransfer)
  }

  return (
    <section class="p-5">
      <div class="mb-5 flex items-center justify-between">
        <h4 class="font-medium text-slate-500 ">
          원하시는 메뉴를 선택해 주세요.
        </h4>
      </div>
      <div class="">
        <button class="w-full text-left" onClick={handleBalanceCheckButton}>
          <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm items-center mb-4">
            <svg class="aspect-square w-16 rounded-lg bg-center object-cover fill-white stroke-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            <div>
              <h4 class="font-semibold text-gray-600">잔액조회</h4>
              <p class="text-sm text-slate-400">
                {`${user.user.displayName}님의 잔액을 조회합니다.`}
              </p>
            </div>
          </div>
        </button>
        {balanceCheck && <Password />}
        <div></div>
        <button class="w-full text-left" onClick={handleAcountTransferButton}>
          <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm items-center mb-2">
            <svg class="aspect-square w-16 rounded-lg bg-center object-cover  fill-white stroke-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

            <div>
              <h4 class="font-semibold text-gray-600">계좌이체</h4>
              <p class="text-sm text-slate-400">계좌이체를 진행합니다.</p>
            </div>
          </div>
        </button>
        {accountTransfer && <TransferPassword />}
      </div>
    </section>
  );
}

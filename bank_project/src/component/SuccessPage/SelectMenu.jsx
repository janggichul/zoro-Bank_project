import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { balanceCheckState, ShowState } from '../LoginState';
import BalanceCheck from '../BalanceCheck/BalanceCheck';
import Swal from 'sweetalert2';

export default function SelectMenu(props) {
  const { user } = props;
  const [balanceCheck, setBalanceCheck] = useRecoilState(balanceCheckState);
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
            <img
              class="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://iconscout.com/iconscout_logo-1024x1024.png"
              alt=""
            />
            <div>
              <h4 class="font-semibold text-gray-600">잔액조회</h4>
              <p class="text-sm text-slate-400">
                {`${user.user.displayName}님의 잔액을 조회합니다.`}
              </p>
            </div>
          </div>
        </button>
        {balanceCheck && <BalanceCheck />}
        <div></div>
        <button class="w-full text-left">
          <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm items-center mb-2">
            <img
              class="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://iconscout.com/iconscout_logo-1024x1024.png"
              alt=""
            />
            <div>
              <h4 class="font-semibold text-gray-600">계좌이체</h4>
              <p class="text-sm text-slate-400">계좌이체를 진행합니다.</p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

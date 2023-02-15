import React, { useEffect, useState } from 'react';
import dummy from '../../data/dummy.json';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


  // 계좌이체 페이지
export default function Transfer() {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [account, setAccount] = useState();

  const Lastsort = dummy.inquiry.sort((a, b) => b.num - a.num);
  const result = Lastsort.find((el) => el !== undefined);
  const handleCancel = () => {
    navigate('/bank');
  };

  const handleAmountButton = (e) => {
    setAmount(e.target.value);
  };

  const handleAccount = (e) => {
    setAccount(e.target.value);
  };

  const handleTransferButton = () => {
    if (Number(result.curamt) < Number(amount)) {
      Swal.fire({
        text: '잔액이 부족합니다.',
        width: 350,
        padding: 10,
        confirmButtonText: '확인',
      });
    }else {
      Swal.fire({
        text: '송금을 완료하였습니다.',
        width: 350,
        padding: 10,
        confirmButtonText: '확인',
      }).then(function() {
        window.location.href='/bank'
      })
    }
    result.curamt -= amount
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <section class="bg-gray-50 mx-auto mt-6 max-w-[450px]">
      <div class="py-4 transition duration-150 ease-in-out z-10 " id="modal">
        <div role="alert" class="container mx-auto w-11/12 md:w-4/5 max-w-lg">
          <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div class="w-full flex justify-start text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-wallet"
                width="52"
                height="52"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            </div>
            <h1 class="text-gray-800 text-2xl font-bold tracking-normal leading-tight mb-4">
              {result.curamt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </h1>
            <form onSubmit={handleSubmit(handleTransferButton)}>
              <label
                for="name"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                보내는 사람
              </label>
              <input
                id="name"
                class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="이름"
                required
              />
              <label
                for="name"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                은행
              </label>
              <section>
                <option
                  class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  value=""
                >
                  제로은행
                </option>
              </section>
              <label
                for="email2"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                계좌번호
              </label>
              <div class="relative mb-5 mt-2">
                <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-credit-card"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                  </svg>
                </div>
                <input
                  id="account"
                  name="account"
                  class="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                  placeholder="XXX - XXXX - XXXXX"
                  {...register('account', {
                    required: '계좌번호를 입력해주세요',
                    pattern: {
                      value: /^(?=.*\d)(?=.*[0-9]).{12}/,
                      message: '12자리 이상의 계좌번호를 입력해주세요.',
                    },
                  })}
                  value={account}
                  onChange={handleAccount}
                />
                    </div>
                {errors.account && (
                  <p class="flex m-2.5 -mt-2 text-red-500 text-xs align-center ">
                    {errors.account.message}{' '}
                  </p>
                )}
              <label
                for="cvc"
                class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                이채금액
              </label>
              <div class="relative mb-5 mt-2">
                <div class="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-info-circle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                  </svg>
                </div>
                <input
                  id="cvc"
                  class="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="얼마나 보낼까요?"
                  value={amount}
                  onChange={handleAmountButton}
                  required
                />
              </div>
              <div class="flex items-center justify-center w-full">
                <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                  type="submit"
                >
                  이체하기
                </button>
              </div>
              <button
                class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={handleCancel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

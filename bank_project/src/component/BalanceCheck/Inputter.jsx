import React, { useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import { balanceCheckState } from '../LoginState';
import BalanceCheck from './BalanceCheck';

const PASSWORD_MAX_LENGTH = 6;

  // 잔액조회 2차 비밀번호 입력기

export default function Inputter(props) {

  const {onClickButton} = props

  console.log("테스트", onClickButton)
  let nums_init = Array.from({ length: 10 }, (v, k) => k);

  const [nums, setNums] = useState(nums_init);
  const [password, setPassword] = useState('');
  const [cancel, setCancel] = useRecoilState(balanceCheckState);
  const [state, setState] = useState(false)
  const navigate = useNavigate()

  const handlePasswordChange = useCallback(
    (num) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return;
      }
      setPassword(password + num.toString());
    },
    [password],
  );

  const erasePasswordOne = useCallback(
    (e) => {
      setPassword(
        password.slice(0, password.length === 0 ? 0 : password.length - 1),
      );
    },
    [password],
  );

  const erasePasswordAll = useCallback((e) => {
    setPassword('');
  }, []);

  const shuffleNums = useCallback(
    (num) => (e) => {
      let nums_random = Array.from({ length: 10 }, (v, k) => k);
      setNums(nums_random);
      handlePasswordChange(num);
    },
    [handlePasswordChange],
  );

  const onClickSubmitButton = (e) => {
    onClickButton()
    if (password !== '123456') {
      Swal.fire({
        text: '2차 비밀번호를 확인해주세요.',
        width: 350,
        padding: 10,
        confirmButtonText: '확인',
      });
    } else {
      // setState(!state)
      setCancel(!cancel)
      navigate('/balanceCheck')
    }
  };
  return (
    <>
      <input
        type="password"
        value={password}
        class="flex bg-inherit text-center text-4xl m-auto text-indigo-500 my-4"
      />
      <div class="text-center">
        {nums.map((n, i) => {
          const Basic_button = (
            <button
              class="w-28 h-16 overflow-hidden outline-none focus:outline-none bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold"
              type="submit"
              value={n}
              onClick={shuffleNums(n)}
              key={i}
            >
              {n}
            </button>
          );
          return i == nums.length - 1 ? (
            <>
              <button
                className="bg-indigo-600 w-28 h-16 overflow-hidden outline-none focus:outline-none hover:bg-indigo-700 text-white text-xl font-bold"
                onClick={erasePasswordAll}
              >
                전체삭제
              </button>
              {Basic_button}
            </>
          ) : (
            Basic_button
          );
        })}
        <button
          class="bg-indigo-600 w-28 h-16 overflow-hidden outline-none focus:outline-none hover:bg-indigo-400 text-white text-xl font-bold"
          onClick={erasePasswordOne}
        >
          삭제
        </button>
      </div>
      <div>
        <button
          type="submit"
          class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs font-bold py-3 px-10 rounded my-4"
          onClick={onClickSubmitButton}
        >
          확인
        </button>
      </div>
        {/* {state && <BalanceCheck />} */}
    </>
  );
}

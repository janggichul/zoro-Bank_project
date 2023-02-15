// import "./styles.css";
import React, { useCallback, useState } from 'react';
import dummy from '../../data/dummy.json';

import MonthView from './MonthView';
import AllInquiryView from './AllInquiryView';
import FilterButton from './FilterButton';
import { ShowState } from '../LoginState';
import { useRecoilState } from 'recoil';

const data = dummy.inquiry;

// console.log('data', data);

export default function ChartPage() {
  const [button, setButton] = useState(false);
  const [show, setShow] = useRecoilState(ShowState);

 if(show === false) {
  return (
    <div class="space-x-4 rounded-xl bg-white p-4 shadow-sm w-80 ml-16 items-center mb-60">
        <h4 class="text-center font-semibold text-gray-600">계좌연동을 먼저 해주세요.</h4>
    </div>
  )
 }


  return (
    <div class="mx-auto w-min">
      <div class="flex justify-between">
        <h1 class="mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold">
          이용현황
        </h1>
        <div class="flex">
          <FilterButton button={setButton}/>
        </div>
      </div>
          {button !== true && <AllInquiryView data={data} button={button}/>}
          {button === true && <MonthView data={data} />}
    </div>
  );
}


import React, { useState } from 'react';
import dummy from '../../data/dummy.json';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function MonthView(props) {
  const { data } = props;

  const [month, setMonth] = useState([]);
  const [state, setState] = useState(false);
  const click = Array.from(data);

  const handleMonthView = () => {
    const result = click.filter((e) => e.month === monthMap[0]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView1 = () => {
    const result = click.filter((e) => e.month === monthMap[1]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView2 = () => {
    const result = click.filter((e) => e.month === monthMap[2]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView3 = () => {
    const result = click.filter((e) => e.month === monthMap[3]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView4 = () => {
    const result = click.filter((e) => e.month === monthMap[4]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView5 = () => {
    const result = click.filter((e) => e.month === monthMap[5]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView6 = () => {
    const result = click.filter((e) => e.month === monthMap[6]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView7 = () => {
    const result = click.filter((e) => e.month === monthMap[7]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView8 = () => {
    const result = click.filter((e) => e.month === monthMap[8]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView9 = () => {
    const result = click.filter((e) => e.month === monthMap[9]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };
  const handleMonthView10 = () => {
    const result = click.filter((e) => e.month === monthMap[10]);
    if (monthMap[0]) {
      setMonth(result);
    }
  };

  const monthMap = [...new Set(click.map((idx) => idx.month))];
  
  return (
    <>
        <button
          className={`${
            !state
              ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
              : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
          }`}
          value={month}
          onClick={handleMonthView}
        >
          1월
        </button>

      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView1}
      >
        2월
      </button>

      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView2}
      >
        3월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView3}
      >
        4월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView4}
      >
        5월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView5}
      >
        6월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView6}
      >
        7월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView7}
      >
        8월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView8}
      >
        9월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView9}
      >
        10월
      </button>
      <button
        className={`${
          !state
            ? 'ml-5 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold'
            : 'ml-5 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold'
        }`}
        value={month}
        onClick={handleMonthView10}
      >
        11월
      </button>

      <ComposedChart
        layout="vertical"
        width={350}
        height={600}
        data={month}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" unit="만원" domain={[0, 'dataMax + 50']} />
        <YAxis dataKey="day" type="category" scale="auto" />
        <Tooltip />
        <Legend />
        {/* <Area dataKey="curamt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar
          dataKey="deposit"
          barSize={15}
          fill="#413ea0"
          unit="만원"
          name="입금"
        />
        <Line dataKey="withdraw" stroke="#ff7300" unit="만원" name="출금" />
      </ComposedChart>
    </>
  );
}

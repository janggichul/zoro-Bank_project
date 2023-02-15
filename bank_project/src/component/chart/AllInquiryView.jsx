import React from 'react';
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

export default function AllInquiryView(props) {
  const { data } = props;
  return (
    <>
    <div>
      </div>
      <ComposedChart
        layout="vertical"
        width={350}
        height={600}
        data={data}
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

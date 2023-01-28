import React from 'react';

export default function LoadingPage() {
  return (
      <div class="flex items-center justify-center min-h-screen">
    <div>
      <img
        className="mx-auto w-auto"
        src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202203/113618-552/frame-624945.png"
        alt="Your Company"
      />
        <p class="mb-10 text-center text-3xl font-bold tracking-tight">제로은행</p>
        <div class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin border-t-transparent mx-auto " ></div>
        <p class="my-10">잠시만 기다려주세요.</p>
        <div>
        </div>
      </div>
    </div>
  );
}

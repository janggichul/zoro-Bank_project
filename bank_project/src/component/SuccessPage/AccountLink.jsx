import React from 'react'

export default function AccountLink() {
  return (
    <div class="-mt-40 p-5">
          <div class="rounded-xl bg-white p-4 font-medium text-slate-500 shadow-sm">
            <div class="mb-3 text-sm">제로은행 계좌번호</div>
            <div class="mb-3">
              <div class="h-4 w-full overflow-hidden rounded-full bg-slate-100">
                <div class="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              </div>
            </div>
            <div class="mb-4 flex justify-between">
              <div class="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
                test
              </div>
              <div class="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
                test
              </div>
              <div class="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
                test
              </div>
            </div>
            <button class="flex w-full items-center justify-center rounded-lg bg-gray-800 py-4 px-5 font-medium tracking-wide text-white text-opacity-90 shadow-slate-100 hover:shadow-lg">
              <span class="mr-2">계좌등록 하기</span>
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  )
}

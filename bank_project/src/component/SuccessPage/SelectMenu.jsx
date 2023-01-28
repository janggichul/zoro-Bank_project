import React from 'react'

export default function SelectMenu(props) {
    const {user} = props
    
  return (
    <section class="p-5">
          <div class="mb-5 flex items-center justify-between">
            <h4 class="font-medium text-slate-500">원하시는 메뉴를 선택해 주세요.</h4>
          </div>
          <div class="space-y-2">
            <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm items-center">
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
              <div>
              </div>
            </div>
            <div class="flex space-x-4 rounded-xl bg-white p-3 shadow-sm items-center">
              <img
                class="aspect-square w-16 rounded-lg bg-center object-cover"
                src="https://iconscout.com/iconscout_logo-1024x1024.png"
                alt=""
              />
              <div>
                <h4 class="font-semibold text-gray-600">계좌이체</h4>
                <p class="text-sm text-slate-400">
                  계좌이체를 진행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

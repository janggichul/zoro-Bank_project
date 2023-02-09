import React from 'react'

export default function ActivePage({posts}) {
  
  return (
    <>
    {posts.map((item, idx) => (
            <>
              <ul
                key={item.num}
                class="font-normal px-4 text-2xl text-gray-700"
              >
                <li class="text-slate-600 font-bold text-xl mt-2">
                  {item.day}
                </li>
                <ul class="flex justify-between">
                  <li class="ml-6">{item.dti}</li>
                  <li>
                    {item.amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </li>
                </ul>
                <li class="text-right text-xl text-gray-600">
                  {item.curamt
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </li>
              </ul>
            </>
          ))}
    </>
  )
}

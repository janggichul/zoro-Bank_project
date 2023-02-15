import React, { useState } from 'react'

export default function FilterButton({button}) {
    const [state, setState] = useState(false)

    const handleHomeButton = () => {
        button(false)
        setState(false)
      }
      const handleChartButton = () => {
        button(true)
        setState(true)
      }

  return (
    <div class="flex">
        <button onClick={handleHomeButton} className={`${!state ? "mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold" : "mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold"}`}>전체</button>
        <button onClick={handleChartButton} className={`${state ? "ml-2 mb-4 w-16 text-center bg-indigo-500 h-max rounded-lg text-white font-bold" : "ml-2 mb-4 w-16 text-center bg-indigo-400 h-max rounded-lg text-white font-bold"}`}>월별</button>
    </div>
  )
}

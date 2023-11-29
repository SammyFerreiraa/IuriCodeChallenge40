import { ArrowUp } from '@/components'
import React from 'react'

const NetTotal = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full h-full flex flex-col justify-evenly">
      <p className="text-base">Total líquido</p>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-semibold">R$ 2.825,28</p>
        <div className="flex flex-row items-center w-fit gap-1 bg-emerald-500 bg-opacity-5 py-1 px-3 rounded-[50px] text-[12px] text-emerald-500">
          <ArrowUp />
          <p>+ 15%</p>
        </div>
      </div>
    </div>
  )
}

export default NetTotal

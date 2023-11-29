import { ArrowUp } from '@/components'
import React from 'react'

const SalesAmount = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <p className="text-base w-full">Total de vendas</p>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-semibold">R$ 3.235,21</p>
        <div className="flex flex-row w-fit items-center gap-1 bg-emerald-500 bg-opacity-5 py-1 px-3 rounded-[50px] text-[12px] text-emerald-500">
          <ArrowUp />
          <p>+ 11%</p>
        </div>
      </div>
    </div>
  )
}

export default SalesAmount

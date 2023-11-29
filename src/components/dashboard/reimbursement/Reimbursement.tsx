import { ArrowLow } from '@/components'
import React from 'react'

const Reimbursement = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <p className="text-base">Reembolso</p>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-semibold">R$ 345,00</p>
        <div className="flex flex-row items-center w-fit gap-1 bg-red-500 bg-opacity-5 py-1 px-3 rounded-[50px] text-[12px] text-red-500">
          <ArrowLow />
          <p>- 78%</p>
        </div>
      </div>
    </div>
  )
}

export default Reimbursement

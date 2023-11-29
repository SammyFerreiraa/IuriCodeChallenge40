const TransactionHistory = () => {
  return (
    <div className="bg-white pt-5 pl-8 pr-8 pb-11 rounded-xl w-full">
      <p className="mb-5 text-xl">Histórico de transações</p>
      <div className="flex flex-col items-center justify-center gap-4 w-full text-violet-500">
        <div className="flex w-full flex-row items-center justify-between py-2 pl-3 pr-5 bg-violet-500 bg-opacity-5 rounded-md">
          <p className="text-base font-medium">Ontem</p>
          <p className="text-lg font-semibold">R$ -540,32</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between py-2 pl-3 pr-5 bg-violet-500 bg-opacity-5 rounded-md">
          <p className="text-base font-medium">Quinta-Feira</p>
          <p className="text-lg font-semibold">R$ -273,90</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between py-2 pl-3 pr-5 bg-violet-500 bg-opacity-5 rounded-md">
          <p className="text-base font-medium">Segunda-Feira</p>
          <p className="text-lg font-semibold">R$ -1456,20</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory

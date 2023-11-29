import {
  CanceledPurchases,
  HeaderDashboard,
  NetTotal,
  Reimbursement,
  RevenueChart,
  SalesAmount,
  TransactionHistory,
} from '@/components/dashboard'

export default function Home() {
  return (
    <main className="bg-gray-100 flex flex-col pl-[143.2px] pr-[180px] flex-1 py-8 gap-5">
      <HeaderDashboard />
      {/** Receitas */}
      <div className="grid grid-cols-2 gap-8">
        <RevenueChart />
        <TransactionHistory />
      </div>
      {/* Informações */}
      <div className="grid grid-cols-4 justify-between items-center gap-8 w-full">
        <SalesAmount />
        <NetTotal />
        <CanceledPurchases />
        <Reimbursement />
      </div>
      <div className="h-full w-full bg-white py-5 rounded-xl px-8 gap-5 flex flex-col">
        <p className="text-xl">Histórico de compradores</p>
        <div className="flex flex-col gap-5 ">
          <div className="w-full grid grid-cols-6 items-center justify-between">
            <p className="text-base w-full">ID</p>
            <p className="text-base w-full">Data</p>
            <p className="text-base w-full">Nome</p>
            <p className="text-base w-full">Localização</p>
            <p className="text-base w-full">Valor</p>
            <p className="text-base w-full">Situação</p>
          </div>
          <>
            <div className="w-full grid grid-cols-6 items-center justify-between text-sm text-stone-500 leading-4">
              <p className="text-base w-full">#12345</p>
              <p className="text-base w-full">02/08/2023</p>
              <p className="text-base w-full">Roberto Santos</p>
              <p className="text-base w-full">Rio Grande do Sul</p>
              <p className="text-base w-full">R$ 15,00</p>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="h-2 w-2 bg-amber-300 rounded-full"></div>
                <p>Em análise</p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-blue-50" />
          </>
          <>
            <div className="w-full grid grid-cols-6 items-center justify-between text-sm text-stone-500 leading-5">
              <p className="text-base w-full">#08216</p>
              <p className="text-base w-full">01/08/2023</p>
              <p className="text-base w-full">Sammy Ferreira</p>
              <p className="text-base w-full">Ceará</p>
              <p className="text-base w-full">R$ 25,00</p>
              <div className="flex flex-row items-center gap-1 w-full">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <p>Aprovado</p>
              </div>
            </div>
            <div className="w-full h-0.5 bg-blue-50" />
          </>
        </div>
      </div>
    </main>
  )
}

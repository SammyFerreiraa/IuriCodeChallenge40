import {
  CanceledPurchases,
  HeaderDashboard,
  NetTotal,
  Reimbursement,
  RevenueChart,
  SalesAmount,
  TransactionHistory,
} from '@/components/dashboard'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Home() {
  return (
    <main className="bg-gray-100 flex h-fit flex-col px-5 2xl:pl-[143.2px] 2xl:pr-[180px] flex-1 gap-12 py-8 sm:py-10 2xl:ml-64 sm:px-16 md:px-20 lg:px-20 xl:px-24">
      <HeaderDashboard />
      {/** Receitas */}
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10">
        <RevenueChart />
        <TransactionHistory />
      </div>
      {/* Informações */}
      <div className="grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-1 w-full justify-center items-center gap-10">
        <SalesAmount />
        <NetTotal />
        <CanceledPurchases />
        <Reimbursement />
      </div>
      <Table className="bg-white rounded-xl py-5 px-12 h-16">
        <TableHeader>
          <TableRow className="">
            <TableHead className="text-neutral-800">ID</TableHead>
            <TableHead className="text-neutral-800">Nome</TableHead>
            <TableHead className="text-neutral-800">Valor</TableHead>
            <TableHead className="text-left text-neutral-800">
              Situação
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-sm text-stone-500">
            <TableCell className="font-medium">#08216</TableCell>
            <TableCell>Sammy Ferreira</TableCell>
            <TableCell>R$ 25,00</TableCell>
            <TableCell className="text-right">
              <div className="flex flex-row items-center justify-start gap-1 w-full">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <p>Aprovado</p>
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="text-sm text-stone-500">
            <TableCell className="font-medium">#08216</TableCell>
            <TableCell>Sammy Ferreira</TableCell>
            <TableCell>R$ 25,00</TableCell>
            <TableCell className="text-right">
              <div className="flex flex-row items-center justify-start gap-1 w-full">
                <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                <p>Aprovado</p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <div className="h-full w-full bg-white py-5 rounded-xl px-8 gap-10 flex flex-col">
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
      </div> */}
    </main>
  )
}

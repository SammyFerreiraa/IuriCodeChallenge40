const RevenueChart = () => {
  return (
    <div className="bg-white pt-5 pl-8 pr-14 pb-11 rounded-xl">
      <p className="mb-5 text-xl">Gráfico de receitas</p>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col text-base text-stone-500 gap-4">
          <p>2000</p>
          <p>1000</p>
          <p>500</p>
          <p>250</p>
          <p>0</p>
        </div>
        <div className="flex items-end gap-3 text-base text-stone-500">
          <div className="relative w-8 h-12 bg-violet-500 bg-opacity-25 rounded-md flex items-center justify-center">
            <p className="absolute -bottom-6">Fev</p>
          </div>
          <div className="w-8 h-16 bg-violet-500 bg-opacity-25 rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Mar</p>
          </div>
          <div className="w-8 h-28 bg-violet-500 bg-opacity-25 rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Abr</p>
          </div>
          <div className="w-8 h-16 bg-violet-500 bg-opacity-25 rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Mai</p>
          </div>
          <div className="w-8 h-36 bg-violet-500 bg-opacity-25 rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Jun</p>
          </div>
          <div className="w-8 h-full bg-violet-500 bg-opacity-25 rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Jul</p>
          </div>
          <div className="w-8 h-14 bg-violet-500  rounded-md relative flex items-center justify-center">
            <p className="absolute -bottom-6">Ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueChart

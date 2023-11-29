import { BellIcon, SearchIcon } from '@/components'

const HeaderDashboard = () => {
  return (
    <header className="flex flex-row w-full items-center justify-between">
      <div>
        <h1 className="text-[22px] font-medium leading-[34px]">Olá, Sammy</h1>
        <p className="text-stone-500 text-lg leading-[21px]">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>
      <div className="flex flex-row gap-11">
        <div className="flex flex-row gap-6 items-center justify-center">
          <SearchIcon />
          <BellIcon />
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <img
            src="./assets/logo.png"
            alt="perfil"
            className="rounded-full h-8 w-8 "
          />
          <p className="text-base">Sammy Ferreira</p>
        </div>
      </div>
    </header>
  )
}

export default HeaderDashboard

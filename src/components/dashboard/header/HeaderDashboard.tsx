import {
  BellIcon,
  CartIcon,
  GridIcon,
  ListIcon,
  PowerIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from '@/components'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const HeaderDashboard = () => {
  return (
    <header className="flex flex-col gap-8 w-full items-start sm:items-center justify-between sm:flex-row-reverse">
      <div className="flex flex-row sm:gap-11 justify-between w-full">
        <div className="2xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <ListIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <p className="text-[26px] font-semibold text-neutral-800 px-16 pt-9 pb-14">
                    <span className="text-violet-500">e</span>
                    Front
                  </p>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col pl-12 pr-14 gap-5 text-lg">
                <div className="flex gap-3 py-3 pl-3 cursor-pointer text-violet-500 items-center justify-start pr-3">
                  <GridIcon stroke="#9E6EFE" />
                  <p>Dashboard</p>
                </div>
                <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start pr-3">
                  <SaveIcon />
                  <p>Carteira</p>
                </div>
                <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start pr-3">
                  <CartIcon />
                  <p>Transações</p>
                </div>
                <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start pr-3">
                  <UsersIcon />
                  <p>Suporte</p>
                </div>
              </div>
              <div className="w-full h-0.5 bg-blue-50 rounded-[50px] my-7" />
              {/* Configs  */}
              <div className="flex flex-col pl-12 pr-14 gap-5 text-lg">
                <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start pr-3">
                  <SettingsIcon />
                  <p>Ajustes</p>
                </div>
                <div className="flex gap-3 py-3 pl-3 cursor-pointer text-red-500 items-center justify-start pr-3">
                  <PowerIcon />
                  <p>Desconectar</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center justify-end gap-10 w-full">
          <div className="flex flex-row gap-6 items-center justify-center">
            <SearchIcon />
            <BellIcon />
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            <img
              src="./assets/logo.png"
              alt="perfil"
              className="rounded-full h-8 w-8"
            />
            <p className="text-base hidden sm:block">Sammy Ferreira</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <h1 className="text-[22px] font-medium leading-[34px] w-fit">
          Olá, Sammy
        </h1>
        <p className="text-stone-500 text-lg leading-[21px] w-fit">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>
    </header>
  )
}

export default HeaderDashboard

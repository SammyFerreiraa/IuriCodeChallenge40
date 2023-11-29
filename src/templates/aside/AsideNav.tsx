import {
  CartIcon,
  GridIcon,
  PowerIcon,
  SaveIcon,
  SettingsIcon,
  UsersIcon,
} from '@/components'

const AsideNav = () => {
  return (
    <div className="fixed 2xl:flex h-screen flex-col justify-start bg-white hidden">
      <p className="text-[26px] font-semibold text-neutral-800 px-20 pt-11 pb-16">
        <span className="text-violet-500">e</span>
        Front
      </p>
      {/* Navigation  */}
      <div className="flex flex-col pl-12 pr-14 gap-3 text-lg">
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
      {/* Configs  */}
      <div className="flex flex-col pl-12 pr-14 gap-3 mt-11 text-lg">
        <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start pr-3">
          <SettingsIcon />
          <p>Ajustes</p>
        </div>
        <div className="flex gap-3 py-3 pl-3 cursor-pointer text-red-500 items-center justify-start pr-3">
          <PowerIcon />
          <p>Desconectar</p>
        </div>
      </div>
    </div>
  )
}

export default AsideNav

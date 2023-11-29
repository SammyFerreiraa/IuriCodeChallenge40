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
    <div className="flex h-screen flex-col justify-start bg-white">
      <p className="text-[26px] font-semibold text-neutral-800 px-20 pt-11 pb-16">
        <span className="text-violet-500">e</span>
        Front
      </p>
      {/* Navigation  */}
      <div className="flex flex-col pl-9 pr-12 gap-3 text-lg">
        <div className="flex gap-3 py-3 pl-3 cursor-pointer text-violet-500 items-center justify-start">
          <GridIcon stroke="#9E6EFE" />
          <p>Dashboard</p>
        </div>
        <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start">
          <SaveIcon />
          <p>Carteira</p>
        </div>
        <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start">
          <CartIcon />
          <p>Transações</p>
        </div>
        <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start">
          <UsersIcon />
          <p>Suporte</p>
        </div>
      </div>
      {/* Configs  */}
      <div className="flex flex-col pl-9 pr-12 gap-3 mt-11 text-lg">
        <div className="flex gap-3 py-3 pl-3 cursor-pointer items-center justify-start">
          <SettingsIcon />
          <p>Ajustes</p>
        </div>
        <div className="flex gap-3 py-3 pl-3 cursor-pointer text-red-500 items-center justify-start">
          <PowerIcon />
          <p>Desconectar</p>
        </div>
      </div>
    </div>
  )
}

export default AsideNav

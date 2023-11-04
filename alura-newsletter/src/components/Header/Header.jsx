import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
    return (
      <div className="p-5 sm:m-5 sm:rounded-xl bg-gray-800 flex justify-between items-center">
        <span className="text-gray-100">Olá,{user?.name || "Usuário"} </span>
        <h1 className="sm:hover:text-2xl sm:cursor-pointer text-gray-100 text-2xl sm:text-4xl">Alura Newsletter</h1>
        <ToggleTheme />
      </div>
    )
  }
  
  export default Header
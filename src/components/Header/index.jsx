import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Accueil
        </Link>
        <Link to="/survey/1" className="text-2xl font-bold">
          survey
        </Link>
        {/* <Link to="/resultas">Résultas</Link> */}
        <Link to="/freelances">Freelances</Link>
      </nav>
    </header>
  )
}

export default Header

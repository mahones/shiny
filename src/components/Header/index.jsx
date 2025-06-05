import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"

const StyleLink = styled(Link)`
  padding: 10px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  &:hover {
  }
  ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <StyleLink to="/">Accueil</StyleLink>
        <StyleLink to="/survey/1">Survey</StyleLink>
        {/* <StyleLink to="/resultas">Résultas</StyleLink> */}
        <StyleLink to="/freelances">Freelances</StyleLink>
        <StyleLink to="/survey/1" $isFullLink>Faire un test</StyleLink>
      </nav>
    </header>
  )
}

export default Header

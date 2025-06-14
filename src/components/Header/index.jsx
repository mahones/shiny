// Importation des dépendances nécessaires
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"
import LogoDark from "../../assets/shiny-logo_shiny-logo-dark.png"
// import LogoLight from "../../assets/shiny-logo_shiny-logo-light.png"

// Définition du style des liens de navigation
const StyleLink = styled(Link)`
  padding: 8px;
  color: ${colors.textLight};
  text-decoration: none;
  font-size: 18px;
  &:hover {
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
// Style du lien contenant le logo
const StyleLinkImage = styled(Link)`
  margin: 0;
  padding: 0;
`
// Style du header principal
const HeaderWrapper = styled.header`
  background-color: ${colors.backgroundDark};
  color: ${colors.textLight};
  padding: 20px;
`
// Style du contenu du header (flex)
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  margin: 0 auto;
`
// Style de la navigation
const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`
// Style du logo
const Logo = styled.img`
  height: 50px;
  width: auto;
`
// Composant Header pour l'affichage de la barre de navigation
function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        {/* Logo de l'application */}
        <StyleLinkImage to="/">
          <Logo src={LogoDark} alt="Ynov Logo" />
        </StyleLinkImage>
        {/* Liens de navigation */}
        <Nav>
          <StyleLink to="/">Accueil</StyleLink>
          {/* <StyleLink to="/resultas">Résultas</StyleLink> */}
          <StyleLink to="/freelances">Profiles</StyleLink>
          <StyleLink to="/survey/1" $isFullLink>
            Faire un test
          </StyleLink>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  )
}

// Exportation du composant Header
export default Header

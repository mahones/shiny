import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"
import LogoDark from "../../assets/shiny-logo_shiny-logo-dark.png"
// import LogoLight from "../../assets/shiny-logo_shiny-logo-light.png"

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

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo src={LogoDark} alt="Ynov Logo" />
        <Nav>
          <StyleLink to="/">Accueil</StyleLink>
          <StyleLink to="/survey/1">Survey</StyleLink>
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

const HeaderWrapper = styled.header`
  background-color: ${colors.backgroundDark};
  color: ${colors.textLight};
  padding: 20px;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: auto;
`

export default Header

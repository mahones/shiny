import { useContext } from "react"
import { ThemeContext } from "../../utils/context"
import styled from "styled-components"
import colors from "../../Colors"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const LightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <FooterContainer>
      <LightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "☀️" : "🌙"}
      </LightModeButton>
    </FooterContainer>
  )
}

export default Footer

// Importation des hooks et dépendances nécessaires
import { useContext } from "react"
import { ThemeContext } from "../../utils/context"
import styled from "styled-components"
import colors from "../../Colors"

// Définition du style du conteneur du footer
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`
// Style du bouton pour changer le mode (clair/sombre)
const LightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`
// Composant Footer pour afficher le bouton de changement de thème
function Footer() {
  // Récupération du thème et de la fonction de changement depuis le contexte
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <FooterContainer>
      {/* Bouton pour changer le mode d'affichage */}
      <LightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "☀️" : "🌙"}
      </LightModeButton>
    </FooterContainer>
  )
}

// Exportation du composant Footer
export default Footer

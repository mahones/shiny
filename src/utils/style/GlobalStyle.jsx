// Importation des hooks et dépendances nécessaires
import { useContext } from "react"
import { ThemeContext } from "../context"
import colors from "../../Colors"
import { createGlobalStyle } from "styled-components"

// Définition du style global de l'application avec styled-components
const StyledGlobalStyle = createGlobalStyle`
    body {
        padding: 20px;
        line-height: 1.6;
        flex-direction: column;
        background-color: ${({ isDarkMode }) => (isDarkMode ? colors.backgroundDark : colors.backgroundLight)};')};
        color: ${colors.textLight};
    }
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`
// Composant GlobalStyle pour appliquer le style global selon le thème
function GlobalStyle() {
  // Récupération du thème depuis le contexte
  const { theme } = useContext(ThemeContext)
  // Application du style global avec le bon mode
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />
}
// Exportation du composant GlobalStyle
export default GlobalStyle

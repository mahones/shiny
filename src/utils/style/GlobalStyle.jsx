import { useContext } from "react"
import { ThemeContext } from "../context"
import colors from "../../Colors"
import { createGlobalStyle } from "styled-components"
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
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  // Apply theme-specific styles if needed
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />
}
export default GlobalStyle

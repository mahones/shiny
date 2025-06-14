// Importation des hooks React nécessaires
import { useState, createContext } from "react"

// Création du contexte pour le thème (clair/sombre)
export const ThemeContext = createContext()

// Provider pour le contexte du thème, qui gère l'état et la bascule
export const ThemeProvider = ({ children }) => {
  // État du thème, par défaut 'dark'
  const [theme, setTheme] = useState("dark")

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  // Fournit le contexte à tous les enfants
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/index.css"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Header from "./components/Header"
import Error from "./components/Error"
import Freelances from "./pages/Freelances"
import Resultats from "./pages/Resultats"
import { createGlobalStyle } from "styled-components"
// on ajoute les couleurs
import colors from "./Colors"

// on ajoute le style global
const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px;
        line-height: 1.6;
        flex-direction: column;
        background-color: ${colors.backgroundDark};
        color: ${colors.textLight};
    }
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/resultas" element={<Resultats />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/index.css"
import Home from "./pages/Home"
import Survey from "./pages/Survey/Survey"
import Header from "./components/Header"
// on ajoute les composants
import ClientForm from "./components/ClientForm"
import FreelanceForm from "./components/FreelanceForm"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />}>
        {/* Ajouton les les éléments sous */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />  
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)

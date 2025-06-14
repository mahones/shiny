// Importation des dépendances nécessaires
import styled from "styled-components"
import colors from "../../Colors"
import Resume from "../../assets/undraw_Resume_re_hkth.svg"

// Définition du style du conteneur principal de la page d'accueil
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
// Style de la bulle principale contenant le texte et l'image
const Baloon = styled.div`
  padding: 70px;
  display: flex;
  gap: 20px;
  width: auto;
  height: auto;
  background-color: ${colors.backgroundDark2};
  h2 {
    color: ${colors.textLight};
    font-size: 50px;
    line-height: 1.6;
  }
  button {
    background-color: ${colors.primary};
    color: ${colors.textLight};
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: ${colors.backgroundDark};
    }
  }
`
// Composant principal Home pour la page d'accueil
function Home() {
  return (
    <HomeContainer>
      <Baloon>
        <div>
          {/* Texte d'accroche */}
          <h2>
            Repérez vos besoins,
            <br />
            on s’occupe du reste, <br /> avec les meilleurs talents
          </h2>
          {/* Bouton pour démarrer le test */}
          <button onClick={() => (window.location.href = "/survey/1")}>
            Faire un test
          </button>
        </div>
        <div>
          {/* Image illustrative */}
          <img src={Resume} alt="Résumé-image" />
        </div>
      </Baloon>
    </HomeContainer>
  )
}

// Exportation du composant Home
export default Home

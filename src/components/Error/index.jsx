// Importation des dépendances nécessaires
import styled from "styled-components"
import ErrorImage from "../../assets/undraw_page_not_found_su7k.svg"
import colors from "../../Colors"

// Définition du style du conteneur principal de la page d'erreur
const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
// Style de l'image d'erreur
const ErrorImageStyled = styled.img`
  width: 400px;
  height: 300px;
`
// Style du texte d'erreur
const ErrorText = styled.p`
  margin: 0;
`
// Style du titre d'erreur
const ErrorTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`
// Style du bloc principal d'erreur
const ErrorBody = styled.h2`
  background-color: ${colors.backgroundDark2};
  margin-top: 50px;
  margin-right: 300px;
  margin-left: 300px;
`
// Composant Error pour afficher une page d'erreur personnalisée
function Error() {
  return (
    <ErrorBody>
      <ErrorContainer>
        {/* Titre d'erreur */}
        <ErrorTitle>Oups...</ErrorTitle>
        {/* Image d'illustration */}
        <ErrorImageStyled src={ErrorImage} alt="Page not found" />
        {/* Message d'erreur */}
        <ErrorText>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorText>
      </ErrorContainer>
    </ErrorBody>
  )
}

// Exportation du composant Error
export default Error

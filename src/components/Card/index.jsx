// Importation des dépendances nécessaires
import DefaultPicture from "../../assets/profile.png"
import PropTypes from "prop-types"
import styled from "styled-components"
import colors from "../../Colors"

// Définition du style du label de la carte
const CardLabel = styled.span`
  color: ${colors.textLight};
  font-size: 22px;
  padding: 5px 10px;
  align-self: flex-start;
`
// Définition du style du titre de la carte
const CardTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`
// Définition du style de l'image de la carte
const CardImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`
// Définition du style du conteneur principal de la carte
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundDark2};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px ${colors.backgroundDark2};
  }
`

// Composant Card pour afficher un profil freelance
function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      {/* Affichage du label (métier) */}
      <CardLabel>{label}</CardLabel>
      {/* Affichage de la photo de profil */}
      <CardImage src={picture} alt="freelance" />
      {/* Affichage du nom */}
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}
// Définition des types attendus pour les props du composant Card
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
// Valeurs par défaut pour les props
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture,
}

// Exportation du composant Card
export default Card

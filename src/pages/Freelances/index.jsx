// Importation des dépendances React, composants, hooks et styles
import Card from "../../components/Card"
import styled from "styled-components"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"

// Définition du style du conteneur des cartes de profils freelances
const CardsContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 300px 300px;
  grid-template-columns: repeat(2, 1fr);
`
// Définition du style principal de la page freelances
const FreelancesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-left: 300px;
  padding-right: 300px;
`
// Style pour le paragraphe d'intro
const Paragraph = styled.p`
  font-size: 20px;
`

// Composant principal Freelances
function Freelances() {
  // Utilisation du hook useFetch pour récupérer les profils freelances depuis l'API
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/freelances",
  )
  // On extrait la liste des freelances de la réponse API
  const apiFreelanceProfiles = data?.freelancersList || []

  // Gestion de l'erreur API
  if (error) {
    return <span>Erreur lors du chargement des freelances.</span>
  }

  // Affichage du loader pendant le chargement, sinon la liste des profils
  return (
    <FreelancesStyle>
      {/* Texte d'introduction */}
      <Paragraph>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Paragraph>
      <h1>Trouvez votre prestataire</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {/* Affichage de chaque profil freelance sous forme de carte */}
          {apiFreelanceProfiles.map((profile, index) => (
            <Card
              key={profile.id || `${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </FreelancesStyle>
  )
}

// Exportation du composant Freelances
export default Freelances

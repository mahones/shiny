// import DefaultPicture from "../../assets/profile.png"
import Card from "../../components/Card"
import styled from "styled-components"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"
// Freelance profiles data
// const freelanceProfiles = [
//   {
//     name: "Jane Doe",
//     jobTitle: "Devops",
//     picture: DefaultPicture,
//   },
//   {
//     name: "John Doe",
//     jobTitle: "Developpeur frontend",
//     picture: DefaultPicture,
//   },
//   {
//     name: "Jeanne Biche",
//     jobTitle: "Développeuse Fullstack",
//     picture: DefaultPicture,
//   },
// ]
// styled-components
const CardsContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 300px 300px;
  grid-template-columns: repeat(2, 1fr);
`
const FreelancesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-left: 300px;
  padding-right: 300px;
`
const Paragraph = styled.p`
  font-size: 20px;
`
// Freelances component
function Freelances() {
  const { isLoading, data, error } = useFetch(
    "http://localhost:8000/freelances",
  )
  const apiFreelanceProfiles = data?.freelancersList || []

  if (error) {
    return <span>Erreur lors du chargement des freelances.</span>
  }

  return (
    <FreelancesStyle>
      <Paragraph>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Paragraph>
      <h1>Trouvez votre prestataire</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
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

export default Freelances

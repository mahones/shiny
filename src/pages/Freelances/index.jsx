import DefaultPicture from "../../assets/profile.png"
import Card from "../../components/Card"
import styled from "styled-components"

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <FreelancesStyle>
      <Paragraph>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Paragraph>
      <h1>Trouvez votre prestataire</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreelancesStyle>
  )
}
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
export default Freelances

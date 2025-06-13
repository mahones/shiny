// import DefaultPicture from "../../assets/profile.png"
import Card from "../../components/Card"
import styled from "styled-components"
import { useState, useEffect } from "react"
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
  const [loading, setLoading] = useState(false)
  const [apiFreelanceProfiles, setFreelanceProfiles] = useState([])

  useEffect(() => {
    async function fetchFreelancers() {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:8000/freelances")
        const data = await response.json()
        // L'API retourne { freelancersList: [...] }
        setFreelanceProfiles(data.freelancersList || [])
      } catch (error) {
        console.error("Error fetching freelancers:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchFreelancers()
  }, [])
  return (
    <FreelancesStyle>
      <Paragraph>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Paragraph>
      <h1>Trouvez votre prestataire</h1>
      {loading ? (
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

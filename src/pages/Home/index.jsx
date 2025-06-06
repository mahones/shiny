import styled from "styled-components"
import colors from "../../Colors"
import Resume from "../../assets/undraw_Resume_re_hkth.svg"

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`
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
function Home() {
  return (
    <HomeContainer>
      <Baloon>
        <div>
          <h2>
            Repérez vos besoins,
            <br />
            on s’occupe du reste, <br /> avec les meilleurs talents
          </h2>
          <button onClick={() => window.location.href = "/survey/1"}>
            Faire un test
          </button>
        </div>
        <div>
          <img src={Resume} alt="Résumé-image" />
        </div>
      </Baloon>
    </HomeContainer>
  )
}

export default Home

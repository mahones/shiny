import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"

// styled-components
const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const QuestionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  div {
    display: flex;
    gap: 40px;
    margin-top: 20px;
    a {
      text-decoration: none;
      color: ${colors.textLight};
      &:hover {
        color: ${colors.primary};
      }
    
    }
  }
`
const QuestionButton = styled.button`
      background-color: ${colors.backgroundDark2};
      color: ${colors.textLight};
      padding:  30px 70px 30px 70px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
          background-color: ${colors.backgroundDark};
          border: 1px solid ${colors.primary};
        }
`
// Survey component
function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumber - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <QuestionWrapper>
      <QuestionContainer>
        <h1>Question {questionNumber}</h1>
        <p>
          Votre application doit-elle impérativement apparaître en premier dans
          les résultats de recherche ?
        </p>
        <div>
          <QuestionButton>Oui</QuestionButton>
          <QuestionButton>Non</QuestionButton>
        </div>
        <div>
          <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
          {questionNumberInt === 10 ? (
            <Link to={`/resultas`}>Résultat</Link>
          ) : (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
          )}
        </div>
      </QuestionContainer>
    </QuestionWrapper>
  )
}


export default Survey

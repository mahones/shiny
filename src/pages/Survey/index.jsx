import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"
import { useContext, useState, useEffect } from "react"
import { Loader } from "../../utils/Atoms"
import { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/hooks"

// styled-components
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
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
  padding: 30px 70px 30px 70px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
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
  // const [surveyData, setSurveyData] = useState({})
  const [dataloading, setDataloading] = useState(false)
  const { saveAnswers, answers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  // Questionner mon api
  //  useEffect(() => {
  //   async function fetchSurveyData() {
  //     setDataloading(true)
  //     // Simulate fetching data from an API
  //     try {
  //       const response = await fetch("http://localhost:8000/survey")
  //       const {surveyData} = await response.json()
  //       setSurveyData(surveyData)
  //     } catch (error) {
  //       console.error("Error fetching survey data:", error)
  //     } finally {
  //       setDataloading(false)
  //     }
  //   }
  //   fetchSurveyData()
  // }, [])
  const { isLoading, data, error } = useFetch("http://localhost:8000/survey")
  useEffect(() => {
    setDataloading(isLoading)
  }, [isLoading])
  const { surveyData = {} } = data || {}
  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <SurveyContainer>
      <QuestionWrapper>
        <QuestionContainer>
          <h1>Question {questionNumber}</h1>
          {dataloading ? <Loader /> : <p>{surveyData[questionNumber]}</p>}
          <div>
            <QuestionButton
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}>
              Oui
            </QuestionButton>
            <QuestionButton
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}>
              Non
            </QuestionButton>
          </div>
          <div>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {surveyData[questionNumberInt + 1] ? (
              <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            ) : (
              <Link to={`/resultas`}>Résultat</Link>
            )}
          </div>
        </QuestionContainer>
      </QuestionWrapper>
    </SurveyContainer>
  )
}

export default Survey

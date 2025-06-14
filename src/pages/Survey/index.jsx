// Importation des hooks, contextes et outils nécessaires
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../Colors"
import { useContext, useState, useEffect } from "react"
import { Loader } from "../../utils/Atoms"
import { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/hooks"

// Définition des styled-components pour la mise en page
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
// Composant principal Survey pour le questionnaire
function Survey() {
  // Récupération du numéro de question depuis l'URL
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumber - 1
  const nextQuestionNumber = questionNumberInt + 1
  // Gestion du chargement
  const [dataloading, setDataloading] = useState(false)
  // Récupération des réponses et de la fonction de sauvegarde depuis le contexte
  const { saveAnswers, answers } = useContext(SurveyContext)

  // Fonction pour sauvegarder la réponse de l'utilisateur
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  // Utilisation du hook useFetch pour récupérer les questions depuis l'API
  const { isLoading, data, error } = useFetch("http://localhost:8000/survey")
  useEffect(() => {
    setDataloading(isLoading)
  }, [isLoading])
  // On récupère les questions depuis la réponse API
  const { surveyData = {} } = data || {}
  if (error) {
    return <span>Il y a un problème</span>
  }

  // Affichage du composant
  return (
    <SurveyContainer>
      <QuestionWrapper>
        <QuestionContainer>
          {/* Affichage du numéro de la question */}
          <h1>Question {questionNumber}</h1>
          {/* Affichage du loader ou de la question */}
          {dataloading ? <Loader /> : <p>{surveyData[questionNumber]}</p>}
          <div>
            {/* Boutons Oui/Non pour répondre à la question */}
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
            {/* Navigation entre les questions ou vers les résultats */}
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

// Exportation du composant Survey
export default Survey

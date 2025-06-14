import { useContext } from "react"
import { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? "" : "&"
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, "")
}

function Resultats() {
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)
  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`,
  )
  console.log("API results response:", data)
  if (error) {
    return <span>Il y a un problème</span>
  }
  const resultatsData = data?.resultsData || []

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <h1>Les compétences dont vous avez besoin</h1>
      <div>
        {resultatsData &&
          resultatsData.map((result, index) => (
            <div key={`result-title-${index}-${result.title}`}>
              {result.title}
              {index === resultatsData.length - 1 ? "" : ","}
            </div>
          ))}
      </div>
      <div>
        {resultatsData &&
          resultatsData.map((result, index) => (
            <div key={`result-detail-${index}-${result.title}`}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Resultats

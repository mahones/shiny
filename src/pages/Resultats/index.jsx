// Importation des hooks et contextes nécessaires
import { useContext } from "react"
import { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/hooks"
import { Loader } from "../../utils/Atoms"

// Fonction utilitaire pour formater les paramètres de la requête API à partir des réponses du questionnaire
function formatFetchParams(answers) {
  // On récupère tous les numéros de réponses
  const answerNumbers = Object.keys(answers)

  // On construit la chaîne de paramètres pour l'URL
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? "" : "&"
    // Exemple : a1=true&a2=false
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, "")
}

// Composant principal pour l'affichage des résultats
function Resultats() {
  // On récupère les réponses du contexte SurveyContext
  const { answers } = useContext(SurveyContext)
  // On formate les réponses pour la requête API
  const fetchParams = formatFetchParams(answers)
  // On utilise le hook useFetch pour interroger l'API avec les réponses
  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`,
  )
  // Affiche la réponse API dans la console pour debug
  console.log("API results response:", data)
  // Gestion de l'erreur API
  if (error) {
    return <span>Il y a un problème</span>
  }
  // On récupère la liste des résultats depuis la réponse API
  const resultatsData = data?.resultsData || []

  // Affichage du loader pendant le chargement, sinon les résultats
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {/* Titre principal */}
      <h1>Les compétences dont vous avez besoin</h1>
      {/* Affichage des titres des résultats (séparés par une virgule sauf le dernier) */}
      <div>
        {resultatsData &&
          resultatsData.map((result, index) => (
            <div key={`result-title-${index}-${result.title}`}>
              {result.title}
              {index === resultatsData.length - 1 ? "" : ","}
            </div>
          ))}
      </div>
      {/* Affichage détaillé de chaque résultat (titre + description) */}
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

// Exportation du composant Resultats pour utilisation ailleurs dans l'application
export default Resultats

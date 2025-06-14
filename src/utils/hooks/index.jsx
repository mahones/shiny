// Importation des hooks React nécessaires
import { useState, useEffect } from "react"

// Hook personnalisé pour effectuer des requêtes API et gérer le chargement et les erreurs
export function useFetch(url) {
  // État pour stocker les données récupérées
  const [data, setData] = useState({})
  // État pour indiquer si le chargement est en cours
  const [isLoading, setLoading] = useState(true)
  // État pour indiquer s'il y a une erreur
  const [error, setError] = useState(false)

  useEffect(() => {
    // Si l'URL n'est pas définie, on ne fait rien
    if (!url) return
    setLoading(true)
    // Fonction asynchrone pour récupérer les données
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  // Retourne l'état du chargement, les données et l'erreur
  return { isLoading, data, error }
}

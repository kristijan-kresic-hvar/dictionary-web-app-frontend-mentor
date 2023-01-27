import { API_URL } from '../constants'

export const getWordDefinition = async (word: string): Promise<string> => {
  const response = await fetch(`${API_URL}${word}`)

  if (!response.ok) {
    throw new Error('Failed to fetch word definition')
  }

  const data = await response.json()
  return data
}

import { API_URL } from '../constants'

export const getWordDefinition = async (word: string): Promise<string> => {
  const timeout: number = 5000
  const controller: AbortController = new AbortController()
  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout)
  const response = await fetch(`${API_URL}${word}`, {
    signal: controller.signal
  })
  clearTimeout(timeoutId)

  if (!response.ok) {
    throw new Error('Failed to fetch word definition')
  }

  const data = await response.json()
  return data
}

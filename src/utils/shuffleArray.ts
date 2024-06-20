import { ITopKeyword } from '@components/search-sheet/SearchSheet.type'

const shuffleArray = (array: string[] | ITopKeyword[]) => {
  for (let i = array?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default shuffleArray

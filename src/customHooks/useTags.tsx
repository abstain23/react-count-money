import {useState} from 'react'

export const useTags = () => {
  const [tagsData, setTagsData] = useState<Array<string>>(['衣', '食', '住', '行'])
  return {tagsData, setTagsData}
}


import {useState} from 'react'
import createId from 'lib/createId'

type tagType = {
  id:number,
  name:string
}
const defaultTags:tagType[] = [
  {id:createId(),name:'衣'},
  {id:createId(), name:'食'},
  {id:createId(), name:'住'},
  {id:createId(), name:'行'},
  ]
export const useTags = () => {
  const [tagsData, setTagsData] = useState<Array<tagType>>(defaultTags)
  return {tagsData, setTagsData}
}


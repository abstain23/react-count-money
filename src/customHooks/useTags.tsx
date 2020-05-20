import {useState, useEffect} from 'react'
import createId from 'lib/createId'

type tagType = {
  id:number,
  name:string,
  note?:string
}
const defaultTags:tagType[] = [
  {id:createId(),name:'衣'},
  {id:createId(), name:'食'},
  {id:createId(), name:'住'},
  {id:createId(), name:'行'},
  ]

export const useTags = () => {
  // console.log('初始化')
  const [tagsData, setTagsData] = useState<Array<tagType>>(defaultTags)

  useEffect(() => {
    console.log('初始化')
  },[tagsData])

  const findTagById = (id:number) => tagsData.find(item => item.id === id)
  return {tagsData, setTagsData, findTagById}
}


import {useState, useEffect} from 'react'
import createId from 'lib/createId'
import useUpdate from 'customHooks/useUpdate'

type tagType = {
  id:number,
  name:string,
  note?:string
}
// const defaultTags:tagType[] =

export const useTags = () => {
  // console.log('初始化')
  const [tagsData, setTagsData] = useState<Array<tagType>>([])
  useEffect(() => { //didMount
    console.log('tags didmount')
    let localTagsData:tagType[] = JSON.parse(window.localStorage.getItem('tagsData')||'[]') 
    if(localTagsData.length === 0) {
      localTagsData =  [
        {id:createId(),name:'衣'},
        {id:createId(), name:'食'},
        {id:createId(), name:'住'},
        {id:createId(), name:'行'},
        ]
    }
    setTagsData(localTagsData)
    // console.log(tagsData)
    // console.log('after settag')
  },[])
  // const count = useRef(0)
  // useEffect(() =>{
  //   count.current += 1
  //   console.log('count:'+count.current)
  // })
  // useEffect(() => {
  //   console.log(tagsData)
  //   window.localStorage.setItem('tagsData', JSON.stringify(tagsData))
  //   console.log('set local')
  // },[tagsData])

  useUpdate(() => {
    console.log('tags uapdate')
    window.localStorage.setItem('tagsData', JSON.stringify(tagsData))
  }, [tagsData])
  const findTagById = (id:number) => tagsData.find(item => item.id === id)
  return {tagsData, setTagsData, findTagById}
}


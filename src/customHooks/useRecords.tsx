import {useState, useEffect} from 'react'
import useUpdate from './useUpdate'
import {message} from 'antd'
// import { useHistory } from 'react-router-dom'




export type recordItemType = {
  tagsId: number[],
  note:string,
  category: 1 | 0,
  amount: string,
  total: string,
  creatAt: string,
  id?:number
}

 export type newRecordItem = Omit<recordItemType,'createAt'>


export const useRecords = () => {
  // const history = useHistory()
  const [records, setRecords] = useState<recordItemType[]>([])
  useEffect(() => {
    // console.log('record did monut')
    let localRecord:recordItemType[] = JSON.parse(window.localStorage.getItem('listRecord') || '[]')
    // console.log(localRecord)
    setRecords(localRecord)
  },[])
  // useEffect(() => {
  //   if(records.length > oldlen.current) {
  //     history.push('/tags')
  //   }
  // },[records.length])
  useUpdate(() => {
    // console.log('record update')
    window.localStorage.setItem('listRecord', JSON.stringify(records))
  },records)

  const addRecord = (newRecord:newRecordItem):Promise<{}> => {
    return new Promise((resolve,reject) => {
      if(newRecord.tagsId.length === 0) {
        message.error({content:'请至少选择一个标签', duration:1})
        return reject()
      }
      if(newRecord.total === '0') {
       message.error({content:'请输入金额',duration:1})
       return reject()
      }
      const record = {...newRecord, creatAt:(new Date()).toString()}
      const newRecords = [...records, record]
      // console.log(newRecords)
      setRecords([...newRecords])
      message.success({content:'添加成功',duration:1})
      // history.push('/tags')
      resolve()
    })
  }

  const delRecord = (id:number) => {
    records.splice(id,1)
    window.localStorage.setItem('listRecord', JSON.stringify(records))
    setRecords([...records])
    message.success({content:'删除成功',duration:1})
  }
  return {addRecord, records, delRecord}
}


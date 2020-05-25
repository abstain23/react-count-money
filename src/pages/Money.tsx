import React, { useState } from 'react'
import Layout from 'components/Layout'


import styled from 'styled-components'
//UI部分
import TagsSection from './MoneyUi/TagsSection'
import NotesSection from './MoneyUi/NotesSection'
import CateGorySection from './MoneyUi/CateGorySection'
import NumberPadSection from './MoneyUi/NumberPadSection'
import {useRecords ,newRecordItem} from 'customHooks/useRecords'
import { useHistory } from 'react-router-dom'



const MyLayout = styled(Layout)`
display:flex;
border:1px solid red;
`
type categoryType = 0 | 1 

// type tagObj = {
//     tagsId:number,
//     category:categoryType,
//     note?:string,
//     total?:string
// }
type selectedType = Omit<newRecordItem, 'total'>
const Money:React.FC = () => {
    const history = useHistory()
    const [selected, setSelected] = useState({
        tagsId: [] as number[],
        note:'',
        category: 0 as categoryType,
        amount: '0'
    } as selectedType)
    const {addRecord} = useRecords()
    const handleChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
        // console.log(o)
    }
    // handleChange({})
    const handleSubmit = (total:string) => {
        // const tagObj:Partial<typeof selected> = {
        //     tagsId:[1],
        // }
        let tagObj = {...selected,total}
        // console.log(tagObj)
    // console.log(addRecord(tagObj))
        // if(addRecord(tagObj)) {
        //     console.log('11')
        //     // history.push('/tags')
        //     setTimeout(() => {
        //         history.push('/tags')
        //     })
        // }
        addRecord(tagObj).then(() => {
            history.push('/tags')
        }).catch(() => console.log('缺少必填项'))
    }
    return (
        
        <MyLayout scrollTop = {999}>
            <div>
                {/* {selected.tagsId}
                <hr/>
                {selected.note}
                <hr/>
                {selected.category === 0 ? '收入' : '支出'}
                <hr/>
                {selected.amount} */}
            </div>
            <CateGorySection value={selected.category as (0 | 1)}
                             onChange={category => handleChange({category})}
            />
            <TagsSection value={selected.tagsId}
                         onChange={tagsId => handleChange({tagsId})}
                         />
            <NotesSection value={selected.note}
                          onChange={note => handleChange({note})}
            />
            <NumberPadSection value={selected.amount} 
                              onOk={(total:string) => handleSubmit(total)}
                              onChange={amount => handleChange({amount})}
            />
        </MyLayout>
    )
}

export default Money
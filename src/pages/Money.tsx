import React, { useState } from 'react'
import Layout from 'components/Layout'


import styled from 'styled-components'
//UI部分
import TagsSection from './MoneyUi/TagsSection'
import NotesSection from './MoneyUi/NotesSection'
import CateGorySection from './MoneyUi/CateGorySection'
import NumberPadSection from './MoneyUi/NumberPadSection'

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

const Money:React.FC = () => {
    const [selected, setSelected] = useState({
        tagsId: [] as number[],
        note:'',
        category: 0 as categoryType,
        amount: '0'
    })
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
        let localRecord = JSON.parse(window.localStorage.getItem('listRecord') || '[]')
        localRecord.push(tagObj)
        window.localStorage.setItem('listRecord',JSON.stringify(localRecord))
    }
    return (
        
        <MyLayout>
            <div>
                {/* {selected.tagsId}
                <hr/>
                {selected.note}
                <hr/>
                {selected.category === 0 ? '收入' : '支出'}
                <hr/>
                {selected.amount} */}
            </div>
            <TagsSection value={selected.tagsId}
                         onChange={tagsId => handleChange({tagsId})}
                         />
            <NotesSection value={selected.note}
                          onChange={note => handleChange({note})}
            />
            <CateGorySection value={selected.category as (0 | 1)}
                             onChange={category => handleChange({category})}
            />
            <NumberPadSection value={selected.amount} 
                              onOk={(total:string) => handleSubmit(total)}
                              onChange={amount => handleChange({amount})}
            />
        </MyLayout>
    )
}

export default Money
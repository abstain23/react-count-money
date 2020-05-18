import React from 'react'
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


// const c = 
function Money() {
    return (
        <MyLayout>
            <TagsSection />
            <NotesSection />
            <CateGorySection />
            <NumberPadSection />
        </MyLayout>
    )
}

export default Money
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
            <CateGorySection>
                <ul>
                    <li className='selected'>收入</li>
                    <li>支出</li>
                </ul>
            </CateGorySection>
            <NumberPadSection>
                <div className='output'>100</div>
                <div className='pad clearfix'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='ok'>OK</button>
                    <button className='zero'>0</button>
                    <button className='point'>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money
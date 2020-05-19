import React, {FC, useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
font-size:24px;
box-shadow:0 -1px 1px rgba(0,0,0,.25);
ul {
    display:flex;
    margin:0;
    /* background:white; */
    li {
        flex:1;
        text-align:center;
        padding: 18px 0;
        &.selected {
            position:relative;
            color:#1890ff;
            &::after {
                content:'';
                position:absolute;
                display:block;
                background:#1890ff;
                bottom:0;
                left:0;
                height:2px;
                width:100%;
            }
        }
    }
}
`
type categoryType = 0 | 1 
type Props = {
    value: categoryType,
    onChange:(category: categoryType) => void
}

const CateGorySection:FC<Props> = (props) => {
    const tabsMap = {'收入':'', '支出':''}
    type Y = typeof tabsMap
    type X = keyof Y
    // const [tabs] = useState<('收入'| '支出')[]>(['收入','支出'])
    const [tabs] = useState<X[]>(['收入','支出'])
    // const [currentIndex, setCurrentIndex] = useState(0)
    const {value:currentIndex, onChange} = props
    return (
        <Wrapper>
            <ul>
                {
                    tabs.map((tab:'收入'| '支出',index) => (
                        <li key={tab} 
                            onClick={() => onChange(index as categoryType)}
                            className={currentIndex === index ? 'selected' : ''}
                            >{tab}</li>
                    ))
                }
            </ul>
        </Wrapper>
    )
}

export default CateGorySection
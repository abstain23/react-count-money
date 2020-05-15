import React, {useState} from 'react'
import Layout from 'components/Layout'
import {Tag, Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import styled from 'styled-components'
//UI部分
import TagsSection from './MoneyUi/TagsSection'
import NotesSection from './MoneyUi/NotesSection'
import CateGorySection from './MoneyUi/CateGorySection'
import NumberPadSection from './MoneyUi/NumberPadSection'

const MyLayout = styled(Layout)`
/* display:flex;
border:1px solid red;
flex-direction: column; */
`

const {CheckableTag} = Tag

function Money() {
    const tagsData:Array<string> = ['衣','食','住','行']
    const [selectedTags,setSelectedTags] = useState(['衣'])
    // const c = <const> tagsData
    // const tagsDataType = ['衣','食','住','行'] as const
    // type tagProp = typeof tagsDataType[number] 
    type tagProp = typeof tagsData[number]
    const tagsHandleChange = (tag:tagProp, checked:boolean) => {
        // console.log(tag, checked)
        const newSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
        setSelectedTags(newSelectedTags)
    }
    return (
        <MyLayout>
            <TagsSection>
                <ol>
                {tagsData.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => tagsHandleChange(tag, checked)}
                        >
                        {tag}
                        </CheckableTag>
                ))}   
                </ol>
                <Button shape='round' type='primary' size='middle' ghost><PlusOutlined/>增加标签</Button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input placeholder='这里添加备注'/>
                </label>
            </NotesSection>
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
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money

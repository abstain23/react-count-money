import React, {useState} from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import {Tag, Button, InputNumber} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

const {CheckableTag} = Tag

const TagsSection = styled.section`
background:#fff;
padding:12px 4px;
border:1px solid red;
ol {
    font-size:14px;
    .ant-tag-checkable {
        border: 1px solid #d9d9d9;
        border-radius:18px;
        padding:3px 18px;
        margin:8px 12px;
    }
}
> .ant-btn {
        margin-left:12px;
        font-family:inherit;
        font-size:12px;
    }
`
const NotesSection = styled.section`
`
const CateGorySection = styled.section`
`
const NumberPadSection = styled.section`
`

function Money() {
    const tagsData = ['衣','食','住','行']
    const [selectedTags,setSelectedTags] = useState(['衣'])
    const handleChange = (tag:string, checked:boolean) => {
        // console.log(tag, checked)
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
        setSelectedTags(nextSelectedTags)
    }
    return (
        <Layout>
            <TagsSection>
                <ol>
                {tagsData.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => handleChange(tag, checked)}
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
                    <InputNumber />
                </label>
            </NotesSection>
            <CateGorySection>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </CateGorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
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
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}

export default Money

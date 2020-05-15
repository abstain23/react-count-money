import React, {useState} from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'
import {Tag, Button} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

const {CheckableTag} = Tag


const TagsSection = styled.section`
background:#fff;
padding:12px 4px;
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
background:#f5f5f5;
font-size:12px;
padding:0 16px;
> label {
    display:flex;
    align-items: center;
    span {
        margin-right:16px;
        white-space:nowrap;
    }
    input {
        width:100%;
        height:72px;
        background:none;
        border:none;
        &:focus {
            outline:none;
        }
    }
}
`
const CateGorySection = styled.section`
font-size:24px;
ul {
    display:flex;
    margin:0;
    background:#c4c4c4;
    li {
        flex:1;
        text-align:center;
        padding: 18px 0;
        &.selected {
            position:relative;
            &::after {
                content:'';
                position:absolute;
                display:block;
                background:#333;
                bottom:0;
                left:0;
                height:3px;
                width:100%;
            }
        }
    }
}
`
const NumberPadSection = styled.section`
`

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
    const cateHandleChange = (key:string) => {
        console.log(key)
        console.log(typeof key)
    }
    return (
        <Layout>
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

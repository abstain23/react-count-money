import React, { useState, useRef, useEffect, RefObject, FC } from 'react'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import { Tag, Input } from 'antd'
const { CheckableTag } = Tag

const Wrapper = styled.section`
background:#fff;
padding:12px 4px;
flex-grow:1;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:left;
.ant-tag{
        border: 1px solid #d9d9d9;
        border-radius:18px;
        padding:3px 18px;
        margin:8px 12px;
        &.site-tag-plus {
            background: #fff;
            border-style: dashed;
            width:100px;
        }
    }
.ant-input {
    margin-left:12px;
}
ol {
    font-size:14px;
}
> .ant-btn {
        margin-left:12px;
        font-family:inherit;
        font-size:12px;
        width:100px;
    }
`

const TagsSection: FC = () => {
    const [tagsData, setTagsData] = useState<Array<string>>(['衣', '食', '住', '行'])
    const [selectedTags, setSelectedTags] = useState<string []>([''])
    const [inputVisible,setInputVisible] = useState<boolean>(false)
    const [inputValue,setInputValue] = useState<string>('')
    let inputEl:RefObject<Input>= useRef(null)
    useEffect(() => {
        // console.log('cc')
        // console.log(inputEl.current)
        if(inputVisible) {
            inputEl.current && inputEl.current.focus()
        }
    }, [inputVisible])
    // const obj = {name:'xx'}
    // const c = (keyof obj)
    // const tagsDataType = ['衣','食','住','行'] as const
    // type tagProp = typeof tagsDataType[number] 
    // type key = keyof  (typeof tagsData)
    type tagProp = typeof tagsData[number]
    const tagsHandleChange = (tag: tagProp, checked: boolean) => {
        // console.log(tag, checked)
        const newSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
        setSelectedTags(newSelectedTags)
    }
    const handleInputChange = (e:any) => {
        setInputValue(e.target!.value)
    }
    const handleInputConfirm = () => {
        if (inputValue && tagsData.indexOf(inputValue) === -1) {
            setTagsData([...tagsData, inputValue])
          }
          setInputVisible(false)
          setInputValue('')
    }
    const showInput = () => {
        setInputVisible(() => {
            return true
        })
        // console.log(inputVisible)

        // setTimeout(() => {
        //  inputEl.current!.focus()   
        // });
    }
    return (
        <Wrapper>
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
                {/* <input ref={inputEl}></input> */}
            </ol>
            {/* <Button shape='round' type='primary' size='middle' ghost><PlusOutlined/>增加标签</Button> */}
            {inputVisible && (
                <Input
                    ref={inputEl}
                    type="text"
                    size="small"
                    style={{ width: 100 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" onClick={showInput}>
                    <PlusOutlined /> 新标签
                </Tag>
            )}
        </Wrapper>
    )
}


export default TagsSection
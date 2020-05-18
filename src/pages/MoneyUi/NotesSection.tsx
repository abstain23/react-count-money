import React, { FC, useState, useRef} from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
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

const NotesSection: FC = () => {
    const [note, setNote] = useState<string>('')
    const inputEl = useRef<HTMLInputElement>(null)
    // console.log(note)
    const handleBlur = () => {
        inputEl.current && setNote(inputEl.current.value)
    }
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input placeholder='这里添加备注' 
                       defaultValue={note}
                       // onChange={(e) => setNote(e.target.value)}
                       ref={inputEl}
                        onBlur={handleBlur}
                       />
            </label>
        </Wrapper>
    )
}

export default NotesSection
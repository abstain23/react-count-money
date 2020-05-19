import React, { FC, useRef} from 'react'
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
type Props = {
    value: string,
    onChange:(note:string) => void
}

const NotesSection: FC<Props> = (props) => {
    // const [note, setNote] = useState<string>('')
    const {value:note, onChange} = props
    const inputEl = useRef<HTMLInputElement>(null)
    // console.log(note)
    const handleBlur = () => {
        inputEl.current && onChange(inputEl.current.value)
        inputEl.current!.value =''
        // console.log(note)
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
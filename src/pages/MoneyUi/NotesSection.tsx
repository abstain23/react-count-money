import styled from 'styled-components'
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

export default NotesSection